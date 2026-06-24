import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            <div className="text-2xl font-bold text-white tracking-tight">
              The Bristol <span className="text-brand-teal">Body Repair</span> Clinic
            </div>
            <p className="text-white/70 leading-relaxed">
              The Bristol Body Repair Clinic — expert sports massage, injury therapy, and remedial massage across Bristol. Holistic, evidence-based, and delivered with care.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold text-lg mb-6">ABOUT</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link href="/about" className="hover:text-brand-teal transition-colors">About Us</Link></li>
              <li><Link href="/about" className="hover:text-brand-teal transition-colors">Meet the Team</Link></li>
              <li><Link href="/#services" className="hover:text-brand-teal transition-colors">Our Services</Link></li>
              <li><Link href="/#reviews" className="hover:text-brand-teal transition-colors">Client Reviews</Link></li>
              <li><Link href="/blog" className="hover:text-brand-teal transition-colors">Blog</Link></li>
              <li><Link href="/locations" className="hover:text-brand-teal transition-colors">Locations & Booking</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold text-lg mb-6">SERVICES</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link href="/sports-massage" className="hover:text-brand-teal transition-colors">Sports Massage</Link></li>
              <li><Link href="/injury-therapy" className="hover:text-brand-teal transition-colors">Injury Therapy</Link></li>
              <li><Link href="/remedial-massage" className="hover:text-brand-teal transition-colors">Remedial Massage</Link></li>
              <li><Link href="/cupping" className="hover:text-brand-teal transition-colors">Cupping</Link></li>
              <li><Link href="/#services" className="hover:text-brand-teal transition-colors">Pitchside Support (coming soon)</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-bold text-lg mb-6">CONTACT</h4>
            <ul className="space-y-3 text-white/70 mb-8">
              <li><a href="mailto:Stacey@thebristolbodyrepairclinic.co.uk" className="hover:text-brand-teal transition-colors break-all">Stacey@thebristolbodyrepairclinic.co.uk</a></li>
              <li><a href="https://www.instagram.com/bristolbodyrepairclinic" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition-colors">Instagram: @bristolbodyrepairclinic</a></li>
              <li><a href="https://www.facebook.com/share/15Yb1XcQ19/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition-colors">Facebook: The Bristol Body Repair Clinic</a></li>
            </ul>
            <Link href="/locations" className="inline-block border-2 border-brand-teal text-brand-teal px-6 py-2.5 rounded-full font-semibold hover:bg-brand-teal hover:text-white transition-colors">
              Book Appointment
            </Link>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>© 2024 The Bristol Body Repair Clinic. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
