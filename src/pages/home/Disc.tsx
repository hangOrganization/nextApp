"use client";
import styled from "styled-components";
import disc_bg from "@/assets/image/svg/disc-bg.svg";
import Image from "next/image";
import icon_right_arrow from "@/assets/image/svg/icon-right-white-arrow.svg";
import discList from "@/utils/discList";
import disc_left_decoraton from "@/assets/image/svg/disc-left-decoration.svg";
import disc_right_decoraton from "@/assets/image/svg/disc-right-decoration.svg";
import disc_film from "@/assets/image/png/disc-film.png";
import disc_acquiesce from "@/assets/image/png/disc-acquiesce.png";
import disc_mobile_bg from "../../assets/image/mobile/mobile-disc-bg.png";
import cd_mask from "../../assets/image/disc-icon/CDMask.png";
import text_bg from "../../assets/image/disc-icon/Bright.png";
import { useEffect, useState } from "react";
import BusinessPartner from "./BusinessPartner";
import Footer from "@/components/Footer";
import Slogan from "./Slogan";
import { useSwiper } from "swiper/react";
// import Bright from "../assets/image/disc-icon/Bright.jpg";
// import CHINA_I from "../assets/image/disc-icon/CHINA-I.jpg";
// import CHINA_II from "../assets/image/disc-icon/CHINA-II.jpg";
// import CHINA_III from "../assets/image/disc-icon/CHINA-III.png";
// import China_IV from "../assets/image/disc-icon/China-IV.png";
// import China_V_Spring from "../assets/image/disc-icon/China-V-Spring.jpg";
// import Comedy_I from "../assets/image/disc-icon/Comedy-I.png";
// import Comedy_II from "../assets/image/disc-icon/Comedy-II.jpg";
// import DOCUMENTARY_I from "../assets/image/disc-icon/DOCUMENTARY-I.jpg";
// import DOCUMENTARY_II from "../assets/image/disc-icon/DOCUMENTARY-II.jpg";
// import DOCUMENTARY_III from "../assets/image/disc-icon/DOCUMENTARY-III.png";
// import DOCUMENTARY_IV from "../assets/image/disc-icon/DOCUMENTARY-IV.png";
// import DOCUMENTARY_V from "../assets/image/disc-icon/DOCUMENTARY-V.png";
// import EMOTIONAL from "../assets/image/disc-icon/EMOTIONAL.png";
// import FASHION from "../assets/image/disc-icon/FASHION.png";
// import HOPEFUL from "../assets/image/disc-icon/HOPEFUL.jpg";
// import Horror_I from "../assets/image/disc-icon/Horror-I.png";
// import Horror_II from "../assets/image/disc-icon/Horror-II.jpg";
// import RYHTHM from "../assets/image/disc-icon/RYHTHM.jpg";
// import SCI_TECH from "../assets/image/disc-icon/SCI_TECH.jpg";
// import Suspense from "../assets/image/disc-icon/Suspense.jpg";
// import Warm from "../assets/image/disc-icon/Warm.jpg";
// import Yoga from "../assets/image/disc-icon/Yoga.jpg";
import _ from "lodash";
import {
  useActiveIndex,
  useOuterWidth,
  useThrottleFlag,
} from "@/state/application/hooks";
import { useAppDispatch } from "@/state/hooks";
import {
  setActiveIndex,
  setComePage,
  setThrottleFlag,
} from "@/state/application/reducer";

interface DiscBoxProps {
  title: string;
  bg: any;
  src: any;
  type: any;
  key: number;
  url?: any;
}

const SwiperContent = styled.div`
  .swiper-move-in {
    animation: swiper-move-in 1000ms linear forwards 450ms;
  }
  @keyframes swiper-move-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .start-film-move {
    animation: film-move 1000ms cubic-bezier(0.4, 0, 0.2, 1) 450ms;

    @keyframes film-move {
      from {
        transform: translateX(0px) rotate(-40deg);
      }
      to {
        transform: translateX(120px) rotate(0deg);
      }
    }
  }
`;
const Box = styled.div`
  overflow: hidden;
  background: url(${disc_bg.src});
  background-size: 100% 100%;
  @media (min-width: 768px) {
    .active-move {
      .film-img {
        transform: translateX(162px) rotate(40deg) !important;
      }
      .film-mask {
        transition: all 450ms;
        opacity: 0;
        transform: translateX(-20px);
      }
      .left-coraton {
        transform: translateX(-35px);
      }
      .right-coraton {
        right: -15px;
      }
      .film-master-map-active {
        opacity: 1;
        transition: all 450ms;

        transform: translateX(-20px);
      }
    }
    .move {
      .film-img {
        transform-origin: center center;
        transform: translateX(120px) rotate(0deg);
      }
      .film-master-map {
        opacity: 0;
        transition: transform 450ms, opacity 8000ms;
      }

      .film-mask {
        transition: transform 450ms, opacity 600ms;
        opacity: 1;
        /* opacity: 1; */
      }
    }
  }
`;

const FilterBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1440px;
  opacity: 0;

  -moz-opacity: 0.15;
  -khtml-opacity: 0.15;
  opacity: 0.15;
  filter: blur(100px);
  background-size: 100%;
  background-repeat: no-repeat;
`;

const DiscBOxFilter = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 24px;
`;
const DiscBox = styled.div`
  box-sizing: border-box;
  background-blend-mode: soft-light, overlay;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  cursor: pointer;
  .audition-button {
    opacity: 0;
  }

  @media (min-width: 768px) {
    :hover {
      transform: translateY(-5px);
      .audition-button {
        opacity: 1;
      }
    }
    img {
      border-radius: 16px;
    }
  }
`;

const LeftDecoraton = styled.div`
  mix-blend-mode: overlay;
  background: url(${disc_left_decoraton.src});
  margin-top: auto;
  transform: translateX(5px);
  background-blend-mode: overlay;
  opacity: 0.25;

  background-repeat: no-repeat;
`;
const RightDecoraton = styled.div`
  mix-blend-mode: overlay;
  background-blend-mode: overlay;
  background: url(${disc_right_decoraton.src});
  background-repeat: no-repeat;
  top: -150px;
  opacity: 0.13;
  right: 45px;
`;

const FilmBox = styled.div`
  /* @media (min-width: 768px) {
    .film-img {
      transform: translateX(120px) rotate(0deg);
      transform-origin: center center;
    }
    .film-master-map {
      top: 0;
      opacity: 0;
      left: 0;
      transition: transform 450ms;
    }

    .film-mask {
      transition: all 450ms;
      opacity: 1;
    }
  } */

  @media not all and (min-width: 768px) {
    .bg-box {
      position: absolute;
      background: url(${disc_mobile_bg.src});
      background-size: 100% 100%;
      background-repeat: no-repeat;
      z-index: 1;
    }
  }
`;
const ButtonBox = styled.div`
  position: absolute;
  bottom: -40px;
  right: 0;
`;

const ChangeButton = styled.div`
  border-radius: 100%;
  position: relative;
  z-index: 99;
  cursor: pointer;
  transition: all 300ms;
  :hover {
    background: #ffffff;
    transition: all 300ms;
    path {
      stroke: #1a1a1a;
    }
    g {
      opacity: 1;
    }
  }
`;
const ImgBox = styled.div`
  mask-image: url(${cd_mask.src});
  mask-size: 100% 100%;
  background-size: 100% 100%;
`;

interface DiscProps {}
export default function Disc({}: DiscProps) {
  const swiper = useSwiper();
  const innerWidth = useOuterWidth();
  const dispatch = useAppDispatch();
  const activeIndex = useActiveIndex();
  const throttleFlag = useThrottleFlag();
  const [moveFlag, setMoveFlag] = useState(false);
  const [discImg, setDiscImg] = useState(disc_acquiesce);
  const [activeKey, setactiveKey] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const goOtherPage = (url: any) => {
    window.open(url);
  };
  const mouseLeave = (bg: any) => {
    setMoveFlag(false);
  };
  const mouseEnter = (bg: any, key: any) => {
    setDiscImg(bg);
    setMoveFlag(true);
    setactiveKey(key);
  };

  const prePage = () => {
    if (currentPage <= -3) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    if (currentPage == 4) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };
  useEffect(() => {
    document.querySelector("#discBox")?.scrollTo({
      top: 20,
      behavior: "smooth",
    });
  }, [swiper?.activeIndex]);
  return (
    <SwiperContent>
      <div
        id="discBox"
        className={`md:h-screen md:overflow-auto md:opacity-0 transition-all duration-10000 ${
          activeIndex === 4 ? "swiper-move-in" : "swiper-move-out"
        }`}
        onScroll={(e: any) => {
          if (throttleFlag) return;
          if (innerWidth > 768) {
            if (e.target.scrollTop === 0) {
              dispatch(setThrottleFlag(true));
              swiper.slideTo(3, 1000);
              dispatch(setActiveIndex(3));
              setTimeout(() => {
                dispatch(setThrottleFlag(false));
              }, 1200);
            }
          }
        }}
      >
        <Box className="h-[1440px] max-md:h-full max-md:pb-[160px] w-screen flex  items-center justify-center max-md:justify-normal flex-col relative ">
          <FilterBox
            className="fliter-box z-[4] max-md:hidden"
            style={{
              backgroundImage: `url(${discImg.src})`,
              opacity: moveFlag ? 0.2 : 0,
              transition: "all 300ms",
            }}
          ></FilterBox>
          <div className={moveFlag ? "active-move" : "move"}>
            <div className=" w-[1160px] max-md:w-full flex mb-[72px] max-md:mb-[24px] relative mx-auto max-md:ml-[33px]">
              <div className="flex">
                <LeftDecoraton className="left-coraton transition-all duration-500 w-[367px] h-[370px] absoulte  z-[5] max-md:hidden"></LeftDecoraton>
                <FilmBox className=" w-[492px] h-[492px]  max-md:w-[297px] max-md:h-[246px] mx-auto  flex items-center justify-center relative max-md:mt-[160px]">
                  <div className="bg-box w-screen h-[566px]"></div>
                  <Image
                    src={disc_film}
                    alt=""
                    className={`film-img w-[444px] h-[444px] absolute transition-all duration-[450ms]  z-[4] max-md:w-[222px] max-md:h-[222px] max-md:translate-x-[40px]  ${
                      swiper?.activeIndex === 4 ? "start-film-move" : ""
                    }`}
                  ></Image>
                  <Image
                    src={disc_acquiesce}
                    alt=""
                    className="film-mask   w-[492px] h-[492px] relative z-[5] max-md:translate-x-[-20px]  max-md:w-[246px] max-md:h-[246px]"
                  ></Image>

                  {discList.map((item: DiscBoxProps) => {
                    return (
                      <ImgBox
                        key={item.key}
                        className={` w-[492px] h-[492px] absolute z-[4] max-md:hidden  opacity-0  ${
                          activeKey === item.key
                            ? "film-master-map-active"
                            : "film-master-map"
                        }`}
                        style={{
                          backgroundImage: `url(${item.bg.src})`,
                        }}
                      >
                        item.bg
                      </ImgBox>
                    );
                  })}
                </FilmBox>
                <ButtonBox className="flex gap-[40px] h-[48px]  relative z-[5] max-md:hidden">
                  <ChangeButton className="scale-x-[-1]" onClick={nextPage}>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5" clipPath="url(#clip0_399_13042)">
                        <circle
                          cx="24"
                          cy="24"
                          r="23.5"
                          stroke="white"
                          strokeOpacity="0.3"
                        />
                        <path
                          d="M24 32C24 32 27.2353 24 35 24C27.2353 24 24 16 24 16"
                          stroke="white"
                        />
                        <path d="M35 24L13 24" stroke="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_399_13042">
                          <rect width="48" height="48" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </ChangeButton>
                  <ChangeButton onClick={prePage}>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5" clipPath="url(#clip0_399_13042)">
                        <circle
                          cx="24"
                          cy="24"
                          r="23.5"
                          stroke="white"
                          strokeOpacity="0.3"
                        />
                        <path
                          d="M24 32C24 32 27.2353 24 35 24C27.2353 24 24 16 24 16"
                          stroke="white"
                        />
                        <path d="M35 24L13 24" stroke="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_399_13042">
                          <rect width="48" height="48" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </ChangeButton>
                </ButtonBox>
              </div>
              <RightDecoraton className="right-coraton  w-[329px] h-[176px] absolute transition-all duration-500  z-[5] max-md:hidden"></RightDecoraton>
            </div>
          </div>
          <div
            className={` w-[11404PX] flex items-center gap-[16px]  duration-500 transition-all relative z-[5] max-md:hidden `}
            style={{
              transform:
                currentPage == -3
                  ? "translateX(-3311px)"
                  : `translateX(${1199 * currentPage}px)`,
            }}
          >
            {discList.map((item: DiscBoxProps) => (
              <DiscBox
                key={item.key}
                onMouseEnter={() => mouseEnter(item.bg, item.key)}
                onMouseLeave={mouseLeave}
                className="w-[389px] h-[168px] flex transition-all duration-500 p-[16px]"
              >
                <Image
                  className="w-[136px] h-[136px]"
                  src={item.src}
                  alt=""
                ></Image>
                <div className="ml-4 w-full">
                  <div className="flex items-center gap-[8px]">
                    {item.type.map((items: any) => {
                      return (
                        <div
                          key={item.key + items}
                          className=" h-[30px] px-[12px] flex items-center justify-center mt-1 mb-[16px]  text-[14px] leading-[100%] font-[400] text-[#FF4B00] box-border "
                          style={{
                            border: "1px solid rgba(255, 75, 0, 0.5)",
                            borderRadius: "12px",
                          }}
                        >
                          {items}
                        </div>
                      );
                    })}
                  </div>
                  <div className="font-[300] text-[22px] leading-[100%] font-[Lexend] text-[#FFFFFF] whitespace-nowrap">
                    {item.title}
                  </div>
                  <div className=" w-[112px]" style={{ marginLeft: "auto" }}>
                    <div
                      className="flex items-center justify-center w-[112px] h-[40px] bg-[#FF4B00] rounded-[16px] mt-[20px]  transition-all duration-500 audition-button"
                      onClick={() => goOtherPage(item.url)}
                    >
                      <div className=" font-[400] text-[14px] leading-[100%]">
                        前往试听
                      </div>
                      <Image
                        className="w-[24px]"
                        src={icon_right_arrow}
                        alt=""
                      ></Image>
                    </div>
                  </div>
                </div>
              </DiscBox>
            ))}
          </div>

          <div
            className={` w-full md:hidden flex items-center gap-[8px] flex-col  duration-500 transition-all relative z-[5] `}
          >
            <div
              className=" absolute w-full h-[228px] z-20 bottom-[90px]"
              style={{
                background:
                  "linear-gradient(180deg, rgb(26,26,26,0) 0%, rgb(26,26,26,0.85) 100%)",
              }}
            ></div>
            {discList.slice(0, 5).map((item: DiscBoxProps) => (
              <DiscBOxFilter key={item.key}>
                <DiscBox
                  key={item.key}
                  onMouseEnter={() => mouseEnter(item.bg)}
                  onMouseLeave={mouseLeave}
                  onClick={() => goOtherPage(item.url)}
                  className="w-[343px] h-[104px] relative z-10 flex transition-all duration-500 p-[12px] pr-[20px]"
                >
                  <Image
                    className="w-[80px] h-[80px] rounded-[12px]"
                    src={item.src}
                    alt=""
                  ></Image>
                  <div className="ml-4 w-full">
                    <div className="flex items-center  mb-[12px] gap-[4px]">
                      {item.type.map((items: any) => {
                        return (
                          <div
                            key={item.key + items}
                            className=" h-[24px] px-[8px] flex items-center justify-center  text-[12px] leading-[100%] font-[400] text-[#FF4B00] box-border "
                            style={{
                              border: "1px solid rgba(255, 75, 0, 0.5)",
                              borderRadius: "8px",
                            }}
                          >
                            {items}
                          </div>
                        );
                      })}

                      <div className="flex items-center justify-centerpx-1 ml-auto py-2 gap-1    ">
                        <div className=" font-[400] text-[12px] text-[#FF4B00] leading-[100%]">
                          前往试听
                        </div>

                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 13.5C9 13.5 10.7647 9 15 9C10.7647 9 9 4.5 9 4.5"
                            stroke="#FF4B00"
                          />
                          <path d="M15 9L3 9" stroke="#FF4B00" />
                        </svg>
                      </div>
                    </div>
                    <div className="font-[300] text-[16px] leading-[100%] font-[Lexend] text-[#FFFFFF] whitespace-nowrap">
                      {item.title}
                    </div>
                  </div>
                </DiscBox>
              </DiscBOxFilter>
            ))}

            <div
              className=" p-[12px] pl-[16px] flex items-center gap-2  rounded-[64px] mt-[48px]"
              style={{
                border: "1px solid rgba(255, 75, 0, 0.50)",
              }}
            >
              <div
                className="text-[12px] leading-[120%] text-[#FF4B00] relative z-10"
                onClick={() => {
                  window.open("http://www.soundpic.cn/listen");
                }}
              >
                前往试听全部专辑
              </div>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1760_27425)">
                  <path
                    d="M11 18C11 18 13.3529 12 19 12C13.3529 12 11 6 11 6"
                    stroke="#FF4B00"
                  />
                  <path d="M18 12L4 12" stroke="#FF4B00" />
                  <circle cx="12" cy="12" r="11.5" stroke="#FF4B00" />
                </g>
                <defs>
                  <clipPath id="clip0_1760_27425">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </Box>
        <BusinessPartner />
        <Slogan />
        <Footer />
      </div>
    </SwiperContent>
  );
}
