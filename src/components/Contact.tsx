"use client";

import { useState } from "react";
import { MapPin, Mail, Clock, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 bg-brand-light" id="contact">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className="text-center mb-16 animate-fade-in"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Get In Touch</h2>
          <div className="w-16 h-1 bg-brand-teal mx-auto mt-6 rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT: Contact Details */}
          <div
            className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col animate-fade-in"
          >
            <div className="space-y-8 flex-grow">
              <div className="flex items-start gap-4">
                <div className="bg-brand-teal/10 p-3 rounded-full text-brand-teal shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Address</h4>
                  <p className="text-brand-text/80">Lockleaze Sports Centre, Bristol</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-teal/10 p-3 rounded-full text-brand-teal shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Email</h4>
                  <a href="mailto:Stacey@thebristolbodyrepairclinic.co.uk" className="text-brand-text/80 hover:text-brand-teal transition-colors break-all">Stacey@thebristolbodyrepairclinic.co.uk</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-teal/10 p-3 rounded-full text-brand-teal shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Instagram</h4>
                  <a href="https://www.instagram.com/bristolbodyrepairclinic" target="_blank" rel="noopener noreferrer" className="text-brand-text/80 hover:text-brand-teal transition-colors">@bristolbodyrepairclinic</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-teal/10 p-3 rounded-full text-brand-teal shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Facebook</h4>
                  <a href="https://www.facebook.com/share/15Yb1XcQ19/" target="_blank" rel="noopener noreferrer" className="text-brand-text/80 hover:text-brand-teal transition-colors">The Bristol Body Repair Clinic</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-teal/10 p-3 rounded-full text-brand-teal shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Hours</h4>
                  <ul className="text-brand-text/80 space-y-1 mt-2">
                    <li className="flex justify-between w-48"><span>Mon–Sat:</span> <span>By appointment</span></li>
                    <li className="flex justify-between w-48"><span>Sunday:</span> <span>Closed</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 w-full h-48 bg-gray-100 rounded-xl overflow-hidden relative border border-gray-200">
              {/* Google Maps placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                <p className="text-brand-text/50 font-medium text-sm">
                  Google Maps Embed<br/>(Client to add embed code here)
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div
            className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] animate-fade-in"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <CheckCircle2 className="text-green-500 w-16 h-16" />
                <h3 className="text-2xl font-bold text-brand-navy">Thank You!</h3>
                <p className="text-brand-text/80">We&apos;ve received your message and will reply within 1 business day.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-brand-teal font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="c-name" className="block text-sm font-medium text-brand-navy mb-2">Name</label>
                  <input required type="text" id="c-name" className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-sm font-medium text-brand-navy mb-2">Email</label>
                  <input required type="email" id="c-email" className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="c-phone" className="block text-sm font-medium text-brand-navy mb-2">Phone</label>
                  <input required minLength={10} type="tel" id="c-phone" className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all" placeholder="07xxx xxxxxx" />
                </div>
                <div>
                  <label htmlFor="c-msg" className="block text-sm font-medium text-brand-navy mb-2">Message</label>
                  <textarea required id="c-msg" rows={4} className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-navy text-white font-bold py-4 rounded-xl hover:bg-brand-navy/90 transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
