"use client";


export function Statistics() {
  const stats = [
    { value: "5000+", label: "Patients Treated" },
    { value: "95%", label: "Patient Satisfaction" },
    { value: "10+", label: "Years Experience" },
    { value: "100+", label: "5-Star Reviews" },
  ];

  return (
    <section className="bg-brand-navy py-16 border-y border-brand-navy/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x md:divide-white/20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4 animate-fade-in"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-brand-teal font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
