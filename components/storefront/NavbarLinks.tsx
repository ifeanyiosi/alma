"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navbarLinks = [
  {
    id: 1,
    name: "All Products",
    href: "/products/all",
  },
  {
    id: 2,
    name: "Men",
    href: "/products/men",
  },
  {
    id: 3,
    name: "Women",
    href: "/products/women",
  },
  // {
  //   id: 4,
  //   name: "Kids",
  //   href: "/products/kids",
  // },
];

export function NavbarLinks() {
  const location = usePathname();
  return (
    <div className="hidden md:flex justify-center items-center gap-x-2 ml-8">
      {navbarLinks.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className={cn(
            location === item.href ? "text-[#D74449]" : " hover:bg-opacity-75",
            "relative group p-2 font-medium rounded-md text-gray-700 transition-colors duration-300"
          )}
        >
          {item.name}
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#D74449] scale-x-0 transition-transform duration-300 ease-in-out origin-right group-hover:origin-left group-hover:scale-x-100"></span>
        </Link>
      ))}
    </div>
  );
}
