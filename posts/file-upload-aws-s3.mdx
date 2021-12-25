---
title: "Uploading files to AWS S3 using NodeJS"
description: "How to upload files to AWS S3 with certain features like limiting file size, streaming files, etc."
date: 2021-10-03T16:19:39+05:30
draft: true
---

### Introduction

So, I was working on a project that requires user to upload a desired file which would be stored in AWS S3. I have made this blog in order to have a "note" about the process of uploading files.

### What this blog will cover?

This blog will cover how one can upload files to AWS S3. The files being uploaded will not be chuncked, we are sending the file as a whole, thus the files we are sending will be somewhat small, which brings us to limiting file size which we'll see in this blog.

Other than that, we will go over file streaming, a way to directly streaming the files contents to S3 without storing it in memory first. Pretty exciting stuff!!

### Prerequisites

I'm assuming you know how to setup a server & have basic routes and stuff. This blog will use ExpressJS as the server framework, but feel free to use the framework of your choice.

### What are we making?

This blog will cover:

- Having a frontend which will send files(to our backend) as well as fetch the files(from the backend).
- Having an API for file uploading which is basically upload our files to AWS S3.

#### Why make an API?

There are two ways(that I know of) to upload your files to S3:

1. Use S3 pre-signed URL to upload your files directly to S3.
   - This blog will not cover this apporach. You can learn about that [here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html).
1. Have an API, to which, you will send your files to be uploaded to S3.

So, why do we NEED an API?

To do **some stuff** in between. Let me explain.

- What if we want to send the file we are receiving to a third-party application for processing?
- What if we want to check this file for any malicious stuff before uploading it to S3?

Having an API in-between gives us a flexibilty to do something with the file before we upload it to S3.

With that out of the way, lets start with looking at the workflow of how everything will work.

### Workflow

Here's the how the whole workflow will look like.

![Diagram showing the flow of uploading files. Making request from client, through API and into S3, and getting the response back](/blogImages/file-upload-aws-s3/flow.png#center)

There are 3 main components in this flow:

- Client(Frontend)
- API(Backend)
- AWS S3

Our frontend client will make a POST request to our backend with the files, our backend API will take those files, do some processing, and then upload them to S3. After successfully uploading the files to S3, our API will return the response we get from S3 to our frontend client.

Pretty straightforward?

Alright, lets get started!

### API & S3

We will start with making the API first.

The functionality of this API will be:

- Uploading the gives files to S3.
- Updating a file using new data.
- Deleting a file.
- Fetching files.

Just basic CRUD(Create, Read, Update, Delete) operations.

#### Setup

We will start with a basic express setup.

> NOTE: This exmaple will have the bare minimum to make the file uploader work.

```js
// index.js
const app = require("express")();
const PORT = process.env.PORT || 8000;

const controllers = require("./controllers");

// routes
app.get("/:id", controllers.getFile);
app.post("/", controllers.uploadFile);
app.patch("/:id", controllers.updateFile);
app.delete("/:id", controllers.deleteFile);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
```

Right now, the controllers are just basic empty functions.

```js
// controllers.js
exports.getFile = async (req, res, next) => {};
exports.uploadFile = async (req, res, next) => {};
exports.updateFile = async (req, res, next) => {};
exports.deleteFile = async (req, res, next) => {};
```

we will fill in the gaps later.

#### Handling Requests

A little background. When you make a POST request, you have to encode the request body in some way. The most common encoding type `multipart/form-data` is used send files from Client to our Backend. We will see how to send files to our backend when we make the frontend UI.

We will use [`multer`](https://www.npmjs.com/package/multer), which is a middleware that is used to process the `multipart/form-data` encoded data.

The form data, encoded using `multipart/form-data`, consists of simple key, value pairs. These values can be simple text data or file.

What Multer does is it processes the given data, and then fills the request object with certain fields like `files` which contains all the files we have send from the client, and `body` which contains all the text key value pairs we have sent from the client.

![Using Multer as middleware](/blogImages/file-upload-aws-s3/Multer-Middleware.png)

Taking the example of our existing controllers, the request object is `req` and we can access the files using `req.files` and access the key, value pairs using `req.body`.

That's enough concept for now. Let's setup our Multer middleware and see it in action:

> First, install Multer Using `npm i multer`

And now use `multer` as a middleware.

```js
// index.js
// newly added or modified lines are marked by <-
const app = require("express")();

const multer = require("multer"); // <-
const upload = multer(); // <-

const PORT = process.env.PORT || 8000;

const controllers = require("./controllers");

// routes
app.get("/:id", controllers.getFileController);
app.post("/", upload.array("files"), controllers.uploadFileController); // <-
app.patch("/:id", upload.single("file"), controllers.updateFileController); // <-
app.delete("/:id", controllers.deleteFileController);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
```

We just imported multer, invoked it, which gave us a middleware which we stored in `upload` variable.

#### What's `upload.array` and `upload.single`?

Multer has the ability to process one or more files. In case you need to process a single file, you can use `upload.single`, and when you need to process multiple files, use `upload.array`.

// talk about
// about upload.single => req.file (a file object)
// about upload.array => req.files (an array of file objects)

In order to process the files, you need to invoke this function passing in the **name of the field**(the key in our form data) in which the files are being sent from the client. This causes multer to process the files from given name of the field.

So, what `upload.array("files")` does it looks for a field named `files` and process it looking for a bunch of files.

Then, it **populates** our request body with a field named `files` which contains all the processed files.

Lets just `console.log` to see it in action. Enter the following code in our POST controller.

```js
// controllers.js
exports.getFileController = async (req, res, next) => {};

exports.uploadFileController = async (req, res, next) => {
  console.log("req.body =>");
  console.log(req.body);
  console.log("req.files =>");
  console.log(req.files);
};

exports.updateFileController = async (req, res, next) => {};

exports.deleteFileController = async (req, res, next) => {};
```

Lets try making a POST request using Postman.

Select the body as `form-data` and pass in key value pairs as

```
name: "fileuploader"
files: <Any-file>
```

![Postman](/blogImages/file-upload-aws-s3/postman-post-request-1.png#center)

Notice how we are passing the file in a `files` key. This is what I meant when using `upload.array("files")`, the `"files"` corresponds to the key in which the file is being sent from.

Now, lets check the logs.

![Log](/blogImages/file-upload-aws-s3/console-log-response.png#center)

Voila! There is our file. We can see more information about the file such as the original file name, its size, its type, etc.

We can also see that our text based values are present in `req.body` and files are present in `req.files`.

Now that we are successfully getting the files in our controllers, lets save it to S3.

### Saving files to S3

Before we save files to S3, lets look at some basic S3 concepts first.

#### Some basic S3 concepts

- **Bucket**: A bucket is a container that you can use to store objects.
- **Objects**: Objects are the entities which are stored in an S3 bucket. Your files are stored as buckets.
- **Key**: A unique identifier for an object.

// TODO: Provide the link for more.

#### Flow

The image illustrates the flow of file being saved to S3. From getting the files in our API(using multer), to sending it to S3.

![S3-Flow](/blogImages/file-upload-aws-s3/S3-Flow.png)

After getting the files in `req.files`, we send the files to S3(which we will see how below :below_emoji:).

#### Code

Let's start working on the code.

First of all, we need to install the relevant packages that would work with S3.

> Talk about v2 and v3 AWS SDK packages. We will use v3.

Install `@aws-sdk/client-s3` using `npm i @aws-sdk/client-s3`. This library manages the functionality of connecting to S3, uploading, basically all things related to S3.

Let's setup our S3 client which is responsible for connecting to S3.

> A word about handling credentials. Getting it from S3.

We put in the region, `access key id` and `secret access key`.

```js
// s3Client.js
const { S3Client } = require("@aws-sdk/client-s3");

module.exports = new S3Client({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY,
  },
});
```

After setting up our S3 client, let's make a function which will upload our file to given bucket using the S3 client we made above.

```js
// s3Operations.js
const { PutObjectCommand } = require("@aws-sdk/client-s3");

const s3Client = require("./s3Client");

exports.uploadFile = async (filePath, file) => {
  const params = new PutObjectCommand({
    Bucket: process.env.BUCKETNAME,
    Key: filePath,
    Body: file,
  });
  return await s3Client.send(params);
};
```

`PutObjectCommand` is a class which is responsible for adding object to a given bucket. The AWS SDK provides a bunch of these helper classes which make the task of interacting with S3 a little bit easier.

We instantiate the `PutObjectCommand` class providing the bucket where we want to store the object, the key by which the object will be stored, and the file data.

> "file data" is a vague term. It's actually a file buffer.

Now that we have made the `uploadFile` function which uploads file to S3, let's use this function in our controller.

```js
// controller.js
const { uploadFile } = require("./s3Operations");

exports.getFileController = async (req, res, next) => {};

exports.uploadFileController = async (req, res, next) => {
  const someOtherData = req.body;
  const files = req.files; // req.files is an array
  const responses = [];
  for (const file of files) {
    // iterating over every file
    const originalName = file.originalname; // the Key
    const fileData = file.buffer; // the file buffer or "file data"
    const response = await uploadFile(originalName, fileData);
    responses.push(response);
  }

  res.json({
    response: responses,
  });
};

exports.updateFileController = async (req, res, next) => {};

exports.deleteFileController = async (req, res, next) => {};
```

Now that we saved the files to S3, lets look at getting the files from S3.

### Getting files from S3

// Using signed URL but show help for getting file data as well

### Updating files

### Deleting files

### Final Words

### Making the frontend

> First give a brief intro about what would be added here.
> framework agnostic.

### Conclusion

Goodbye
