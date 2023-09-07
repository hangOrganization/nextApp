"use client";
import Image from "next/image";
import _ from "lodash";
import products_right from "@/assets/image/svg/icon-products-right.svg";
import mobile_shadow_4 from "@/assets/image/mobile-shadow/mobile-shadow-4.svg";
import mobile_shadow_5 from "@/assets/image/mobile-shadow/mobile-shadow-5.svg";
import characteristic_bg_1 from "@/assets/image/svg/characteristic-bg-1.svg";
import characteristic_bg_2 from "@/assets/image/svg/characteristic-bg-2.svg";
import mobile_SignCharacteristic from "@/assets/image/mobile/mobile-SignCharacteristic.svg";
import signCharacteristic_title from "@/assets/image/mobile/mobile-signCharacteristic-title.svg";
import signCharacteristic_active from "@/assets/image/mobile/icon-mobile-signCharacteristic-active.svg";
import mobile_signCharacteristic_bg from "@/assets/image/mobile/mobile-signCharacteristic-bg.svg";
import characteristic_bg_logo from "@/assets/image/svg/characteristic-bg-logo.png";
import { CampusEnvironmentBg } from "@/utils/campusEnvironmentList";
import signCharacteristic_bg from "@/assets/image/svg/signCharacteristic-bg.svg";
import styled from "styled-components";
import { useEffect, useMemo, useRef, useState } from "react";
import { useAppDispatch } from "@/state/hooks";
import { useActiveType, useThrottleFlag } from "@/state/application/hooks";
import {
  setAboutOrCorporation,
  setActiveIndex,
  setComePage,
  setThrottleFlag,
} from "@/state/application/reducer";
import { useSwiper } from "swiper/react";
import TitleBeam from "@/components/TitleBeam";
import { dataFrom } from ".";

const SignBox = styled.div`
  z-index: 2;
  width: 100vw;
`;
const MaskBox = styled.div`
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 100%;
  height: 230px;
  background: linear-gradient(
    180deg,
    rgb(26, 26, 26, 0.1) 1%,
    rgb(26, 26, 26, 0.5) 10%,
    rgb(26, 26, 26, 1) 40%,
    rgb(26, 26, 26, 1) 100%
  );
  z-index: 10000;
`;
const Box = styled.div`
  @media not all and (min-width: 768px) {
    width: 100vw;
    /* background: url(${mobile_SignCharacteristic.src}),
      linear-gradient(180deg, rgba(26, 26, 26, 0) 0%, #1a1a1a 9.17%) !important; */
    background-size: cover !important;
  }

  @media not all and (min-width: 768px) {
    .transfrom-mobile1 {
      transition: all 500ms;
      transform: translateX(-100%);
    }
    .transfrom-mobile2 {
      transform: translateX(0);
      transition: all 500ms;
    }
  }
`;
const SignCharacteristicBox = styled.div`
  @media (min-width: 768px) {
    width: 310px;
    height: 385px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${signCharacteristic_bg.src});
  }
  @media not all and (min-width: 768px) {
    background: url(${mobile_signCharacteristic_bg.src});
  }
`;
const ButtonBox = styled.div`
  @media (min-width: 768px) {
    cursor: pointer;
    border: 1px solid #ffffff;
    .hover {
      border: 1px solid #ffffff;
      background: transparent;
    }
    &:hover {
      color: #1a1a1a;
      background: #ffffff;
      mix-blend-mode: difference;
      .hover {
        border: 1px solid #1a1a1a;
        background: #ffffff;
        background: #1a1a1a;
      }
      path {
        stroke: #ffffff;
      }
    }
  }
  @media not all and (min-width: 768px) {
    border-radius: 64px;
    color: #ccc;
    font-size: 12px;
    /* font-family: "Alibaba PuHuiTi 2.0"; */
    line-height: 120%;
    text-transform: uppercase;
    padding: 12px 11px 12px 15px;
    border: 1px solid rgba(204, 204, 204, 0.5);
  }
`;
interface SignCharacteristicProps {
  characteristicType: number;
  innerWidth: number;
  scrollTop: number;
  setIsOpenCampus: Function;
  musicGenre: number;
  setMusicGenre: Function;
  setCharacteristicType: Function;
  right: number;
  setRight: Function;
  dataFrom?: dataFrom;
}
export default function SignCharacteristic({
  innerWidth,
  setRight,
  scrollTop,
  right,
  dataFrom,
  musicGenre,
  setMusicGenre,
  characteristicType,
  setCharacteristicType,
  setIsOpenCampus,
}: SignCharacteristicProps) {
  const dispatch = useAppDispatch();
  let time: any = "";
  const swiper = useSwiper();
  const throttleFlag = useThrottleFlag();
  const activeType = useActiveType();

  const aboutUs = useMemo(() => {
    return {
      backgroundEnhancement:
        dataFrom?.features.backgroundEnhancement.split("\n"),
      configuration: dataFrom?.features.configuration.split("\n"),
      exquisiteTeaching: dataFrom?.features.exquisiteTeaching.split("\n"),
      seniorTutor: dataFrom?.features.seniorTutor.split("\n"),
      aboutUs: dataFrom?.aboutUs.aboutUs.split("\n"),
      developmentHistory: dataFrom?.aboutUs.developmentHistory.split("\n"),
    };
  }, [dataFrom]);
  console.log(
    "🚀 ~ file: SignCharacteristic.tsx:156 ~ aboutUs ~ aboutUs:",
    aboutUs
  );
  const [mobileRight, setMobileRight] = useState<number>(0);
  const boxRef = useRef<any>(null);
  // useEffect(() => {
  //   if (activeType == 1) {
  //     console.log(123132);
  //     // document.querySelector("#ourTeamBox")?.scrollTo({
  //     //   top: 1000,
  //     //   behavior: "smooth",
  //     // });
  //     setTimeout(() => {
  //       boxRef.current.scrollIntoView({ behavior: "smooth" });
  //     }, 500);
  //     setRight(0);
  //   } else if (activeType == 2) {
  //     console.log(123132);
  //     setTimeout(() => {
  //       boxRef.current.scrollIntoView({ behavior: "smooth" });
  //     }, 500);

  //     // document.querySelector("#ourTeamBox")?.scrollTo({
  //     //   top: 1000,
  //     //   behavior: "smooth",
  //     // });
  //     setRight(1);
  //   }
  // }, [activeType]);

  return (
    <Box className={`flex w-screen items-center z-50 md:overflow-hidden`}>
      <div className="flex relative" ref={boxRef}>
        <SignBox
          className={`md:flex md:h-[1050px] relative w-screen items-center justify-center`}
          onWheel={(e: any) => {
            if (scrollTop > 1200) {
              if (innerWidth > 768) {
                if (throttleFlag) {
                  dispatch(setThrottleFlag(true));
                  for (let i = 0; i < 10000; i++) {
                    clearTimeout(i);
                  }
                  time = setTimeout(() => {
                    dispatch(setThrottleFlag(false));
                  }, 100);
                } else {
                  dispatch(setThrottleFlag(true));
                  if (right === 0) {
                    if (characteristicType === 0) {
                      if (e.deltaY > 0) {
                        setCharacteristicType(1);
                      }
                    } else if (characteristicType === 3) {
                      if (e.deltaY < 0) {
                        setCharacteristicType(2);
                      } else {
                        setRight(1);
                        dispatch(setAboutOrCorporation(2));
                      }
                    } else {
                      if (e.deltaY < 0) {
                        setCharacteristicType(characteristicType - 1);
                      } else {
                        setCharacteristicType(characteristicType + 1);
                      }
                    }
                  } else {
                    if (right === 1) {
                      if (e.deltaY < 0) {
                        setRight(0);
                        dispatch(setAboutOrCorporation(1));
                      } else {
                        setRight(2);
                        dispatch(setAboutOrCorporation(2));
                      }
                    } else {
                      if (e.deltaY < 0) {
                        setRight(1);
                        dispatch(setAboutOrCorporation(2));
                      } else {
                        swiper.slideTo(4, 1000);
                        dispatch(setComePage(3));
                        dispatch(setActiveIndex(4));
                      }
                    }
                  }
                  time = setTimeout(() => {
                    dispatch(setThrottleFlag(false));
                  }, 100);
                }
              }
            }
          }}
        >
          <div className={`max-md:hidden absolute  top-0 left-0 w-full h-full`}>
            <div className="absolute top-0 left-0 flex justify-center overflow-hidden items-center w-full h-full">
              <CampusEnvironmentBg
                className={`${
                  right === 0
                    ? "h-0 rounded-full w-0"
                    : " opacity-100 rounded-[0] w-full h-full"
                } transition-all !bg-no-repeat opacity-0 bg-blend-lighten ease-[cubic-bezier(0.24,0,0.58,1)] duration-2000`}
              ></CampusEnvironmentBg>
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.90) 51.71%, #1A1A1A 100%), radial-gradient(50% 50.00% at 50% 50.00%, rgba(26, 26, 26, 0.00) 0%, rgba(26, 26, 26, 0.50) 100%)",
                  boxShadow: "0px 0px 200px 40px #1A1A1A inset",
                }}
                className="absolute top-0 left-0 w-full h-full"
              ></div>
            </div>
            <Image
              className={`absolute top-[-200px]
              ${
                characteristicType === 1
                  ? " top-[-220px]"
                  : characteristicType === 2
                  ? " top-[-240px]"
                  : characteristicType === 3
                  ? " top-[-260px]"
                  : ""
              }
               transition-all duration-1000 max-w-[0px] min-h-full ${
                 right !== 0 ? "" : "max-w-[1000px]"
               } max-md:hidden right-0`}
              src={characteristic_bg_1}
              alt=""
            />
            <Image
              className={`absolute top-[-200px]
               transition-all duration-1000 max-w-[0px] min-h-full ${
                 right === 0 ? "" : "max-w-[1000px]"
               } max-md:hidden right-0`}
              src={characteristic_bg_1}
              alt=""
            />
            <Image
              className={`absolute bottom-[-100px] transition-all duration-1000 max-w-[0px] min-h-full ${
                right !== 0 ? "" : "max-w-[1000px]"
              }  max-md:hidden left-0`}
              src={characteristic_bg_2}
              alt=""
            />
            <Image
              className={`absolute transition-all  bottom-[52px] duration-1000  ${
                right !== 0
                  ? " right-[-350px]"
                  : characteristicType === 1
                  ? " bottom-[85px]"
                  : characteristicType === 2
                  ? " bottom-[116px]"
                  : characteristicType === 3
                  ? " bottom-[148px]"
                  : " bottom-[52px]"
              }  max-md:hidden right-0 `}
              src={characteristic_bg_logo}
              alt=""
            />
          </div>
          <div
            className={`md:flex relative md:w-[1200px] w-screen items-center `}
          >
            <div className=" absolute z-[-1] w-full h-full md:hidden top-0 left-0">
              <Image
                className=" absolute right-0 top-[400px]"
                src={mobile_shadow_4}
                alt=""
              />
              <Image
                className=" absolute left-0 top-[1200px]"
                src={mobile_shadow_5}
                alt=""
              />
              <Image
                className=" absolute right-[0px] w-[150px] top-[1780px]"
                src={mobile_shadow_4}
                alt=""
              />
            </div>
            <SignCharacteristicBox
              className={` max-md:sticky z-20 max-md:top-[-50px] ${
                right !== 0 ? " translate-x-[908px]" : "translate-x-[0px]"
              } max-md:pl-[68px] max-md:pb-[72px] max-md:pr-[77px] max-md:pt-[135px] transition-all duration-1000`}
            >
              <Image
                className="md:hidden absolute left-0 z-[-1] top-[80px]"
                src={mobile_shadow_5}
                alt=""
              />
              <div>
                <div className="max-md:flex justify-between">
                  <div className="w-[221px] relative max-md:hidden h-[67px]">
                    <p
                      className={`${
                        right === 0 ? "opacity-100" : ""
                      } transition-all absolute top-0 left-0 whitespace-nowrap duration-1000 opacity-0 font-light text-[56px] max-md:text-[24px] leading-[120%]`}
                    >
                      公司特色
                    </p>
                    <p
                      className={`${
                        right === 1 ? " opacity-100" : ""
                      } transition-all absolute top-0 left-0 whitespace-nowrap duration-1000 opacity-0 font-light text-[56px] max-md:text-[24px] leading-[120%]`}
                    >
                      关于我们
                    </p>
                    <p
                      className={`${
                        right === 2 ? " opacity-100" : ""
                      } transition-all absolute top-0 left-0 whitespace-nowrap duration-1000 opacity-0 font-light text-[56px] max-md:text-[24px] leading-[120%]`}
                    >
                      发展历程
                    </p>
                  </div>
                  <a
                    onClick={() => {
                      setMobileRight(0);
                      window.scrollTo({
                        top:
                          musicGenre === 1
                            ? 9000
                            : musicGenre === 2
                            ? 8850
                            : 8450,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <p
                      className={` transition-all duration-500 whitespace-nowrap font-light text-[56px] max-md:text-[24px]  md:hidden leading-[120%] ${
                        mobileRight == 0 ? "font-[600]" : "font-light"
                      }`}
                    >
                      公司特色
                    </p>
                  </a>
                  <p
                    className={` transition-all duration-500 whitespace-nowrap font-light text-[56px] max-md:text-[24px]  md:hidden leading-[120%] ${
                      mobileRight == 1 ? "font-[600]" : "font-light"
                    }`}
                    onClick={() => {
                      setMobileRight(1);
                      window.scrollTo({
                        top:
                          musicGenre === 1
                            ? 9000
                            : musicGenre === 2
                            ? 8850
                            : 8450,
                        behavior: "smooth",
                      });
                    }}
                  >
                    关于我们
                  </p>
                </div>
                <div className="mt-[18px] md:hidden relative h-2 w-full">
                  <Image
                    className={`absolute transition-all duration-500 ${
                      mobileRight === 0
                        ? "translate-x-[16px] left-0"
                        : "translate-x-[-125%] left-[100%]"
                    }`}
                    src={signCharacteristic_active}
                    alt=""
                  />
                </div>
                {/* <p
                  className={` max-md:hidden uppercase leading-[160%] font-extralight font-[Lexend] text-[22px] ${right !== 0
                    ? right === 1
                      ? "tracking-[15.18px]"
                      : "tracking-[2.2px]"
                    : "tracking-[0.53em]"
                    }  opacity-60 `}
                >{`${right !== 0
                  ? right === 1
                    ? "ABOUT US"
                    : "Development Path"
                  : "Why SIGN?"
                  }`}</p> */}
                <div className="w-[222px] mt-4 text-center relative max-md:hidden h-[35px]">
                  <p
                    className={`${
                      right === 0 ? "opacity-60" : ""
                    } tracking-[11px] whitespace-nowrap transition-all absolute top-0 left-0 duration-1000 opacity-0 uppercase leading-[160%] font-extralight font-[Lexend] text-[22px]`}
                  >
                    Why SIGN?
                  </p>
                  <p
                    className={`${
                      right === 1 ? " opacity-60" : ""
                    } tracking-[15px] whitespace-nowrap transition-all absolute top-0 left-0 duration-1000 opacity-0 uppercase leading-[160%] font-extralight font-[Lexend] text-[22px]`}
                  >
                    ABOUT US
                  </p>
                  <p
                    className={`${
                      right === 2 ? " opacity-60" : ""
                    } tracking-[2px] whitespace-nowrap transition-all absolute top-0 left-0 duration-1000 opacity-0 uppercase leading-[160%] font-extralight font-[Lexend] text-[22px]`}
                  >
                    Development Path
                  </p>
                </div>
              </div>
            </SignCharacteristicBox>
            <MaskBox className="md:hidden"></MaskBox>
            <div
              className={`transition-all max-md:pb-[210px] duration-1000 md:flex items-center ${
                right !== 0
                  ? " flex-row-reverse translate-x-[510px] md:opacity-0"
                  : "md:opacity-100 translate-x-[0px]"
              }`}
            >
              <div
                className={` max-md:overflow-hidden transition-all duration-1000 relative `}
              >
                <div
                  className={`md:ml-[202px]  max-md:w-[200%] max-md:m-auto  max-md:flex max-md:justify-between `}
                >
                  <div
                    id="anchorname"
                    className={`${
                      mobileRight == 0
                        ? "transfrom-mobile2"
                        : "transfrom-mobile1"
                    } md:h-[488px]  max-md:w-[100%]  max-md:px-6 `}
                  >
                    <div
                      className={`transition-all duration-1000 ${
                        characteristicType === 1
                          ? "translate-y-[-488px]"
                          : characteristicType === 2
                          ? "translate-y-[-976px]"
                          : characteristicType === 3
                          ? "translate-y-[-1464px]"
                          : ""
                      } ${mobileRight === 0 ? "" : "max-md:h-0"}`}
                    >
                      <div className="md:h-[488px] md:w-[680px] max-md:mt-11 flex flex-col justify-center">
                        <div className="flex">
                          <p className="text-[40px] mr-[26px] max-md:mr-[16px]  font-normal leading-[120%] max-md:text-[22px] text-[#FF4B00]">
                            资深导师团队
                          </p>
                          <Image
                            className="md:hidden max-md:w-[94px] max-md:h-6"
                            src={signCharacteristic_title}
                            alt=""
                          />
                          <TitleBeam
                            type={`${
                              characteristicType === 0 ? "open" : "down"
                            }`}
                          />
                        </div>
                        <div
                          className={`md:w-[488px] md:opacity-0 duration-1000 transition-all ${
                            characteristicType === 0 ? "md:opacity-100" : ""
                          } md:opacity-0 mt-12`}
                        >
                          {aboutUs.seniorTutor?.map(
                            (el: string, index: number) => (
                              <p
                                key={`${index}+aboutUs1111`}
                                className="text-[14px] mt-[31px] max-md:hidden max-md:leading-[200%] font-light leading-[220%] opacity-70"
                              >
                                {el}
                              </p>
                            )
                          )}
                          {aboutUs.seniorTutor?.map(
                            (el: string, index: number) => (
                              <p
                                key={`${index}+aboutUs`}
                                className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3  max-md:mb-2  font-light leading-[220%] opacity-70"
                              >
                                {el}
                              </p>
                            )
                          )}
                        </div>
                      </div>
                      <div
                        className={`md:h-[488px] duration-1000 md:opacity-0 transition-all md:w-[680px] max-md:mt-16 flex ${
                          characteristicType === 1 ? "md:opacity-100" : ""
                        } flex-col justify-center`}
                      >
                        <div className="flex max-md:mb-12 ">
                          <p className="text-[40px] mr-[26px] max-md:mr-[16px] font-normal leading-[120%] max-md:text-[22px] text-[#FF4B00]">
                            独家顶级设备配置
                          </p>
                          <Image
                            className="md:hidden max-md:w-[94px] max-md:h-6"
                            src={signCharacteristic_title}
                            alt=""
                          />
                          <TitleBeam
                            type={`${
                              characteristicType === 1 ? "open" : "down"
                            }`}
                          />
                        </div>
                        <p className="text-[14px] max-md:hidden md:w-[488px] mt-12 font-light leading-[320%] opacity-70">
                          {aboutUs.configuration?.map(
                            (el: string, index: number) => (
                              <span
                                className="block"
                                key={`1111${index}+configuration`}
                              >
                                {el}
                                <br />
                              </span>
                            )
                          )}
                        </p>
                        {aboutUs.configuration?.map(
                          (el: string, index: number) => (
                            <p
                              key={`${index}--configuration`}
                              className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3  max-md:mb-2    font-light leading-[220%] opacity-70"
                            >
                              {el}
                            </p>
                          )
                        )}
                      </div>
                      <div
                        className={`md:h-[488px] md:opacity-0 duration-1000 transition-all md:w-[680px] ${
                          characteristicType === 2 ? "md:opacity-100" : ""
                        } max-md:mt-16 flex flex-col justify-center`}
                      >
                        <div className="flex max-md:mb-10 ">
                          <p className="text-[40px] mr-[26px] max-md:mr-[16px] font-normal leading-[120%] max-md:text-[22px] text-[#FF4B00]">
                            高质量高效率精致教学
                          </p>
                          <Image
                            className="md:hidden max-md:w-[94px] max-md:h-6"
                            src={signCharacteristic_title}
                            alt=""
                          />
                          <TitleBeam
                            type={`${
                              characteristicType === 2 ? "open" : "down"
                            }`}
                          />
                        </div>
                        <p className="text-[14px] max-md:hidden md:w-[488px] mt-12 font-light leading-[320%] opacity-70">
                          {aboutUs.exquisiteTeaching?.map(
                            (el: string, index: number) => (
                              <span key={`${index}exquisiteTeaching`}>
                                {el}
                                <br />
                              </span>
                            )
                          )}
                        </p>
                        {aboutUs.exquisiteTeaching?.map(
                          (el: string, index: number) => (
                            <p
                              key={`${index}exquisiteTeaching111`}
                              className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3  max-md:mb-2 font-light leading-[220%] opacity-70"
                            >
                              {el}
                            </p>
                          )
                        )}
                      </div>
                      <div
                        className={`md:h-[488px] ${
                          characteristicType === 3 ? "md:opacity-100" : ""
                        } md:w-[680px] max-md:mt-20 duration-1000 transition-all flex md:opacity-0 flex-col justify-center`}
                      >
                        <div className="flex">
                          <p className="text-[40px] mr-[26px] max-md:mr-[16px] font-normal leading-[120%] max-md:text-[22px] text-[#FF4B00]">
                            产学结合&背景提升
                          </p>
                          <Image
                            className="md:hidden max-md:w-[94px] max-md:h-6"
                            src={signCharacteristic_title}
                            alt=""
                          />
                          <TitleBeam
                            type={`${
                              characteristicType === 3 ? "open" : "down"
                            }`}
                          />
                        </div>
                        <p className="text-[14px] md:w-[488px] max-md:text-[13px] max-md:leading-[200%]  mt-12 font-light leading-[220%] opacity-70">
                          {aboutUs.backgroundEnhancement?.map(
                            (el: string, index: number) => (
                              <p
                                className="mb-3  max-md:mb-2"
                                key={`${index}-backgroundEnhancement`}
                              >
                                {el}
                              </p>
                            )
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      mobileRight == 1
                        ? "transfrom-mobile1"
                        : "transfrom-mobile2"
                    } md:hidden  max-md:w-[100%] relative mt-[51px] px-6 overflow-hidden`}
                  >
                    {aboutUs.seniorTutor?.map((el: string, index: number) => (
                      <p
                        key={`${index}-seniorTutor-m`}
                        className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-5 max-md:mb-2 font-light leading-[220%] opacity-70"
                      >
                        {el}
                      </p>
                    ))}
                    {aboutUs.developmentHistory?.map(
                      (el: string, index: number) => (
                        <p
                          key={`${index}+developmentHistory---`}
                          className={`text-[14px]  md:hidden max-md:text-[13px] max-md:leading-[200%] mb-5  max-md:mb-2  font-light leading-[220%] opacity-70`}
                        >
                          {el}
                        </p>
                      )
                    )}
                    <ButtonBox
                      className="mt-[68px] mx-auto w-[134px] whitespace-nowrap leading-[120%] font-light flex items-center"
                      onClick={() => setIsOpenCampus(1)}
                    >
                      了解校区环境
                      <div
                        style={{ border: "1px solid #CCC" }}
                        className="w-6 hover ml-2 items-center justify-center flex rounded-full h-6"
                      >
                        <svg
                          width="15"
                          height="14"
                          viewBox="0 0 15 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 13C7 13 9.35294 7 15 7C9.35294 7 7 1 7 1"
                            stroke="#CCCCCC"
                          />
                          <path d="M14 7L0 7" stroke="#CCCCCC" />
                        </svg>
                      </div>
                    </ButtonBox>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={` transition-all duration-1000 ${
                right === 0
                  ? "left-[-650px] opacity-0"
                  : "left-[120px] opacity-100"
              } absolute left-[-650px] max-md:hidden mt-12`}
            >
              <div className=" flex items-center">
                <div className={`h-[457px] max-md:hidden overflow-hidden`}>
                  <div
                    className={` transition-all duration-1000 ${
                      right === 2 ? "translate-y-[-457px]" : "translate-y-[0px]"
                    } `}
                  >
                    <Image className="rotate-180" src={products_right} alt="" />
                    <Image className="rotate-180" src={products_right} alt="" />
                    <Image className="rotate-180" src={products_right} alt="" />
                    <Image className="rotate-180" src={products_right} alt="" />
                  </div>
                </div>
                <div className="ml-20 h-[420px] overflow-hidden w-[599px]">
                  <div
                    className={` transition-all duration-1000 ${
                      right === 2
                        ? " translate-y-[-420px]"
                        : "translate-y-[0px]"
                    }`}
                  >
                    <div
                      className={`h-[420px] opacity-0 transition-all duration-1000 ${
                        right === 2 ? "" : "opacity-100"
                      }`}
                    >
                      {aboutUs.aboutUs?.map((el: string, index: number) => (
                        <p
                          key={`${index}-aboutUs.aboutUs-0-`}
                          className={`text-[14px] ${
                            index < aboutUs.aboutUs.length ? "mb-[31px]" : ""
                          } font-light leading-[220%] opacity-70`}
                        >
                          {el}
                        </p>
                      ))}
                    </div>
                    <div
                      className={`h-[420px] opacity-0 transition-all duration-1000 ${
                        right === 1 ? "" : "opacity-100"
                      } flex justify-center flex-col`}
                    >
                      {aboutUs.developmentHistory?.map(
                        (el: string, index: number) => (
                          <p
                            key={`${index}-developmentHistory`}
                            className="text-[14px] font-light leading-[320%] opacity-70"
                          >
                            {el}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <ButtonBox
                className="p-4 ml-[96px] mt-[68px] gap-4 transition-all duration-300 hover:gap-8 text-[16px] leading-[120%] font-normal pl-[32px] pr-[16px] inline-flex items-center rounded-[64px]"
                onClick={() => setIsOpenCampus(1)}
              >
                了解校区环境
                <div className="w-[36px] hover items-center justify-center flex rounded-full h-[36px]">
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 15C9 15 11.9412 8 19 8C11.9412 8 9 1 9 1"
                      stroke="white"
                      strokeWidth="1.6"
                    />
                    <path d="M18 8L0 8" stroke="white" strokeWidth="1.6" />
                  </svg>
                </div>
              </ButtonBox>
            </div>
            <div
              className={`h-[457px] ${
                right === 0 ? "" : "md:hidden"
              } max-md:hidden overflow-hidden`}
            >
              <div
                className={` transition-all duration-300 ${
                  characteristicType === 1
                    ? "translate-y-[-457px]"
                    : characteristicType === 2
                    ? "translate-y-[-914px]"
                    : characteristicType === 3
                    ? "translate-y-[-1371px]"
                    : ""
                } `}
              >
                <Image src={products_right} alt="" />
                <Image src={products_right} alt="" />
                <Image src={products_right} alt="" />
                <Image src={products_right} alt="" />
              </div>
            </div>
          </div>
        </SignBox>
      </div>
    </Box>
  );
}
