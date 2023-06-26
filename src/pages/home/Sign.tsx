"use client";
import Image from "next/image";
import sign_logo from "@/assets/image/svg/sign-logo.svg";
import mobile_sign_bg_2 from "@/assets/image/mobile/mobile-sign-bg-2.png";
import mobile_sign_bg_1 from "@/assets/image/mobile/mobile-sign-bg-1.png";
import moireFringe_bg from "@/assets/image/svg/moireFringe-bg.svg";
import sign_text from "@/assets/image/svg/sign-text.svg";
import sign_bg_1 from "@/assets/image/svg/sign-bg-1.svg";
import moireFringe_bg_1 from "@/assets/image/svg/moireFringe-bg-1.svg";
import sign_bg_2 from "@/assets/image/svg/sign-bg-2.svg";
import icon_star from "@/assets/image/svg/icon-star.svg";
import lEtsRock_button from "@/assets/image/svg/lEt’s-Rock-button.svg";
import {
  Box,
  ButtonBorder,
  ButtonBox,
  EchoRollBox,
  LineBox,
  MoireFringe,
  RollBox,
  ScaleBox,
  ShadowBox,
  ShadowBox2,
  SignBgBox,
  SingLogo,
  SliderBox,
  TextBox,
} from "./SignCss";
import Video from "./Video";
import { useState } from "react";
interface SignProps {
  isOpenConsult: number;
  setIsOpenConsult: Function;
}

export default function Sign({ isOpenConsult, setIsOpenConsult }: SignProps) {
  const [buttonHover,setButtonHover] = useState<string>('')
  console.log("🚀 ~ file: Sign.tsx:38 ~ Sign ~ buttonHover:", buttonHover)
  return (
    <div className="relative w-screen">
      <MoireFringe className="w-full max-md:top-[-100px] flex z-[30] justify-center items-center left-0 absolute h-[728px]">
        {/* <Image
          className="absolute moireFringe  !w-screen !h-[1400px] z-30"
          src={moireFringe_bg_1}
          alt=""
        />
        <Image className="absolute z-20" src={moireFringe_bg} alt="" /> */}
        <video
          autoPlay
          muted 
          className="mx-auto"
          width={"100%"}
        >
          <source src="/video/moireFringe.mp4" type="video/mp4"></source>
        </video>
      </MoireFringe>
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
            <SingLogo className="h-[155px] max-md:h-[72px]">
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
            </SingLogo>
          </div>
          <TextBox className="mt-[70px] max-md:mt-12 max-md:h-[21px] h-[49px]">
            <div className="flex max-md:h-[21px] ">
              <div className="w-[818px] max-md:w-[343px] max-md:h-[21px] h-[49px]">
                <Image
                  className=" w-[818px] max-md:w-[343px] max-md:h-[21px] h-[49px]"
                  src={sign_text}
                  alt=""
                />
              </div>
            </div>
          </TextBox>
          <div className="flex md:mt-[72px] max-md:mt-12 max-md:w-screen w-[780px] overflow-hidden">
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
      <div className="flex max-md:flex-col items-center mt-[280px] md:px-[192px] justify-between">
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
          <ScaleBox className=" flex flex-col py-[14px] items-center justify-center">
            <p className="font-[Lexend] textScale z-30 bg-[#1A1A1A] w-[98px] text-[28px] leading-[100%] font-[250]">
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
            </Box>
          </ScaleBox>
          <div className="mt-6 py-4">
            <div className="font-light leading-[220%] px-[2px] text-[14px] opacity-70 text-center">
              以专业的教学专注的态度帮助每一位热爱音乐的学生拿到dream offer
              开发艺术领域的无限可能性
            </div>
          </div>
        </div>
      </div>
      <Video />
      <ButtonBox className="flex mt-16 items-center relative justify-center">
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
                className={`${buttonHover==='hover'?' scale-[1.01]':''} transition-all duration-500 opacity-100 max-md:py-[6px] py-[8px] rounded-[55px] px-[49px]`}
              >
                <ButtonBorder
                  style={{ borderColor: "rgb(157, 54, 11,0.5)" }}
                  className={`opacity-100 max-md:py-[6px] py-[8px] rounded-[55px] max-md:px-[17px] px-[34px] transition-all duration-500 ${buttonHover==='hover'?' scale-[1.02]':''}`}
                >
                  <ButtonBorder
                    style={{ borderColor: "rgb(157, 54, 11,0.6)" }}
                    className={`opacity-100 max-md:py-[6px] ${buttonHover==='hover'?' scale-[1.03]':''} transition-all duration-500 py-[9px] rounded-[55px] max-md:px-[15px] px-[27px]`}
                  >
                    <ButtonBorder
                      style={{ borderColor: "rgb(157, 54, 11,0.7)" }}
                      className={`opacity-100 max-md:py-[6px] ${buttonHover==='hover'?' scale-[1.04]':''} transition-all duration-500 py-[8px] rounded-[55px] max-md:px-[13px] px-[23px]`}
                    >
                      <ButtonBorder
                        style={{ borderColor: "rgb(157, 54, 11,0.8)" }}
                        className={`opacity-100 md:px-[24px] ${buttonHover==='hover'?' scale-[1.05]':''} transition-all duration-500 py-[6px] max-md:py-[6px] rounded-[55px]`}
                      >
                        <button
                          className={`bg-[#FF4B00] ${buttonHover==='hover'?' scale-[1.1]':''} max-md:rounded-[28px] rounded-[39px] flex transition-all duration-500 justify-center relative items-center max-md:w-[255px] max-md:h-[56px] w-[314px] max-md:mx-2  h-20`}
                          onClick={() => {
                            setIsOpenConsult(1);
                          }}
                          onMouseEnter={()=>{
                            setButtonHover('hover')
                          }}
                          onMouseLeave={()=>{
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
                          <div className="absolute w-[314px] rounded-[39px] overflow-hidden h-20 z-10">
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
  );
}
