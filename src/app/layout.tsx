import Link from "next/link";

import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer/intex";
import { orbitron } from "./fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const configLinks = [
    {
      label: "Reviews",
      href: "/reviews",
      prefetch: true,
    },
    {
      label: "About",
      href: "/about",
      prefetch: false,
    },
  ];

  return (
    <html lang="en" className={orbitron.variable}>
      <body className="bg-orange-50 px-4 py-2 flex flex-col min-h-screen">
        <header>
          <NavBar configLinks={configLinks} />
        </header>
        <main className="py-3 grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
