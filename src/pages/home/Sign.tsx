"use client";
import { use, useEffect } from "react";
import Image from "next/image";
import mobile_sign_bg_2 from "@/assets/image/mobile/mobile-sign-bg-2.png";
import mobile_sign_bg_1 from "@/assets/image/mobile/mobile-sign-bg-1.png";
import sign_bg_1 from "@/assets/image/svg/sign-bg-1.svg";
import sign_bg_2 from "@/assets/image/svg/sign-bg-2.svg";
import {
  EchoRollBox,
  SignBgBox,
  SingLogo,
  TextBox,
} from "../../styles/SignCss";
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
  setOuterWidth,
  setThrottleFlag,
} from "@/state/application/reducer";

interface SignProps {}
export default function Sign({}: SignProps) {
  const throttleFlag = useThrottleFlag();
  const innerWidth = useOuterWidth();
  const activeIndex = useActiveIndex();
  const dispatch = useAppDispatch();
  const isChrome = useIsChrome();
  const swiper = useSwiper();
  useEffect(() => {
    dispatch(setOuterWidth(window.outerWidth));
  });
  useEffect(() => {
    if (swiper) {
      swiper.slideTo(activeIndex, 1000, false);
    }
  }, [activeIndex]);
  return (
    <div
      className={`relative ${
        activeIndex === 0 ? "swiper-move-in" : "swiper-move-out"
      } opacity-0 max-md:pb-20 md:h-screen w-screen`}
      onWheel={(e: any) => {
        if (throttleFlag) return;
        if (innerWidth > 768) {
          if (e.deltaY > 20) {
            dispatch(setThrottleFlag(true));
            swiper.slideNext(1000);
            dispatch(setActiveIndex(1));
            setTimeout(() => {
              dispatch(setThrottleFlag(false));
            }, 1000);
          }
        }
      }}
    >
      <div className="w-screen flex z-[30] max-md:top-[150px] left-0 absolute">
        <div
          style={{ border: "10px solid #1a1a1a" }}
          className="md:h-[727px] absolute w-screen"
        >
          {" "}
        </div>
        <video autoPlay muted loop className="w-screen">
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
            className="absolute md:hidden mt-10 sign-bg-1"
            src={mobile_sign_bg_1}
            alt=""
          />
          <Image
            className="absolute md:hidden w-screen sign-bg-2"
            src={mobile_sign_bg_2}
            alt=""
          />
          <Image
            className="absolute max-md:hidden w-screen sign-bg-2"
            src={sign_bg_2}
            alt=""
          />
        </SignBgBox>
        <div className=" relative z-20 flex justify-center items-center flex-col max-md:pt-[246px] pt-[302px] ">
          <div className="h-[155px] max-md:h-[72px]">
            {/* <SingLogo className="h-[155px] max-md:h-[72px]">
              <div className="img-box-1 max-md:h-[14.4px] h-[20px] overflow-hidden">
                <Image
                  className="h-[155px] max-md:h-[72px] "
                  src={sign_logo}
                  alt=""
                />
              </div>
              <div className="img-box-2 max-md:h-[14.4px] h-[50px] overflow-hidden">
                <Image
                  className="h-[155px] max-md:mt-[-14.4px] max-md:h-[72px] mt-[-20px] "
                  src={sign_logo}
                  alt=""
                />
              </div>
              <div className="img-box-3 max-md:h-[14.4px] h-[30px] overflow-hidden">
                <Image
                  className="h-[155px] max-md:h-[72px] max-md:mt-[-28.8px] mt-[-70px] "
                  src={sign_logo}
                  alt=""
                />
              </div>
              <div className="img-box-4 max-md:h-[14.4px]  h-[10px] overflow-hidden">
                <Image
                  className="h-[155px] max-md:h-[72px] max-md:mt-[-43.2px] mt-[-100px] "
                  src={sign_logo}
                  alt=""
                />
              </div>
              <div className="img-box-5 max-md:h-[14.4px] h-[45px] overflow-hidden">
                <Image
                  className="h-[155px] max-md:h-[72px] max-md:mt-[-57.6px] mt-[-110px] "
                  src={sign_logo}
                  alt=""
                />
              </div>
            </SingLogo> */}
            <video autoPlay muted className="h-[155px]">
              <source
                src={isChrome ? "/video/sign.webm" : "/video/sign.mp4"}
                type={`${isChrome ? "video/webm" : " video/mp4"}`}
              ></source>
            </video>
          </div>
          {/* <TextBox className="mt-[70px] max-md:mt-12 max-md:h-[21px] h-[49px]">
            <div className="flex max-md:h-[21px] ">
              <div className="w-[818px] max-md:w-[343px] max-md:h-[21px] h-[49px]">
                <Image
                  className=" w-[818px] max-md:w-[343px] max-md:h-[21px] h-[49px]"
                  src={sign_text}
                  alt=""
                />
              </div>
            </div>
          </TextBox> */}
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
          <div className="flex md:mt-[72px] max-md:mt-12 max-md:w-screen w-[780px]  overflow-hidden">
            <EchoRollBox className="md:flex">
              <div className="md:w-[780px] max-md:w-screen  text-center">
                <p className="md:font-normal uppercase max-md:tracking-[6.72px] max-md:text-[14px] tracking-[1em] text-[26px]">
                  听见世界的回响
                </p>
              </div>
              <div className="md:w-[780px] max-md:mt-4 text-center">
                <p className=" font-[300] uppercase max-md:tracking-[3.84px] max-md:text-[12px] max-md:font-thin tracking-[0.51em] font-[Lexend] text-[26px]">
                  Echo of the World
                </p>
              </div>
              <div className="md:w-[780px] max-md:hidden text-center">
                <p className=" font-normal uppercase tracking-[1em] text-[26px]">
                  听见世界的回响
                </p>
              </div>
            </EchoRollBox>
          </div>
        </div>
      </div>
    </div>
  );
}
