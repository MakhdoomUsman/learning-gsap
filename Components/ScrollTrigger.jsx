"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
const ScrollTriggers = () => {
  const container = useRef();
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".page1 .box", {
        scale: 0,
        rotate: 360,
        duration: 2,
      });

      gsap.from("#box", {
        scale: 0,
        rotate: 360,
        duration: 2,
        scrollTrigger: {
          trigger: "#box",
          // markers: true,
          scrub: 5,
        },
      });
    },
    { scope: container }
  );
  return (
    <div ref={container}>
      <div className="page1 bg-blue-600 box-border flex justify-center items-center w-[100vw] h-[50vw] ">
        <div className="box size-40 bg-red-950"></div>
      </div>
      <div
        id="page2"
        className="page2 bg-blue-800 box-border flex justify-center items-center w-[100vw] h-[50vw] "
      >
        <div id="box" className="box size-40 bg-red-950"></div>
      </div>
      <div className="page3 bg-blue-900 box-border flex justify-center items-center w-[100vw] h-[50vw] ">
        <div className="box size-40 bg-red-950"></div>
      </div>
    </div>
  );
};

export default ScrollTriggers;
