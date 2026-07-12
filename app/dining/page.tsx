"use client";

import React, { useState } from "react";
import Image from "@/components/luxury-image";
import { useBooking } from "@/hooks/use-booking";
import { Utensils, Award, Sparkles, Check, Clock } from "lucide-react";

interface MenuItem {
  name: string;
  price: string;
  desc: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    title: "Royal Appeteasers",
    items: [
      { name: "Saffron Paneer Tikka", price: "₹950", desc: "House-made organic paneer infused with Kashmiri saffron and grilled in clay ovens." },
      { name: "Rajputana Murgh Souffle", price: "₹1,250", desc: "Spiced chicken mince slow-baked with heritage dry herbs and topped with silver leaf." },
      { name: "Pichola Crispy Lotus Root", price: "₹850", desc: "Shallow-fried crispy lotus roots tossed in local forest honey and sweet-tangy dry spices." },
    ],
  },
  {
    title: "Imperial Mains",
    items: [
      { name: "Lal Maas (Heritage Lamb Curry)", price: "₹2,100", desc: "Tender local mutton slow-cooked in a fiery mathania chili broth for 8 hours." },
      { name: "Shahi Kaju Kishmish Kofta", price: "₹1,650", desc: "Dumplings of cashew paste and raisin cream served in a velvety royal cardamom sauce." },
      { name: "Imperial Dal Baati Churma", price: "₹1,800", desc: "Wood-fired wheat balls served with five-lentil dal and sweet roasted wheat churma." },
    ],
  },
  {
    title: "Palace Desserts",
    items: [
      { name: "Gold-Leaf Kulfi Falooda", price: "₹750", desc: "Condensed milk ice cream infused with pistachios and topped with pure edible 24k gold leaf." },
      { name: "Saffron Malpua Rabri", price: "₹650", desc: "Crispy sweet pancakes dipped in cardamom sugar syrup, topped with thick saffron cream." },
    ],
  },
];

export default function DiningPage() {
  const { openBooking } = useBooking();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-luxury-black text-white pt-24 pb-20">
      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <Image
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1600"
          alt="Dining Hero"
          fill
          priority
          className="object-cover opacity-30 scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/80" />
        <div className="relative z-10 text-center px-6">
          <span className="font-sans text-[8px] tracking-[0.6em] text-primary uppercase block mb-3 animate-pulse">
            IMPERIAL CULINARY ARTS
          </span>
          <h1 className="font-serif text-4xl md:text-7xl uppercase font-light tracking-wide text-white">
            {"Dining & Gastronomy"}
          </h1>
          <div className="w-16 h-[1px] bg-primary/40 mx-auto mt-6" />
        </div>
      </div>

      {/* Venues alternating grids */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-24 space-y-28">
        
        {/* Salon 1 */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative h-[320px] md:h-[450px] overflow-hidden border border-white/5 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200"
              alt="Saffron Salon"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
            <div>
              <span className="font-sans text-[9px] tracking-[0.3em] text-primary uppercase font-semibold block mb-1">
                FINE DINING
              </span>
              <h2 className="font-serif text-3xl md:text-5xl uppercase font-light text-white tracking-wide">
                {"The Saffron Salon"}
              </h2>
            </div>
            <p className="font-sans text-sm font-light text-luxury-gray leading-relaxed">
              Experience the pinnacle of culinary history in a candle-lit dining room flanked by hand-painted gold arches. Serving royal Rajasthani thalis and curated signature recipes from the royal Mewar archives.
            </p>
            <div className="flex items-center space-x-6 text-xs text-white/70 font-sans border-t border-b border-white/5 py-4">
              <span className="flex items-center space-x-1.5">
                <Clock size={14} className="text-primary/70" />
                <span>Dinner: 7:00 PM – 11:30 PM</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Utensils size={14} className="text-primary/70" />
                <span>Formal Attire</span>
              </span>
            </div>
            <div>
              <button
                onClick={openBooking}
                className="px-10 py-4 bg-primary text-luxury-black text-xs font-sans font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-300 interactive-hover"
              >
                Reserve Table
              </button>
            </div>
          </div>
        </div>

        {/* Salon 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-stretch gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative h-[320px] md:h-[450px] overflow-hidden border border-white/5 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=1200"
              alt="Rooftop Restaurant"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
            <div>
              <span className="font-sans text-[9px] tracking-[0.3em] text-primary uppercase font-semibold block mb-1">
                OUTDOOR & AL FRESCO
              </span>
              <h2 className="font-serif text-3xl md:text-5xl uppercase font-light text-white tracking-wide">
                {"The Mewar Vista Rooftop"}
              </h2>
            </div>
            <p className="font-sans text-sm font-light text-luxury-gray leading-relaxed">
              Perched high above the shimmer of the lake, Mewar Vista offers custom cocktails and wood-fired tandoor specialities. Watch the sunset illuminate the hills while dining under a canopy of stars.
            </p>
            <div className="flex items-center space-x-6 text-xs text-white/70 font-sans border-t border-b border-white/5 py-4">
              <span className="flex items-center space-x-1.5">
                <Clock size={14} className="text-primary/70" />
                <span>Hours: 5:30 PM – Midnight</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Award size={14} className="text-primary/70" />
                <span>Top 50 Rooftops</span>
              </span>
            </div>
            <div>
              <button
                onClick={openBooking}
                className="px-10 py-4 bg-primary text-luxury-black text-xs font-sans font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-300 interactive-hover"
              >
                Reserve Table
              </button>
            </div>
          </div>
        </div>

        {/* Menu Tab categories section */}
        <div className="bg-luxury-black border border-white/5 p-8 md:p-16 rounded-sm shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-sans text-[9px] tracking-[0.3em] text-primary uppercase font-semibold block mb-1">
              CURATED SELECTIONS
            </span>
            <h2 className="font-serif text-3xl md:text-5xl uppercase font-light text-white tracking-wide">
              {"Tasting Menu Preview"}
            </h2>
            <div className="w-12 h-[1px] bg-primary/40 mx-auto mt-4" />
          </div>

          {/* Navigation tab links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 border-b border-white/5 pb-4 mb-8">
            {menuCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`font-sans text-xs uppercase tracking-[0.2em] pb-2 transition-colors duration-300 ${
                  activeTab === idx ? "text-primary border-b border-primary" : "text-white/40 hover:text-white"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Tab content panel */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 transition-all duration-300">
            {menuCategories[activeTab].items.map((item, idx) => (
              <div key={idx} className="space-y-2 border-b border-white/5 pb-6 last:border-0 md:last:border-b">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-serif text-lg text-white font-medium">{item.name}</h4>
                  <span className="w-6 h-[1px] bg-white/10 flex-grow mx-4 hidden sm:block" />
                  <span className="font-sans text-xs text-primary font-semibold">{item.price}</span>
                </div>
                <p className="font-sans text-xs font-light text-luxury-gray leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Master Chef Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 bg-luxury-black/40 p-8 md:p-12 border border-white/5">
          <div className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden relative border-2 border-primary/20 flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600"
              alt="Grand Chef Devendra"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <span className="font-sans text-[9px] tracking-[0.35em] text-primary uppercase font-bold flex items-center">
              <Sparkles size={10} className="mr-1.5 text-primary" />
              MASTER OF CUISINE
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-white uppercase font-light">Chef Devendra Singh</h3>
            <p className="font-sans text-xs md:text-sm text-luxury-gray font-light italic leading-relaxed">
              {"\"Traditional Indian royal cuisine is not about spices—it is about timing, clay and copper heat dynamics, and respect for natural mountain honey, saffron fields, and heritage chili crops. We cook exactly how the chefs inside these imperial walls did over a century ago.\""}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
