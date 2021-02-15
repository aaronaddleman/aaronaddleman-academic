---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Cdktf Trials with TypeScript"
subtitle: "Trying out CDKTF with TypeScript"
summary: "HashiCorp released an option of using CDKTF which promises to empower people to create infrastructure changes with a programming language. I followed a tutorial for TypeScript and write up my results about the discoveries I made along the way."
authors: []
tags: []
categories: []
date: 2021-02-15T09:09:24-08:00
lastmod: 2021-02-15T09:09:24-08:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: "by 𝓴𝓘𝓡𝓚 𝕝𝔸𝕀"
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

## summary

I have been wanting to try CDKTF for a while, so today seemed like a good time. Googling around for
a little bit reveald some more projects that I would like to try in the future:

- [cdk8s](https://cdk8s.io/) to manage K8
- [gitops](https://www.weave.works/technologies/gitops/) to manage K8
  1. The entire system described declaratively.
  1. The canonical desired system state versioned in Git.
  1. Approved changes that can be automatically applied to the system.
  1. Software agents to ensure correctness and alert on divergence.

I will be saving those treats for another day, but for now, lets move on with CDKTF. The contributors
of CDKTF made a really good starting point [CDKTF docs](https://learn.hashicorp.com/tutorials/terraform/cdktf-install?in=terraform/cdktf)
where you can try it out without the need of a cloud provider! Instead you use docker. This is
is a really good idea as you can get to writing and running code right away without the need
for some type of credentials.

After making the change to [LIBSH to fix NPM](/post/libsh-npm-resolved) I was able to proceed with the tutorial.

I went with the stable version as I have been burned way too many times with development (even though today, I use Spacemacs on the `develop` branch.

## reference

- [cdktf github](https://github.com/hashicorp/terraform-cdk)
- [cdktf tutorial](https://learn.hashicorp.com/tutorials/terraform/cdktf-install?in=terraform/cdktf)
- [cdktf with python](https://aws.amazon.com/blogs/developer/getting-started-with-the-aws-cloud-development-kit-and-python/)

## setup

**Important: must install Terraform 12 or above.** This is best accomplished with `terraform-env`. If your using LIBSH, you can install `terraform-env` with the command `terraform_install_tfenv`. This allows you to use the command `terraform-env install #.#.#` to install which ever version you want have installed and enabled.

## coding

I made a repo called [cdk-typescript-docker](https://github.com/aaronaddleman/cdktf-typescript-docker) to track my experience. Following the tutorial, I decided to type in the small amount of code with **VSCode**. The auto-complete worked pretty well (even though im totally new to Typescript). Here are some things I noticed:

1. Autocomplete worked very well and picked up custom libraries
1. The line of `import { Container, Image, DockerProvider } from './.gen/providers/docker'` was marked as un-resolved and not sure why. A little annoying. This is resolved with the command `cdktf get`
1. 

## testing deploy

Yep! Everything worked really well...

1. cdktf deploy
   - made things in docker
   - openend `localhost:80000` and greated with nginx

## testing destroy

Too good to be true. Running `cdktf destroy` lead to the following:

```
typescript-docker on  master [!] is 📦 v1.0.0 via ⬢ v15.0.1 took 32s 
➜ cdktf destroy
⠋ initializing typescript-docker...
2021/02/15 10:07:30 [DEBUG] Using modified User-Agent: Terraform/0.12.29 cdktf/0.1.0 (+https://github.com/hashicorp/terra⠼ planning typescript-docker...
2021/02/15 10:07:31 [DEBUG] Using modified User-Agent: Terraform/0.12.29 cdktf/0.1.0 (+https://github.com/hashicorp/terra⠴ planning typescript-docker...
2021/02/15 10:07:33 [DEBUG] Using modified User-Agent: Terraform/0.12.29 cdktf/0.1.0 (+https://github.com/hashicorp/terra⠹ Destroying Stack: typescript-docker
Resources
⠧ Destroying Stack: typescript-docker
Resources
 ✔ DOCKER_CONTAINER     nginxContainer      docker_container.nginxContainer
 ✔ DOCKER_IMAGE         nginxImage          docker_image.nginxImage
Summary: 2 destroyed.
TypeError: Cannot read property 'startsWith' of undefined
///trimmed///
Something went wrong.[2021-02-15T10:07:38.142] [ERROR] default - TypeError: Cannot read property 'startsWith' of undefined
///trimmed///
```

Docker container was destroyed...but not very happy about these results. Lets repeat this deploy and destroy again. Do we get the same results?

No I did not. I ran the `cdktf deploy` and most of the output was like before, but I got the same error again. The docker container is up, but again greeted with the same error message as above about a typeerror of `startsWith` being undefined.

Maybe I am using too low of terraform? Lets install the latest version.

```
➜ tfenv list-remote | head -8
0.15.0-alpha20210210
0.15.0-alpha20210127
0.15.0-alpha20210107
0.14.6
0.14.5
0.14.4
0.14.3
0.14.2
```

Lets try with 0.14.6 as the latest version.

```
➜ tfenv install 0.14.6       
Installing Terraform v0.14.6
Downloading release tarball from https://releases.hashicorp.com/terraform/0.14.6/terraform_0.14.6_darwin_amd64.zip
################################################################################################################################################### 100.0%
Downloading SHA hash file from https://releases.hashicorp.com/terraform/0.14.6/terraform_0.14.6_SHA256SUMS
Unable to verify OpenPGP signature unless logged into keybase and following hashicorp
Archive:  tfenv_download.qEgNRa/terraform_0.14.6_darwin_amd64.zip
  inflating: /Users/addlema/.tfenv/versions/0.14.6/terraform  
Installation of terraform v0.14.6 successful. To make this your default version, run 'tfenv use 0.14.6'

typescript-docker on  master is 📦 v1.0.0 via ⬢ v15.0.1 took 17s 
➜ tfenv use 0.14.6    
Switching default version to v0.14.6
Switching completed
```

Verify versions

```
➜ tf --version
Terraform v0.14.6
```

Ok lets try destroying again. Awesome. New error.

```
➜ cdktf destroy            
⠙ planning typescript-docker...

Error: Could not load plugin


Plugin reinitialization required. Please run "terraform init".

Plugins are external binaries that Terraform uses to access and manipulate
resources. The configuration provided requires plugins which can't be located,
don't satisfy the version constraints, or are otherwise incompatible.

Terraform automatically discovers provider requirements from your
configuration, including providers used in child modules. To see the
requirements and constraints, run "terraform providers".

Failed to instantiate provider "registry.terraform.io/-/docker" to obtain
schema: unknown provider "registry.terraform.io/-/docker"


non-zero exit code 1
```

Makes sense. I am using a new version of terraform. In a way, this is good. If someone else were to use different versions, this is the treatment they would get when switching their tool versions. I am going to follow their requirement to proceed. But wait... it says `terraform init` ... I want to stay with CDKTF so I would think that using `cdktf init` would be the correct course of action. Lets find out!

```
➜ cdktf init                                                                        
ERROR: Cannot initialize a project in a non-empty directory
```

Turns out that `cdktf init` is only used for making projects. Oh right! We need to use `cdktf get` for fetching our providers or plugins. First translation!

| cdktf     | terraform      |
|-----------|----------------|
| cdktf get | terraform init |


```
➜ cdktf get
Generated typescript constructs in the output directory: .gen
```

Ok that seemed to be happy results. Now lets try doing a destroy again...

```
➜ cdktf destroy
⠦ planning typescript-docker...

Error: Could not load plugin


Plugin reinitialization required. Please run "terraform init".

Plugins are external binaries that Terraform uses to access and manipulate
resources. The configuration provided requires plugins which can't be located,
don't satisfy the version constraints, or are otherwise incompatible.

Terraform automatically discovers provider requirements from your
configuration, including providers used in child modules. To see the
requirements and constraints, run "terraform providers".

Failed to instantiate provider "registry.terraform.io/-/docker" to obtain
schema: unknown provider "registry.terraform.io/-/docker"


non-zero exit code 1
```

Thats a big whopping **no**. Seems like I have some generated code that is borking on me. Lets try to find out what it is by destroying things:

```
➜ rm -Rf terraform.tfstate* .gen cdktf.out main.d.ts main.js 
➜ docker stop tutorial && docker rm tutorial
```

Now, lets start over and change providers. It seems that HashiCorp gave up on the Docker provider and gave the keys to someone else based on [this README.md](https://github.com/kreuzwerker/terraform-provider-docker). With that said, here are my changes:

[My applied changes](https://github.com/aaronaddleman/cdktf-typescript-docker/commit/188d2c9fb7da88e40fabe3ea71d9d5eb247af196)

Lets run our favorite commands again:

```
typescript-docker on  master [!] is 📦 v1.0.0 via ⬢ v15.0.1 took 9s 
➜ terraform --version
Terraform v0.14.6
➜ cdktf deploy
Deploying Stack: typescript-docker
Resources
 ✔ DOCKER_CONTAINER     nginxContainer      docker_container.nginxContainer
 ✔ DOCKER_IMAGE         nginxImage          docker_image.nginxImage

Summary: 2 created, 0 updated, 0 destroyed.
```

```
typescript-docker on  master [!] is 📦 v1.0.0 via ⬢ v15.0.1 took 9s 
➜ cdktf destroy
Destroying Stack: typescript-docker
Resources
 ✔ DOCKER_CONTAINER     nginxContainer      docker_container.nginxContainer
 ✔ DOCKER_IMAGE         nginxImage          docker_image.nginxImage

Summary: 2 destroyed.
```

Success! Wow, that was fun.

## Conclusions

In short, that was a bit annoying or confusing. I am by no means a TypeScript novice but this seemed to be an issue with the provider. I cannot say that with certainty without adding some more tests to revert back the two things I changed which were Terraform and the provider used. I will say use CDKTF does require having a mass amount of knowledge about the language you are using because when you are faced with errors, you will have to debug the generated code to trace the problem.

After reading some more articles in haste, I wonder what the real usage for Terraform really is? If you can use CDK with Python and it makes CloudFormation code, this really improves (or hides) the flaws of CloudFormation and empowers customers to use a programming language instead of an augmented JSON structure.

I would like to try out CDKTF with Python with TF and without.
