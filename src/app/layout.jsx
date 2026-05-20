
import Footer from "@/components/shared/Footer";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { Inter } from 'next/font/google';
import { Toaster } from "react-hot-toast";




const interFont=Inter({
  variable:'--font-inter',
  subsets:['latin'],
  weight:['400','500','600','700','800','900']
})

export const metadata = {
  title: "DocAppoint",
  description: "A doctor appointment booking application built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interFont.className} h-full antialiased`}
    >
      <body>
        <Navbar/>
        
        {children}
        <Footer/>
            <Toaster />
        </body>
    </html>
  );
}
