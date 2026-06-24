import { GlobalElements } from "@/components/GlobalElements";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Bristol Body Repair Clinic | Remedial Massage in Bristol | Pain & Tension Relief",
  description: "Restore movement and ease muscular pain with expert remedial massage in Bristol. Tailored treatments to help you feel your best.",
};

export default function RemedialMassagePage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="bg-brand-light py-20 border-b border-brand-navy/5">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Remedial Massage</h1>
          <div className="w-20 h-1 bg-brand-teal rounded-full mb-8" />
        </div>
      </section>

      <section className="py-20 flex-1">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-brand-text/80 text-lg leading-relaxed space-y-6">
          <p>
            Remedial Massage, also known as Therapeutic Massage, is the therapy to go for if you are looking for a focused massage treatment that eases specific aches or pains, restrictions or dysfunction. These can occur due to your work arrangements, hobbies, stress, accident, injury, illness or disease.
          </p>
          <p>
            Remedial Massage can also release tight muscles that create nerve issues due to that tightness pressing on a nerve — causing heaviness, pins & needles, tingling, pain, numbness or lack of sensation over the length of the relevant nerve pathway.
          </p>
          <p>
            In essence, a large range of techniques used in Remedial Massage are identical to those used in sports massage. However, "Sports Massage" as a term is often confusing to people seeking treatment, as it sounds only relevant to people who play sport.
          </p>
          <p>
            The term Remedial Massage came about in some ways to address this confusion. Think of it as a Sports Massage for the non-sporty. All techniques and advice will be based on your specific situation, however your issues came about. If you are non-sporty or your issue is not related to sport or exercise, feel free to book a Remedial Massage and know you are in the right hands to get you back to functioning optimally.
          </p>
          
          <div className="pt-8">
            <Link href="/locations" className="inline-block px-8 py-3.5 bg-brand-navy text-white rounded-full text-sm font-bold tracking-widest transition-colors hover:bg-brand-navy/90 shadow-lg shadow-brand-navy/30">
              BOOK REMEDIAL MASSAGE
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
      <GlobalElements />
    </div>
  );
}
