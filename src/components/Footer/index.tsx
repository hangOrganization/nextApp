import Image from "next/image";
import logo from "@/assets/image/svg/logo.svg";
import bilibili_img from "../../assets/image/svg/icon-bilibili.svg";
import wechat_img from "../../assets/image/svg/icon-wechat.svg";
import red_book_img from "../../assets/image/svg/icon-red-book.svg";
import net_ease_cloud_img from "../../assets/image/svg/icon-net-ease-cloud.svg";
import Tip from "../../components/Tips/tip";

import { Tooltip } from "react-tooltip";

export default function Footer() {
  return (
    <div className="w-screen">
      <div
        className="flex items-center justify-between  w-full px-[23px] mx-[24px] relative z-[10] pb-[32px]  "
        style={{ borderBottom: "1px solid rgba(255, 255, 255, .5)" }}
      >
        <div className="w-[114px] pl-6">
          <Image src={logo} alt=""></Image>
        </div>
        <div className="flex items-center ">
          <div className="flex item-cneter gap-[32px]">
            <Tip
              imgSrc={bilibili_img}
              qrCodeSrc={logo}
              id="my-anchor-element-id"
            ></Tip>
            <Tip
              imgSrc={wechat_img}
              qrCodeSrc={logo}
              id="my-anchor-element-id"
            ></Tip>
            <Tip
              imgSrc={red_book_img}
              qrCodeSrc={logo}
              id="my-anchor-element-id"
            ></Tip>
            <Tip
              imgSrc={net_ease_cloud_img}
              qrCodeSrc={logo}
              id="my-anchor-element-id"
            ></Tip>
          </div>
        </div>
      </div>
    </div>
  );
}
