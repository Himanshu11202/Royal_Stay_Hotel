"use client";

import React from "react";
import Image from "@/components/luxury-image";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { useBooking } from "@/hooks/use-booking";
import { ArrowRight, Sparkles, Gem, Compass } from "lucide-react";

export function SpecialOffers() {
  const { openBooking } = useBooking();
  const titleReveal = useGsapReveal("text-reveal", 0.1, 1.2);

  const offers = [
    {
      name: "Saffron Sunset Cruise",
      badge: "Signature Experience",
      description: "Enjoy a private 90-minute sunset boat charter across Lake Pichola. Includes fine Mewari high tea and champagne served by your personal butler.",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800",
      icon: Compass,
      perk: "Complementary for Lakeview stays"
    },
    {
      name: "Royal Golf & Dine Package",
      badge: "Exclusive Privilege",
      description: "A chauffeur-driven Rolls-Royce transfers you to Udaipur's premier private golf course, culminating in an 8-course dining ritual under the stars.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      icon: Gem,
      perk: "Includes private green fee access"
    },
    {
      name: "Ayurvedic Rejuvenation Ritual",
      badge: "Wellness Retreat",
      description: "A tailored 3-day wellness package. Includes custom body analysis, daily private spa sessions, organic meals, and lakeside yoga.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
      icon: Sparkles,
      perk: "Ayurvedic physician consulting"
    }
  ];

  return (
    <section className="relative w-full bg-luxury-black py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-4 md:space-y-0">
          <div>
            <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-primary font-semibold mb-3">
              PALACE INDULGENCES
            </p>
            <h2
              ref={titleReveal}
              className="font-serif text-3xl md:text-5xl uppercase font-light tracking-wide text-white"
            >
              Private Offers & <span className="italic text-primary font-serif">{"Experiences"}</span>
            </h2>
          </div>
          <div>
            <button
              onClick={openBooking}
              className="inline-flex items-center space-x-2 font-sans text-xs uppercase tracking-[0.2em] text-white hover:text-primary transition-colors pb-1 border-b border-white/10 hover:border-primary duration-300 interactive-hover"
            >
              <span>Inquire About Custom Stays</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, idx) => {
            const Icon = offer.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col bg-[#0A0A0A] border border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/25"
              >
                {/* Widescreen image */}
                <div className="relative w-full h-[260px] overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={offer.name}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 to-transparent pointer-events-none" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-luxury-black/90 border border-white/10 px-3.5 py-1.5 font-sans text-[9px] uppercase tracking-widest text-primary font-semibold">
                    {offer.badge}
                  </span>
                </div>

                {/* Details */}
                <div className="p-8 flex flex-col flex-1 justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl text-white group-hover:text-primary transition-colors duration-300">
                      {offer.name}
                    </h3>
                    <p className="font-sans text-xs text-luxury-gray leading-relaxed font-light">
                      {offer.description}
                    </p>
                  </div>

                  {/* Perk specs */}
                  <div className="flex items-center space-x-3 text-[9px] uppercase font-sans tracking-widest text-primary/80 border-t border-white/5 pt-6 mt-2">
                    <Icon size={14} className="shrink-0" />
                    <span>{offer.perk}</span>
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <button
                      onClick={openBooking}
                      className="font-sans text-[10px] uppercase tracking-[0.25em] text-white hover:text-primary transition-colors flex items-center space-x-2 interactive-hover"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
export default SpecialOffers;
