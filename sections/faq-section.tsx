"use client";

import React from "react";
import faqData from "@/data/faq.json";
import Accordion from "@/components/accordion";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

export function FAQSection() {
  const titleReveal = useGsapReveal("text-reveal", 0.1, 1.2);

  // Map JSON to format expected by Accordion
  const accordionItems = faqData.map((item) => ({
    title: item.question,
    content: item.answer,
  }));

  return (
    <section className="relative w-full bg-luxury-black py-32 px-6 md:px-12 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-4 flex flex-col space-y-4 lg:sticky lg:top-32">
          <span className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-primary font-semibold">
            PALACE INQUIRIES & GUIDE
          </span>
          <h2
            ref={titleReveal}
            className="font-serif text-3xl md:text-5xl uppercase font-light tracking-wide text-white leading-tight"
          >
            {"Chronicles &"} <br /> <span className="italic text-primary font-serif">{"Stay Guidelines"}</span>
          </h2>
          <p className="font-sans text-xs text-white/50 leading-relaxed font-light pt-2">
            Should you have additional inquiries regarding check-ins, custom private dining setup, or airport transfers, please read our catalog of common responses or reach out to our Concierge Desk.
          </p>
        </div>

        {/* Right Column: Accordions */}
        <div className="lg:col-span-8">
          <Accordion items={accordionItems} />
        </div>

      </div>
    </section>
  );
}
export default FAQSection;
