"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";

export function Booking() {
  const locations = [
    {
      title: "Lockleaze Sports Centre",
      body: "The home of The Bristol Body Repair Clinic. Full injury assessment, injury treatment and massage services available.",
      link: "/lockleaze-sports-centre",
    },
    {
      title: "Desklodge, Bristol",
      body: "Massage services available across both Desklodge sites in Bristol.",
      link: "/desklodge",
    },
    {
      title: "Roots Fitness, Horton",
      body: "Massage services now available at the beautiful home of Roots Fitness in Horton.",
      link: "/rootsfitness",
    },
  ];

  return (
    <section className="py-24 bg-brand-light" id="locations">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className="text-center mb-16 animate-fade-in"
        >
          <div className="inline-block bg-brand-teal/10 border border-brand-teal/20 text-brand-teal font-bold px-4 py-1.5 rounded-full text-sm mb-6 uppercase tracking-wider">
            Start Your Recovery
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
            Book Your Appointment
          </h2>
          <p className="mt-4 text-brand-text/70 text-lg max-w-2xl mx-auto">
            Select a location that works for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in"
            >
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-teal mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">{location.title}</h3>
              <p className="text-brand-text/70 mb-8 flex-1">{location.body}</p>
              <Link 
                href={location.link}
                className="w-full inline-block px-8 py-3.5 bg-brand-navy text-white rounded-full font-bold tracking-widest transition-colors hover:bg-brand-navy/90 shadow-sm"
              >
                BOOK HERE
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
