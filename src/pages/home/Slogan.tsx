"use client";
import styled from "styled-components";
import slogan_bg from "@/assets/image/svg/slogan-bg.svg";
import slogan_mobile_bg from "@/assets/image/png/slogan-mobile-bg.png";
import Image from "next/image";

import icon_right_arrow from "@/assets/image/svg/icon-right-black-arrow.svg";

const Box = styled.div`
  background: linear-gradient(
      180deg,
      #1a1a1a 0%,
      rgba(26, 26, 26, 0.464341) 48.22%,
      #1a1a1a 100%
    ),
    url(${slogan_bg.src}), url(${slogan_bg.src});
  background-blend-mode: normal, soft-light, color-dodge;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media not all and (min-width: 768px) {
    background: linear-gradient(
        180deg,
        #1a1a1a 0%,
        rgba(26, 26, 26, 0.46) 48.22%,
        #1a1a1a 100%
      ),
      url(${slogan_mobile_bg.src}), url(${slogan_mobile_bg.src});
  }
`;

const MoveBox = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  transition: all 300ms;
  cursor: pointer;

  .export-text {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 300ms;
    @media not all and (min-width: 768px) {
      top: unset;
      left: unset;
      transform: unset;
    }
  }
  .go-button {
    right: 50%;
    transform: translate(50%, 0);
    transition: all 300ms;
    @media not all and (min-width: 768px) {
      right: unset;
      transform: unset;
    }
  }
  @media (min-width: 768px) {
    :hover {
      transition: all 300ms;
      background-blend-mode: soft-light, normal;
      background: #ff4b00;
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: white;
      .export-text {
        color: #1a1a1a;
        left: 48px;
        transform: translate(0, -50%);
        transition: all 300ms;
        p:last-child {
          opacity: 0.6;
        }
      }
      .go-button {
        transition: all 300ms;
        right: 48px;
        opacity: 1;
        transform: translate(0, 0);
      }
    }
  }
`;

export default function Slogan() {
  return (
    <Box className="mt-[-185px]  max-md:mt-[0] w-full h-[866px]  max-md:h-[476px]">
      <div className="h-[866px]  max-md:h-[476px] flex items-center flex-col text-center   max-md:pt-[140px] max-md:pb-[48px]">
        <div className="text-[24px] max-md:text-[16px] text-[#FFFFFF] leading-[180%] font-[250]  mt-[235px] max-md:mt-[0] mb-[40px] max-md:mb-4 ">
          因形创声 随时造曲 应物无穷
        </div>
        <div
          className="text-[16px] max-md:text-[12px] font-[200] font-[Lexend]] leading-[180%] tracking-[0.2em] max-md:tracking-[2.4px] mb-[81px] max-md:mb-[56px] font-[Lexend]  max-md:px-[32px] "
          style={{
            color: "rgba(255, 255, 255, .5)",
            fontFeatureSettings: "'liga' off",
          }}
        >
          Shaping Sound Crafting Melodies Infinite Adaptations
        </div>

        <div
          style={{ background: "rgb(255,255,255,.02", borderRadius: "24px" }}
        >
          <MoveBox className="w-[592px]  max-md:w-[344px] h-[128px]  max-md:h-[143px] m-auto flex justify-center  max-md:flex-col items-center relative py-[38px]  max-md:py-[16px]">
            <div className="export-text  font-[250] text-[16px] leading-[180%] uppercase tracking-[0.2em] text-[#ff4b00] max-md:text-[#CCC]  flex flex-col justify-center items-center absolute z-[2] max-md:relative">
              <p className="mb-[8px] text-[24px]  max-md:text-[20px]  font-[400]  max-md:font-[250]   max-md:translate-[0]">
                探索更多声音服务
              </p>
              <p className=" max-md:text-[12px]  max-md:font-[300]  max-md:tracking-[2.4px]  max-md:mb-[24px] max-md:font[250]">
                其实，你可以听见更多
              </p>
            </div>
            <div className="go-button font-[400]  max-md:font-[300 ] text-[14px] leading-[180%] tracking-[1.4px] text-[#1a1a1a] z-[2] absolute opacity-0 flex gap-[8px] max-md:relative max-md:opacity-[1]   max-md:text-[#FF4B00]  max-md:z-[5]">
              前往万像循声
              <Image
                src={icon_right_arrow}
                alt=""
                className="w-[24px] max-md:hidden"
              ></Image>
              <svg
                className="md:hidden"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20C12 20 15.2353 12 23 12C15.2353 12 12 4 12 4"
                  stroke="#FF4B00"
                />
                <path d="M23 12L1 12" stroke="#FF4B00" />
              </svg>
            </div>
          </MoveBox>
        </div>
      </div>
    </Box>
  );
}
