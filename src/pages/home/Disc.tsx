"use client";
import styled from "styled-components";
import disc_bg from "../../assets/image/svg/disc-bg.svg";
import RHYTHM from "../../assets/image/disc-icon/RHYTHM.svg";
import Image from "next/image";
import icon_left_arrow from "../../assets/image/svg/icon-left-arrow.svg";
const Box = styled.div`
  width: 100vw;
  height: 1440px;
  background: url(${disc_bg.src});
  background-size: cover;
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
`;

export default function Disc() {
  return (
    <Box>
      <DiscBox>
        <Image className="w-[136px] h-[136px]" src={RHYTHM} alt=""></Image>
        <div className="ml-4 w-full">
          <div
            className="w-[52px] h-[30px] flex items-center justify-center mt-1 mb-[16px]  text-[14px] leading-[100%] font-[400] text-[#FF4B00] box-border "
            style={{
              border: "1px solid rgba(255, 75, 0, 0.5)",
              borderRadius: "12px",
            }}
          >
            快剪
          </div>
          <div className="font-[300] text-[22px] leading-[100%] text-[#FFFFFF]">
            RHYTHM
          </div>
          <div className=" w-[112px]" style={{ marginLeft: "auto" }}>
            <div className="flex items-center justify-center w-[112px] h-[40px] bg-[#FF4B00] rounded-[16px] mt-[20px] ">
              <div className="font-[400] text-[14px] leading-[100%]">
                前往试听
              </div>
              <Image className="w-[24px]" src={icon_left_arrow} alt=""></Image>
            </div>
          </div>
        </div>
      </DiscBox>
    </Box>
  );
}
