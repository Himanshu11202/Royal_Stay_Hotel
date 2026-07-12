"use client";

import React, { useRef, useEffect } from "react";
import Image from "@/components/luxury-image";
import { gsap } from "@/lib/gsap";

export function InfinityPool() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 15,
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden bg-luxury-black flex items-center justify-center border-t border-b border-white/5"
    >
      {/* Parallax Background */}
      <div ref={bgRef} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
        <Image
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1600"
          alt="Palace Lakeside Infinity Pool"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black z-10" />
      </div>

      {/* Content overlay */}
      <div className="relative z-20 text-center max-w-3xl px-6 flex flex-col items-center">
        <span className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-primary font-semibold mb-6">
          THE ROYAL PLUNGE
        </span>
        
        <h2 className="font-serif text-4xl md:text-6xl text-white uppercase font-light tracking-wide leading-tight">
          {"The Imperial Lakeside"} <br /> <span className="italic text-primary font-serif">{"Infinity Pool"}</span>
        </h2>

        <p className="font-sans text-xs md:text-sm text-white/80 font-light max-w-xl leading-relaxed mt-6">
          Suspended at the edge of the lake, our temperature-controlled white marble infinity pool blends seamlessly with the shimmering horizon. Serviced by personal pool-side butlers offering organic refreshers.
        </p>

        <div className="mt-8 flex items-center space-x-6 text-[10px] uppercase font-sans tracking-widest text-white/50">
          <span>Length: 25 meters</span>
          <span className="text-primary">•</span>
          <span>Temperature: 28°C / 82°F</span>
          <span className="text-primary">•</span>
          <span>Exclusive for Guests</span>
        </div>
      </div>
    </section>
  );
}
export default InfinityPool;
