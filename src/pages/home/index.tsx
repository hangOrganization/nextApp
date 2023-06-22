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
import Disc from "./Disc";
import AboutUs from "./AboutUs";
import { useEffect, useState } from "react";

export default function Homepage() {
  const [value, setValue] = useState<number>(0);
  const [isOpenConsult, setIsOpenConsult] = useState<number>(0);
  const [characteristicType, setCharacteristicType] = useState<number>(0);
  const [isOpenCampus, setIsOpenCampus] = useState<number>(0);

  const scrollToView = (number: any) => {
    window?.scrollTo({
      top: number,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative`}>
      <Header
        isOpenConsult={isOpenConsult}
        setIsOpenConsult={setIsOpenConsult}
        isOpenCampus={isOpenCampus}
        setIsOpenCampus={setIsOpenCampus}
        scrollToView={scrollToView}
      />
      <Sign isOpenConsult={isOpenConsult} setIsOpenConsult={setIsOpenConsult} />
      <Products value={value} setValue={setValue} />
      <SchoolRoll />
      <Specialize />
      <ServiceSystem />
      <OurTeam />
      <SignCharacteristic
        characteristicType={characteristicType}
        setCharacteristicType={setCharacteristicType}
      />
      <AboutUs isOpenCampus={isOpenCampus} setIsOpenCampus={setIsOpenCampus} />
      <Disc />
      <BusinessPartner />
      <Slogan />
      <Footer />
    </div>
  );
}
