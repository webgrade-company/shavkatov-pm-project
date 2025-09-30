import { FooterLayout } from "@/layout";
import BlogFooterLayout from "@/layout/blog/BlogFooter";
import BlogNavbarLayout from "@/layout/blog/BlogNavbar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <BlogNavbarLayout />
      {children}
      <BlogFooterLayout />
    </div>
  );
}
