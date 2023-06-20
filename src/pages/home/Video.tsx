"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import styled from "styled-components";
import video_cover from "../../assets/image/png/video-cover.png";
import video_pause from "../../assets/image/png/video-pause.png";
import video_play from "../../assets/image/png/video-play.png";
const VideoBox = styled.div``;
const VideoStateBox = styled.div`
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
`;

export default function Video() {
  const [videoState, serVideoState] = useState(false);
  const videoRef = useRef<HTMLVideoElement>();
  const changeVideoState = () => {
    serVideoState(!videoState);
    videoState ? videoRef.current?.pause() : videoRef.current?.play();
  };

  return (
    <div className="w-full my-[160px]">
      <p className="mx-auto mt-[8px] mb-[40px] font-[300] text-[14px] leading-[220%] uppercase text-center text-[#FFFFFF] opacity-[0.7]">
        - 请观看导师学生作品混剪 -
      </p>

      <div
        className="relative w-[960px] h-[542px] mx-auto flex items-center justify-center"
        onClick={changeVideoState}
      >
        <VideoStateBox
          className="w-[144px] h-[80px]  absolute z-[5] cursor-pointer  flex items-center justify-center duration-500 transition-all"
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
        </VideoStateBox>
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
      </div>
    </div>
  );
}
