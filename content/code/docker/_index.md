---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Docker"
linktitle: "Docker"
summary: "Information about Docker and scripts that make it easier."
date: 2020-12-15T09:14:27-08:00
lastmod: 2020-12-15T09:14:27-08:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - Substitute `example` with the name of your course/documentation folder.
# - name: Declare this menu item as a parent with ID `name`.
# - parent: Reference a parent ID if this page is a child.
# - weight: Position of link in menu.
menu:
  docker:
    name: Docker
    # parent: YourParentID
    weight: 1
---

Containerization has been around for awhile. Docker helped make it easy to use. My collection of things for Docker are stored here for reference in the future.

## Formatting

Using `docker ps --format '{{.ID}}'` will output all the IDs of the output from the `ps` command. Other fields available are:

```
.ID
.Image
.Command
.CreatedAt
.RunningFor
.Ports
.Status
.Size
.Names
.Labels
.Label
.Mounts
.Networks
```

## Stop or/and Removing

To stop containers allows for halting a running container. If you did not use the `--rm` command, it still remains in the list of containers under management by Docker. To see this list, you need to use the `docker ps -a` command.

Thus to stop and remove a docker container, you really have two options:

1. start the container with `--rm` to remove the container automatically
1. use a script to stop and remove the container in one go

Here is the simple script I use to stop and remove containers in one go:

```
for id in $(docker ps --format '{{.ID}}')
do
  docker stop $id
  docker rm $id
done
```

