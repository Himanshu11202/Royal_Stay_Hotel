"use client";

import React from "react";
import Image from "@/components/luxury-image";
import { useBooking } from "@/hooks/use-booking";
import { Star, Maximize2, Users, Bed, Check, Sparkles } from "lucide-react";

interface Suite {
  id: string;
  name: string;
  price: string;
  size: string;
  guests: string;
  bed: string;
  image: string;
  description: string;
  features: string[];
}

const suitesData: Suite[] = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    price: "₹18,000",
    size: "450 sq ft",
    guests: "2 Guests",
    bed: "King Bed",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200",
    description: "Elegant lakeside quarters blending classic imperial masonry with hand-woven silk tapestries and state-of-the-art room controls.",
    features: ["Lakeside Balcony", "Marble Bath", "24/7 Butler Support"],
  },
  {
    id: "executive",
    name: "Executive Room",
    price: "₹24,000",
    size: "580 sq ft",
    guests: "2 Guests",
    bed: "King Bed",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200",
    description: "Designed for discerning leaders, combining a separate working studio room, hand-restored mahogany writing desks, and panoramic garden verandas.",
    features: ["Garden Lounge Patio", "Private Wine Bar", "Priority Dining access"],
  },
  {
    id: "family",
    name: "Family Suite",
    price: "₹32,000",
    size: "820 sq ft",
    guests: "4 Guests",
    bed: "Two Double Beds",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1200",
    description: "Spacious multi-chamber suite featuring double fireplaces, a personal family dining salon, and interconnecting private garden courtyards.",
    features: ["Double Fireplaces", "Private Courtyard", "Children's Nursery corner"],
  },
  {
    id: "royal",
    name: "Royal Suite",
    price: "₹50,000",
    size: "1,200 sq ft",
    guests: "3 Guests",
    bed: "Imperial Canopy Bed",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200",
    description: "An authentic palace chamber built in 1892. Features high frescoed ceilings, gilded furniture relics, and a semi-private lakeside plunge pool.",
    features: ["Plunge Pool", "Imperial Canopy Bed", "Private Sommelier"],
  },
  {
    id: "presidential",
    name: "Presidential Suite",
    price: "₹1,20,000",
    size: "2,400 sq ft",
    guests: "6 Guests",
    bed: "Grand Sovereign Beds",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200",
    description: "The peak of luxury hospitality. Features three bedrooms, a private infinity rooftop pool overlooking the mountains, dining lounge, and 24-hour dedicated butler corps.",
    features: ["Rooftop Infinity Pool", "3 Master Bedrooms", "Dedicated Butler Team", "Private Spa Salon"],
  },
];

export default function SuitesPage() {
  const { openBooking } = useBooking();

  return (
    <div className="min-h-screen bg-luxury-black text-white pt-24 pb-20">
      {/* Banner */}
      <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1600"
          alt="Suites Hero"
          fill
          priority
          className="object-cover opacity-30 scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/80" />
        <div className="relative z-10 text-center px-6">
          <span className="font-sans text-[8px] tracking-[0.6em] text-primary uppercase block mb-3 animate-pulse">
            ROYAL SANCTUARIES
          </span>
          <h1 className="font-serif text-4xl md:text-7xl uppercase font-light tracking-wide text-white">
            {"Suites & Villas"}
          </h1>
          <div className="w-16 h-[1px] bg-primary/40 mx-auto mt-6" />
        </div>
      </div>

      {/* Grid container */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-20 space-y-24">
        {suitesData.map((suite, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={suite.id}
              className={`flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20 ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Grid block */}
              <div className="w-full lg:w-1/2 relative h-[300px] md:h-[480px] overflow-hidden border border-white/5 shadow-2xl group">
                <Image
                  src={suite.image}
                  alt={suite.name}
                  fill
                  className="object-cover scale-102 group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-luxury-black/80 backdrop-blur-sm border border-primary/20 flex items-center space-x-1.5">
                  <Sparkles size={12} className="text-primary" />
                  <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-primary">Regal tier</span>
                </div>
              </div>

              {/* Text Specs block */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="font-sans text-[10px] tracking-[0.25em] text-primary uppercase font-medium">
                      Starting from
                    </span>
                    <span className="text-white/20">/</span>
                    <span className="font-serif text-lg text-primary">{suite.price}</span>
                    <span className="font-sans text-[9px] tracking-[0.1em] text-white/40 uppercase">per night</span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-5xl uppercase font-light text-white tracking-wide">
                    {suite.name}
                  </h2>
                </div>

                <p className="font-sans text-sm font-light text-luxury-gray leading-relaxed">
                  {suite.description}
                </p>

                {/* Grid stats */}
                <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-white/5">
                  <div className="flex items-center space-x-3">
                    <Maximize2 size={16} className="text-primary/70" />
                    <div>
                      <p className="text-[9px] font-sans tracking-widest text-white/40 uppercase">Size</p>
                      <p className="text-xs font-sans text-white/90 font-medium">{suite.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users size={16} className="text-primary/70" />
                    <div>
                      <p className="text-[9px] font-sans tracking-widest text-white/40 uppercase">Capacity</p>
                      <p className="text-xs font-sans text-white/90 font-medium">{suite.guests}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Bed size={16} className="text-primary/70" />
                    <div>
                      <p className="text-[9px] font-sans tracking-widest text-white/40 uppercase">Beds</p>
                      <p className="text-xs font-sans text-white/90 font-medium">{suite.bed}</p>
                    </div>
                  </div>
                </div>

                {/* Features checklist */}
                <div className="space-y-2">
                  <p className="text-[9px] font-sans tracking-widest text-primary uppercase font-semibold">Included Privileges</p>
                  <div className="grid grid-cols-2 gap-3">
                    {suite.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2 text-xs font-sans text-white/70">
                        <Check size={12} className="text-primary" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-6">
                  <button
                    onClick={openBooking}
                    className="px-10 py-4 bg-primary text-luxury-black text-xs font-sans font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-300 interactive-hover"
                  >
                    Book Sanctuary
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
