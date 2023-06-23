"use client";
import Image from "next/image";
import Shadow from "@/assets/image/svg/Shadow.png";
import sign_logo from "@/assets/image/svg/sign-logo.svg";
import moireFringe_bg from "@/assets/image/svg/moireFringe-bg.svg";
import sign_text from "@/assets/image/svg/sign-text.svg";
import sign_bg_1 from "@/assets/image/svg/sign-bg-1.svg";
import moireFringe_bg_1 from "@/assets/image/svg/moireFringe-bg-1.svg";
import sign_bg_2 from "@/assets/image/svg/sign-bg-2.svg";
import icon_star from "@/assets/image/svg/icon-star.svg";
import lEtsRock_button from "@/assets/image/svg/lEt’s-Rock-button.svg";
import styled from "styled-components";
import Video from "./Video";

const Box = styled.div`
  position: absolute;
  z-index: 20;
  width: 196.08px;
  height: 87.87px;
  top: 25px;
  mix-blend-mode: normal;
  border-radius: 100px/45px;
  border: 1px solid #cccccc;
  transform: rotate(-30deg);
  .ball1 {
    animation: animX 2s cubic-bezier(0.36, 0, 0.64, 1) 1s infinite alternate,
      animY 2s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
  }
  @keyframes animX {
    0% {
      left: -20px;
    }
    100% {
      left: 170px;
    }
  }
  @keyframes animY {
    0% {
      top: -20px;
    }
    100% {
      top: 70px;
    }
  }
`;
const SliderBox = styled.div`
  .slider {
    animation: sliderAnimation 5s linear infinite;
  }
  @keyframes sliderAnimation {
    0% {
      top: 0%;
    }
    30% {
      top: 0%;
    }
    35% {
      top: 50%;
    }
    60% {
      top: 50%;
    }
    65% {
      top: 100%;
    }
    95% {
      top: 100%;
    }
    100% {
      top: 0%;
    }
  }
`;
const ShadowBox = styled.div`
  width: 33.58px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 129.57px;
  background: #ffd701;
  mix-blend-mode: overlay;
  filter: blur(8px);
  transform: rotate(30deg);
`;
const ShadowBox2 = styled.div`
  width: 6.16px;
  height: 99.63px;
  background: #ffd701;
  mix-blend-mode: overlay;
  filter: blur(4px);
  transform: rotate(30deg);
`;
const ButtonBox = styled.div`
  button {
    :hover {
      transform: scale(1.05);
      img {
        transform: scale(1.2);
      }
      .shadow {
        margin-top: -27px;
        margin-left: 340px;
      }
    }
  }
`;
const EchoRollBox = styled.div`
  opacity: 0;

  animation: move-testaa 2s linear 1s forwards,
    echoRollBox 6s cubic-bezier(0.33, 0.6, 0.81, 0.5) infinite 3s;

  /* animation:  */
  @keyframes move-testaa {
    0% {
      opacity: 0;
      transform: translateX(230px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes echoRollBox {
    0% {
      transform: translateX(0px);
    }
    40% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(-780px);
    }
    90% {
      transform: translateX(-780px);
    }
    100% {
      transform: translateX(-1560px);
    }
  }
`;
const ButtonBorder = styled.div`
  border: 1px solid;
  box-sizing: border-box;
`;
const ScaleBox = styled.div`
  .textScale {
    animation: textScale 4s linear infinite;
  }
  @keyframes textScale {
    0% {
      transform: scale(1);
    }
    5% {
      transform: scale(1.2);
    }
    10% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
const RollBox = styled.div`
  .roll {
    animation: rollBox 5s linear infinite;
  }
  @keyframes rollBox {
    0% {
      transform: translateY(0px);
    }
    30% {
      transform: translateY(0px);
    }
    35% {
      transform: translateY(-102px);
    }
    60% {
      transform: translateY(-102px);
    }
    65% {
      transform: translateY(-204px);
    }
    95% {
      transform: translateY(-204px);
    }
    100% {
      transform: translateY(-306px);
    }
  }
`;
const MoireFringe = styled.div`
  overflow: hidden;
  .moireFringe {
    animation: MoireFringe 5s linear infinite;
    @keyframes MoireFringe {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.3);
      }
      100% {
        transform: scale(1);
      }
    }
  }
  :after {
    content: " ";
    position: absolute;
    top: -140px;
    left: 0;
    z-index: 100;
    height: 280px;
    width: 100vw;
    border-radius: 100%;
    background: #1a1a1a;
  }
  :before {
    content: " ";
    position: absolute;
    bottom: -50px;
    left: 0;
    z-index: 100;
    height: 100px;
    width: 100vw;
    border-radius: 100%;
    background: #1a1a1a;
  }
`;
const LineBox = styled.div`
  .line-1 {
    animation: line-1 1s linear infinite;
    transform: translateX(80px);
  }
  @keyframes line-1 {
    0% {
      transform: translateX(80px);
    }
    50% {
      transform: translateX(-112px);
    }
    100% {
      transform: translateX(-230px);
      width: 20px;
    }
  }
  .line-2 {
    animation: line-2 800ms linear infinite;
    transform: translateX(85px);
  }
  @keyframes line-2 {
    0% {
      transform: translateX(85px);
    }
    50% {
      transform: translateX(-112px);
    }
    100% {
      transform: translateX(-230px);
      width: 20px;
    }
  }
  .line-3 {
    animation: line-3 1200ms linear infinite;
    transform: translateX(62px);
  }
  @keyframes line-3 {
    0% {
      transform: translateX(62px);
    }
    50% {
      transform: translateX(-112px);
    }
    100% {
      transform: translateX(-230px);
      width: 20px;
    }
  }
  .line-4 {
    animation: line-4 900ms linear infinite;
    transform: translateX(62px);
  }
  @keyframes line-4 {
    0% {
      transform: translateX(62px);
    }
    50% {
      transform: translateX(-112px);
    }
    100% {
      transform: translateX(-230px);
      width: 20px;
    }
  }
`;
const SignBgBox = styled.div`
  .sign-bg-2 {
    transform: scaleY(0);
    animation: sign-bg-2-move 1000ms linear forwards;
  }
  @keyframes sign-bg-2-move {
    0% {
      transform: scaleY(0);
    }

    100% {
      transform: scaleY(1);
    }
  }
  .sign-bg-1 {
    transform: scaleY(0);
    animation: sign-bg-1-move 1000ms linear 50ms forwards;
  }
  @keyframes sign-bg-1-move {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
`;

const TextBox = styled.div`
  animation: text-box-move 1200ms linear forwards;
  /* width: 818px; */
  width: 288px;
  display: flex;
  opacity: 0;
  overflow: hidden;
  justify-content: center;
  height: 49px;

  @keyframes text-box-move {
    0% {
      width: 288px;
      height: 49px;
      opacity: 0;
    }
    30% {
      opacity: 1;
      height: 49px;
    }

    100% {
      width: 818px;
      opacity: 1;
      height: 49px;
    }
  }
`;

interface SignProps {
  isOpenConsult: number;
  setIsOpenConsult: Function;
}
export default function Sign({ isOpenConsult, setIsOpenConsult }: SignProps) {
  return (
    <div className="relative w-screen">
      <MoireFringe className="w-full top-0 flex z-30 justify-center items-center left-0 absolute h-[728px]">
        <Image
          className="absolute moireFringe  !w-screen !h-[1400px] z-30"
          src={moireFringe_bg_1}
          alt=""
        />
        <Image className="absolute z-20" src={moireFringe_bg} alt="" />
      </MoireFringe>
      <div className="h-[728px] z-40 relative">
        <SignBgBox className=" absolute z-10 h-[728px] w-screen flex justify-center top-0 left-0">
          {/* <Image className='absolute  w-screen' src={sign_bg} alt='' /> */}

          <Image className="absolute sign-bg-1" src={sign_bg_1} alt="" />

          <Image
            className="absolute w-screen sign-bg-2"
            src={sign_bg_2}
            alt=""
          />
        </SignBgBox>
        <div className=" relative z-20 flex justify-center items-center flex-col pt-[302px]">
          <Image className="" src={sign_logo} alt="" />
          <TextBox className="mt-[70px]  h-[49px] ">
            <div className="flex">
              <div className="w-[818px]  h-[49px]">
                <Image className=" w-[818px] h-[49px]" src={sign_text} alt="" />
              </div>
            </div>
          </TextBox>
          <div className="flex w-[780px] overflow-hidden">
            <EchoRollBox className="flex">
              <div className="w-[780px] text-center">
                <p className=" font-normal uppercase tracking-[1em] mt-[72px] text-[26px]">
                  听见世界的回响
                </p>
              </div>
              <div className="w-[780px] text-center">
                <p className=" font-[300] uppercase tracking-[0.51em] mt-[72px] font-[Lexend] text-[26px]">
                  Echo of the World
                </p>
              </div>
              <div className="w-[780px] text-center">
                <p className=" font-normal uppercase tracking-[1em] mt-[72px] text-[26px]">
                  听见世界的回响
                </p>
              </div>
            </EchoRollBox>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-[280px] px-[192px] justify-between">
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
            <div className="flex mt-[-2px] w-full gap-[6px] justify-center items-end">
              <p className="font-[Lexend] text-[72px] leading-[120%] font-[150]">
                10
              </p>
              <p className="text-[40px] leading-[150%] font-[300]">年</p>
            </div>
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
        <div className="w-[224px] flex-col flex items-center">
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
        <div className="w-[224px] flex-col flex relative items-center pt-[13px]">
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
          className=" opacity-100 z-20 py-[10px] rounded-[55px] px-[73px]"
        >
          <ButtonBorder
            style={{ borderColor: "rgb(157, 54, 11,0.2)" }}
            className=" opacity-100  py-[10px] rounded-[55px] px-[76px]"
          >
            <ButtonBorder
              style={{ borderColor: "rgb(157, 54, 11,0.3)" }}
              className=" opacity-100  py-[9px] rounded-[55px] px-[61px]"
            >
              <ButtonBorder
                style={{ borderColor: "rgb(157, 54, 11,0.4)" }}
                className=" opacity-100  py-[8px] rounded-[55px] px-[49px]"
              >
                <ButtonBorder
                  style={{ borderColor: "rgb(157, 54, 11,0.5)" }}
                  className=" opacity-100  py-[8px] rounded-[55px] px-[34px]"
                >
                  <ButtonBorder
                    style={{ borderColor: "rgb(157, 54, 11,0.6)" }}
                    className=" opacity-100  py-[9px] rounded-[55px] px-[27px]"
                  >
                    <ButtonBorder
                      style={{ borderColor: "rgb(157, 54, 11,0.7)" }}
                      className=" opacity-100  py-[8px] rounded-[55px] px-[23px]"
                    >
                      <ButtonBorder
                        style={{ borderColor: "rgb(157, 54, 11,0.8)" }}
                        className=" opacity-100 rounded-[55px] "
                      >
                        <button
                          className="bg-[#FF4B00] rounded-[39px] flex transition-all duration-500 justify-center relative items-center w-[314px] hover:mx-8 my-[6px] mx-[24px] h-20"
                          onClick={() => {
                            setIsOpenConsult(1);
                          }}
                        >
                          <p className=" text-[28px] z-20 text-[#1a1a1a] leading-[100%] font-[Lexend] font-black">
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
