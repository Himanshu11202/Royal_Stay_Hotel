"use client";

import React, { useRef, useEffect } from "react";
import Image from "@/components/luxury-image";
import Link from "next/link";
import roomsData from "@/data/rooms.json";
import { formatPrice } from "@/lib/utils";
import { useBooking } from "@/hooks/use-booking";
import { Maximize2, Compass, Users, ArrowRight } from "lucide-react";
import { gsap } from "@/lib/gsap";

export function RoomPreview() {
  const { openBooking, setBookingData } = useBooking();
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only execute horizontal scroll pin on desktop screen sizes
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const wrapper = wrapperRef.current;
      
      if (container && wrapper) {
        // Calculate horizontal slide width
        const totalScrollWidth = wrapper.scrollWidth - window.innerWidth;

        gsap.to(wrapper, {
          x: -totalScrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: true,
            start: "top top",
            end: () => `+=${wrapper.scrollWidth}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        // Add subtle overlay parallax
        gsap.utils.toArray(".room-panel-img").forEach((img: any) => {
          gsap.fromTo(
            img,
            { scale: 1.08 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: img,
                containerAnimation: gsap.getById("scroll-trigger") as any, // wait, scrub with parent trigger
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const handleQuickBook = (slug: string) => {
    setBookingData((prev: any) => ({ ...prev, roomType: slug }));
    openBooking();
  };

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-[#0A0A0A] border-t border-white/5">
      {/* Horizontal Panels Wrapper */}
      <div
        ref={wrapperRef}
        className="flex flex-col lg:flex-row h-auto lg:h-screen w-full lg:w-fit"
      >
        {/* Panel 1: Introductory Header Panel */}
        <div className="w-full lg:w-screen h-[50vh] lg:h-full flex-shrink-0 flex flex-col justify-center px-8 md:px-20 py-20 lg:py-0 border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="max-w-xl space-y-6">
            <p className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-primary font-semibold">
              THE IMPERIAL ENCLOSURES
            </p>
            <h2 className="font-serif text-4xl md:text-7xl uppercase font-light tracking-wide text-white leading-[1.1]">
              Palace Suites & <br />
              <span className="italic text-primary font-serif">{"Royal Pavilions"}</span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-luxury-gray leading-relaxed font-light max-w-md">
              A private collection of three regal suites and private plunge villas overlooking Lake Pichola. Walk through to compare layouts and reserves.
            </p>
            <div className="pt-4 flex items-center space-x-4">
              <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-white/30 hidden lg:inline">
                Scroll Down To Swipe Suites
              </span>
              <span className="text-primary hidden lg:inline">→</span>
              <Link
                href="/rooms"
                className="inline-flex items-center space-x-2 font-sans text-xs uppercase tracking-[0.2em] text-white hover:text-primary transition-colors pb-1 border-b border-white/10 hover:border-primary duration-300 interactive-hover"
              >
                <span>All Accommodations</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Dynamic Panels: Suites List */}
        {roomsData.map((room) => (
          <div
            key={room.slug}
            className="w-full lg:w-screen h-auto lg:h-full flex-shrink-0 flex flex-col lg:flex-row items-center border-b lg:border-b-0 lg:border-r border-white/5"
          >
            {/* Left: Suite Cover Image */}
            <div className="w-full lg:w-1/2 h-[380px] lg:h-full relative overflow-hidden group">
              <Image
                src={room.images[0]}
                alt={room.name}
                fill
                className="room-panel-img object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-background/5 lg:to-transparent pointer-events-none" />
              
              {/* Floating Price Tag */}
              <div className="absolute top-8 left-8 bg-luxury-black/90 border border-white/10 px-5 py-2.5 font-sans text-xs tracking-widest text-primary">
                {formatPrice(room.price)} / Night
              </div>
            </div>

            {/* Right: Suite Content Specs */}
            <div className="w-full lg:w-1/2 px-8 md:px-16 py-16 lg:py-0 flex flex-col justify-center space-y-8 lg:space-y-10">
              <div className="space-y-4">
                <span className="font-sans text-[0.65rem] tracking-[0.25em] uppercase text-primary">
                  {room.bed}
                </span>
                <h3 className="font-serif text-3xl md:text-5xl text-white font-light uppercase tracking-wide">
                  {room.name}
                </h3>
                <p className="font-sans text-xs md:text-sm text-luxury-gray leading-relaxed font-light max-w-md">
                  {room.description}
                </p>
              </div>

              {/* Specific specs */}
              <div className="flex items-center space-x-8 text-[10px] uppercase font-sans tracking-widest text-white/40 border-t border-b border-white/5 py-4 max-w-md">
                <span className="flex items-center space-x-2">
                  <Maximize2 size={12} className="text-primary" />
                  <span>{room.size}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Compass size={12} className="text-primary" />
                  <span>{room.view}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Users size={12} className="text-primary" />
                  <span>{room.occupancy}</span>
                </span>
              </div>

              {/* CTAs */}
              <div className="flex items-center space-x-8 pt-2">
                <Link
                  href={`/rooms/${room.slug}`}
                  className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/70 hover:text-primary transition-all duration-300 border-b border-transparent hover:border-primary pb-1 interactive-hover"
                >
                  Suite Chronicles
                </Link>
                <button
                  onClick={() => handleQuickBook(room.slug)}
                  className="px-8 py-3.5 bg-primary text-luxury-black hover:bg-white hover:text-black text-[10px] uppercase tracking-[0.25em] font-sans font-semibold transition-all duration-300 interactive-hover"
                >
                  Reserve Stay
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default RoomPreview;
