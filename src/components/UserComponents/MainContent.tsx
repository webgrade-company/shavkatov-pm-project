"use client"
import Card from "./Card";
import { FaCircleChevronDown } from "react-icons/fa6";


export default function MainContent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EDEBE6] pt-10">
      <div className="relative max-w-7xl mx-auto px-4 py-12">
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

        <div className="md:absolute -bottom-20 right-0 mt-5 float-end">
          <FaCircleChevronDown
            className="text-4xl bg-gray-400 border-2 border-gray-400 text-white rounded-full"
            onClick={() => {
              const element = document.getElementById("about");
              if (element) {
                const y = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          />
        </div>

        {/* No scroll indicator in screenshot */}
      </div>
    </div>
  );
}
