"use client";

import React from "react";
import hotelData from "@/data/hotel.json";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { Award } from "lucide-react";

export function Awards() {
  const titleReveal = useGsapReveal("text-reveal", 0.1, 1.2);

  return (
    <section className="relative w-full bg-luxury-black py-32 px-6 md:px-12 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left column: subtitle */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          <span className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-primary font-semibold">
            ROYAL HONORS & CREDENTIALS
          </span>
          <h2
            ref={titleReveal}
            className="font-serif text-3xl md:text-5xl uppercase font-light tracking-wide text-white leading-tight"
          >
            {"Distinguished"} <br /> <span className="italic text-primary font-serif">{"Accolades"}</span>
          </h2>
          <p className="font-sans text-xs text-white/50 leading-relaxed font-light pt-2">
            A testament to our unwavering dedication to preserving royal history while providing modern bespoke hospitality of the highest echelon.
          </p>
        </div>

        {/* Right column: awards list */}
        <div className="lg:col-span-8 flex flex-col w-full">
          {hotelData.awards.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border-b border-white/10 py-8 group transition-colors duration-300 hover:border-primary/30"
            >
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="p-3 border border-white/5 bg-luxury-charcoal/20 text-primary shrink-0 group-hover:border-primary/20 transition-all duration-300">
                  <Award size={20} />
                </div>
                
                {/* Details */}
                <div className="flex flex-col space-y-1">
                  <h3 className="font-serif text-xl md:text-2xl text-white group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className="font-sans text-xs text-white/40 font-light">
                    Awarded by {item.organization}
                  </span>
                </div>
              </div>

              {/* Year */}
              <div className="font-serif text-2xl md:text-3xl text-primary font-light pl-6">
                {item.year}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default Awards;
