"use client";
import "swiper/css";
import Disc from "./Disc";
import Sign from "./Sign";
import OurTeam from "./OurTeam";
import "swiper/css/pagination";
import Products from "./Products";
import Header from "@/components/Header";
import Introduction from "./Introduction";
import { useCallback, useEffect, useState } from "react";
// import ShadowBg from "@/components/ShadowBg";
// import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppDispatch } from "@/state/hooks";
import { setIsChrome } from "@/state/application/reducer";
import styled from "styled-components";
import Specialize from "./Specialize";
import { getCompanyInfo } from "@/api/company";
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
export interface dataFrom {
  aboutUs: any;
  address: any;
  email: any;
  features: any;
  firstLineTutor: any;
  footerSloganCn: any;
  footerSloganEn: any;
  marqueeContent: any;
  partTimeMusicTutor: any;
  phone: any;
  id: any;
  popularColleges: any;
  popularMajorsCn: any;
  popularMajorsEn: any;
  productSystem: any;
  promotionalTitle: any;
  promotionalUrl: any;
  seniorStudyAbroadPlanner: any;
  slogan: any;
  popularMajors: any;
}
export default function Homepage() {
  const dispatch = useAppDispatch();
  const [musicGenre, setMusicGenre] = useState<number>(1);
  const [ourTeamScrollTop, setOurTeamScrollTop] = useState<number>(0);
  const [characteristicType, setCharacteristicType] = useState<number>(0);
  const [right, setRight] = useState<number>(0);
  const [isOpenConsult, setIsOpenConsult] = useState<number>(0);
  const [isOpenCampus, setIsOpenCampus] = useState<number>(0);
  const [data, setData] = useState<dataFrom>();
  const dataFrom: dataFrom = {
    aboutUs: "",
    address: "",
    email: "",
    features: "",
    firstLineTutor: "",
    footerSloganCn: "",
    footerSloganEn: "",
    marqueeContent: "",
    partTimeMusicTutor: "",
    phone: "",
    id: "1",
    popularColleges: "",
    popularMajorsCn: "",
    popularMajorsEn: "",
    productSystem: "",
    promotionalTitle: "",
    promotionalUrl: "",
    seniorStudyAbroadPlanner: "",
    slogan: "",
    popularMajors: {
      modernMusic: {
        popularMajorsCn: [],
        popularMajorsEn: [],
      },
      classicalMusic: {
        popularMajorsCn: [],
        popularMajorsEn: [],
      },
      musicTheory: {
        popularMajorsCn: [],
        popularMajorsEn: [],
      },
    },
  };
  const scrollToView = (number: any) => {
    window?.scrollTo({
      top: number,
      behavior: "smooth",
    });
  };
  const getCompanyInfoFunc = useCallback(async () => {
    const data = await getCompanyInfo();
    dataFrom.aboutUs = JSON.parse(data.aboutUs);
    dataFrom.address = data.address;
    dataFrom.email = data.email;
    dataFrom.features = JSON.parse(data.features);
    dataFrom.firstLineTutor = data.firstLineTutor;
    dataFrom.footerSloganCn = data.footerSloganCn;
    dataFrom.footerSloganEn = data.footerSloganEn;
    dataFrom.marqueeContent = JSON.parse(data.marqueeContent);
    dataFrom.partTimeMusicTutor = data.partTimeMusicTutor;
    dataFrom.phone = data.phone;
    dataFrom.popularColleges = JSON.parse(data.popularColleges);
    dataFrom.productSystem = JSON.parse(data.productSystem);
    dataFrom.promotionalTitle = data.promotionalTitle;
    dataFrom.promotionalUrl = data.promotionalUrl;
    dataFrom.seniorStudyAbroadPlanner = data.seniorStudyAbroadPlanner;
    dataFrom.slogan = JSON.parse(data.slogan);
    dataFrom.popularMajors.modernMusic.popularMajorsCn = JSON.parse(
      data.popularMajorsCn
    ).modernMusic;
    dataFrom.popularMajors.classicalMusic.popularMajorsCn = JSON.parse(
      data.popularMajorsCn
    ).classicalMusic;
    dataFrom.popularMajors.musicTheory.popularMajorsCn = JSON.parse(
      data.popularMajorsCn
    ).musicTheory;
    dataFrom.popularMajors.modernMusic.popularMajorsEn = JSON.parse(
      data.popularMajorsEn
    ).modernMusic;
    dataFrom.popularMajors.classicalMusic.popularMajorsEn = JSON.parse(
      data.popularMajorsEn
    ).classicalMusic;
    dataFrom.popularMajors.musicTheory.popularMajorsEn = JSON.parse(
      data.popularMajorsEn
    ).musicTheory;
    setData(dataFrom);
  }, []);
  useEffect(() => {
    if (window.outerWidth > 768) {
      document.body.classList.add("overflow-hidden");
    }
    getCompanyInfoFunc();
    dispatch(setIsChrome(window.navigator.userAgent.indexOf("Chrome") >= 0));
  });
  return (
    <Box
      className={`relative  md:h-screen max-md:h-full md:overflow-auto  max-md:max-w-[100vw]`}
    >
      <Header
        setCharacteristicType={setCharacteristicType}
        setRight={setRight}
        scrollTop={ourTeamScrollTop}
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
          <Introduction dataFrom={data} setIsOpenConsult={setIsOpenConsult} />
        </SwiperSlide>
        <SwiperSlide>
          <Products
            dataFrom={data}
            musicGenre={musicGenre}
            setMusicGenre={setMusicGenre}
          />
        </SwiperSlide>
        <SwiperSlide>
          <OurTeam
            dataFrom={data}
            setRight={setRight}
            musicGenre={musicGenre}
            setMusicGenre={setMusicGenre}
            scrollTop={ourTeamScrollTop}
            setScrollTop={setOurTeamScrollTop}
            right={right}
            characteristicType={characteristicType}
            setCharacteristicType={setCharacteristicType}
            setIsOpenCampus={setIsOpenCampus}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Disc dataFrom={data} />
        </SwiperSlide>
      </Swiper>
      <div className="md:hidden">
        <Sign />
        <Introduction dataFrom={data} setIsOpenConsult={setIsOpenConsult} />
        <Products
          dataFrom={data}
          musicGenre={musicGenre}
          setMusicGenre={setMusicGenre}
        />
        <Specialize
          dataFrom={data}
          musicGenre={musicGenre}
          setMusicGenre={setMusicGenre}
        />
        <OurTeam
          dataFrom={data}
          musicGenre={musicGenre}
          setMusicGenre={setMusicGenre}
          setRight={setRight}
          scrollTop={ourTeamScrollTop}
          setScrollTop={setOurTeamScrollTop}
          right={right}
          characteristicType={characteristicType}
          setCharacteristicType={setCharacteristicType}
          setIsOpenCampus={setIsOpenCampus}
        />
        <Disc dataFrom={data} />
      </div>
    </Box>
  );
}
