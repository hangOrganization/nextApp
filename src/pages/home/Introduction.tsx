"use client";
import _, { max } from "lodash";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
import mobile_shadow from "../../assets/image/mobile-shadow/mobile-shadow.svg";
import mobile_shadow_1 from "../../assets/image/mobile-shadow/mobile-shadow-1.svg";
import mobile_shadow_2 from "../../assets/image/mobile-shadow/mobile-shadow-2.svg";
import {
  setActiveIndex,
  setComePage,
  setThrottleFlag,
} from "@/state/application/reducer";
import {
  useActiveIndex,
  useComePage,
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
  const comePage = useComePage();
  const innerWidth = useOuterWidth();
  const [buttonHover, setButtonHover] = useState<string>("");
  const [play, setPlay] = useState<boolean>(false);
  const [showLineBox, setShowLineBox] = useState(false);
  const tenYearsRef = useRef<HTMLDivElement | null>(null);
  const applyRef = useRef<HTMLDivElement | null>(null);
  const DreamOfferRef = useRef<HTMLDivElement | null>(null);
  const [lazyLoad, setLazyLoad] = useState<number>(0)
  useEffect(() => {
    if (activeIndex === 1) {
      if (comePage === 8) {
        document.querySelector("#introductionBox")?.scrollTo({
          top: 800,
          behavior: "smooth",
        });
      } else {
        document.querySelector("#introductionBox")?.scrollTo({
          top: 20,
          behavior: "smooth",
        });
      }
    }

  }, [activeIndex, comePage]);
  useEffect(() => {
    if (innerWidth < 768 && lazyLoad !== 3) {
      window.addEventListener("scroll", () => {
        if (tenYearsRef.current!.getBoundingClientRect().top < 500) {
          setLazyLoad(1)
          setShowLineBox(true);
        }
        if (applyRef.current!.getBoundingClientRect().top < 500) {
          setLazyLoad(2)
        }
        if (DreamOfferRef.current!.getBoundingClientRect().top < 500) {
          setLazyLoad(3)
        }
      });
    } else {
      setShowLineBox(true);
    }
  }, [])
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
            dispatch(setComePage(1));
            setTimeout(() => {
              dispatch(setThrottleFlag(false));
            }, 1200);
          }
          if (
            e.target.scrollHeight -
            (e.target.scrollTop + e.target.clientHeight) <
            3
          ) {
            dispatch(setThrottleFlag(true));
            dispatch(setActiveIndex(2));
            dispatch(setComePage(1));
            swiper.slideNext(1000);
            setTimeout(() => {
              dispatch(setThrottleFlag(false));
            }, 1200);
          }
        }
      }}
    >
      <div className="md:relative md:pb-[300px] z-[50]">
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
        <Image
          className=" md:hidden absolute left-0 top-[-30px]"
          src={mobile_shadow}
          alt=""
        />
        <Image
          className=" md:hidden absolute right-0 top-[230px]"
          src={mobile_shadow_1}
          alt=""
        />
        <Image
          className=" md:hidden absolute left-0 !bottom-[250px]"
          src={mobile_shadow_2}
          alt=""
        />
        <div className="flex max-md:flex-col md:pt-[120px] items-center overflow-auto md:mx-auto gap-x-[192px] md:justify-center justify-between">
          <div className={`max-md:opacity-0 transition-all duration-1000 ${lazyLoad > 0 ? 'max-md:opacity-100' : ''}`} ref={tenYearsRef}>
            <div className="w-[224px] flex-col md:pt-6 flex items-center">
              <div
                className="w-[220px] max-md:w-[167px] max-md:h-[92px] bg-cover bg-blend-lighten flex justify-center items-center bg-[#1A1A1A] h-[120px]"
                style={{ backgroundImage: `url(${speed_line.src})` }}
              >
                {(showLineBox || innerWidth > 768) && (
                  <LineBox className="w-full max-md:scale-[0.76] overflow-hidden">
                    <div className="flex mt-[-2px] h-[86px] w-full gap-[6px] before justify-center items-end"></div>
                  </LineBox>
                )}
              </div>
              <div className="mt-10 max-md:mt-6">
                <div className="font-light max-md:font-[300] max-md:leading-[200%] leading-[220%] px-[2px] text-[14px] opacity-70 text-center">
                  十万象限 是浙江省首家拥有
                </div>
                <div className="font-light max-md:font-[300] max-md:leading-[200%] leading-[220%] px-[2px] text-[14px] opacity-70 text-center">
                  十年音乐传媒行业经验的专业团队 由世界艺术名校海归艺术家导师及
                  独立音乐人联合创立
                </div>
              </div>
            </div>
          </div>
          <div className={`max-md:opacity-0 transition-all duration-1000 ${lazyLoad > 1 ? 'max-md:opacity-100' : ''}`} ref={applyRef}>
            <div className="w-[224px] flex-col max-md:mt-[112px] flex items-center">
              <div className="flex w-full py-[9px] px-[2px] gap-[27px] justify-center items-center">
                <div
                  className="w-[220px] max-md:h-[92px] max-md:w-[167px] bg-cover bg-blend-lighten flex justify-center items-center bg-[#1A1A1A] h-[120px]"
                  style={{ backgroundImage: `url(${apply_gif.src})` }}
                ></div>
              </div>
              <div className="mt-6 py-[31px] md:mt-2 h-[124px]">
                <div className="font-light  max-md:font-[300] max-md:leading-[200%] leading-[220%] px-[2px] text-[14px] opacity-70 text-center">
                  专攻于 音乐艺术作品集教育
                </div>
                <div className="font-light max-md:font-[300] max-md:leading-[200%] leading-[220%] px-[2px] text-[14px] opacity-70 text-center">
                  留学申请规划 以及 跨界艺术联动是
                </div>
                <div className="font-light max-md:font-[300] max-md:leading-[200%] leading-[220%] whitespace-normal px-[2px] text-[14px] opacity-70 text-center">
                  浙江省最大的音乐留学作品集机构
                </div>
              </div>
            </div>
          </div>
          <div className={`max-md:opacity-0 transition-all duration-1000 ${lazyLoad > 2 ? 'max-md:opacity-100' : ''}`} ref={DreamOfferRef}>
            <div className="w-[224px] flex-col max-md:mt-[50px] flex items-center">
              <div className="flex w-full py-[9px] md:pb-[3px] px-[2px] gap-[27px] justify-center items-center">
                <div
                  className="w-[220px] max-md:h-[151px] max-md:w-[167px] h-[200px] bg-cover bg-blend-lighten flex justify-center items-center bg-[#1A1A1A]"
                  style={{ backgroundImage: `url(${DreamOffer.src})` }}
                ></div>
              </div>
              <div className=" py-[31px] md:py-0 h-[124px]">
                <div className="font-light  max-md:font-[300] max-md:leading-[200%] leading-[220%] text-[14px] opacity-70 text-center">
                  以专业的教学专注的态度帮助每一位热爱音乐的学生拿到dream offer
                  <br />
                  开发艺术领域的无限可能性
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Video /> */}
        <p className="mx-auto mt-[120px] max-md:hidden mb-[40px] font-[300] text-[14px] leading-[220%] uppercase text-center text-[#FFFFFF] opacity-[0.7]">
          - 请观看导师学生作品混剪 -
        </p>
        <div className="w-full cursor-pointer max-md:mt-[112px]  z-50 relative">
          {play ? (
            <iframe
              src="//player.bilibili.com/player.html?aid=314854552&bvid=BV1zP411i7RD&cid=1170792653&page=1"
              scrolling="no"
              className="w-[960px] max-md:w-screen relative z-50 mx-auto max-md:h-[200px] md:h-[542px]"
              frameBorder="no"
              allowFullScreen={false}
            ></iframe>
          ) : (
            <div>
              <Image
                className="w-[960px] max-md:hidden relative z-50 mx-auto h-[542px]"
                src={video_cover}
                alt=""
                onClick={() => setPlay(true)}
              />
              <div
                onClick={() => setPlay(true)}
                className="md:hidden mb-[88px] px-4"
              >
                <Image src={mobile_video} alt="" />
              </div>
            </div>
          )}
        </div>

        <ButtonBox className="flex mt-[160px] w-screen overflow-hidden items-center relative justify-center">
          <ButtonBorder
            style={{ borderColor: "rgb(157, 54, 11,0.1)" }}
            className=" opacity-100 z-20 max-md:py-2 py-[10px] max-md:rounded-[32px] rounded-[55px] px-[73px]"
          >
            <ButtonBorder
              style={{ borderColor: "rgb(157, 54, 11,0.2)" }}
              className=" opacity-100 max-md:py-2 py-[10px] max-md:rounded-[32px] rounded-[55px] px-[76px]"
            >
              <ButtonBorder
                style={{ borderColor: "rgb(157, 54, 11,0.3)" }}
                className=" opacity-100 max-md:py-[7px] py-[9px] max-md:rounded-[32px] rounded-[55px] px-[61px]"
              >
                <ButtonBorder
                  style={{ borderColor: "rgb(157, 54, 11,0.4)" }}
                  className={`${buttonHover === "hover" ? " md:scale-[1.01]" : ""
                    } transition-all duration-[260ms] opacity-100 max-md:py-[6px] py-[8px] max-md:rounded-[32px] rounded-[55px] px-[49px]`}
                >
                  <ButtonBorder
                    style={{ borderColor: "rgb(157, 54, 11,0.5)" }}
                    className={`opacity-100 max-md:py-[6px] py-[8px] max-md:rounded-[32px] rounded-[55px] max-md:px-[17px] px-[34px] transition-all duration-[260ms] ${buttonHover === "hover" ? " md:scale-[1.02]" : ""
                      }`}
                  >
                    <ButtonBorder
                      style={{ borderColor: "rgb(157, 54, 11,0.6)" }}
                      className={`opacity-100 max-md:py-[6px] ${buttonHover === "hover" ? " md:scale-[1.03]" : ""
                        } transition-all duration-[260ms] py-[9px] max-md:rounded-[32px] rounded-[55px] max-md:px-[15px] px-[27px]`}
                    >
                      <ButtonBorder
                        style={{ borderColor: "rgb(157, 54, 11,0.7)" }}
                        className={`opacity-100 max-md:py-[6px] ${buttonHover === "hover" ? " md:scale-[1.04]" : ""
                          } transition-all duration-[260ms] py-[8px] max-md:rounded-[32px] rounded-[55px] max-md:px-[13px] px-[23px]`}
                      >
                        <ButtonBorder
                          style={{ borderColor: "rgb(157, 54, 11,0.8)" }}
                          className={`opacity-100 md:px-[24px] ${buttonHover === "hover" ? " md:scale-[1.05]" : ""
                            } transition-all duration-[260ms] py-[6px] max-md:py-[6px] max-md:rounded-[32px] rounded-[55px]`}
                        >
                          <button
                            className={`bg-[#FF4B00] ${buttonHover === "hover" ? " md:scale-[1]" : ""
                              } max-md:rounded-[28px] rounded-[39px] flex transition-all duration-[260ms] justify-center relative items-center max-md:w-[255px] max-md:h-[56px] w-[314px] max-md:mx-2  h-20`}
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
                              className="absolute transition-all duration-[260ms] max-w-[918px] z-10 w-[918px] h-[110px]"
                              src={lEtsRock_button}
                              alt=""
                            />
                            <div className="absolute w-[314px] max-md:hidden rounded-[39px] overflow-hidden h-20 z-10">
                              <ShadowBox className="transition-all ml-[-60px] mt-[-27px] duration-[260ms] shadow">
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