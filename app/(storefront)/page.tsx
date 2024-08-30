import { CategoriesSelection } from "@/components/storefront/CategoriesSelection";
import { FeaturedProducts } from "@/components/storefront/FeaturedProducts";
import { Hero } from "@/components/storefront/Hero";
import Head from "next/head";
import React from "react";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Alma Store Homepage</title>
        <meta name="description" content="e-commerce page for men and women" />
        <meta name="keywords" content="shop, men" />
      </Head>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategoriesSelection />
        <FeaturedProducts />
      </div>
    </div>
  );
}
