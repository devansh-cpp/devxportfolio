
import { Certificates } from "@/components/Certificates";
import FollowMe from "@/components/FollowMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Projects from "@/components/ui/Projects";

export default function Home() {
  return (
    <>
    <div className="bg-[#0E0F0F] container mx-auto">
    <Navbar/>
    <Hero/>
    <Marquee/>
    <Projects/>
    <Certificates/>
    <FollowMe/>
    <Footer/>
    </div>
    </>
  );
}
