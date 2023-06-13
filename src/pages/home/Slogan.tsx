"use client";
import styled from "styled-components";
import slogan_bg from "../../assets/image/svg/slogan-bg.svg";
import slogan_movebox_bg from "../../assets/image/svg/slogan-movebox-bg.svg";
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

const MoveBox = styled.div`
  width: 592px;
  height: 128px;
  margin: auto;
  background: url(${slogan_movebox_bg.src}), rgba(255, 255, 255, 0.6);
  background-blend-mode: soft-light, overlay;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 24px;
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

        <MoveBox
          className="flex 
        flex-col item-center justify-between py-6 "
        >
          <p className="text-[#FF4B00] font-[250] text-6 leading-[180%] uppercase">
            探索更多声音服务
          </p>
          <p className="text-[#FF4B00] font-[250] text-[16px] leading-[180%] uppercase tracking-[0.2em]">
            其实，你可以听见更多
          </p>
        </MoveBox>
      </div>
    </Box>
  );
}
