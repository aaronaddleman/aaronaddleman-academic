---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Setting Your Proxy Server Variable in Emacs"
subtitle: "Emacs setting your proxy settings"
summary: "Very brief lisp code to define proxy settings in Emacs"
authors: []
tags: ['howto']
categories: []
date: 2021-03-12T23:40:55-08:00
lastmod: 2021-03-12T23:40:55-08:00
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
aliases:
  - /articles/setting-your-proxy-server-variable-in-emacs/
---

## Running your Emacs behind a proxy server

```
(setq url-proxy-services
   '(("no_proxy" . "^\\(localhost\\|10.*\\)")
     ("http" . "proxy.com:8080")
     ("https" . "proxy.com:8080")))

(setq url-http-proxy-basic-auth-storage
    (list (list "proxy.com:8080"
                (cons "Input your LDAP UID !"
                      (base64-encode-string "LOGIN:PASSWORD")))))
```

Something else that people have shared over on [reddit](https://www.reddit.com/r/emacs/comments/3cfk3f/setting_proxy/) is the follwing which I have yet to try:

```lisp
(setq url-proxy-services
      '(("http"     . "http://proxy.example.com:8080")
        ("https"    . "http://proxy.example.com:8080")
	    ("ftp"      . "proxy.example.com:8080")
	    ("no_proxy" . "^.*example.com")))
```

Source: https://stackoverflow.com/questions/10787087/use-elpa-emacs-behind-a-proxy-requiring-authentication/18697223#18697223
