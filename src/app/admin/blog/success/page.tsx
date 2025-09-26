"use client";

import React from "react";
import { SuccessComponent } from "@/components/adminComponents";
import { useSearchParams } from "next/navigation";

const AdminBlogSuccessPage = () => {
  const search = useSearchParams();
  const from = search.get("from");
  let title =
    from === "delete"
      ? "Deleted Successfully"
      : from === "archive"
      ? "Archived Successfully"
      : "Posted Successfully";

  if (from === "exit-archive") {
    title = "Successfully Unarchived";
  }

  return (
    <SuccessComponent backHref="/admin/blog/all">{title}</SuccessComponent>
  );
};

export default AdminBlogSuccessPage;
