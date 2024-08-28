import { CategoriesSelection } from "@/components/storefront/CategoriesSelection";
import { FeaturedProducts } from "@/components/storefront/FeaturedProducts";
import { Hero } from "@/components/storefront/Hero";
import React from "react";

export default function IndexPage() {
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategoriesSelection />
        <FeaturedProducts />
      </div>
    </div>
  );
}
