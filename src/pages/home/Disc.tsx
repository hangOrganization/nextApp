"use client";
import styled from "styled-components";
import disc_bg from "@/assets/image/svg/disc-bg.svg";
import Image from "next/image";
import icon_right_arrow from "@/assets/image/svg/icon-right-white-arrow.svg";
import discList from "@/utils/discList";
import disc_left_decoraton from "../../assets/image/svg/disc-left-decoration.svg";
import disc_right_decoraton from "../../assets/image/svg/disc-right-decoration.svg";
import disc_film from "../../assets/image/png/disc-film.png";
import disc_acquiesce from "../../assets/image/svg/disc-acquiesce.svg";

import { useState } from "react";
interface DiscBoxProps {
  title: string;
  bg: any;
  src: string;
  type: string;
  key: number;
}
const Box = styled.div`
  height: 1440px;
  width: 100vw;
  overflow: hidden;
  background: url(${disc_bg.src});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .active-move {
    .film-img {
      transition: all 500ms;
      transform: translateX(160px) rotate(40deg);
    }
    .film-bg {
      transform: translateX(-20px);
      transition: all 500ms;
    }
    .left-coraton {
      transform: translateX(-35px);
      transition: all 500ms;
    }
    .right-coraton {
      transition: all 500ms;
      right: 15px;
    }
  }
`;

const DiscBox = styled.div`
  box-sizing: border-box;
  width: 389px;
  height: 168px;
  background: rgba(255, 255, 255, 0.6);
  background-blend-mode: soft-light, overlay;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  display: flex;
  padding: 16px;
  transition: all 400ms;
  cursor: pointer;
  .audition-button {
    opacity: 0;
    transition: all 400ms;
  }
  :hover {
    transition: all 400ms;
    transform: translateY(-5px);
    .audition-button {
      opacity: 1;
      transition: all 400ms;
    }
  }
`;

const LeftDecoraton = styled.div`
  width: 367.17px;
  height: 370.17px;
  mix-blend-mode: overlay;
  background: url(${disc_left_decoraton.src});
  margin-top: auto;
  transform: translateX(5px);
  transition: all 500ms;
  background-repeat: no-repeat;
`;
const RightDecoraton = styled.div`
  width: 329.16px;
  height: 175.97px;
  mix-blend-mode: overlay;
  background: url(${disc_right_decoraton.src});
  background-repeat: no-repeat;
  position: absolute;
  top: -150px;
  transition: all 500ms;
  right: 45px;
`;

const FilmBox = styled.div`
  width: 492px;
  height: 492px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .film-img {
    width: 444px;
    height: 444px;
    position: absolute;
    transition: all 500ms;
    transform: translateX(120px) rotate(0deg);
    transform-origin: center center;
  }
  .film-bg {
    width: 492px;
    height: 492px;
    position: relative;
    z-index: 3;
    transition: all 500ms;
  }
`;

export default function Disc() {
  const [moveFlag, setmoveFlag] = useState(false);
  const [discImg, setdiscImg] = useState(disc_acquiesce);
  const mouseLeave = (bg: any) => {
    setdiscImg(disc_acquiesce);
    setmoveFlag(false);
  };
  const mouseEnter = (bg: any) => {
    setdiscImg(bg);
    setmoveFlag(true);
  };
  return (
    <Box>
      <div className={moveFlag ? "active-move" : ""}>
        <div className=" w-[1160px] flex mb-[72px] relative mx-auto">
          <div className="flex">
            <LeftDecoraton className="left-coraton"></LeftDecoraton>

            <FilmBox>
              <Image src={disc_film} alt="" className="film-img"></Image>
              <Image src={discImg} alt="" className="film-bg"></Image>
            </FilmBox>
          </div>

          <RightDecoraton className="right-coraton"></RightDecoraton>
        </div>
      </div>
      <div className="w-[4439px] flex items-center gap-[16px]">
        {discList.map((item: DiscBoxProps) => (
          <DiscBox
            key={item.key}
            onMouseEnter={() => mouseEnter(item.bg)}
            onMouseLeave={mouseLeave}
          >
            <Image
              className="w-[136px] h-[136px]"
              src={item.src}
              alt=""
            ></Image>
            <div className="ml-4 w-full">
              <div
                className="w-[52px] h-[30px] flex items-center justify-center mt-1 mb-[16px]  text-[14px] leading-[100%] font-[400] text-[#FF4B00] box-border "
                style={{
                  border: "1px solid rgba(255, 75, 0, 0.5)",
                  borderRadius: "12px",
                }}
              >
                {item.type}
              </div>
              <div className="font-[300] text-[22px] leading-[100%] text-[#FFFFFF]">
                {item.title}
              </div>
              <div className=" w-[112px]" style={{ marginLeft: "auto" }}>
                <div className="flex items-center justify-center w-[112px] h-[40px] bg-[#FF4B00] rounded-[16px] mt-[20px]  audition-button">
                  <div className=" font-[400] text-[14px] leading-[100%]">
                    前往试听
                  </div>
                  <Image
                    className="w-[24px]"
                    src={icon_right_arrow}
                    alt=""
                  ></Image>
                </div>
              </div>
            </div>
          </DiscBox>
        ))}
      </div>
    </Box>
  );
}
