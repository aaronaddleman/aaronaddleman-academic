---
title: "Sbc and Sensors"
summary: "Sensors monitoring things with a single board computer"
authors: []
tags: ['sbc']
categories: []
date: 2020-11-19T10:59:58-08:00
lastmod: 2020-11-07T10:00:08-08:00
featured: false
draft: true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

Tracking my refrigerators tempurature was a fun way to get started. Now, I cant stop thinking or more importantly, buying, different small sensors to measure the world around me. I should start back in the beginning of how this all started.

A while ago, our refrigerator in the garage seemed like it was not holding a good tempurature in the main area or in the freezer area. So I set out to see if we could record its tempurature. I went a bit far with this project and it caused me to build a couple of things: Kubernetes on Raspberry Pi, and Prometheus.

Making single board computers that record the values from a sensor and offer them to Prometheus was fun and below are the steps I took to do so:

## the temp sensor

### hardware

1. esp8266
2. 1-wire sensor
3. transistors

### software

```c++
/*
 * ESP8266-01 with multiple DS10B20 temperature sensors
 * reads sensors asyncronsly for less blocking time
 * 
 * Use GPIO2 for the sensors, a single 4.7K pullup resisor is needed.
 * 
 */
#include <ESP8266WiFi.h>
#include <WiFiUdp.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include <Statsd.h>


//wifi
// Create the UDP object and configure the StatsD client.
WiFiUDP udp;  // or EthernetUDP, as appropriate.
// The last argument is the comma separated list of tags to be applied to
// all metrics emitted by this client.
Statsd statsd(udp, "192.168.86.240", 9125, "host=ESP-EE002D");
// wifi settings
const char* ssid     = "SSID_Name";
const char* password = "ssid_password";

// sensor info
const int nsensors = 1;
byte sensors[][8] = {
   { 0x28, 0xAA, 0xFB, 0x2B, 0x54, 0x14, 0x01, 0xD3 }
};
int16_t tempraw[nsensors];
unsigned long nextprint = 0;

OneWire  ds(5);  // on pin 2 (a 4.7K pullup is necessary)

void setup() {
  // set led
  pinMode(0, OUTPUT);
  // start serial
  Serial.begin(115200);
  delay(10);

  Serial.println();
  Serial.println();
  
  // Connect to WiFi network
  WiFi.begin(ssid, password);
  Serial.print("\n\r \n\rWorking to connect");
  
  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    digitalWrite(0, LOW);
    delay(500);
    digitalWrite(0, HIGH);
    Serial.print(".");
  }

  // Once connected tell client to begin.
  statsd.begin();
  // If sending to DogStatsd or gostatsd use the Datadog tag style.
  // stats.setTagStyle(TAG_STYLE_DATADOG);
  // If sending to Telegraf use its own tag style.
  // statsd.setTagStyle(TAG_STYLE_TELEGRAF);
}

void loop()
{
  ds18process(); //call this every loop itteration, the more calls the better.

  if(millis() > nextprint) {
    Serial.print("Temp F: ");
    for(byte j=0; j<nsensors; j++){
      Serial.print(j); Serial.print("=");
      digitalWrite(0, HIGH);
      Serial.print(ds18temp(1, tempraw[j])); Serial.print("  ");
      statsd.gauge("temp.fahrenheit", ds18temp(1, tempraw[j]), "sensor,location=garage-refrigerator", 1.0);
      Serial.println("sent metric");
      digitalWrite(0, LOW);
    }
    Serial.println();
    nextprint = millis() + 1000; //print once a second
  }
}

/* Process the sensor data in stages.
 * each stage will run quickly. the conversion 
 * delay is done via a millis() based delay.
 * a 5 second wait between reads reduces self
 * heating of the sensors.
 */
void ds18process() {
  static byte stage = 0;
  static unsigned long timeNextStage = 0;
  static byte sensorindex = 100;
  byte i, j;
  byte present = 0;
  byte type_s;
  byte data[12];
  byte addr[8];

  if(stage == 0 && millis() > timeNextStage) {
    if (!ds.search(addr)) {
      //no more, reset search and pause
      ds.reset_search();
      timeNextStage = millis() + 5000; //5 seconds until next read
      return;
    } else {
      if (OneWire::crc8(addr, 7) != addr[7]) {
        Serial.println("CRC is not valid!");
        return;
      }
      //got one, start stage 1
      stage = 1;
    }
  }
  if(stage==1) {
    Serial.print("ROM =");
    for ( i = 0; i < 8; i++) {
      Serial.write(' ');
      Serial.print(addr[i], HEX);
    }
    //find sensor
    for(j=0; j<nsensors; j++){
      sensorindex = j;
      for(i=0; i<8; i++){
        if(sensors[j][i] != addr[i]) {
          sensorindex = 100;
          break; // stop the i loop
        }
      }
      if (sensorindex < 100) { 
        break; //found it, stop the j loop
      }
    }
    if(sensorindex == 100) {
      Serial.println("  Sensor not found in array");
      stage = 0;
      return;
    }
    Serial.print("  index="); Serial.println(sensorindex);
  
    ds.reset();
    ds.select(sensors[sensorindex]);
    ds.write(0x44, 0);        // start conversion, with parasite power off at the end
    stage = 2; //now wait for stage 2
    timeNextStage = millis() + 1000; //wait 1 seconds for the read
  }
  
  if (stage == 2 && millis() > timeNextStage) {
    // the first ROM byte indicates which chip
    switch (sensors[sensorindex][0]) {
      case 0x10:
        Serial.print("  Chip = DS18S20");  // or old DS1820
        Serial.print("  index="); Serial.println(sensorindex);
        type_s = 1;
        break;
      case 0x28:
        Serial.print("  Chip = DS18B20");
        Serial.print("  index="); Serial.println(sensorindex);
        type_s = 0;
        break;
      case 0x22:
        Serial.print("  Chip = DS1822");
        Serial.print("  index="); Serial.println(sensorindex);
        type_s = 0;
        break;
      default:
        Serial.println("Device is not a DS18x20 family device.");
        stage=0;
        return;
    }
  
    present = ds.reset();
    ds.select(sensors[sensorindex]);
    ds.write(0xBE);         // Read Scratchpad
  
    Serial.print("  Data = ");
    Serial.print(present, HEX);
    Serial.print(" ");
    for ( i = 0; i < 9; i++) {           // we need 9 bytes
      data[i] = ds.read();
      Serial.print(data[i], HEX);
      Serial.print(" ");
    }
    Serial.print(" CRC=");
    Serial.print(OneWire::crc8(data, 8), HEX);
    Serial.print(" index="); Serial.print(sensorindex);
    Serial.println();
  
    int16_t raw = (data[1] << 8) | data[0];
    if (type_s) {
      raw = raw << 3; // 9 bit resolution default
      if (data[7] == 0x10) {
        // "count remain" gives full 12 bit resolution
        raw = (raw & 0xFFF0) + 12 - data[6];
      }
    } else {
      byte cfg = (data[4] & 0x60);
      // at lower res, the low bits are undefined, so let's zero them
      if (cfg == 0x00) raw = raw & ~7;  // 9 bit resolution, 93.75 ms
      else if (cfg == 0x20) raw = raw & ~3; // 10 bit res, 187.5 ms
      else if (cfg == 0x40) raw = raw & ~1; // 11 bit res, 375 ms
      //// default is 12 bit resolution, 750 ms conversion time
    }
    tempraw[sensorindex] = raw;
    stage=0;
  }
}

/* Converts raw temp to Celsius or Fahrenheit
 * scale: 0=celsius, 1=fahrenheit
 * raw: raw temp from sensor
 *
 * Call at any time to get the last save temperature
 */
float ds18temp(byte scale, int16_t raw)
{
  switch(scale) {
    case 0: //Celsius
      return (float)raw / 16.0;
      break;
    case 1: //Fahrenheit
      return (float)raw / 16.0 * 1.8 + 32.0;
      break;
    default: //er, wut
      return -255;
  }
}
```

## the integration

Getting the values into Prometheus and later Grafana were the fun part. By running the unit as a statsd endpoint and having Prometheus scrape the endpoint, I was able to use a pull method for finding the metric I want to use.

Pointing a scraper to the unit worked out pretty good. I did try doing push metrics and that might be something I go back to later on. But for now, I am using a pull method to scrape the sensor. I am assuming for now that I will plug the small board into a constant power source.

There are methods for running the board(s) in a really low power mode and I hope to implement some day.

To configure grafana for scraping I have the following setup:

TODO

## the graphing

TODO