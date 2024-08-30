
# Assesment for Stackbuld



## 🚀 About Me
I'm Ifeanyi Osi-Okeke, a skilled front-end developer with 4 years of experience specializing in building dynamic and responsive web applications using Next.js, TypeScript, and Tailwind CSS. I have a passion for creating intuitive user interfaces and optimizing web performance. With a strong background in both development and customer service, I bring a unique blend of technical expertise and user-centered design to every project I undertake.


## Installation

Install my-project with npm run dev
```
    
## Optimizations

Lazy Loading: Used Next.js’s built-in <Image /> component for automatic lazy loading of images. This improves page load times by loading images only when they enter the viewport.

SEO Enhancements:

Sitemap: Generated a sitemap to help search engines crawl and index the site more effectively.
<Head /> Component: Utilized Next.js’s <Head /> component to manage and optimize meta tags, titles, and descriptions for better search engine visibility.
Robots Meta Tags: Implemented robots meta tags to guide search engine crawlers on which pages to index and which to avoid.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

KINDE_CLIENT_SECRET
KINDE_ISSUER_URL
KINDE_SITE_URL
KINDE_POST_LOGOUT_REDIRECT_URL
KINDE_POST_LOGIN_REDIRECT_URL

UPLOADTHING_SECRET
UPLOADTHING_APP_ID

DATABASE_URL

REDIS_URL
REDIS_TOKEN

STRIPE_API_KEY
STRIPE_SECRET_WEBHOOK

# Tech Stack

Client:

Next.js (Framework for React)
TailwindCSS (Styling framework)
Kinde Auth (Authentication client-side integration)


Server:

Neon DB (Database)
Prisma (ORM for database interaction)
Redis (Caching and data store)
Kinde Auth (Authentication server-side integration)


## Features

User Features:

Login with Kinde: Sign in to access features.
Browse Products: View a list of available products.
Select Product: Click on a product to view details.
Add to Cart: Add selected products to the shopping cart.
View Cart: Review items in the cart.
Checkout: Proceed to checkout and enter shipping information.
Pay with Stripe: Complete payment using Stripe integration.


Admin Features:

Login with Kinde: Sign in to access admin features.
Add Products: Add new products to the inventory.
Remove Products: Remove products from the inventory.
Edit Products: Update product details such as price, description, and images.


## usage

Login with Kinde: Users must log in to add items to the cart and proceed with shopping.
Persistent Cart Data: Cart data is saved using Redis, ensuring that items remain in the cart even after a hard refresh or when accessing from another device.

