"use client";

import { useCursor } from "@/context/CursorContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState, useRef } from "react";

function Cursor() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });

  const cursorRef = useRef();
  const { setCursorRef } = useCursor();

  useEffect(() => {
    setCursorRef(cursorRef);
    function mouseMove(e) {
      const { clientX, clientY } = e;
      setCursor({ x: clientX, y: clientY });
    }
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  useGSAP(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: cursor.x - 8,
        y: cursor.y - 8,
        // opacity:'0.6',
        ease: "none",
        duration: 0.2,
      });
    }
  }, [cursor]);

  //   const variant = {
  //     default: {
  //       x: cursor.x,
  //       y: cursor.y,
  //     },
  //   };

  return (
    <>
      <div
        ref={cursorRef}
        className="w-[16px] bg-[#000000] h-[16px]  z-[9999]  flex justify-center items-center text-[2.2px] pt-[1px] font-[400]  fixed left-0 top-0 pointer-events-none rounded-full border-zinc-300"
      ></div>
    </>
  );
}

export default Cursor;
