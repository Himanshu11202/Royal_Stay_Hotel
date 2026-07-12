"use client";

import React from "react";
import Image from "@/components/luxury-image";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { useBooking } from "@/hooks/use-booking";
import { Heart, Compass, Users, Star } from "lucide-react";

export function WeddingDestination() {
  const { openBooking } = useBooking();
  const titleReveal = useGsapReveal("text-reveal", 0.1, 1.2);
  const infoReveal = useGsapReveal("slide-up", 0.2, 1);

  return (
    <section className="relative w-full bg-[#0A0A0A] py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left: Visual Collage */}
        <div className="lg:col-span-6 relative h-[450px] md:h-[550px] w-full border border-white/5 shadow-2xl overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200"
            alt="Palace Wedding Setup"
            fill
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-103"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
          
          <div className="absolute bottom-8 left-8 z-10 space-y-2">
            <span className="font-serif text-2xl md:text-3xl text-white uppercase font-light tracking-wide">
              The Zen Courtyard
            </span>
            <p className="font-sans text-[10px] tracking-widest uppercase text-primary/80">
              Capacity: Up to 500 Guests
            </p>
          </div>
        </div>

        {/* Right: Editorial Copy & Specs */}
        <div ref={infoReveal} className="lg:col-span-6 flex flex-col space-y-8 max-w-xl">
          <div>
            <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-primary font-semibold mb-3">
              TIMELESS WEDDING DESTINATION
            </p>
            <h2
              ref={titleReveal}
              className="font-serif text-4xl md:text-6xl uppercase font-light text-white tracking-wide leading-tight"
            >
              Imperial Royal <br />
              <span className="italic text-primary font-serif">{"Weddings"}</span>
            </h2>
          </div>

          <p className="font-sans text-xs md:text-sm leading-relaxed text-luxury-gray font-light">
            Exchange your vows in a setting of unmatched majesty. From sunset lake decks to ancient sandstone pavilions, our curators craft bespoke wedding rituals, complete with royal entries, custom floral displays, and imperial dining banquets.
          </p>

          {/* Core Wedding Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/5">
            <div className="flex flex-col space-y-2">
              <Heart size={18} className="text-primary" />
              <span className="font-serif text-sm text-white">Custom Decors</span>
              <span className="font-sans text-[10px] text-white/40 leading-relaxed font-light">
                Traditional Mewar florals and mandap layouts.
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <Users size={18} className="text-primary" />
              <span className="font-serif text-sm text-white">Dedicated Staff</span>
              <span className="font-sans text-[10px] text-white/40 leading-relaxed font-light">
                Personal event coordinators and guest butlers.
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <Star size={18} className="text-primary" />
              <span className="font-serif text-sm text-white">Royal Banquets</span>
              <span className="font-sans text-[10px] text-white/40 leading-relaxed font-light">
                Curated fine-dining menus and dessert lounges.
              </span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={openBooking}
              className="px-8 py-4 bg-primary text-luxury-black text-xs font-sans font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-300 interactive-hover"
            >
              Plan Celebrations
            </button>
            <button
              onClick={openBooking}
              className="px-8 py-4 border border-white/10 text-white hover:border-primary hover:text-primary text-xs font-sans font-semibold uppercase tracking-[0.2em] transition-colors duration-300 interactive-hover"
            >
              View Venues
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
export default WeddingDestination;
