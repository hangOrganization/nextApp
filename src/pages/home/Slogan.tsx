"use client";
import styled from "styled-components";
import slogan_bg from "../../assets/image/svg/slogan-bg.svg";
const Box = styled.div`
  width: 100%;
  height: 866px;
  background: linear-gradient(
      180deg,
      #1a1a1a 0%,
      rgba(26, 26, 26, 0.464341) 48.22%,
      #1a1a1a 100%
    ),
    url(${slogan_bg.src}), url(${slogan_bg.src});
  background-blend-mode: normal, soft-light, color-dodge;
  background-size: 100%;
`;

export default function slogan() {
  return (
    <Box>
      <div className="h-[866px] flex items-center flex-col text-center ">
        <div className="text-[24px] text-[#FFFFFF] leading-[180%] font-[250]  mt-[235px] mb-[40px] ">
          因形创声 随时造曲 应物无穷
        </div>
        <div
          className="text-[16px] font-[200] font-[Lexend]] leading-[180%] tracking-[0.2em] mb-[81px] "
          style={{
            color: "rgba(255, 255, 255, .5)",
            fontFeatureSettings: "'liga' off",
          }}
        >
          Shaping Sound Crafting Melodies Infinite Adaptations
        </div>
      </div>
    </Box>
  );
}
