"use client";

import React from "react";
import Image from "@/components/luxury-image";
import { Award, Compass, Heart, Trophy, Clock, Star } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
}

const timelineData: TimelineEvent[] = [
  { year: "1892", title: "Palace Construction", desc: "Built as an imperial lakeside retreat for the royal family, framing Udaipur's sunset hills." },
  { year: "1924", title: "Imperial Ballroom Addition", desc: "Constructed the grand double-height ballroom to host foreign envoys and national ceremonies." },
  { year: "1978", title: "Boutique Resort Transition", desc: "Opened the palace gates to international travelers, preserving the original heritage architecture." },
  { year: "2012", title: "Devotional Interior Restoration", desc: "Executed a complete multi-year renovation of frescoes, marble bath columns, and plunge pools." },
  { year: "2026", title: "Leading Heritage Hotel Award", desc: "Recognized internationally as India's premier luxury lakeside boutique resort." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-luxury-black text-white pt-24 pb-20">
      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <Image
          src="https://images.unsplash.com/photo-1598977123418-45f04b01fe1e?auto=format&fit=crop&q=80&w=1600"
          alt="About Hero"
          fill
          priority
          className="object-cover opacity-30 scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/80" />
        <div className="relative z-10 text-center px-6">
          <span className="font-sans text-[8px] tracking-[0.6em] text-primary uppercase block mb-3 animate-pulse">
            CENTURY OF REGALITY
          </span>
          <h1 className="font-serif text-4xl md:text-7xl uppercase font-light tracking-wide text-white">
            {"Our Story & Heritage"}
          </h1>
          <div className="w-16 h-[1px] bg-primary/40 mx-auto mt-6" />
        </div>
      </div>

      {/* History intro */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-20">
        
        {/* Statistics block */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-white/5 mb-20 text-center">
          <div>
            <p className="font-serif text-3xl md:text-5xl text-primary font-light mb-1">134</p>
            <p className="font-sans text-[9px] tracking-widest text-white/40 uppercase">Years of History</p>
          </div>
          <div>
            <p className="font-serif text-3xl md:text-5xl text-primary font-light mb-1">130+</p>
            <p className="font-sans text-[9px] tracking-widest text-white/40 uppercase">Regal Rooms & Suites</p>
          </div>
          <div>
            <p className="font-serif text-3xl md:text-5xl text-primary font-light mb-1">3</p>
            <p className="font-sans text-[9px] tracking-widest text-white/40 uppercase">Michelin Gastronomies</p>
          </div>
          <div>
            <p className="font-serif text-3xl md:text-5xl text-primary font-light mb-1">5★</p>
            <p className="font-sans text-[9px] tracking-widest text-white/40 uppercase">World Luxury Class</p>
          </div>
        </div>

        {/* Founder & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="relative h-[320px] md:h-[450px] border border-white/5 shadow-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200"
              alt="Founder Message"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6">
            <div>
              <span className="font-sans text-[9px] tracking-[0.3em] text-primary uppercase block mb-1">
                OUR MISSION & VISION
              </span>
              <h2 className="font-serif text-3xl md:text-5xl uppercase font-light text-white tracking-wide">
                {"The Founder's Vision"}
              </h2>
            </div>
            <p className="font-sans text-sm font-light text-luxury-gray leading-relaxed">
              {"\"A luxury hotel should not feel like an asset—it must carry a soul. At ROYAL STAY, we strive to transport our guests back to a time of royal court gatherings, where butler care was an art form and dining was a celebratory ritual. Our vision is to safeguard this cultural landmark for generations of travelers to come.\""}
            </p>
            <div className="pt-2">
              <p className="font-serif text-lg text-white">Maharana Vikramaditya Singh</p>
              <p className="font-sans text-[9px] tracking-widest text-primary uppercase">Chief Custodian & Founder</p>
            </div>
          </div>
        </div>

        {/* Timeline block */}
        <div className="mb-24 bg-luxury-black/30 border border-white/5 p-8 md:p-16 rounded-sm shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-sans text-[9px] tracking-[0.3em] text-primary uppercase font-semibold block mb-1">
              HISTORICAL MILESTONES
            </span>
            <h2 className="font-serif text-3xl md:text-5xl uppercase font-light text-white tracking-wide animate-pulse">
              {"Heritage Timeline"}
            </h2>
            <div className="w-12 h-[1px] bg-primary/40 mx-auto mt-4" />
          </div>

          <div className="relative border-l border-white/10 pl-6 md:pl-12 max-w-3xl mx-auto space-y-12">
            {timelineData.map((evt, idx) => (
              <div key={idx} className="relative">
                {/* Gold bullet */}
                <div className="absolute left-[-30px] md:left-[-54px] top-1 w-3 h-3 bg-primary rounded-full border border-luxury-black shadow-lg" />
                <div className="space-y-2">
                  <span className="font-serif text-2xl text-primary font-medium">{evt.year}</span>
                  <h4 className="font-serif text-lg text-white font-medium uppercase">{evt.title}</h4>
                  <p className="font-sans text-xs text-luxury-gray font-light leading-relaxed">{evt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards list */}
        <div className="grid md:grid-cols-3 gap-8 text-center pb-10">
          <div className="p-8 border border-white/5 space-y-3">
            <Award className="mx-auto text-primary" size={28} />
            <h4 className="font-serif text-lg text-white uppercase">Conde Nast Winner</h4>
            <p className="font-sans text-xs text-luxury-gray font-light">Best Heritage Hotel Category - 2024</p>
          </div>
          <div className="p-8 border border-white/5 space-y-3">
            <Trophy className="mx-auto text-primary" size={28} />
            <h4 className="font-serif text-lg text-white uppercase">World Spa Awards</h4>
            <p className="font-sans text-xs text-luxury-gray font-light">India's Leading Spa & Wellness Sanctuary - 2025</p>
          </div>
          <div className="p-8 border border-white/5 space-y-3">
            <Star className="mx-auto text-primary" size={28} />
            <h4 className="font-serif text-lg text-white uppercase">Michelin stars</h4>
            <p className="font-sans text-xs text-luxury-gray font-light">Three Culinary Awards for Saffron Lounge</p>
          </div>
        </div>

      </div>
    </div>
  );
}
