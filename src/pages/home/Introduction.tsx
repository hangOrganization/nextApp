"use client";
import _ from "lodash";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { useAppDispatch } from "@/state/hooks";
import apply_gif from "@/assets/image/gif/apply.gif";
import video_cover from "@/assets/image/svg/video-cover.png";
import shadow_bg from "@/assets/image/svg/shadow-bg.svg";
import DreamOffer from "@/assets/image/svg/dreamOffer.gif";
import speed_line from "@/assets/image/gif/speed-line.gif";
import shadow_bg_2 from "@/assets/image/svg/shadow-bg-2.svg";
import lEtsRock_button from "@/assets/image/svg/lEt’s-Rock-button.svg";
import mobile_video from "../../assets/image/mobile/mobile-video.png";
import { setActiveIndex, setThrottleFlag } from "@/state/application/reducer";
import {
  useActiveIndex,
  useOuterWidth,
  useThrottleFlag,
} from "@/state/application/hooks";
import {
  LineBox,
  SliderBox,
  RollBox,
  ScaleBox,
  ButtonBox,
  ButtonBorder,
  ShadowBox,
  ShadowBox2,
} from "@/styles/SignCss";

interface IntroductionProps {
  setIsOpenConsult: Function;
}
export default function Introduction({ setIsOpenConsult }: IntroductionProps) {
  const dispatch = useAppDispatch();
  const throttleFlag = useThrottleFlag();
  const activeIndex = useActiveIndex();
  const swiper = useSwiper();
  const innerWidth = useOuterWidth();
  const [buttonHover, setButtonHover] = useState<string>("");
  const [play, setPlay] = useState<boolean>(false);
  useEffect(() => {
    document.querySelector("#introductionBox")?.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  }, [activeIndex]);
  return (
    <div
      id="introductionBox"
      className={`md:h-screen md:pb-20 ${activeIndex === 1 ? "swiper-move-in" : "swiper-move-out"
        }  md:overflow-auto relative`}
      onScroll={(e: any) => {
        if (throttleFlag) return;
        if (innerWidth > 768) {
          if (e.target.scrollTop === 0) {
            dispatch(setThrottleFlag(true));
            dispatch(setActiveIndex(0));
            swiper.slidePrev(1000);
            setTimeout(() => {
              dispatch(setThrottleFlag(false));
            }, 1200);
          }
          if (
            e.target.scrollHeight -
            (e.target.scrollTop + e.target.clientHeight) <
            10
          ) {
            dispatch(setThrottleFlag(true));
            dispatch(setActiveIndex(2));
            swiper.slideNext(1000);
            setTimeout(() => {
              dispatch(setThrottleFlag(false));
            }, 1200);
          }
        }
      }}
    >
      <div className="md:relative pb-[350px] z-[50]">
        <Image
          className=" max-md:hidden absolute left-0 top-[-100px]"
          src={shadow_bg}
          alt=""
        />
        <Image
          className=" max-md:hidden absolute right-0 !bottom-0"
          src={shadow_bg_2}
          alt=""
        />
        <div className="flex max-md:flex-col md:pt-[120px] items-center overflow-auto md:mx-auto gap-x-[192px] md:justify-center justify-between">
          <div className="w-[224px] flex-col flex items-center">
            <div
              className="w-[220px]  bg-cover bg-blend-lighten flex justify-center items-center bg-[#1A1A1A] h-[120px]"
              style={{ backgroundImage: `url(${speed_line.src})` }}
            >
              <LineBox className="w-full   overflow-hidden">
                <div className="flex mt-[-2px] h-[86px] w-full gap-[6px] before justify-center items-end"></div>
              </LineBox>
            </div>
            <div className="mt-6">
              <div className="font-light max-md:font-[300] max-md:leading-[200%] leading-[220%] px-[2px] text-[14px] opacity-70 text-center">
                十万象限 是杭州首家拥有
              </div>
              <div className="font-light max-md:font-[300] max-md:leading-[200%] leading-[220%] px-[2px] text-[14px] opacity-70 text-center">
                十年音乐传媒行业经验的专业团队 由世界艺术名校海归艺术家导师及
                独立音乐人联合创立
              </div>
            </div>
          </div>
          <div className="w-[224px] flex-col max-md:mt-[112px] flex items-center">
            <div className="flex w-full py-[9px] px-[2px] gap-[27px] justify-center items-center">
              <div
                className="w-[220px] bg-cover bg-blend-lighten flex justify-center items-center bg-[#1A1A1A] h-[120px]"
                style={{ backgroundImage: `url(${apply_gif.src})` }}
              ></div>
              {/* <SliderBox className="relative flex justify-center">
                <div className="absolute top-[0%] slider w-4 h-1 bg-[#CCCCCC]"></div>
                <div
                  style={{ border: "0.5px solid #CCCCCC" }}
                  className="h-20"
                ></div>
              </SliderBox>
              <RollBox className=" h-[102px] overflow-hidden">
                <div className="text-center roll h-[408px]">
                  <div className="text-center">
                    <p className="text-[32px] leading-[160%] font-[300]">
                      音乐艺术
                    </p>
                    <p className="text-[32px] leading-[160%] font-[300]">
                      作品集
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[32px] leading-[160%] font-[300]">
                      留学申请
                    </p>
                    <p className="text-[32px] leading-[160%] font-[300]">
                      规划
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[32px] leading-[160%] font-[300]">
                      跨界艺术
                    </p>
                    <p className="text-[32px] leading-[160%] font-[300]">
                      联动
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[32px] leading-[160%] font-[300]">
                      音乐艺术
                    </p>
                    <p className="text-[32px] leading-[160%] font-[300]">
                      作品集
                    </p>
                  </div>
                </div>
              </RollBox>
              <SliderBox className="relative rotate-180 flex justify-center">
                <div className="absolute top-[0%] slider w-4 h-1 bg-[#CCCCCC]"></div>
                <div
                  style={{ border: "0.5px solid #CCCCCC" }}
                  className="h-20"
                ></div>
              </SliderBox> */}
            </div>
            <div className="mt-6 py-[31px] h-[124px]">
              <div className="font-light  max-md:font-[300] max-md:leading-[200%] leading-[220%] px-[2px] text-[14px] opacity-70 text-center">
                专攻于 音乐艺术作品集教育
              </div>
              <div className="font-light max-md:font-[300] max-md:leading-[200%] leading-[220%] px-[2px] text-[14px] opacity-70 text-center">
                留学申请规划 以及 跨界艺术联动
              </div>
            </div>
          </div>
          <div className="w-[224px] max-md:mt-[81px] flex-col flex relative items-center pt-[13px]">
            <ScaleBox className=" flex flex-col items-center justify-center">
              {/* <p className="font-[Lexend] textScale z-30 bg-[#1A1A1A] w-[98px] text-[28px] leading-[100%] font-[250]">
                            DREAM
                        </p>
                        <p className="font-[Lexend] textScale mt-5 z-30 bg-[#1A1A1A] text-[40px] leading-[100%] font-[250]">
                            OFFER
                        </p>
                        <Box>
                            <Image
                                className=" ball1 top-0 left-0 absolute"
                                src={icon_star}
                                alt=""
                            />
                        </Box> */}
              <div
                className="w-[224px] bg-cover mt-[-45px] bg-blend-lighten bg-[#1A1A1A] h-[203px]"
                style={{ backgroundImage: `url(${DreamOffer.src})` }}
              ></div>
            </ScaleBox>
            <div className="py-4">
              <div className="font-light  max-md:font-[300] max-md:leading-[200%] uppercase leading-[220%] md:px-[2px] text-[14px] opacity-70 text-center">
                以专业的教学专注的态度帮助每一位热爱音乐的学生拿到dream offer
                开发艺术领域的无限可能性
              </div>
            </div>
          </div>
        </div>
        {/* <Video /> */}
        <p className="mx-auto mt-[120px] max-md:hidden mb-[40px] font-[300] text-[14px] leading-[220%] uppercase text-center text-[#FFFFFF] opacity-[0.7]">
          - 请观看导师学生作品混剪 -
        </p>
        <div className="w-full cursor-pointer z-50 relative">
          {play ?
            <iframe
              src="//player.bilibili.com/player.html?aid=314854552&bvid=BV1zP411i7RD&cid=1170792653&page=1"
              scrolling="no"
              className="w-[960px] max-md:hidden relative z-50 mx-auto h-[542px]"
              frameBorder="no"
              allowFullScreen={true}
            >
            </iframe>
            :
            <Image className="w-[960px] max-md:hidden relative z-50 mx-auto h-[542px]" src={video_cover} alt="" onClick={()=>setPlay(true)} />
          }
        </div>
        <div className="md:hidden mt-[96px] mb-[88px] px-4">
          <Image src={mobile_video} alt="" />
        </div>
        <ButtonBox className="flex mt-[160px] w-screen overflow-hidden items-center relative justify-center">
          <ButtonBorder
            style={{ borderColor: "rgb(157, 54, 11,0.1)" }}
            className=" opacity-100 z-20 max-md:py-2 py-[10px] rounded-[32px] px-[73px]"
          >
            <ButtonBorder
              style={{ borderColor: "rgb(157, 54, 11,0.2)" }}
              className=" opacity-100 max-md:py-2 py-[10px] rounded-[32px] px-[76px]"
            >
              <ButtonBorder
                style={{ borderColor: "rgb(157, 54, 11,0.3)" }}
                className=" opacity-100 max-md:py-[7px] py-[9px] rounded-[32px] px-[61px]"
              >
                <ButtonBorder
                  style={{ borderColor: "rgb(157, 54, 11,0.4)" }}
                  className={`${buttonHover === "hover" ? " md:scale-[1.01]" : ""
                    } transition-all duration-500 opacity-100 max-md:py-[6px] py-[8px] rounded-[32px] px-[49px]`}
                >
                  <ButtonBorder
                    style={{ borderColor: "rgb(157, 54, 11,0.5)" }}
                    className={`opacity-100 max-md:py-[6px] py-[8px] rounded-[32px] max-md:px-[17px] px-[34px] transition-all duration-500 ${buttonHover === "hover" ? " md:scale-[1.02]" : ""
                      }`}
                  >
                    <ButtonBorder
                      style={{ borderColor: "rgb(157, 54, 11,0.6)" }}
                      className={`opacity-100 max-md:py-[6px] ${buttonHover === "hover" ? " md:scale-[1.03]" : ""
                        } transition-all duration-500 py-[9px] rounded-[32px] max-md:px-[15px] px-[27px]`}
                    >
                      <ButtonBorder
                        style={{ borderColor: "rgb(157, 54, 11,0.7)" }}
                        className={`opacity-100 max-md:py-[6px] ${buttonHover === "hover" ? " md:scale-[1.04]" : ""
                          } transition-all duration-500 py-[8px] rounded-[32px] max-md:px-[13px] px-[23px]`}
                      >
                        <ButtonBorder
                          style={{ borderColor: "rgb(157, 54, 11,0.8)" }}
                          className={`opacity-100 md:px-[24px] ${buttonHover === "hover" ? " md:scale-[1.05]" : ""
                            } transition-all duration-500 py-[6px] max-md:py-[6px] rounded-[32px]`}
                        >
                          <button
                            className={`bg-[#FF4B00] ${buttonHover === "hover" ? " md:scale-[1]" : ""
                              } max-md:rounded-[28px] rounded-[39px] flex transition-all duration-500 justify-center relative items-center max-md:w-[255px] max-md:h-[56px] w-[314px] max-md:mx-2  h-20`}
                            onClick={() => {
                              setIsOpenConsult(1);
                            }}
                            onMouseEnter={() => {
                              setButtonHover("hover");
                            }}
                            onMouseLeave={() => {
                              setButtonHover("");
                            }}
                          >
                            <p className=" text-[28px] uppercase max-md:text-[20px] z-20 text-[#1a1a1a] leading-[100%] font-[Lexend] font-black">
                              LEt’s Rock
                            </p>
                            <Image
                              className="absolute transition-all duration-500 max-w-[918px] z-10 w-[918px] h-[110px]"
                              src={lEtsRock_button}
                              alt=""
                            />
                            <div className="absolute w-[314px] max-md:hidden rounded-[39px] overflow-hidden h-20 z-10">
                              <ShadowBox className="transition-all ml-[-60px] mt-[-27px] duration-500 shadow">
                                <ShadowBox2 className=""></ShadowBox2>
                              </ShadowBox>
                            </div>
                          </button>
                        </ButtonBorder>
                      </ButtonBorder>
                    </ButtonBorder>
                  </ButtonBorder>
                </ButtonBorder>
              </ButtonBorder>
            </ButtonBorder>
          </ButtonBorder>
        </ButtonBox>
      </div>
    </div>
  );
}
