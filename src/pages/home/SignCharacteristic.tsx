"use client";
import Image from "next/image";
import _ from "lodash";
import products_right from "@/assets/image/svg/icon-products-right.svg";
import characteristic_bg_1 from "@/assets/image/svg/characteristic-bg-1.svg";
import characteristic_bg_2 from "@/assets/image/svg/characteristic-bg-2.svg";
import mobile_SignCharacteristic from "@/assets/image/mobile/mobile-SignCharacteristic.svg";
import signCharacteristic_title from "@/assets/image/mobile/mobile-signCharacteristic-title.svg";
import signCharacteristic_active from "@/assets/image/mobile/icon-mobile-signCharacteristic-active.svg";
import mobile_signCharacteristic_bg from "@/assets/image/mobile/mobile-signCharacteristic-bg.svg";
import characteristic_bg_logo from "@/assets/image/svg/characteristic-bg-logo.png";
import AboutUs_bg from "@/assets/image/svg/aboutUs-bg.png";
import signCharacteristic_bg from "@/assets/image/svg/signCharacteristic-bg.svg";
import styled from "styled-components";
import { useState } from "react";
import { useAppDispatch } from "@/state/hooks";
import { useThrottleFlag } from "@/state/application/hooks";
import { setActiveIndex, setThrottleFlag } from "@/state/application/reducer";
import { useSwiper } from "swiper/react";
import TitleBeam from "@/components/TitleBeam";

const SignBox = styled.div`
  z-index: 2;
  @media (min-width: 768px) {
    width: 100vw;
    .WhySIGN {
      background-size: 100% !important;
      background-repeat: no-repeat !important;
    }
    .ABOUT {
      opacity: 1;
      /* background-image: url(${AboutUs_bg.src}) !important; */
      background-size: 100% !important;
      background-repeat: no-repeat !important;
    }
      animation: characteristic-bg-move 2ms;
      @keyframes characteristic-bg-move {
        0%{
          opacity: 0;
        }
        50%{
          opacity: 0;
        }
        100%{
          opacity: 1;

      }
    }
  }
`;
const Box = styled.div`
  @media not all and (min-width: 768px) {
    width: 100vw;
    background: url(${mobile_SignCharacteristic.src}),
      linear-gradient(180deg, rgba(26, 26, 26, 0) 0%, #1a1a1a 9.17%) !important;
    background-size: cover !important;
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
    font-family: "Alibaba PuHuiTi 2.0";
    line-height: 120%;
    text-transform: uppercase;
    padding: 12px 11px 12px 15px;
    border: 1px solid rgba(204, 204, 204, 0.5);
  }
`;
interface SignCharacteristicProps {
  characteristicType: number;
  innerWidth: number;
  setIsOpenCampus: Function;
  setCharacteristicType: Function;
  right: number;
  setRight: Function;
}
export default function SignCharacteristic({
  innerWidth,
  setRight,
  right,
  characteristicType,
  setCharacteristicType,
  setIsOpenCampus,
}: SignCharacteristicProps) {
  const swiper = useSwiper();
  const dispatch = useAppDispatch();
  const throttleFlag = useThrottleFlag();
  const [mobileRight, setMobileRight] = useState<number>(0);
  return (
    <Box
      className={`flex w-screen max-md:pb-[210px] z-50 opacity-0 md:overflow-hidden ${swiper?.activeIndex === 3 ? "swiper-move-in" : "swiper-move-out"
        }`}
    >
      <div className="flex relative">
        <SignBox
          className={`md:flex md:h-[1050px] max-md:pt-[300px] relative w-screen items-center justify-center`}
          onWheelCapture={(e: any) => {
            if (throttleFlag) return;
            if (e.deltaY < 10 && e.deltaY > -10) return;
            if (innerWidth > 768) {
              if (right === 0) {
                if (characteristicType === 0) {
                  if (e.deltaY > 0) {
                    dispatch(setThrottleFlag(true));
                    setCharacteristicType(1);
                    setTimeout(() => {
                      dispatch(setThrottleFlag(false));
                    }, 700);
                  }
                } else if (characteristicType === 3) {
                  if (e.deltaY < 0) {
                    dispatch(setThrottleFlag(true));
                    setCharacteristicType(2);
                    setTimeout(() => {
                      dispatch(setThrottleFlag(false));
                    }, 700);
                  }
                  if (e.deltaY > 0) {
                    dispatch(setThrottleFlag(true));
                    setRight(1);
                    setTimeout(() => {
                      dispatch(setThrottleFlag(false));
                    }, 700);
                  }
                } else {
                  dispatch(setThrottleFlag(true));
                  if (e.deltaY < 0) {
                    setCharacteristicType(characteristicType - 1);
                  } else {
                    setCharacteristicType(characteristicType + 1);
                  }
                  setTimeout(() => {
                    dispatch(setThrottleFlag(false));
                  }, 700);
                }
              } else {
                if (right === 1) {
                  if (e.deltaY < 0) {
                    dispatch(setThrottleFlag(true));
                    setRight(0);
                    setTimeout(() => {
                      dispatch(setThrottleFlag(false));
                    }, 700);
                  } else {
                    dispatch(setThrottleFlag(true));
                    setRight(2);
                    setTimeout(() => {
                      dispatch(setThrottleFlag(false));
                    }, 700);
                  }
                } else {
                  if (e.deltaY < 0) {
                    dispatch(setThrottleFlag(true));
                    setRight(1);
                    setTimeout(() => {
                      dispatch(setThrottleFlag(false));
                    }, 700);
                  } else {
                    if (
                      e.target.scrollHeight -
                      (e.target.scrollTop + e.target.clientHeight) <
                      1 &&
                      right === 2
                    ) {
                      dispatch(setThrottleFlag(true));
                      swiper.slideNext(1000);
                      dispatch(setActiveIndex(4));
                      setTimeout(() => {
                        dispatch(setThrottleFlag(false));
                      }, 1700);
                    }
                  }
                }
              }
            }
          }}
        >
          <div
            className={`max-md:hidden absolute top-0 left-0 w-full h-full`}
          >
            <Image src={AboutUs_bg}  className={`top-0 ${right === 0 ? "opacity-0" : "opacity-100"
              } transition-all duration-1000 absolute left-0 w-full h-full`} alt=""/>
            <Image className={`absolute top-[-200px] transition-all duration-1000 max-w-[0px] min-h-full ${right !== 0 ? '' : 'max-w-[1000px]'} max-md:hidden right-0`} src={characteristic_bg_1} alt="" />
            <Image className={`absolute bottom-[-100px] transition-all duration-1000 max-w-[0px] min-h-full ${right !== 0 ? '' : 'max-w-[1000px]'}  max-md:hidden left-0`} src={characteristic_bg_2} alt="" />
            <Image className={`absolute transition-all duration-1000  bottom-[52px] ${right !== 0 ? ' right-[-350px]' : characteristicType === 1 ? ' bottom-[85px]' : characteristicType === 2 ? ' bottom-[116px]' : characteristicType === 3 ? ' bottom-[148px]' : ''}  max-md:hidden right-0 `} src={characteristic_bg_logo} alt="" />
          </div>
          <div
            className={`md:flex relative md:w-[1200px] w-screen items-center `}
          >
            <SignCharacteristicBox
              className={`${right !== 0 ? " translate-x-[908px]" : "translate-x-[0px]"
                } max-md:pl-[68px] max-md:pb-[72px] max-md:pr-[77px] max-md:pt-[135px] transition-all duration-1000`}
            >
              <div>
                <div className="max-md:flex justify-between">
                  <p
                    className=" font-light text-[56px] max-md:text-[24px] leading-[120%]"
                    onClick={() => setMobileRight(0)}
                  >{`${right !== 0
                    ? right === 1
                      ? "关于我们"
                      : "发展历程"
                    : "公司特色"
                    }`}</p>
                  <p
                    className=" font-light text-[56px] max-md:text-[24px] md:hidden leading-[120%]"
                    onClick={() => setMobileRight(1)}
                  >
                    关于我们
                  </p>
                </div>
                <div className="mt-[18px] md:hidden relative h-2 w-full">
                  <Image
                    className={`absolute transition-all ${mobileRight === 0
                      ? "translate-x-[16px] left-0"
                      : "translate-x-[-125%] left-[100%]"
                      }`}
                    src={signCharacteristic_active}
                    alt=""
                  />
                </div>
                <p
                  className={`font-extralight max-md:hidden font-[Lexend] text-[22px] ${right !== 0
                    ? right === 1
                      ? "tracking-[15.18px]"
                      : "tracking-[2.2px]"
                    : "tracking-[0.53em]"
                    } mt-4 opacity-60 uppercase leading-[160%]`}
                >{`${right !== 0
                  ? right === 1
                    ? "ABOUT US"
                    : "Development Path"
                  : "Why SIGN?"
                  }`}</p>
              </div>
            </SignCharacteristicBox>
            <div
              className={`transition-all duration-1000 md:flex items-center ${right !== 0
                ? " flex-row-reverse translate-x-[510px] md:opacity-0"
                : "md:opacity-100 translate-x-[0px]"
                }`}
            >
              <div className={`md:ml-[202px]`}>
                {mobileRight === 0 ? (
                  <div className="md:h-[488px] max-md:px-6 overflow-hidden">
                    <div
                      className={`transition-all duration-300 ${characteristicType === 1
                        ? "translate-y-[-488px]"
                        : characteristicType === 2
                          ? "translate-y-[-976px]"
                          : characteristicType === 3
                            ? "translate-y-[-1464px]"
                            : ""
                        } `}
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
                            type={`${characteristicType === 0 ? "open" : "down"
                              }`}
                          />
                        </div>
                        <div
                          className={`md:w-[488px] md:opacity-0 duration-1000 transition-all ${characteristicType === 0
                            ? "md:opacity-100"
                            : ""
                            } md:opacity-0 mt-12`}
                        >
                          <p className="text-[14px] max-md:hidden max-md:leading-[200%] font-light leading-[220%] opacity-70">
                            高标准高要求的一线资深海归音乐导师团队，拥有五年以上的一线行业经验及教学经验，独树一帜的从业思维教学结合往年丰富的海外院校申请经验，让学生接受最新的音乐专业讯息，带来的音乐艺术理念、音乐创作思维和声音设计紧跟时代潮流，富有指导性和前瞻性。
                          </p>
                          <p className="text-[14px] max-md:hidden my-[31px] max-md:leading-[200%] font-light leading-[220%] opacity-70">
                            已配备全职音乐导师6人，兼职音乐导师150+，音乐产业规划师1人，专业录音师2人，资深留学规划师2人，专业师资团队由海外各个院校的海归音乐导师、一线声音从业者及交响乐团演奏家组成。
                          </p>
                          <p className="text-[14px] max-md:hidden font-light max-md:text-[12px] max-md:leading-[200%] leading-[220%] opacity-70">
                            由SIGNART名校录取导师团队全程跟踪，各领域专业导师多对一服务，实现名校战略录取。
                          </p>
                          <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3 font-light leading-[220%] opacity-70">
                            资深海归音乐导师团队，全职导师8人，兼职导师150+，由一线资深从业者及专业院团演奏家及教师组成。
                          </p>
                          <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3 font-light leading-[220%] opacity-70">
                            数次参与奥运会，冬奥会，亚运会等重大项目的全职作品集审核团队。
                          </p>
                          <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3 font-light leading-[220%] opacity-70">
                            5年以上一线从业经验及教学经验，最新的行业思维，独树一帜的产学研联动。
                          </p>
                          <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3 font-light leading-[220%] opacity-70">
                            独家配备全职音乐录音师，混音师，发行级母带处理师，摄影灯光拍摄团队。
                          </p>
                          <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3 font-light leading-[220%] opacity-70">
                            7年以上留学申请经验的全职资深规划师及后端文书服务团队。
                          </p>
                          <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] font-light leading-[220%] opacity-70">
                            丰富的一线背景提升项目，海外大师建联，海外管弦乐录制资源。
                          </p>
                        </div>
                      </div>
                      <div
                        className={`md:h-[488px] duration-1000 md:opacity-0 transition-all md:w-[680px] max-md:mt-20 flex ${characteristicType === 1
                          ? "md:opacity-100"
                          : ""
                          } flex-col justify-center`}
                      >
                        <div className="flex ">
                          <p className="text-[40px] mr-[26px] max-md:mr-[16px] font-normal leading-[120%] max-md:text-[22px] text-[#FF4B00]">
                            独家顶级设备配置
                          </p>
                          <Image
                            className="md:hidden max-md:w-[94px] max-md:h-6"
                            src={signCharacteristic_title}
                            alt=""
                          />
                          <TitleBeam
                            type={`${characteristicType === 1 ? "open" : "down"
                              }`}
                          />
                        </div>
                        <p className="text-[14px] max-md:hidden md:w-[488px] mt-12 font-light leading-[320%] opacity-70">
                          浙江省内最大的国际音乐教育空间
                          <br />
                          西兴+UDC双校区配置，教学实践总面积达1500m2+
                          <br />
                          独家7.1.4 Dolby Atmos电影混录棚
                          <br />
                          独家5.1.4 Dolby Atmos音乐混录棚
                          <br />
                          独家现代电声乐队排练录音棚
                          <br />
                          独家自然混响古典演奏录音棚
                          <br />
                          Foley拟音棚，声音设计实验室，音频编辑室，独立编曲间，表演教室等
                          <br />
                          ITU标准声学环境垂直于作品全方向全流程的学习与实践
                          <br />
                        </p>
                        <p className="text-[14px] mt-12 md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3 font-light leading-[220%] opacity-70">
                          浙江省内最大的国际音乐教育空间
                        </p>
                        <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3 font-light leading-[220%] opacity-70">
                          西兴+UDC双校区配置，教学实践总面积达1500m2+
                        </p>
                        <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3 font-light leading-[220%] opacity-70">
                          独家7.1.4 Dolby Atmos电影混录棚
                        </p>
                        <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3 font-light leading-[220%] opacity-70">
                          独家5.1.4 Dolby Atmos音乐混录棚
                        </p>
                        <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3 font-light leading-[220%] opacity-70">
                          独家现代电声乐队排练录音棚
                        </p>
                        <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3 font-light leading-[220%] opacity-70">
                          独家自然混响古典演奏录音棚
                        </p>
                        <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3 font-light leading-[220%] opacity-70">
                          Foley拟音棚，声音设计实验室，音频编辑室，独立编曲间，表演教室等
                        </p>
                        <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] font-light leading-[220%] opacity-70">
                          ITU标准声学环境垂直于作品全方向全流程的学习与实践
                        </p>
                      </div>
                      <div
                        className={`md:h-[488px] md:opacity-0 duration-1000 transition-all md:w-[680px] ${characteristicType === 2
                          ? "md:opacity-100"
                          : ""
                          } max-md:mt-20 flex flex-col justify-center`}
                      >
                        <div className="flex">
                          <p className="text-[40px] mr-[26px] max-md:mr-[16px] font-normal leading-[120%] max-md:text-[22px] text-[#FF4B00]">
                            高质量高效率精致教学
                          </p>
                          <Image
                            className="md:hidden max-md:w-[94px] max-md:h-6"
                            src={signCharacteristic_title}
                            alt=""
                          />
                          <TitleBeam
                            type={`${characteristicType === 2 ? "open" : "down"
                              }`}
                          />
                        </div>
                        <p className="text-[14px] max-md:hidden md:w-[488px] mt-12 font-light leading-[320%] opacity-70">
                          免费专业入学评估
                          <br />
                          一对一课程定制+未来职业规划
                          <br />
                          高效干货教学，拒绝照本宣科，拒绝纯应试培训
                          <br />
                          各专业导师多对一服务，实现名校战略录取
                          <br />
                          独家审核团队多轮严格作品审核，保证最高录取率
                          <br />
                          公开透明的艺术文书创作及升学行前指导
                          <br />
                          提供名校保录取
                          <br />
                        </p>
                        <p className="text-[14px] md:hidden mt-12 max-md:text-[13px] max-md:leading-[200%] mb-3 font-light leading-[220%] opacity-70">
                          免费专业入学评估
                        </p>
                        <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3 font-light leading-[220%] opacity-70">
                          一对一课程定制+未来职业规划
                        </p>
                        <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3 font-light leading-[220%] opacity-70">
                          高效干货教学，拒绝照本宣科，拒绝纯应试培训
                        </p>
                        <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3 font-light leading-[220%] opacity-70">
                          各专业导师多对一服务，实现名校战略录取
                        </p>
                        <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3 font-light leading-[220%] opacity-70">
                          独家审核团队多轮严格作品审核，保证最高录取率
                        </p>
                        <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-3 font-light leading-[220%] opacity-70">
                          公开透明的艺术文书创作及升学行前指导
                        </p>
                        <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] font-light leading-[220%] opacity-70">
                          提供名校保录取
                        </p>
                      </div>
                      <div
                        className={`md:h-[488px] ${characteristicType === 3
                          ? "opacity-100"
                          : "md:opacity-0"
                          } md:w-[680px] max-md:mt-20 flex flex-col justify-center`}
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
                            type={`${characteristicType === 3 ? "open" : "down"
                              }`}
                          />
                        </div>
                        <p className="text-[14px] md:w-[488px] max-md:text-[13px] max-md:leading-[200%]  mt-12 font-light leading-[220%] opacity-70">
                          产学研一体，团队十余年一线音乐行业经验。各类音乐作品千余，如央视《2008我们的奥林匹克》
                          《中国冰雪记忆》《家园》《2022北京冬奥会遗产纪录片》《张艺谋的2022》，芒果TV《这十年》《党的女儿》以及浙江卫视《西泠印社》等，团队独立厂牌发行创作人计划系列专辑二十余张，将创作，录制，发行全流程结为一体，让学生在学习中有机会参与各类重大音乐项目的录制与制作，为其音乐生涯提供丰富的背景提升和行业经验。
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="md:hidden px-6">
                    <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-5 font-light leading-[220%] opacity-70">
                      高标准高要求的一线资深海归音乐导师团队，拥有五年以上的一线行业经验及教学经验，独树一帜的从业思维教学结合往年丰富的海外院校申请经验，让学生接受最新的音乐专业讯息，带来的音乐艺术理念、音乐创作思维和声音设计紧跟时代潮流，富有指导性和前瞻性。
                    </p>
                    <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-5 font-light leading-[220%] opacity-70">
                      已配备全职音乐导师6人，兼职音乐导师150+，音乐产业规划师1人，专业录音师2人，资深留学规划师2人，专业师资团队由海外各个院校的海归音乐导师、一线声音从业者及交响乐团演奏家组成。
                    </p>
                    <p className="text-[14px] md:hidden max-md:text-[13px] mb-12 max-md:leading-[200%]  font-light leading-[220%] opacity-70">
                      由SIGNART名校录取导师团队全程跟踪，各领域专业导师多对一服务，实现名校战略录取。
                    </p>
                    <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-5 font-light leading-[220%] opacity-70">
                      2012年 初始音乐团队创办SOUNDPIC工作室
                    </p>
                    <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-5 font-light leading-[220%] opacity-70">
                      2016年 万像循声文化传媒有限公司正式成立
                      ｜总部位于杭州滨江，并在南京、重庆设立分棚
                    </p>
                    <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-5 font-light leading-[220%] opacity-70">
                      2016年 开启音乐留学作品集培训服务 初步组建音乐教学团队
                    </p>
                    <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-5 font-light leading-[220%] opacity-70">
                      2020年 完善音乐留学作品集规划团队建设
                    </p>
                    <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-5 font-light leading-[220%] opacity-70">
                      2021年 十万象限教育咨询有限公司正式成立
                    </p>
                    <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-5 font-light leading-[220%] opacity-70">
                      2022年 UDC音乐艺术中心校区正式启用
                    </p>
                    <p className="text-[14px] md:hidden max-md:text-[13px] max-md:leading-[200%] mb-5 font-light leading-[220%] opacity-70">
                      2023年 西兴校区教学场地全新升级 扩建至1500平
                    </p>
                    <ButtonBox
                      className="mt-[68px] mx-auto w-[131px] leading-[120%] font-light flex items-center"
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
                )}
              </div>
            </div>
            <div
              className={` transition-all duration-1000 ${right === 0
                ? "left-[-650px] opacity-0"
                : "left-[120px] opacity-100"
                } absolute left-[-650px] max-md:hidden mt-12`}
            >
              <div className=" flex items-center">
                <div className={`h-[457px] max-md:hidden overflow-hidden`}>
                  <div
                    className={` transition-all duration-1000 ${right === 2 ? "translate-y-[-457px]" : "translate-y-[0px]"
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
                    className={` transition-all duration-1000 ${right === 2
                      ? " translate-y-[-420px]"
                      : "translate-y-[0px]"
                      }`}
                  >
                    <div
                      className={`h-[420px] opacity-0 transition-all duration-1000 ${right === 2 ? "" : "opacity-100"
                        }`}
                    >
                      <p className="text-[14px] font-light leading-[220%] opacity-70">
                        SIGNART
                        十万象限音乐留学作品集由世界名校海归艺术导师与顶尖音乐传媒公司联合创立，杭州首家拥有十年音乐传媒行业经验的创始人团队，专攻于音乐艺术作品集教育，留学申请规划以及跨界艺术联动，致力打造音乐教育与声音全流程制作的产学联动生态。同时作为浙江传媒学院等艺术高校的实训基地，每年为传媒行业输送大量人才。
                      </p>
                      <p className="text-[14px] my-[31px] font-light leading-[220%] opacity-70">
                        我们为您提供各类细分音乐专业的完整海归教师团队，他们或为交响乐团的演奏家，知名录音室乐手，或为一线音乐制作人，声音设计师，或为国内外顶尖名校的在职教师。
                      </p>
                      <p className="text-[14px] font-light leading-[220%] opacity-70">
                        我们为您提供十年一线行业经验的老牌声音全流程制作团队，多次出色完成奥运会/冬奥会/亚运会等国家级项目的声音设计，管弦乐编写与录制，环绕声制作。大量院线电影/知名广告/游戏的声音全流程制作，袁娅维韩磊等知名艺人的歌曲制作。同时我们专精于AI声音合成处理，AMBISONIC全景声制作，交互类音效定制等声音科技产品服务。为您提供ITU标准声学制作环境，完整的声学硬件及经验丰富的声音技术团队。
                      </p>
                    </div>
                    <div
                      className={`h-[420px] opacity-0 transition-all duration-1000 ${right === 1 ? "" : "opacity-100"
                        } flex justify-center flex-col`}
                    >
                      <p className="text-[14px] font-light leading-[220%] opacity-70">
                        2012年 初始音乐团队创办SOUNDPIC工作室
                      </p>
                      <p className="text-[14px] font-light leading-[320%] opacity-70">
                        2016年 万像循声文化传媒有限公司正式成立
                        ｜总部位于杭州滨江，并在南京、重庆设立分棚
                      </p>
                      <p className="text-[14px] font-light leading-[320%] opacity-70">
                        2016年 开启音乐留学作品集培训服务 初步组建音乐教学团队
                      </p>
                      <p className="text-[14px] font-light leading-[320%] opacity-70">
                        2020年 完善音乐留学作品集规划团队建设
                      </p>
                      <p className="text-[14px] font-light leading-[320%] opacity-70">
                        2021年 十万象限教育咨询有限公司正式成立
                      </p>
                      <p className="text-[14px] font-light leading-[320%] opacity-70">
                        2022年 UDC音乐艺术中心校区正式启用
                      </p>
                      <p className="text-[14px] font-light leading-[320%] opacity-70">
                        2023年 西兴校区教学场地全新升级 扩建至1500平
                      </p>
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
              className={`h-[457px] ${right === 0 ? "" : "md:hidden"
                } max-md:hidden overflow-hidden`}
            >
              <div
                className={` transition-all duration-300 ${characteristicType === 1
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
