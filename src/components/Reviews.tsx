"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "I cannot recommend Stacey highly enough! My back and neck feel so much better as a result of her treatment. Her knowledge and expertise instantly puts you at ease. I feel like a different person when I leave after an hour's treatment.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah M.",
    role: "Verified Patient",
  },
  {
    text: "I arranged an appointment to have a massage with Stacey. It was wonderful! I'm starting to get back into running and I work from home, so my legs and shoulders needed attention. Thank you Stacey, I feel brand new again.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "James T.",
    role: "Verified Patient",
  },
  {
    text: "Cannot recommend Stacey enough. Professional, friendly and ultimately gets right to the nub of the issue of my aches and pains quickly, leaving me feeling so much better by the time I leave. If you've got a sporting/training niggle, give her a call.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Rachel K.",
    role: "Verified Patient",
  },
  {
    text: "I've now made a sports massage with Stacey part of my monthly routine. Very knowledgeable and friendly, she put me right at ease, is helping solve my knee pain and is lovely to talk to. I can definitely recommend!",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "David P.",
    role: "Verified Patient",
  },
  {
    text: "Brilliant experience from start to finish. The team really understand your body and what it needs. Finally found a clinic that addresses the root of the problem.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Emma W.",
    role: "Verified Patient",
  },
  {
    text: "The best massage clinic in Bristol by far. After a few sessions, my chronic lower back tension has completely disappeared. The team is fantastic.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Michael R.",
    role: "Verified Patient",
  },
  {
    text: "Friendly, welcoming, and incredibly knowledgeable. The holistic approach makes so much more sense than just resting and hoping for the best.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Sophie L.",
    role: "Verified Patient",
  },
  {
    text: "A truly premium experience from the moment you walk in. Worth every penny for the quality of care and long-term results.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Thomas B.",
    role: "Verified Patient",
  },
  {
    text: "I was skeptical at first, but their evidence-backed approach works wonders. The clinical team is fantastic and they explain everything clearly.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Olivia H.",
    role: "Verified Patient",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Reviews() {
  return (
    <section id="testimonials" className="bg-brand-light py-24 relative overflow-hidden">
      <div className="container z-10 mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center max-w-[600px] mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-white border border-brand-navy/10 text-brand-navy font-semibold px-4 py-1.5 rounded-full text-sm shadow-sm flex items-center gap-2">
              <Star className="text-yellow-400 fill-yellow-400" size={14} />
              Verified Patient Reviews
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy mt-2">
            What Our Patients Say
          </h2>
          <p className="mt-5 text-lg text-brand-text/70">
            Verified reviews from patients who reclaimed their lives.
          </p>
        </motion.div>

        <div className="relative flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] h-[740px] max-h-[740px] overflow-hidden isolate">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
      </div>
    </section>
  );
}
