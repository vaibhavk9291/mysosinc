import { GlobalElements } from "@/components/GlobalElements";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physiotherapy & Injury Therapy in Bristol | Expert Care",
  description: "Effective physiotherapy and injury therapy in Bristol for pain relief, rehabilitation, and long-term recovery. Book your appointment today.",
};

export default function InjuryTherapyPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="bg-brand-light py-20 border-b border-brand-navy/5">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Injury Therapy</h1>
          <div className="w-20 h-1 bg-brand-teal rounded-full mb-8" />
        </div>
      </section>

      <section className="py-20 flex-1">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-brand-text/80 text-lg leading-relaxed space-y-6">
          <p>
            At The Bristol Body Repair Clinic, our aim is to enable each and every body that we work with to function optimally and without pain: pain is not normal! Whether that be at a desk, on a sports field, in water, or just in day to day life.
          </p>
          <p>
            Our injury therapy sessions are tailored to each individual — from those with a chronic painful condition to a sports-related injury. We specialise in comprehensive injury assessment and tailored treatment, effective rehabilitation, and maintenance programmes of sports massage, making us an excellent all-round choice of injury clinic in Bristol.
          </p>
          <p>
            Injury therapy is a powerful tool for healing and improving physical wellbeing. Our experienced injury therapists are dedicated to helping you recover from injury, manage pain, and facilitate your journey to functioning optimally and without pain.
          </p>
          
          <h3 className="text-2xl font-bold text-brand-navy mt-10 mb-4">What to expect from your first appointment:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-brand-text/80">
            <li>A detailed conversation about your medical history</li>
            <li>In-depth assessment and diagnostics</li>
            <li>Hands-on manual treatment</li>
            <li>A range of different treatment options including: cupping, soft tissue massage, and joint and soft tissue mobilisation</li>
            <li>A rehabilitation plan to ensure we continue to progress between treatment sessions</li>
            <li>Clear guidance and support throughout your treatment and rehabilitation</li>
          </ul>

          <div className="bg-brand-light/50 p-6 rounded-xl border border-gray-100 my-8">
            <p className="font-medium text-brand-navy text-lg italic">
              "Whether you're looking to overcome an injury or optimise your athletic performance, we have the expertise to guide you. If you are in pain, or your injury won't settle — address it now. Remember: Pain is not normal!"
            </p>
          </div>

          <div className="pt-4">
            <Link href="/locations" className="inline-block px-8 py-3.5 bg-brand-navy text-white rounded-full text-sm font-bold tracking-widest transition-colors hover:bg-brand-navy/90 shadow-lg shadow-brand-navy/30">
              BOOK INJURY THERAPY
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
      <GlobalElements />
    </div>
  );
}
