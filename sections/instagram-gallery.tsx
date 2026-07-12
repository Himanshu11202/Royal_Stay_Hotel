"use client";

import React from "react";
import Image from "@/components/luxury-image";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { Instagram, ArrowUpRight } from "lucide-react";

export function InstagramGallery() {
  const titleReveal = useGsapReveal("text-reveal", 0.1, 1.2);

  const feeds = [
    {
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600",
      alt: "Lakeside spa massage setup"
    },
    {
      url: "https://images.unsplash.com/photo-1598977123418-45f04b01fe1e?auto=format&fit=crop&q=80&w=600",
      alt: "Historic arch corridor"
    },
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
      alt: "Sheesh Mahal dining mirrors"
    },
    {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600",
      alt: "Sunset boat dock"
    },
    {
      url: "https://images.unsplash.com/photo-1549294413-26f195afcbce?auto=format&fit=crop&q=80&w=600",
      alt: "Lakeside dome structure"
    },
    {
      url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=600",
      alt: "Suite bedroom view"
    }
  ];

  return (
    <section className="relative w-full bg-luxury-black py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 space-y-4 sm:space-y-0">
          <div>
            <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-primary font-semibold mb-3">
              DIGITAL DIARIES
            </p>
            <h2
              ref={titleReveal}
              className="font-serif text-2xl md:text-4xl uppercase font-light text-white tracking-wide"
            >
              {"Follow Our Chronicles"} <span className="italic text-primary font-serif">{"@royalstay"}</span>
            </h2>
          </div>
          <div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 font-sans text-xs uppercase tracking-[0.2em] text-white hover:text-primary transition-colors pb-1 border-b border-white/10 hover:border-primary duration-300 interactive-hover"
            >
              <Instagram size={14} />
              <span>Visit Instagram</span>
            </a>
          </div>
        </div>

        {/* Instagrid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {feeds.map((feed, idx) => (
            <a
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full h-[180px] sm:h-[240px] overflow-hidden group border border-white/5 bg-[#0B0B0B] view-hover"
            >
              <Image
                src={feed.url}
                alt={feed.alt}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex flex-col items-center space-y-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <Instagram size={20} className="text-primary" />
                  <span className="font-sans text-[7px] tracking-widest uppercase text-white/50">
                    VIEW POST
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
export default InstagramGallery;
