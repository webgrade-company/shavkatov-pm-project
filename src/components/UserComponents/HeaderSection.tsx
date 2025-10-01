import { useAppSelector, useStatsSocket } from "@/service/hooks/useStatsSocket";
import MainContent from "./MainContent";
import { socket } from "@/lib/socket";
import { useEffect } from "react";

export default function HeaderSection() {
  // useStatsSocket();

  const stats = useAppSelector((state) => state.stats.stats);

  const sendEvent = () => {
    socket.emit("events", { name: "MyWebsite", traffic: "google" });
  };

  useEffect(() => {
    sendEvent();
  }, [])
  return (
    <section id="header">
      <MainContent />
    </section>
  );
}
