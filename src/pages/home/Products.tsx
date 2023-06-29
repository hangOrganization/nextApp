"use client";
import _ from "lodash";
import Image from "next/image";
import SchoolRoll from "./SchoolRoll";
import Specialize from "./Specialize";
import styled from "styled-components";
import { useAppDispatch } from "@/state";
import { useSwiper } from "swiper/react";
import shadow_bg_3 from "@/assets/image/svg/shadow-bg-3.svg";
import shadow_bg_4 from "@/assets/image/svg/shadow-bg-4.svg";
import products_bg from "@/assets/image/svg/products-bg.png";
import { setActiveIndex, setThrottleFlag } from "@/state/application/reducer";
import { useOuterWidth, useThrottleFlag } from "@/state/application/hooks";
import products_right from "@/assets/image/svg/icon-products-right.svg";
import products_right_bg from "@/assets/image/svg/products-right-bg.svg";
import mobile_products_bg from "@/assets/image/mobile/mobile-products-bg.png";

const ProductsBox = styled(`div`)`
  width: 440px;
  height: 530px;
  padding: 92px 40px;
  background: url(${products_bg.src});
  @media not all and (min-width: 768px) {
    width: 100vw;
    height: 207px;
    padding: 0px;
    background: url(${mobile_products_bg.src});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 0px;
  }
  background-blend-mode: soft-light, overlay, normal;
  border-radius: 40px;
`;
const ProductsRightBox = styled.div`
  @media (min-width: 768px) {
    width: 621px;
    padding-left: 136px;
    margin-right: 76px;
    height: 530px;
    display: flex;
    flex-direction: column;
    background: url(${products_right_bg.src});
    background-blend-mode: soft-light, overlay, normal;
  }
`;
interface ProductsProps {
  value: number;
  setValue: Function;
}
export default function Products({ value, setValue }: ProductsProps) {
  const dispatch = useAppDispatch();
  const throttleFlag = useThrottleFlag();
  const swiper = useSwiper();
  const innerWidth = useOuterWidth();
  return (
    <div
      className={`md:h-screen md:pt-[120px] ${
        value === 2 ? "md:overflow-auto" : "md:overflow-hidden"
      }`}
      onScroll={(e: any) => {
        if (innerWidth > 768) {
          if (throttleFlag) return;
          if (innerWidth > 768) {
            if (
              e.target.scrollHeight -
                (e.target.scrollTop + e.target.clientHeight) <
              10
            ) {
              if (value === 2) {
                dispatch(setThrottleFlag(true));
                swiper.slideNext(1000);
                dispatch(setActiveIndex(3));
                setTimeout(() => {
                  dispatch(setThrottleFlag(false));
                }, 1000);
              }
            }
          }
        }
      }}
    >
      <div className="md:relative">
        <Image
          className="max-md:hidden absolute left-0 top-[100px] z-[-1]"
          src={shadow_bg_3}
          alt=""
        />
        <Image
          className="max-md:hidden absolute right-0 top-[80px] z-[-1]"
          src={shadow_bg_4}
          alt=""
        />
        <div
          id="Products"
          className="flex pt-[74px] md:w-[1200px] md:mx-auto overflow-x-auto max-md:w-screen]"
          onWheel={(e: any) => {
            if (e.deltaY < 20 && e.deltaY > -20) return;
            console.log("🚀 ~ file: Products.tsx:286 ~ Products ~ e:", e);

            if (throttleFlag) return;
            console.log(e.deltaY);
            if (innerWidth > 768) {
              if (value === 0) {
                if (e.deltaY > 0) {
                  dispatch(setThrottleFlag(true));
                  setValue(1);
                  setTimeout(() => {
                    dispatch(setThrottleFlag(false));
                  }, 700);
                } else {
                  dispatch(setThrottleFlag(true));
                  swiper.slidePrev(1000);
                  dispatch(setActiveIndex(1));
                  setTimeout(() => {
                    dispatch(setThrottleFlag(false));
                  }, 1000);
                }
              } else if (value === 2) {
                if (e.deltaY < 0) {
                  dispatch(setThrottleFlag(true));
                  setTimeout(() => {
                    dispatch(setThrottleFlag(false));
                  }, 700);
                  setValue(1);
                }
              } else {
                if (e.deltaY < 0) {
                  setValue(0);
                } else {
                  setValue(2);
                }
                dispatch(setThrottleFlag(true));
                setTimeout(() => {
                  dispatch(setThrottleFlag(false));
                }, 700);
              }
            }
          }}
        >
          <div className="md:flex w-[100%] items-center justify-between">
            <ProductsBox className="max-md:text-center max-md:!pt-[45px]">
              <p className="font-extrabold max-md:text-[28px] text-[56px] leading-[160%] text-[#1a1a1a]">
                产品体系
              </p>
              <p className="font-medium mt-4 max-md:mt-2 max-md:text-[14px] text-[24px] uppercase font-[Lexend] leading-[160%] text-[#1a1a1a]">
                System of products
              </p>
            </ProductsBox>
            <div className="md:h-[530px] md:overflow-hidden">
              <div
                className={` transition-all duration-300 ${
                  value === 1
                    ? "translate-y-[-530px]"
                    : value === 2
                    ? "translate-y-[-1060px]"
                    : ""
                }  max-md:h-[452px] max-md:flex  max-md:px-8 justify-between max-md:gap-y-12 flex-wrap `}
              >
                <ProductsRightBox
                  className={`${
                    value === 0 ? "opacity-100" : "opacity-0"
                  } max-md:h-[121px]`}
                >
                  <p className="text-[38px] max-md:text-[20px] text-[#FF4B00] font-medium leading-[160%]">
                    主体课程
                  </p>
                  <div className="flex gap-2 max-md:gap-1 max-md:mt-4 mt-[35px] items-center">
                    <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                      +
                    </p>
                    <p className="text-[20px] leading-[160%] text-[#cccccc] uppercase font-extralight max-md:text-[12px] font-[Lexend]">
                      Foundation
                    </p>
                    <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                      音乐启蒙课
                    </p>
                  </div>
                  <div className="flex gap-2 max-md:gap-1 my-[30px] max-md:my-2 items-center">
                    <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                      +
                    </p>
                    <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                      音乐专业课
                    </p>
                  </div>
                  <div className="flex gap-2 max-md:gap-1 items-center">
                    <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                      +
                    </p>
                    <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                      音乐作品集
                    </p>
                  </div>
                </ProductsRightBox>
                <ProductsRightBox
                  className={`${
                    value === 1 ? "opacity-100" : "opacity-0"
                  }  max-md:h-[121px]`}
                >
                  <p className="text-[38px] max-md:hidden max-md:mb-4 mb-[35px] text-[#FF4B00] max-md:text-[20px] font-medium leading-[160%]">
                    主体课程综合增值服务
                  </p>
                  <p className="text-[38px] md:hidden max-md:mb-4 mb-[35px] text-right text-[#FF4B00] max-md:text-[20px] font-medium leading-[160%]">
                    综合增值服务
                  </p>
                  <div className="flex md:h-[404px] max-md:gap-y-2 gap-y-[30px] gap-x-12 flex-col flex-wrap">
                    <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        顶尖录音棚录制
                      </p>
                      <div
                        style={{ border: "1px solid #FF4B00" }}
                        className="text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]"
                      >
                        vip
                      </div>
                    </div>
                    <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        专业录音师监棚
                      </p>
                      <div
                        style={{ border: "1px solid #FF4B00" }}
                        className="text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]"
                      >
                        vip
                      </div>
                    </div>
                    <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        作品集教研审核
                      </p>
                      <div
                        style={{ border: "1px solid #FF4B00" }}
                        className="text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]"
                      >
                        vip
                      </div>
                    </div>
                    <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        留学择校指导
                      </p>
                      <div
                        style={{ border: "1px solid #FF4B00" }}
                        className="text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]"
                      >
                        vip
                      </div>
                    </div>
                    <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        艺术文书申请
                      </p>
                      <div
                        style={{ border: "1px solid #FF4B00" }}
                        className="text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]"
                      >
                        vip
                      </div>
                    </div>
                    <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        签证办理
                      </p>
                      <div
                        style={{ border: "1px solid #FF4B00" }}
                        className="text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]"
                      >
                        vip
                      </div>
                    </div>
                    <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        夏校申请
                      </p>
                      <div
                        style={{ border: "1px solid #FF4B00" }}
                        className="text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]"
                      >
                        vip
                      </div>
                    </div>
                    <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        专业导师推荐信
                      </p>
                      <div
                        style={{ border: "1px solid #FF4B00" }}
                        className="text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]"
                      >
                        vip
                      </div>
                    </div>
                    <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        行业就业指导
                      </p>
                      <div
                        style={{ border: "1px solid #FF4B00" }}
                        className="text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]"
                      >
                        vip
                      </div>
                    </div>
                    <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        行业实习引荐
                      </p>
                      <div
                        style={{ border: "1px solid #FF4B00" }}
                        className="text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]"
                      >
                        vip
                      </div>
                    </div>
                    <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        行业实地学习
                      </p>
                      <div
                        style={{ border: "1px solid #FF4B00" }}
                        className="text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]"
                      >
                        vip
                      </div>
                    </div>
                    <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        留学期间学习指导
                      </p>
                      <div
                        style={{ border: "1px solid #FF4B00" }}
                        className="text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]"
                      >
                        vip
                      </div>
                    </div>
                    <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        寒暑期进修实习
                      </p>
                      <div
                        style={{ border: "1px solid #FF4B00" }}
                        className="text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]"
                      >
                        vip
                      </div>
                    </div>
                  </div>
                </ProductsRightBox>
                <ProductsRightBox
                  className={`${value === 2 ? "opacity-100" : "opacity-0"}`}
                >
                  <p className="text-[38px] max-md:mb-4 mb-[35px] max-md:text-[20px] text-[#FF4B00] font-medium leading-[160%]">
                    音乐艺术指导
                  </p>
                  <div className="flex md:h-[404px] max-md:gap-y-2 gap-y-[30px] gap-x-12 flex-col flex-wrap">
                    <div className="flex gap-2 max-md:gap-1  items-center">
                      <p className="text-[20px] lead ing-[160%] max-md:hidden text-[#cccccc] font-extralight font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        一对一个性化规划
                      </p>
                    </div>
                    <div className="flex gap-2 max-md:gap-1  items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        音乐素养评估
                      </p>
                    </div>
                    <div className="flex gap-2 max-md:gap-1  items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] uppercase font-extralight max-md:text-[12px] font-[Lexend]">
                        workshop
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        跨界联动
                      </p>
                    </div>
                    <div className="flex gap-2 max-md:gap-1  items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        面试技巧辅导
                      </p>
                    </div>
                    <div className="flex gap-2 max-md:gap-1  items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        海外大师课
                      </p>
                    </div>
                    <div className="flex gap-2 max-md:gap-1  items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        现场艺术展演
                      </p>
                    </div>
                    <div className="flex gap-2 max-md:gap-1 items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        商业项目解读
                      </p>
                      <div
                        style={{ border: "1px solid #FF4B00" }}
                        className="text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]"
                      >
                        vip
                      </div>
                    </div>
                    <div className="flex gap-2 max-md:gap-1 items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        乐队合作演奏
                      </p>
                      <div
                        style={{ border: "1px solid #FF4B00" }}
                        className="text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]"
                      >
                        vip
                      </div>
                    </div>
                    <div className="flex gap-2 max-md:gap-1 items-center">
                      <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                        +
                      </p>
                      <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                        个人版权音乐发行
                      </p>
                      <div
                        style={{ border: "1px solid #FF4B00" }}
                        className="text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]"
                      >
                        vip
                      </div>
                    </div>
                  </div>
                </ProductsRightBox>
              </div>
            </div>
            <div className="h-[457px] max-md:hidden overflow-hidden">
              <div
                className={`transition-all duration-300 ${
                  value === 1
                    ? "translate-y-[-457px]"
                    : value === 2
                    ? "translate-y-[-914px]"
                    : ""
                }`}
              >
                <Image src={products_right} alt="" />
                <Image src={products_right} alt="" />
                <Image src={products_right} alt="" />
              </div>
            </div>
          </div>
        </div>
        {innerWidth < 768 ||
          (value === 2 && (
            <>
              <SchoolRoll />
              <Specialize />
            </>
          ))}
      </div>
    </div>
  );
}
