"use client";
import { useCursor } from "@/context/CursorContext";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { FaArrowTurnUp } from "react-icons/fa6";

import gsap from "gsap";
import Image from "next/image";
import Interview from '../../public/interview.png'


// import Navbar from "@/components/Navbar";
// import Image from "next/image";

export default function Home() {
  const { cursorRef } = useCursor();

  const { contextSafe } = useGSAP();
  return (
    <>
    <div className="w-full h-[85%]  flex justify-between items-center  ">
     {/* <div className=" w-3/4 h-full flex justify-start pl-4 items-center">
    
      <h1 onMouseEnter={contextSafe(() => {
                  cursorRef.current.innerHTML = `Scroll &#8595;`,
                  gsap.to(
                    cursorRef.current,
                    {
                      scale:'7',
                      backgroundColor:'white',
                      border:'1',
                      
                      duration: '0.3',
                      ease: "power3.out",
                      // mixBlendMode:'difference',
                      
                      opacity:'1',
                    },
                    // gsap.to(`#${nav.name.toLowerCase()}`, {
                      
                    //   duration:' 0.3',
                    //   ease: "power3.out",
                    // })
                  );
                })}
                onMouseLeave={contextSafe(() => {
                  cursorRef.current.innerHTML = '',
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
                })} className="text-[130px] cursor-none select-none text-nowrap p-2 pb-11 leading-none text-[#232422]  font-semibold">Level Up Your <br /> Interviews</h1>
     </div>
     <div className="w-2/4  h-full flex  items-end justify-center flex-col">
     <Image src={Interview} alt="png" width={400} height={400} className='mix-blend-multiply'></Image>
<p onMouseEnter={contextSafe(() => {
                  gsap.to(
                    cursorRef.current,
                    {
                      scale:'6',
                      backgroundColor:'white',
                      border:'0',
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
                })} className="w-4/5 pb-20 font-bold cursor-none text-base">Maximize your interview potential with our advanced AI technology. Personalized insights and real-time feedback ensure you approach each interview confidently and effectively. Elevate your interview prowess with cutting-edge innovation.</p>
     </div> */}
     <div className="w-full h-[97%]  flex flex-col justify-center items-center">
      <h1 className="text-7xl font-black  text-wrap  text-center leading-tight select-none">Transform Your <span onMouseEnter={contextSafe(() => {
                  // cursorRef.current.innerHTML = `Scroll &#8595;`,
                  gsap.to(
                    cursorRef.current,
                    {
                      scale:'3',
                      backgroundColor:'white',
                      // border:'1',
                      
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
                  cursorRef.current.innerHTML = '',
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
                })}  className="relative z-20">Interview</span> <span> <img className="absolute pointer-events-none -top-8 left-[41.5rem] w-[520px] h-[520px]" src="https://assets.website-files.com/62fdbdeb5472695f67359ce1/62fdbdeb5472692028359cfa_your-own-scribble.svg" alt="svg" /></span> <br /> with AI</h1>
      <div className="flex flex-col justify-center items-center w-full">
      <p className="font-semibold text-sm mt-3 ">Maximize your interview potential with our advanced AI technology. Personalized insights and real-time</p>
      <p  className="font-semibold text-sm  -mt-1"> feedback ensure you approach each interview confidently and effectively.</p>
      </div>
      
      <div className="mt-3">
          <Link href={'/login'} className="flex justify-center gap-4 items-center text-xs bg-black text-white rounded-full py-3 px-5 font-normal tracking-wide" >Get Started <FaArrowTurnUp className="rotate-90 translate-y-[1px] text-[11px] font-black "/></Link>
        </div>
      
     </div>
    </div>
    </>
  );
}
