---
title: "Publishing JavaScript/TypeScript packages on npm registry"
date: 2021-07-14T10:58:50+05:30
draft: false
tags: ["javascript", "typescript", "npm"]
---

### Introduction

I recently published my NodeJS CLI project called [`projman`](https://github.com/aayushmau5/projman) on the npm registry. It is written in TypeScript, so there were some additional steps to be taken when publishing it on npm.

This guide documents the steps to publish a JS as well as TS package on npm. I'm assuming you already have a JS or TS project setup, and just looking into how to publish that project.

There are some additional steps to be done for publishing TS projects, which I'm gonna **mark** as **`TS`** expilicity. Non-`TS` steps can be followed for **JS projects**.

This guide will use `npm` but if you prefer `yarn`, you can check the [yarn docs](https://yarnpkg.com/cli/install) to get see the equivalent command.

If this guide doesn't cover what you are looking for, check out the [npm docs](https://docs.npmjs.com/). They are really great :)

Let's get started 🚀 !!!

### Prerequisites

1. You must have `npm`(comes with NodeJS) or `yarn` installed(duh! xD).
2. You must have a npm account. You can signup [here](https://www.npmjs.com/signup).

### Login using `npm login`

After you have signed up, open your terminal & run `npm login`. It will ask you for your `username`, `password` and `email`. This will verify your account so that during the publishing of a package, npm will publish through your account.

You can also check if you are logged in or not using `npm whoami`. This should return your username if you are logged in. In case you are not logged in, it will throw an error saying `This command requires you to be logged in`.

You can also logout using `npm logout`.

### Configuring `package.json`

Before publishing you package, you need to configure some stuff on your package's `package.json` file. Lets see what those configuration are:

**For JS packages**

The following is a `package.json` file for a JS package.

```json
{
  "name": "<name-of-the-package>",
  "version": "<package-version>",
  "description": "<description>",
  "main": "<main-entry-point>",
  "types": "<types>",
  "scripts": {
    "start": "node index.js"
  },
  "repository": {
    "type": "git",
    "url": "<repo-url>"
  },
  "keywords": ["keyword1", "keyword2"],
  "author": "xxxx",
  "license": "<license>",
  "bugs": {
    "url": "<repo-url>"
  },
  "homepage": "<homepage>",
  "dependencies": {},
  "devDependencies": {}
}
```

While you may be familiar with some properties like `name`, `scripts`, `dependencies` & `devDependencies`, let's see some non-familiar properties which you should look into.

- `version` - This property specifies the version of your package. You should follow the Semantic Versioning(aka semver) scheme for versioning your packages. Read more about semver [here](https://nodesource.com/blog/semver-a-primer/).

  ```
  ex. "version": "1.0.1"
  ```

- `main` - This should be the main entry point of your package. What does it mean? Suppose you `import` or `require` a package like `const foo = require('package')`, the `foo` variable will be the object/function that you exported from your package's `main` entry point.

  ```
  ex. "main": "modules.js" // relative path is used
  ```

  If you don't provide any value for `main`, it will default to `index.js`.

- `types` - This is used to provide type definitions for your package. It points to a declaration file(having extension of `.d.ts`). This is used when you have a JS package, but you want to provide support for TS as well.

  > **Sidenote:** You should check [Definitely Typed](https://definitelytyped.org). It contains lots of TS definitions for JS packages.

  ```
  ex. "types": "index.d.ts"
  ```

- `repostiory` - Provides information about the package's repository.

- `bugs` - The URL to make an issue in case a bug is discovered by a user, and they want to report it to the package's maintainer.

- `homepage` - The homepage of the package. In case you have made a fancy website for you package. Most of the time, people just point it the repository's URL.

#### `package.json` for TS package

There's a **slight** variation in our `package.json` for a TypeScript package.

But first, we need to look at the directory structure of typical TS project.

```
.
├── dist
│   ├── ....js       # other js files
│   ├── index.d.ts   # declaration file
│   └── index.js     # main entry point
├── src
│   ├── ....ts       # other ts files
│   └── index.ts
├── package.json
└── tsconfig.json
```

`src` contains all our source TypeScript files, and `dist` contains the transpiled code which we get by running the TypeScript compiler.

`dist` is something you don't want to push into your repository, therefore, it usually gets ignored by git(through `.gitignore` file which we will talk about later).

Let us now see the `package.json` file for TS package:

```json
{
  "name": "<name-of-the-package>",
  "version": "<package-version>",
  "description": "<description>",
  "main": "dist/<main-entry-point>",
  "types": "dist/<types>",
  "scripts": {
    "build": "tsc",
    "prepack": "npm run build"
  },
  "repository": {
    "type": "git",
    "url": "<repo-url>"
  },
  "keywords": ["keyword1", "keyword2"],
  "author": "xxxx",
  "license": "<license>",
  "bugs": {
    "url": "<repo-url>"
  },
  "homepage": "<homepage>",
  "dependencies": {},
  "devDependencies": {}
}
```

The only things that has been changed are:

- `main` - The prefix `dist/` has to be added to the main entry point.

- `types` - The prefix `dist/` has to be added here as well.

- `scripts` - You might notice we have a new script called `prepack` in the `scripts` property.

  `prepack` is a command that is ran by npm itself, before publishing a package.

  In this case, `prepack` is used to build our TypeScript package by running the TypeScript compiler before publishing.

### Setting up `tsconfig.json` for TS packages

There are certain configurations(only two) that we need to setup for a TS package. Chances are you already have it setup, but lets go through it quickly.

Here's an example `tsconfig.json` file(most of the part has been stripped out).

```json
{
  "compilerOptions": {
    ...
    "outDir": "./dist",
    "declaration": true,
    ...
  },
}
```

The main configurations are:

- `outDir` - which basically tells our TS compiler in which directory to put the compiled JS output in. This is the reason why we are adding the `dist/` prefix in our `package.json`.

  You can change it to your liking, but don't forget to update package.json as well.

- `declaration` - Setting this to `true` will cause our TS compiler to output a declaration file as well. The declaration file ends with extension `.d.ts`. This is what we are putting in our `types` property of package.json.

So, these are the main properties we need to take care in our tsconfig.json file. We are now one step closer to publishing our package!!!

### Configuring `.gitignore` & `.npmignore`

If you are putting your codebase in a git repository, chances are you already have a `.gitignore` file. `.gitignore` is used to ignore certains files and directories so that they won't be uploaded to the git repo(only in absence of `.npmignore` file).

As it turns out, during the publishing of your package, `npm` will already **ignore** the files/directories that are in your `.gitignore` file.

But, **Why would you wanna ignore certain files from being published?**

Read this great [article](https://medium.com/@goldglovecb/npm-needs-a-personal-trainer-537e0f8859c6) on why we should ignore certain **un-necessary** files from being published.

#### `.gitignore` vs `.npmignore`

It's a pretty common case that you might want to ignore certain files from being pushed to git repo, **but** want those ignored files to be **published** on the npm registry. How would you do that?

Introducing `.npmignore`. This file is used to prevent certain files/directories from being published. It's just like `.gitignore` but this time, `npm` will look into the `.npmignore` file to check what files/directories it will ignore.

In absence of `.npmignore` file, npm uses the `.gitignore` file ignor files/directories. More info in [this stackoverflow](https://stackoverflow.com/questions/24942161/does-npm-ignore-files-listed-in-gitignore) thread.

### Using `.npmignore` for TS packages

For a TS package, you **would not** want to publish your `src` directory which contains all the TypeScript files, instead you would want to publish the `dist` directory where all the compiled JS code lives.

But since, you have your `dist` directory ignored in `.gitignore` file. How would you publish this `dist/` directory?

No worries, `.npmignore` to the rescue!!!

As we learned above, if `.npmignore` file in present, npm will **ignore** the `.gitignore` file, and use `.npmignore` instead. So, here's how your `.gitignore` & `.npmignore` file should look like:

```
// .gitignore
node_modules/
dist/
.env
```

```
// .npmignore
node_modules/
src/
.env
```

Can you spot the difference?

Right! `.gitignore` has `dist/` where as `.npmignore` has `src/` on the list of directories to ignore.

**Now, let's move onto the final step**!!!

### Publishing packages using `npm publish`

You can publish your package from the npm command itself. That's really cool!

npm has an option called `publish` to publish your packages(obviously :p). This step requires you to be logged in. Check out the [first section](#login-using-npm-login) to login.

Here's how the whole thing comes together.

You run

```
npm publish
```

in the current directory of the package you want to publish.

`npm` will run the `prepack` command(See [the prepack script](#packagejson-for-ts-package)) to build our TypeScript project(you can ignore this line if you have a JS package).

and then, it will zip all the contents of current project while ignoring certain files/directories present in `.npmignore`(or `.gitignore`), and publish it on the npm registry and **that's it!!** You should see your package published on the npm registry.

Hooray 🎉 !!!

So that concludes this guide on how to publish your package using `npm`:)

### Further reading

1. [Awesome npm](https://github.com/sindresorhus/awesome-npm) - A curated list of awesome npm tips and packages.
1. The official npm [docs](https://docs.npmjs.com/).
1. The npm [docs](https://docs.npmjs.com/cli/v7/configuring-npm/package-json) on configuring `package.json`.
