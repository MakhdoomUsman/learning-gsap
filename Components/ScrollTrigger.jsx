"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
export * from "gsap";
const ScrollTrigger = () => {
  useGSAP(() => {
    gsap.from(".page1 .box", {
      scale: 0,
      rotate: 360,
      duration: 2,
    });
    gsap.from("#page2 .box", {
      scale: 0,
      rotate: 360,
      duration: 2,
      scrollTrigger: {
        trigger: "#page2 .box",
        scroller: "body",
      },
    });
  });
  return (
    <div>
      <div className="page1 bg-blue-600 box-border flex justify-center items-center w-[100vw] h-[100vw] ">
        <div className="box size-40 bg-red-950"></div>
      </div>
      <div
        id="page2"
        className="page2 bg-blue-800 box-border flex justify-center items-center w-[100vw] h-[100vw] "
      >
        <div className="box size-40 bg-red-950"></div>
      </div>
      <div className="page3 bg-blue-900 box-border flex justify-center items-center w-[100vw] h-[100vw] ">
        <div className="box size-40 bg-red-950"></div>
      </div>
    </div>
  );
};

export default ScrollTrigger;
