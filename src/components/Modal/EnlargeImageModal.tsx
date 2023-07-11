import "swiper/css";
import Image from "next/image";
import "swiper/css/pagination";
import styled from "styled-components";
import { Fragment, useState } from "react";
import { list } from "@/utils/campusEnvironmentList";
import { Dialog, Transition } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
  currentPage: number;
  setCurrentPage: Function;
  setIsOpen: Function;
}
export default function EnlargeImageModal({
  currentPage,
  setCurrentPage,
  isOpen,
  setIsOpen,
}: CampusEnvironmentProps) {
  function closeModal() {
    setIsOpen(0);
  }
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
          <div className="flex min-h-full items-center justify-center text-center">
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
                <Swiper initialSlide={currentPage} className="mySwiper">
                  {list.map((el) => (
                    <SwiperSlide
                      className=" flex justify-center items-center"
                      key={`${el.index}--mySwiper`}
                    >
                      <div className="flex relative h-screen w-screen justify-center items-center">
                        <Image
                          className="flex justify-center items-center"
                          src={el.image}
                          alt=""
                        />
                      </div>
                      <p className="absolute left-4 bottom-8 font-light text-ellipsis overflow-hidden line-clamp-1 text-[14px] leading-[180%]">
                        {el.name}
                      </p>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
