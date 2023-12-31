import "swiper/css";
import Image from "next/image";
import "swiper/css/pagination";
import styled from "styled-components";
import { Fragment, useEffect, useState } from "react";
import { list } from "@/utils/campusEnvironmentList";
import { Dialog, Transition } from "@headlessui/react";
import arrow_normal from "../../assets/image/png/arrow_normal2.png";
import arrow_active from "../../assets/image/png/arrow_active.png";
import EnlargeImageModal from "./EnlargeImageModal";
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
const ButtonBox = styled.div`
  .normal-arrow {
    transition: 150ms all;
    cursor: pointer;
    &:hover {
      opacity: 0;
    }
  }
  .active-arrow {
    transition: 150ms all;
    cursor: pointer;

    opacity: 0;
    &:hover {
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
  const [innerHeight, setInnerHeight] = useState<number>(0);
  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);
  function closeModal() {
    setIsOpen(0);
  }
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [oldCurrentPage, setOldCurrentPage] = useState<number>(0);
  const [open, setOpen] = useState<number>(0);
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
          <div className="flex min-h-full items-center justify-center p-4 max-md:pb-0 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="text-center w-screen"
                onClick={() => {
                  closeModal();
                }}
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg md:hidden flex justify-end font-medium leading-6 text-gray-900 max-md:right-0"
                >
                  <svg
                    onClick={closeModal}
                    className=" cursor-pointer"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 24L24.0012 7.99879" stroke="#ffffff" />
                    <path d="M8 8L24.0012 24.0012" stroke="#ffffff" />
                  </svg>
                </Dialog.Title>
                <div className="text-center max-md:hidden w-screen max-md:pt-[32px]">
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
                              className="w-[644px] object-contain h-[520px]"
                              src={el.image}
                              alt=""
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    {currentPage !== 0 && (
                      <div
                        style={{
                          background:
                            "linear-gradient(270deg, rgba(0, 0, 0, 0) 0% , rgba(0, 0, 0, 0.9) 100%)",
                        }}
                        className=" w-52 h-full absolute top-0 left-0"
                      ></div>
                    )}
                    {currentPage !== list.length - 1 && (
                      <div
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0% , rgba(0, 0, 0, 0.9) 100%)",
                        }}
                        className=" w-52 h-full absolute top-0 right-[-2px]"
                      ></div>
                    )}
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
                              onClick={(event) => {
                                event.stopPropagation();
                                setCurrentPage(el.index);
                              }}
                              key={`CampusEnvironment-${el.index}--`}
                              className=" cursor-pointer w-[644px] h-[520px]"
                            >
                              <Image
                                className="w-[644px] object-contain h-[520px]"
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
                    <div className=" relative flex justify-center items-center w-full">
                      {list.map((el: any) => (
                        <p
                          key={`${el.index}-el.name-campusEnvironment`}
                          className={`font-light absolute text-[14px] transition-all ${el.index === currentPage ? "opacity-100" : ""
                            } duration-1000 opacity-0 mt-8 leading-[180%]`}
                        >
                          {el.name}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <ButtonBox className="w-[900px] h-[86px] max-md:hidden  absolute bottom-[43px] z-[1] flex items-center justify-between">
                      <div
                        className="flex relative"
                        onClick={(event) => {
                          event.stopPropagation();
                          if (currentPage == 0) return;
                          if (currentPage !== oldCurrentPage) {
                            setOldCurrentPage(currentPage);
                          }
                          if (currentPage - 10 > 0) {
                            setCurrentPage(currentPage - 10);
                          } else {
                            setCurrentPage(0);
                          }
                        }}
                      >
                        <Image
                          src={arrow_normal}
                          alt=""
                          className="normal-arrow  w-[48px]"
                        ></Image>
                        <Image
                          src={arrow_active}
                          alt=""
                          className="active-arrow absolute w-[48px]"
                        ></Image>
                      </div>
                      <div
                        className="flex relative"
                        onClick={(event) => {
                          event.stopPropagation();
                          if (currentPage == list.length - 1) return;
                          if (currentPage !== oldCurrentPage) {
                            setOldCurrentPage(currentPage);
                          }
                          if (currentPage + 10 < list.length - 1) {
                            setCurrentPage(currentPage + 10);
                          } else {
                            setCurrentPage(list.length - 1);
                          }
                        }}
                      >
                        <Image
                          src={arrow_normal}
                          alt=""
                          className="flex rotate-[180deg] normal-arrow w-[48px] "
                        ></Image>
                        <Image
                          src={arrow_active}
                          alt=""
                          className="flex rotate-[180deg] active-arrow  absolute"
                        ></Image>
                      </div>
                    </ButtonBox>
                    <div className="flex mt-[64px] justify-center relative w-[758px] z-[2]  overflow-hidden mx-auto items-center gap-4">
                      <div className="flex w-[86px] items-center h-[86px] p-2">
                        <div
                          style={{
                            transform: `translateX(-${currentPage * 86}px)`,
                          }}
                          className="flex transition-all duration-500 gap-4"
                        >
                          {list.map((el: any) => (
                            <div
                              key={`CampusEnvironment-${el.index}-min`}
                              className="w-[70px] h-[70px]"
                            >
                              <Image
                                className="w-[70px] h-[70px]"
                                src={el.image}
                                alt=""
                                onClick={() => {
                                  if (currentPage !== oldCurrentPage) {
                                    setOldCurrentPage(currentPage);
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
                      ></div>

                      {
                        <div
                          style={{
                            background:
                              "linear-gradient(270deg, rgba(0, 0, 0, 0) 0% , rgba(0, 0, 0, 0.9) 100%)",
                          }}
                          className=" w-[300px] h-full absolute top-0 left-0"
                        ></div>
                      }
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
                          >
                            {list.map((el: any) => (
                              <div
                                key={`CampusEnvironment-${el.index}-min---`}
                                className="w-[70px] h-[70px]"
                              >
                                <Image
                                  className="w-[70px] h-[70px]"
                                  src={el.image}
                                  alt=""
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    if (currentPage !== oldCurrentPage) {
                                      setOldCurrentPage(currentPage);
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
                  </div>
                  <p className="mt-4 font-light text-[#FF4B00] text-[14px] leading-[180%]">
                    {currentPage + 1}/{list.length}
                  </p>
                </div>
                <div className="md:hidden">
                  <div
                    style={{ maxHeight: `${innerHeight - 48}px` }}
                    className=" pb-[96px] overflow-y-auto flex justify-between gap-y-[6px] flex-wrap"
                  >
                    {list.map((el: any) => (
                      <div
                        onClick={(event) => {
                          event.stopPropagation();
                          setCurrentPage(el.index);
                          setOpen(1);
                        }}
                        className=" w-[165px] relative flex justify-center items-end h-[160px] max-md:h-[190px]"
                        key={`mobile-CampusEnvironment-${el.index}`}
                      >
                        <p className="mb-2 font-light absolute text-ellipsis overflow-hidden line-clamp-1 text-[12px] max-md:bottom-[-32px]leading-[180%]">
                          {el.name}
                        </p>
                        <Image
                          src={el.image}
                          className="w-[165px] object-cover h-[165px]"
                          alt=""
                        />
                      </div>
                    ))}
                    <div className=" w-screen h-12 max-md:hidden"></div>
                  </div>
                </div>
                <EnlargeImageModal
                  isOpen={open}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  setIsOpen={setOpen}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
