"use client";
import { Suspense, useEffect, useState } from "react";
import MainContent from "./MainContent";
import { useSectionStats } from "@/service/hooks/useSectionStats";
import { v4 as uuidv4 } from "uuid";

export default function HeaderSection() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    let storedId = localStorage.getItem("userId");
    if (!storedId) {
      storedId = uuidv4();
      localStorage.setItem("userId", storedId);
    }
    setUserId(storedId);
  }, []);

  const sectionRef = useSectionStats("home", userId ?? "");

  return (
    <section id="header" ref={sectionRef ?? undefined}>
      <Suspense fallback={<div>Loading...</div>}>
        <MainContent />
      </Suspense>
    </section>
  );
}
