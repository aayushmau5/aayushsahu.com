---
title: "GSoC at Postman and AsyncAPI"
date: 2021-09-01T19:29:43+05:30
description: "Final blog for my GSoC journey"
tags: ["gsoc", "open-source", "asyncapi"]
draft: false
cover:
  image: "/blogImages/gsoc-final/gsoc-postman-asyncapi.jpeg"
  alt: "Poster with GSOC, Postman & AsyncAPI logo"
---

# Introduction

This year, [AsyncAPI](https://www.asyncapi.com/) participated in Google Summer of Code under Postman. A project that AsyncAPI included was AsyncAPI diff(aka AsyncDiff). The description included "AsyncDiff is a library that compares two AsyncAPI files and provides information about the differences by pointing out explicitly information like breaking changes".

I was really interested in this project because I wanted to know how certain diffing algorithms work, and I knew this project will provide me a deeper understanding of the AsyncAPI specification. You can see my proposal for this project [here](https://docs.google.com/document/d/1ITOVGcGUihEQTEyyKR1IA-4pbdpRixRQxb7-ixhGajc/edit?usp=sharing).

I'm writing this blog in order to document my GSoC journey as well as provide some information that other GSoC/non-GSoC students will find useful. Let's start.

# Working on the project

Since this project had to be started from scratch, there was a quite a bit of planning to do on how everything will work together. This project has 3 main components that works together:

- generating the differences between two AsyncAPI documents
- categorizing those differences
- generating the output

Each component had its own set of challenges. Lets see what they were and how we tackled it.

## Generating the differences between two AsyncAPI documents

The main Input/Output flow of this library was, user will provide two **parsed** AsyncAPI data and the output will contain the differences as well as the type of change(checkout the diagram below 👇).

![flow](/blogImages/gsoc-final/diff-flow.png#center)

Thus, we have two parsed AsyncAPI data in a JSON format. In order to generate a diff between two JSON data, we can either **make our own JSON differ** or **use a pre-built library**. Luckily, [Lukasz Gornicki](https://github.com/derberg)(AsyncAPI maintainer) made that decision clear for me. (Thanks, Lukasz! 🙌)

![comment](/blogImages/gsoc-final/lukasz_comment.png#center)

Now, it was time for me to decide which JSON diffing library to use. And let me tell you, [**there were a lot**](https://github.com/asyncapi/diff/issues/10#issue-935128289). Eventually I settled for [fast-json-patch](https://github.com/Starcounter-Jack/JSON-Patch), mainly because of its performance and the format it outputs the diff.

I wrote a function which will take two JSON data and call our diffing library and return all the diffs in an array.

## Categorizing the diffs

One main feature of this project is the ability to show which changes can be a `breaking`, `non-breaking` or `unclassified` change.

This is where my mind yelled, "Hold up!, why categorize? Every change is a breaking change!!". Well it turns out, that's not the case. From my perspective, a perspective of a developer, everything seemed a breaking change.

But if your application is going to be used by lots of people, you **don't** think from a perspective of a developer. Instead, you think from the perspective of a **user**.

This way of thinking helped us categorize every changes.

## Generating the output

This was the last bit of challenge we faced, and it was a pretty big one. We needed to decided what format of output we want to show to the user. We had to generate an output that will be extensible and robust, as well as keep it backwards compatible.

The question which made it clear to choose an output format was "How is this library going to be used in the future? Will the output format still hold? If not, can we extend it without breaking the applications that depend on the format of previous output?"

# The final outcome of this project

After weeks of brainstorming, tackling various problems, and facing some whacky challenges, we finally have a working library. Checkout the source code [here](https://github.com/asyncapi/diff/).

Wanna take it for a spin? Just run `npm install @asyncapi/diff` and you are good to go. Also, don't forget to checkout the docs ;)

# Interacting with mentors

My mentors for this project were [Vinit Shahdeo](https://github.com/vinitshahdeo) and [Anubhav Vats](https://github.com/onbit-syn). And they provided me with all the guidance, help and encouragement. We used to meetups once or twice every week. During the meetups, I would report them about my progress, and what to do next. Having meetups with mentors was definitely great, we used to brainstorm ideas and how to tackle certain problems.

I would say this project was successful just because of my mentors and their help :)

# What's left and what's next

We were able to do a lot of things during the past 10 weeks, but there's still endless possibilities of things we can do. Highlighting a few key next steps here:

- More way of formatting the output
- Integration into AsyncAPI CLI
- Integration into AsyncAPI studio
- Maybe as a github action which will highlight if the change to AsyncAPI document is safe or not(just wondering 🤔).

# Some key takeaways

Here are some main takeaways from this blog:

- Do not forget to think from the perspective of a user.
- Think about how your project will be used in the future.
- If you code generates an output that users interact with, always think about how can it extended while keeping it backward compatible.

# Final thoughts

GSoC provided me an opportunity to contribute more to open-source, and I would like to help others contribute to more AsyncAPI projects. I would also love to contribute to other projects as well.

Now that GSoC is coming to end, **is this the end of the journey?**

**Spoiler alert!** No.

GSoC provides a great opportunity for folks to contribute/get-started in Open-Source, but GSoC coming to end does not mean that the opportunity to contribute to open-source is over. You can **and should** still contribute to open-source.

# Thank You

Thanks to the Postman and AsyncAPI organization for providing me with help and continuous support during the program. All of this would never have been possible without the support of the AsyncAPI community.

Special thanks to my mentors, as well as [Lukasz Gornicki](https://github.com/derberg), [Maciej Urbańczyk](https://github.com/magicmatatjahu) & [Jonas Lagoni](https://github.com/jonaslagoni) for your outstanding reviews as well as for helping me sort out things, and encouraging me throughout my journey 😄

Looking forward to continue being a part of and keep on contributing to this amazing community! ✌️
