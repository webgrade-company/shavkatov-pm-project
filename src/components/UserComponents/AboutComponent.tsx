"use client";
import AdminImage from "./adminImageComponent";
import { useSectionStats } from "@/service/hooks/useSectionStats";

export default function AboutComponent() {

  const sectionRef = useSectionStats("about");

  return (
    <section
      ref={sectionRef}
      id="about"
      className=" relative bg-[#EDEBE6]  2xl:flex justify-center items-center min-h-screen"
    >
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
          <button
            className="text-[35px] w-[100px] shadow-hover card hidden text-[#383838E5]  bg-[#EDEBE6] md:block cursor-pointer font-bold"
            onClick={(e) => {
              e.stopPropagation();
              const element = document.getElementById("contact");
              if (element) {
                const y =
                  element.getBoundingClientRect().top + window.scrollY - 30;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            Bog’lanish
          </button>

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
              Asosan Linear’dan foydalanaman. Shuningdek Jira va ClickUp’da
              ishlash tajribam bor. Dokumentatsiya uchun Notion, jamoaviy
              hamkorlikda esa Github.
            </p>
          </div>

          <div className="md:hidden mt-10 bg-[#EDEBE6] ">
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  const y =
                    element.getBoundingClientRect().top + window.scrollY - 30;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="text-[15px] shadow-hover font-bold text-[#737373] bg-[#EDEBE6] 
             px-6 py-3 rounded-[5px] 
             "
            >
              Bog’lanish
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
