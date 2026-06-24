import { Award, Microscope, Leaf, Star } from "lucide-react";

export function TrustStrip() {
  const items = [
    {
      icon: <Award size={32} className="text-brand-teal" />,
      title: "Qualified & Experienced Team",
      subtitle: "Sports therapists & massage specialists"
    },
    {
      icon: <Microscope size={32} className="text-brand-teal" />,
      title: "Holistic, Evidence-Based Care",
      subtitle: "Tailored to every individual"
    },
    {
      icon: <Leaf size={32} className="text-brand-teal" />,
      title: "No Surgery. No Drugs.",
      subtitle: "Natural recovery pathways"
    },
    {
      icon: <Star size={32} className="text-brand-teal" />,
      title: "Highly Recommended",
      subtitle: "Trusted by patients across Bristol"
    }
  ];

  return (
    <section id="about" className="bg-gray-50 py-20 border-y border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold md:text-4xl text-brand-navy tracking-tight mb-4">
            Why People Choose Us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-6 bg-brand-light p-5 rounded-full text-brand-teal group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-brand-navy text-xl mb-3">{item.title}</h3>
              <p className="text-base text-brand-text/70">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
