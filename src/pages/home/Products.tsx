"use client";
import Image from "next/image";
import _ from "lodash";
import products_bg from "@/assets/image/svg/products-bg.svg";
import mobile_products_bg from "@/assets/image/mobile/mobile-products-bg.png";
import products_right from "@/assets/image/svg/icon-products-right.svg";
import products_right_bg from "@/assets/image/svg/products-right-bg.svg";
import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";

const ProductsBox = styled.div`
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
  opacity: 0.9;
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
    const [isMobile, setIsMobile] = useState<boolean>(true)
    useEffect(() => {
        if (window) {
            setIsMobile(window.innerWidth > 768)
        }
    }, [])
    console.log("🚀 ~ file: Products.tsx:47 ~ Products ~ isMobile:", isMobile)
    useEffect(() => {
        window.addEventListener('wheel', function (e) {
            if (document.documentElement.scrollTop > 2500 && document.documentElement.scrollTop < 2900 && isMobile) {
                document.body.classList.add("overflow-hidden");
                if (value === 0) {
                    if (e.deltaY < 0) {
                        document.body.classList.remove("overflow-hidden");
                    } else {
                        document.body.classList.add("overflow-hidden");
                    }
                }
                if (value === 2) {
                    if (e.deltaY > 0) {
                        document.body.classList.remove("overflow-hidden");
                    } else {
                        document.body.classList.add("overflow-hidden");
                    }
                }
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        })
    }, [value])
    return (
        <div id='Products' className='flex md:mt-[250px] pt-[74px] box2 w-screen md:pl-[136px] md:pr-[120px]'
            onWheelCapture={
                _.debounce((e: any) => {
                    if (isMobile) {
                        if (value === 0) {
                            if (e.deltaY > 0) {
                                setValue(1)
                            }
                        } else if (value === 2) {
                            if (e.deltaY < 0) {
                                setValue(1)
                            }
                        } else {
                            if (e.deltaY < 0) {
                                setValue(0)
                            } else {
                                setValue(2)
                            }
                        }
                    }
                }, 70)}
        >
            <div className="md:flex w-[100%] items-center justify-between">
                <ProductsBox className="max-md:text-center max-md:!pt-[45px]">
                    <p className='font-extrabold max-md:text-[28px] text-[56px] leading-[160%] text-[#1a1a1a]'>产品体系</p>
                    <p className='font-medium mt-4 max-md:mt-2 max-md:text-[14px] text-[24px] uppercase font-[Lexend] leading-[160%] text-[#1a1a1a]'>System  of  products</p>
                </ProductsBox>
                <div className='md:h-[530px] md:overflow-hidden'>
                    <div
                        className={` transition-all duration-300 ${value === 1 ? 'translate-y-[-530px]' : value === 2 ? 'translate-y-[-1060px]' : ''}  max-md:h-[452px] max-md:flex  max-md:px-8 justify-between max-md:gap-y-12 flex-wrap `}
                    >
                        <ProductsRightBox className="max-md:h-[121px]">
                            <p className='text-[38px] max-md:text-[20px] text-[#FF4B00] font-medium leading-[160%]'>主体课程</p>
                            <div className="flex gap-2 max-md:gap-1 max-md:mt-4 mt-[35px] items-center">
                                <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                <p className='text-[20px] leading-[160%] text-[#cccccc] uppercase font-extralight max-md:text-[12px] font-[Lexend]'>Foundation</p>
                                <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>音乐启蒙课</p>
                            </div>
                            <div className="flex gap-2 max-md:gap-1 my-[30px] max-md:my-2 items-center">
                                <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>音乐专业课</p>
                            </div>
                            <div className="flex gap-2 max-md:gap-1 items-center">
                                <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>音乐作品集</p>
                            </div>
                        </ProductsRightBox>
                        <ProductsRightBox className="max-md:h-[121px]">
                            <p className='text-[38px] max-md:hidden max-md:mb-4 mb-[35px] text-[#FF4B00] max-md:text-[20px] font-medium leading-[160%]'>主体课程综合增值服务</p>
                            <p className='text-[38px] md:hidden max-md:mb-4 mb-[35px] text-right text-[#FF4B00] max-md:text-[20px] font-medium leading-[160%]'>综合增值服务</p>
                            <div className='flex md:h-[404px] max-md:gap-y-2 gap-y-[30px] gap-x-12 flex-col flex-wrap'>
                                <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>顶尖录音棚录制</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>专业录音师监棚</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>作品集教研审核</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>留学择校指导</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>艺术文书申请</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>签证办理</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>夏校申请</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>专业导师推荐信</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>行业就业指导</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>行业实习引荐</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>行业实地学习</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>留学期间学习指导</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 max-md:gap-1 max-md:flex-row-reverse  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>寒暑期进修实习</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                            </div>
                        </ProductsRightBox>
                        <ProductsRightBox>
                            <p className='text-[38px] max-md:mb-4 mb-[35px] max-md:text-[20px] text-[#FF4B00] font-medium leading-[160%]'>音乐艺术指导</p>
                            <div className='flex md:h-[404px] max-md:gap-y-2 gap-y-[30px] gap-x-12 flex-col flex-wrap'>
                                <div className="flex gap-2 max-md:gap-1  items-center">
                                    <p className='text-[20px] lead ing-[160%] max-md:hidden text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>一对一个性化规划</p>
                                </div>
                                <div className="flex gap-2 max-md:gap-1  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>音乐素养评估</p>
                                </div>
                                <div className="flex gap-2 max-md:gap-1  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] uppercase font-extralight max-md:text-[12px] font-[Lexend]'>workshop</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>跨界联动</p>
                                </div>
                                <div className="flex gap-2 max-md:gap-1  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>面试技巧辅导</p>
                                </div>
                                <div className="flex gap-2 max-md:gap-1  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>海外大师课</p>
                                </div>
                                <div className="flex gap-2 max-md:gap-1  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>现场艺术展演</p>
                                </div>
                                <div className="flex gap-2 max-md:gap-1 items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>商业项目解读</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 max-md:gap-1 items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>乐队合作演奏</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 max-md:gap-1 items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight max-md:hidden font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] max-md:text-[12px] font-light'>个人版权音乐发行</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] max-md:!border-none text-[#FF4B00] uppercase max-md:font-light max-md:text-[12px] font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                            </div>
                        </ProductsRightBox>
                    </div>
                </div>
                <div className='h-[457px] max-md:hidden overflow-hidden'>
                    <div className={`transition-all duration-300 ${value === 1 ? 'translate-y-[-457px]' : value === 2 ? 'translate-y-[-914px]' : ''}`}>
                        <Image src={products_right} alt='' />
                        <Image src={products_right} alt='' />
                        <Image src={products_right} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
}
