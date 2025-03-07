"use client"
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import Typed from "typed.js";
import { useEffect,useRef } from "react";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Privacy-Focused', 'Fast', 'Easy to use'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      startDelay: 500,
      backDelay: 1500,
      showCursor: false,
    });
    return () => {
        typed.destroy();
    };
  }, []);
  return (
    <main className="bg-gray-200">
      <section className="grid grid-cols-2 h-[90vh]">
        <div className="flex flex-col items-start gap-8 justify-center pl-16">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL shortener in the Market
          </p>
          <p className="">
            We are the most straightfoward URL Shortener in the world. We priortize your privacy by not tracking your activities or requiring login details.</p>
          <div className="w-full h-[5vh]"><span ref={el} className="text-black font-bold text-lg"/></div>
          <div className='flex gap-3 justify-start'>
          <Link href="/shorten"><button className='bg-blue-500 rounded-lg  p-4 py-2 font-bold text-white'>Try Now</button></Link>
          <a href="https://github.com/Prashant07Panwar" 
        target="_blank"><button className='text-black bg-white-500 rounded-lg  p-4 py-2 font-bold border-black border-2'>GitHub</button></a>
        </div>
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true}    />
        </div>

      </section>
    </main>
  );
}