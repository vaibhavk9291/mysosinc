"use client";


export function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop", alt: "Modern Clinic Interior", span: "md:col-span-2 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop", alt: "Manual Therapy Session", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=600&auto=format&fit=crop", alt: "Patient Assessment", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop", alt: "Rehabilitation Exercise", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop", alt: "Dry Needling Treatment", span: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Inside MyoSync Clinic</h2>
          <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
            Take a look inside our state-of-the-art facility, designed for your comfort and recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden group animate-fade-in ${image.span || ''}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
