![Banner](https://user-images.githubusercontent.com/54525741/149302774-07732e60-26d4-46bf-9529-825563af5d45.png)

# AAYUSHSAHU.COM

My portfolio website powered by:

- NextJS with TypeScript
- CSS(no libraries, preprocessor, etc.)
- MDX(for blogs)

## Features

- Dynamic OpenGraph image generation for blogs using Cloudinary
- Commenting system powered by [Giscus](https://giscus.app/)
- Search blogs by tags

Hosted on **Vercel** 💪

Feature requests are welcome :)

## Project Overview

- `components/*` - Components used throughout the code
- `components/MDX/*` - Components used inside MDX blogs
- `components/React/*` - Components used only for non-MDX code i.e., site pages
- `pages/*` - All the pages in the website
- `config.json` - Configs regarding user, etc.
- `styles/*` - Styles for pages
- `public/*` - Public data, contains images used in blogs, resume, & projects
- `utils/*` - Common utilities used in blogs like table of contents, blog posts, etc.
- `posts/*` - All the blog posts written in MDX

## Running Locally

- Fork/Clone this repo
- Install dependencies `npm install`
- Run locally in development mode `npm run dev`

## To-do

- [ ] Move to `next-seo`(https://github.com/garmeeh/next-seo#readme)
- [ ] Code highlight lines feature (https://github.com/timlrx/rehype-prism-plus/issues/20)
