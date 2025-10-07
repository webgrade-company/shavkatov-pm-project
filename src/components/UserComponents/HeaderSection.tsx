"use client";
import MainContent from "./MainContent";
import { useSectionStats } from "@/service/hooks/useSectionStats";

export default function HeaderSection() {

  const sectionRef = useSectionStats("home");

  return (
    <section id="header" ref={sectionRef}>
      <MainContent />
    </section>
  );
}
