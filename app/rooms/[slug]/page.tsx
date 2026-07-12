"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import roomsData from "@/data/rooms.json";
import { formatPrice } from "@/lib/utils";
import BookingWidget from "@/components/booking-widget";
import { Maximize2, Compass, Users, Bed, ChevronLeft, ChevronRight, Sparkles, RefreshCw } from "lucide-react";

export function RoomDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const room = roomsData.find((r) => r.slug === slug);

  // Slideshow active index
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  
  // Interactive 360 mock offset
  const [rotationOffset, setRotationOffset] = useState(50); // percentage

  useEffect(() => {
    if (!room) {
      router.push("/rooms");
    }
  }, [room, router]);

  if (!room) return null;

  // Next / Prev slide
  const nextImg = () => {
    setActiveImgIdx((prev) => (prev + 1) % room.images.length);
  };

  const prevImg = () => {
    setActiveImgIdx((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  // Filter other rooms for the bottom carousel
  const relatedRooms = roomsData.filter((r) => r.slug !== slug).slice(0, 2);

  return (
    <div className="bg-luxury-black text-white min-h-screen pt-28 pb-24 font-sans font-light">
      
      {/* 1. Cinematic Gallery Header */}
      <section className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden bg-luxury-charcoal">
        <Image
          src={room.images[activeImgIdx]}
          alt={room.name}
          fill
          className="object-cover transition-all duration-700 ease-in-out opacity-80"
          priority
          sizes="100vw"
        />
        {/* Widescreen dark shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-black/40 z-10" />

        {/* Gallery Controls */}
        <div className="absolute inset-x-6 md:inset-x-12 bottom-8 z-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.35em] text-primary font-semibold">
              ACCOMMODATIONS
            </span>
            <h1 className="font-serif text-3xl md:text-5xl uppercase tracking-wide text-white mt-1">
              {room.name}
            </h1>
          </div>
          
          {/* Gallery Stills Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={prevImg}
              className="p-3 border border-white/20 bg-black/60 hover:border-primary text-white/70 hover:text-primary transition-colors focus:outline-none"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-xs uppercase tracking-widest text-white/40">
              {activeImgIdx + 1} / {room.images.length}
            </span>
            <button
              onClick={nextImg}
              className="p-3 border border-white/20 bg-black/60 hover:border-primary text-white/70 hover:text-primary transition-colors focus:outline-none"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Split Content Layout */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Side: Editorial room brief */}
        <div className="lg:col-span-7 flex flex-col space-y-12">
          
          {/* Key Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-white/5 pb-10">
            <div className="flex flex-col space-y-1.5">
              <span className="text-[10px] uppercase text-white/40 tracking-widest flex items-center space-x-1">
                <Maximize2 size={10} className="text-primary mr-1" />
                <span>Suite Size</span>
              </span>
              <span className="font-serif text-lg text-white">{room.size}</span>
            </div>
            <div className="flex flex-col space-y-1.5">
              <span className="text-[10px] uppercase text-white/40 tracking-widest flex items-center space-x-1">
                <Compass size={10} className="text-primary mr-1" />
                <span>Lakeside View</span>
              </span>
              <span className="font-serif text-lg text-white">{room.view}</span>
            </div>
            <div className="flex flex-col space-y-1.5">
              <span className="text-[10px] uppercase text-white/40 tracking-widest flex items-center space-x-1">
                <Users size={10} className="text-primary mr-1" />
                <span>Max Guests</span>
              </span>
              <span className="font-serif text-lg text-white">{room.occupancy}</span>
            </div>
            <div className="flex flex-col space-y-1.5">
              <span className="text-[10px] uppercase text-white/40 tracking-widest flex items-center space-x-1">
                <Bed size={10} className="text-primary mr-1" />
                <span>Bedding</span>
              </span>
              <span className="font-serif text-lg text-white">{room.bed}</span>
            </div>
          </div>

          {/* Detailed Narrative Description */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl uppercase tracking-wider text-primary font-light">
              Royal Living Chronicle
            </h2>
            <p className="text-sm leading-relaxed text-white/70">
              {room.description}
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              Each space in this suite is curated to offer absolute peace and regal heritage. The high ceilings showcase traditional structural aesthetics, while the custom bathroom includes single-stone hand-carved bathtubs, private steam columns, and organic bath selections.
            </p>
          </div>

          {/* Full privileges checklist */}
          <div className="space-y-6 pt-4 border-t border-white/5">
            <h2 className="font-serif text-2xl uppercase tracking-wider text-primary font-light">
              Suite Privileges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {room.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center space-x-3 text-xs text-white/70">
                  <Sparkles size={12} className="text-primary shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Interactive Mock 360 Virtual Tour */}
          <div className="space-y-6 pt-8 border-t border-white/5">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl uppercase tracking-wider text-primary font-light">
                360° Virtual Preview
              </h2>
              <span className="font-sans text-[9px] uppercase tracking-widest text-white/40 flex items-center space-x-1">
                <RefreshCw size={10} className="animate-spin text-primary mr-1" />
                <span>Simulated Panorama</span>
              </span>
            </div>
            
            {/* Interactive box */}
            <div className="relative w-full h-[320px] bg-luxury-charcoal/40 border border-white/10 overflow-hidden flex items-center justify-center group">
              <div 
                className="absolute inset-0 transition-transform duration-300 ease-out"
                style={{ 
                  transform: `scale(1.1) translateX(${(rotationOffset - 50) * -0.5}%)`,
                  backgroundImage: `url(${room.images[1]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.65
                }}
              />
              <div className="absolute inset-0 bg-black/20" />
              
              {/* Instructions Overlay */}
              <div className="absolute z-10 pointer-events-none text-center px-4 py-2 bg-luxury-black/75 border border-white/10 text-[9px] uppercase tracking-widest text-primary font-sans select-none">
                Use Slider Below To Pan Room View
              </div>
            </div>

            {/* Slider Control */}
            <div className="flex flex-col space-y-2">
              <input
                type="range"
                min="0"
                max="100"
                value={rotationOffset}
                onChange={(e) => setRotationOffset(Number(e.target.value))}
                className="w-full h-1 bg-white/10 accent-primary outline-none cursor-ew-resize appearance-none"
              />
              <div className="flex justify-between text-[9px] uppercase font-sans tracking-widest text-white/30">
                <span>View Left</span>
                <span>Center View</span>
                <span>View Right</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Sticky Booking card */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
          <BookingWidget embedded={true} />
        </div>

      </section>

      {/* 4. Related Suites */}
      <section className="border-t border-white/5 pt-24 max-w-[1400px] mx-auto px-6 md:px-12">
        <h3 className="font-serif text-3xl uppercase tracking-wider text-white mb-12">
          Compare Other <span className="italic text-primary">Suites</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedRooms.map((r) => (
            <Link
              key={r.slug}
              href={`/rooms/${r.slug}`}
              className="flex bg-luxury-charcoal/20 border border-white/5 overflow-hidden group hover:border-primary/20 transition-all duration-300"
            >
              <div className="relative w-1/3 min-h-[160px] shrink-0 overflow-hidden">
                <Image
                  src={r.images[0]}
                  alt={r.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="20vw"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div className="space-y-1">
                  <h4 className="font-serif text-lg text-white group-hover:text-primary transition-colors">{r.name}</h4>
                  <p className="font-sans text-[10px] text-white/50">{r.view}</p>
                </div>
                <span className="font-sans text-[10px] text-primary uppercase tracking-widest font-semibold">
                  From {formatPrice(r.price)} / Night
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
export default RoomDetailPage;
