
import "swiper/css";
import Image from 'next/image'
import "swiper/css/pagination";
import { Pagination, Navigation, FreeMode, Thumbs } from "swiper";
import styled from "styled-components"
import { Fragment, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Dialog, Transition } from "@headlessui/react"
import campusEnvironment_1 from "@/assets/image/campusEnvironment/campusEnvironment-1.png"
import campusEnvironment_2 from "@/assets/image/campusEnvironment/campusEnvironment-2.png"
import campusEnvironment_3 from "@/assets/image/campusEnvironment/campusEnvironment-3.png"
import campusEnvironment_4 from "@/assets/image/campusEnvironment/campusEnvironment-4.png"
import campusEnvironment_5 from "@/assets/image/campusEnvironment/campusEnvironment-5.png"
import campusEnvironment_6 from "@/assets/image/campusEnvironment/campusEnvironment-6.png"
import campusEnvironment_7 from "@/assets/image/campusEnvironment/campusEnvironment-7.png"
import campusEnvironment_8 from "@/assets/image/campusEnvironment/campusEnvironment-8.png"
import campusEnvironment_9 from "@/assets/image/campusEnvironment/campusEnvironment-9.png"
import campusEnvironment_10 from "@/assets/image/campusEnvironment/campusEnvironment-10.png"


const TurningButton = styled.div`
    border-radius: 100%;
    :hover{
        background: #ffffff;
        path{
            stroke: #1a1a1a;
        }
        g{
            opacity: 1;
        }
    }
    
`
interface CampusEnvironmentProps {
    isOpen: number
    setIsOpen: Function
}
export default function CampusEnvironment({ isOpen, setIsOpen }: CampusEnvironmentProps) {
    function closeModal() {
        setIsOpen(0)
    }
    const [currentPage, setCurrentPage] = useState<number>(0)
    const list = [
        {
            index: 0,
            name: '十万象限正门',
            image: campusEnvironment_1
        },
        {
            index: 1,
            name: '模块展示',
            image: campusEnvironment_2
        },
        {
            index: 2,
            name: '专业研讨会',
            image: campusEnvironment_3
        },
        {
            index: 3,
            name: '乐队排练室',
            image: campusEnvironment_4
        },
        {
            index: 4,
            name: '音乐制作室',
            image: campusEnvironment_5
        },
        {
            index: 5,
            name: '唱片墙',
            image: campusEnvironment_6
        },
        {
            index: 6,
            name: '健身房',
            image: campusEnvironment_7
        },
        {
            index: 7,
            name: '洽谈室',
            image: campusEnvironment_8
        },
        {
            index: 8,
            name: '品牌展示区',
            image: campusEnvironment_9
        },
        {
            index: 9,
            name: '人声录音棚',
            image: campusEnvironment_10
        }
    ]
    return (
        <Transition appear show={isOpen === 1 ? true : false} as={Fragment}>
            <Dialog as="div" className="relative z-[1000000]" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-80" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="text-center w-screen">
                                <div className="w-[1200px] mx-auto flex justify-center overflow-x-hidden">
                                    <div className="w-[694px] flex items-center h-[520px]">
                                        <div className="flex gap-6">
                                            {list.map((el: any) => (
                                                <Image key={`CampusEnvironment-${el.index}`}  src={el.image} alt="" />
                                            ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <p className=" font-light text-[14px] leading-[180%]">{list[currentPage].name}</p>
                                <div className="flex mt-[40px] justify-center relative items-center gap-4">
                                    <div className="flex relative w-[336px] justify-end items-center gap-4">
                                        {list.slice(currentPage > 4 ? currentPage - 4 : 0, currentPage).map((el: any, index: number) => (
                                            <Image className="w-[70px] h-[70px] cursor-pointer" key={`CampusEnvironment-${index}`} src={el.image} alt=""
                                                onClick={() => {
                                                    setCurrentPage(el.index)
                                                }} />
                                        ))}
                                    </div>
                                    <div style={{ border: ' 1px solid #FF4B00' }} className="p-2">
                                        <Image className="w-[70px] h-[70px]" src={list[currentPage].image} alt="" />
                                    </div>
                                    <div className="flex w-[336px] justify-start items-center gap-4">
                                        {list.slice(currentPage + 1, currentPage + 5).map((el: any, index: number) => (
                                            <Image className="w-[70px] cursor-pointer h-[70px]" key={`CampusEnvironment-${index}`} src={el.image} alt=""
                                                onClick={() => {
                                                    setCurrentPage(el.index)
                                                }} />
                                        ))}
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}