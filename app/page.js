import PinReading from "@/Components/PinReading";
import ScrollTriggers from "@/Components/ScrollTrigger";
import { TimelineReading } from "@/Components/TimelineReading";
import { ToReading } from "@/Components/ToReading";
import Image from "next/image";

export default function Home() {

  return (
    <main>
      {/* <ToReading /> */}
      {/* <TimelineReading /> */}
      {/* <ScrollTriggers /> */}
      <PinReading />
    </main>
  );
}
