"use client";

import React, { useRef, useEffect } from "react";
import Image from "@/components/luxury-image";
import Link from "next/link";
import { gsap, ScrollTrigger, useIsomorphicLayoutEffect } from "@/lib/gsap";

export function WelcomeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinColumnRef = useRef<HTMLDivElement>(null);
  const imageGridRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    // Media query check - only pin on desktop layouts
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      const pinEl = pinColumnRef.current;
      const container = containerRef.current;
      
      if (pinEl && container) {
        // Pin the left text column inside the container scroll window
        ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          pin: pinEl,
          pinSpacing: false,
          anticipatePin: 1,
        });

        // Parallax scroll on individual right-side images
        gsap.utils.toArray(".welcome-parallax-img").forEach((img: any) => {
          gsap.fromTo(
            img,
            { y: 50, scale: 0.98 },
            {
              y: -50,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="welcome-section"
      ref={containerRef}
      className="relative w-full bg-luxury-black text-white min-h-[120vh] lg:min-h-[200vh] flex flex-col lg:flex-row items-stretch"
    >
      {/* Left Column: Pinned Text Content */}
      <div
        ref={pinColumnRef}
        className="w-full lg:w-1/2 h-auto lg:h-screen flex flex-col justify-center px-8 md:px-16 py-20 lg:py-0 border-b lg:border-b-0 lg:border-r border-white/5 bg-luxury-black/80 backdrop-blur-sm z-10"
      >
        <div className="max-w-xl flex flex-col space-y-8">
          <div>
            <p className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-primary font-semibold mb-3">
              THE CHRONICLE OF ROYAL STAY
            </p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] uppercase font-light text-white tracking-wide">
              {"A Sanctuary of"} <br />
              <span className="italic text-primary font-serif">{"Imperial Heritage"}</span>
            </h2>
          </div>

          <div className="flex flex-col space-y-6 text-sm font-sans font-light leading-relaxed text-luxury-gray">
            <p>
              Constructed in 1892 as an imperial lakeside retreat, ROYAL STAY stands as a proud guardian of classical history and timeless architecture.
            </p>
            <p>
              Every stone panel, hand-painted ceiling fresco, and marble archway has been restored with historical devotion. Walk the same corridors and overlook the same lakes as royals did, now curated with modern boutique luxuries and personal butler attention.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center space-x-3 font-sans text-xs uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1.5 hover:border-primary transition-all duration-300 interactive-hover"
              >
                Discover Our Heritage
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Scrolling Images */}
      <div
        ref={imageGridRef}
        className="w-full lg:w-1/2 px-8 md:px-16 py-20 lg:py-40 flex flex-col space-y-32 justify-start items-center"
      >
        {/* Image 1: Main Courtyard */}
        <div className="welcome-parallax-img relative w-full h-[350px] md:h-[480px] overflow-hidden border border-white/5 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1598977123418-45f04b01fe1e?auto=format&fit=crop&q=80&w=800"
            alt="Courtyard Frescoes"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
        </div>

        {/* Image 2: Lakefront Pavilions */}
        <div className="welcome-parallax-img relative w-[80%] h-[280px] md:h-[380px] overflow-hidden border border-white/5 shadow-2xl self-end">
          <Image
            src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
            alt="Royal Lakeside Dome"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 80vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
        </div>

        {/* Image 3: Saffron High Tea */}
        <div className="welcome-parallax-img relative w-[85%] h-[260px] md:h-[350px] overflow-hidden border border-white/5 shadow-2xl self-start">
          <Image
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"
            alt="Palace tea lounge"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 80vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
export default WelcomeSection;
