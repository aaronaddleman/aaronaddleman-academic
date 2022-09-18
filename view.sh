#!/usr/bin/env bash

hugo mod clean
hugo mod get -u ./...
hugo server --disableFastRender --buildDrafts
