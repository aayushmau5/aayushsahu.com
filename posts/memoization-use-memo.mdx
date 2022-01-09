---
title: "Deep dive into Memoization + React's useMemo hook"
date: 2021-07-06T09:35:47+05:30
draft: false
description: "Looking into memoization and `useMemo` to improve some performance of our application."
tags: ["javascript", "react"]
---

I have been somewhat familiar with `useMemo` hook in React, but I had no idea what "Memoization" was, and why should we use it.

Therefore, I'm writing this blog in order to understand what Memoization is as well as take a look into react's `useMemo` hook.

### What is Memoization?

_From [wikipedia](https://en.wikipedia.org/wiki/Memoization),_

> Memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

Let's break down this definition.

- **optimization technique used primarily to speed up computer programs**

  - This phrase indicates that memoization is used to gain some performace benefits.
  - You might think that we can use memoization everywhere, but that's not the case everytime. Use memoization only for **expensive function calls**.

- **storing the results of expensive function calls**

  - This means that we are storing the `return` value of a function, like a **cache**.

  - It also says, **expensive function calls**. Here, a function is **expensive** in terms of system resources(Memory, CPU, etc.) consumed by that function, which, again, indicates that memoization is meant for expensive function calls.

- **returning the cached result when the same inputs occur again**

  - So, when we call this expensive function again, **with the same input**, we will get the same output but from the **cache** this time.
  - Instead of this expensive function running the whole operation again, and calculating the result, our memoized function will remember(store into cache) the input as well as the output returned by this expensive function. Thus, when we provide the same input, memoized function will first look into the cache for existing value, if found, it will return that cached value. Thereby preventing our expensive function from running again.

While the definition is good enough, let's take it a step further and look into how this work through code.

### How memoization works?

First of all, let me make some points on what we are gonna do here:

- **We will use a higher-order function.** A high-order function is a function which **returns** another function.
- There's a lot of ways to **cache** data, but for the sake of simplicity, we will just store the cached data in an object.
- Memoization is mostly suitable for **expensive functions**. For this example, we are gonna use a recursive factorial function. While this factorial function is not _that_ expensive, it will work for our use case right now.

That's all. Now, let's see an example code.

```js
function memoizer(callbackFunction) {
  const cache = {}; // This variable will act like our cache

  return function (input) {
    if (cache[input]) {
      // If there's a data related to our input, return that data
      return cache[input];
    }
    const result = callbackFunction(input); // running the expensive function
    cache[input] = result; // storing the result of that expensive function
    return result;
  };
}

function factorial(n) {
  if (n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const memoizedFac = memoizer(factorial);
memoizedFac(10); // From function call
memoizedFac(10); // From cache
```

Woah, that's a complex looking example. Let's break it down:

First, we have a function named `memoizer`, which is a **higher-order function**(because it is returning another function). This function's responsibility is to take in a function, and return another function with all the memoization technique built-in.

We are initialing a variable named `cache` which is an empty object for now. This will work as our cache storage.

Next, we `return` another function which has an `input` parameter. This is where we will pass the arguments to the function.

---

```js
if (cache[input]) {
  return cache[input];
}
```

With this block of code, we are checking if we have any data based on the value of `input` argument. (Side note: _How were we able the access the `cache` variable even if it is outside the wrapping function?_ **Closures**. You can read more about closures [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)).

---

```js
const result = callbackFunction(input);
cache[input] = result;
return result;
```

In case we don't have any cached data for an input, we run the **expensive** `callbackFunction` with the given input. This function will return a value, we store that value in the cache and return the value.

---

Next up, we have a recusrive `factorial` function, which we pass to our `memoizer` function. From the POV of `memoizer`, this `factorial` function is `callbackFunction`. The function returned by `memoizer` is stored in `memoizedFac` variable.

Now, when we call the `memoizedFac` for the first time, since the cache is empty, it will run the function and cache the return value of that function.

During the next call, since the input is same, it will return the data from the **cache** this time.

---

Aaand, that's it. Not that hard, you see. Next up, let's look at the performance we gain, since that's one of the reason why we memoize a function, right?

### Benchmark

We are now going to benchmark both the `memoizedFac` & `factorial` function in NodeJS. For this, we will use a benchmarking package called [benny](https://www.npmjs.com/package/benny).

In our `benchmark.js` file,

```js
const b = require("benny");

function memoizer(func) {
  const cache = {};
  return function (input) {
    if (cache[input]) {
      return cache[input];
    }
    const result = func(input);
    cache[input] = result;
    return result;
  };
}

function factorial(n) {
  if (n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const memoizedFac = memoizer(factorial);

b.suite(
  "Memoization benchmark",

  b.add("Memoized factorial", () => {
    memoizedFac(100);
  }),

  b.add("Simple factorial", () => {
    factorial(100);
  }),

  b.cycle(),
  b.complete()
);
```

Running the program using `node benchmark.js`, we get the following result:

![benchmark](/blogImages/memoization/benchmarks.png#center)

**Woah!**, Memoized function is freaking **99.18% faster** than non-memoized function. That's just pretty surprising and cool.

### useMemo in React

While making your own memoizer function is good, there's actually a better option for it on React. It's the `useMemo` hook.

`useMemo` hook does what you think it does, it memoizes the **return** value of a function.

Looking at the `useMemo` [docs](https://reactjs.org/docs/hooks-reference.html#usememo), here's what the function signature looks like

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

The first argument to the `useMemo` function is a function which has an **expensive** function, and the second argument is an array of **dependencies**. This array of **dependencies** is what will decide whether we should run the expensive function or return the value from cache.

> If no array is provided, a new value will be computed on every render.

During the initial render of your components, `useMemo` will run the `computeExpensiveValue` function and store the value of the return value of that function. It will also take note of the value of `[a, b]` argument. In case, we pass the same value of `[a, b]`, it will return the value from **cache** instead.

```js
function getValue(a, b) {
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  return memoizedValue;
}
```

Suppose, you run the `getValue` function again, passing the same arguments. This time, the returned value will be returned from the **cache**, and not from running the `computeExpensiveValue` function again.

If you run the `getValue` function again, but passing **different** argument this time, since this argument has not been in cache, it will cause the `computeExpensiveValue` to run again, as well as put the return value in cache.

For our factorial function, here's what the function will look like

```js
function getFactorial(n) {
  const memoizedValue = useMemo(() => factorial(n), [n]);
  return memoizedValue;
}

getFactorial(100); // Computed
getFactorial(100); // From cache
getFactorial(20); // Computed
```

### useCallback vs useMemo

The `useCallback` hook is similar to `useMemo` but it returns a memoized **function**, while `useMemo` has a function that **returns** a value. Check out the `useCallback` [docs](https://reactjs.org/docs/hooks-reference.html#usecallback) for more difference.

### Use Cases

You should use memoization, when you have

1. Expensive function calls i.e functions that carry out heavy computations.
2. Functions with a limited and highly recurring input range such that cached values don't just sit there and do nothing.
3. For pure functions i.e functions that return the same output each time they are called with a particular input.

### Some tips

1. You can check with profiling tools to identify expensive performance issues. Expensive in terms of resource usage.
1. While memoization can imporve performance, it doesn't mean that you should use it everywhere. Read [this](https://overreacted.io/before-you-memo/) great article by [Dan Abramov](https://mobile.twitter.com/dan_abramov) who goes through the things you should look into before going with `useMemo` in react.

### Further reading

1. [Understanding Memoization In JavaScript](https://scotch.io/tutorials/understanding-memoization-in-javascript)
1. [freeCodeCamp-Understanding memoize in JS](https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/)
1. [Understanding the React useMemo Hook](https://www.digitalocean.com/community/tutorials/react-usememo)
1. [React docs on `useMemo` hook](https://reactjs.org/docs/hooks-reference.html#usememo)
1. [Your Guide to React.useCallback()](https://dmitripavlutin.com/dont-overuse-react-usecallback/)
