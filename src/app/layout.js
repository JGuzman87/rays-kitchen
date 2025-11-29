
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
    <html lang="en">
      <body
        className={`antialiased flex flex-col min-h-screen`}
      >
        <Nav />
        <div className="p-4">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
