---
title: 'Dynamic "Redirect To" URL for emails in Auth0'
description: "Configuring Auth0 email template to redirect based on application name"
date: 2023-06-06T17:12:15.928Z
tags: ["auth0"]
draft: false
showToc: false
---

If you have multiple applications in Auth0, and you want to configure your email template to redirect user to different URL based on the application, you can do so by configuring the "Redirect To" field in Auth0 email dashboard.

![Auth0 Redirect To Input box](/blogImages/auth0-redirect-to.png)

Let's say we have three application named `local`, `stage` and `prod`, and for each application, you want to redirect the user to `http://localhost`, `https://stageapp.example.com` and `https://prodapp.example.com`.

The Redirect To field can take a template(which uses the [Liquid](https://shopify.github.io/liquid/basics/introduction/) templating language) where you have access to `application.name` and `application.callback_url` variables(injected by Auth0).

The syntax will look like this:

```liquid
{% if application.name == 'local' %} http://localhost {% elsif application.name == 'stage' %} https://stageapp.example.com {% else %} https://prodapp.example.com {% endif %}
```

And you are done!

## Tip: Application name containing spaces

If you application name contains spaces, for example `local app`, `stage app` and `prod app`, you can't directly use it for comparison like `{% if application.name == 'local app' %}`.

Instead you have to encode the names to be URL conformant, i.e. use `%20` instead of spaces.

Here's the correct syntax:

```liquid
{% if application.name == 'local%20app' %} http://localhost {% elsif application.name == 'stage%20app' %} https://stageapp.example.com {% else %} https://prodapp.example.com {% endif %}
```

That's it. Have a great day!
