import { GlobalElements } from "@/components/GlobalElements";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Massage in Bristol | The Bristol Body Repair Clinic",
  description: "Professional sports massage in Bristol to relieve pain, speed recovery, and reduce injury risk. Book your session with our expert therapists today.",
};

export default function SportsMassagePage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="bg-brand-light py-20 border-b border-brand-navy/5">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Sports Massage</h1>
          <div className="w-20 h-1 bg-brand-teal rounded-full mb-8" />
        </div>
      </section>

      <section className="py-20 flex-1">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-brand-text/80 text-lg leading-relaxed space-y-6">
          <p>
            Sports massage is a specific kind of massage therapy that benefits anyone engaged in regular sports or physical activity — involving manipulation of the soft tissue layers through the body to reduce tension and imbalances caused by exercise, enhance performance and mobility, ease chronic pain, aid sports injury recovery, and prevent future injuries.
          </p>
          <p>
            Although sport and fitness might appear to be the focus of a sports massage, this kind of therapy considers much more than just your last gym session or sports injury. Sports massage techniques are designed to counteract the huge range of stresses we put our bodies through every day.
          </p>
          <p>
            For office workers, these stresses may include the way you sit or hold your shoulders as you work — resulting in muscle soreness. For people who are training, these are the stresses that come when you physically push to go longer, harder, or heavier than before.
          </p>
          <p>
            Sports massage can support an almost endless list of conditions and sports-related injuries. From your neck down to your feet, sports massage is a proven way to deliver lasting pain relief — especially when used alongside ongoing training, strengthening, and conditioning.
          </p>
          
          <div className="pt-8">
            <Link href="/locations" className="inline-block px-8 py-3.5 bg-brand-navy text-white rounded-full text-sm font-bold tracking-widest transition-colors hover:bg-brand-navy/90 shadow-lg shadow-brand-navy/30">
              BOOK YOUR SPORTS MASSAGE
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
      <GlobalElements />
    </div>
  );
}
