"use client";
import Image from "next/image";
import businesspartner_bg from "@/assets/image/svg/businesspartner-bg.svg";
import styled from "styled-components";
import icon_landrover from "@/assets/image/brand-icon/icon-landrover.svg";

import partner from "@/utils/partner";

const Scroll = styled.div`
  overflow: hidden;
`;
const ScrollBox = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  cursor: pointer;
  gap: 16px;
  /* transform: translateX(-126px); */
  animation: partnerRoll 25s linear infinite;
  @keyframes partnerRoll {
    from {
    }
    to {
      transform: translateX(-2432px);
    }
  }
`;

const ScrollBox2 = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  cursor: pointer;
  gap: 16px;
  margin: 16px 0;
  /* transform: translateX(-126px); */
  animation: partnerRoll 25s linear -0.8s infinite;
  @keyframes partnerRoll {
    from {
    }
    to {
      transform: translateX(-2432px);
    }
  }
`;
const Partner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 288px;
  height: 136px;
  background: rgba(255, 255, 255, 0.2);
  background-blend-mode: overlay;
  border-radius: 24px;
`;
export default function BusinessPartner() {
  return (
    <div className="w-screen h-[1187px] pt-[220px] flex flex-col items-center justify-center relative overflow-hidden ">
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
      <p className="text-[14px] font-[400] leading-[180%] uppercase  mt-4 mb-[64px] opacity-50">
        这里写一些补充说明文字，主要表达服务于多家企业，商业资源丰富等话语
      </p>
      <Scroll>
        <ScrollBox>
          {[...partner.first, ...partner.first, ...partner.first].map(
            (item: any, index: number) => (
              <Partner>
                <Image className="w-[200px]" src={item} alt="" key={index} />
              </Partner>
            )
          )}
        </ScrollBox>
        <ScrollBox2>
          {[...partner.second, ...partner.second, ...partner.second].map(
            (item: any, index: number) => (
              <Partner>
                <Image className="w-[200px]" src={item} alt="" key={index} />
              </Partner>
            )
          )}
        </ScrollBox2>

        <ScrollBox>
          {[...partner.third, ...partner.third, ...partner.third].map(
            (item: any, index: number) => (
              <Partner>
                <Image className="w-[200px]" src={item} alt="" key={index} />
              </Partner>
            )
          )}
        </ScrollBox>

        {/* <ScrollBox className="my-4">
          <Partner>
            <Image className="w-[118px]" src={icon_landrover} alt="" />
          </Partner>
          <Partner>
            <Image className="w-[118px]" src={icon_landrover} alt="" />
          </Partner>
          <Partner>
            <Image className="w-[118px]" src={icon_landrover} alt="" />
          </Partner>
          <Partner>
            <Image className="w-[118px]" src={icon_landrover} alt="" />
          </Partner>
          <Partner>
            <Image className="w-[118px]" src={icon_landrover} alt="" />
          </Partner>
          <Partner>
            <Image className="w-[118px]" src={icon_landrover} alt="" />
          </Partner>
          <Partner>
            <Image className="w-[118px]" src={icon_landrover} alt="" />
          </Partner>
          <Partner>
            <Image className="w-[118px]" src={icon_landrover} alt="" />
          </Partner>
        </ScrollBox>

        <ScrollBox>
          <Partner>
            <Image className="w-[118px]" src={icon_landrover} alt="" />
          </Partner>
          <Partner>
            <Image className="w-[118px]" src={icon_landrover} alt="" />
          </Partner>
          <Partner>
            <Image className="w-[118px]" src={icon_landrover} alt="" />
          </Partner>
          <Partner>
            <Image className="w-[118px]" src={icon_landrover} alt="" />
          </Partner>
          <Partner>
            <Image className="w-[118px]" src={icon_landrover} alt="" />
          </Partner>
          <Partner>
            <Image className="w-[118px]" src={icon_landrover} alt="" />
          </Partner>
          <Partner>
            <Image className="w-[118px]" src={icon_landrover} alt="" />
          </Partner>
          <Partner>
            <Image className="w-[118px]" src={icon_landrover} alt="" />
          </Partner>
        </ScrollBox> */}
      </Scroll>
    </div>
  );
}
