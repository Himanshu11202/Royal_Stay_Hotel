"use client";

import React, { useState } from "react";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { Mail, ArrowRight } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const containerReveal = useGsapReveal("slide-up", 0.1, 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="relative w-full bg-[#0A0A0A] py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div
        ref={containerReveal}
        className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center space-y-10"
      >
        <div className="space-y-4">
          <p className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-primary font-semibold">
            ESTATE CORRESPONDENCES
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-white font-light uppercase tracking-wide leading-tight">
            {"Subscribe to"} <br />
            <span className="italic text-primary font-serif">{"Private Bulletins"}</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-luxury-gray max-w-xl mx-auto leading-relaxed font-light">
            Stay appraised of private seasonal privileges, exclusive villa openings, and curated Mewar heritage schedules. We share only discrete correspondences.
          </p>
        </div>

        {subscribed ? (
          <div className="p-8 border border-primary/20 bg-primary/5 max-w-md w-full text-center space-y-2">
            <span className="font-serif text-xl text-primary font-light uppercase tracking-wide">
              Welcome to the Circle
            </span>
            <p className="font-sans text-[10px] text-white/60 tracking-wider uppercase">
              A verification letter has been dispatched.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch w-full max-w-lg bg-[#0E0E0E] border border-white/10 p-2 gap-2"
          >
            <div className="flex items-center flex-1 px-4 py-2 sm:py-0">
              <Mail size={16} className="text-white/30 mr-3 shrink-0" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR PRIVATE EMAIL ADDRESS"
                className="w-full bg-transparent border-0 outline-0 ring-0 text-xs font-sans tracking-widest text-white placeholder-white/20 uppercase"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-primary text-luxury-black hover:bg-white hover:text-black text-[10px] font-sans font-semibold uppercase tracking-[0.25em] transition-all duration-300 flex items-center justify-center space-x-2 interactive-hover shrink-0"
            >
              <span>Subscribe</span>
              <ArrowRight size={12} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
export default Newsletter;
