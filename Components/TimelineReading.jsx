"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export const TimelineReading = () => {
  const styleGSAPTimeline = useRef();
  useGSAP(() => {
    // gsap.to(".box1", {
    //   x: 400,
    //   duration: 1,
    //   delay: 1.5,
    //   backgroundColor: "orange",
    //   borderRadius: "30",
    // });
    // gsap.to(".box2", {
    //   x: 400,
    //   duration: 1,
    //   delay: 1.5,
    //   backgroundColor: "yellow",
    //   borderRadius: "30",
    // });
    // gsap.to(".box3", {
    //   x: 400,
    //   duration: 1,
    //   delay: 1.5,
    //   borderRadius: "30",
    //   backgroundColor: "blue",
    // });
    // let tl = gsap.timeline();
    // tl.to(".box1", {
    //   x: 400,
    //   rotate: 360,
    //   duration: 1,
    // });
    // tl.to(".box2", {
    //   x: 400,
    //   rotate: 360,
    //   duration: 1,
    // });
    // tl.to(".box3", {
    //   x: 400,
    //   rotate: 360,
    //   duration: 1,
    // });
    let header = gsap.timeline();
    header.from(".header", {
      y: -100,
      duration: 1,
    });
    header.from(".routes", {
      y: -100,
      duration: 1,
      opacity: 0,
      stagger: 0.1,
    });
  });
  return (
    <div ref={styleGSAPTimeline}>
      {/* <div className="box1 w-20 h-20 bg-red-400 "></div>
      <div className="box2 w-20 h-20 bg-red-500"></div>
      <div className="box3 w-20 h-20 bg-red-600"></div> */}
      <div className="navbar flex py-5 px-10 justify-between items-center">
        <h1 className="header text-2xl font-bold">My Website</h1>
        <div className="links flex gap-10 ">
          <p className="routes">Home Link</p>
          <p className="routes">Home Link</p>
          <p className="routes">Home Link</p>
          <p className="routes">Home Link</p>
        </div>
      </div>
    </div>
  );
};
