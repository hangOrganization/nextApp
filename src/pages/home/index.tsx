"use client";
import Header from "@/components/Header";
import Sign from "./Sign";
import Products from "./Products";
import OurTeam from "./OurTeam";
import Disc from "./Disc";
import { useEffect, useState } from "react";
import ShadowBg from "@/components/ShadowBg";
import Introduction from "./Introduction";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Development from "./Development";


export default function Homepage() {
  const [value, setValue] = useState<number>(0);
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const [isOpenConsult, setIsOpenConsult] = useState<number>(0);
  const [isOpenCampus, setIsOpenCampus] = useState<number>(0);
  const scrollToView = (number: any) => {
    window?.scrollTo({
      top: number,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    if (window.outerWidth > 768) {
      document.body.classList.add("overflow-hidden");
    }
    setInnerWidth(window.outerWidth)
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
      <Swiper
        id="Swiper"
        direction={"vertical"}
        pagination={{
          clickable: true,
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper max-md:hidden w-screen h-screen"
      >
        <SwiperSlide>
          <Sign innerWidth={innerWidth} />
        </SwiperSlide>
        <SwiperSlide>
          <Introduction innerWidth={innerWidth} setIsOpenConsult={setIsOpenConsult} />
        </SwiperSlide>
        <SwiperSlide>
          <Products innerWidth={innerWidth} value={value} setValue={setValue} />
        </SwiperSlide>
        <SwiperSlide>
          <OurTeam innerWidth={innerWidth} />
        </SwiperSlide>
        <SwiperSlide>
          <Disc innerWidth={innerWidth} />
        </SwiperSlide>
      </Swiper>
      <div className="md:hidden">
        <Sign innerWidth={innerWidth} />
        <Introduction innerWidth={innerWidth} setIsOpenConsult={setIsOpenConsult} />
        <Products innerWidth={innerWidth} value={value} setValue={setValue} />
        <OurTeam innerWidth={innerWidth} />
        <Disc innerWidth={innerWidth} />
      </div>
      {/* <Development isOpenCampus={isOpenCampus} setIsOpenCampus={setIsOpenCampus} /> */}
    </div>
    
  );
}
