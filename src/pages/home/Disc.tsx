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

import { useState } from "react";
import { relative } from "path";
interface DiscBoxProps {
  title: string;
  bg: any;
  src: any;
  type: any;
  key: number;
  url?: any;
}
const Box = styled.div`
  overflow: hidden;
  background: url(${disc_bg.src});
  background-size: 100% 100%;
  .active-move {
    .film-img {
      transform: translateX(162px) rotate(40deg);
    }
    .film-mask {
      opacity: 0;
      transition: opacity 600ms, transform 450ms;
      transform: translateX(-20px);
    }
    .left-coraton {
      transform: translateX(-35px);
    }
    .right-coraton {
      right: -15px;
    }
    .film-master-map {
      opacity: 1;
      transition: transform 450ms;
      transform: translateX(-20px);
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
  transition: all 500ms;
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
  :hover {
    transform: translateY(-5px);
    .audition-button {
      opacity: 1;
    }
  }
`;

const LeftDecoraton = styled.div`
  mix-blend-mode: overlay;
  background: url(${disc_left_decoraton.src});
  margin-top: auto;
  transform: translateX(5px);
  background-repeat: no-repeat;
`;
const RightDecoraton = styled.div`
  mix-blend-mode: overlay;
  background: url(${disc_right_decoraton.src});
  background-repeat: no-repeat;
  top: -150px;
  right: 45px;
`;

const FilmBox = styled.div`
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
    transition: opacity 600ms, transform 450ms;

    opacity: 1;
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
export default function Disc() {
  const [moveFlag, setMoveFlag] = useState(false);
  const [discImg, setDiscImg] = useState(disc_acquiesce);
  const [currentPage, setCurrentPage] = useState(1);
  const goOtherPage = (url: any) => {
    // window.location.href = url;
    window.open(url);
  };
  const mouseLeave = (bg: any) => {
    setDiscImg(disc_acquiesce);
    setMoveFlag(false);
  };
  const mouseEnter = (bg: any) => {
    setDiscImg(bg);
    setMoveFlag(true);
  };
  const prePage = () => {
    console.log(currentPage);
    if (currentPage <= -3) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    console.log(currentPage);

    if (currentPage == 4) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };
  return (
    <Box className="h-[1440px] w-screen flex items-center justify-center flex-col relative ">
      <FilterBox
        className="fliter-box z-[1] "
        style={{
          backgroundImage:
            discImg.src != disc_acquiesce.src ? `url(${discImg.src})` : "",
          opacity: discImg.src != disc_acquiesce.src ? 0.15 : 0,
        }}
      ></FilterBox>
      <div className={moveFlag ? "active-move" : ""}>
        <div className=" w-[1160px] flex mb-[72px] relative mx-auto">
          <div className="flex">
            <LeftDecoraton className="left-coraton transition-all duration-500 w-[367px] h-[370px] absoulte  z-[5]"></LeftDecoraton>
            <FilmBox className=" w-[492px] h-[492px] flex items-center justify-center relative">
              <Image
                src={disc_film}
                alt=""
                className="film-img w-[444px] h-[444px] absolute transition-all duration-1000  z-[2]"
              ></Image>
              <Image
                src={disc_acquiesce}
                alt=""
                className="film-mask   w-[492px] h-[492px] relative z-[5]  "
              ></Image>

              <Image
                src={discImg}
                alt=""
                className="film-master-map w-[492px] h-[492px] absolute z-[4]  "
              ></Image>
            </FilmBox>
            <ButtonBox className="flex gap-[40px] h-[48px]  relative z-[5]">
              <ChangeButton className="scale-x-[-1]" onClick={prePage}>
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
              <ChangeButton onClick={nextPage}>
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

          <RightDecoraton className="right-coraton  w-[329px] h-[176px] absolute transition-all duration-500  z-[5]"></RightDecoraton>
        </div>
      </div>
      <div
        className={` w-[10089px] flex items-center gap-[16px]  duration-500 transition-all relative z-[5]`}
        style={{
          transform: `translateX(${currentPage * 1215}px)`,
        }}
      >
        {discList.map((item: DiscBoxProps) => (
          <DiscBox
            key={item.key}
            onMouseEnter={() => mouseEnter(item.bg)}
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
                {item.type.map((item: any) => {
                  return (
                    <div
                      key={item}
                      className=" h-[30px] px-[12px] flex items-center justify-center mt-1 mb-[16px]  text-[14px] leading-[100%] font-[400] text-[#FF4B00] box-border "
                      style={{
                        border: "1px solid rgba(255, 75, 0, 0.5)",
                        borderRadius: "12px",
                      }}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
              <div className="font-[300] text-[22px] leading-[100%] text-[#FFFFFF] whitespace-nowrap">
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
    </Box>
  );
}
