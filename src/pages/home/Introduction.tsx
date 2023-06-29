
"use client";
import _ from "lodash";
import Video from "./Video";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { useAppDispatch } from "@/state/hooks";
import shadow_bg from '@/assets/image/svg/shadow-bg.svg'
import DreamOffer from "@/assets/image/svg/dreamOffer.gif";
import shadow_bg_2 from '@/assets/image/svg/shadow-bg-2.svg'
import { setActiveIndex, setThrottleFlag } from "@/state/application/reducer";
import lEtsRock_button from "@/assets/image/svg/lEt’s-Rock-button.svg";
import { useActiveIndex, useOuterWidth, useThrottleFlag } from "@/state/application/hooks";
import { LineBox, SliderBox, RollBox, ScaleBox, ButtonBox, ButtonBorder, ShadowBox, ShadowBox2 } from "@/utils/SignCss";


interface IntroductionProps {
    setIsOpenConsult: Function;
}
export default function Introduction({ setIsOpenConsult }: IntroductionProps) {
    const dispatch = useAppDispatch()
    const throttleFlag = useThrottleFlag()
    const swiper = useSwiper()
    const ActiveIndex = useActiveIndex()
    const innerWidth = useOuterWidth()
    const [buttonHover, setButtonHover] = useState<string>('')
    return (
        <div className="md:h-screen md:pb-20 md:overflow-auto"
            onScroll={(e: any) => {
                if (throttleFlag) return
                if (innerWidth > 768) {
                    if (e.target.scrollTop === 0) {
                        dispatch(setThrottleFlag(true))
                        dispatch(setActiveIndex(0))
                        swiper.slidePrev(1000)
                        setTimeout(() => {
                            dispatch(setThrottleFlag(false))
                        }, 1500)
                    }
                    if (e.target.scrollHeight - (e.target.scrollTop + e.target.clientHeight) < 1) {
                        dispatch(setThrottleFlag(true))
                        swiper.slideNext(1000);
                        dispatch(setActiveIndex(2))
                        setTimeout(() => {
                            dispatch(setThrottleFlag(false))
                        }, 1500)
                    }
                }
            }}
        >
            <div className="md:relative">
                <Image className=" max-md:hidden absolute left-0 top-[-100px]" src={shadow_bg} alt="" />
                <Image className=" max-md:hidden absolute right-0 !bottom-0" src={shadow_bg_2} alt="" />
                <div className="flex max-md:flex-col md:pt-[120px] items-center overflow-auto md:mx-auto gap-x-[192px] md:justify-center justify-between">
                    <div className="w-[224px] flex-col flex items-center">
                        <LineBox className="w-full overflow-hidden">
                            <div
                                className="w-20 ml-[143px] line-1 h-[1px] mt-2"
                                style={{ border: "0.5px solid #CCCCCC" }}
                            ></div>
                            <div
                                className="w-[65px] line-2 ml-[85px] h-[1px] mt-2"
                                style={{ border: "0.5px solid #CCCCCC" }}
                            ></div>
                            <div className="flex mt-[-2px] h-[86px] w-full gap-[6px] before justify-center items-end"></div>
                            <div
                                className="w-[62px] ml-[143px] line-3 h-[1px] mb-[8px]"
                                style={{ border: "0.5px solid #CCCCCC" }}
                            ></div>
                            <div
                                className="w-[62px] ml-[143px] line-4 h-[1px] mb-[8px]"
                                style={{ border: "0.5px solid #CCCCCC" }}
                            ></div>
                        </LineBox>
                        <div className="mt-6">
                            <div className="font-light leading-[220%] px-[2px] text-[14px] opacity-70 text-center">
                                十万象限 是杭州首家拥有
                            </div>
                            <div className="font-light leading-[220%] px-[2px] text-[14px] opacity-70 text-center">
                                十年音乐传媒行业经验的专业团队 由世界艺术名校海归艺术家导师及
                                独立音乐人联合创立
                            </div>
                        </div>
                    </div>
                    <div className="w-[224px] flex-col max-md:mt-[112px] flex items-center">
                        <div className="flex w-full py-[9px] px-[2px] gap-[27px] justify-center items-center">
                            <SliderBox className="relative flex justify-center">
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
                                        <p className="text-[32px] leading-[160%] font-[300]">规划</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[32px] leading-[160%] font-[300]">
                                            跨界艺术
                                        </p>
                                        <p className="text-[32px] leading-[160%] font-[300]">联动</p>
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
                            </SliderBox>
                        </div>
                        <div className="mt-6 py-[31px] h-[124px]">
                            <div className="font-light leading-[220%] px-[2px] text-[14px] opacity-70 text-center">
                                专攻于 音乐艺术作品集教育
                            </div>
                            <div className="font-light leading-[220%] px-[2px] text-[14px] opacity-70 text-center">
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
                            <div className="w-[224px] bg-cover mt-[-45px] bg-blend-lighten bg-[#1A1A1A] h-[203px]" style={{ backgroundImage: `url(${DreamOffer.src})` }}></div>
                        </ScaleBox>
                        <div className="py-4">
                            <div className="font-light leading-[220%] px-[2px] text-[14px] opacity-70 text-center">
                                以专业的教学专注的态度帮助每一位热爱音乐的学生拿到dream offer
                                开发艺术领域的无限可能性
                            </div>
                        </div>
                    </div>
                </div>
                <Video />
                <ButtonBox className="flex mt-16 w-screen overflow-hidden items-center relative justify-center">
                    <ButtonBorder
                        style={{ borderColor: "rgb(157, 54, 11,0.1)" }}
                        className=" opacity-100 z-20 max-md:py-2 py-[10px] rounded-[55px] px-[73px]"
                    >
                        <ButtonBorder
                            style={{ borderColor: "rgb(157, 54, 11,0.2)" }}
                            className=" opacity-100 max-md:py-2 py-[10px] rounded-[55px] px-[76px]"
                        >
                            <ButtonBorder
                                style={{ borderColor: "rgb(157, 54, 11,0.3)" }}
                                className=" opacity-100 max-md:py-[7px] py-[9px] rounded-[55px] px-[61px]"
                            >
                                <ButtonBorder
                                    style={{ borderColor: "rgb(157, 54, 11,0.4)" }}
                                    className={`${buttonHover === 'hover' ? ' md:scale-[1.01]' : ''} transition-all duration-500 opacity-100 max-md:py-[6px] py-[8px] rounded-[55px] px-[49px]`}
                                >
                                    <ButtonBorder
                                        style={{ borderColor: "rgb(157, 54, 11,0.5)" }}
                                        className={`opacity-100 max-md:py-[6px] py-[8px] rounded-[55px] max-md:px-[17px] px-[34px] transition-all duration-500 ${buttonHover === 'hover' ? ' md:scale-[1.02]' : ''}`}
                                    >
                                        <ButtonBorder
                                            style={{ borderColor: "rgb(157, 54, 11,0.6)" }}
                                            className={`opacity-100 max-md:py-[6px] ${buttonHover === 'hover' ? ' md:scale-[1.03]' : ''} transition-all duration-500 py-[9px] rounded-[55px] max-md:px-[15px] px-[27px]`}
                                        >
                                            <ButtonBorder
                                                style={{ borderColor: "rgb(157, 54, 11,0.7)" }}
                                                className={`opacity-100 max-md:py-[6px] ${buttonHover === 'hover' ? ' md:scale-[1.04]' : ''} transition-all duration-500 py-[8px] rounded-[55px] max-md:px-[13px] px-[23px]`}
                                            >
                                                <ButtonBorder
                                                    style={{ borderColor: "rgb(157, 54, 11,0.8)" }}
                                                    className={`opacity-100 md:px-[24px] ${buttonHover === 'hover' ? ' md:scale-[1.05]' : ''} transition-all duration-500 py-[6px] max-md:py-[6px] rounded-[55px]`}
                                                >
                                                    <button
                                                        className={`bg-[#FF4B00] ${buttonHover === 'hover' ? ' md:scale-[1.1]' : ''} max-md:rounded-[28px] rounded-[39px] flex transition-all duration-500 justify-center relative items-center max-md:w-[255px] max-md:h-[56px] w-[314px] max-md:mx-2  h-20`}
                                                        onClick={() => {
                                                            setIsOpenConsult(1);
                                                        }}
                                                        onMouseEnter={() => {
                                                            setButtonHover('hover')
                                                        }}
                                                        onMouseLeave={() => {
                                                            setButtonHover('')
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
    )
}