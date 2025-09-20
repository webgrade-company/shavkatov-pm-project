"use client";
import React from "react";
import Faq1 from "./FaqTextComponents";
import { FaCircleChevronDown } from "react-icons/fa6";

const FAQSectionComponents = () => {
  return (
    <section
      id="faq"
      className=" relative min-h-screen w-full bg-[#EDEBE6] md:flex justify-center items-center"
    >
      <div className="mx-auto max-w-7xl px-7 py-20">
        <div>
          <h2 className="text-[#4A4A4A] font-bold text-center text-2xl md:text-[70px] md:text-6xl">
            Tez-tez beriladigan savollar
          </h2>
        </div>
        <Faq1 />
      </div>
    </section>
  );
};

export default FAQSectionComponents;
