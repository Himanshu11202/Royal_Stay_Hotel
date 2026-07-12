"use client";

import React from "react";
import Image from "@/components/luxury-image";
import Link from "next/link";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { ArrowRight, Leaf, Shield, HeartPulse } from "lucide-react";

export function SpaPreview() {
  const titleReveal = useGsapReveal("text-reveal", 0.1, 1.2);
  const contentReveal = useGsapReveal("slide-up", 0.2, 1);

  return (
    <section className="relative w-full bg-luxury-black py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-primary font-semibold mb-3">
              THE SPA SANCTUARY
            </p>
            <h2
              ref={titleReveal}
              className="font-serif text-3xl md:text-5xl uppercase font-light tracking-wide text-white"
            >
              Wellness & Private <span className="italic text-primary">Pavilions</span>
            </h2>
          </div>
          <div>
            <Link
              href="/spa"
              className="inline-flex items-center space-x-2 font-sans text-xs uppercase tracking-[0.2em] text-white hover:text-primary transition-colors pb-1 border-b border-white/10 hover:border-primary duration-300"
            >
              <span>Explore Treatments</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Copy */}
          <div ref={contentReveal} className="lg:col-span-5 flex flex-col space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-primary font-semibold">
                Soma Wellness Sanctuary
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-white uppercase font-light tracking-wide">
                Restorative Harmony for Mind & Soul
              </h3>
            </div>

            <p className="font-sans text-xs md:text-sm leading-relaxed text-white/70 font-light">
              Step into a sanctuary of calm. Our private wellness pavilions provide a full suite of traditional Ayurvedic treatments, hot volcanic stone therapies, and deep tissue massages performed by therapists trained in historic healing arts.
            </p>

            {/* Three key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/5">
              <div className="flex flex-col space-y-2">
                <Leaf size={20} className="text-primary" />
                <span className="font-serif text-sm text-white">Ayurvedic Rituals</span>
                <span className="font-sans text-[10px] text-white/40 leading-relaxed font-light">Traditional oils and therapeutic herbal scrubs.</span>
              </div>
              <div className="flex flex-col space-y-2">
                <HeartPulse size={20} className="text-primary" />
                <span className="font-serif text-sm text-white">Steam Pavilions</span>
                <span className="font-sans text-[10px] text-white/40 leading-relaxed font-light">Stone saunas and private thermal hydro pools.</span>
              </div>
              <div className="flex flex-col space-y-2">
                <Shield size={20} className="text-primary" />
                <span className="font-serif text-sm text-white">Bespoke Journeys</span>
                <span className="font-sans text-[10px] text-white/40 leading-relaxed font-light">Custom physical analysis and personal meal charts.</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/spa"
                className="inline-flex items-center space-x-2 px-8 py-3.5 bg-transparent border border-primary text-primary hover:bg-primary hover:text-luxury-black text-xs font-sans font-semibold uppercase tracking-[0.2em] transition-all"
              >
                Book Wellness Experience
              </Link>
            </div>
          </div>

          {/* Right Side: Visual Image Collage */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4 items-center order-1 lg:order-2 h-[450px] md:h-[550px] relative">
            <div className="col-span-4 h-[70%] relative overflow-hidden border border-white/5 shadow-2xl -translate-y-8">
              <Image
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=500"
                alt="Massage Therapy Room"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="col-span-8 h-full relative overflow-hidden border border-white/5 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"
                alt="Spa Relaxation Area"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
export default SpaPreview;
