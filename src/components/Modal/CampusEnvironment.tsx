import { Dialog, Transition } from "@headlessui/react"
import Image from 'next/image'
import campusEnvironment_1 from "@/assets/image/campusEnvironment/campusEnvironment-1.svg"
import campusEnvironment_2 from "@/assets/image/campusEnvironment/campusEnvironment-2.svg"
import campusEnvironment_3 from "@/assets/image/campusEnvironment/campusEnvironment-3.svg"
import campusEnvironment_4 from "@/assets/image/campusEnvironment/campusEnvironment-4.svg"
import campusEnvironment_5 from "@/assets/image/campusEnvironment/campusEnvironment-5.svg"
import campusEnvironment_6 from "@/assets/image/campusEnvironment/campusEnvironment-6.svg"
import campusEnvironment_7 from "@/assets/image/campusEnvironment/campusEnvironment-7.svg"
import campusEnvironment_8 from "@/assets/image/campusEnvironment/campusEnvironment-8.svg"
import campusEnvironment_9 from "@/assets/image/campusEnvironment/campusEnvironment-9.svg"
import campusEnvironment_10 from "@/assets/image/campusEnvironment/campusEnvironment-10.svg"
import { Fragment, useState } from "react"
import styled from "styled-components"

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
    console.log("🚀 ~ file: CampusEnvironment.tsx:38 ~ CampusEnvironment ~ currentPage:", currentPage)
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
                            <Dialog.Panel className="text-center">
                                <div className="flex items-center gap-12 justify-center">
                                    <TurningButton className={`${currentPage === 0 ? 'opacity-0' : 'cursor-pointer'} rotate-180`}
                                        onClick={() => {
                                            if (currentPage !== 0) {
                                                setCurrentPage(currentPage - 1)
                                            }
                                        }}>
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.5" clipPath="url(#clip0_399_13042)">
                                                <circle cx="24" cy="24" r="23.5" stroke="white" strokeOpacity="0.3" />
                                                <path d="M24 32C24 32 27.2353 24 35 24C27.2353 24 24 16 24 16" stroke="white" />
                                                <path d="M35 24L13 24" stroke="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_399_13042">
                                                    <rect width="48" height="48" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </TurningButton>
                                    <Image src={list[currentPage].image} alt="" />
                                    <TurningButton className={`${currentPage === list.length - 1 ? 'opacity-0' : 'cursor-pointer'}`}
                                        onClick={() => {
                                            if (currentPage !== list.length - 1) {
                                                setCurrentPage(currentPage + 1)
                                            }
                                        }}>
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.5" clipPath="url(#clip0_399_13042)">
                                                <circle cx="24" cy="24" r="23.5" stroke="white" strokeOpacity="0.3" />
                                                <path d="M24 32C24 32 27.2353 24 35 24C27.2353 24 24 16 24 16" stroke="white" />
                                                <path d="M35 24L13 24" stroke="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_399_13042">
                                                    <rect width="48" height="48" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </TurningButton>
                                </div>
                                <p className=" font-light text-[14px] leading-[180%]">{list[currentPage].name}</p>
                                <div className="flex mt-[40px] justify-center relative items-center gap-4">
                                    <div className="flex w-[336px] justify-end items-center gap-4">
                                        {list.slice(currentPage > 4 ? currentPage - 4 : 0, currentPage).map((el: any, index: number) => (
                                            <Image className="w-[70px] h-[70px]" key={`CampusEnvironment-${index}`} src={el.image} alt="" />
                                        ))}
                                    </div>
                                    <div style={{ border: ' 1px solid #FF4B00' }} className="p-2">
                                        <Image className="w-[70px] h-[70px]" src={list[currentPage].image} alt="" />
                                    </div>
                                    <div className="flex w-[336px] justify-start items-center gap-4">
                                        {list.slice(currentPage + 1, currentPage + 5).map((el: any, index: number) => (
                                            <Image className="w-[70px] h-[70px]" key={`CampusEnvironment-${index}`} src={el.image} alt="" />
                                        ))}
                                    </div>
                                </div>
                                <p className=" font-light text-[14px] leading-[180%] text-[#FF4B00]"> {currentPage + 1}/{list.length}</p>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}