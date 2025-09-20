import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveHeader from "./components/ResponsiveHeader";

// Load Inter font with specific weights
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Health & Beauty Spain | Medical Tourism in Spain",
  description: "Experience world-class medical treatments in Spain's most beautiful cities. Affordable, high-quality healthcare with a relaxing recovery experience.",
  keywords: ["medical tourism spain", "healthcare in spain", "medical travel", "cosmetic surgery spain", "dental tourism spain"],
  authors: [{ name: "Health & Beauty Spain" }],
  openGraph: {
    title: "Health & Beauty Spain | Medical Tourism in Spain",
    description: "Experience world-class medical treatments in Spain's most beautiful cities.",
    url: "https://healthandbeautyspain.com",
    siteName: "Health & Beauty Spain",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Health & Beauty Spain | Medical Tourism in Spain",
    description: "Experience world-class medical treatments in Spain's most beautiful cities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className={`${inter.className} bg-gray-50`}>
        <div className="min-h-screen flex flex-col">
          <ResponsiveHeader />
          <main className="flex-grow pt-20 md:pt-24">
            {children}
          </main>
          {/* Footer will go here */}
        </div>
      </body>
    </html>
  );
}
