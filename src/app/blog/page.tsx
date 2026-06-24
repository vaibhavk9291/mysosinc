import { GlobalElements } from "@/components/GlobalElements";
import { Footer } from "@/components/Footer";

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="bg-brand-light py-20 border-b border-brand-navy/5">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Blog</h1>
          <div className="w-20 h-1 bg-brand-teal rounded-full mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-lg text-brand-text/80 leading-relaxed">
            Read the latest news, tips, and insights from The Bristol Body Repair Clinic team.
          </p>
        </div>
      </section>

      <section className="py-24 flex-1 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h3 className="text-2xl font-bold text-brand-navy">Coming Soon</h3>
          <p className="text-brand-text/70 mt-4">We are currently working on our first blog posts. Check back later!</p>
        </div>
      </section>
      
      <Footer />
      <GlobalElements />
    </div>
  );
}
