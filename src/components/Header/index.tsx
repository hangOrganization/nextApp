import Image from "next/image";
import logo from "@/assets/image/svg/logo.svg";
import Consult from "../Modal/Consult";
import { useState } from "react";
import CampusEnvironment from "../Modal/CampusEnvironment";
import styled from "styled-components";
interface HeaderProps {
  scrollView: any;
}
const Box = styled.div`
  .headr-item {
    transition: all 300ms;
    position: relative;
    :hover {
      opacity: 1;
    }
  }
  .active-item {
    :after {
      content: "";
      position: absolute;
      bottom: 8px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 2px;
      background: #fff;
      width: 24px;
      height: 1px;
    }
  }
  .school-item {
    transition: all 300ms;
    :hover {
      color: #1a1a1a;
      background: #ffffff;
      opacity: 1;
      font-weight: 700;
    }
  }
  .message-item {
    transition: all 300ms;
    :hover {
      background: #ff4b00;
      color: #1a1a1a;
    }
  }
`;

export default function Header({ scrollView }: HeaderProps) {
  const [isOpen, setIsOpen] = useState<number>(0);
  const [isOpenCampus, setIsOpenCampus] = useState<number>(0);

  return (
    <Box className="fixed z-[10000] w-screen pl-[48px] pr-6 py-4 left-0 flex  items-center justify-between top-0">
      <div>
        <Image src={logo} alt="" />
      </div>
      <div className="flex gap-4 items-center">
<<<<<<< HEAD
        <div
          className="headr-item active-item  py-4 cursor-pointer text-[14px] leading-[100%] opacity-80 px-6 font-light"
          onClick={() => scrollView(1000)}
        >
          音乐留学
        </div>
        <div
          className="headr-item py-4 cursor-pointer text-[14px] leading-[100%] opacity-80 px-6 font-light"
          onClick={() => scrollView(5049)}
        >
          师资团队
        </div>
        <div className="headr-item py-4 cursor-pointer text-[14px] leading-[100%] opacity-80 px-6 font-light">
          公司特色
        </div>
        <div className="headr-item py-4 cursor-pointer text-[14px] leading-[100%] opacity-80 px-6 font-light">
          关于我们
        </div>
        <div className="headr-item py-4 cursor-pointer text-[14px] leading-[100%] opacity-80 px-6 font-light">
          原创音乐计划
        </div>
        <div
          style={{ border: "1px solid rgba(204, 204, 204, 0.3)" }}
          onClick={() => setIsOpenCampus(1)}
          className="school-item py-4 rounded-2xl cursor-pointer text-[16px] leading-[100%] opacity-80 px-6 font-light"
        >
=======
        <div className="py-4 cursor-pointer text-[14px] leading-[100%] hover:font-normal hover:opacity-100 opacity-80 px-6 font-light">
          音乐留学
        </div>
        <div className="py-4 cursor-pointer text-[14px] leading-[100%] hover:font-normal hover:opacity-100 opacity-80 px-6 font-light">
          师资团队
        </div>
        <div className="py-4 cursor-pointer text-[14px] leading-[100%] hover:font-normal hover:opacity-100 opacity-80 px-6 font-light">
          公司特色
        </div>
        <div className="py-4 cursor-pointer text-[14px] leading-[100%] hover:font-normal hover:opacity-100 opacity-80 px-6 font-light">
          关于我们
        </div>
        <div className="py-4 cursor-pointer text-[14px] leading-[100%] hover:font-normal hover:opacity-100 opacity-80 px-6 font-light">
          原创音乐计划
        </div>
        <div style={{ border: '1px solid rgba(204, 204, 204, 0.3)' }} onClick={() => setIsOpenCampus(1)} className="py-4 rounded-2xl hover:text-[#1A1A1A] hover:font-bold hover:bg-[#FFFFFF] cursor-pointer text-[14px] leading-[100%] opacity-80 px-6 hover:opacity-100 font-light">
>>>>>>> 7fd4dc7587b00791b180313b2f75feb29a4e6d09
          校区环境
        </div>
        <div
          style={{ border: "1px solid rgba(255, 75, 0, 0.5)" }}
          onClick={() => setIsOpen(1)}
<<<<<<< HEAD
          className="message-item py-[15px] cursor-pointer text-[16px] rounded-2xl leading-[100%] opacity-80 px-8 font-bold text-[#FF4B00]"
=======
          className="py-[15px] cursor-pointer text-[16px] hover:text-[#1A1A1A] rounded-2xl leading-[100%] hover:bg-[#FF4B00] opacity-80 px-8 font-bold text-[#FF4B00]"
>>>>>>> 7fd4dc7587b00791b180313b2f75feb29a4e6d09
        >
          我要咨询
        </div>
      </div>
      <Consult setIsOpen={setIsOpen} isOpen={isOpen} />
      <CampusEnvironment setIsOpen={setIsOpenCampus} isOpen={isOpenCampus} />
    </Box>
  );
}
