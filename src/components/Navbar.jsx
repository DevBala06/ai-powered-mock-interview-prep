"use client";
import { useCursor } from "@/context/CursorContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React from "react";
import { IoIosArrowDropup } from "react-icons/io";
import { FaArrowTurnUp } from "react-icons/fa6";

const Navbar = () => {
  const { cursorRef } = useCursor();

  const { contextSafe } = useGSAP();
  return (
    <>
      <div className="flex justify-between px-5 py-3 items-center bg-[#e3fd8fbe] rounded-full relative top-4  max-w-screen-xl mx-auto">
        
        <div className="flex gap-1 justify-center items-center ">
          <IoIosArrowDropup className="text-2xl text-zinc-700 cursor-none  font-semibold " />
          <div className="relative ">
            <h1 className="relative select-none text-lg text-gray-800 font-[900] z-10">
              Mock
            </h1>
            {/* <img
            src="https://cdn3.getmood.io/warehouse/dynamic/433734.svg"
            alt="lime-bg"
            
            className="absolute w-[100%] opacity-[1]   h-[100%] top-0 left-0"
          /> */}
            {/* <svg
              className="absolute top-[2px] -left-2 rounded-full"
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height=" 20"
              viewBox="0 0 50 20"
              fill="none"
            >
              <script xmlns="" id="eppiocemhmnlbhjplcgkofciiegomcon" />
              <script xmlns="" />
              <script xmlns="" />
              <g filter="url(#filter0_f_1651_5314)">
                <rect
                  width="247"
                  height="7"
                  transform="matrix(1 0 0 -1 7 14)"
                  fill="#B9FF00"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_1651_5314"
                  x="0"
                  y="0"
                  width="261"
                  height="21"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="3.5"
                    result="effect1_foregroundBlur_1651_5314"
                  />
                </filter>
              </defs>
            </svg> */}
          </div>
        </div>
        <div className="flex space-x-7">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Pricing", path: "/pricing" },

          ].map((nav) => {
            return (
              <Link
                href={nav.path}
                onMouseEnter={contextSafe(() => {
                  gsap.to(
                    cursorRef.current,
                    {
                      scale:'2',
                      backgroundColor:'#FDFDFD',
                      duration: '0.3',
                      ease: "power3.out",
                      mixBlendMode:'difference',
                      opacity:'1',
                    },
                    // gsap.to(`#${nav.name.toLowerCase()}`, {
                      
                    //   duration:' 0.3',
                    //   ease: "power3.out",
                    // })
                  );
                })}
                onMouseLeave={contextSafe(() => {
                  gsap.to(
                    cursorRef.current,
                    {
                      scale: "1",
                      backgroundColor: "#000000",
                      // opacity: "1",
                      duration: '0.3',
                      ease: "power3.out",
                      mixBlendMode:'normal',
                    },
                    // gsap.to(`#${nav.name.toLowerCase()}`, {
                      
                    //   // color: "#a1a1aa",
                    //   duration: '0.3',
                    //   ease: "power3.out",
                    // })
                  );
                })}
                key={nav.name.toLowerCase()}
                id={`${nav.name.toLowerCase()}`}
                className={`text-black text-sm font-[700] tracking-wide z-10 cursor-none `}
              >
                {nav.name}
              </Link>
            );
          })}
        </div>
        <div>
          <Link href={'/login'} onMouseEnter={contextSafe(() => {
                  gsap.to(
                    cursorRef.current,
                    {
                      scale:'2',
                      backgroundColor:'#FDFDFD',
                      duration: '0.3',
                      ease: "power3.out",
                      mixBlendMode:'difference',
                      opacity:'1',
                    },
                    // gsap.to(`#${nav.name.toLowerCase()}`, {
                      
                    //   duration:' 0.3',
                    //   ease: "power3.out",
                    // })
                  );
                })}
                onMouseLeave={contextSafe(() => {
                  gsap.to(
                    cursorRef.current,
                    {
                      scale: "1",
                      backgroundColor: "#000000",
                      // opacity: "1",
                      duration: '0.3',
                      ease: "power3.out",
                      mixBlendMode:'normal',
                    },
                    // gsap.to(`#${nav.name.toLowerCase()}`, {
                      
                    //   // color: "#a1a1aa",
                    //   duration: '0.3',
                    //   ease: "power3.out",
                    // })
                  );
                })}  >
                  <div className="flex justify-center gap-4 items-center text-xs  bg-black text-white rounded-full py-3 px-5 font-normal tracking-wide">Get Started <FaArrowTurnUp className="rotate-90 translate-y-[1px] text-[11px] font-black "/></div>
                </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
