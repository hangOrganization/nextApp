import Image from "next/image";
import businesspartner_bg from "../../assets/image/svg/businesspartner-bg.svg";
export default function BusinessPartner() {
  return (
    <div className="w-full h-[1187px] pt-[220px] flex flex-col items-center justify-center relative">
      <Image
        alt=""
        src={businesspartner_bg}
        className="absolute top-0 left-0 w-[720px]"
      ></Image>
      <Image
        alt=""
        src={businesspartner_bg}
        className="absolute top-0 right-0 scale-[-1] w-[720px] "
      ></Image>
      <p className="text-[56px] font-[300] leading-[120%] uppercase">
        合作伙伴
      </p>
      <p className="text-[22px] font-[200] leading-[160%] uppercase tracking-[0.69em] mt-4 opacity-60">
        our partners
      </p>
      <p className="text-[14px] font-[400] leading-[180%] uppercase  mt-4 opacity-50">
        这里写一些补充说明文字，主要表达服务于多家企业，商业资源丰富等话语
      </p>
    </div>
  );
}
