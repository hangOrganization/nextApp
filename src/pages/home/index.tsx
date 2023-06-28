"use client";
import "swiper/css";
import Disc from "./Disc";
import Sign from "./Sign";
import store from "@/state";
import OurTeam from "./OurTeam";
import "swiper/css/pagination";
import Products from "./Products";
import { Provider } from "react-redux";
import Header from "@/components/Header";
import Introduction from "./Introduction";
import { useEffect, useState } from "react";
// import ShadowBg from "@/components/ShadowBg";
// import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Homepage() {
  const [value, setValue] = useState<number>(0);
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
  })
  return (
    <Provider store={store}>
      <div className={`relative`}>
        {/* <ShadowBg /> */}
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
          effect='fade'
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
            <Introduction  setIsOpenConsult={setIsOpenConsult} />
          </SwiperSlide>
          <SwiperSlide>
            <Products value={value} setValue={setValue} />
          </SwiperSlide>
          <SwiperSlide>
            <OurTeam />
          </SwiperSlide>
          <SwiperSlide>
            <Disc />
          </SwiperSlide>
        </Swiper>
        <div className="md:hidden">
          <Sign />
          <Introduction  setIsOpenConsult={setIsOpenConsult} />
          <Products  value={value} setValue={setValue} />
          <OurTeam />
          <Disc />
        </div>
        {/* <Development isOpenCampus={isOpenCampus} setIsOpenCampus={setIsOpenCampus} /> */}
      </div>
    </Provider>
  );
}
