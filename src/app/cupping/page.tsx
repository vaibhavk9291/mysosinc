import { GlobalElements } from "@/components/GlobalElements";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cupping Therapy in Bristol | The Bristol Body Repair Clinic",
  description: "Traditional cupping therapy in Bristol to improve circulation, reduce muscle tension, and aid recovery. Book your cupping session today.",
};

export default function CuppingPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="bg-brand-light py-20 border-b border-brand-navy/5">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Cupping</h1>
          <div className="w-20 h-1 bg-brand-teal rounded-full mb-8" />
        </div>
      </section>

      <section className="py-20 flex-1">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-brand-text/80 text-lg leading-relaxed space-y-6">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">What is Cupping?</h2>
          <p>
            Cupping therapy is a form of holistic, traditional medicine used for centuries to promote health and wellbeing. Cups are placed on the skin to create a vacuum or suction, which helps to pull the skin and underlying tissues upwards — stimulating blood flow, releasing tension, and promoting healing. This practice has its roots in ancient Chinese, Egyptian, and Middle Eastern medicine, and is still widely used today as a natural therapeutic treatment.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">Health Benefits of Cupping Therapy:</h2>
          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li><strong>Relief from Muscle Pain & Tension:</strong> Cupping can effectively treat sore muscles and alleviate chronic pain by enhancing blood circulation and breaking down knots, adhesions, and tight muscles.</li>
            <li><strong>Boosted Blood Circulation:</strong> The suction process stimulates circulation, promoting oxygen and nutrient delivery to tissues and helping remove waste products and inflammation.</li>
            <li><strong>Detoxification:</strong> By encouraging lymphatic drainage and promoting removal of toxins, cupping supports the body's natural detoxification process.</li>
            <li><strong>Stress Relief & Relaxation:</strong> Cupping therapy helps reduce stress by relaxing the nervous system and easing tension in the body.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">What to Expect During a Cupping Session:</h2>
          <ol className="list-decimal pl-6 space-y-3 mb-6">
            <li><strong>Consultation:</strong> A brief discussion with your therapist about your health concerns and goals.</li>
            <li><strong>Massage:</strong> The treatment typically begins with massage to increase circulation and begin breaking down tension.</li>
            <li><strong>Placement of Cups:</strong> Cups are placed on specific areas — typically the back, shoulders, or legs — creating a gentle pulling sensation.</li>
            <li><strong>Treatment variations:</strong> Cups may be left static on the body, used to massage by sliding across the skin, or applied while mobilising the surrounding joint — depending on the area and treatment goal.</li>
            <li><strong>Post-Treatment:</strong> You may notice redness or marks where the cups were placed. These are completely normal and will fade within a few hours to a few days.</li>
          </ol>
          
          <div className="pt-8">
            <Link href="/locations" className="inline-block px-8 py-3.5 bg-brand-navy text-white rounded-full text-sm font-bold tracking-widest transition-colors hover:bg-brand-navy/90 shadow-lg shadow-brand-navy/30">
              BOOK CUPPING THERAPY
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
      <GlobalElements />
    </div>
  );
}
