# Anthony's Online Store (E-Commerce Website)

## Details

An MVP e-commerce website inspired by the designs of Amazon. The user can see a list of products for sale that is drawn from the Fake Store API. The user can create an order by selecting those products into a shopping cart, view their cart, add more or remove products, and purchase their item via the Stripe API. If not signed in, the user will be prompted to sign in before being able to view and paying for their current order. Next.js was used to do server-side rendering so there would be less lag presenting full pages to the user; Tailwind CSS helped make the website responsive blazing fast; NextAuth was a great choice to add sign-in providers with ease; webhook integration and Stripe payment processing!

## Languages, Frameworks, Tools, Technologies

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
- Vercel (deployment)
- HeroIcons (icons)

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

Click to navigate the website. Sign in using socila media login providers (please use Google for the time). View products for sale. Add to and remove from your shopping cart. Checkout. Process payment (use `4242 4242 4242` as the test credit card). View your order history.

# Future Developments

- Add new functional sign-in options from Apple, GitHub, Facebook, etc.
- Add a return section alongside the Orders section
