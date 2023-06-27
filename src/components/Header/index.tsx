"use client";
import Image from "next/image";
import logo from "@/assets/image/svg/logo.svg";
import mobile_logo from "@/assets/image/mobile/mobile-logo.svg";
import Consult from "../Modal/Consult";
import { useEffect, useState } from "react";
import CampusEnvironment from "../Modal/CampusEnvironment";
import styled from "styled-components";

interface HeaderProps {
  isOpenCampus: number;
  setIsOpenCampus: Function;
  isOpenConsult: number;
  setIsOpenConsult: Function;
  scrollToView: any;
}
const Box = styled.div`
  .active-item {
    :before {
      content: "";
      position: absolute;
      width: 24px;
      height: 1px;
      border-radius: 2px;
      bottom: 8px;
      background: #fff;
    }
  }
`;

export default function Header({
  isOpenCampus,
  setIsOpenCampus,
  setIsOpenConsult,
  isOpenConsult,
  scrollToView,
}: HeaderProps) {
  const [pageTop, setPageTop] = useState<number>(0);
  useEffect(() => {
    document.documentElement.addEventListener("wheel", () => {
      setPageTop(document.documentElement.scrollTop);
    });
  });

  return (
    <Box className="fixed z-[10000] w-screen pl-[48px] max-md:px-4 max-md:py-3  pr-6  py-4 left-0 flex items-center justify-between top-0">
      <div>
        <Image className="max-md:hidden" src={logo} alt="" />
        <Image className="md:hidden" src={mobile_logo} alt="" />
      </div>
      <div className="flex gap-4 max-md:gap-2 items-center">
        <div
          className={`py-4 cursor-pointer text-[14px] leading-[100%] hover:font-normal hover:opacity-100 opacity-80 px-6 max-md:hidden font-light `}
        >
          音乐留学
        </div>
        <div
          className={`py-4 cursor-pointer text-[14px] flex max-md:hidden justify-center relative leading-[100%] hover:font-normal hover:opacity-100 opacity-80 px-6 font-light ${
            pageTop >= 5152 && pageTop < 6315 ? "active-item " : ""
          }`}
          onClick={() => {
            scrollToView(5152);
            setPageTop(5152);
          }}
        >
          师资团队
        </div>
        <div
          className={`py-4 cursor-pointer text-[14px] flex max-md:hidden justify-center relative leading-[100%] hover:font-normal hover:opacity-100 opacity-80 px-6 font-light  ${
            pageTop >= 6315 && pageTop < 7708 ? "active-item " : ""
          }`}
          onClick={() => {
            setPageTop(6315);

            scrollToView(6315);
          }}
        >
          公司特色
        </div>
        <div
          className={`py-4 cursor-pointer text-[14px] flex max-md:hidden justify-center relative leading-[100%] hover:font-normal hover:opacity-100 opacity-80 px-6 font-light  ${
            pageTop >= 7708 && pageTop < 8758 ? "active-item " : ""
          }`}
          onClick={() => {
            setPageTop(7708);
            scrollToView(7708);
          }}
        >
          关于我们
        </div>
        <div
          className={`py-4 cursor-pointer text-[14px] max-md:hidden flex justify-center relative leading-[100%] hover:font-normal hover:opacity-100 opacity-80 px-6 font-light  ${
            pageTop >= 9778 && pageTop < 10758 ? "active-item " : ""
          }`}
          onClick={() => {
            setPageTop(9778);
            scrollToView(9778);
          }}
        >
          原创音乐计划
        </div>

        <div
          style={{ border: "1px solid rgba(204, 204, 204, 0.3)" }}
          onClick={() => setIsOpenCampus(1)}
          className=" max-md:py-3 max-md:px-[23px] py-4 rounded-2xl hover:text-[#1A1A1A] hover:font-bold hover:bg-[#FFFFFF] cursor-pointer text-[14px] leading-[100%] opacity-80 md:w-[127px] md:text-center hover:opacity-100 md:font-light"
        >
          校区环境
        </div>
        <div
          style={{ border: "1px solid rgba(255, 75, 0, 0.5)" }}
          onClick={() => setIsOpenConsult(1)}
          className="py-[15px] max-md:py-3 cursor-pointer max-md:text-[14px] text-[16px] hover:text-[#1A1A1A] rounded-2xl leading-[100%] hover:bg-[#FF4B00] opacity-80 max-md:px-[23px] md:w-[127px] md:text-center  md:font-bold text-[#FF4B00]"
        >
          我要咨询
        </div>
      </div>
      <Consult setIsOpen={setIsOpenConsult} isOpen={isOpenConsult} />
      <CampusEnvironment setIsOpen={setIsOpenCampus} isOpen={isOpenCampus} />
    </Box>
  );
}
