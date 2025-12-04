import Providers from "./Providers";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Ray's Kitchen",
  description: "App for Rays food",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en" data-theme="pastel">
      <body
        className={`antialiased flex flex-col min-h-screen relative font-stretch-condensed
`}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full backdrop-blur-xs object-cover"
        >
          <source src="/pr-foods.mp4" type="video/mp4" />
        </video>

        <Providers>
      
          <Nav />
          <div className="p-1 relative">{children}</div>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
