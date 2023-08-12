"use client";
import mobileOurTeam_bg from "@/assets/image/mobile/mobileOurTeam-bg.svg";
import MentorInformation from "@/components/Modal/MentorInformation";
// import { teachers } from "@/utils/ourTeam";
import { teacherImageList } from "@/utils/ourTeam";

import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import SignCharacteristic from "./SignCharacteristic";
import { useSwiper } from "swiper/react";
import _ from "lodash";
import { getTeacherList } from "../../api/teacher.ts";
import arrow_normal from "../../assets/image/png/arrow_normal.png";
import arrow_active from "../../assets/image/png/arrow_active.png";
import {
  useActiveIndex,
  useActiveType,
  useComePage,
  useIsChrome,
  useOuterWidth,
  useThrottleFlag,
} from "@/state/application/hooks";
import { useAppDispatch } from "@/state/hooks";
import {
  setActiveIndex,
  setThrottleFlag,
  setComePage,
} from "@/state/application/reducer";
import Image, { StaticImageData } from "next/image";

const OurTeamBox = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
  @media (min-width: 768px) {
    margin-top: 100px;
    border-radius: 48px 48px 0px 0px;
  }
  @media not all and (min-width: 768px) {
    background: url(${mobileOurTeam_bg.src});
    background-size: cover;
  }
`;
const OurTeamBg = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    border-radius: 48px;
    background: rgba(238, 238, 238, 0.01);
  }
`;
const CardBox = styled.div`
  position: relative;
  cursor: pointer;
  width: 237px;
  height: 368px;
  display: flex;
  align-items: end;
  transition: all 150ms;
  background-size: contain;
  background-repeat: no-repeat;
  ::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #ececec 0%, rgba(236, 236, 236, 0) 100%);
  }
  @media not all and (min-width: 768px) {
    /* width: 154px;
    height: 239px; */
    width: 168px;
    height: 238px;
  }
`;
const CardFilterBox = styled.div`
  width: 237px;
  height: 50%;
  @media not all and (min-width: 768px) {
    width: 168px;
    height: 238px;
  }
`;
const NameOur = styled.p`
  margin-left: 4px;
  @media (min-width: 768px) {
    font-weight: 600;
    font-size: 36px;
    color: #00f;
    line-height: 120%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  @media not all and (min-width: 768px) {
    color: #00f;
    font-size: 24px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }
`;
const RollBox = styled.div`
  transition: all 500ms;
  /* transform: translateX(-1520px); */
  /* @media (min-width: 768px) {
    animation: teachersRoll 80s linear infinite;
    &.hover {
      animation-play-state: paused;
    }
    @keyframes teachersRoll {
      from {
        transform: translateX(0px);
      }
      to {
        transform: translateX(-7600px);
      }
    }
  } */
`;
const ButtonBox = styled.div`
  .normal-arrow {
    transition: 150ms all;
    cursor: pointer;
    &:hover {
      opacity: 0;
    }
  }
  .active-arrow {
    transition: 150ms all;
    cursor: pointer;

    opacity: 0;
    &:hover {
      opacity: 1;
    }
  }
`;
const Box = styled.div`
  .swiper-move-in-self {
    @media (min-width: 768px) {
      animation: swiper-move-in-self 1000ms cubic-bezier(0.69, 0, 0.37, 1) 800ms
        forwards;
    }
  }
  @keyframes swiper-move-in-self {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
interface OurTeamProps {
  setIsOpenCampus: Function;
  characteristicType: number;
  scrollTop: number;
  setScrollTop: Function;
  right: number;
  setRight: Function;
  setCharacteristicType: Function;
  musicGenre: number;
  setMusicGenre: Function;
}
export default function OurTeam({
  musicGenre,
  setIsOpenCampus,
  setMusicGenre,
  scrollTop,
  setScrollTop,
  right,
  setRight,
  characteristicType,
  setCharacteristicType,
}: OurTeamProps) {
  const swiper = useSwiper();
  const dispatch = useAppDispatch();
  const throttleFlag = useThrottleFlag();
  const innerWidth = useOuterWidth();
  const comePage = useComePage();
  const isChrome = useIsChrome();
  const [isOpen, setIsOpen] = useState<number>(0);
  const [textValue, setTextValue] = useState<number>(0);
  const [cardHover, setCardHover] = useState<string>("");
  const activeIndex = useActiveIndex();
  const activeType = useActiveType();
  const [teacherList, useTeacherList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    getTeacherFunc();
  }, []);
  const getTeacherFunc = useCallback(async () => {
    const data = await getTeacherList();
    useTeacherList(data);
  }, []);

  const nextPage = () => {
    if (currentPage === 4) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  const prePage = () => {
    if (currentPage === 0) {
      setCurrentPage(4);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    if (activeIndex === 3) {
      if (comePage === 2) {
        document.querySelector("#ourTeamBox")?.scrollTo({
          top: 20,
          behavior: "smooth",
        });
      } else {
        document.querySelector("#ourTeamBox")?.scrollTo({
          top: 1400,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  useEffect(() => {
    if (activeType == 0) {
      setRight(0);
      document.querySelector("#ourTeamBox")?.scrollTo({
        top: 1,
        behavior: "smooth",
      });
    } else if (activeType == 1) {
      document.querySelector("#ourTeamBox")?.scrollTo({
        top: 1400,
        behavior: "smooth",
      });
      setRight(0);
    } else if (activeType == 2) {
      setRight(1);
      document.querySelector("#ourTeamBox")?.scrollTo({
        top: 1400,
        behavior: "smooth",
      });
    }
  }, [activeType]);

  useEffect(() => {
    if (characteristicType !== 0) {
      document.querySelector("#ourTeamBox")?.scrollTo({
        top: 1400,
        behavior: "smooth",
      });
    }
  }, [characteristicType]);
  return (
    <Box>
      <div
        id="ourTeamBox"
        className={`md:h-screen md:pt-32 md:opacity-0 ${
          characteristicType === 0 ? "md:overflow-auto" : "md:overflow-hidden"
        }  ${comePage === 2 ? "swiper-move-in-self" : "swiper-move-in"}  `}
        onScroll={(e: any) => {
          console.log("🚀 ~ file: OurTeam.tsx:258 ~ e:", e.target.scrollTop);
          setScrollTop(e.target.scrollTop);
          if (throttleFlag) return;
          if (innerWidth > 768) {
            if (e.target.scrollTop === 0) {
              dispatch(setThrottleFlag(true));
              swiper.slideTo(2, 0);
              dispatch(setComePage(3));
              dispatch(setActiveIndex(2));
              setTimeout(() => {
                dispatch(setThrottleFlag(false));
              }, 1200);
            }
          }
        }}
      >
        <OurTeamBox>
          <div className="absolute rounded-t-[48px] z-[-1] flex items-center justify-center overflow-hidden max-md:hidden left-0 w-screen h-full">
            <video
              autoPlay
              muted
              loop
              className="w-screen min-w-full min-h-full h-full scale-150"
            >
              <source
                src={
                  isChrome ? "/video/OurTeam-bg.webm" : "/video/OurTeam-bg.mp4"
                }
                type={`${isChrome ? "video/webm" : " video/mp4"}`}
              ></source>
            </video>
          </div>
          <OurTeamBg>
            <div
              style={{
                background:
                  "linear-gradient(180deg, #D8CBE7 77.38%, rgba(207, 196, 219, 0.01) 96.35%)",
                // backdropFilter: "blur(50px)",
              }}
              className="max-md:text-center md:hidden max-md:sticky  pb-4 pt-[88px] z-50 max-md:top-0"
            >
              <p className=" font-extrabold max-md:text-[28px] text-[56px] leading-[120%] text-[#1a1a1a]">
                师资团队
              </p>
              <p className=" tracking-[0.51em] max-md:tracking-[7.14px] max-md:mt-3 max-md:text-[14px] font-normal text-[24px] mt-3 font-[Lexend] leading-[160%] text-[#1a1a1a]">
                OUR TEAM
              </p>
            </div>
            <div className="md:flex md:pt-[120px] md:w-[1200px] md:mx-auto justify-between items-center">
              <div className="max-md:hidden max-md:text-center">
                <p className=" font-extrabold max-md:text-[28px] text-[56px] leading-[120%] text-[#1a1a1a]">
                  师资团队
                </p>
                <p className=" tracking-[0.51em] max-md:tracking-[7.14px] max-md:mt-3 max-md:text-[14px] font-normal text-[24px] mt-3 font-[Lexend] leading-[160%] text-[#1a1a1a]">
                  OUR TEAM
                </p>
              </div>
              <div
                style={{ border: "1px solid rgba(26, 26, 26, 0.5)" }}
                className=" max-md:mx-4 gap-2  mt-8 max-md:mt-4 flex p-[15px]"
              >
                <div className="w-[119px] max-md:w-[99px] text-center">
                  <p className=" font-normal  text-[32px] max-md:text-[24px] font-[Lexend] leading-[100%] text-[#1a1a1a]">
                    8
                  </p>
                  <p className=" font-[300] text-[14px] mt-2 max-md:text-[12px] leading-[180%] text-[#1a1a1a]">
                    全职一线导师
                  </p>
                </div>
                <div className="w-[119px] max-md:w-[99px] text-center">
                  <p className=" font-normal max-md:text-[24px] text-[32px] font-[Lexend] leading-[100%] text-[#1a1a1a]">
                    150+
                  </p>
                  <p className=" font-[300] text-[14px] mt-2 max-md:text-[12px] leading-[180%] text-[#1a1a1a]">
                    兼职音乐导师
                  </p>
                </div>
                <div className="w-[119px] max-md:w-[99px] text-center">
                  <p className=" font-normal text-[32px] max-md:text-[24px] font-[Lexend] leading-[100%] text-[#1a1a1a]">
                    5
                  </p>
                  <p className=" font-[300] text-[14px] mt-2 max-md:text-[12px] leading-[180%] text-[#1a1a1a]">
                    资深留学规划师
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-screen md:gap-[67px] max-md:pb-[80px] overflow-hidden max-md:mt-10 md:py-20 md:pt-[32px]">
              <RollBox
                className={`flex ${cardHover}  max-md:w-[344px] max-md:mx-auto md:w-[15133px] max-md:flex-wrap max-md:justify-between max-md:gap-[8px] max-md:gap-y-[35px] md:gap-[67px]`}
                style={{
                  transform: `translateX(-${currentPage * 1520}px)`,
                }}
              >
                {teacherList.map((el: any, index: number) => (
                  <CardBox
                    onMouseEnter={() => {
                      setCardHover("hover");
                    }}
                    onMouseLeave={() => {
                      setCardHover("");
                    }}
                    onClick={() => {
                      setIsOpen(1);
                      setTextValue(el);
                    }}
                    style={{
                      backgroundImage: `url(${
                        (teacherImageList as unknown as StaticImageData[])[
                          el.image
                        ].src
                      })`,
                    }}
                    key={`${el.name}-${index}-teachers`}
                    className={`max-md:!bg-cover md:hover:translate-y-[-16px]`}
                  >
                    <CardFilterBox className="relative">
                      <div className=" pt-6 pl-5  pr-4 max-md:p-3 max-md:w-[168px] max-md:h-[137px] w-[253px] absolute max-md:bottom-[-27px] bottom-0 md:right-[-51px] h-[184px] md:ml-[51px] bg-[#FFFFFF]">
                        <NameOur>{el.name}</NameOur>
                        <p className="font-normal md:ml-1 text-[16px] max-md:text-[12px] mt-2 max-md:mb-2 mb-4 text-ellipsis overflow-hidden line-clamp-1 leading-[120%] uppercase text-[#1a1a1a]">
                          {el.jobTitle}
                        </p>
                        <p className="font-light md:ml-1 max-md:ml-[-12px] max-md:w-[156px] max-md:scale-[0.83333] text-[12px] max-md:leading-[18px] text-ellipsis overflow-hidden line-clamp-3 max-md:opacity-70 leading-[180%] uppercase opacity-80 text-[#1a1a1a]">
                          {el.work}
                          {}
                        </p>
                      </div>
                    </CardFilterBox>
                  </CardBox>
                ))}
                {teacherList.map((el: any, index: number) => (
                  <CardBox
                    onMouseEnter={() => {
                      setCardHover("hover");
                    }}
                    onMouseLeave={() => {
                      setCardHover("");
                    }}
                    onClick={() => {
                      setIsOpen(1);
                      setTextValue(el);
                    }}
                    style={{
                      backgroundImage: `url(${
                        (teacherImageList as unknown as StaticImageData[])[
                          el.image
                        ].src
                      })`,
                    }}
                    key={`${el.name}----${index}-teachers`}
                    className={`max-md:!hidden md:hover:translate-y-[-16px]`}
                  >
                    <CardFilterBox className="relative">
                      <div className="pt-6 pl-5  pr-4 max-md:p-3 max-md:w-[154px] max-md:h-[137px] w-[253px] absolute max-md:right-[-12px] bottom-0 right-[-51px] h-[184px] ml-[51px] bg-[#FFFFFF]">
                        <NameOur>{el.name}</NameOur>
                        <p className="font-normal ml-1 text-[16px] max-md:text-[12px] mt-2 max-md:mb-2 mb-4 leading-[120%] uppercase text-[#1a1a1a]">
                          {el.jobTitle}
                        </p>
                        <p className="font-light ml-1 text-[12px] max-md:leading-[18px] max-md:opacity-70 leading-[180%] uppercase opacity-80 text-[#1a1a1a]">
                          {el.work}
                          {}
                        </p>
                      </div>
                    </CardFilterBox>
                  </CardBox>
                ))}
              </RollBox>
            </div>
            <ButtonBox className="flex items-center justify-center gap-[64px] relative  max-md:hidden">
              <div className="flex relative" onClick={prePage}>
                <Image
                  src={arrow_normal}
                  alt=""
                  className="normal-arrow  w-[48px]"
                ></Image>
                <Image
                  src={arrow_active}
                  alt=""
                  className="active-arrow absolute w-[48px]"
                ></Image>
              </div>
              <div className="flex relative" onClick={nextPage}>
                <Image
                  src={arrow_normal}
                  alt=""
                  className="flex rotate-[180deg] normal-arrow w-[48px] "
                ></Image>
                <Image
                  src={arrow_active}
                  alt=""
                  className="flex rotate-[180deg] active-arrow  absolute"
                ></Image>
              </div>
            </ButtonBox>
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(26, 26, 26, 0.00) 0%, #1A1A1A 100%)",
              }}
              className="w-screen z-[1001] relative max-md:h-[300px] h-[228px]"
            ></div>
            <div
              style={{
                background: "#1A1A1A",
              }}
              className="w-screen z-[1001] relative max-md:h-[80px] md:hidden"
            ></div>
          </OurTeamBg>
          <MentorInformation
            textValue={textValue}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </OurTeamBox>
        <SignCharacteristic
          musicGenre={musicGenre}
          setMusicGenre={setMusicGenre}
          right={right}
          scrollTop={scrollTop}
          setIsOpenCampus={setIsOpenCampus}
          setRight={setRight}
          innerWidth={innerWidth}
          characteristicType={characteristicType}
          setCharacteristicType={setCharacteristicType}
        />
      </div>
      <div className={`${comePage === 2 ? "rocket-in" : ""}`}></div>
    </Box>
  );
}
