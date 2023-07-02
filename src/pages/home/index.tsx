"use client";
import "swiper/css";
import Disc from "./Disc";
import Sign from "./Sign";
import OurTeam from "./OurTeam";
import "swiper/css/pagination";
import Products from "./Products";
import Header from "@/components/Header";
import Introduction from "./Introduction";
import { useEffect, useState } from "react";
// import ShadowBg from "@/components/ShadowBg";
// import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppDispatch } from "@/state/hooks";
import { setIsChrome } from "@/state/application/reducer";

export default function Homepage() {
  const dispatch = useAppDispatch();
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
    dispatch(setIsChrome(window.navigator.userAgent.indexOf("Chrome") >= 0));
  });
  return (
    <div className={`relative max-md:max-w-[100vw] max-md:overflow-hidden`}>
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
        // effect='fade'
        threshold={100}
        // pagination={{
        //   clickable: true,
        //   type: "fraction",
        // }}
        // navigation={true}
        // modules={[Pagination, Navigation]}
        className="mySwiper max-md:!hidden w-screen h-screen"
      >
        <SwiperSlide>
          <Sign />
        </SwiperSlide>
        <SwiperSlide>
          <Introduction setIsOpenConsult={setIsOpenConsult} />
        </SwiperSlide>
        <SwiperSlide>
          <Products/>
        </SwiperSlide>
        <SwiperSlide>
          <OurTeam setIsOpenCampus={setIsOpenCampus} />
        </SwiperSlide>
        <SwiperSlide>
          <Disc />
        </SwiperSlide>
      </Swiper>
      <div className="md:hidden">
        <Sign />
        <Introduction setIsOpenConsult={setIsOpenConsult} />
        <Products />
        <OurTeam setIsOpenCampus={setIsOpenCampus} />
        <Disc />
      </div>
      {/* <Development isOpenCampus={isOpenCampus} setIsOpenCampus={setIsOpenCampus} /> */}
    </div>
  );
}
