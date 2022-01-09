---
title: "Guide to setting up Types for Apollo GraphQL with Typescript in the Backend"
description: "The type safe of using Apollo GraphQL with Typescript"
date: 2021-05-03T12:23:26+05:30
draft: false
tags: ["apollo", "graphql", "typescript"]
cover:
  image: "/blogImages/graphql-typescript/ts-gql.png"
  alt: "TS with Apollo"
---

Using [Apollo GraphQL](https://www.apollographql.com/) with JavaScript has always been pretty straighforward and error prone.

### Why Apollo GraphQL with JS Error Prone?

Because you have to manually type the resolvers for each GraphQL Query and It's easy to oversee a thing or two which will only be picked up when you are checking your implemention(either using tests or manually).

Overall, It's not a nice developer experience.

**Enter TypeScript**

TypeScript provides you with an awesome type system which vastly improves the developer experience.

**But** It won't work out of the box with Apollo GraphQL.

So, here's a little tutorial on how to get TypeScript working with your Apollo GraphQL server and make **Type safe** resolvers.

### Basic Setup

I'm assuming you already know GraphQL and have setup a basic TypeScript NodeJS server setup. (If you wanna learn GraphQL with Apollo, try [How to GraphQL](https://www.howtographql.com/) and from [Apollo Docs](https://www.apollographql.com/docs/tutorial/introduction/) as well)

Here's my folder structure:

```
src
├── schema.ts               # Contains the schema
├── resolver                # Contains the resolvers
│   └── index.ts
└── index.ts                # Main entry file
```

#### Schema

Here's what the `schema.ts` file looks like(We are going with the basic Books and Author Example)

```js
// schema.ts
import { gql } from "apollo-server"; // or apollo-server-express

export const Schema = gql`
  type Author {
    name: String!
  }

  type Book {
    id: ID!
    name: String!
    rating: Int!
    author: Author!
  }

  input BookInput {
    name: String!
    rating: Int!
    authorName: String!
  }

  type Query {
    getAllBooks: [Book]!
    getAllAuthors: [Author]!
    getBookByName(name: String!): Book
  }

  type Mutation {
    addBook(data: BookInput!): Book
  }
`;
```

#### Resolver

Here's what my `resolver/index.ts` looks like

```js
//index.ts
interface Author {
  name: string;
}

interface Book {
  id: number;
  name: string;
  rating: number;
  author: Author;
}

const Books: Book[] = [
  {
    id: 1,
    name: "First Book",
    rating: 4,
    author: {
      name: "First Person",
    },
  },
  {
    id: 2,
    name: "Second Book",
    rating: 4,
    author: {
      name: "Second Person",
    },
  },
];

function getAllBooks() {
  return Books;
}

function getAllAuthors() {
  return Books.map((bookObject) => bookObject.Author);
}

function getBookByName(_parent, args) {
  const name = args.name;
  return Books.filter((bookObject) => bookObject.name === name);
}

function addBook(_parent, args) {
  const { name, rating, authorName } = args.data;
  Books.push({
    id: Books.length + 1,
    name,
    rating,
    author: { name: authorName },
  });
  return Books[Books.length];
}

export const resolvers = {
  Query: {
    getAllBoosk,
    getAllAuthors,
    getBookByName,
  },
  Mutation: {
    addBook,
  },
};
```

As you can notice, our resolvers don't have any function signature. You can make it yourself, but that is a tedious task. This is why we need to generate types for our resolver functions.

**Did you notice the typo?**

Look again at line `58`. This is a mistake that can be made very easily. But types will negate this issue as well.

**Finally, here's what you are looking for.**

### Adding types with GraphQL Code Generator

For adding types to our resolvers, we need to make types based on our schema.

Fortunately, there exists a library for this purpose called [**GraphQL Code Generator**](https://www.graphql-code-generator.com/) which will take our schema and output types based on that schema which we can use in our resolver functions.

#### Installation

```bash
npm install -D @graphql-codegen/cli
```

We will use the installation wizard instead of manually setting it up. If you want to see other methods, see the [installtion page](https://www.graphql-code-generator.com/docs/getting-started/installation).

```bash
npx graphql-codegen init
```

Go through the setup process(use spacebar to select a row).

For the schema path, it is recommended to give a development server url(otherwise we have to make a schema `.gql` file and give that path instead)

**Here's all the necessary steps**

#### Step-1

![first](/blogImages/graphql-typescript/step-1.png)

#### Step-2

My `graphql` server is running on `http://localhost:8000/graphql`. Yours might be running on different port or route, use that.

![first](/blogImages/graphql-typescript/step-2.png)

#### Step-3

![first](/blogImages/graphql-typescript/step-3.png)

#### Step-4

![first](/blogImages/graphql-typescript/step-4.png)

#### Step-5

![first](/blogImages/graphql-typescript/step-5.png)

Run `npm install` then `npm generate` to generate the schema file(**NOTE:** Your graphql server should be running)

If all went well, you will have a type file generated in `src/generated/graphql.ts`(if you wanna change this, put desired path in [Step-4](#step-4))

**Now we are ready to add types to our resolver functions.**

### Adding types to resolver functions

If you look inside the `src/generated/graphql.ts` file, you will a whole lot of stuff. But main things are, `Resolvers`, `QueryResolvers` and `MutationResolvers`. These three are responsible for adding types to our Resolvers.

```ts
import {
  Resolvers,
  QueryResolvers,
  MutationResolvers,
} from "../generated/graphql";
//import path may differ based on the location of resolver file

function getAllBooks(): QueryResolvers["getAllBooks"] {
  return Books;
}

function getAllAuthors(): QueryResolvers["getAllAuthors"] {
  return Books.map((bookObject) => bookObject.Author);
}

function getBookByName(_parent, args): QueryResolvers["getBookByName"] {
  const name = args.name;
  return Books.filter((bookObject) => bookObject.name === name);
}

function addBook(_parent, args): MutationResolvers["addBook"] {
  const { name, rating, authorName } = args.data;
  Books.push({
    id: Books.length + 1,
    name,
    rating,
    author: { name: authorName },
  });
  return Books[Books.length];
}

export const resolvers: Resolvers = {
  // You will get autocompletions for the queries and mutations fields
  Query: {
    getAllBooks,
    getAllAuthors,
    getBookByName,
  },
  Mutation: {
    addBook,
  },
};
```

First, we start with line `32`. Here, we added `Resolvers` as a type(or interface) to our `Resolvers` object.

`Resolvers` basically looks like this

```js
interface QueryResolvers {
    getAllBoosk: (.....);
    getAllAuthors: (.....);
    getBookByName: (.....);
}

interface MutationResolvers {
  addBook: (....);
}

interface Resolvers {
  Query: QueryResolvers,
  Mutation: MutationResolvers
}
```

Main point to notice is that our `Resolvers` interface just looks like our GraphQL `Query` type. Thus, providing type safety on what Resolver functions you can make based on the interface.

No more Typos on Resolver function names.

For Mutations, you use `MutationResolvers`.

Now, looking at lines `8`, `12`, `16` and `21`. You see that I have added `QueryResolvers["<QueryNameResolverCorrespondTo>"]` as well as `MutationResolvers["<QueryNameResolverCorrespondTo>"]`. This is used to give types to our individual resolver function.

That means, you don't have to manually make types for your `parent`, `args`,`info` and the return type of your resolver. (`context` is typed with `any`, so you have to make your own interface for that.)

And, there you go. You are now getting the types in your Resolver functions.

I have covered only the basics of adding types in your Apollo GraphQL code But you can do a lot of more with **GraphQL Code Generator**. Checkout the docs [here](https://www.graphql-code-generator.com/docs/getting-started/index).

If you wanna see more in-depth example with real code, check out this article -> https://formidable.com/blog/2019/strong-typing/
