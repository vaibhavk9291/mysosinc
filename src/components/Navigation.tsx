"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/#home" },
    {
      label: "Services",
      href: "/#services",
      dropdown: [
        { label: "Sports Massage", href: "/sports-massage" },
        { label: "Injury Therapy", href: "/injury-therapy" },
        { label: "Remedial Massage", href: "/remedial-massage" },
        { label: "Cupping", href: "/cupping" },
      ],
    },
    {
      label: "Locations",
      href: "/locations",
      dropdown: [
        { label: "Lockleaze Sports Centre", href: "/lockleaze-sports-centre" },
        { label: "Desklodge", href: "/desklodge" },
        { label: "Roots Fitness", href: "/rootsfitness" },
      ],
    },
    {
      label: "About Us",
      href: "/about",
      dropdown: [
        { label: "Meet the Team", href: "/about" },
      ],
    },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm w-full transition-all duration-300">
      <div className="px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold tracking-tighter text-brand-navy">
            The Bristol <span className="text-brand-teal">Body Repair</span> Clinic
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <div key={link.label} className="relative group">
              <Link href={link.href} className="text-brand-text font-medium hover:text-brand-teal transition-colors py-2 flex items-center gap-1">
                {link.label}
                {link.dropdown && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                )}
              </Link>
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-lg border border-gray-100 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {link.dropdown.map((dropLink) => (
                      <Link key={dropLink.label} href={dropLink.href} className="block px-4 py-2 text-sm text-brand-text hover:bg-brand-teal/5 hover:text-brand-teal transition-colors">
                        {dropLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/locations" className="bg-brand-teal text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-teal/90 transition-colors">
            Book
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-brand-text hover:text-brand-teal transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-brand-navy text-white min-h-screen p-6 shadow-2xl animate-in slide-in-from-right-8 fade-in duration-300">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <div key={link.label} className="flex flex-col gap-2">
                <Link href={link.href} className="text-xl font-medium hover:text-brand-teal transition-colors" onClick={() => !link.dropdown && setIsOpen(false)}>
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 flex flex-col gap-3 mt-2 border-l border-white/20">
                    {link.dropdown.map((dropLink) => (
                      <Link key={dropLink.label} href={dropLink.href} className="text-base text-white/80 hover:text-brand-teal transition-colors" onClick={() => setIsOpen(false)}>
                        {dropLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="h-px bg-white/20 my-4" />
            <Link href="/locations" className="bg-brand-teal text-white text-center px-6 py-3 rounded-full font-semibold hover:bg-brand-teal/90 transition-colors" onClick={() => setIsOpen(false)}>
              Book
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
