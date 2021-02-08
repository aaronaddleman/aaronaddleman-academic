---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Aws S3 Query Howto"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2021-02-03T15:30:26-08:00
lastmod: 2021-02-03T15:30:26-08:00
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

## How to query for things

```sql
SELECT * FROM s3object s  WHERE NOT 'VALUE-STRING' IN s[*].field_name LIMIT 5
```