---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Content_types"
linktitle: "Content_types"
summary:
date: 2020-12-15T09:15:11-08:00
lastmod: 2020-12-15T09:15:11-08:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - Substitute `example` with the name of your course/documentation folder.
# - name: Declare this menu item as a parent with ID `name`.
# - parent: Reference a parent ID if this page is a child.
# - weight: Position of link in menu.
menu:
  example:
    name: YourParentID
    # parent: YourParentID
    weight: 1
---

## hugo and academic content types

1. post
2. authors
3. project
4. talk
5. publication
6. docs
7. widget_page

## when to use them

### post

This type is best for making a blog post. Yes that sentance does sound redundant, but
usually this type is associated with a date and is pulled in to a filter when looking
across the entire site for posts.

### authors

Used for describing an author that contributes content to the site. Mostly used for
a hugo academic site that is of a Organization, LocalBusiness, Project, EducationalOrganization, but also used 
for individual sites as well.

### project

Summarizing a project is great for gathering multiple posts under one goal. By summarizing the project
you can associate posts to be listed under the "related" section of the project and post.

### talk

I have not used this content type. Maybe some day when I actually give a talk. This content time is very 
similar with publications. Some fields related with this type are:

1. url_slides

### publication

Fields available to this type are:

1. url_slides
1. title: "An example journal article"
1. authors:
1. author_notes:
1. date: "2015-09-01T00:00:00Z"
1. doi: ""
1. publishDate: "2017-01-01T00:00:00Z"
1. publication_types: ["2"]
1. publication:
1. publication_short: ""
1. abstract:
1. summary:
1. tags:
1. featured: (true or false)
1. links: (list of links by name and url)
1. url_pdf: http://arxiv.org/pdf/1512.04133v1
1. url_code: ''
1. url_dataset: ''
1. url_poster: ''
1. url_project: ''
1. url_slides: ''
1. url_source: ''
1. url_video: ''
1. image:
   - caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
   - focal_point: ""
   - preview_only: false
1. projects: (list of associated projects)
1. slides: example

#### publication types

Publication type.

- 0 = Uncategorized
- 1 = Conference paper
- 2 = Journal article
- 3 = Preprint / Working Paper
- 4 = Report
- 5 = Book
- 6 = Book section
- 7 = Thesis
- 8 = Patent
