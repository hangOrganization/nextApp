"use client";
import Image from "next/image";
import logo from "@/assets/image/svg/logo.svg";
import mobile_logo from "@/assets/image/mobile/mobile-logo.svg";
import Consult from "../Modal/Consult";
import { useEffect, useState } from "react";
import CampusEnvironment from "../Modal/CampusEnvironment";
import styled from "styled-components";
import { useActiveIndex, useActiveType } from "@/state/application/hooks";
import { useAppDispatch } from "@/state/hooks";
import {
  setAboutOrCorporation,
  setActiveIndex,
  setComePage,
} from "@/state/application/reducer";

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
  const activeIndex = useActiveIndex();
  // console.log("🚀 ~ file: index.tsx:42 ~ activeIndex:", activeIndex)
  const dispatch = useAppDispatch();
  const activeType = useActiveType();
  return (
    <Box className="fixed z-[10000] w-screen pl-[48px] max-md:px-4 max-md:py-3  pr-6  py-4 left-0 flex items-center justify-between top-0">
      <div
        className=" cursor-pointer"
        onClick={() => {
          dispatch(setActiveIndex(0));
        }}
      >
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
            activeIndex === 3 && activeType === 0 ? "active-item " : ""
          }`}
          onClick={() => {
            dispatch(setActiveIndex(3));
            dispatch(setAboutOrCorporation(0));
            dispatch(setComePage(2));
          }}
        >
          师资团队
        </div>
        <div
          className={`py-4 cursor-pointer text-[14px] flex max-md:hidden justify-center relative leading-[100%] hover:font-normal hover:opacity-100 opacity-80 px-6 font-light  ${
            activeIndex === 3 && activeType === 1 ? "active-item " : ""
          }`}
          onClick={() => {
            dispatch(setActiveIndex(3));
            dispatch(setAboutOrCorporation(1));
          }}
        >
          公司特色
        </div>
        <div
          className={`py-4 cursor-pointer text-[14px] flex max-md:hidden justify-center relative leading-[100%] hover:font-normal hover:opacity-100 opacity-80 px-6 font-light  ${
            activeIndex === 3 && activeType === 2 ? "active-item " : ""
          }`}
          onClick={() => {
            dispatch(setActiveIndex(3));
            dispatch(setAboutOrCorporation(2));
          }}
        >
          关于我们
        </div>
        <div
          className={`py-4 cursor-pointer text-[14px] max-md:hidden flex justify-center relative leading-[100%] hover:font-normal hover:opacity-100 opacity-80 px-6 font-light  ${
            activeIndex === 4 ? "active-item " : ""
          }`}
          onClick={() => {
            dispatch(setActiveIndex(4));
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
          className="py-[15px] max-md:py-3 cursor-pointer max-md:text-[14px] text-[16px] hover:text-[#1A1A1A] rounded-2xl leading-[100%] hover:bg-[#FF4B00] max-md:px-[23px] md:w-[127px] md:text-center  md:font-bold text-[#FF4B00]"
        >
          我要咨询
        </div>
      </div>
      <Consult setIsOpen={setIsOpenConsult} isOpen={isOpenConsult} />
      <CampusEnvironment setIsOpen={setIsOpenCampus} isOpen={isOpenCampus} />
    </Box>
  );
}
