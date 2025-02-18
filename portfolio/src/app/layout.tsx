import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nwachukwu Ujubuonu",
  description: "I'm a Software Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${instrumentSerif.variable} antialiased`}
      >
       <NavBar/>
        {children}
        <CallToAction/>
        <Footer/>
      </body>
    </html>
  );
}
