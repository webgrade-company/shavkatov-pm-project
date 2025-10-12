"use client";

import { useEffect, useRef } from "react";
import { socket } from "@/lib/socket";

/**
 * Universal hook: har qanday sectionda foydalanuvchi kirib chiqishini kuzatadi
 * @param sectionName section yoki page nomi (masalan: "home", "about", "contact")
 * @param threshold kuzatish sezgirligi (0-1 oralig‘ida)
 */
export function useSectionStats(sectionName: string, uuid: string, threshold = 0.3) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const enteredRef = useRef(false);

  // 🔹 Traffic source aniqlash
  function detectTrafficSource(): string {
    const ref = document.referrer?.toLowerCase() || "";
    if (!ref) return "direct";
    if (ref.includes("google")) return "google";
    if (ref.includes("yandex")) return "yandex";
    if (ref.includes("t.me") || ref.includes("telegram")) return "telegram";
    if (ref.includes("instagram")) return "instagram";
    return "other";
  }

  useEffect(() => {
    const traffic = detectTrafficSource();
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !enteredRef.current) {
          const enterTime = new Date().toISOString();
          socket.emit("homeSection", {
            name: sectionName,
            traffic,
            event: "enter",
            time: enterTime,
            userId: uuid,
          });
          enteredRef.current = true;
        }

        if (!entry.isIntersecting && enteredRef.current) {
          const leaveTime = new Date().toISOString();
          socket.emit("homeSection", {
            name: sectionName,
            traffic,
            event: "leave",
            time: leaveTime,
            userId: uuid,
          });
          enteredRef.current = false;
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [sectionName, threshold]);

  return sectionRef;
}
