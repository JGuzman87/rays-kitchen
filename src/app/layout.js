import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ray's Kitchen 👨🏼‍🍳",
  description: "App for Rays food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex flex-col min-h-screen bg-gray-50`}
      >
        <Nav />
        <div className="p-4">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
