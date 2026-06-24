"use client";


export function Team() {
  const teamMembers = [
    {
      name: "Stacey Androlah",
      role: "Clinic Owner & Massage Therapist",
      image: "https://images.unsplash.com/photo-1594824432258-f938d8ac4448?q=80&w=800&auto=format&fit=crop",
      bio: "Founder of the clinic and sports and remedial massage therapist, passionate about enabling you to function optimally and pain-free.",
      link: "/about"
    },
    {
      name: "Mackenzie Davies",
      role: "Injury & Massage Therapist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
      bio: "Sports therapy graduate with experience across rugby union and league, helping people stay active and feel their best.",
      link: "/about"
    },
    {
      name: "Harvey Maggs",
      role: "Injury & Massage Therapist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
      bio: "Experienced across football, netball, and rugby environments, providing massage, pitch-side first aid and rehabilitation.",
      link: "/about"
    },
    {
      name: "Abdul Daud",
      role: "Injury & Massage Therapist",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
      bio: "Specialises in sports massage, tight muscles, latent trigger points, and full-stage rehabilitation programmes.",
      link: "/about"
    }
  ];

  return (
    <section id="team" className="py-24 bg-brand-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Meet The Team</h2>
          <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
            The team at The Bristol Body Repair Clinic is small but perfectly formed. We are all qualified and highly experienced in providing the highest quality of care in a clinical setting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-navy/5 group animate-fade-in"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8 text-center md:text-left flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-brand-navy mb-1">{member.name}</h3>
                <p className="text-brand-teal font-semibold text-sm uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-brand-text/70 leading-relaxed flex-1 mb-4">{member.bio}</p>
                <a href={member.link} className="text-brand-teal font-semibold hover:underline mt-auto">Read full bio &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
