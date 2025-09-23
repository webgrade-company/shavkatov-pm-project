"use client";
import Link from "next/link";
import React from "react";

const cards = [
  { label: "Create New Post", href: "/admin/blog/new" },
  { label: "View All Posts", href: "/admin/blog/all" },
  { label: "Archive Posts", href: "/admin/blog/archive" },
];

const BlogPage = () => {
  return (
    <section className="min-h-[70vh] px-4 py-10">
      <div className="mx-auto max-w-5xl md:h-100 md:flex justify-center items-center">
        {/* Mobile: stacked; Desktop: spread */}
        <div className="flex flex-col gap-4 max-w-sm mx-auto md:max-w-none md:grid md:grid-cols-3 md:gap-8 md:place-items-center">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="w-full md:w-64 block md:opacity-75 md:hover:opacity-100 rounded-md border border-[#3F3F3F] bg-[#3A3A3A] text-[#C2C2C2E5] text-center py-6 font-semibold shadow-default shadow-hover"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
