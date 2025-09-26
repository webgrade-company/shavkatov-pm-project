"use client";

import { useGetAllCategory } from "@/service/hooks/useCategory";
import Link from "next/link";
import React from "react";

const AdminCategoryListPage = () => {
  const { data, isLoading } = useGetAllCategory();

  if (isLoading) {
    return (
      <div className="flex w-full pt-30 flex-col items-center justify-center gap-4">
        <div className="flex h-16 w-16 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-black text-4xl text-black">
          <div className="flex h-12 w-12 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-white text-2xl text-white"></div>
        </div>
      </div>
    );
  }

  const categories: { _id: string; name: string }[] = data?.data || [];

  return (
    <section className="px-4 py-8">
      <div className="mx-auto max-w-4xl">
        {/* Create card */}
        <div className="mb-10">
          <Link
            href="/admin/category/create"
            className="block rounded border border-[#3F3F3F] bg-[#2E2E2E] p-8 text-center text-2xl font-extrabold text-[#C2C2C2] hover:bg-[#343434]"
          >
            Create Category
          </Link>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categories.map((c) => (
            <Link
              key={c._id}
              href={`/admin/category/${c._id}`}
              className="rounded border border-[#3F3F3F] bg-[#2E2E2E] p-6 text-center text-[#C2C2C2] hover:bg-[#343434]"
            >
              <div className="text-2xl font-bold">{c.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminCategoryListPage;

