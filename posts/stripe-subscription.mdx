---
title: "Creating subscriptions using stripe"
description: "How to use stripe in the real world"
date: 2022-09-22T11:25:19.755Z
tags: ["stripe", "payment", "subscription"]
draft: true
showToc: true
---

# Introduction

Tasked with integrating stripe to our product. A subscription based model.

# What we will do

Using monthly based subscription. There will be two types of user: one is basic plan and another with premium. Basic is free(with some limitations), and premium requires any arbitrary amount(whatever you want to set the price to).

# Outline

- Using stripe checkout to create subscriptions
- Storing invoice data(when, how)
- Provisioning access to your product
- Handling monthly recurring payments
- Handling failed payments
- Listening to stripe's webhook events to store data in db
- Error handling
- Frontend
- Good discord support
- Some pain points, and query
- Stripe's dashboard
- How important it is to have good working payment service
- Going to production
  - creating products
  - getting price keys
- Changing price
- Showing price based on region/country
- Open source code
- How to test stripe?
- Testing
- Handling multiple subscriptions
- Upgrading/downgrading subscriptions
- Creating products, with multiple price keys
- Giving discounts

# Goal

The end goal is to create a payment service for a product. This product will have a subscription based payment, with multiple subscription plans(monthly, and yearly). Users can change their subscription, or cancel it.

We will use [Stripe Checkout](https://stripe.com/docs/payments/checkout) for ....

# Prerequisite

First, let's decide on a few things:

// some stuff

# Creating a product

First, create a stripe account. You should be in test mode by default. Go to https://dashboard.stripe.com/. Create a product. Add a product(https://dashboard.stripe.com/test/products?active=true). Add pricing details with recurring payment mode, set billing period.
Copy price keys. Save it in environment.

# Setup stripe checkout

https://stripe.com/docs/payments/checkout

Give this a read: https://stripe.com/docs/payments/checkout/how-checkout-works

Follow the quickstart guide: https://stripe.com/docs/checkout/quickstart

Install package, create checkout session with the price key, choose mode as `subscription`. Setup success url, and cancel url. Prefill customer email.

```python
checkout_session = stripe.checkout.Session.create(
        line_items = [
          {
            'price': price_key,
            'quantity': 1,
          },
        ],
        mode='subscription',
        success_url=config.stripe_success_url + '?session_id={CHECKOUT_SESSION_ID}',
        cancel_url=config.stripe_cancel_url,
        customer_email=customer_email,
      )
```

This will generate a checkout session with url, etc. Redirect user to `checkout_session.url`. This as an API, call from frontend.

# Handling payment events

Need to setup webhook. Stripe sends payment events to webhook. https://stripe.com/docs/webhooks. Define endpoint which will receive stripe events.

Which events we will handle, and why?

```python
signature = request.headers.get('stripe-signature')
payload = request.data

try:
	event = stripe.Webhook.construct_event(
		payload=payload, sig_header=signature, secret=webhook_secret)
	data = event['data']
except Exception as e:
	self.logger.exception(e)
	raise e
event_type = event['type']
```

Handling `invoice.paid` event to store relevant data, and provide access to the product. This event occurs for new and renewal invoices.
Handling `invoice.payment_failed` for failed payments.

# Testing the checkout page and webhook

Test card keys, etc.

# Testing

https://stripe.com/docs/testing

## Getting keys

Make sure you are in test mode, and go to stripe dashboard.

stripe_webhook_secret
stripe_api_key
stripe_price_key

Run your server(ex. localhost:8000/api/payment/webhook). The config should be of test.

Install the stripe CLI.

Login `stripe login`(https://stripe.com/docs/stripe-cli)

Now, run your server, and forward stripe webhook events to your locally running server using the following command:

`stripe listen --forward-to localhost:8000/api/payment/webhook`

Use test cards: https://stripe.com/docs/testing?numbers-or-method-or-token=card-numbers

And, run your frontend with the backend URL as given.

# After payment

Configure through stripe dashboard to send emails etc.

# Renewal

Stripe tries to auto charge. Will get `invoice.paid` event.

# Upgrading/downgrading subscription

Monthly and yearly subscriptions.

First, create a product, with multiple prices. Put all those price keys in an environment variable.

Handle frontend as you want. Change subscription, and if action is needed, redirect the client. Want users to pay upfront.

```python
new_subscription = stripe.Subscription.modify(
	subscription.id,
	payment_behavior='pending_if_incomplete',
	proration_behavior='always_invoice',
	items=[{
		'id': subscription['items']['data'][0].id,
		'price': price_key,
	}]
)
```

Behaviour during upgrade and downgrade. Proration amount, etc.

# Cancelling payment

What approach I took. Cancelling from stripe.

# Links

- Link to stripe docs
- https://benfoster.io/blog/stripe-failed-payments-how-to/
