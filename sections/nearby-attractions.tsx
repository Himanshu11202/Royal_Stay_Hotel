"use client";

import React from "react";
import Image from "@/components/luxury-image";
import { MapPin, Navigation } from "lucide-react";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

export function NearbyAttractions() {
  const titleReveal = useGsapReveal("text-reveal", 0.1, 1.2);

  const attractions = [
    {
      name: "Lake Pichola Boat Charters",
      distance: "10 mins by Private Boat",
      description: "Charter a private royal boat at sunset to glide past floating palace arches and historic bathing ghats in absolute peace.",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "City Palace Mewar Museum",
      distance: "15 mins by Chauffeur",
      description: "A monumental heritage complex tracing 400 years of Mewari history, housing crystals, royal armaments, and fresco collections.",
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Sajjangarh Monsoon Palace",
      distance: "25 mins by Chauffeur",
      description: "Perched high on the Aravalli peaks, this hilltop stone fortress offers grand panoramic vistas of the surrounding lakes and sanctuary.",
      image: "https://images.unsplash.com/photo-1598977123418-45f04b01fe1e?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="relative w-full bg-luxury-black py-32 px-6 md:px-12 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-primary font-semibold mb-3">
              THE KINGDOM OF MEWAR
            </p>
            <h2
              ref={titleReveal}
              className="font-serif text-3xl md:text-5xl uppercase font-light tracking-wide text-white"
            >
              Nearby Sights & <span className="italic text-primary">Excursions</span>
            </h2>
          </div>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((sight, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-luxury-charcoal/30 border border-white/5 overflow-hidden group hover:border-primary/20 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full h-[280px] overflow-hidden">
                <Image
                  src={sight.image}
                  alt={sight.name}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Distance Badge */}
                <div className="absolute bottom-4 left-4 bg-luxury-black/85 backdrop-blur-sm px-3.5 py-1.5 flex items-center space-x-1.5 border border-white/10 text-[10px] uppercase font-sans tracking-widest text-primary">
                  <Navigation size={10} />
                  <span>{sight.distance}</span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 md:p-8 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl text-white group-hover:text-primary transition-colors duration-300">
                    {sight.name}
                  </h3>
                  <p className="font-sans text-xs text-white/50 leading-relaxed font-light">
                    {sight.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center space-x-2 text-[10px] uppercase tracking-widest font-sans text-primary select-none">
                  <MapPin size={12} />
                  <span>Explore Excursion Route</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default NearbyAttractions;
