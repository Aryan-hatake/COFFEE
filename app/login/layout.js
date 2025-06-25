import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: "Login - Get Aryan a Coffee 🍵",
  description: "These website serves coffee for aryan",
};

export default function RootLayout({ children }) {
  return (

     
 

        <div className=" flex justify-center items-center relative text-white min-h-screen w-full bg-slate-950">
          <div className=" absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
          </div>
        {children}
          </div>
 
        

      
  );
}