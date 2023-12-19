# Travel News and Trends

This is a Next.js project consumes the NYT APIs to fetch articles data for travel news and trends, especially for aviation.

As you can see, this is using Mantine Component library and I started with Mantine Next.js template.

## Project Features

This project comes with the folloing features:

- Search Travel News Articles with [NY Times Article Search API](https://developer.nytimes.com/docs/articlesearch-product/1/overview)
- Dynamic Search with Search Input
- Pagniation for Large Search Results
- Article Details Modal

## Fetching Data

I have fetched all data on Server Side to utilize the cache of SSR and also used Suspense and fallback component for seamless data fetch results.

## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
