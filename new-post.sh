#!/usr/bin/env sh

echo "---
title: $@
description: Add a description
permalink: posts/{{ title | slug }}/index.html
date: Last Modified
tags: [default]
---" > src/posts/$@.md
