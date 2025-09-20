"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import { FaCircleChevronDown } from "react-icons/fa6";
import { FaChevronCircleUp } from "react-icons/fa";

export default function MainContent() {
  const allIds = ["header", "about", "works", "faq", "blog", "contact"];
  const [position, setPosition] = useState<null | string>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPosition(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    const positions = allIds
      .map((id) => {
        const el = document.getElementById(id);
        if (!el) return null;
        const top = el.getBoundingClientRect().top + window.scrollY - 30;
        return { id, top };
      })
      .filter((v): v is { id: string; top: number } => v !== null)
      .sort((a, b) => a.top - b.top);

    // Keyingi sectionni topamiz; agar yo'q bo'lsa birinchisiga qaytamiz
    const next = positions.find((p) => p.top > currentScroll + 4);
    if (next?.id) {
      setPosition(next?.id);
    } else {
      setPosition("ok");
    }
    console.log(next?.id);
    const targetTop = next ? next.top : positions[0]?.top ?? 0;

    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EDEBE6] pt-10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start justify-center">
          {/* Left Section - Text Content */}
          <div className="w-full h-full md:h-102 md:w-1/2 flex flex-col justify-between space-y-6 lg:space-y-8 lg:order-1">
            {/* Main Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Hammasi IT Loyiha boshqaruvi haqida
              </h1>
            </div>

            {/* Descriptive Text */}
            <div className="hidden md:block space-y-2 lg:space-y-3 text-lg sm:text-xl md:text-4xl font-bold text-[#4A4A4A]">
              <p>Tartibli boshqaruv</p>
              <p>Kafolatlangan samaradorlik.</p>
              <p className="text-gray-600 ">Shavkatov Fayzulloh</p>
            </div>
          </div>

          {/* Right Section - Cards Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-7 order-2 lg:order-2">
            {/* First Row */}
            <Card title="Haqida" subtitle="Men haqimda" href="about" />
            <Card title="Blog" subtitle="PM maqola" href="/blog" />

            {/* Second Row */}
            <Card title="Loyihalar" subtitle="Qilgan ishlarim" href="works" />
            <Card
              className="hidden md:block"
              title="Savollar"
              subtitle="Tez-tez beriladigan savollar"
              href="faq"
            />

            {/* Third Row - Full Width */}
            <Card
              title="Aloqa"
              subtitle="Maslahatlashamiz"
              href="contact"
              className="col-span-1 sm:col-span-2"
            />
          </div>
        </div>

        <div className="md:hidden mt-10 space-y-2 lg:space-y-3 text-2xl sm:text-xl md:text-4xl font-bold text-[#4A4A4A]">
          <p>Tartibli boshqaruv</p>
          <p>Kafolatlangan samaradorlik.</p>
          <p className="text-gray-600 hidden md:block">Shavkatov Fayzulloh</p>
        </div>

        <div className="fixed z-40 bottom-6 right-6">
          {position === "contact" ? (
            <FaChevronCircleUp
              onClick={handleScroll}
              className="text-4xl bg-gray-400 border-2 border-gray-400 text-[#EDEBE6] rounded-full shadow-md active:scale-95 transition-transform"
            />
          ) : (
            <FaCircleChevronDown
              className="text-4xl bg-gray-400 border-2 border-gray-400 text-[#EDEBE6] rounded-full shadow-md active:scale-95 transition-transform"
              onClick={handleScroll}
            />
          )}
        </div>

        {/* No scroll indicator in screenshot */}
      </div>
    </div>
  );
}
