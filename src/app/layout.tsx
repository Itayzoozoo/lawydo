import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { firm } from "@/data/firm";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${firm.name} — ${firm.tagline}`,
    template: `%s · ${firm.name}`,
  },
  description: firm.description,
  metadataBase: new URL("https://sterlingvance.com"),
  openGraph: {
    title: `${firm.name} — ${firm.tagline}`,
    description: firm.description,
    type: "website",
    siteName: firm.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${firm.name} — ${firm.tagline}`,
    description: firm.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased font-medium">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
