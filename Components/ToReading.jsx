"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export const ToReading = () => {
  const newBox = useRef(null);
  useGSAP(() => {
    gsap.from(".newBox", {
      x: 200,
      duration: 1,
      //   delay: 1,0
      rotate: 180,
      backgroundColor: "green",
      borderRadius: "20",
      //   stagger: -1, //if same property have more then one values then use stagger and value in stagger shows that it is indexing of the selector means when we write one means one by one property applied from first to last but if 1 write minus when then visa virsa.this propery also shows the delay between each animation applied
      repeat: -1, //repeat all properties using repeat and add any value for how many time you want to repeat , if want to run infinite then give value to -1.
      yoyo: true,
      //   scale: 2,
    });
    // gsap.from("#newBox2", {
    //   x: 1200,
    //   duration: 2,
    //   delay: 1,
    // });
  }, []);

  return (
    <div ref={newBox}>
      <div className="h-10 w-10 bg-black newBox"></div>
      <div className="h-10 w-10 bg-black newBox"></div>
      <div className="h-10 w-10 bg-black newBox"></div>
      {/* <div className="h-10 w-10 bg-black" id="newBox2"></div> */}
    </div>
  );
};
