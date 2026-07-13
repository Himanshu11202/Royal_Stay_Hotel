"use client";

import React, { useState } from "react";
import Image from "@/components/luxury-image";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Send, MessageCircle, Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is the check-in and check-out timing?",
    answer: "Our standard check-in time is 2:00 PM and check-out is at 12:00 PM noon. Early check-in or late check-out is subject to room availability.",
  },
  {
    question: "Do you offer private lake boat charters?",
    answer: "Yes, we operate private sunset boat charters directly from our palace jetty. Guests can book excursions through our dedicated butler corps.",
  },
  {
    question: "Can you organize traditional weddings?",
    answer: "We specialize in grand destination weddings, hosting Haldi, Mehendi, Sangeet, and reception banquets at our Lakeside Lawns and Ballrooms.",
  },
  {
    question: "Is there private parking available on-site?",
    answer: "Yes, we provide secure, complimentary private valet parking for all our overnight suite guests and event invitees.",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.msg) {
      const subject = encodeURIComponent(`Contact Inquiry - ${formState.name}`);
      const body = encodeURIComponent(
        `Hello ${siteConfig.hotelName},\n\nI have a contact inquiry.\n\nName: ${formState.name}\nEmail: ${formState.email}\nMessage: ${formState.msg}\n\nPlease contact me regarding this request.`
      );
      window.location.href = `mailto:${siteConfig.emailAddress}?subject=${subject}&body=${body}`;
      
      setSubmitted(true);
      setFormState({ name: "", email: "", msg: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-luxury-black text-white pt-24 pb-20">
      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <Image
          src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1600"
          alt="Contact Hero"
          fill
          priority
          className="object-cover opacity-30 scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/80" />
        <div className="relative z-10 text-center px-6">
          <span className="font-sans text-[8px] tracking-[0.6em] text-primary uppercase block mb-3 animate-pulse">
            REGAL ENQUIRIES
          </span>
          <h1 className="font-serif text-4xl md:text-7xl uppercase font-light tracking-wide text-white">
            {"Connect With Us"}
          </h1>
          <div className="w-16 h-[1px] bg-primary/40 mx-auto mt-6" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          
          {/* Coordinates column */}
          <div className="space-y-10">
            <div>
              <span className="font-sans text-[9px] tracking-[0.3em] text-primary uppercase block mb-1">
                CONTACT DETAILS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl uppercase font-light text-white tracking-wide">
                {"Palace Coordinates"}
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 border-b border-white/5 pb-6">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-sans text-[10px] tracking-wider text-white/40 uppercase">Address</p>
                  <p className="font-sans text-sm text-white/80 font-light mt-1">
                    {siteConfig.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 border-b border-white/5 pb-6">
                <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-sans text-[10px] tracking-wider text-white/40 uppercase">Reservations & Enquiries</p>
                  <a href={`tel:${siteConfig.phoneNumber}`} className="font-sans text-sm text-primary hover:text-white transition-colors block mt-1">
                    {siteConfig.phoneNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 border-b border-white/5 pb-6">
                <MessageCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-sans text-[10px] tracking-wider text-white/40 uppercase">WhatsApp Concierge</p>
                  <a
                    href={`https://wa.me/${siteConfig.whatsAppNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-primary hover:text-white transition-colors block mt-1"
                  >
                    Click to Chat with Butler
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-sans text-[10px] tracking-wider text-white/40 uppercase">Email Coordinates</p>
                  <a href={`mailto:${siteConfig.emailAddress}`} className="font-sans text-sm text-primary hover:text-white transition-colors block mt-1">
                    {siteConfig.emailAddress}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="bg-luxury-black/30 border border-white/5 p-8 md:p-12 rounded-sm shadow-xl">
            <h3 className="font-serif text-2xl text-white uppercase font-light tracking-wide mb-6">Send an Inquiry</h3>
            
            {submitted ? (
              <div className="p-6 bg-primary/10 border border-primary/20 text-primary text-xs font-sans uppercase tracking-widest text-center rounded-sm">
                Thank you. Our royal desk will contact you within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-sans tracking-widest text-white/40 uppercase">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-luxury-black/50 border border-white/10 px-4 py-3 text-sm text-white focus:border-primary outline-none transition-colors duration-300 rounded-none font-sans"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-sans tracking-widest text-white/40 uppercase">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-luxury-black/50 border border-white/10 px-4 py-3 text-sm text-white focus:border-primary outline-none transition-colors duration-300 rounded-none font-sans"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-sans tracking-widest text-white/40 uppercase">Inquiry details</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.msg}
                    onChange={e => setFormState(prev => ({ ...prev, msg: e.target.value }))}
                    className="w-full bg-luxury-black/50 border border-white/10 px-4 py-3 text-sm text-white focus:border-primary outline-none transition-colors duration-300 rounded-none font-sans resize-none"
                    placeholder="Describe your event or booking enquiry"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-luxury-black text-xs font-sans font-semibold uppercase tracking-[0.2em] flex items-center justify-center space-x-2 hover:bg-white hover:text-black transition-colors duration-300"
                >
                  <span>Submit Inquiry</span>
                  <Send size={12} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Custom styled Maps placeholder */}
        <div className="relative w-full h-[350px] border border-white/5 bg-luxury-black/60 flex flex-col items-center justify-center text-center p-6 shadow-xl mb-24">
          <MapPin size={36} className="text-primary mb-3 animate-bounce" />
          <h3 className="font-serif text-xl uppercase font-light text-white mb-2">Location Map Grid</h3>
          <p className="font-sans text-xs text-luxury-gray max-w-sm font-light leading-relaxed">
            Restored lakeside gates of Pichola. Google Maps API coordinates will render interactive markers on this sector.
          </p>
          {/* Subtle grid lines background overlay */}
          <div className="absolute inset-0 border border-primary/5 pointer-events-none grid grid-cols-6 grid-rows-3 opacity-20">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="border-t border-l border-primary/10" />
            ))}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto bg-luxury-black border border-white/5 p-8 md:p-12 rounded-sm shadow-xl">
          <div className="text-center mb-10">
            <span className="font-sans text-[9px] tracking-[0.3em] text-primary uppercase font-semibold block mb-1">
              HELP & FAQS
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-white uppercase font-light tracking-wider">Frequently Asked Questions</h3>
            <div className="w-12 h-[1px] bg-primary/20 mx-auto mt-3" />
          </div>

          <div className="divide-y divide-white/5 space-y-4">
            {faqData.map((faq, idx) => {
              const isOpen = openFAQ === idx;
              return (
                <div key={idx} className="pt-4 first:pt-0">
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left py-2 font-serif text-base text-white hover:text-primary transition-colors focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <Minus size={16} className="text-primary" /> : <Plus size={16} className="text-primary" />}
                  </button>
                  {isOpen && (
                    <div className="pb-4 pt-2 text-xs font-sans text-luxury-gray font-light leading-relaxed animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
