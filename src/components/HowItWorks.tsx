"use client";

import { CalendarPlus, Microscope, Leaf } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <CalendarPlus size={40} className="text-brand-teal" />,
      title: "Book Your Appointment",
      desc: "Select a location that works for you and book your first session. We'll take your full medical history and health goals from the start."
    },
    {
      icon: <Microscope size={40} className="text-brand-teal" />,
      title: "In-Depth Assessment",
      desc: "We conduct a thorough injury assessment and diagnostics — finding the root cause, not just the surface symptom."
    },
    {
      icon: <Leaf size={40} className="text-brand-teal" />,
      title: "Your Personalised Treatment Plan",
      desc: "Hands-on manual treatment combined with a bespoke rehabilitation programme to ensure lasting, measurable progress between sessions."
    }
  ];

  return (
    <section id="treatment" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Your Path to Functioning Optimally</h2>
          <p className="text-lg text-brand-text/70">A clear, personalised process — no guesswork.</p>
        </div>

        <div className="relative flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-brand-light border-t-2 border-dashed border-gray-200 z-0" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center lg:w-1/3 px-4 animate-fade-in"
            >
              {/* Connecting arrow for mobile */}
              {index > 0 && (
                <div className="lg:hidden w-px h-8 bg-gray-200 mb-4 border-l-2 border-dashed border-gray-200 relative">
                   <div className="absolute -bottom-2 -left-1.5 w-3 h-3 border-r-2 border-b-2 border-gray-300 rotate-45" />
                </div>
              )}
              
              <div className="w-24 h-24 bg-brand-light rounded-full flex items-center justify-center text-4xl shadow-sm border border-gray-100 mb-6 relative">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white shadow-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
              <p className="text-brand-text/70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
