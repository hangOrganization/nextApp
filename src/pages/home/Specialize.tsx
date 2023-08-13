"use client";
import styled from "styled-components";
import Image from "next/image";
import specialize_bg from "@/assets/image/svg/specialize-bg.png";
import mobileSpecialize_bg from "@/assets/image/mobile/mobileSpecialize-bg.png";
import specialize_Star from "@/assets/image/svg/specialize-Star.svg";
import courseArrow from "@/assets/image/svg/icon-courseArrow.svg";
import mobile_courseArrow from "@/assets/image/mobile/mobile-courseArrow.svg";
import {
  modernMusicHotMajor,
  classicalMusicHotMajor,
  musicalTheoryHotMajor,
  musicalTheorySchool,
  classicalMusicSchool,
  modernMusicSchool,
} from "@/utils/specializeText";
import { useEffect, useState } from "react";
import { dataFrom } from ".";

const SpecializeBox = styled.div``;
const SpecializeBg = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;

  @media (min-width: 768px) {
    background: linear-gradient(
        180deg,
        #1a1a1a 0%,
        rgba(26, 26, 26, 0.46) 48.22%,
        #1a1a1a 100%
      ),
      url(${specialize_bg.src});
    width: 100vw;
    height: 1309px;
    background-size: cover;
    background-repeat: no-repeat !important;
    background-blend-mode: normal, soft-light, color-dodge;
  }
  @media not all and (min-width: 768px) {
    background: linear-gradient(
        180deg,
        #1a1a1a 0%,
        rgba(26, 26, 26, 0.46) 48.22%,
        #1a1a1a 100%
      ),
      url(${mobileSpecialize_bg.src});
    width: 100vw;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat !important;
    background-blend-mode: normal, soft-light, color-dodge;
  }
`;
const CourseBox = styled.div`
  width: 541px;
  height: 600px;
  padding: 40px;
  background: linear-gradient(
    241.27deg,
    rgba(208, 208, 208, 0.9) 4.73%,
    rgba(249, 249, 249, 0.9) 47.73%,
    rgba(211, 211, 211, 0.9) 84.56%
  );
  background-blend-mode: soft-light, normal;
  backdrop-filter: blur(50px);
  box-shadow: inset -1px 1px 15px rgba(255, 255, 255, 0.6);
  border-radius: 48px;
  @media not all and (min-width: 768px) {
    width: calc(100vw - 32px);
    margin: 0 16px;
    height: 486px;
    border-radius: 32px;
    padding: 24px 36px;
  }
`;
interface SpecializeProps {
  musicGenre: number;
  setMusicGenre: Function;
  dataFrom?: dataFrom
}
export default function Specialize({
  musicGenre,
  dataFrom,
  setMusicGenre,
}: SpecializeProps) {
  const [innerWidth, setInnerWidth] = useState<number>(0)
  useEffect(() => {
    setInnerWidth(window.innerWidth + 16)
  }, [])
  return (
    <SpecializeBox className="flex  Specialize justify-center md:h-[1309px] md:mb-[300px] relative  pt-[470px] max-md:pt-[100px] w-screen md:overflow-hidden md:mt-[-190px] flex-col items-center">
      <SpecializeBg></SpecializeBg>
      <div className="">
        <div
          style={{
            background: "rgba(26, 26, 26, 0.90)",
            backdropFilter: "blur(40px)",
          }}
          className="md:px-[160px] md:!backdrop-blur-none relative z-[1001] md:!bg-transparent max-md:pb-1 max-md:pt-[21px] max-md:flex-col max-md:justify-center max-md:items-center flex justify-between"
        >
          <div className="max-md:text-center">
            <p className="text-[56px] max-md:text-[28px] leading-[120%] font-light">
              专攻方向
            </p>
            <p className="text-[22px] max-md:text-[14px] mt-4 text-[Lexend] tracking-[.4em] max-md:tracking-[5.6px] leading-[120%] text-sp opacity-60 uppercase font-extralight">
              MUSIC MAJOR
            </p>
          </div>
          <div
            style={{
              background: "rgba(26, 26, 26, 0.90)",
              backdropFilter: "blur(40px)",
            }}
            className="flex max-md:sticky md:!backdrop-blur-none max-md:hidden max-md:mt-[-64px] md:!bg-transparent  max-md:top-0 z-[1000] flex-col max-md:px-[31px] max-md:w-screen relative max-md:pt-[96px] md:justify-end md:items-end">
            <div className="flex gap-4 max-md:justify-between items-end">
              <div
                className={`md:w-[200px] ${musicGenre === 1 ? "md:mb-2" : ""
                  } transition-all duration-300 cursor-pointer text-center`}
                onClick={() => {
                  setMusicGenre(1)
                  window.scrollTo({
                    top: 3280,
                    behavior: 'smooth',
                  })
                }
                }
              >
                <p
                  className={`text-[24px] ${musicGenre === 1
                    ? "font-[200]"
                    : "font-[100] max-md:font-light"
                    } max-md:text-[14px] font-[200] leading-[160%]`}
                >
                  现代音乐类
                </p>
              </div>
              <div
                className={`md:w-[200px] ${musicGenre === 2 ? "md:mb-2" : ""
                  } transition-all duration-300 cursor-pointer text-center`}
                onClick={() => {
                  setMusicGenre(2)
                  window.scrollTo({
                    top: 3280,
                    behavior: 'smooth',
                  })
                }}
              >
                <p
                  className={`text-[24px] ${musicGenre === 2
                    ? "font-[200]"
                    : "font-[100] max-md:font-light"
                    } max-md:text-[14px] font-[200] leading-[160%]`}
                >
                  古典音乐类
                </p>
              </div>
              <div
                className={`md:w-[200px] ${musicGenre === 3 ? "md:mb-2" : ""
                  } transition-all duration-300 cursor-pointer text-center`}
                onClick={() => {
                  setMusicGenre(3)
                  window.scrollTo({
                    top: 3280,
                    behavior: 'smooth',
                  })
                }}
              >
                <p
                  className={`text-[24px] ${musicGenre === 3
                    ? "font-[200]"
                    : "font-[100] max-md:font-light"
                    } max-md:text-[14px] font-[200] leading-[160%]`}
                >
                  音乐理论及应用类
                </p>
              </div>
            </div>
            <div
              className={`w-[86px] transition-all max-md:hidden duration-500 ${musicGenre === 1
                ? "translate-x-[-488.5px]"
                : musicGenre === 2
                  ? "translate-x-[-272.5px]"
                  : "translate-x-[-56.5px]"
                } `}
              style={{ border: "0.5px solid #FFFFFF" }}
            ></div>
            <div className="mt-[16px] md:hidden h-[1px] relative w-full">
              <div
                className={`w-12 transition-all absolute duration-500  ${musicGenre === 1
                  ? "left-[0%] translate-x-[10px]"
                  : musicGenre === 2
                    ? "left-[50%] translate-x-[-45px]"
                    : "left-[100%] translate-x-[-82px]"
                  }`}
                style={{ border: "0.25px solid #FFFFFF" }}
              ></div>
            </div>
          </div>
        </div>
        <div
          style={{
            background: "rgba(26, 26, 26, 0.90)",
            backdropFilter: "blur(30px)",
          }}
          className="flex md:hidden max-md:sticky max-md:mt-[-64px]  max-md:top-0 z-[1000] flex-col max-md:px-[31px] max-md:w-screen relative max-md:pt-[96px] md:justify-end md:items-end"
        >
          <div className="flex gap-4 max-md:justify-between items-end">
            <div
              className={`md:w-[200px] ${musicGenre === 1 ? "md:mb-2" : ""
                } transition-all duration-300 cursor-pointer text-center`}
              onClick={() => {
                setMusicGenre(1);
                window.scrollTo({
                  top: 3280,
                  behavior: 'smooth',
                })
              }}
            >
              <p
                className={`text-[24px] ${musicGenre === 1
                  ? "font-[200]"
                  : "font-[100] max-md:font-light"
                  } max-md:text-[14px] font-[200] leading-[160%]`}
              >
                现代音乐类
              </p>
            </div>
            <div
              className={`md:w-[200px] ${musicGenre === 2 ? "md:mb-2" : ""
                } transition-all duration-300 cursor-pointer text-center`}
              onClick={() => {
                setMusicGenre(2);
                window.scrollTo({
                  top: 3280,
                  behavior: 'smooth',
                })
              }}
            >
              <p
                className={`text-[24px] ${musicGenre === 2
                  ? "font-[200]"
                  : "font-[100] max-md:font-light"
                  } max-md:text-[14px] font-[200] leading-[160%]`}
              >
                古典音乐类
              </p>
            </div>
            <div
              className={`md:w-[200px] ${musicGenre === 3 ? "md:mb-2" : ""
                } transition-all duration-300 cursor-pointer text-center`}
              onClick={() => {
                setMusicGenre(3);
                window.scrollTo({
                  top: 3280,
                  behavior: 'smooth',
                })
              }}
            >
              <p
                className={`text-[24px] ${musicGenre === 3
                  ? "font-[200]"
                  : "font-[100] max-md:font-light"
                  } max-md:text-[14px] font-[200] leading-[160%]`}
              >
                音乐理论及应用类
              </p>
            </div>
          </div>
          <div
            className={`w-[86px] transition-all max-md:hidden duration-500 ${musicGenre === 1
              ? "translate-x-[-488.5px]"
              : musicGenre === 2
                ? "translate-x-[-272.5px]"
                : "translate-x-[-56.5px]"
              } `}
            style={{ border: "0.5px solid #FFFFFF" }}
          ></div>
          <div className="mt-[16px] md:hidden h-[1px] relative w-full">
            <div
              className={`w-12 transition-all absolute duration-500  ${musicGenre === 1
                ? "left-[0%] translate-x-[10px]"
                : musicGenre === 2
                  ? "left-[50%] translate-x-[-45px]"
                  : "left-[100%] translate-x-[-82px]"
                }`}
              style={{ border: "0.25px solid #FFFFFF" }}
            ></div>
          </div>
        </div>
        <div
          className={`relative transition-all duration-1000 ${musicGenre === 2
            ? "max-md:h-[1118px]"
            : musicGenre === 3
              ? " max-md:h-[695px] "
              : "max-md:h-[1248px]"
            } md:pb-[168px] w-screen md:w-[1440px]`}
        >
          <Image
            className={`absolute max-md:hidden bottom-[0px] transition-all duration-500 ${musicGenre === 1
              ? "rotate-0"
              : musicGenre === 2
                ? "rotate-[90deg]"
                : "rotate-[180deg]"
              } right-[-50px]`}
            src={specialize_Star}
            alt=""
          />
          <div
            className={`flex max-md:mt-5 mt-12 md:w-[1440px]  md:px-[120px] overflow-hidden justify-between`}
          >
            <div
              style={{ transform: `translateX(-${musicGenre === 2 ? innerWidth : musicGenre === 3 ? innerWidth * 2 : 0}px)` }}
              className={`flex gap-[120px] max-md:gap-4 transition-all duration-500 ${musicGenre === 1
                ? "translate-x-[0px]"
                : musicGenre === 2
                  ? "md:!translate-x-[-1320px]"
                  : "md:!translate-x-[-2640px]"
                } w-[3880px]`}
            >
              <div
                className={`flex md:w-[1200px] transition-all duration-500 ${musicGenre === 1 ? " opacity-100" : "opacity-0"
                  } max-md:flex-col justify-between`}
              >
                <CourseBox>
                  <div className="flex max-md:justify-center items-center">
                    <p className="text-[32px] max-md:text-[20px] max-md:font-semibold max-md:mr-2  mr-3 leading-[160%] text-[#0000FF] font-[950]">
                      热门专业
                    </p>
                    <Image
                      className="max-md:w-6 max-md:hidden max-md:h-6"
                      src={courseArrow}
                      alt=""
                    />
                    <Image
                      className="max-md:w-6 md:hidden max-md:h-6"
                      src={mobile_courseArrow}
                      alt=""
                    />
                  </div>
                  <div className="flex mt-4 md:items-center h-[469px] justify-between">
                    <div className="flex flex-col max-md:h-[390px] h-[469px] flex-wrap md:pl-2 max-md:gap-y-[11px] max-md:gap-x-6 gap-3 md:gap-x-8">
                      {dataFrom?.popularMajors.modernMusic.popularMajorsEn.map((el: any, index: number) => (
                        <div
                          className="max-md:w-[124px] max-md:text-center"
                          key={`${index}-${el}-modernMusicHotMajor`}
                        >
                          <p className="text-[16px] max-md:text-[14px] font-[400] text-[#1A1A1A] leading-[160%]">
                            {dataFrom?.popularMajors.modernMusic.popularMajorsCn[index]}
                          </p>
                          <p className="text-[10px] max-md:scale-[0.83333] max-md:leading-[13px] text-ellipsis overflow-hidden  font-[200] font-[Lexend] text-[#1A1A1A] opacity-40 leading-[160%]">
                            {el}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CourseBox>
                <CourseBox className="md:!w-[643px] max-md:!px-6 max-md:!mt-4">
                  <div className="flex mb-4 max-md:justify-center items-center">
                    <p className="text-[32px] mr-3 max-md:text-[20px] max-md:font-semibold max-md:mr-2 leading-[160%] text-[#0000FF] font-[950]">
                      热门院校
                    </p>
                    <Image
                      className="max-md:w-6 max-md:hidden max-md:h-6"
                      src={courseArrow}
                      alt=""
                    />
                    <Image
                      className="max-md:w-6 md:hidden max-md:h-6"
                      src={mobile_courseArrow}
                      alt=""
                    />
                  </div>
                  <div className="md:pl-2">
                    <div className="flex items-center">
                      <p className="text-[18px] max-md:text-[14px] font-[400] leading-[160%] text-[#1A1A1A]">
                        英美
                      </p>
                      <div
                        style={{ border: "0.5px solid #000000" }}
                        className="ml-[25px]  md:w-[483px] opacity-10"
                      ></div>
                    </div>
                    <div className="flex max-md:mt-4 mt-[24px] justify-between">
                      <div className="flex h-[138px] max-md:w-[163px] max-md:h-[171px] flex-wrap flex-col max-md:gap-x-6 gap-x-12 gap-y-[11.75px]">
                        {dataFrom?.popularColleges.modernMusic.specificColleges.map((el: any, index: number) => (
                          <p
                            key={`${index}-modernMusicSchool`}
                            className="text-[13px] max-md:w-[163px] max-md:scale-[0.916666] max-md:text-ellipsis max-md:overflow-hidden max-md:line-clamp-1 max-md:font-light max-md:text-[12px] max-md:leading-[14.3px] leading-[140%] text-[#3E3E3E] font-[300] "
                          >
                            {el}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="md:pl-2">
                    <div className="flex mt-11 max-md:mt-6 items-center">
                      <p className="text-[18px] max-md:text-[14px] font-[400] leading-[160%] text-[#1A1A1A]">
                        日韩
                      </p>
                      <div
                        style={{ border: "0.5px solid #000000" }}
                        className="ml-[25px] md:w-[483px] opacity-10"
                      ></div>
                    </div>
                    <div className="flex max-md:mt-4 mt-[24px]">
                      <div className="flex flex-col max-md:h-[97px] h-[138px] gap-x-[137px] max-md:gap-x-[100px] flex-wrap gap-y-[11.75px]">
                        {dataFrom?.popularColleges.modernMusic.area.map((el: any, index: number) => (
                          <p
                            key={`${index}-modernMusicSchool-Japan and South Korea`}
                            className="text-[13px] max-md:text-[11px] max-md:scale-[0.916666] max-md:leading-[15.4px] leading-[140%] max-md:font-light text-[#3E3E3E] font-[300] "
                          >
                            {el}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CourseBox>
              </div>
              <div
                className={`flex md:w-[1200px]  transition-all duration-500 ${musicGenre === 2 ? " opacity-100" : "opacity-0"
                  } max-md:flex-col  md:justify-between`}
              >
                <CourseBox className="max-md:!h-[285px]">
                  <div className="flex max-md:justify-center items-center">
                    <p className="text-[32px] mr-3 leading-[160%] max-md:text-[20px] max-md:font-semibold max-md:mr-2 text-[#0000FF] font-[950]">
                      热门专业
                    </p>
                    <Image
                      className="max-md:w-6 max-md:hidden max-md:h-6"
                      src={courseArrow}
                      alt=""
                    />
                    <Image
                      className="max-md:w-6 md:hidden max-md:h-6"
                      src={mobile_courseArrow}
                      alt=""
                    />
                  </div>
                  <div className="flex mt-4 items-center md:h-[469px] justify-between">
                    <div className="flex flex-col max-md:h-[198px] h-[264px] flex-wrap md:pl-2 max-md:gap-x-[20px] md:gap-x-[65px] max-md:gap-y-[12px] gap-y-[28px]">
                      {dataFrom?.popularMajors.classicalMusic.popularMajorsEn.map((el: any, index: number) => (
                        <div
                          className="max-md:w-[126px] max-md:text-center"
                          key={`${index}-${el}-classicalMusicHotMajor`}
                        >
                          <p className="text-[16px] max-md:text-[14px] font-[400] text-[#1A1A1A] leading-[160%]">
                            {dataFrom?.popularMajors.classicalMusic.popularMajorsCn[index]}
                          </p>
                          <p className="text-[12px] text-ellipsis max-md:scale-[0.83333] overflow-hidden  max-md:leading-[13px] font-[200] font-[Lexend] text-[#1A1A1A] opacity-40 leading-[160%]">
                            {el}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CourseBox>
                <CourseBox className="md:!w-[643px] max-md:!h-[537px] max-md:!mt-4 max-md:!p-6">
                  <div className="flex mb-4 max-md:justify-center items-center">
                    <p className="text-[32px] mr-3 max-md:text-[20px] max-md:font-semibold max-md:mr-2 leading-[160%] text-[#0000FF] font-[950]">
                      热门院校
                    </p>
                    <Image
                      className="max-md:w-6 max-md:hidden max-md:h-6"
                      src={courseArrow}
                      alt=""
                    />
                    <Image
                      className="max-md:w-6 md:hidden max-md:h-6"
                      src={mobile_courseArrow}
                      alt=""
                    />
                  </div>
                  <div className="md:pl-2">
                    <div className="flex items-center">
                      <p className="text-[18px] max-md:text-[14px] font-[400] leading-[160%] text-[#1A1A1A]">
                        英美
                      </p>
                      <div
                        style={{ border: "0.5px solid #000000" }}
                        className="ml-[25px] md:w-[483px] opacity-10"
                      ></div>
                    </div>
                    <div className="flex mt-[24px] max-md:mt-4 md:justify-between">
                      <div className="flex max-md:h-[170px] h-[138px] flex-wrap flex-col max-md:gap-x-[68px] gap-x-[86px] max-md:gap-y-[11px] gap-y-[11.75px]">
                        {dataFrom?.popularColleges.classicalMusic.specificColleges.map((el: any, index: number) => (
                          <p
                            key={`${index}-classicalMusicSchool`}
                            className="text-[13px] leading-[140%] text-[#3E3E3E] max-md:scale-[0.916666] max-md:text-[11px] max-md:leading-[14.3px] max-md:font-light  font-[300] "
                          >
                            {el}
                          </p>
                        )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="md:pl-2">
                    <div className="flex max-md:mt-6 mt-11 items-center">
                      <p className="text-[18px] max-md:text-[14px] font-[400] leading-[160%] text-[#1A1A1A]">
                        欧洲
                      </p>
                      <div
                        style={{ border: "0.5px solid #000000" }}
                        className="ml-[25px] md:w-[483px] opacity-10"
                      ></div>
                    </div>
                    <div className="flex max-md:mt-4 mt-[24px]">
                      <div className="flex flex-col max-md:h-[170px] h-[138px] gap-x-[47.5px] max-md:gap-x-[20px] flex-wrap max-md:gap-y-[11px] gap-y-[11.75px]">
                        {dataFrom?.popularColleges.classicalMusic.area.map((el: any, index: number) => (
                          <p
                            key={`${index}-classicalMusicSchool-Japan and South Korea`}
                            className="text-[13px] max-md:text-[11px] max-md:scale-[0.916666] max-md:leading-[14.3px] max-md:font-light leading-[140%] text-[#3E3E3E] font-[300]"
                          >
                            {el}
                          </p>
                        )
                        )}
                      </div>
                    </div>
                  </div>
                </CourseBox>
              </div>
              <div
                className={`flex w-[1200px]  transition-all duration-500 ${musicGenre === 3 ? " opacity-100" : "opacity-0"
                  } max-md:flex-col md:justify-between`}
              >
                <CourseBox className="max-md:!h-[225px]">
                  <div className="flex max-md:justify-center items-center">
                    <p className="text-[32px] mr-3 max-md:text-[20px] max-md:font-semibold max-md:mr-2 leading-[160%] text-[#0000FF] font-[950]">
                      热门专业
                    </p>
                    <Image
                      className="max-md:w-6 max-md:hidden max-md:h-6"
                      src={courseArrow}
                      alt=""
                    />
                    <Image
                      className="max-md:w-6 md:hidden max-md:h-6"
                      src={mobile_courseArrow}
                      alt=""
                    />
                  </div>
                  <div className="flex mt-4 items-center md:h-[469px] justify-between">
                    <div className="flex flex-col max-md:h-[129px] h-[264px] flex-wrap md:pl-2 max-md:gap-y-[11px] gap-y-[28px] max-md:gap-x-[23px] gap-x-[128px]">
                      {dataFrom?.popularMajors.musicTheory.popularMajorsEn.map((el: any, index: number) => (
                        <div
                          className="max-md:text-center max-md:w-[124px]"
                          key={`${index}-${el}-musicalTheoryHotMajor`}
                        >
                          <p className="text-[16px] max-md:text-[14px] font-[400] text-[#1A1A1A] leading-[160%]">
                            {dataFrom?.popularMajors.musicTheory.popularMajorsCn[index]}
                          </p>
                          <p className="text-[12px] text-ellipsis overflow-hidden max-md:scale-[0.83333] max-md:leading-[13px] font-[200] font-[Lexend] text-[#1A1A1A] opacity-40 leading-[160%]">
                            {el}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CourseBox>
                <CourseBox className="md:!w-[643px] max-md:!h-[261px] max-md:!mt-4">
                  <div className="flex md:mb-[102px] max-md:justify-center items-center">
                    <p className="text-[32px] mr-3 max-md:text-[20px] max-md:font-semibold max-md:mr-2 leading-[160%] text-[#0000FF] font-[950]">
                      热门院校
                    </p>
                    <Image
                      className="max-md:w-6 max-md:hidden max-md:h-6"
                      src={courseArrow}
                      alt=""
                    />
                    <Image
                      className="max-md:w-6 md:hidden max-md:h-6"
                      src={mobile_courseArrow}
                      alt=""
                    />
                  </div>
                  <div className="md:pl-2">
                    <div className="flex max-md:mt-4 mt-[24px] md:justify-between">
                      <div className="flex max-md:h-[167px] max-md:w-[155px] h-[254px] flex-wrap flex-col max-md:gap-x-[24px] gap-x-[102px] max-md:gap-y-[11px] gap-y-[18px]">
                        {dataFrom?.popularColleges.musicTheory.specificColleges.map((el: any, index: number) => (
                          <p
                            key={`${index}-musicalTheorySchool`}
                            className="text-[13px] max-md:text-[11px] max-md:scale-[0.916666] max-md:leading-[14.3px] max-md:font-light leading-[140%] text-[#3E3E3E] font-[300]"
                          >
                            {el}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CourseBox>
              </div>
            </div>
          </div>
          <div
            style={{
              background:
                "linear-gradient(180deg,rgb(26, 26, 26, 0.1) 1%,rgb(26, 26, 26, 0.5) 10%,rgb(26, 26, 26, 1) 40%,rgb(26, 26, 26, 1) 100%)",
            }}
            className=" w-full h-[180px] md:hidden absolute bottom-0 left-0 z-[1001] bg-[#1a1a1a]"
          ></div>
        </div>
      </div>
    </SpecializeBox>
  );
}
