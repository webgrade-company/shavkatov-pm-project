import Link from "next/link";
import React from "react";

const links = [
  { label: "Blog Posts", href: "/admin/blog" },
  { label: "Portfolio", href: "/admin/portfolio" },
  { label: "Traffic Statistics", href: "/admin/traffic" },
  { label: "Posts Statistics", href: "/admin/posts" },
  { label: "Login Settings", href: "/admin/settings" },
];

const SideBarAdmin = () => {
  return (
    <aside className="hidden md:block fixed top-14 left-0 bottom-0 w-52 bg-[#222427] text-gray-300 border-r border-black/20">
      <nav className="p-4 space-y-3 text-sm">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="block hover:text-white/90">
            {l.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SideBarAdmin;
