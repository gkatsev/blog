---
title: Relaunching My blog
description: Relaunching my blog and a short technical description
permalink: posts/{{ title | slug }}/index.html
date: Last Modified
tags: []
---
Recently, a friend asked me a question around some gear I have that I've had trouble finding in my order history, and I've had trouble finding it previously. This reminded a comment from [Scott Hanselman](https://www.hanselman.com/blog/) (I've lost where, unfortunately, though, I think perhaps on one of this videos somewhere?) where he mentioned that one of the reasons he blogs is to keep a record of things for himself to see later.

So, this made me decide to relaunch my blog! The last time I've written was on the [Video.js blog](https://videojs.com/blog). Though, a long time ago, I used [posterous](https://en.wikipedia.org/wiki/Posterous) (for those that remember). I liked it because it made things simple but when they shut down I stopped (not that I had many posts there).

## What's going to be here
I've previously thought that you had to be a lot more deliberate with posts, but, instead, I'll just write whatever I want here. For example, weird things that I find out that probably wouldn't fit in a tweet. Particularly, things that I might find it useful for myself in the future and that maybe others could find interesting too.

Plus, I could use the practice of writing more!

The first thing I know I'll share is a post about my various gear, specifically, my audio related gear like headphones and microphones, so, look forward to it.

I'm actually pretty excited to have a blog especially since I've realized I don't need to put pressure on myself to make the best blog post ever, especially, for this personal blog.

## The technical parts of this blog
### [11ty](https://11ty.dev)
I've decided to have this blog run on 11ty due to the simplicity of 11ty. I've originally going to start with their base template, but I found [Eleventy Duo](https://github.com/yinkakun/eleventy-duo) which I liked how it looks, so, I've based this on that and made some tweaks. You can see them in [GitHub](https://github.com/gkatsev/blog).

#### Changes made
One of the first changes I've made was updated 11ty to latest version, since Duo depended on a slightly older version. Afterward, I had to [fix the mermaid rendering](https://github.com/gkatsev/blog/commit/a67d8faa46e55f7ddeade59e53ebf46391ac3742) because it seems like 11ty updated to make their plugins asynchronous, so, had to make an inline plugin for the mermaid rendering. Though, probably could've removed it until needed.

The other big change that I've made so far was change some of the min and max widths of the main content area of the site.

#### Upcoming changes

There's still some things I want to add such as a dark theme, [dynamic social images](https://github.com/5t3ph/eleventy-plugin-social-images). I'm sure there's other interesting things to do, but those are the first two.

### Hosting
Originally, I wanted to host this with GitHub Pages, particularly since this repo was apparently previously set up with my custom domain, but when I tried it again, it wasn't working right. Plus, getting PR previews isn't simple to do with GH Actions.
So, I've decided to host via Netlify, which I find quite helpful.
I've originally used it to set up [PR Previews for Video.js](https://github.com/videojs/video.js/pull/4912) which made reviewing and testing PRs against Video.js quite a lot easier. If you don't have something like that set up in your project, I highly recommend it! (Doesn't even need to use Netlify)

I wanted the PR Previews because it would allow me for longer or trickier posts to make a PR for it and verify the hosted version. Then, when it's merged the post will get released. Plus, would allow me to work on things like a dark theme in parallel.

## Comments, questions, concerns?
My 7th grade social studies teacher said that a lot to get comments, questions, or concerns from their students and that phrase has stuck with me, though, I don't get to use it much.
If you have any comments, questions, concerns, you can find me on {% twitter %} or get my contact details on my [old-old website's contact page](http://gkatsev.com/contact.html).

