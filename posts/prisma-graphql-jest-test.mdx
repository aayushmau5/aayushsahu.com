---
title: "Guide to setting up Jest testing environment in TypeScript & GraphQL NodeJS Server"
date: 2021-05-09T10:45:15+05:30
draft: false
description: "Integration or Unit tests in TypeScript and GraphQL using Jest in NodeJS"
tags: ["graphql", "typescript", "jest", "testing"]
cover:
  image: "/blogImages/ts-gql-jest/ts-gql-jest-cover.png"
  alt: "TS GraphQL Jest logo"
---

When your project gets big enough to check each parts manually, tests does it for you. You write tests, and test runners do all the work and check if the application does what its supposed to do or not.

### Introduction

This guide walks you through setting up a **Jest** testing environment in your **TypeScript** + **GraphQL** code(**Back-end**). Even if you are not using **GraphQL**, most of the setup will be transferable to your TS code.

### Prerequisites

I'm assuming you have already setup a NodeJS TypeScript Server, generated the `tsconfig.json` file as well as setup a GraphQL server(Apollo, TypeGraphQL etc).

**Let's get started!**

### Setting up Jest

We will use [Jest](https://jestjs.io/) as our test suite. [TS-Jest](https://github.com/kulshekhar/ts-jest) lets us test TypeScript code, so we will use this as well.

```
npm i -D jest @types/jest ts-jest
```

Here, we have installed `jest`, `ts-jest` and `@types/jest`(for types) as dev dependencies(as tests are usually for development purpose).

Next, we generate the Jest **config** file using

```
npx ts-jest config:init
```

which will generate a `jest.config.js` file in your project directory.

You can either tweak the config file to your liking or leave it as it is. I'm leaving it as it is because the default config works just fine.

### Configuring `tsconfig.json`

In order for TypeScript to correctly type(& recognize) the `.test.ts` files, we need to configure our `tsconfig.json` file.

We have a add "jest" and "node" in our "types" array. This tells the TypeScript compiler to include "jest" and "node" types in the global scope(available everywhere).

```json
// tsconfig.json
{
  "compilerOptions": {
    // .... other configs
    "types": ["jest", "node"] // Add this line
    // .... other configs
  }
}
```

Now, TypeScript will not throw any errors when we write tests in our `.test.ts` files.

### Adding test script in `package.json`

We add a script in our `package.json` file. Let us name it `test` whose value will be `jest`

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Now, you will be able to do `npm test` to run `jest` which will take all your tests files and run it.

### Adding test files

We will put all our test files in a **"tests"** directory, just for the sake of cleanliness.

The test files should have to following naming convention `<file-or-function>.test.ts`, where `<file-or-function>` will the the file or function we are testing.

Here's a sample of what a test file will look like:

```ts
// user.test.ts
describe("User", () => {
  it("creates user", (done) => {
    const user = createUser();

    expect(user).toMatchObject({
      id: 1,
      name: "something",
    });

    done();
  });
});
```

After doing `npm test`, this test will automatically be picked up and ran.

**So, this is it for adding Jest in your TypeScript project.**

Every steps above will be same for non-GraphQL project as well.

### Setting up GraphQL for testing

Now we are going into GraphQL stuff, so buckle up.

I'm assuming you have already setup a GraphQL server. I'm just gonna use a Hypothetical query, you should use the real ones.

There are two ways(atleast that I can think of) of testing a GraphQL server:

- You run a temporary GraphQL server and send queries to that server.

- Use the `graphql` function from "graphql" package to run a particular query.

We are going with the second approach because it's faster to setup.

#### Implementing the graphql call function

Inorder to test a GraphQL Query(or mutation), we will implement a `graphqlCall` function which will call a particular query(thus invoking our resolver).

In our `tests/helper.ts` file, enter the following:

```ts
import { graphql } from "graphql";
import { Maybe } from "graphql/jsutils/Maybe";

import getSchema from "../schema";

interface Options {
  source: string;
  variableValues?: Maybe<{
    [key: string]: any;
  }>;
}

export const graphqlCall = async ({ source, variableValues }: Options) => {
  const schema = await getSchema(); // schema
  return graphql({
    schema,
    source,
    variableValues,
  });
};
```

There's a lot of things going on here. Lets break it down:

1. First of all, we are importing `graphql` from **"graphql"** package.

   This `graphql` function is responsible for calling our resolvers.

1. `Maybe` imported from "graphql/jsutils/Maybe" is used in our interface `Options`.

1. `getSchema` is a function which will return our GraphQL schema.

   (Schema = Type Definitions + Resolvers)

1. `Options` is an interface which is used to "type" the object passed as an argument to `graphqlCall` function.

1. Next, we export the `graphqlCall` function.

   This function takes an object as argument. The object should have `source` as well as `variableValues`(optional) keys.

   - `source` will be our GraphQL query or mutation, passed as a string.

   - `variableValues` will be an object which will contain the values of the variables defined in our `source` query.

   We call the `getSchema` function which will get our Schema.

   Next, we return the **call** to `graphql` function passing in the necessary parameters. The **call** to `graphql` function returns a promise(thus, using with `await` is necessary).

#### Generating Schema

This will be short section on generating schema.

If you are using **TypeGraphQL**, you are already familiar with `buildSchema` function which takes the necessary resolvers, and generates a schema.

For **Apollo Server**, there is `makeExecutableSchema` function which takes the `typeDefs` as well as `resolvers` and returns a schema.

You can even use [GraphQLTools](https://www.graphql-tools.com/docs/generate-schema) to generate a schema.

In the above [section](#implementing-the-graphql-call-function), we can use any of the following option inside the `getSchema` function to generate the schema. This depends on you.

### Testing GraphQL code

Now we are ready to test our GraphQL code.

Lets make an arbitrary GraphQL type definition.

```graphql
type User {
  id: String!
  email: String!
}

type Query {
  user: User
}

type Mutation {
  addUser(email: String!, password: String!): User
}
```

I'm not gonna make resolvers for these. Just assume we have `users` and `addUser` resolver functions already(which we will call in our tests).

Here's our example **`user.test.ts`** file.

```ts
import { graphqlCall } from "./helpers";

// User Query
const UserQuery = `
  {
    user {
      id
      email
    }
  }
`;

// User Mutation
const UserCreationMutation = `
mutation CreateUser($email: String!, $password: String!) {
  addUser(email: $email, password: $password) {
    id
    email
  }
}
`;

describe("User", () => {
  it("gets a single user", async (done) => {
    const response = await graphqlCall({ source: UserQuery });
    // notice the above line

    expect(response).toMatchObject({
      data: {
        user: {
          email: "something@something.com",
        },
      },
    });

    done();
  });

  it("creates a User", async (done) => {
    const response = await graphqlCall({
      source: UserCreationMutation,
      variableValues: {
        email: "something2@something.com",
        password: "something",
      },
    });

    expect(response).toMatchObject({
      data: {
        addUser: {
          email: "something2@something.com",
        },
      },
    });

    done();
  });
});
```

Run **`npm test`** to start our test.

Here's a breakdown of what we did:

We created a `query` as well as `mutation` for "User" and passed that into our `graphqlCall` function as `source` field and passed the required arguments in `variableValues` field.

The `graphqlCall` function executes our queries(and calls resolvers), and returns the result. We then check the result to see if it matched the given object or not.

**And, that's how we test our GraphQL code.**

### Some tips

**1. Working with database and Jest seems to hang**

If you are working with database, and Jest seems to **"hang"** after running the tests, chances are you might have forgotten to disconnect from the database.

This is why you can use `afterAll` jest function, which runs after all the tests have been completed. You can disconnect from your database inside the `afterAll` function, that way Jest just exits after the test completes.

Here's an example:

```ts
afterAll((done) => {
  db.disconnect();
  done();
})

describe("test", () => {...})
```

**2. Clear the database before running your tests**

It is recommended to use a **"test" database** for all your tests. Make sure to make a program or script which clears your "test" database before running your test.

You can even combine it with `package.json`'s `test` script, like:

```json
{
  "scripts": {
    "test": "npm clearDatabase && jest"
  }
}
```

**And, that's a Wrap up.**

We have now seen how to test our TypeScript + GraphQL code with Jest.
