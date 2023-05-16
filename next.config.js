module.exports = {
  images: {
    /* whitelisted domains for test data*/
    domains: ["fakestoreapi.com"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
