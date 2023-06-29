"use client";
import mobileOurTeam_bg from "@/assets/image/mobile/mobileOurTeam-bg.svg";
import MentorInformation from "@/components/Modal/MentorInformation";
import { teachers } from "@/utils/ourTeam";
import { useState } from "react";
import styled from "styled-components";
import SignCharacteristic from "./SignCharacteristic";
import { useSwiper } from "swiper/react";
import _ from "lodash";
import { useIsChrome, useOuterWidth, useThrottleFlag } from "@/state/application/hooks";
import { useAppDispatch } from "@/state/hooks";
import { setActiveIndex, setThrottleFlag } from "@/state/application/reducer";

const OurTeamBox = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
  @media (min-width: 768px) {
    margin-top: 100px;
    padding-bottom: 308px;
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
// const OurTeamBlur = styled.div`
//   width: 100%;
//   height: 100%;
//   @media (min-width: 768px) {
//     padding-bottom: 80px;
//     backdrop-filter: blur(250px);
//     border-radius: 48px;
//   }
// `;
const CardBox = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 150ms;
  background-size: contain;
  background-repeat: no-repeat;
  @media not all and (min-width: 768px) {
    width: 154px;
    height: 239px;
  }
`;
const CardFilterBox = styled.div`
  width: 237px;
  height: 368px;
  background: linear-gradient(
    0deg,
    #ececec 10.27%,
    rgba(236, 236, 236, 0) 100%
  );
  @media not all and (min-width: 768px) {
    width: 154px;
    height: 239px;
  }
`;
const NameOur = styled.p`
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
    color: #00F;
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
  @media (min-width: 768px){
    animation: teachersRoll 20s linear infinite;
    &.hover{
        animation-play-state: paused;
    }
    @keyframes teachersRoll {
        from {
            transform: translateX(0px);
        }
        to {
            transform: translateX(-1824px);
        }
    }
  }
`;
interface OurTeamProps {
}
export default function OurTeam({ }: OurTeamProps) {
    const swiper = useSwiper()
    const dispatch = useAppDispatch()
    const throttleFlag = useThrottleFlag()
    const innerWidth = useOuterWidth()
    const isChrome = useIsChrome()
    const [right, setRight] = useState<number>(0)
    const [isOpen, setIsOpen] = useState<number>(0)
    const [textValue, setTextValue] = useState<number>(0)
    const [cardHover, setCardHover] = useState<string>('')
    const [characteristicType, setCharacteristicType] = useState<number>(0);
    return (
        <div className=" md:h-screen md:overflow-auto"
            onScroll={
                (e: any) => {
                    if (throttleFlag) return
                    if (innerWidth > 768) {
                        if (e.target.scrollTop === 0) {
                            dispatch(setThrottleFlag(true))
                            swiper.slidePrev(1000)
                            dispatch(setActiveIndex(3))
                            setTimeout(() => {
                                dispatch(setThrottleFlag(false))
                            }, 1500)
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
                        className="scale-[1.6]"
                    >
                        <source src={isChrome ? '/video/OurTeam-bg.webm' : '/video/OurTeam-bg.mp4'} type={`${isChrome ? 'video/webm' : ' video/mp4'}`}></source>
                    </video>
                </div>
                <OurTeamBg>
                    <div className="md:flex md:pt-[120px] max-md:pt-6 md:ml-[144px] md:mr-[120px] justify-between items-center">
                        <div className="max-md:text-center">
                            <p className=" font-extrabold max-md:text-[28px] text-[56px] leading-[120%] text-[#1a1a1a]">
                                师资团队
                            </p>
                            <p className=" tracking-[0.51em] max-md:tracking-[7.14px] max-md:mt-3 max-md:text-[14px] font-normal text-[24px] mt-3 font-[Lexend] leading-[160%] text-[#1a1a1a]">
                                OUR TEAM
                            </p>
                        </div>
                        <div
                            style={{ border: "1px solid rgba(26, 26, 26, 0.5)" }}
                            className=" max-md:mx-4 gap-2 mt-8 flex p-[15px]"
                        >
                            <div className="w-[119px] max-md:w-[99px] text-center">
                                <p className=" font-normal max-md:text-[24] text-[32px] font-[Lexend] leading-[100%] text-[#1a1a1a]">
                                    6
                                </p>
                                <p className=" font-light text-[14px] md:mt-2 max-md:text-[12px] leading-[180%] text-[#1a1a1a]">
                                    全职一线导师
                                </p>
                            </div>
                            <div className="w-[119px] max-md:w-[99px] text-center">
                                <p className=" font-normal max-md:text-[24] text-[32px] font-[Lexend] leading-[100%] text-[#1a1a1a]">
                                    150+
                                </p>
                                <p className=" font-light text-[14px] md:mt-2 max-md:text-[12px] leading-[180%] text-[#1a1a1a]">
                                    兼职音乐导师
                                </p>
                            </div>
                            <div className="w-[119px] max-md:w-[99px] text-center">
                                <p className=" font-normal text-[32px] max-md:text-[24] font-[Lexend] leading-[100%] text-[#1a1a1a]">
                                    5
                                </p>
                                <p className=" font-light text-[14px] md:mt-2 max-md:text-[12px] leading-[180%] text-[#1a1a1a]">
                                    资深留学规划师
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-screen md:gap-[67px] overflow-hidden max-md:pb-20 max-md:mt-10 md:py-20">
                        <RollBox className={`flex ${cardHover} max-md:w-screen md:w-[3581px] max-md:pl-4 max-md:pr-[29px] max-md:flex-wrap max-md:justify-between max-md:gap-x-[22px] max-md:gap-y-[24px] md:gap-[67px]`}>
                            {[...teachers, ...teachers, ...teachers].map(
                                (el: any, index: number) => (
                                    <CardBox
                                        onMouseEnter={() => {
                                            setCardHover('hover')
                                        }}
                                        onMouseLeave={() => {
                                            setCardHover('')
                                        }}
                                        onClick={() => {
                                            setIsOpen(1)
                                            setTextValue(el.value)
                                        }}
                                        style={{ backgroundImage: `url(${el.image.src})` }}
                                        key={`${el.name}-${index}-teachers`}
                                        className={`${index > 5 ? 'max-md:hidden' : ''} md:hover:translate-y-[-16px]`}
                                    >
                                        <CardFilterBox className="relative">
                                            <div className="p-6 pr-[17px] max-md:p-3 max-md:w-[154px] max-md:h-[137px] w-[253px] absolute bottom-0 max-md:right-[-12px] right-[-51px] h-[184px] ml-[51px] bg-[#FFFFFF]">
                                                <NameOur>{el.name}</NameOur>
                                                <p className="font-normal text-[16px] max-md:text-[12px] mt-2 max-md:mb-2 mb-4 leading-[120%] uppercase text-[#1a1a1a]">
                                                    {el.position}
                                                </p>
                                                <p className="font-light text-[12px] max-md:leading-[18px] max-md:opacity-70 leading-[180%] uppercase opacity-80 text-[#1a1a1a]">
                                                    {el.works}
                                                </p>
                                            </div>
                                        </CardFilterBox>
                                    </CardBox>
                                ))}
                        </RollBox>
                    </div>
                </OurTeamBg>
                <MentorInformation textValue={textValue} isOpen={isOpen} setIsOpen={setIsOpen} />
                <div style={{ background: 'linear-gradient(180deg, rgba(26, 26, 26, 0.00) 0%, #1A1A1A 100%)' }} className='w-screen z-50 absolute bottom-0 left-0  h-[228px]'></div>
            </OurTeamBox>
            <SignCharacteristic
                right={right}
                setRight={setRight}
                innerWidth={innerWidth}
                characteristicType={characteristicType}
                setCharacteristicType={setCharacteristicType}
            />
        </div>
    );
}
