---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Aws Lambda Development"
subtitle: "My patterns for developing a Lambda function"
summary: "My patterns for developing a Lambda function"
authors: []
tags: []
categories: []
date: 2020-11-19T16:35:14-08:00
lastmod: 2020-11-19T16:35:14-08:00
featured: false
draft: true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  placement: 3
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

## use local first

Running locally first saves you money and time to iterate on something before uploading to AWS.
Add this to the bottom of your python script as a plain simple way to run the script locally before running in AWS.
You can use the event field to simulate the data within a CloudWatch event for testing:

```python
def lambda_handler(event, context):
  print('myApp')
  pass

if __name__ == "__main__":
    event = { "Records":
                [
                {
                    "eventVersion":"2.2",
                    "eventSource":"aws:s3",
                    "awsRegion":"us-west-2",
                    "eventTime":"1970-01-01T00:00:00.000Z",
                    "eventName":"event-type",
                    "userIdentity":{
                        "principalId":"Amazon-customer-ID-of-the-user-who-caused-the-event"
                    },
                    "requestParameters":{
                        "sourceIPAddress":"ip-address-where-request-came-from"
                    },
                    "responseElements":{
                        "x-amz-request-id":"Amazon S3 generated request ID",
                        "x-amz-id-2":"Amazon S3 host that processed the request"
                    },
                    "s3":{
                        "s3SchemaVersion":"1.0",
                        "configurationId":"ID found in the bucket notification configuration",
                        "bucket":{
                            "name":"bucket-name",
                            "ownerIdentity":{
                                "principalId":"Amazon-customer-ID-of-the-bucket-owner"
                            },
                            "arn":"bucket-ARN"
                        },
                        "object":{
                            "key":"object-key",
                            "size":10,
                            "eTag":"object eTag",
                            "versionId":"object version if bucket is versioning-enabled, otherwise null"
                        }
                    }
                }
                ]
            }
    context = []
    lambda_handler(event, context)
```

## logging

First, lets cite the [Python 3 docs on logging][python3logging] for reference.
Lets move on to some patterns that are helpful.
The logger is helpful for doing the pythonic way of logging.

```python
import os
import logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    logger.info('## ENVIRONMENT VARIABLES')
    logger.info(os.environ)
    logger.info('## EVENT')
    logger.info(event)
```

## safety variables

Allowing something to post or not to post is super helpful. Expecially when
you want to make sure you have turned something off after you have noticed
your budget has been consumed beyond its limit.

Always put in a test of an environment variable that will not do any post/get
of a resource that will affect your overall budget:

```python
import os

POWER = os.environ.get['POWER']

def lambda_handler(event, context):
  # do your things here
  if "POWER_OFF" in os.environ:
    pass
  else:
    response = client_logs.put_log_events(**payload)
```

[python3logging]: https://docs.python.org/3/library/logging.html#module-logging
