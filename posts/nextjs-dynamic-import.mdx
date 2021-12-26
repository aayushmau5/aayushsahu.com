---
title: "NextJS Code Splitting & Dynamic Imports"
description: "Quickly looking at dynamic imports using NextJS"
date: 2021-12-02T16:18:15.215Z
tags: ["nextjs"]
draft: false
showToc: false
---

NextJS **already** does code-splitting based on routes(aka route-based splitting).

So, if you have multiple routes(based on the structure of your `pages/` directory) like

```
components/
├── SignupForm.js
└── LoginForm.js
pages/
├── home.js
├── login.js
└── profile.js
```

So, when you visit `/home`, only the data required for `home.js` will be fetched.

Then, when you go to `/login` or `/profile`, the data for them will be fetched separately.

Now, lets suppose we have a `signup` form in our `/login` page component, like

```jsx
// pages/login.js
import { useState } from "react";

import LoginForm from "components/LoginForm";
import SignupForm from "components/SignupForm";

export default function LoginPage() {
  const [showSignupForm, setShowSignupForm] = useState(false);

  function toggleSignupForm() {
    setShowSignupForm((state) => !state);
  }

  return (
    <div>
      {showSignupForm ? <SignupForm /> : <LoginForm />}
      <button onClick={toggleSignupForm}>
        {showSignupForm ? "Login" : "Signup"}
      </button>
    </div>
  );
}
```

Without dynamic imports, this LoginPage will contain both the `LoginForm` component as well as `SignupForm` component in the bundle, i.e. when the data for `/login` is fetched.

This is an opportunity to dynamically import(sometimes called as component-based splitting) your `SignupForm` component. This means that the `LoginPage` bundle won't contain the `SignupForm` data, instead it will be fetched separately when the user asks for it. Thereby decreasing the data fetched when `/login` is accessed.

To use dynamic import with NextJS, there's a `dynamic` function provided by `next/dynamic`. Checkout the [Official NextJS Docs on dynamic imports](https://nextjs.org/docs/advanced-features/dynamic-import).

Use dynamic import,

```jsx
// pages/login.js
import { useState } from "react";
import dynamic from "next/dynamic";

import LoginForm from "components/LoginForm";

const SignupForm = dynamic(() => import("components/SignupForm")); // dynamically imported

export default function LoginPage() {
  const [showSignupForm, setShowSignupForm] = useState(false);

  function toggleSignupForm() {
    setShowSignupForm((state) => !state);
  }

  return (
    <div>
      {showSignupForm ? <SignupForm /> : <LoginForm />}
      <button onClick={toggleSignupForm}>
        {showSignupForm ? "Login" : "Signup"}
      </button>
    </div>
  );
}
```

Thus, when you look at the bundle size of your `LoginPage`, it will be less than it was before because the `SignupForm` is not included in the bundle, it is to be fetched separately, when user navigates to Signup form(setting `showSignupForm` to `true`).

## TL;DR

Route based splitting splits your bundle based on routes.

Using dynamic imports, you are basically separating your component(which you have dynamically imported) from the rest of the page. This separated component will have its down chunk of data, that will be fetched separately when the user asks for it.

## Read more at:

- [Official NextJS Docs on dynamic imports](https://nextjs.org/docs/advanced-features/dynamic-import)
- [Master code splitting with dynamic imports in Next.js](https://daily.dev/blog/code-splitting-with-dynamic-imports-in-nextjs)
- [Next.js Performance: Making a Fast Framework Even Faster](https://calibreapp.com/blog/nextjs-performance)
