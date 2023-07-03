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
import styled from "styled-components";
const Box = styled.div`
  .swiper-move-in {
    @media (min-width: 768px) {
      animation: swiper-move-in 1000ms cubic-bezier(0.69, 0, 0.37, 1) forwards;
    }
  }
  .swiper-move-out {
    @media (min-width: 768px) {
      animation: swiper-move-out 800ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
  }
  @keyframes swiper-move-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes swiper-move-out {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;
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
    <Box className={`relative h-screen overflow-auto max-md:max-w-[100vw] `}>
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
        threshold={100}
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
    </Box>
  );
}
