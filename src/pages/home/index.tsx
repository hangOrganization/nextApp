"use client";
import Header from "@/components/Header";
import Sign from "./Sign";
import Products from "./Products";
import OurTeam from "./OurTeam";
import Disc from "./Disc";
import { useEffect, useState } from "react";
import ShadowBg from "@/components/ShadowBg";
import Introduction from "./Introduction";

export default function Homepage() {
  const [value, setValue] = useState<number>(0);
  const [innerHeight, setInnerHeight] = useState<number>(0);
  const [isOpenConsult, setIsOpenConsult] = useState<number>(0);
  const [isOpenCampus, setIsOpenCampus] = useState<number>(0);
  const scrollToView = (number: any) => {
    window?.scrollTo({
      top: number,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    if (window.innerHeight > 768) {
      document.body.classList.add("overflow-hidden");
    }
    setInnerHeight(window.innerHeight)
  })
  return (
    <div className={`relative`}>
      <ShadowBg />
      <Header
        isOpenConsult={isOpenConsult}
        setIsOpenConsult={setIsOpenConsult}
        isOpenCampus={isOpenCampus}
        setIsOpenCampus={setIsOpenCampus}
        scrollToView={scrollToView}
      />
      <Sign innerHeight={innerHeight} />
      <Introduction innerHeight={innerHeight} setIsOpenConsult={setIsOpenConsult} />
      <Products innerHeight={innerHeight} value={value} setValue={setValue} />
      <OurTeam innerHeight={innerHeight} />
      {/* <Development isOpenCampus={isOpenCampus} setIsOpenCampus={setIsOpenCampus} /> */}
      <Disc innerHeight={innerHeight} />
    </div>
  );
}
