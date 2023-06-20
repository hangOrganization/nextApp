"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sign from "./Sign";
import Products from "./Products";
import SchoolRoll from "./SchoolRoll";
import Specialize from "./Specialize";
import Slogan from "./Slogan";
import SignCharacteristic from "./SignCharacteristic";
import ServiceSystem from "./ServiceSystem";
import BusinessPartner from "./BusinessPartner";
import OurTeam from "./OurTeam";
// import StudentWorks from "./StudentWorks";
import Disc from "./Disc";
import AboutUs from "./AboutUs";
import Video from "./Video";
import { useState } from "react";

export default function Homepage() {
  const [value, setValue] = useState<number>(0);
  return (
    <div
      className={`relative overflow-auto h-screen`}
      onScroll={(e: any) => {
        if (value === 1) {
          e.target.scrollTop = 1848;
        }
      }}
    >
      <div className="h-full">
        <Header />
        <Sign />
        <Products value={value} setValue={setValue} />
        <SchoolRoll />
        <Specialize />
        <ServiceSystem />
        <OurTeam />
        <SignCharacteristic />
        <AboutUs />
        {/* <StudentWorks /> */}
        <Disc />
        <BusinessPartner />
        <Slogan />
        <Footer />
      </div>
    </div>
  );
}
