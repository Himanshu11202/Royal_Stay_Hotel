"use client";

import React from "react";
import Image from "@/components/luxury-image";
import { useBooking } from "@/hooks/use-booking";
import { Sparkles, Check, Flame, Heart, Compass } from "lucide-react";

interface Treatment {
  name: string;
  duration: string;
  price: string;
  desc: string;
  image: string;
}

const treatmentsData: Treatment[] = [
  {
    name: "Ayurvedic Abhyanga",
    duration: "90 Mins",
    price: "₹8,500",
    desc: "An ancient full-body herbal oil massage tailored to harmonize your doshas, boosting circulation and calming the nervous system.",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Himalayan Salt Stone Therapy",
    duration: "75 Mins",
    price: "₹7,200",
    desc: "Heated salt crystals containing 84 trace minerals are massaged across tension points to alkalize skin and draw out impurities.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Royal Rose & Oud Body Scrub",
    duration: "60 Mins",
    price: "₹6,000",
    desc: "A rich scrub of organic rose petals, brown sugar, and oud bark oils that exfoliates and leaves skin glowing and perfumed.",
    image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Kundalini Meditation & Yoga",
    duration: "90 Mins",
    price: "₹4,500",
    desc: "Guided breathing, prana alignment, and light stretches on our lake-facing marble platform led by our master yogis.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600",
  },
];

export default function SpaPage() {
  const { openBooking } = useBooking();

  return (
    <div className="min-h-screen bg-luxury-black text-white pt-24 pb-20">
      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1600"
          alt="Spa Hero"
          fill
          priority
          className="object-cover opacity-30 scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/80" />
        <div className="relative z-10 text-center px-6">
          <span className="font-sans text-[8px] tracking-[0.6em] text-primary uppercase block mb-3 animate-pulse">
            SOMA PALACE SANCTUARY
          </span>
          <h1 className="font-serif text-4xl md:text-7xl uppercase font-light tracking-wide text-white">
            {"Wellness & Spa"}
          </h1>
          <div className="w-16 h-[1px] bg-primary/40 mx-auto mt-6" />
        </div>
      </div>

      {/* Facilities intro */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-20">
        <div className="grid md:grid-cols-3 gap-8 py-12 border-b border-white/5 mb-16">
          <div className="space-y-3">
            <Flame className="text-primary h-6 w-6" />
            <h3 className="font-serif text-xl uppercase font-light text-white">Steam & Sauna Baths</h3>
            <p className="font-sans text-xs text-luxury-gray font-light leading-relaxed">
              Custom dry cedarwood saunas and eucalyptus-infused steam chambers to open pores, dilate blood vessels, and deeply detoxify.
            </p>
          </div>
          <div className="space-y-3">
            <Heart className="text-primary h-6 w-6" />
            <h3 className="font-serif text-xl uppercase font-light text-white">Lakeside Infinity Pool</h3>
            <p className="font-sans text-xs text-luxury-gray font-light leading-relaxed">
              A temperature-controlled pool merging directly into the horizons of Pichola. Featuring solar heated bubble beds and underwater music.
            </p>
          </div>
          <div className="space-y-3">
            <Compass className="text-primary h-6 w-6" />
            <h3 className="font-serif text-xl uppercase font-light text-white">Prana Yoga Studio</h3>
            <p className="font-sans text-xs text-luxury-gray font-light leading-relaxed">
              A private pavilion dedicated to meditation, breath-work, and posture alignments, surrounded by flowing streams and gardens.
            </p>
          </div>
        </div>

        {/* Treatments catalog */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="font-sans text-[9px] tracking-[0.3em] text-primary uppercase font-semibold block mb-1">
              INDULGENCE SELECTIONS
            </span>
            <h2 className="font-serif text-3xl md:text-5xl uppercase font-light text-white tracking-wide">
              {"Therapeutic Rituals"}
            </h2>
            <div className="w-12 h-[1px] bg-primary/40 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {treatmentsData.map((treat, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row bg-luxury-black/30 border border-white/5 overflow-hidden group shadow-lg">
                <div className="w-full sm:w-[200px] h-[200px] relative overflow-hidden flex-shrink-0">
                  <Image
                    src={treat.image}
                    alt={treat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 200px"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-serif text-lg text-white font-medium">{treat.name}</h4>
                    </div>
                    <div className="flex items-center space-x-2 text-[10px] font-sans tracking-widest text-primary uppercase">
                      <span>{treat.duration}</span>
                      <span>•</span>
                      <span>{treat.price}</span>
                    </div>
                    <p className="font-sans text-xs font-light text-luxury-gray leading-relaxed">{treat.desc}</p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={openBooking}
                      className="text-primary hover:text-white font-sans text-[10px] uppercase tracking-widest border-b border-primary/20 pb-1 hover:border-white transition-all duration-300"
                    >
                      Book Therapy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Packages pricing block */}
        <div className="bg-luxury-black/50 border border-white/5 p-8 md:p-16 rounded-sm text-center shadow-xl">
          <span className="font-sans text-[9px] tracking-[0.3em] text-primary uppercase font-semibold block mb-1">
            SPA PACKAGES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl uppercase font-light text-white tracking-wide">
            {"Imperial Wellness Packages"}
          </h2>
          <div className="w-12 h-[1px] bg-primary/40 mx-auto mt-4 mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/5 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="font-serif text-lg text-white">Palace Day Ritual</h4>
                <p className="font-serif text-3xl text-primary">₹14,000</p>
                <div className="w-6 h-[1px] bg-primary/20 mx-auto" />
                <div className="space-y-2 text-xs font-sans text-white/70">
                  <p>Massage of choice (90 mins)</p>
                  <p>Herbal petal scrub (30 mins)</p>
                  <p>Organic spa lunch pool access</p>
                </div>
              </div>
              <button
                onClick={openBooking}
                className="w-full py-3 bg-transparent border border-primary/40 text-primary hover:bg-primary hover:text-luxury-black text-xs font-sans uppercase tracking-widest transition-colors duration-300"
              >
                Reserve Package
              </button>
            </div>

            <div className="p-8 border-2 border-primary/45 space-y-6 flex flex-col justify-between relative bg-luxury-black/90">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-luxury-black font-sans text-[9px] font-bold tracking-widest uppercase py-1 px-3">
                Most Immersive
              </div>
              <div className="space-y-4">
                <h4 className="font-serif text-lg text-white">Imperial Soma Sanctuary</h4>
                <p className="font-serif text-3xl text-primary">₹22,000</p>
                <div className="w-6 h-[1px] bg-primary/20 mx-auto" />
                <div className="space-y-2 text-xs font-sans text-white/70">
                  <p>Hot salt stone therapy (90 mins)</p>
                  <p>Custom gold petal scrub (60 mins)</p>
                  <p>Private yoga & breath session (60 mins)</p>
                  <p>Ayurvedic somatic detox drinks</p>
                </div>
              </div>
              <button
                onClick={openBooking}
                className="w-full py-3 bg-primary text-luxury-black text-xs font-sans font-semibold uppercase tracking-widest transition-colors duration-300"
              >
                Reserve Package
              </button>
            </div>

            <div className="p-8 border border-white/5 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="font-serif text-lg text-white">Couples Soma Escape</h4>
                <p className="font-serif text-3xl text-primary">₹28,000</p>
                <div className="w-6 h-[1px] bg-primary/20 mx-auto" />
                <div className="space-y-2 text-xs font-sans text-white/70">
                  <p>Couples massage room (90 mins)</p>
                  <p>Private hydrotherapy jacuzzi (30 mins)</p>
                  <p>Sommelier wine & fresh fruit platter</p>
                </div>
              </div>
              <button
                onClick={openBooking}
                className="w-full py-3 bg-transparent border border-primary/40 text-primary hover:bg-primary hover:text-luxury-black text-xs font-sans uppercase tracking-widest transition-colors duration-300"
              >
                Reserve Package
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
