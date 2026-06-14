"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { motion, Variants } from 'framer-motion';
import { Globe, Phone, MapPin } from "lucide-react";

// Icon component for contact details
const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
    const icons = {
        website: <Globe className="h-5 w-5 text-brand-teal" />,
        phone: <Phone className="h-5 w-5 text-brand-teal" />,
        address: <MapPin className="h-5 w-5 text-brand-teal" />,
    };
    return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};

// Prop types for the HeroSection component
interface HeroSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo, ...props }, ref) => {
    
    // Animation variants for the container to orchestrate children animations
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    // Animation variants for individual text/UI elements
    const itemVariants: Variants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };
    
    return (
      <motion.section
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        id="home"
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-brand-light text-brand-navy md:flex-row",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      >
        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16 xl:p-24">
            {/* Top Section: Logo & Main Content */}
            <div>
                <motion.header className="mb-12" variants={itemVariants}>
                    {logo && (
                        <div className="flex items-center">
                            <img src={logo.url} alt={logo.alt} className="mr-3 h-8" />
                            <div>
                                {logo.text && <p className="text-lg font-bold text-brand-navy">{logo.text}</p>}
                                {slogan && <p className="text-xs tracking-wider text-brand-text/70 uppercase font-semibold">{slogan}</p>}
                            </div>
                        </div>
                    )}
                    {!logo && slogan && (
                         <p className="text-xs tracking-wider text-brand-text/70 uppercase font-bold">{slogan}</p>
                    )}
                </motion.header>

                <motion.main variants={containerVariants}>
                    <motion.h1 className="text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl lg:text-6xl" variants={itemVariants}>
                        {title}
                    </motion.h1>
                    <motion.div className="my-8 h-1 w-20 bg-brand-teal rounded-full" variants={itemVariants}></motion.div>
                    <motion.p className="mb-10 max-w-lg text-lg text-brand-text/70" variants={itemVariants}>
                        {subtitle}
                    </motion.p>
                    <motion.a href={callToAction.href} className="inline-block px-8 py-3.5 bg-brand-teal text-white rounded-full text-sm font-bold tracking-widest transition-colors hover:bg-brand-teal/90 shadow-lg shadow-brand-teal/30" variants={itemVariants}>
                        {callToAction.text}
                    </motion.a>
                </motion.main>
            </div>

            {/* Bottom Section: Footer Info */}
            <motion.footer className="mt-16 w-full pt-8 border-t border-brand-navy/5" variants={itemVariants}>
                <div className="grid grid-cols-1 gap-6 text-sm font-medium text-brand-text/80 sm:grid-cols-3">
                    <div className="flex items-center">
                        <InfoIcon type="website" />
                        <span>{contactInfo.website}</span>
                    </div>
                    <div className="flex items-center">
                        <InfoIcon type="phone" />
                        <span>{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center">
                        <InfoIcon type="address" />
                        <span>{contactInfo.address}</span>
                    </div>
                </div>
            </motion.footer>
        </div>

        {/* Right Side: Image with Clip Path Animation */}
        <motion.div 
          className="w-full min-h-[400px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5"
          style={{ 
            backgroundImage: `url('${backgroundImage}')`,
          }}
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.2, ease: "circOut" }}
        >
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
