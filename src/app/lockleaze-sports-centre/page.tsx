"use client";

import { GlobalElements } from "@/components/GlobalElements";
import { Footer } from "@/components/Footer";
import { AppointmentScheduler } from "@/components/ui/appointment-scheduler";

export default function LockleazePage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="bg-brand-light py-20 border-b border-brand-navy/5">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Lockleaze Sports Centre</h1>
          <div className="w-20 h-1 bg-brand-teal rounded-full mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-lg text-brand-text/80 leading-relaxed">
            The home of The Bristol Body Repair Clinic. Full injury assessment, injury treatment and massage services available.
          </p>
        </div>
      </section>

      <section className="py-24 flex-1 bg-white">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">
          <AppointmentScheduler
            userName="The Bristol Body Repair Clinic"
            userAvatar="/favicon.ico"
            meetingTitle="Treatment at Lockleaze Sports Centre"
            meetingType="In-Person at Clinic"
            duration="45 Minutes"
            timezone="Europe/London"
            availableDates={[
              { date: 14, hasSlots: true }, { date: 15, hasSlots: true }, { date: 16, hasSlots: true },
              { date: 17, hasSlots: true }, { date: 20, hasSlots: true }, { date: 21, hasSlots: true },
              { date: 22, hasSlots: true }, { date: 23, hasSlots: true }, { date: 24, hasSlots: true }
            ]}
            timeSlots={[
              { time: "09:00", available: true }, { time: "10:00", available: true },
              { time: "11:00", available: true }, { time: "13:00", available: true },
              { time: "14:00", available: true }, { time: "15:00", available: true },
              { time: "16:00", available: true }
            ]}
            brandName="Bristol Body Repair"
          />
        </div>
      </section>
      
      <Footer />
      <GlobalElements />
    </div>
  );
}
