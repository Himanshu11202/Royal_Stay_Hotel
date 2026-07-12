"use client";

import React, { useState } from "react";
import Image from "@/components/luxury-image";
import Link from "next/link";
import restaurantData from "@/data/restaurant.json";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { ArrowRight, Clock, ShieldCheck } from "lucide-react";

export function DiningPreview() {
  const [activeVenueIdx, setActiveVenueIdx] = useState(0);
  const titleReveal = useGsapReveal("text-reveal", 0.1, 1.2);
  
  const currentVenue = restaurantData.venues[activeVenueIdx];

  return (
    <section className="relative w-full bg-luxury-black py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-primary font-semibold mb-3">
              THE IMPERIAL KITCHENS
            </p>
            <h2
              ref={titleReveal}
              className="font-serif text-3xl md:text-5xl uppercase font-light tracking-wide text-white"
            >
              Signature Gastronomy & <span className="italic text-primary">Cellars</span>
            </h2>
          </div>
          <div>
            <Link
              href="/dining"
              className="inline-flex items-center space-x-2 font-sans text-xs uppercase tracking-[0.2em] text-white hover:text-primary transition-colors pb-1 border-b border-white/10 hover:border-primary duration-300"
            >
              <span>Explore Dining Venues</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Tab Selectors */}
        <div className="flex border-b border-white/5 pb-4 mb-12 space-x-8 overflow-x-auto scrollbar-hide">
          {restaurantData.venues.map((venue, idx) => (
            <button
              key={venue.id}
              onClick={() => setActiveVenueIdx(idx)}
              className={`font-serif text-xl md:text-2xl uppercase tracking-wider pb-2 focus:outline-none transition-all duration-300 border-b-2 shrink-0 ${
                activeVenueIdx === idx
                  ? "text-primary border-primary"
                  : "text-white/40 border-transparent hover:text-white"
              }`}
            >
              {venue.name}
            </button>
          ))}
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Dynamic Image */}
          <div className="lg:col-span-6 relative h-[400px] md:h-[500px] w-full overflow-hidden border border-white/5 shadow-2xl">
            <Image
              src={currentVenue.image}
              alt={currentVenue.name}
              fill
              className="object-cover transition-transform duration-1000 ease-out scale-100"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right Side: Venue Details & Mini Menu */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div>
              <span className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-primary font-semibold">
                {currentVenue.type}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-white uppercase font-light tracking-wide mt-2">
                {currentVenue.name}
              </h3>
            </div>

            <p className="font-sans text-xs md:text-sm leading-relaxed text-white/70 font-light max-w-xl">
              {currentVenue.description}
            </p>

            <div className="flex flex-wrap gap-6 text-[10px] uppercase font-sans tracking-widest text-white/40 border-t border-b border-white/5 py-4 my-2">
              <span className="flex items-center space-x-1.5">
                <Clock size={12} className="text-primary" />
                <span>Hours: {currentVenue.hours}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <ShieldCheck size={12} className="text-primary" />
                <span>Dress: {currentVenue.dressCode}</span>
              </span>
            </div>

            {/* Menu Snippet */}
            <div className="flex flex-col space-y-4 pt-2">
              <h4 className="font-serif text-xs tracking-wider uppercase text-primary">Signature Selections</h4>
              <div className="flex flex-col space-y-3 font-sans">
                {currentVenue.menu.map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-white/5 pb-2 text-xs">
                    <div className="flex flex-col space-y-1">
                      <span className="text-white font-medium">{item.name}</span>
                      <span className="text-[10px] text-white/40 font-light pr-4">{item.description}</span>
                    </div>
                    <span className="text-primary font-semibold pl-4">₹{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
export default DiningPreview;
