"use client";
import mobileOurTeam_bg from "@/assets/image/mobile/mobileOurTeam-bg.svg";
import MentorInformation from "@/components/Modal/MentorInformation";
import { teachers } from "@/utils/ourTeam";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SignCharacteristic from "./SignCharacteristic";
import { useSwiper } from "swiper/react";
import _ from "lodash";
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
  setAboutOrCorporation,
} from "@/state/application/reducer";

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
    background: linear-gradient(
      0deg,
      #ececec 0%,
      rgba(236, 236, 236, 0) 100%
    );
  }
  @media not all and (min-width: 768px) {
    width: 154px;
    height: 239px;
  }
`;
const CardFilterBox = styled.div`
  width: 237px;
  height: 50%;
  @media not all and (min-width: 768px) {
    width: 154px;
    height: 239px;
  }
`;
const NameOur = styled.p`
  margin-left: 4px;
  @media (min-width: 768px) {
    font-family: "General Sans";
    font-style: italic;
    font-weight: 700;
    font-size: 36px;
    line-height: 120%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    -webkit-text-stroke: 1px #0000ff;
    text-shadow: 4px 0px 0px #0000ff;
  }
  @media not all and (min-width: 768px) {
    color: #00f;
    font-size: 24px;
    font-family: "General Sans";
    font-style: italic;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }
`;
const RollBox = styled.div`
  @media (min-width: 768px) {
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
  scrollTop: number
  setScrollTop: Function
  right: number,
  setRight: Function,
  setCharacteristicType: Function;
  musicGenre: number
  setMusicGenre: Function
}
export default function OurTeam({ musicGenre, setIsOpenCampus, setMusicGenre, scrollTop, setScrollTop, right, setRight, characteristicType, setCharacteristicType }: OurTeamProps) {
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
        className={`md:h-screen md:pt-32 md:opacity-0 md:pb-[300px] ${characteristicType === 0 ? "md:overflow-auto" : "md:overflow-hidden"}  ${comePage === 2 ? "swiper-move-in-self" : "swiper-move-in"}  `}
        onScroll={(e: any) => {
          setScrollTop(e.target.scrollTop)
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
            <div style={{
              background: 'linear-gradient(180deg, rgba(207, 196, 219, 0.00) 0%, rgba(207, 196, 219, 0.40) 100%)',
              backdropFilter: 'blur(40px)'
            }} className="max-md:text-center md:hidden max-md:sticky  pb-4 pt-[88px] z-50 max-md:top-0">
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
                    6
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
            <div className="flex w-screen md:gap-[67px] max-md:pb-[80px] overflow-hidden max-md:mt-10 md:py-20">
              <RollBox
                className={`flex ${cardHover} max-md:w-screen md:w-[15133px] max-md:pl-4 max-md:pr-[29px] max-md:flex-wrap max-md:justify-between max-md:gap-x-[22px] max-md:gap-y-[24px] md:gap-[67px]`}
              >
                {teachers.map((el: any, index: number) => (
                  <CardBox
                    onMouseEnter={() => {
                      setCardHover("hover");
                    }}
                    onMouseLeave={() => {
                      setCardHover("");
                    }}
                    onClick={() => {
                      setIsOpen(1);
                      setTextValue(el.value);
                    }}
                    style={{ backgroundImage: `url(${el.image.src})` }}
                    key={`${el.name}-${index}-teachers`}
                    className={`md:hover:translate-y-[-16px]`}
                  >
                    <CardFilterBox className="relative">
                      <div className="pt-6 pl-5  pr-4 max-md:p-3 max-md:w-[154px] max-md:h-[137px] w-[253px] absolute bottom-0 max-md:right-[-12px] right-[-51px] h-[184px] ml-[51px] bg-[#FFFFFF]">
                        <NameOur>{el.name}</NameOur>
                        <p className="font-normal md:ml-1 text-[16px] max-md:text-[12px] mt-2 max-md:mb-2 mb-4 text-ellipsis overflow-hidden line-clamp-1 leading-[120%] uppercase text-[#1a1a1a]">
                          {el.position}
                        </p>
                        <p className="font-light md:ml-1 max-md:ml-[-12px] max-md:w-[156px] max-md:scale-[0.83333] text-[12px] max-md:leading-[18px] max-md:opacity-70 leading-[180%] uppercase opacity-80 text-[#1a1a1a]">
                          {el.works}
                        </p>
                      </div>
                    </CardFilterBox>
                  </CardBox>
                ))}
                {teachers.map((el: any, index: number) => (
                  <CardBox
                    onMouseEnter={() => {
                      setCardHover("hover");
                    }}
                    onMouseLeave={() => {
                      setCardHover("");
                    }}
                    onClick={() => {
                      setIsOpen(1);
                      setTextValue(el.value);
                    }}
                    style={{ backgroundImage: `url(${el.image.src})` }}
                    key={`${el.name}----${index}-teachers`}
                    className={`max-md:!hidden md:hover:translate-y-[-16px]`}
                  >
                    <CardFilterBox className="relative">
                      <div className="pt-6 pl-5  pr-4 max-md:p-3 max-md:w-[154px] max-md:h-[137px] w-[253px] absolute bottom-0 max-md:right-[-12px] right-[-51px] h-[184px] ml-[51px] bg-[#FFFFFF]">
                        <NameOur>{el.name}</NameOur>
                        <p className="font-normal ml-1 text-[16px] max-md:text-[12px] mt-2 max-md:mb-2 mb-4 leading-[120%] uppercase text-[#1a1a1a]">
                          {el.position}
                        </p>
                        <p className="font-light ml-1 text-[12px] max-md:leading-[18px] max-md:opacity-70 leading-[180%] uppercase opacity-80 text-[#1a1a1a]">
                          {el.works}
                        </p>
                      </div>
                    </CardFilterBox>
                  </CardBox>
                ))}
              </RollBox>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(26, 26, 26, 0.00) 0%, #1A1A1A 100%)",
              }}
              className="w-screen z-[1001] relative max-md:h-[300px] h-[228px]"
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
