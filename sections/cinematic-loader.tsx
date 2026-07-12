"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap";

export function CinematicLoader() {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Stagger letter reveals
    gsap.fromTo(
      ".loader-logo-char",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.08, duration: 1.2, ease: "power3.out", delay: 0.2 }
    );

    const counter = { val: 0 };
    const duration = 2.2; // seconds

    const countTween = gsap.to(counter, {
      val: 100,
      duration: duration,
      ease: "power2.out",
      onUpdate: () => {
        setCount(Math.floor(counter.val));
      },
      onComplete: () => {
        // Stagger curtains up
        gsap.to(".loader-curtain", {
          yPercent: -100,
          duration: 1.4,
          ease: "power4.inOut",
          stagger: 0.08,
          onComplete: () => {
            setIsComplete(true);
          },
        });
      },
    });

    return () => {
      countTween.kill();
    };
  }, []);

  if (isComplete) return null;

  const brandName = "ROYAL STAY";

  return (
    <div className="fixed inset-0 z-[200] overflow-hidden flex flex-col justify-between pointer-events-none">
      {/* Dynamic Slide Curtains */}
      <div className="absolute inset-0 flex flex-col">
        <div className="loader-curtain flex-1 bg-luxury-black border-b border-primary/5 pointer-events-auto" />
      </div>

      {/* Loader Content */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full p-8 md:p-16 text-white pointer-events-auto">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-sm tracking-[0.25em] uppercase text-primary">ROYAL STAY</span>
            <span className="font-sans text-[8px] tracking-[0.4em] uppercase text-white/40">Luxury Hotel & Resort</span>
          </div>
          <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/30">
            EST. 1892
          </div>
        </div>

        {/* Brand Typographical Stagger */}
        <div className="flex flex-col items-center justify-center flex-1 w-full">
          <h1 className="font-serif text-[10vw] leading-none text-white font-light tracking-wide uppercase select-none flex space-x-2">
            {brandName.split("").map((char, idx) => (
              <span
                key={idx}
                className="loader-logo-char inline-block"
                style={{ color: char === " " ? "transparent" : "#FFFFFF" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary/60 mt-4 font-light">
            timeless grandeur and bespoke luxury
          </p>
        </div>

        <div className="flex items-end justify-between border-t border-white/5 pt-8">
          <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40 max-w-[250px] leading-relaxed hidden md:block">
            AUTHENTIC HERITAGE HOSPITALITY AND WORLD-CLASS LUXURY EXPERIENCE.
          </div>
          <div className="font-serif text-6xl md:text-8xl text-primary font-light select-none tracking-tighter">
            {count.toString().padStart(3, "0")}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CinematicLoader;
