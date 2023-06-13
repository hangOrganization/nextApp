import Image from "next/image";
import logo from "@/assets/image/svg/logo.svg";
import bilibili_img from "../../assets/image/svg/icon-bilibili.svg";
import wechat_img from "../../assets/image/svg/icon-wechat.svg";
import red_book_img from "../../assets/image/svg/icon-red-book.svg";
import net_ease_cloud_img from "../../assets/image/svg/icon-net-ease-cloud.svg";
import Tip from "../../components/Tips/tip";

export default function Footer() {
  return (
    <div className="pb-[80px] px-6">
      <div
        className="flex items-center justify-between px-6 w-full relative z-[10] pb-8 "
        style={{ borderBottom: "1px solid rgba(255, 255, 255, .5)" }}
      >
        <div className="w-[114px] ">
          <Image src={logo} alt=""></Image>
        </div>
        <div className="flex items-center ">
          <div className="flex item-cneter gap-8">
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

      <div className="mt-[68px] ml-[71px] mb-[24px]  text-white leading-[200%] text-[14px] font-[250]">
        <div className="flex items-center gap-[40px]">
          <div>联系我们</div>
          <div className="flex items-center gap-[8px]">
            <span>马老师</span>
            +8619273829182
          </div>
          <div className="flex items-center gap-[8px]">
            <span>邮箱</span>
            Mrxia@signart.com
          </div>
        </div>

        <div className="flex items-center gap-[40px] mt-[16px]">
          <div>联系我们</div>
          浙江省杭州市滨江区西兴街道江淑路260号11603室
        </div>

        <div
          className="mt-[24px] text-[12px]"
          style={{ color: "rgba(255, 255, 255, .5)" }}
        >
          © 2023 SIGNART. All Right Reserved.
        </div>
      </div>
    </div>
  );
}
