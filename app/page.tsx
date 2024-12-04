import { Certificates } from "@/components/Certificates";
import FollowMe from "@/components/FollowMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <div className="bg-[#0E0F0F] mx-auto">
      <div className="fixed  z-50">
        
      <Navbar />
      </div>
    <Hero/>
    <Marquee/>
    <Certificates/>
    <FollowMe/>
    <Footer/>
    </div>
    </>
  );
}
