"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import styled from "styled-components";
import video_cover from "../../assets/image/png/video-cover.png";
import video_pause from "../../assets/image/png/video-pause.png";
import video_play from "../../assets/image/png/video-play.png";
import icon_love from "../../assets/image/png/video-icon-love.png";
import icon_time from "../../assets/image/png/video-icon-time.png";
import icon_share from "../../assets/image/png/video-icon-share.png";
const Box = styled.div`
  :hover {
    .img-box {
      opacity: 1;
    }
  }
`;

const VideoStateBox = styled.div`
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
`;

export default function Video() {
  const [videoState, setVideoState] = useState(false);
  const videoRef = useRef<any>();
  const [clickNumber, setClickNumber] = useState(1);
  const changeVideoState = () => {
    setClickNumber(() => clickNumber + 1);
    if (clickNumber == 1) {
      setVideoState(!videoState);
    }
    if (clickNumber == 2 && videoState) {
      setClickNumber(1);
      setVideoState(true);
      videoRef.current?.play();
      console.log("开始");
    }
    if (clickNumber == 2 && !videoState) {
      setClickNumber(1);
      setVideoState(false);
      videoRef.current?.pause();
      console.log("暂停");
    }
  };

  return (
    <div className="w-full my-[160px]">
      <p className="mx-auto mt-[8px] mb-[40px] font-[300] text-[14px] leading-[220%] uppercase text-center text-[#FFFFFF] opacity-[0.7]">
        - 请观看导师学生作品混剪 -
      </p>

      <Box
        className="relative w-[960px] h-[542px] mx-auto flex items-center justify-center"
        onClick={changeVideoState}
      >
        <div className="w-[32px] h-[112px] absolute top-[10px] right-[8px] opacity-0 flex flex-col gap-[8px] z-[5] img-box ">
          <Image src={icon_love} alt="" className=" cursor-pointer"></Image>
          <Image src={icon_time} alt="" className=" cursor-pointer"></Image>
          <Image src={icon_share} alt="" className=" cursor-pointer"></Image>
        </div>

        {/* <VideoStateBox
          className={[
            "w-[144px] h-[80px]  absolute z-[5] cursor-pointer  flex items-center justify-center duration-500 transition-all ",
          ].join("")}
          style={{
            background: videoState ? "#FF4B00" : "rgba(0, 0, 0, 0.7)",
          }}
        >
          {videoState ? (
            <div className="flex items-center">
              <Image
                src={video_play}
                alt=""
                className="w-[10px] mr-[10px]"
              ></Image>
              <Image src={video_play} alt="" className="w-[10px]"></Image>
            </div>
          ) : (
            <Image src={video_pause} alt="" className="w-[38px] "></Image>
          )}
        </VideoStateBox> */}
        <video
          className="mx-auto relative z-[1]"
          id="playChatVideo"
          ref={videoRef}
          width="960"
          controls
          height="542"
        >
          <source src="/video/test.mp4" type="video/mp4"></source>
        </video>
      </Box>
    </div>
  );
}
