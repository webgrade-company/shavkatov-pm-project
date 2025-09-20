"use client";
import { FaCircleChevronDown } from "react-icons/fa6";
import AdminImage from "./adminImageComponent";

export default function AboutComponent() {
  return (
    <section id="about" className=" relative bg-[#EDEBE6]  2xl:flex justify-center items-center min-h-screen">
      <div className="mx-auto max-w-7xl px-7 py-16 md:pt-30">
        <div className="flex flex-col">
          <h2 className="text-5xl gap-0 text-center md:text-start md:text-6xl font-bold text-gray-800 md:mb-10">
            Men haqimda
          </h2>
          <p className="md:hidden mt-8 text-[25px] text-center mb-2 font-bold">
            Fayzullohman
          </p>
        </div>

        <div className="hidden absolute md:block top-0 left-0 md:top-auto md:bottom-0 md:left-8 opacity-70">
          <AdminImage />
        </div>

        <div className="flex flex-col cursor-pointer lg:flex-row justify-end lg:gap-16 items-center">
          <div
            onClick={() => {
              window.open("https://t.me/shavkatovpm_bot", "_blank");
            }}
            className="card hidden  bg-[#EDEBE6] md:block"
          >
            <a
              className="text-2xl bg-[#EDEBE6 font-bold text-[#383838E5"
              href="https://t.me/shavkatovpm_bot"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Bog’lanish
            </a>
          </div>

          {/* Right: Text paragraphs */}
          <div className="md:w-1/2 md:h-90 text-gray-700 flex flex-col  justify-between text md:text-2xl font-semibold leading-relaxed">
            <p className="mb-5">
              Project Management sohasida o‘zimni rivojlantirib, IT loyihalar
              ustida ishlayapman. Bu sayt — orttirgan bilim va tajribalarimni
              boshqalar bilan bo‘lishish, real case va amaliy tajribalar orqali
              o‘rganish maydoni.
            </p>
            <hr className="md:hidden border border-black" />
            <p className="mt-5">
              Asosan Linear’dan foydalanganaman. Shuningdek Jira va ClickUp’da
              ishlash tajribam bor. Dokumentatsiya uchun Notion, jamoaviy
              hamkorlikda esa GitHub’dan foydalanaman.
            </p>
          </div>

          <div className="card-2 md:hidden bg-[#EDEBE6] ">
            <a
              href="https://t.me/shavkatovpm_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl bg-[#EDEBE6 font-bold text-[#383838E5]"
            >
              Bog’lanish
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
