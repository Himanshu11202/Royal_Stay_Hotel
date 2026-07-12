"use client";

import React from "react";
import Image from "@/components/luxury-image";
import Link from "next/link";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { useBooking } from "@/hooks/use-booking";
import { ArrowRight, Leaf, Waves, UtensilsCrossed, Dumbbell, CalendarRange } from "lucide-react";

export function ExperiencesPreview() {
  const { openBooking } = useBooking();
  const titleReveal = useGsapReveal("text-reveal", 0.1, 1.2);

  return (
    <section className="relative w-full bg-luxury-black py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-4 md:space-y-0">
          <div>
            <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-primary font-semibold mb-3">
              INDULGENCE & RETREATS
            </p>
            <h2
              ref={titleReveal}
              className="font-serif text-3xl md:text-5xl uppercase font-light tracking-wide text-white leading-tight"
            >
              Luxury Estate <span className="italic text-primary font-serif">{"Experiences"}</span>
            </h2>
          </div>
          <div>
            <button
              onClick={openBooking}
              className="inline-flex items-center space-x-2 font-sans text-xs uppercase tracking-[0.2em] text-white hover:text-primary transition-colors pb-1 border-b border-white/10 hover:border-primary duration-300 interactive-hover"
            >
              <span>View All Estate Inclusions</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Custom Asymmetric Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* CARD 1: SPA SANCTUARY (Vertical Glass Card - 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col bg-[#0A0A0A] border border-white/5 overflow-hidden group hover:border-primary/20 transition-all duration-500 justify-between">
            <div className="relative w-full h-[300px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800"
                alt="Ayurvedic Spa Room"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
              <span className="absolute top-6 left-6 bg-primary text-luxury-black p-3 rounded-full">
                <Leaf size={16} />
              </span>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <span className="font-sans text-[9px] uppercase tracking-widest text-primary/80">Soma Wellness</span>
                <h3 className="font-serif text-2xl text-white">Private Spa & Meditation</h3>
                <p className="font-sans text-xs text-luxury-gray leading-relaxed font-light">
                  A sanctuary of silence. Experience historic Ayurvedic oil therapies and volcano hot stone massages in soundproof waterfront pavilions.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/spa"
                  className="font-sans text-[10px] uppercase tracking-[0.25em] text-white hover:text-primary transition-all duration-300 flex items-center space-x-2 interactive-hover"
                >
                  <span>Wellness Menu</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 2: THE INFINITY POOL (Wide Horizontal Card - 7 Cols) */}
          <div className="lg:col-span-7 relative flex flex-col justify-end overflow-hidden group border border-white/5 min-h-[450px] lg:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1200"
              alt="Lakeside Infinity Pool"
              fill
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-103 z-0"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Dark Radial Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10 z-10" />

            <div className="absolute top-6 right-6 z-20 bg-luxury-black/90 border border-white/10 px-4 py-2 font-sans text-[9px] tracking-widest text-primary uppercase font-medium">
              Waterfront Lounge
            </div>

            <div className="relative z-20 p-8 md:p-12 space-y-4 max-w-xl">
              <span className="flex items-center space-x-2 text-[9px] uppercase tracking-widest text-primary/95 font-semibold">
                <Waves size={14} />
                <span>Infinity Plunge</span>
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-white font-light uppercase tracking-wide">
                Lakeside Infinity Pool
              </h3>
              <p className="font-sans text-xs text-white/70 leading-relaxed font-light">
                Float in temperature-controlled spring waters where the edge of the pool merges seamlessly with the historic horizons of Lake Pichola.
              </p>
            </div>
          </div>

          {/* CARD 3: IMPERIAL DINING (Split Horizontal Card - 8 Cols) */}
          <div className="lg:col-span-8 flex flex-col md:flex-row bg-[#0A0A0A] border border-white/5 overflow-hidden group hover:border-primary/20 transition-all duration-500">
            <div className="relative w-full md:w-1/2 h-[280px] md:h-auto overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"
                alt="Imperial Dining Room"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="flex items-center space-x-2 text-[9px] uppercase tracking-widest text-primary/80">
                  <UtensilsCrossed size={12} />
                  <span>Fine Gastronomy</span>
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-white">Sheesh Mahal Restaurant</h3>
                <p className="font-sans text-xs text-luxury-gray leading-relaxed font-light">
                  Savor ancient Mewari family recipes recreated by Michelin-starred masters. Private lakeside dome dining available nightly.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/dining"
                  className="font-sans text-[10px] uppercase tracking-[0.25em] text-white hover:text-primary transition-all duration-300 flex items-center space-x-2 interactive-hover"
                >
                  <span>Explore Venues</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 4: FITNESS SUITE (Glass Box Card - 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col bg-gradient-to-br from-[#0E0E0E] to-[#050505] border border-white/5 p-8 justify-between group hover:border-primary/20 transition-all duration-500">
            <div className="flex items-center justify-between border-b border-white/5 pb-6">
              <span className="p-3 bg-primary/10 text-primary rounded-full">
                <Dumbbell size={16} />
              </span>
              <span className="font-sans text-[8px] tracking-widest text-white/30 uppercase">Open 24 Hours</span>
            </div>

            <div className="space-y-4 my-8">
              <span className="font-sans text-[9px] uppercase tracking-widest text-primary/80">Physical Wellness</span>
              <h3 className="font-serif text-2xl text-white font-light uppercase tracking-wide">Palace Fitness Club</h3>
              <p className="font-sans text-xs text-luxury-gray leading-relaxed font-light">
                Our state-of-the-art gym offers Technogym equipment, private yoga instructors, and post-workout mineral therapies.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-white/5 pt-6 text-[9px] font-sans text-white/40 tracking-widest uppercase">
              <span>Personal Trainers</span>
              <span className="text-primary">Available</span>
            </div>
          </div>

          {/* CARD 5: HERITAGE CELEBRATIONS (Widescreen Overlay Card - 12 Cols) */}
          <div className="lg:col-span-12 relative flex flex-col justify-end overflow-hidden group border border-white/5 min-h-[350px] lg:min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1600"
              alt="Bespoke Events Setup"
              fill
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-102 z-0"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

            <div className="relative z-20 p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4 max-w-xl">
                <span className="flex items-center space-x-2 text-[9px] uppercase tracking-widest text-primary/95 font-semibold">
                  <CalendarRange size={14} />
                  <span>Imperial Venues</span>
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-white font-light uppercase tracking-wide leading-tight">
                  Heritage Wedding & Executive Retreats
                </h3>
                <p className="font-sans text-xs text-white/70 leading-relaxed font-light">
                  Host grand events in locations crafted for nobility. From lakeside terraces for weddings to private boardrooms for executive summits.
                </p>
              </div>

              <div className="shrink-0 flex space-x-4">
                <Link
                  href="/events"
                  className="px-8 py-4 bg-primary text-luxury-black hover:bg-white hover:text-black text-[10px] font-sans font-semibold uppercase tracking-[0.2em] transition-all duration-300 interactive-hover"
                >
                  Explore Venues
                </Link>
                <button
                  onClick={openBooking}
                  className="px-8 py-4 border border-white/20 text-white hover:border-primary hover:text-primary text-[10px] font-sans font-semibold uppercase tracking-[0.2em] transition-all duration-300 interactive-hover"
                >
                  Plan Event
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
export default ExperiencesPreview;
