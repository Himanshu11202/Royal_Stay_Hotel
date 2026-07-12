"use client";

import React, { useState } from "react";
import Image from "@/components/luxury-image";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface GalleryItem {
  id: number;
  category: "suites" | "dining" | "spa" | "events" | "aerial";
  title: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, category: "suites", title: "The Royal Suite Bedroom", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800" },
  { id: 2, category: "dining", title: "The Saffron Salon Banquets", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" },
  { id: 3, category: "spa", title: "Soma Ayurvedic Bath Therapy", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800" },
  { id: 4, category: "events", title: "Imperial Ballroom Wedding Stage", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800" },
  { id: 5, category: "aerial", title: "Lakefront Palace Drone Panorama", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" },
  { id: 6, category: "suites", title: "Deluxe Suite Veranda Lounge", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800" },
  { id: 7, category: "dining", title: "Rooftop Mewar Vista Sunset", image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=800" },
  { id: 8, category: "spa", title: "Prana Meditation Platform", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" },
  { id: 9, category: "events", title: "Imperial Garden Canopy Setup", image: "https://images.unsplash.com/photo-1519225495810-7517c51c911d?auto=format&fit=crop&q=80&w=800" },
];

const categories = [
  { id: "all", name: "All Chronicle" },
  { id: "suites", name: "Suites" },
  { id: "dining", name: "Dining" },
  { id: "spa", name: "Wellness" },
  { id: "events", name: "Celebrations" },
  { id: "aerial", name: "Aerial Views" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen bg-luxury-black text-white pt-24 pb-20">
      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600"
          alt="Gallery Hero"
          fill
          priority
          className="object-cover opacity-30 scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/80" />
        <div className="relative z-10 text-center px-6">
          <span className="font-sans text-[8px] tracking-[0.6em] text-primary uppercase block mb-3 block mb-3 animate-pulse">
            PALACE VISUAL RECORDS
          </span>
          <h1 className="font-serif text-4xl md:text-7xl uppercase font-light tracking-wide text-white">
            {"The Palace Chronicle"}
          </h1>
          <div className="w-16 h-[1px] bg-primary/40 mx-auto mt-6" />
        </div>
      </div>

      {/* Grid container */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-16">
        
        {/* Navigation Category Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-white/5 pb-6 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id);
                setLightboxIndex(null);
              }}
              className={`font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] pb-2 transition-colors duration-300 relative ${
                filter === cat.id ? "text-primary border-b border-primary" : "text-white/40 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Masonry image list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="relative aspect-[4/3] w-full overflow-hidden border border-white/5 shadow-lg group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover scale-102 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay mask */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <div className="text-center p-4">
                  <Eye className="mx-auto text-primary mb-2" size={24} />
                  <p className="font-serif text-sm text-white font-medium tracking-wide">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL OVERLAY */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-55 flex items-center justify-center p-6 select-none"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors cursor-pointer"
            onClick={() => setLightboxIndex(null)}
          >
            <X size={28} />
          </button>

          {/* Navigation arrow buttons */}
          <button
            className="absolute left-6 text-white/50 hover:text-white transition-colors cursor-pointer"
            onClick={handlePrev}
          >
            <ChevronLeft size={40} />
          </button>
          <button
            className="absolute right-6 text-white/50 hover:text-white transition-colors cursor-pointer"
            onClick={handleNext}
          >
            <ChevronRight size={40} />
          </button>

          {/* Lightbox center Image */}
          <div
            className="relative w-full max-w-[1000px] h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <div className="absolute bottom-[-40px] left-0 w-full text-center">
              <p className="font-serif text-sm tracking-wide text-white/90">
                {filteredItems[lightboxIndex].title}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
