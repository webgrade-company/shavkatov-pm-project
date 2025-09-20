"use client";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaCircleChevronDown } from "react-icons/fa6";


interface Project {
  id: number;
  title: string;
  subtitle: string;
  maqsad: string;
  yondashuv: string;
  vositalar: string[];
  url?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "PRETEST",
    subtitle: "Mock Exam Platform",
    maqsad:
      "Loyiha boshqaruvida Agile tamoyillari asos qilib olindi. Moslashuvchanlik va tezkor natijalarni ta’minlash uchun Kanban metodidan foydalanildi. Bu yondashuv jamoaga vazifalarni aniq ko‘rish, ustuvorlikni belgilash va jarayonni uzluksiz yaxshilab borish imkonini berdi. Shuningdek, ishlarni rejalashtirish va monitoring qilishda Linear yordamida progressni kuzatib borish yo‘lga qo‘yildi.",
    yondashuv:
      "Loyihada Agile prinsiplari bilan ishlandi. Scrum metodologiyasi qo'llanildi va har bir sprint davomida foydalanuvchi tajribasini yaxshilashga e'tibor qaratildi.",
    vositalar: ["Linear", "Trello", "SWOT", "Notion", "Google Docs"],
    url: "https://pretest.example.com",
  },
  {
    id: 2,
    title: "DENTAL MAP",
    subtitle: "Stomatologlar branlash",
    maqsad:
      "Bemorlarga stomatologlar va klinikalarni tez va qulay tarzda topish imkoniyatini yaratish. Platforma orqali bemorlar joylashuv, xizmatlar va reytinglar asosida mos mutaxassis yoki klinikani tanlay oladi.",
    yondashuv:
      "Loyihada Agile prinsiplari bilan ishlandi. Ish jarayonini aniqroq va samarali tashkil etish maqsadida Kanban usulidan foydalanildi. Bu yondashuv jamoaga vazifalarni tartibli rejalashtirish, ustuvorliklarni belgilash va natijalarga bosqichma-bosqich erishishga imkon berdi.",
    vositalar: ["Linear", "SWOT", "Notion", "Google Docs"],
    url: "https://dentalmap.example.com",
  },
  {
    id: 3,
    title: "WEBGRADE",
    subtitle: "IT Agency",
    maqsad:
      "Korxona va brendlar ehtiyojiga mos, zamonaviy dizayn va funksionallikka ega Veb-saytlar, Mobil ilovalar, hamda IT yechimlarni ishlab chiqadigan IT kompaniya. ",
    yondashuv:
      "Agile asosida ishlangan loyiha boshqaruvida Scrum qo‘llanildi. Bu yondashuv jamoaga jarayonni nazorat qilish, bosqichma-bosqich rivojlanish va natijalarni muntazam baholash imkoniyatini berdi.",
    vositalar: ["Linear", "SWOT", "Notion", "Google Docs"],
    url: "https://webgrade.uz",
  },
];

export default function ServiceSection() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleShareClick = (e: React.MouseEvent, url?: string) => {
    e.stopPropagation(); // Kartochka bosilishining oldini olish
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <section id="works" className="bg-[#EDEBE6] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-16">
          Oxirgi Loyihalarim
        </h2>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Project Cards */}
          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                style={{
                  transition: "box-shadow 0.5s ease-in-out",
                }}
                onClick={() => handleProjectClick(project)}
                className={`bg-[#EDEBE6] border border-[#C2C2C2E5] rounded-tl-[5px] rounded-tr-[5px] p-6  transition-shadow cursor-pointer duration-500 ease-in-out group ${
                  selectedProject.id === project.id ? "shadow-2xl" : "shadow"
                }`}
              >
                <div className=" relative flex items-center justify-between mb-4 h-20">
                  <div className="w-full">
                    <h3 className="text-2xl text-center font-bold text-gray-800 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-center text-sm">
                      {project.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={(e) => handleShareClick(e, project.url)}
                    className="text-gray-400 absolute top-0 right-0 group-hover:text-gray-600 hover:text-blue-600 transition-colors p-1"
                    aria-label={`${project.title} loyihasiga o'tish`}
                  >
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Project Details */}
          <div className="text-gray-700 space-y-8">
            {/* Maqsad */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Maqsad</h3>
              <p className="leading-relaxed">{selectedProject.maqsad}</p>
            </div>

            {/* Yondashuv va metodologiya */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Yondashuv va metodologiya
              </h3>
              <p className="leading-relaxed">{selectedProject.yondashuv}</p>
            </div>

            {/* Vositalar */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Vositalar:
              </h3>
              <p className="leading-relaxed">
                {selectedProject.vositalar.join(", ")}.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#EDEBE6] border border-[#C2C2C2E5] rounded-[5px] p-6 h-[152px] overflow-hidden"
            >
              {/* Project Header */}
              <div className="flex  justify-between gap-4 h-full items-center">
                {/* Left: Project Info */}
                <div className="w-1/2 flex flex-col justify-center">
                  <h3 className="text-xl border-[#C2C2C2E5] text-center font-bold text-gray-800 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {project.subtitle}
                  </p>
                </div>

                <div className="h-50 border border-[#C2C2C2E5]"></div>

                {/* Right: Details + Share Icon */}
                <div className="w-1/2 relative h-35 flex flex-col">
                  <button
                    onClick={(e) => handleShareClick(e, project.url)}
                    className="absolute top-0 right-0 text-gray-400 hover:text-blue-600 transition-colors p-1 z-10"
                    aria-label={`${project.title} loyihasiga o'tish`}
                  >
                    <ExternalLink size={20} />
                  </button>

                  <div
                    className="text-gray-600 text-sm leading-relaxed mt-6 flex-1 overflow-y-scroll pr-2"
                    style={{ maxHeight: "100px" }}
                  >
                    <p className="mb-2">
                      <span className="font-semibold">Maqsad:</span>{" "}
                      {project.maqsad}
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold">Metodologiya:</span>{" "}
                      Agile, Kanban.
                    </p>
                    <p>
                      <span className="font-semibold">Vositalar:</span>{" "}
                      {project.vositalar.join(", ")}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="w-[90%] mx-auto text-center rounded border-1 border-gray-200 text-2xl py-4 px-5 shadow-hover">
            Sizda g’oya bormi?
          </div>
          <div className="float-end">
            <FaCircleChevronDown
              className="text-4xl bg-gray-400 border-2 border-gray-400 text-white rounded-full"
              onClick={() => {
                const element = document.getElementById("faq");
                if (element) {
                  const y =
                    element.getBoundingClientRect().top + window.scrollY - 60;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            />
          </div>
        </div>
        <div className="hidden md:block float-end mt-5">
          <FaCircleChevronDown
            className="text-4xl bg-gray-400 border-2 border-gray-400 text-white rounded-full"
            onClick={() => {
              const element = document.getElementById("faq");
              if (element) {
                const y = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}
