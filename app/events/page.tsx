"use client";

import React from "react";
import Image from "@/components/luxury-image";
import { useBooking } from "@/hooks/use-booking";
import { Star, Check, Sparkles, MapPin, Users, Calendar } from "lucide-react";

interface Venue {
  id: string;
  name: string;
  capacity: string;
  size: string;
  idealFor: string[];
  image: string;
  desc: string;
}

const venuesData: Venue[] = [
  {
    id: "ballroom",
    name: "The Imperial Ballroom",
    capacity: "450 Guests",
    size: "6,800 sq ft",
    idealFor: ["Royal Weddings", "Reception Galas", "Corporate Conferences"],
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
    desc: "A stunning, double-height ceiling hall illuminated by hand-cut Austrian crystal chandeliers, featuring intricate mirror plasterwork and dedicated stage acoustics.",
  },
  {
    id: "gardens",
    name: "Lakeside Royal Gardens",
    capacity: "800 Guests",
    size: "15,000 sq ft",
    idealFor: ["Destination Weddings", "Engagement Ceremonies", "Cocktail Parties", "Sangeet & Haldi"],
    image: "https://images.unsplash.com/photo-1549294413-26f195afcbce?auto=format&fit=crop&q=80&w=1200",
    desc: "Vast, manicured lawns sitting at the water's edge, framing shimmering sunset views of Lake Pichola. Features stone pathways and heritage stone canopy pavilions.",
  },
  {
    id: "banquet",
    name: "The Shahi Banquet Hall",
    capacity: "200 Guests",
    size: "3,500 sq ft",
    idealFor: ["Mehendi Rituals", "Birthday Celebrations", "Anniversary Galas"],
    image: "https://images.unsplash.com/photo-1519225495810-7517c51c911d?auto=format&fit=crop&q=80&w=1200",
    desc: "An atmospheric salon styled with hand-carved pillars and warm amber uplighting, perfect for close-knit family assemblies and traditional events.",
  },
  {
    id: "boardrooms",
    name: "Chamber Boardrooms",
    capacity: "40 Guests",
    size: "1,200 sq ft",
    idealFor: ["Business Conferences", "Corporate Meetings", "Press Briefings"],
    image: "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&q=80&w=1200",
    desc: "Soundproofed boardrooms equipped with widescreen media setups, custom mahogany conference tables, and personal coffee bars.",
  },
];

export default function EventsPage() {
  const { openBooking } = useBooking();

  return (
    <div className="min-h-screen bg-luxury-black text-white pt-24 pb-20">
      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1600"
          alt="Events Hero"
          fill
          priority
          className="object-cover opacity-30 scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/80" />
        <div className="relative z-10 text-center px-6">
          <span className="font-sans text-[8px] tracking-[0.6em] text-primary uppercase block mb-3 animate-pulse">
            IMPERIAL CELEBRATIONS
          </span>
          <h1 className="font-serif text-4xl md:text-7xl uppercase font-light tracking-wide text-white">
            {"Venues & Galas"}
          </h1>
          <div className="w-16 h-[1px] bg-primary/40 mx-auto mt-6" />
        </div>
      </div>

      {/* Venues listing */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-20">
        
        {/* Intro statement */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="font-sans text-xs md:text-sm text-primary font-medium tracking-[0.3em] uppercase mb-4">
            A LEGACY OF HISTORIC HOSTING
          </p>
          <p className="font-serif text-xl md:text-2xl font-light text-white leading-relaxed">
            {"From regal lakeside vows to business board briefings, ROYAL STAY frames your key historical milestones with refined luxury coordination and custom catering chefs."}
          </p>
        </div>

        {/* Venues lists */}
        <div className="space-y-24 mb-24">
          {venuesData.map((venue, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={venue.id}
                className={`flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image panel */}
                <div className="w-full lg:w-1/2 relative h-[300px] md:h-[450px] overflow-hidden border border-white/5 shadow-2xl group">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Details column */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                  <div>
                    <div className="flex items-center space-x-4 mb-2 text-[10px] font-sans tracking-widest text-primary uppercase">
                      <span className="flex items-center space-x-1">
                        <Users size={12} />
                        <span>Max {venue.capacity}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <MapPin size={12} />
                        <span>{venue.size}</span>
                      </span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl uppercase font-light text-white tracking-wide">
                      {venue.name}
                    </h2>
                  </div>

                  <p className="font-sans text-sm font-light text-luxury-gray leading-relaxed">
                    {venue.desc}
                  </p>

                  <div className="space-y-3">
                    <p className="text-[9px] font-sans tracking-widest text-primary uppercase font-bold">Ideal Layout setups</p>
                    <div className="grid grid-cols-2 gap-3">
                      {venue.idealFor.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2 text-xs font-sans text-white/70">
                          <Check size={12} className="text-primary" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={openBooking}
                      className="px-10 py-4 bg-primary text-luxury-black text-xs font-sans font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-300 interactive-hover"
                    >
                      Book Event Space
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Capacity Matrix table layout */}
        <div className="bg-luxury-black border border-white/5 p-8 md:p-12 rounded-sm shadow-xl mb-20 overflow-x-auto">
          <div className="text-center mb-10">
            <span className="font-sans text-[9px] tracking-[0.3em] text-primary uppercase font-semibold block mb-1">
              SPECIFICATION CHART
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-white uppercase font-light tracking-wider">Venue Capacity Matrix</h3>
            <div className="w-12 h-[1px] bg-primary/20 mx-auto mt-3" />
          </div>

          <table className="w-full text-left font-sans text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-primary uppercase tracking-widest text-[9px]">
                <th className="pb-4 font-semibold">Venue Name</th>
                <th className="pb-4 font-semibold">Size (sq ft)</th>
                <th className="pb-4 font-semibold">Banquet Setup</th>
                <th className="pb-4 font-semibold">Reception Setup</th>
                <th className="pb-4 font-semibold">Theatre Setup</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white/80">
              <tr>
                <td className="py-4 font-serif text-sm font-medium text-white">Imperial Ballroom</td>
                <td className="py-4">6,800</td>
                <td className="py-4">350 Guests</td>
                <td className="py-4">450 Guests</td>
                <td className="py-4">500 Guests</td>
              </tr>
              <tr>
                <td className="py-4 font-serif text-sm font-medium text-white">Lakeside Gardens</td>
                <td className="py-4">15,000</td>
                <td className="py-4">550 Guests</td>
                <td className="py-4">800 Guests</td>
                <td className="py-4">1,000 Guests</td>
              </tr>
              <tr>
                <td className="py-4 font-serif text-sm font-medium text-white">Shahi Banquet Hall</td>
                <td className="py-4">3,500</td>
                <td className="py-4">150 Guests</td>
                <td className="py-4">200 Guests</td>
                <td className="py-4">220 Guests</td>
              </tr>
              <tr>
                <td className="py-4 font-serif text-sm font-medium text-white">Chamber Boardrooms</td>
                <td className="py-4">1,200</td>
                <td className="py-4">N/A</td>
                <td className="py-4">30 Guests</td>
                <td className="py-4">40 Guests</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Big Wedding Banner showcase */}
        <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden border border-white/5">
          <Image
            src="https://images.unsplash.com/photo-1519225495810-7517c51c911d?auto=format&fit=crop&q=80&w=1200"
            alt="Palace Wedding decoration"
            fill
            className="object-cover opacity-20 scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-luxury-black/40 to-luxury-black/90" />
          <div className="relative z-10 text-center max-w-xl px-6 space-y-6">
            <span className="font-sans text-[8px] tracking-[0.5em] text-primary uppercase block">
              DESTINATION WEDDINGS
            </span>
            <h3 className="font-serif text-3xl md:text-5xl text-white uppercase font-light tracking-wide">
              {"Vows Sealed in Royalty"}
            </h3>
            <p className="font-sans text-xs text-luxury-gray font-light leading-relaxed">
              Let our dedicated coordinators organize your Haldi, Mehendi, Sangeet, and main wedding ceremony under imperial canopies.
            </p>
            <div className="pt-2">
              <button
                onClick={openBooking}
                className="px-8 py-3.5 bg-primary text-luxury-black text-xs font-sans font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-300 interactive-hover"
              >
                Inquire Wedding Packages
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
