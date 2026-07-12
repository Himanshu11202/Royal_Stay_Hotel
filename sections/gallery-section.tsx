"use client";

import React, { useState } from "react";
import Image from "@/components/luxury-image";
import galleryData from "@/data/gallery.json";
import { Lightbox } from "@/components/lightbox";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { ArrowUpRight } from "lucide-react";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  const titleReveal = useGsapReveal("text-reveal", 0.1, 1.2);

  // Filter gallery items
  const filteredItems = galleryData.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const categories = ["all", "suites", "grounds", "dining", "wellness"];

  // Image arrays for the lightbox navigator
  const activeImageUrls = filteredItems.map((item) => item.url);

  return (
    <section className="relative w-full bg-luxury-black py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div>
            <p className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-primary font-semibold mb-3">
              VISUAL CHRONICLES
            </p>
            <h2
              ref={titleReveal}
              className="font-serif text-3xl md:text-5xl uppercase font-light tracking-wide text-white leading-tight"
            >
              Palace Gallery & <span className="italic text-primary font-serif">{"Stillness"}</span>
            </h2>
          </div>

          {/* Categories Tab list */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 font-sans text-[10px] uppercase tracking-widest text-white/40">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`transition-colors duration-300 pb-1 border-b-2 ${
                  activeCategory === cat
                    ? "text-primary border-primary"
                    : "border-transparent hover:text-white"
                } interactive-hover`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setLightboxIndex(index)}
              className="break-inside-avoid relative overflow-hidden group border border-white/5 bg-[#0D0D0D] cursor-pointer view-hover"
            >
              {/* Dynamic Image scaling */}
              <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[400px] overflow-hidden">
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-103"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Hover Mask Screen */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-8" />

                {/* Hover details */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex justify-end">
                    <span className="p-3 bg-primary text-luxury-black rounded-full shadow-lg">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-primary/90 font-semibold">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-xl text-white">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Trigger */}
        <Lightbox
          images={activeImageUrls}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(index) => setLightboxIndex(index)}
        />

      </div>
    </section>
  );
}
export default GallerySection;
