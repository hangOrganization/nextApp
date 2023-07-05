"use client";
import { useEffect } from "react";
import Image from "next/image";
import mobile_sign_bg_2 from "@/assets/image/mobile/mobile-sign-bg-2.png";
import mobile_sign_bg_1 from "@/assets/image/mobile/mobile-sign-bg-1.png";
import sign_bg_1 from "@/assets/image/svg/sign-bg-1.svg";
import sign_bg_2 from "@/assets/image/svg/sign-bg-2.png";
import { EchoRollBox, SignBgBox } from "../../styles/SignCss";
import { useSwiper } from "swiper/react";
import _ from "lodash";
import { useAppDispatch } from "@/state";
import {
  useActiveIndex,
  useIsChrome,
  useOuterWidth,
  useThrottleFlag,
} from "@/state/application/hooks";
import {
  setActiveIndex,
  setComePage,
  setOuterWidth,
  setThrottleFlag,
} from "@/state/application/reducer";

interface SignProps {}
export default function Sign({}: SignProps) {
  const throttleFlag = useThrottleFlag();
  const innerWidth = useOuterWidth();
  const activeIndex = useActiveIndex();
  console.log("🚀 ~ file: Sign.tsx:30 ~ Sign ~ activeIndex:", activeIndex);
  const dispatch = useAppDispatch();
  const isChrome = useIsChrome();
  const swiper = useSwiper();
  useEffect(() => {
    dispatch(setOuterWidth(window.outerWidth));
  });
  useEffect(() => {
    if (swiper) {
      if (swiper.activeIndex !== activeIndex) {
        swiper.slideTo(activeIndex, 1000);
      }
    }
  }, [activeIndex]);
  return (
    <div
      className={`relative ${
        activeIndex === 0 ? "swiper-move-in" : "swiper-move-out"
      } max-md:pb-20 md:h-screen w-screen`}
      onWheel={(e: any) => {
        if (throttleFlag) return;
        if (innerWidth > 768) {
          if (e.deltaY > 20) {
            dispatch(setThrottleFlag(true));
            swiper.slideTo(1, 1000);
            dispatch(setActiveIndex(1));
            setTimeout(() => {
              dispatch(setThrottleFlag(false));
            }, 1200);
          }
        }
      }}
    >
      <div className="w-screen flex z-[30] max-md:top-[150px] justify-center left-0 absolute">
        <div
          style={{ border: "10px solid #1a1a1a" }}
          className="md:h-[727px] absolute w-screen"
        >
          {" "}
        </div>
        <video autoPlay muted loop className="w-[1440px] md:min-w-[1440px]">
          <source
            src={
              isChrome ? "/video/moireFringe.webm" : "/video/moireFringe.mp4"
            }
            type={`${isChrome ? "video/webm" : " video/mp4"}`}
          ></source>
        </video>
      </div>
      <div className="md:h-[728px] z-40 relative">
        <SignBgBox className=" absolute z-10 md:h-[728px] max-md:top-[100px] max-md:h-[324px] w-screen max-md:items-center flex justify-center top-0 left-0">
          {/* <Image className='absolute  w-screen' src={sign_bg} alt='' /> */}
          <Image
            className="absolute max-md:hidden sign-bg-1"
            src={sign_bg_1}
            alt=""
          />
          <Image
            className="absolute md:hidden mt-10"
            src={mobile_sign_bg_1}
            alt=""
          />
          <Image
            className="absolute md:hidden mt-0 left-0 w-screen"
            src={mobile_sign_bg_2}
            alt=""
          />
          <Image
            className="absolute w-screen max-md:hidden sign-bg-2 md:h-[730px]"
            src={sign_bg_2}
            alt=""
          />
        </SignBgBox>
        <div className=" relative z-20 flex justify-center items-center flex-col max-md:pt-[226px] pt-[302px] ">
          <div className="h-[155px] max-md:h-[72px]">
            <video autoPlay muted className="w-[612px] max-md:h-[82px]">
              <source
                src={isChrome ? "/video/sign.webm" : "/video/sign.mp4"}
                type={`${isChrome ? "video/webm" : " video/mp4"}`}
              ></source>
            </video>
          </div>
          <video
            autoPlay
            muted
            className="mt-[70px] max-md:mt-12 max-md:h-[21px] h-[49px]"
          >
            <source
              src={isChrome ? "/video/signBeam.webm" : "/video/signBeam.mp4"}
              type={`${isChrome ? "video/webm" : " video/mp4"}`}
            ></source>
          </video>
          <div className="flex md:mt-[72px] max-md:mt-12 max-md:w-screen w-[600px] overflow-hidden relative">
            <EchoRollBox className="md:flex justify-center  ">
              <div className="md:w-[600px] md:h-[30px] max-md:w-screen relative text-center">
                <p className="md:font-[250] max-md:font-[400] uppercase max-md:tracking-[6.72px] max-md:text-[14px] text-[18px] absolute z-10 top-[0px] left-[9px] md:tracking-[8.72px]  text-center md:w-[600px]  text-box">
                  听 见 世 界 的 回 响
                </p>
              </div>
              <div className="md:w-[780px] md:hidden max-md:mt-4 text-center">
                <p className=" font-[300] uppercase max-md:tracking-[3.84px] max-md:text-[12px] max-md:font-thin tracking-[0.51em] font-[Lexend] text-[26px]">
                  Echo of the World
                </p>
              </div>
              <video
                muted
                loop
                autoPlay
                className="EchoRollBoxVidoeMove max-md:hidden md:w-[600px]"
              >
                <source
                  src={
                    isChrome
                      ? "/video/Slogan-loop.webm"
                      : "/video/Slogan-loop.mp4"
                  }
                  type={`${isChrome ? "video/webm" : " video/mp4"}`}
                ></source>
              </video>
            </EchoRollBox>
          </div>
        </div>
      </div>
    </div>
  );
}
