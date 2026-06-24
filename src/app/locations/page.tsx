"use client";

import { GlobalElements } from "@/components/GlobalElements";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function LocationsPage() {
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
      body: "NEW — massage services now available at the beautiful home of Roots Fitness in Horton.",
      link: "/rootsfitness",
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="bg-brand-light py-24 flex-1" id="locations">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
              Book Your Appointment
            </h2>
            <div className="w-20 h-1 bg-brand-teal rounded-full mx-auto mt-6 mb-8" />
            <p className="mt-4 text-brand-text/70 text-lg max-w-2xl mx-auto">
              Please select the location you'd like to book your appointment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
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
                  BOOK
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
      <GlobalElements />
    </div>
  );
}
