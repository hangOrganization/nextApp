"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Top from "./Sign";
import Products from "./Products";
import SchoolRoll from "./SchoolRoll";
import Specialize from "./Specialize";
import Slogan from "./Slogan";
import SignCharacteristic from "./SignCharacteristic";
import ServiceSystem from "./ServiceSystem";
import BusinessPartner from "./BusinessPartner";
import OurTeam from "./OurTeam";
import Disc from "./disc";

export default function Homepage() {
  return (
    <div>
      <Header />
      <Top />
      <Products />
      <SchoolRoll />
      <Specialize />
      <ServiceSystem />
      <SignCharacteristic />
      <OurTeam />
      <Disc />
      <BusinessPartner />
      <Slogan />
      <Footer />
    </div>
  );
}
