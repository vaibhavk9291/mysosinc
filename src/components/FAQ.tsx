"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const faqs = [
    { q: "Does the treatment hurt?", a: "We always work within your comfort levels. Some techniques like deep tissue massage or trigger point work may feel firm, but should never be unbearably painful. We regularly check in with you throughout every session." },
    { q: "Do I need to play sport to come to you?", a: "Absolutely not! We treat everyone — from professional athletes to office workers, retirees to fibromyalgia sufferers. If you're in pain or want to move better, we can help." },
    { q: "Is your treatment evidence-based?", a: "Yes. All our techniques and rehabilitation programmes are grounded in current clinical evidence. Our therapists hold recognised qualifications and continue their professional development." },
    { q: "Are your staff qualified?", a: "Yes. Our team holds degrees in Sports Therapy, Sports Rehabilitation, and Sport & Biomedical Science from accredited UK universities, alongside ongoing CPD." },
    { q: "How much does it cost?", a: "Pricing varies by session type and location. Please visit the relevant location booking page for current pricing, or get in touch directly." },
    { q: "How many sessions will I need?", a: "This depends on the nature and history of your complaint. We'll give you an honest assessment at your first appointment and recommend a realistic treatment plan." },
    { q: "What conditions do you treat?", a: "Back pain, neck pain, shoulder pain, knee pain, sports injuries, muscle tightness, sciatica, postural issues, repetitive strain, fibromyalgia and more — if you're unsure, just ask." },
    { q: "Can I bring someone with me?", a: "Yes, you are very welcome to bring a companion to your appointment." },
    { q: "What is Remedial Massage?", a: "Remedial massage is a sports massage for the non-sporty. The same clinical techniques are applied to anyone suffering from aches, pains, or restricted movement, regardless of whether the cause is sports-related or not." },
    { q: "What should I expect from my first appointment?", a: "A detailed discussion of your medical history, an in-depth assessment, hands-on manual treatment, and a clear rehabilitation plan with guidance and support throughout." }
  ];

  const mid = Math.ceil(faqs.length / 2);
  const leftCol = faqs.slice(0, mid);
  const rightCol = faqs.slice(mid);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className="text-center mb-16 animate-fade-in"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Got Questions? We Have Answers.</h2>
          <p className="text-lg text-brand-text/70">Everything you need to know before booking.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col gap-4">
            {leftCol.map((faq, i) => <FAQItem key={`left-${i}`} {...faq} />)}
          </div>
          <div className="flex flex-col gap-4">
            {rightCol.map((faq, i) => <FAQItem key={`right-${i}`} {...faq} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-brand-light/50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-brand-navy pr-4">{q}</span>
        <ChevronDown 
          size={20} 
          className={`text-brand-teal transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-5 pt-0 text-brand-text/80 bg-white">
              <div className="pt-2 border-t border-gray-100 leading-relaxed">
                {a}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
