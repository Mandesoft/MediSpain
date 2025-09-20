import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#2563eb",
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
    <html lang="en" className={inter.variable}>
      <head />
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
