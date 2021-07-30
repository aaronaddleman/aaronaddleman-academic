---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Flaskfire"
subtitle: "Flask and Firebase"
summary: "Fun with a Flask and Firebase. Making an API with a realtime database."
authors: []
tags: []
categories: []
date: 2021-05-13T20:27:18-07:00
lastmod: 2021-05-13T20:27:18-07:00
featured: false
draft: false

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

## Howto

### select your project

```
gcloud config set project flaskfire-6f1b8
```

### cloudbuild

```yaml
steps:
  # build & push the container image
- name: "gcr.io/kaniko-project/executor:latest"
  args: ["--cache=true", "--cache-ttl=48h", "--destination=gcr.io/$PROJECT_ID/todo:latest"]
  # Deploy container image to Cloud Run
- name: "gcr.io/cloud-builders/gcloud"
  args: ['beta', 'run', 'deploy', 'todo', '--image', 'gcr.io/$PROJECT_ID/todo:latest', '--region', 'us-central1', '--allow-unauthenticated', '--platform', 'managed']
```

### build application

```
gcloud builds submit --config cloudbuild.yaml .
```

### error #1

```
Step #1: Deployment failed
Step #1: ERROR: (gcloud.beta.run.deploy) Cloud Run error: Container failed to start. Failed to start and then listen on the port defined by the PORT environment variable. Logs for this revision might contain more information.
```

turns out the real error from the logs is:

```
Traceback (most recent call last):
  File "app.py", line 12, in <module>
    cred = credentials.Certificate('key.json')
  File "/usr/local/lib/python3.7/site-packages/firebase_admin/credentials.py", line 83, in __init__
    with open(cert) as json_file:
FileNotFoundError: [Errno 2] No such file or directory: 'key.json'
```


### generate key

1. Project Settings
1. Settings
1. Service Account (tab)
1. Select Python
1. Generate new private key
1. Download the file and name it `key.json`

### run build and deploy again

This time it all works, and a url is returned.
