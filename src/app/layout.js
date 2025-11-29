import Providers from "./Providers";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Ray's Kitchen 👨🏼‍🍳",
  description: "App for Rays food",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en" data-theme="caramellatte">
      <body className={`antialiased flex flex-col min-h-screen`}>
        <Providers>
          <Nav />
          <div className="p-1">{children}</div>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
