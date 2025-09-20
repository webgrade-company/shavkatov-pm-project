"use client"
import Image from "next/image";

import strelgaImg from '../../../public/strelkaImg.svg'
import Link from "next/link";
import { FaCircleChevronDown } from "react-icons/fa6";

export default function BlogComponent() {
  return (
    <section
      id="blog"
      className="hidden lg:block bg-[#EDEBE6]  py-24 min-h-screen"
    >
      <div className="mx-auto max-w-7xl h-150 px-4 flex items-center">
        <div className="lg:grid-cols-2  gap-16 items-center">
          {/* Left Column - Text */}
          <div className="w-[60%]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A4A] leading-tight mb-8">
              IT loyihalarni boshqarish bo'yicha foydali blogni o'qib ko'ring.
            </h2>
          </div>

          {/* Right Column - CTA Card with Arrow */}
          <div className="relative">
            {/* Arrow pointing to card */}
            <div className="absolute -top-30 left-92 transform rotate-12">
              <Image
                src={strelgaImg}
                alt="Ko'rsatgich strelka"
                width={140}
                height={140}
                className="opacity-80 h-auto"
              />
            </div>

            {/* CTA Card */}
            <div className="flex justify-center mt-20">
              <Link
                className="text-2xl w-[230px] font-semibold text-[#383838E5] bg-white border items-center text-center border-gray-200 rounded-lg px-8 py-10 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                href="/blog"
              >
                O'qish
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="float-end mr-20">
        <FaCircleChevronDown
          className="text-4xl bg-gray-400 border-2 border-gray-400 text-white rounded-full"
          onClick={() => {
            const element = document.getElementById("contact");
            if (element) {
              const y = element.getBoundingClientRect().top + window.scrollY;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
        />
      </div>
    </section>
  );
}
