---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Rust"
linktitle: "Rust"
date: 2022-06-20T21:13:34-07:00
type: book
summary: "My notes things about Rust"
---

I have found so many examples of utilities that use Rust. Then I found a video about how Rust could possibibly be the future language
for the cloud. Then my programming ears and gears perked up and then next thing I knew, I was writing this content for myself to learn
about Rust.

## Docs

When adding a library to the `Cargo.toml` and running `cargo build` to install its version you need, you can generated its docs with the following:

```shell
cargo doc --open
```

The result is something like the following:

![Screenshot of rust docs in a browser](/media/code_rust_index_docs.png "Screenshot of rust docs in a browser")