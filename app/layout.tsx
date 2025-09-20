import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
