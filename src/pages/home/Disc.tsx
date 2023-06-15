"use client";
import styled from "styled-components";
import disc_bg from "../../assets/image/svg/disc-bg.svg";
import RHYTHM from "../../assets/image/disc-icon/RHYTHM.svg";
import Image from "next/image";

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
        <Image className="w-[136px]" src={RHYTHM} alt=""></Image>
        <div className="ml-4">
          <div
            className=" py-[8px] mb-4 mt-2 text-[14px] leading-[100%] font-[400] text-[#FF4B00] box-border w-[55px] text-center"
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
        </div>
      </DiscBox>
    </Box>
  );
}
