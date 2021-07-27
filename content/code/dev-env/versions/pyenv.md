---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Pyenv"
linktitle: "Pyenv"
summary: "Select which version of Python you want to use on a global or local scope."
date: 2021-07-23T22:57:27-07:00
lastmod: 2021-07-23T22:57:27-07:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: book  # Do not modify.

# Add menu entry to sidebar.
# - Substitute `example` with the name of your course/documentation folder.
# - name: Declare this menu item as a parent with ID `name`.
# - parent: Reference a parent ID if this page is a child.
# - weight: Position of link in menu.
---

Example of how I use PyEnv:

```shell
easy-mkdocs on  master [?] on 🐳 v20.10.6 via 🐍 3.9.2
➜ pyenv install 3.9.6
python-build: use openssl@1.1 from homebrew
python-build: use readline from homebrew
Downloading Python-3.9.6.tar.xz...
-> https://www.python.org/ftp/python/3.9.6/Python-3.9.6.tar.xz
Installing Python-3.9.6...
python-build: use readline from homebrew
python-build: use zlib from xcode sdk
Installed Python-3.9.6 to /Users/addlema/.pyenv/versions/3.9.6


easy-mkdocs on  master [?] on 🐳 v20.10.6 via 🐍 3.9.2 took 2m 10s
➜ pyenv local 3.9.6


easy-mkdocs on  master [?] on 🐳 v20.10.6 via 🐍 3.9.6 took 5s
➜ pipenv install
Creating a virtualenv for this project...
Pipfile: /Users/addlema/src/github.com/easy-mkdocs/Pipfile
Using /Users/addlema/.pyenv/versions/3.9.6/bin/python3.9 (3.9.6) to create virtualenv...
⠴ Creating virtual environment...created virtual environment CPython3.9.6.final.0-64 in 300ms
  creator CPython3Posix(dest=/Users/addlema/.local/share/virtualenvs/easy-mkdocs-x9vsCPfK, clear=False, no_vcs_ignore=False, global=False)
  seeder FromAppData(download=False, pip=bundle, setuptools=bundle, wheel=bundle, via=copy, app_data_dir=/Users/addlema/Library/Application Support/virtualenv)
    added seed packages: pip==21.1.3, setuptools==57.1.0, wheel==0.36.2
  activators BashActivator,CShellActivator,FishActivator,PowerShellActivator,PythonActivator,XonshActivator

✔ Successfully created virtual environment!
Virtualenv location: /Users/addlema/.local/share/virtualenvs/easy-mkdocs-x9vsCPfK
Pipfile.lock (49dc4f) out of date, updating to (6ebd50)...
Locking [dev-packages] dependencies...
Locking [packages] dependencies...
Building requirements...
Resolving dependencies...
✔ Success!
Updated Pipfile.lock (6ebd50)!
Installing dependencies from Pipfile.lock (6ebd50)...
  🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 32/32 — 00:00:12
To activate this project's virtualenv, run pipenv shell.
Alternatively, run a command inside the virtualenv with pipenv run.

easy-mkdocs on  master [?] on 🐳 v20.10.6 via 🐍 3.9.6 took 32s
➜
```
