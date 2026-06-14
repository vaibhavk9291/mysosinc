"use client";

import { motion } from "framer-motion";
import { AppointmentScheduler } from "@/components/ui/appointment-scheduler";

export function Booking() {


  // Get dates for the current month that have availability
  const availableDates = [
    { date: 14, hasSlots: true },
    { date: 15, hasSlots: true },
    { date: 16, hasSlots: true },
    { date: 17, hasSlots: true },
    { date: 20, hasSlots: true },
    { date: 21, hasSlots: true },
    { date: 22, hasSlots: true },
    { date: 23, hasSlots: true },
    { date: 24, hasSlots: true },
    { date: 27, hasSlots: true },
    { date: 28, hasSlots: true },
    { date: 29, hasSlots: true },
    { date: 30, hasSlots: true },
  ];

  const timeSlots = [
    { time: "09:00", available: true },
    { time: "09:30", available: true },
    { time: "10:00", available: true },
    { time: "10:30", available: true },
    { time: "11:00", available: true },
    { time: "11:30", available: true },
    { time: "13:00", available: true },
    { time: "13:30", available: true },
    { time: "14:00", available: true },
    { time: "14:30", available: true },
    { time: "15:00", available: true },
    { time: "15:30", available: true },
    { time: "16:00", available: true },
    { time: "16:30", available: true },
    { time: "17:00", available: true },
    { time: "17:30", available: true },
  ];

  return (
    <section className="py-24 bg-brand-light" id="book">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-brand-teal/10 border border-brand-teal/20 text-brand-teal font-bold px-4 py-1.5 rounded-full text-sm mb-6 uppercase tracking-wider">
            Save 15% Today
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
            Book Your NMS Consultation
          </h2>
          <p className="mt-4 text-brand-text/70 text-lg max-w-2xl mx-auto">
            Select a date and time that works for you. Full consultation usually £105 — now £89.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <AppointmentScheduler
            userName="Spine, Body & Health"
            userAvatar="/favicon.ico"
            meetingTitle="Initial Consultation & Treatment"
            meetingType="In-Person at Clinic"
            duration="45 Minutes"
            timezone="Europe/London"
            availableDates={availableDates}
            timeSlots={timeSlots}
            brandName="Spine Body Health"
          />
        </motion.div>
      </div>
    </section>
  );
}
