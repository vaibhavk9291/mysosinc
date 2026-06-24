import { GlobalElements } from "@/components/GlobalElements";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Team | The Bristol Body Rep",
  description: "The team at The Bristol Body Repair Clinic is small but perfectly formed. We are all qualified and highly experienced in providing the highest quality of care in a clinical setting. The team consists of a physiotherapist, sports therapist and massage therapists who are able to provide injury diagnosis, massage and rehabilitation sessions.",
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Stacey Androlah",
      role: "Clinic Owner & Massage Therapist",
      email: "Stacey@thebristolbodyrepairclinic.co.uk",
      image: "https://images.unsplash.com/photo-1594824432258-f938d8ac4448?q=80&w=800&auto=format&fit=crop",
      bio: [
        "Hello! Welcome to The Bristol Body Repair Clinic. I am Stacey, the founder of the clinic and sports and remedial massage therapist.",
        "I passionately believe in the benefits of sports and remedial massage to enable you to function optimally and pain free (pain is not normal!!) whether that be on a sports field, at a desk, in water or just in day to day life. I am experienced in treating a range of clients (sporty and not).",
        "Following my degree in Sport & Biomedical Science, I worked as a personal trainer before moving into the world of sports development. I qualified as a Sports & Remedial massage therapist in 2005 and started to build a private client base alongside my sports development work. I am now working full time as a therapist; building The Bristol Body Repair Clinic alongside my work with The Thornbury Clinic.",
        "As a mum to two active boys, a keen hockey player and general sports nut for many years, I understand the importance of looking after and maintaining your body in order for it to function optimally for as long as possible."
      ]
    },
    {
      name: "Mackenzie Davies",
      role: "Injury & Massage Therapist",
      email: "Mackenzie@thebristolbodyrepairclinic.co.uk",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
      bio: [
        "Hi, I'm Mackenzie, a sports therapist here at The Bristol Body Repair Clinic. I graduated in Sports Therapy from Bournemouth University in 2025 and have built my experience through placements in sports teams — specifically rugby union and league, including Bournemouth Lions RFC and Bristol All Golds rugby league.",
        "I have treated people through massage, pitch-side first aid and rehabilitation support, and have a big passion for sports having played rugby at different levels. I'm really passionate about helping people stay active and feeling their best, whether you play sports regularly or just want to move more comfortably day to day. I'm here to help you take care of your body so you can keep doing the things you love for as long as possible."
      ]
    },
    {
      name: "Harvey Maggs",
      role: "Injury & Massage Therapist",
      email: "Harvey@thebristolbodyrepairclinic.co.uk",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
      bio: [
        "Hi, I'm Harvey, the Injury Therapist here at The Bristol Body Repair Clinic. I graduated in Sports Therapy from the University of Worcester in 2022 and have since been building and developing my experience across a range of environments.",
        "I've had the privilege of working with football and netball teams and academies including Kidderminster Harriers and Worcester Severn Stars. I've also supported events like the London Marathon and assisted touring teams like the USA Women's Rugby Squad. Since graduating, I've worked in both rugby and clinic settings, treating people of different ages and backgrounds through massage, pitch-side first aid and rehabilitation.",
        "I have a big passion for sport, having played cricket and rugby for many years at different levels. I've recently started training in Brazilian Jiu-Jitsu, which has been a fantastic new challenge."
      ]
    },
    {
      name: "Abdul Daud",
      role: "Injury & Massage Therapist",
      email: "Abdul@thebristolbodyrepairclinic.co.uk",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
      bio: [
        "Hi, I'm Abdul, an injury therapist here at The Bristol Body Repair Clinic. I hold a degree in Sports Rehabilitation, gained through placements in sports teams and private musculoskeletal clinics, which helped me develop strong clinical skills working with a wide range of clients.",
        "I have worked with sports teams providing injury support, massage and rehabilitation for athletes, as well as treating non-sport clients in clinic settings. I have experience managing common muscle and joint problems and supporting people with both short-term pain and longer-term injuries.",
        "I regularly provide sports massage focusing on tight muscles and latent trigger points to reduce pain, improve movement and support recovery. I also design and deliver rehabilitation programmes across all stages of recovery — from early-stage pain reduction and mobility work, through to mid-stage strength and stability building, and late-stage return to sport or full activity.",
        "I am passionate about helping people stay functional and active. I have seen how much the right support and treatment can make a real difference in rehabilitation and everyday life."
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="bg-brand-light py-20 border-b border-brand-navy/5">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Meet the Team</h1>
          <div className="w-20 h-1 bg-brand-teal rounded-full mb-8 mx-auto" />
          <p className="max-w-3xl mx-auto text-lg text-brand-text/80 leading-relaxed">
            The team at The Bristol Body Repair Clinic is small but perfectly formed. We are all qualified and highly experienced in providing the highest quality of care in a clinical setting. The team consists of injury therapists, pitchside sports therapists and massage therapists who are able to provide injury diagnosis, massage and rehabilitation sessions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white flex-1">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <div className="flex flex-col gap-16">
            {teamMembers.map((member, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-start`}>
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="w-full md:w-2/3 flex flex-col pt-4">
                  <h2 className="text-3xl font-bold text-brand-navy mb-1">{member.name}</h2>
                  <p className="text-brand-teal font-bold uppercase tracking-widest text-sm mb-2">{member.role}</p>
                  <a href={`mailto:${member.email}`} className="text-brand-text/60 hover:text-brand-teal transition-colors mb-6 text-sm">{member.email}</a>
                  
                  <div className="space-y-4 text-brand-text/80 leading-relaxed">
                    {member.bio.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
      <GlobalElements />
    </div>
  );
}
