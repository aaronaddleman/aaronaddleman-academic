---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Cdktf Trials with Python"
subtitle: "Trying out CDKTF with Python"
summary: "Last time I tried using CDKTF with TypeScript. Now its time to repeat with Python."
authors: []
tags: ['howto']
categories: []
date: 2021-04-14T17:29:12-08:00
lastmod: 2021-04-14T17:29:12-08:00
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

## Summary

Continuing on with my experiments of CDKTF, this time with the Python language and wow, there is much more improved documentation compared to TypeScript. Maybe I am missing something about TypeScript, but the docs are super sparse. Anyways readon to see how I repeat the same steps from my other article of [CdkTf Trials with TypeScript](/post/cdktf-trials-with-typescript).

... time passed...

So a little time passed until I was able to get around to filling out this article. I created a project and then life hit me in the face with lots of jumps and bumps. But I am back and picked up this task to kick it off my todo list.

## Getting things

I kind of just started to hit the ground running with this again and sort of stumbled along the way. At first I forgot where I left things off and just started trying to generate TF code. While this was an ok idea, oh yah there is a help file...:

```
PWD: ./
```

```shell
cat help
```

Yah that was not much help...I mean yah, it has some commands, but not really helping me recall package management or some other things like applying TF plans... but lets move on...

I quickly realized about adding some packages:

```
PWD: ./
```

```shell
# tried syncing, that was good
pipenv sync
# this was just plain wrong...
python ./main.py
```

## Basic code

I must have generated this directory from a template because it was pretty bare:

```
Filename: ./main.py
```

```python
#!/usr/bin/env python
from constructs import Construct
from cdktf import App, TerraformStack


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        # define resources here


app = App()
MyStack(app, "cdktf-python-docker")

app.synth()
```

Also VSCode was having some issues with resolving the Python interpretor. After I got that sorted out by running the following to make all happy with:

```
PWD: ./
```

```shell
pipenv install constructs
pipenv install cdktf
```

After a quick google I found some simple code to interface with Docker and updated the providers list:

```json
modified   cdk.tf.json
@@ -1,10 +1,10 @@
 {
   "language": "python",
   "app": "pipenv run python main.py",
-  "terraformProviders": ["aws@~> 2.0"],
+  "terraformProviders": ["aws@~> 2.0", "docker"],
   "codeMakerOutput": "imports",
   "context": {
     "excludeStackIdFromLogicalIds": "true",
-"allowSepCharsInLogicalIds": "true"
+    "allowSepCharsInLogicalIds": "true"
   }
 }
```

Then I wanted to see what adding some docker containers would do... so I made the following change:

```python
modified   main.py
@@ -1,13 +1,23 @@
 #!/usr/bin/env python
 from constructs import Construct
 from cdktf import App, TerraformStack
+from imports.docker import Image, Container
+


 class MyStack(TerraformStack):
     def __init__(self, scope: Construct, ns: str):
         super().__init__(scope, ns)

-        # define resources here
+        docker_image = Image(self, 'nginx-latest', name='nginx:latest', keep_locally=False)
+        Container(self, 'nginx-cdktf', name='nginx-python-cdktf',
+                  image=docker_image.name, ports=[
+                      {
+                          'internal': 80,
+                          'external': 8000
+                      }], privileged=False)
+
+


 app = App()
```

## Synth and deploy

Ok then I wanted to get this cook'n with some `synth` and `deploy`. Since I read a little about this commands in the so-called-help-file I said "sure, why not, what could go wrong"... foreshadowing...

```
PWD: ./
```

```shell
cdktf synth
Generated Terraform code in the output directory: cdktf.out
```

Okay.. not that bad... what did we get? A semi decent `json` file in the `./cdktf.out/` directory full of the docker containers and at first glance, I also saw a key with the `stacktrace`. Why? I mean sure, it seems a little helpful, but I would not expect this to be a default when rendering the output. Why would I have to choose to disable this? I guess less docs maybe because now I have to read the docs on how to disable this behavior if it even exists...

Moving on.. lets deploy..that must be `cdktf deploy`...

```
PWD: ./
```

```shell
cdktf deploy
```

```
➜ cdktf deploy
⠹ initializing cdktf-python-docker...
⠴ planning cdktf-python-docker...
⠏ planning cdktf-python-docker...
⠹ Deploying Stack: cdktf-python-docker
Deploying Stack: cdktf-python-docker
Resources
 ~ DOCKER_CONTAINER     nginx-cdktf         docker_container.nginx-cdktf
 ~ DOCKER_IMAGE         nginx-latest        docker_image.nginx-latest

Summary: 0 created, 0 updated, 0 destroyed.
2021/04/14 22:06:41 [DEBUG] Using modified User-Agent: Terraform/0.12.29 cdktf/0.2.2 (+https://github.com/hashicorp/terraform-cdk)
```

... ok... umm.. Summary says it has 0 created, 0 updated, and 0 destroyed. Im also getting debug statements. Why? Is this because I have stacktraces in the generated TF code? What is Docker running right now?

```
docker ps
CONTAINER ID   IMAGE                   COMMAND                  CREATED              STATUS              PORTS                                            NAMES
c54d42a2af41   nginx:latest            "/docker-entrypoint.…"   About a minute ago   Up About a minute   0.0.0.0:8000->80/tcp                             nginx-python-cdktf
```

LOL ok... So it did create the container. Sort of confusing but maybe I can over look this issue. Hmm what happens if I run this command again...Nothing different, same results. Ok. Lets pretend that I never checked docker and go into the `cdktf.out` directory to run `tf apply`...

```
PWD: ./cdktf.out
```

```
➜ tf apply

An execution plan has been generated and is shown below.
Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # docker_container.nginx-cdktf will be created
  + resource "docker_container" "nginx-cdktf" {
      + attach           = false
      + bridge           = (known after apply)
      + command          = (known after apply)
      + container_logs   = (known after apply)
      + dns              = (known after apply)
      + dns_opts         = (known after apply)
      + entrypoint       = (known after apply)
      + exit_code        = (known after apply)
      + gateway          = (known after apply)
      + hostname         = (known after apply)
      + id               = (known after apply)
      + image            = "nginx:latest"
      + ip_address       = (known after apply)
      + ip_prefix_length = (known after apply)
      + ipc_mode         = (known after apply)
      + log_driver       = (known after apply)
      + log_opts         = (known after apply)
      + logs             = false
      + must_run         = true
      + name             = "nginx-python-cdktf"
      + network_data     = (known after apply)
      + privileged       = false
      + read_only        = false
      + restart          = "no"
      + rm               = false
      + shm_size         = (known after apply)
      + start            = true
      + user             = (known after apply)
      + working_dir      = (known after apply)

      + ports {
          + external = 8000
          + internal = 80
          + ip       = "0.0.0.0"
          + protocol = "tcp"
        }
    }

  # docker_image.nginx-latest will be created
  + resource "docker_image" "nginx-latest" {
      + id           = (known after apply)
      + keep_locally = false
      + latest       = (known after apply)
      + name         = "nginx:latest"
    }

Plan: 2 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value:
```

Ok.. there was a state file, but it decided it was way better to ignore this. Nope, we gotta add 2 resources. Looks like it has no idea about the previous run. Aoh got it... ok.. even though there is a state file at `./cdktf.out/terraform.tfstate` ..its empty.. there however is a file at `./terraform.tfstate` which has the deployed docker container. Ok I get it now... use the TF code in `./cdktf.out` but use the `./terraform.tfstate` file for holding state... ok... (more foreshadowing)

```
PWD: ./
```

```
➜ tf apply ./cdktf.out
docker_image.nginx-latest: Refreshing state... [id=sha256:62d49f9bab67f7c70ac3395855bf01389eb3175b374e621f6f191bf31b54cd5bnginx:latest]
docker_container.nginx-cdktf: Refreshing state... [id=081e4370b31ba43eb99c7dc1c394a144e6d2ddcf4d8a8909e32c0523183000ff]

An execution plan has been generated and is shown below.
Resource actions are indicated with the following symbols:
-/+ destroy and then create replacement

Terraform will perform the following actions:

  # docker_container.nginx-cdktf must be replaced
-/+ resource "docker_container" "nginx-cdktf" {
        attach            = false
      + bridge            = (known after apply)
      ~ command           = [
          - "nginx",
          - "-g",
          - "daemon off;",
        ] -> (known after apply)
      + container_logs    = (known after apply)
      - cpu_shares        = 0 -> null
      ~ dns               = [] -> (known after apply)
      ~ dns_opts          = [] -> (known after apply)
      - dns_search        = [] -> null
      ~ entrypoint        = [
          - "/docker-entrypoint.sh",
        ] -> (known after apply)
      + exit_code         = (known after apply)
      ~ gateway           = "172.17.0.1" -> (known after apply)
      - group_add         = [] -> null
      ~ hostname          = "081e4370b31b" -> (known after apply)
      ~ id                = "081e4370b31ba43eb99c7dc1c394a144e6d2ddcf4d8a8909e32c0523183000ff" -> (known after apply)
      ~ image             = "sha256:62d49f9bab67f7c70ac3395855bf01389eb3175b374e621f6f191bf31b54cd5b" -> "nginx:latest" # forces replacement
      ~ ip_address        = "172.17.0.6" -> (known after apply)
      ~ ip_prefix_length  = 16 -> (known after apply)
      ~ ipc_mode          = "private" -> (known after apply)
      - links             = [] -> null
      ~ log_driver        = "json-file" -> (known after apply)
      ~ log_opts          = {} -> (known after apply)
        logs              = false
      - max_retry_count   = 0 -> null
      - memory            = 0 -> null
      - memory_swap       = 0 -> null
        must_run          = true
        name              = "nginx-python-cdktf"
      ~ network_data      = [
          - {
              - gateway          = "172.17.0.1"
              - ip_address       = "172.17.0.6"
              - ip_prefix_length = 16
              - network_name     = "bridge"
            },
        ] -> (known after apply)
      - network_mode      = "default" -> null
        privileged        = false
      - publish_all_ports = false -> null
        read_only         = false
        restart           = "no"
        rm                = false
      ~ shm_size          = 64 -> (known after apply)
        start             = true
      - sysctls           = {} -> null
      - tmpfs             = {} -> null
      + user              = (known after apply)
      + working_dir       = (known after apply)

        ports {
            external = 8000
            internal = 80
            ip       = "0.0.0.0"
            protocol = "tcp"
        }
    }

Plan: 1 to add, 0 to change, 1 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value:
```

HUH!!???

Ok why are all these things different...is it my version of terraform? Is it really that different? Lets try the latest version of terraform.

```
PWD: ./
```

```
➜ tfenv install 0.15.0
Installing Terraform v0.15.0
Downloading release tarball from https://releases.hashicorp.com/terraform/0.15.0/terraform_0.15.0_darwin_amd64.zip
######################################################################################################################################################################################################################################################### 100.0%
Downloading SHA hash file from https://releases.hashicorp.com/terraform/0.15.0/terraform_0.15.0_SHA256SUMS
Unable to verify OpenPGP signature unless logged into keybase and following hashicorp
Archive:  tfenv_download.dHWfkr/terraform_0.15.0_darwin_amd64.zip
  inflating: /Users/addlema/.tfenv/versions/0.15.0/terraform
Installation of terraform v0.15.0 successful. To make this your default version, run 'tfenv use 0.15.0'

cdktf-python-docker on  master [!] via cdktf-python-docker-vrH-Cy8S via 🐍 3.8.5
➜ tfenv use 0.15.0
Switching default version to v0.15.0
Switching completed
```

ok lets init...

```
PWD ./
```

```
➜ rm -Rf .terraform

cdktf-python-docker on  master [!] via cdktf-python-docker-vrH-Cy8S via 🐍 3.8.5
➜ tf init ./cdktf.out
Too many command line arguments. Did you mean to use -chdir?
```

...ugh... what is this... what are you doing to me HashiCorp???? oh ok .. I can use the chdir before a sub command..thats nice.. but again, bad docs in the CLI...

```
➜ tf -chdir=cdktf.out init

Initializing the backend...

Initializing provider plugins...
- Finding latest version of hashicorp/docker...
╷
│ Error: Failed to query available provider packages
│
│ Could not retrieve the list of available versions for provider hashicorp/docker: provider registry registry.terraform.io does not have a provider named registry.terraform.io/hashicorp/docker
│
│ Did you intend to use kreuzwerker/docker? If so, you must specify that source address in each module which requires that provider. To see which modules are currently depending on hashicorp/docker, run the following command:
│     terraform providers
╵
```

Awesome... the provider has changed...

```json
modified   cdktf.json
@@ -1,7 +1,7 @@
 {
   "language": "python",
   "app": "pipenv run python main.py",
-  "terraformProviders": ["aws@~> 2.0", "docker"],
+  "terraformProviders": ["aws@~> 2.0", "kreuzwerker/docker"],
   "codeMakerOutput": "imports",
   "context": {
     "excludeStackIdFromLogicalIds": "true",
```

... are we better now? ...no... there is a whole new way to mention providers, but `cdktf` did not help...

## Conclusions

I continued to play around with `cdktf with Python` for a little bit by rolling back to the previous version I used of `0.12.29`. I really like how by using some really simple Python I could get a for loop to make multiple resources conjure into existance:

```python
modified   main.py
@@ -1,13 +1,24 @@
 #!/usr/bin/env python
 from constructs import Construct
 from cdktf import App, TerraformStack
+from imports.docker import Image, Container
+


 class MyStack(TerraformStack):
     def __init__(self, scope: Construct, ns: str):
         super().__init__(scope, ns)

-        # define resources here
+        docker_image = Image(self, 'nginx-latest', name='nginx:latest', keep_locally=False)
+        for i in range(3):
+            Container(self, f'nginx-cdktf-{i}', name=f'nginx-python-cdktf-{i}',
+                    image=docker_image.name, ports=[
+                        {
+                            'internal': 80,
+                            'external': 8000 + i
+                        }], privileged=False)
+
+


 app = App()
```

But the fact remains that `cdktf` is a beast on its own and not going to really help you out any when terraform picks up all its standards and moves to a new way of doing things. Terraform seems to be unhitched with cdktf and this gives me no reason to use cdktf at all. Maybe the fact that I am using a strange provider (one suggest by the docs) is not a good idea, but lets not forget about how I went down the whole problem in the first place was running terraform after using `cdktf apply` and getting major differences in results. Its a sad thing, but I dont recommend `cdktf`.
