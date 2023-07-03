import "swiper/css";
import Image from "next/image";
import "swiper/css/pagination";
import styled from "styled-components";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import campusEnvironment_1 from "@/assets/image/campusEnvironment/campusEnvironment-1.png";
import campusEnvironment_2 from "@/assets/image/campusEnvironment/campusEnvironment-2.png";
import campusEnvironment_3 from "@/assets/image/campusEnvironment/campusEnvironment-3.png";
import campusEnvironment_4 from "@/assets/image/campusEnvironment/campusEnvironment-4.jpg";
import campusEnvironment_5 from "@/assets/image/campusEnvironment/campusEnvironment-5.jpg";
import campusEnvironment_6 from "@/assets/image/campusEnvironment/campusEnvironment-6.jpg";
import campusEnvironment_7 from "@/assets/image/campusEnvironment/campusEnvironment-7.jpg";
import campusEnvironment_8 from "@/assets/image/campusEnvironment/campusEnvironment-8.jpg";
import campusEnvironment_9 from "@/assets/image/campusEnvironment/campusEnvironment-9.jpg";
import campusEnvironment_10 from "@/assets/image/campusEnvironment/campusEnvironment-10.jpg";
import campusEnvironment_11 from "@/assets/image/campusEnvironment/campusEnvironment-11.jpg";
import campusEnvironment_12 from "@/assets/image/campusEnvironment/campusEnvironment-12.jpg";
import campusEnvironment_13 from "@/assets/image/campusEnvironment/campusEnvironment-13.jpg";
import campusEnvironment_14 from "@/assets/image/campusEnvironment/campusEnvironment-14.jpg";
import campusEnvironment_15 from "@/assets/image/campusEnvironment/campusEnvironment-15.jpg";
import campusEnvironment_16 from "@/assets/image/campusEnvironment/campusEnvironment-16.jpg";
import campusEnvironment_17 from "@/assets/image/campusEnvironment/campusEnvironment-17.jpeg";
import campusEnvironment_18 from "@/assets/image/campusEnvironment/campusEnvironment-18.jpg";
import campusEnvironment_19 from "@/assets/image/campusEnvironment/campusEnvironment-19.jpg";
import campusEnvironment_20 from "@/assets/image/campusEnvironment/campusEnvironment-20.jpg";
import campusEnvironment_21 from "@/assets/image/campusEnvironment/campusEnvironment-21.jpg";
import campusEnvironment_22 from "@/assets/image/campusEnvironment/campusEnvironment-22.jpg";
import campusEnvironment_23 from "@/assets/image/campusEnvironment/campusEnvironment-23.jpeg";
import campusEnvironment_24 from "@/assets/image/campusEnvironment/campusEnvironment-24.jpg";
import campusEnvironment_25 from "@/assets/image/campusEnvironment/campusEnvironment-25.jpg";
import campusEnvironment_26 from "@/assets/image/campusEnvironment/campusEnvironment-26.jpg";
import campusEnvironment_27 from "@/assets/image/campusEnvironment/campusEnvironment-27.jpg";
import campusEnvironment_28 from "@/assets/image/campusEnvironment/campusEnvironment-28.jpg";
import campusEnvironment_29 from "@/assets/image/campusEnvironment/campusEnvironment-29.jpg";
import campusEnvironment_30 from "@/assets/image/campusEnvironment/campusEnvironment-30.jpg";
import campusEnvironment_31 from "@/assets/image/campusEnvironment/campusEnvironment-31.jpg";
import campusEnvironment_32 from "@/assets/image/campusEnvironment/campusEnvironment-32.jpg";
import campusEnvironment_33 from "@/assets/image/campusEnvironment/campusEnvironment-33.jpg";
import campusEnvironment_34 from "@/assets/image/campusEnvironment/campusEnvironment-34.jpg";
import campusEnvironment_35 from "@/assets/image/campusEnvironment/campusEnvironment-35.jpg";
import campusEnvironment_36 from "@/assets/image/campusEnvironment/campusEnvironment-36.jpg";
import campusEnvironment_37 from "@/assets/image/campusEnvironment/campusEnvironment-37.jpg";
import campusEnvironment_38 from "@/assets/image/campusEnvironment/campusEnvironment-38.jpg";
import campusEnvironment_39 from "@/assets/image/campusEnvironment/campusEnvironment-39.jpg";
import campusEnvironment_40 from "@/assets/image/campusEnvironment/campusEnvironment-40.jpg";

const TurningButton = styled.div`
  border-radius: 100%;
  :hover {
    background: #ffffff;
    path {
      stroke: #1a1a1a;
    }
    g {
      opacity: 1;
    }
  }
`;
interface CampusEnvironmentProps {
  isOpen: number;
  setIsOpen: Function;
}
export default function CampusEnvironment({
  isOpen,
  setIsOpen,
}: CampusEnvironmentProps) {
  function closeModal() {
    setIsOpen(0);
  }
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [oldCurrentPage, setOldCurrentPage] = useState<number>(0);
  const list = [
    {
      index: 0,
      name: "古典演奏录音棚及部分设备清单",
      image: campusEnvironment_1,
    },
    {
      index: 1,
      name: "7.1.4杜比全景声电影混录棚",
      image: campusEnvironment_2,
    },
    {
      index: 2,
      name: "5.1.4杜比全景声音乐混录棚",
      image: campusEnvironment_3,
    },
    {
      index: 3,
      name: "西兴校区主录音室",
      image: campusEnvironment_4,
    },
    {
      index: 4,
      name: "古典演奏录音棚",
      image: campusEnvironment_5,
    },
    {
      index: 5,
      name: "古典演奏录音棚",
      image: campusEnvironment_6,
    },
    {
      index: 6,
      name: "西兴校区门厅",
      image: campusEnvironment_7,
    },
    {
      index: 7,
      name: "西兴校区7.1.4混录棚.",
      image: campusEnvironment_8,
    },
    {
      index: 8,
      name: "西兴校区大厅",
      image: campusEnvironment_9,
    },
    {
      index: 9,
      name: "西兴校区编曲间/声音设计实验室",
      image: campusEnvironment_10,
    },
    {
      index: 10,
      name: "西兴校区独立编曲间",
      image: campusEnvironment_11,
    },
    {
      index: 11,
      name: "钢琴及视唱练耳教室",
      image: campusEnvironment_12,
    },
    {
      index: 12,
      name: "西兴校区活动",
      image: campusEnvironment_13,
    },
    {
      index: 13,
      name: "西兴校区景观",
      image: campusEnvironment_14,
    },
    {
      index: 14,
      name: "西兴校区原创专辑墙",
      image: campusEnvironment_15,
    },
    {
      index: 15,
      name: "西兴校区编曲间",
      image: campusEnvironment_16,
    },
    {
      index: 16,
      name: "西兴校区音箱墙景观",
      image: campusEnvironment_17,
    },
    {
      index: 17,
      name: "模块合成器展示",
      image: campusEnvironment_18,
    },
    {
      index: 18,
      name: "古典演奏录音棚",
      image: campusEnvironment_19,
    },
    {
      index: 19,
      name: "西兴校区休息区",
      image: campusEnvironment_20,
    },
    {
      index: 20,
      name: "现代电声乐队排练录音棚",
      image: campusEnvironment_21,
    },
    {
      index: 21,
      name: "西兴校区古典演奏教室",
      image: campusEnvironment_22,
    },
    {
      index: 22,
      name: "U87主话筒",
      image: campusEnvironment_23,
    },
    {
      index: 23,
      name: "UDC校区门厅",
      image: campusEnvironment_24,
    },
    {
      index: 24,
      name: "UDC校区Workshop区",
      image: campusEnvironment_25,
    },
    {
      index: 25,
      name: "UDC校区音乐制作课堂",
      image: campusEnvironment_26,
    },
    {
      index: 26,
      name: "UDC校区讲座",
      image: campusEnvironment_27,
    },
    {
      index: 27,
      name: "UDC校区讲座",
      image: campusEnvironment_28,
    },
    {
      index: 28,
      name: "UDC校区音乐自习室",
      image: campusEnvironment_29,
    },
    {
      index: 29,
      name: "UDC校区原创专辑墙",
      image: campusEnvironment_30,
    },
    {
      index: 30,
      name: "UDC校区活动",
      image: campusEnvironment_31,
    },
    {
      index: 31,
      name: "UDC校区会客休息区",
      image: campusEnvironment_32,
    },
    {
      index: 32,
      name: "UDC校区黑胶唱片墙",
      image: campusEnvironment_33,
    },
    {
      index: 33,
      name: "5.1.4全景声音乐混录棚",
      image: campusEnvironment_34,
    },
    {
      index: 34,
      name: "西兴校区编曲间",
      image: campusEnvironment_35,
    },
    {
      index: 35,
      name: "UDC校区会客休息区",
      image: campusEnvironment_36,
    },
    {
      index: 36,
      name: "7.1.4全景声电影混录棚",
      image: campusEnvironment_37,
    },
    {
      index: 37,
      name: "西兴校区休息区",
      image: campusEnvironment_38,
    },
    {
      index: 38,
      name: "YAMAHA C7B 演奏级三角钢琴",
      image: campusEnvironment_39,
    },
    {
      index: 39,
      name: "YAMAHA C7B 演奏级三角钢琴",
      image: campusEnvironment_40,
    },

  ];
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
          <div className="fixed inset-0 bg-black bg-opacity-90" />
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
                <div className="w-[1200px] mx-auto items-center h-[520px] flex justify-center relative overflow-x-hidden">
                  <div className="w-[644px] flex items-center h-[520px]">
                    <div
                      style={{
                        transform: `translateX(-${currentPage * 668}px)`,
                      }}
                      className={`flex transition-all duration-500 gap-6`}
                    >
                      {list.map((el: any) => (
                        <div
                          key={`CampusEnvironment-${el.index}`}
                          className="w-[644px] h-[520px]"
                        >
                          <Image
                            className="w-[644px] h-[520px]"

                            src={el.image}
                            alt=""
                          />
                        </div>

                      ))}
                    </div>
                  </div>
                  {currentPage !== 0 && <div
                    style={{
                      background:
                        "linear-gradient(270deg, rgba(0, 0, 0, 0) 0% , rgba(0, 0, 0, 0.9) 100%)",
                    }}
                    className=" w-52 h-full absolute top-0 left-0"
                  ></div>}
                  {currentPage !== list.length-1 &&<div
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(0, 0, 0, 0) 0% , rgba(0, 0, 0, 0.9) 100%)",
                    }}
                    className=" w-52 h-full absolute top-0 right-0"
                  ></div>}
                  <div className="w-[1200px] mx-auto items-center h-[520px] flex justify-center absolute top-0 left-0 overflow-x-hidden">
                    <div className="w-[644px] flex items-center h-[520px]">
                      <div
                        style={{
                          transform: `translateX(-${currentPage * 668}px)`,
                        }}
                        className={`flex opacity-0 transition-all duration-500 gap-6`}
                      >
                        {list.map((el: any) => (
                          <div
                            onClick={() => setCurrentPage(el.index)}
                            key={`CampusEnvironment-${el.index}--`}
                            className=" cursor-pointer w-[644px] h-[520px]"
                          >
                            <Image
                              className="w-[644px] h-[520px]"

                              src={el.image}
                              alt=""
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex justify-center">
                  <p className={`font-light absolute transition-all duration-300 opacity-0 text-[14px] mr-2 mt-8 leading-[180%]`}>
                    {list[oldCurrentPage].name}
                  </p>
                  <p className={`font-light text-[14px] transition-all duration-300 opacity-100 mt-8 leading-[180%]`}>
                    {list[currentPage].name}
                  </p>
                </div>
                <div className="flex mt-[64px] justify-center relative w-[758px] overflow-hidden mx-auto items-center gap-4">
                  <div
                    className="flex w-[86px] items-center h-[86px] p-2"
                  >
                    <div
                      style={{
                        transform: `translateX(-${currentPage * 86}px)`,
                      }}
                      className="flex transition-all duration-500 gap-4"
                    >
                      {list.map((el: any) => (
                        <div key={`CampusEnvironment-${el.index}-min`}
                          className="w-[70px] h-[70px]">
                          <Image
                            className="w-[70px] h-[70px]"
                            src={el.image}
                            alt=""
                            onClick={() => {
                              if (currentPage !== oldCurrentPage) {
                                setOldCurrentPage(currentPage)
                              }
                              setCurrentPage(el.index);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    style={{ border: " 1px solid #FF4B00" }}
                    className="flex w-[86px] absolute items-center h-[86px] p-2"
                  >
                  </div>
                  {<div
                    style={{
                      background:
                        "linear-gradient(270deg, rgba(0, 0, 0, 0) 0% , rgba(0, 0, 0, 0.9) 100%)",
                    }}
                    className=" w-[300px] h-full absolute top-0 left-0"
                  ></div>}
                  <div
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(0, 0, 0, 0) 0% , rgba(0, 0, 0, 0.9) 100%)",
                    }}
                    className=" w-[300px] h-full absolute top-0 right-0"
                  ></div>
                  <div className="flex absolute justify-center w-[758px] overflow-hidden top-0 left-0 opacity-0 items-center gap-4">
                    <div
                      style={{ border: " 1px solid #FF4B00" }}
                      className="flex w-[86px] items-center h-[86px] p-2"
                    >
                      <div
                        style={{
                          transform: `translateX(-${currentPage * 86}px)`,
                        }}
                        className="flex cursor-pointer transition-all duration-500 gap-4"
                      > {list.map((el: any) => (
                        <div key={`CampusEnvironment-${el.index}-min---`}
                          className="w-[70px] h-[70px]">
                          <Image
                            className="w-[70px] h-[70px]"
                            src={el.image}
                            alt=""
                            onClick={() => {
                              if (currentPage !== oldCurrentPage) {
                                setOldCurrentPage(currentPage)
                              }
                              setCurrentPage(el.index);
                            }}
                          />
                        </div>
                      ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 font-light text-[#FF4B00] text-[14px] leading-[180%]">
                  {currentPage + 1}/{list.length}
                </p>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
