"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

const PinReading = () => {
  const container = useRef();
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".box2", {
        scale: 0,
        duration: 1,
        opacity: 0,
        rotate: 360,
        scrollTrigger: {
          trigger: ".box1",
          markers: true,
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
          pin: true,
        },
      });
    },
    { scope: container }
  );
  return (
    <div ref={container}>
      <div className="box h-[50vw] w-[100vw] bg-lime-200 mx-auto flex justify-center items-center"></div>
      <div className="box1 h-[50vw] w-[100vw] mx-auto  flex justify-center items-center">
        <div className="box2 w-40 h-40 bg-red-500 z-10"></div>
      </div>
    </div>
  );
};

export default PinReading;
