import Image from "next/image";
import logo from "@/assets/image/svg/logo.svg";
import wechat_QRcode from "../../assets/image/svg/wechat-QRcode.png";
import red_book_QRcode from "../../assets/image/svg/red-book-QRcode.svg";
import bilibili_QRcode from "../../assets/image/svg/bilibili-QRcode.svg";
import net_ease_cloud_QRcode from "../../assets/image/svg/net-ease-cloud-QRcode.svg";
import Tip from "../../components/Tips/tip";
import { dataFrom } from "@/pages/home";

interface FooterProps {
  dataFrom?: dataFrom
}
export default function Footer({ dataFrom }: FooterProps) {
  return (
    <div className="pb-[80px] max-md:pb-[24px]  px-6 max-md:px-[16px] mt-[-80px] max-md:mt-[200px]">
      <div
        className="flex items-center justify-between max-md:justify-center px-6 max-md:px-4 w-full relative z-[10] pb-8  "
        style={{ borderBottom: "1px solid rgba(255, 255, 255, .5)" }}
      >
        <div className="w-[114px] max-md:hidden" >
          <Image src={logo} alt=""></Image>
        </div>
        <div className="flex items-center ">
          <div className="flex item-cneter gap-8">
            <Tip
              imgSrc={1}
              qrCodeSrc={bilibili_QRcode}
              id="my-anchor-element-id-bilibili_img"
              url="https://space.bilibili.com/1195424266?spm_id_from=333.337.0.0"
            ></Tip>
            <Tip
              imgSrc={2}
              qrCodeSrc={wechat_QRcode}
              id="my-anchor-element-id-wechat_img"
            ></Tip>
            <Tip
              imgSrc={3}
              qrCodeSrc={red_book_QRcode}
              id="my-anchor-element-id-red_book_img"
              url="https://www.xiaohongshu.com/user/profile/627497ec0000000021020be7?xhsshare=WeixinSession&appuid=5d29776c0000000011018943&apptime=1687776556"
            ></Tip>
            <Tip
              imgSrc={4}
              qrCodeSrc={net_ease_cloud_QRcode}
              id="my-anchor-element-id-net_ease_cloud_img"
              url="https://music.163.com/#/artist?id=12039058&app_version=8.0.21"
            ></Tip>
          </div>
        </div>
      </div>

      <div className="mt-[68px] max-md:mt-[24px] ml-[71px] max-md:ml-0  mb-[24px]  max-md:mb-0  text-white leading-[200%]   text-[14px] font-[250] ">
        <div className="flex items-center max-md:flex-col gap-[40px] max-md:gap-2">
          <div className="max-md:font-[300]  max-md:opacity-[0.5] ">
            联系我们
          </div>
          <div className="flex items-center gap-[8px]">{ dataFrom?.phone}</div>
          <div className="flex items-center gap-[8px]">
            <span>邮箱</span>
            { dataFrom?.email}
          </div>
        </div>

        <div className="flex items-center max-md:flex-col  gap-[40px] mt-[16px]  max-md:mt-[32px] max-md:mb-[150px] max-md:gap-2  max-md:text-[12px]">
          <div className="max-md:opacity-[0.5]   max-md:text-[14px] ">
            公司地址
          </div>
          {dataFrom?.address}
        </div>

        <div
          className="mt-[24px] text-[12px] font-[300] max-md:text-center"
          style={{ color: "rgba(255, 255, 255, .5)" }}
        >
          © 2023 SIGNART. All Right Reserved.
        </div>
      </div>
    </div>
  );
}
