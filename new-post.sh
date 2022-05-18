#!/usr/bin/env sh

echo "---
title: CHANGE MY TITLE
description: Add a description
permalink: posts/{{ title | slug }}/index.html
date: Last Modified
tags: [default]
---" > src/posts/$@.md
