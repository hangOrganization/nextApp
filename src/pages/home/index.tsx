"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sign from "./Sign";
import Products from "./Products";
import SchoolRoll from "./SchoolRoll";
import Specialize from "./Specialize";
import Slogan from "./Slogan";
import SignCharacteristic from "./SignCharacteristic";
import BusinessPartner from "./BusinessPartner";
import OurTeam from "./OurTeam";
import Disc from "./Disc";
import Development from "./Development";
import { useState } from "react";
import ShadowBg from "@/components/ShadowBg";
import Introduction from "./Introduction";

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
    <div className={`relative w-screen overflow-hidden`}>
      <ShadowBg />
      <Header
        isOpenConsult={isOpenConsult}
        setIsOpenConsult={setIsOpenConsult}
        isOpenCampus={isOpenCampus}
        setIsOpenCampus={setIsOpenCampus}
        scrollToView={scrollToView}
      />
      <Sign/>
      <Introduction setIsOpenConsult={setIsOpenConsult}  />
      <Products value={value} setValue={setValue} />
      <SchoolRoll />
      <Specialize />
      <OurTeam />
      <SignCharacteristic
        characteristicType={characteristicType}
        setCharacteristicType={setCharacteristicType}
      />
      <Development isOpenCampus={isOpenCampus} setIsOpenCampus={setIsOpenCampus} />
      <Disc />
      <BusinessPartner />
      <Slogan />
      <Footer />
    </div>
  );
}
