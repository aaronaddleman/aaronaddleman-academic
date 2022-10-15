---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "K8 on RPi"
subtitle: "Running Kubernetes on RaspberryPi"
summary: "Wanted my own lab of K8 to experiment and find new depths of detail"
authors: []
tags: ['k8', 'sbc']
categories: []
date: 2020-11-07T10:00:08-08:00
lastmod: 2020-11-07T10:00:08-08:00
featured: false
draft: false
toc: true

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
slides: "k8-rpi"
---

Cool things about K8 on the RPi

[rak8s](https://github.com/aaronaddleman/rak8s) is a project I forked from someone else (Chris Short who did an excellent job getting this started) and I have made some slight adjustments for my needs. I really like the idea of using Ansible, but I will say it took lots of work to get my cluster up and running. Below is my process that I went though to make it as painless as possible.

## the hardware

- 4 x Raspberry Pi ver 4 B
- 4 x SD cards
- 4 x Power over Ethernet Hats
- 4 x Short Ethernet Cable
- 1 x Power over Ethernet Hub
- 1 x Cluster kit hardware to stack Pi's
- 1 x Micro HDMI to regular HDMI

## the discoveries

Very quickly, I found out that every experiment of iterating with Ansible to configure the Pi's resulted in re-imaging of Raspbian OS Server. This got old really really quick and I tried to use CloneZilla to clone the SD cards as best as I could. If you have a really good SD card reader(s) for doing multiple writes, then I think you will be well advisided to invest a little bit of time or money into writing to multiple SD cards.


## from 0 to 100

My process was not straight out of the box to then be up and running, but rak8s sure did help. I started with [the hardware](#the-hardware) and:

### hooked up wires

Experimented with a couple of different PoE hats, but landed on the one by Raspberry Pi for a couple of reasons:

1. less high pitched noise
2. has a fan that was relativly quiet
3. compatible with the frame i bought

As for the PoE switch, I dont think my choice was a good one. The software on the switch was nice, but seemed really old. But it delivers the amount of power I need for the 4 SBCs. Going with a 8 Port switch was also a good idea because of the following port mapping:

- Port 1: pi 1
- Port 2: pi 2
- Port 3: pi 3
- Port 4: pi 4
- Port 5: (future)
- Port 6: (future)
- Port 7: Phililps Hue
- Port 8: Uplink

As you can see I really filled up the ports and can always add a couple more if I see the need.

I really like the short ethernet cable. This makes the package nice and neat and since I am using PoE, there are no power supplies to manage.

### configure the home network

Once I got the first _pi 1_ hooked up to the network, I assigned it a static IP address with my wifi network. This is important because K8 needs known hosts to be registered. I have a feeling this could be delt better with a real K8 cluster, but this is a Raspberry Pi cluster and by no means should be treated with production level expectations.

I then went on to configure the other PIs to have static IP addresses. It really helps to have these in sequential order. Just makes things super simple. I choose the following number convention:

| last ip octet | hostname | role    |
| ------------- | -------- | ------- |
| .70           | node-0   | manager |
| .71           | node-1   | node    |
| .72           | node-2   | node    |
| .73           | node-3   | node    |

### setup

Downloaded the [Raspian OS Arm 64bit](https://downloads.raspberrypi.org/raspios_arm64/images/) version as Kubernetes needs this for operation. The steps you want to complete on the raspian os, they are as follows:

1. install ssh key
2. set ssh to start on boot

```bash
# run the following on your remote-host
# you know, the one that is not the raspberry pi
#
# generate a private key
#
# when prompted of where you want to store the file,
# I used /Users/my_username/.ssh/k8_id_rsa which
# makes two files: k8_id_rsa, and k8_id_rsa.pub
ssh-key-gen
#
# now copy the key to the raspberry pi
# using the ip address you set for the pi.
# you should be prompted for the password
# that you choose during pi boot up
ssh-copy-id -i ~/.ssh/k8_id_rsa pi@192.168.86.70
#
# now the following command is to test you
# can login without a password
ssh -i ~/.ssh/k8_id_rsa pi@192.168.86.70
```

After your all done with ssh work, lets move on to setting the raspberry pi ssh to start:

1. ssh into your raspberry pi
2. sudo raspi-config
3. `interface` -> `ssh`
4. accept yes to start ssh on boot

### cloning

This step is for closing the SD cards to the other 3 Raspberry Pis. Now that we have our SSH key to connect to each one, we are ready to boot up each node and have them ready to recevie further configuration. After you are done with all of the changes you are ready to clone the SD cards, I tried using VirtualBox, but after some painful hours of trying to attach my SD card reader and having 0 success, I found two options:

1. use the tool `dd` which is pretty slow and works
2. or use `CloneZilla` which required me to pay a subscription for Parallels Desktop (about \$49.99 for 1 year)

{{% callout warning %}}
Both of these methods do run the risk of lossing information on disks. Please be very careful and aware of what you are doing. Always make backups and always test your backup contains what you expect.
{{% /callout %}}

#### dd

```shell
# find the /dev/disk# with diskutil
diskutil list
# make the img file
dd if=/dev/rdisk# of=/path/to/file.img bs=1m
# unmount SD card and add new card
# now write to new SD card
dd if=/path/to/file.img of=/dev/rdisk#
```

#### CloneZilla

[Slideshow of how to clone SD cards with CloneZilla](https://docs.google.com/presentation/d/1PnqE9tnDX0Iui8jjctXdaK6Q5bTPjvVBcfXfPe2DT3Y/edit?usp=sharing)

### ansible

Now its on to the best part. Running the automation to configure your Master and Node for Kubernetes. Here are my shell steps:

```bash {linenos=table,hl_lines=[3],linenostart=1}
git clone https://github.com/aaronaddleman/rak8s/tree/master
cd rak8s
pip install ansible
# ping all the hosts in ./inventory
ansible all -m ping -i inventory
# run automation
ansible-playbook cluster.yml
```

Here is an output of my ansible run:

```shell
➜ ansible-playbook cluster.yml

PLAY [all] ************************************************************************************************************************************************

TASK [Gathering Facts] ************************************************************************************************************************************
ok: [node-1]
ok: [node-3]
ok: [node-0]
ok: [node-2]

TASK [common : Ensure hostname set] ***********************************************************************************************************************
changed: [node-1]
changed: [node-2]
changed: [node-0]
changed: [node-3]

TASK [common : Ensure hostname is in /etc/hosts] **********************************************************************************************************
[WARNING]: Module remote_tmp /root/.ansible/tmp did not exist and was created with a mode of 0700, this may cause issues when running as another user. To
avoid this, create the remote_tmp dir with the correct permissions manually
changed: [node-1]
changed: [node-3]
changed: [node-2]
changed: [node-0]

TASK [common : set timezone to UTC] ***********************************************************************************************************************
changed: [node-1]
changed: [node-2]
changed: [node-3]
changed: [node-0]

TASK [common : Enabling cgroup options at boot] ***********************************************************************************************************
changed: [node-3]
changed: [node-1]
changed: [node-2]
changed: [node-0]

TASK [common : Disable Swap] ******************************************************************************************************************************
changed: [node-1]
changed: [node-2]
changed: [node-3]
changed: [node-0]

TASK [common : apt-get update] ****************************************************************************************************************************
[WARNING]: Updating cache and auto-installing missing dependency: python-apt
ok: [node-1]
ok: [node-2]
ok: [node-3]
ok: [node-0]

TASK [common : python-apt dependency] *********************************************************************************************************************
ok: [node-1]
ok: [node-2]
ok: [node-3]
ok: [node-0]

TASK [common : Reboot] ************************************************************************************************************************************
changed: [node-3]
changed: [node-2]
changed: [node-1]
changed: [node-0]

TASK [kubeadm : Determine if docker is installed] *********************************************************************************************************
ok: [node-3]
ok: [node-2]
ok: [node-1]
ok: [node-0]

TASK [kubeadm : Run Docker 19.03.8~3-0 Install Script] ****************************************************************************************************
changed: [node-3]
changed: [node-2]
changed: [node-1]
changed: [node-0]

TASK [kubeadm : Lock docker version to 19.03.8~3-0] *******************************************************************************************************
changed: [node-3]
changed: [node-2]
changed: [node-1]
changed: [node-0]

TASK [kubeadm : Pass bridged IPv4 traffic to iptables' chains] ********************************************************************************************
changed: [node-1]
changed: [node-2]
changed: [node-3]
changed: [node-0]

TASK [kubeadm : Install apt-transport-https] **************************************************************************************************************
ok: [node-2]
ok: [node-1]
ok: [node-3]
ok: [node-0]

TASK [kubeadm : Add Google Cloud Repo Key] ****************************************************************************************************************
changed: [node-2]
changed: [node-1]
changed: [node-3]
changed: [node-0]

TASK [kubeadm : Add Kubernetes to Available apt Sources] **************************************************************************************************
changed: [node-3]
changed: [node-1]
changed: [node-0]
changed: [node-2]

TASK [kubeadm : apt-get update] ***************************************************************************************************************************
changed: [node-1]
changed: [node-0]
changed: [node-3]
changed: [node-2]

TASK [kubeadm : Install k8s 1.17.0-00 Y'all] **************************************************************************************************************
changed: [node-2]
changed: [node-0]
changed: [node-3]
changed: [node-1]

TASK [kubeadm : Lock Kubernetes version to 1.17.0-00] *****************************************************************************************************
changed: [node-1] => (item=kubelet)
changed: [node-2] => (item=kubelet)
changed: [node-3] => (item=kubelet)
changed: [node-0] => (item=kubelet)
changed: [node-1] => (item=kubeadm)
changed: [node-2] => (item=kubeadm)
changed: [node-3] => (item=kubeadm)
changed: [node-0] => (item=kubeadm)
changed: [node-1] => (item=kubectl)
changed: [node-2] => (item=kubectl)
changed: [node-3] => (item=kubectl)
changed: [node-0] => (item=kubectl)

PLAY [master] *********************************************************************************************************************************************

TASK [master : Reset Kubernetes Master] *******************************************************************************************************************
changed: [node-0]

TASK [master : Initialize Master v1.17.0] *****************************************************************************************************************
changed: [node-0]

TASK [master : Create Kubernetes config directory] ********************************************************************************************************
changed: [node-0]

TASK [master : Copy admin.conf to config directory] *******************************************************************************************************
changed: [node-0]

TASK [master : Join Kubernetes Cluster] *******************************************************************************************************************
changed: [node-0]

TASK [master : Install Flannel (Networking)] **************************************************************************************************************
changed: [node-0]

TASK [master : Poke kubelet] ******************************************************************************************************************************
changed: [node-0]

PLAY [all:!master] ****************************************************************************************************************************************

TASK [workers : Reset Kubernetes] *************************************************************************************************************************
changed: [node-1]
changed: [node-2]
changed: [node-3]

TASK [workers : Join Kubernetes Cluster] ******************************************************************************************************************
changed: [node-1]
changed: [node-2]
changed: [node-3]

TASK [workers : Poke kubelet] *****************************************************************************************************************************
changed: [node-1]
changed: [node-2]
changed: [node-3]

PLAY RECAP ************************************************************************************************************************************************
node-0                     : ok=26   changed=21   unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
node-1                     : ok=22   changed=17   unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
node-2                     : ok=22   changed=17   unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
node-3                     : ok=22   changed=17   unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
```

### configure kubectl

You can do what I did, or you can use node-0 to issue kubectl commands. If you want to go the easy route, then ssh into node-0 and skip my cheat.

My cheat:

```shell
ssh -i ~/.ssh/k8_id_rsa pi@192.168.86.70
sudo cat /root/.kube/config
# copy the contents into your clipboard
# log out of the pi
mkdir $HOME/.kube
pbpaste > $HOME/.kube/config
```

### test kubectl

Lets make sure kubectl works! Listing the nodes is always my favorite.

```shell
kubectl get nodes
NAME     STATUS   ROLES    AGE   VERSION
node-0   Ready    master   8h    v1.17.0
node-1   Ready    <none>   8h    v1.17.0
node-2   Ready    <none>   8h    v1.17.0
node-3   Ready    <none>   8h    v1.17.0
```

### networking

All of my networking or routing was done with [rak8s-metallb](https://github.com/aaronaddleman/rak8s-metallb) which involves updating the configuration yaml file with your reserved IP address pool. The instructions for installing `metallb` are in the README.md and assume you have `kubectl` configured. Make sure you update the `config.yaml` file with the ip addresses of your nodes.

### shutdown (if you want to)

Now that your done setting up Kubernetes, you might want to turn it off some day if you are not using it to save a little bit of power (even though it would cost about `$2` a year to power it) you can call upon `ansible` to shut all of your pis down safely with the following command.

```bash
ansible all -a "shutdown -h now" -i inventory
```

## conclusion

You now have a kubernetes cluster up and running in your own home. While this cluster does not have tons of power, I find it great for experimenting with Kubernetes.
