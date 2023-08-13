"use client";
import _ from "lodash";
import Image from "next/image";
import SchoolRoll from "./SchoolRoll";
import Specialize from "./Specialize";
import styled from "styled-components";
import { useAppDispatch } from "@/state";
import { useSwiper } from "swiper/react";
import mobile_shadow_3 from "@/assets/image/mobile-shadow/mobile-shadow-3.svg";
import shadow_bg_3 from "@/assets/image/svg/shadow-bg-3.svg";
import shadow_bg_4 from "@/assets/image/svg/shadow-bg-4.svg";
import products_bg from "@/assets/image/svg/products-bg.png";
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
import products_right from "@/assets/image/svg/icon-products-right.svg";
import products_right_bg from "@/assets/image/svg/products-right-bg.svg";
import mobile_products_bg from "@/assets/image/mobile/mobile-products-bg.png";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import { dataFrom } from ".";
const Box = styled.div`
  .swiper-move-in-self {
    @media (min-width: 768px) {
      animation: swiper-move-in-self 1000ms cubic-bezier(0.69, 0, 0.37, 1) 800ms
        forwards;
    }
  }
  @keyframes swiper-move-in-self {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
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
    justify-content: center;
    width: 621px;
    padding-left: 136px;
    margin-right: 76px;
    height: 530px;
    display: flex;
    flex-direction: column;
  }
`;
const ProductsBg = styled.div`
  @media (min-width: 768px) {
    background-repeat: no-repeat;
    background: url(${products_right_bg.src});
    background-position: 0px 48px;
    background-blend-mode: soft-light, overlay, normal;
  }
`;
interface ProductsProps {
  musicGenre: number
  setMusicGenre: Function
  dataFrom?: dataFrom
}
export default function Products({ setMusicGenre, musicGenre, dataFrom }: ProductsProps) {
  const [value, setValue] = useState<number>(0);
  const dispatch = useAppDispatch();
  const throttleFlag = useThrottleFlag();
  const swiper = useSwiper();
  const innerWidth = useOuterWidth();
  const comePage = useComePage();
  const activeIndex = useActiveIndex();
  let time: any = ''
  useEffect(() => {
    if (activeIndex === 2) {
      if (comePage === 1) {
        document.querySelector("#productsBox")?.scrollTo({
          top: 20,
          behavior: "smooth",
        });
      } else {
        document.querySelector("#productsBox")?.scrollTo({
          top: 1300,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);
  return (
    <Box>
      <div
        id="productsBox"
        className={`md:h-screen md:pt-[120px] md:opacity-0 ${value === 2 ? "md:overflow-auto" : "md:overflow-hidden"
          }   ${activeIndex === 2
            ? comePage === 3
              ? "swiper-move-in-self"
              : "swiper-move-in"
            : "swiper-move-out"
          }`}
        onScroll={(e: any) => {
          if (innerWidth > 768) {
            if (throttleFlag) return;
            if (innerWidth > 768) {
              if (
                e.target.scrollHeight -
                (e.target.scrollTop + e.target.clientHeight) <
                2 && value === 2
              ) {
                dispatch(setThrottleFlag(true));
                swiper.slideTo(3, 1000);
                dispatch(setComePage(2));
                dispatch(setActiveIndex(3));
                setTimeout(() => {
                  dispatch(setThrottleFlag(false));
                }, 1200);
              }
            }
          }
        }}
      >
        <div className="max-md:relative md:relative">
          <Image
            className="max-md:hidden absolute left-0 top-[100px] z-[-1]"
            src={shadow_bg_3}
            alt=""
          />
          <Image
            className={`max-md:hidden transition-all duration-1000 top-0 ${value === 1 ? "top-10" : value === 2 ? "top-20" : ""
              } absolute right-0 z-[-1]`}
            src={shadow_bg_4}
            alt=""
          />
          <Image
            className="md:hidden absolute right-0 top-[320px] z-[-1]"
            src={mobile_shadow_3}
            alt=""
          />
          <div
            className="relative z-10"
            onWheel={(e: any) => {
              if (throttleFlag) {
                dispatch(setThrottleFlag(true));
                for (let i = 0; i < 10000; i++) {
                  clearTimeout(i)
                }
                time = setTimeout(() => {
                  dispatch(setThrottleFlag(false));
                }, 100)
              }
              else {
                if (innerWidth > 768) {
                  if (value === 0) {
                    if (e.deltaY > 0) {
                      setValue(1);
                    } else {
                      swiper.slideTo(1, 1000);
                      dispatch(setComePage(8));
                      dispatch(setActiveIndex(1));
                    }
                  } else if (value === 2) {
                    if (e.deltaY < 0) {
                      setValue(1);
                    }
                  } else {
                    if (e.deltaY < 0) {
                      setValue(0);
                    } else {
                      setValue(2);
                    }
                  }
                }
                dispatch(setThrottleFlag(true));
                time = setTimeout(() => {
                  dispatch(setThrottleFlag(false));
                }, 100)
              }
            }}
          >
            <div
              id="Products"
              className="flex pt-[104px] md:w-[1200px] md:mx-auto overflow-x-auto max-md:w-screen]"
            >
              <div className="md:flex w-[100%] items-center justify-between">
                <ProductsBox className="max-md:text-center max-md:!pt-[45px]">
                  <p className="font-extrabold max-md:text-[28px] text-[56px] leading-[160%] text-[#1a1a1a]">
                    产品体系
                  </p>
                  <p className="font-medium mt-4 max-md:mt-2 max-md:text-[14px] max-md:font-light text-[24px] uppercase font-[Lexend] leading-[160%] text-[#1a1a1a]">
                    System of products
                  </p>
                </ProductsBox>
                <ProductsBg className="md:h-[530px] md:overflow-hidden">
                  <div
                    className={` transition-all ease-[cubic-bezier(0.5, 0, 0, 1)] duration-1000 ${value === 1
                      ? "translate-y-[-530px]"
                      : value === 2
                        ? "translate-y-[-1060px]"
                        : ""
                      }  max-md:h-[452px] max-md:flex  max-md:px-8 justify-between max-md:gap-y-12 flex-wrap `}
                  >
                    <ProductsRightBox
                      className={`transition-all duration-[1000ms] opacity-0 max-md:opacity-100  ${value === 0 ? "opacity-100" : ""
                        } max-md:h-[121px]`}
                    >
                      <p className="text-[38px] max-md:text-[20px] text-[#FF4B00] font-medium leading-[160%]">
                        主体课程
                      </p>
                      {dataFrom?.productSystem.courseList.map((el: any, index: number) => (
                        <div key={`${index}+courseList`} className="flex gap-2 max-md:gap-1 max-md:mt-4 mt-[35px] items-center">
                          <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                            +
                          </p>
                          <p className="text-[20px] leading-[160%] text-[#cccccc] uppercase max-md:text-[12px] font-light">
                            {el.value}
                          </p>
                          {el.vip && <div
                            style={{ border: "1px solid #FF4B00" }}
                            className="text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]"
                          >
                            vip
                          </div>}
                        </div>
                      ))
                      }
                      {/* <div className="flex gap-2 max-md:gap-1 my-[30px] max-md:my-2 items-center">
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
                      </div> */}
                    </ProductsRightBox>
                    <ProductsRightBox
                      className={`transition-all opacity-0 max-md:opacity-100  duration-[1000ms] ${value === 1 ? "opacity-100" : ""
                        }  max-md:h-[121px]`}
                    >
                      <p className="text-[38px] max-md:hidden max-md:mb-4 mb-[35px] text-[#FF4B00] max-md:text-[20px] font-medium leading-[160%]">
                        综合增值服务
                      </p>
                      <p className="text-[38px] md:hidden max-md:mb-4 mb-[35px] text-right text-[#FF4B00] max-md:text-[20px] font-medium leading-[160%]">
                        综合增值服务
                      </p>
                      <div className="flex md:h-[404px] max-md:gap-y-2 gap-y-[30px] gap-x-12 flex-col flex-wrap">
                        {dataFrom?.productSystem.serviceList.map((el: any, index: number) => (
                          <div key={`${index}+serviceList`} className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse items-center">
                            <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                              +
                            </p>
                            <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                              {el.value}
                            </p>
                            {el.vip && <div
                              style={{ border: "1px solid #FF4B00" }}
                              className="text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]"
                            >
                              vip
                            </div>}
                          </div>))}

                      </div>
                    </ProductsRightBox>
                    <ProductsRightBox
                      className={`transition-all opacity-0 max-md:opacity-100  duration-[1000ms] ${value === 2 ? "opacity-100" : ""
                        }`}
                    >
                      <p className="text-[38px] max-md:mb-4 mb-[35px] max-md:text-[20px] text-[#FF4B00] font-medium leading-[160%]">
                        音乐艺术指导
                      </p>
                      <div className="flex md:h-[404px] max-md:gap-y-2 gap-y-[30px] gap-x-12 flex-col flex-wrap">
                        {dataFrom?.productSystem.directionList.map((el: any, index: number) => (
                          <div key={`${index}+serviceList`} className="flex gap-2 max-md:gap-1  items-center">
                            <p className="text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]">
                              +
                            </p>
                            <p className="text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light">
                              {el.value}
                            </p>
                            {el.vip && <div
                              style={{ border: "1px solid #FF4B00" }}
                              className="text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]"
                            >
                              vip
                            </div>}
                          </div>))}
                      </div>
                    </ProductsRightBox>
                  </div>
                </ProductsBg>
                <div className="h-[457px] max-md:hidden overflow-hidden">
                  <div
                    className={`transition-all duration-300 ${value === 1
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
          </div>
          <SchoolRoll dataFrom={dataFrom} value={value} />
          {(value === 2) && (
            <>
              <Specialize dataFrom={dataFrom} musicGenre={musicGenre} setMusicGenre={setMusicGenre} />
            </>
          )}
        </div>
      </div>
      <div className={`!absolute ${comePage === 3 ? "rocket-out" : ""}`}></div>
    </Box>
  );
}
