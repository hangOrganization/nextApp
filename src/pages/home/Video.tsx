"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import styled from "styled-components";
import video_cover from "../../assets/image/png/video-cover.png";
import mobile_video from "../../assets/image/mobile/mobile-video.png";
import video_pause from "../../assets/image/png/video-pause.png";
import video_play from "../../assets/image/png/video-play.png";
import icon_love from "../../assets/image/png/video-icon-love.png";
import icon_time from "../../assets/image/png/video-icon-time.png";
import icon_share from "../../assets/image/png/video-icon-share.png";

import video_setting from "../../assets/image/png/video-setting.png";
import video_cc from "../../assets/image/png/video-cc.png";
import video_full from "../../assets/image/png/video-full.png";
import video_volume from "../../assets/image/png/video-volume.png";

const Box = styled.div`
  :hover {
    .img-box {
      opacity: 1;
    }
    .toolbar-box {
      opacity: 1;
    }
    .active-video-box {
      opacity: 1;
    }
  }

  .active-video-box {
    left: 45px;
    top: 510px;
    transform: translate(-50%, -50%);
    width: 65px;
    height: 40px;
    opacity: 0;
    img {
      height: 18px;
      width: 4px;
    }
  }
`;

const VideoStateBox = styled.div`
  border-radius: 4px;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
`;

export default function Video() {
  const [videoState, setVideoState] = useState(false);
  const videoRef = useRef<any>();
  // const [clickNumber, setClickNumber] = useState(1);
  const changeVideoState = () => {
    console.log(1231231);
    videoRef.current.paused
      ? videoRef.current?.play()
      : videoRef.current?.pause();
    setVideoState(!videoState);
  };

  const [progress, setProgress] = useState(0);

  const handleSeek = (event: { target: { value: number } }) => {
    videoRef.current.currentTime =
      (event.target.value * videoRef.current.duration) / 100;
  };

  const handleTimeUpdate = () => {
    setProgress(
      (videoRef.current.currentTime / videoRef.current.duration) * 100
    );
  };
  return (
    <div className="w-full max-md:mt-[112px] max-md:mb-20 md:my-[160px]">
      <p className="mx-auto mt-[8px] max-md:hidden mb-[40px] font-[300] text-[14px] leading-[220%] uppercase text-center text-[#FFFFFF] opacity-[0.7]">
        - 请观看导师学生作品混剪 -
      </p>

      <Box className="relative w-[960px] h-[542px] max-md:hidden mx-auto flex items-center justify-center">
        {videoState && (
          <div className="w-[32px] h-[112px] absolute top-[10px] right-[8px] opacity-0 flex flex-col gap-[8px] z-[5] duration-500 transition-all img-box ">
            <Image src={icon_love} alt="" className=" cursor-pointer"></Image>
            <Image src={icon_time} alt="" className=" cursor-pointer"></Image>
            <Image src={icon_share} alt="" className=" cursor-pointer"></Image>
          </div>
        )}

        {videoState && (
          <div
            className=" absolute bottom-[10px] right-[10px] w-[865px] h-[32px]  flex items-center justify-between opacity-0  z-[10] px-[10px] duration-500 transition-all    toolbar-box "
            style={{
              backgroundColor: "rgba(0,0,0,.7)",
            }}
          >
            <input
              className="w-[732px] h-[12px] bg-[#666]"
              type="range"
              name=""
              id=""
              value={progress}
              onChange={(e) => {
                handleSeek;
              }}
              min={0}
              max={100}
            />

            <div className=" flex items-center  gap-[10px]   ">
              <Image
                src={video_volume}
                alt=""
                width={18}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                cla
                className=" cursor-pointer"
              ></Image>
              <Image
                src={video_cc}
                width={20}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                className=" cursor-pointer"
              ></Image>
              <Image
                src={video_setting}
                width={15}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                className=" cursor-pointer"
              ></Image>
              <Image
                src={video_full}
                width={12}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  console.log(1321);
                  e.stopPropagation();
                  videoRef.current.requestFullscreen();
                }}
                className=" cursor-pointer"
              ></Image>
            </div>
          </div>
        )}
        <VideoStateBox
          onClick={changeVideoState}
          className={[
            "w-[144px] h-[80px]  absolute z-[5] cursor-pointer  flex items-center justify-center duration-500 transition-all ",
            videoState ? "active-video-box" : "",
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
            <Image src={video_pause} alt="" className="w-[38px]"></Image>
          )}
        </VideoStateBox>
        <video
          onClick={() => {
            console.log(1111);
          }}
          className="mx-auto max-md:hidden relative z-[1]"
          id="playChatVideo"
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          width="960"
          height="542"
        >
          <source src="/video/test.mp4" type="video/mp4"></source>
        </video>
      </Box>
      <div className="md:hidden">
        <Image className="w-full" src={mobile_video} alt="" />
      </div>
    </div>
  );
}
