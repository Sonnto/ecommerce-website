# E-Commerce Website {Name TBD}

## Details

An e-commerce website inspired by the designs of Amazon. You can sign in through Google (Apple, GitHub, and Facebook is displayed but coming soon) purchase items through the store, and pay for it via Stripe.

## Languages, Frameworks, Tools

- HTML
- CSS
- JavaScript
- React.js
- Redux
- Next.js
- Express.js
- Tailwind CSS
- NextAuth.js
- Firestore, Firebase
- Vercel

## APIs

- [Fake Store](https://fakestoreapi.com)
- [Stripe](https://stripe.com)

# Instructions

## Using npm

Run commands

1. `npm install`

2. `npm run dev`

## Or using yarn

Run commands

1. `npm install --global yarn`

2. `yarn install`

3. `yarn run dev`

## What to do?

Click to navigate the website. Add, remove, purchase items.

# Future Developments

- Add new functional sign-in options from Apple, GitHub, Facebook, etc.
- Debug Firebase and Stripe connections; orders are not being added to Firebase database and Stripe webhook returning `[404] POST` for `charge.succeeded`, `checkout.session.completed`, `payment_intent.created`, and `payment_intent.succeeded`
