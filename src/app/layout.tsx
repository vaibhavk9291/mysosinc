import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { Navigation } from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sports & Remedial Massage & Physio in Bristol | Body Repair Clinic",
  description: "Expert sports & remedial massage, physio therapies in Filton, Bristol. Helping you recover, prevent injuries, and perform at your best. Book online today.",
  openGraph: {
    title: "Sports & Remedial Massage & Physio in Bristol | Body Repair Clinic",
    description: "Expert sports & remedial massage, physio therapies in Filton, Bristol. Helping you recover, prevent injuries, and perform at your best. Book online today.",
    url: "https://www.thebristolbodyrepairclinic.co.uk",
    siteName: "The Bristol Body Repair Clinic",
    images: [
      {
        url: "https://spinebodyhealth.co.uk/wp-content/uploads/2025/11/upscalemedia-transformed-1-scaled-1.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  icons: {
    icon: "/Screenshot 2026-06-15 022427.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-brand-light text-brand-text min-h-screen flex flex-col`}>
        <TopUtilityBar />
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
