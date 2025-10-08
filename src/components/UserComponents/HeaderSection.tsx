"use client";
import { Suspense } from "react";
import MainContent from "./MainContent";
import { useSectionStats } from "@/service/hooks/useSectionStats";

export default function HeaderSection() {

  const sectionRef = useSectionStats("home");

  return (
    <section id="header" ref={sectionRef}>
      <Suspense fallback={<div>Loading...</div>}>
        <MainContent />
      </Suspense>
    </section>
  );
}
