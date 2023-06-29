"use client";
import Image from "next/image";
import businesspartner_bg from "@/assets/image/svg/businesspartner-bg.svg";
import styled from "styled-components";

import partner from "@/utils/partner";

const ScrollBox = styled.div`
  /* transform: translateX(-126px); */

  animation: bg 25s linear infinite;
  @keyframes bg {
    from {
    }
    to {
      transform: translateX(-2432px);
    }
  }
  @media not all and (min-width: 768px) {
    animation: bg 25s linear infinite;

    @keyframes bg {
      from {
      }
      to {
        transform: translateX(-973px);
      }
    }
  }
`;
const MoveLeftBgBox = styled.div`
  background: url(${businesspartner_bg.src});
  background-repeat: no-repeat;
  background-size: cover;
  animation: bgMove 5s linear infinite alternate;
  mix-blend-mode: lighten;
  @keyframes bgMove {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-184px);
    }
  }
  @media not all and (min-width: 768px) {
    @keyframes bgMove {
      from {
        transform: translateX(-160px);
      }
      to {
        transform: translateX(-250px);
      }
    }
  }

  /* translate-x-[184px] */
`;
const MoveRightBgBox = styled.div`
  background: url(${businesspartner_bg.src});
  background-repeat: no-repeat;
  background-size: cover;
  mix-blend-mode: lighten;
  animation: bgMove2 5s linear infinite alternate;
  @keyframes bgMove2 {
    from {
      transform: scale(-1) translateX(0);
    }
    to {
      transform: scale(-1) translateX(-184px);
    }
  }
  @media not all and (min-width: 768px) {
    @keyframes bgMove2 {
      from {
        transform: scale(-1) translateX(-160px);
      }
      to {
        transform: scale(-1) translateX(-250px);
      }
    }
  }
`;

const ScrollCenterBox = styled.div`
  /* transform: translateX(-126px); */
  animation: partnerRoll 25s linear -1.59s infinite;
  @keyframes partnerRoll {
    from {
    }
    to {
      transform: translateX(-2432px);
    }
  }
  @media not all and (min-width: 768px) {
    animation: partnerRoll 25s linear infinite -1.7s;
    @keyframes partnerRoll {
      from {
      }
      to {
        transform: translateX(-973px);
      }
    }
  }
`;
const Partner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 288px;
  height: 136px;
  background: rgba(255, 255, 255, 0.1);
  background-blend-mode: overlay;
  border-radius: 24px;
  img {
    width: 200px;
  }
  @media not all and (min-width: 768px) {
    width: 115.2px;
    height: 54.4px;
    border-radius: 9.6px;
    img {
      width: 80px;
    }
  }
`;
export default function BusinessPartner() {
  return (
    <div className="w-screen h-[1187px]  max-md:h-[646px] flex flex-col items-center pt-[220px] max-md:pt-0 relative ">
      <MoveLeftBgBox className="w-[720px] max-md:w-[392px] h-[1187px]  max-md:h-[646px]  absolute left-0 top-0  max-md:top-[150px]"></MoveLeftBgBox>
      <MoveRightBgBox className="w-[720px] max-md:w-[392px]   h-[1187px] max-md:h-[646px]   absolute  right-0  top-0 max-md:top-[150px]  "></MoveRightBgBox>
      <p className="text-[56px] top-0 font-[300] leading-[120%] uppercase max-md:text-[28px] ">
        合作伙伴
      </p>
      <p className="text-[22px] max-md:text-[14px] font-[200] leading-[160%] uppercase tracking-[0.69em] my-4 opacity-60">
        our partners
      </p>
      <p className="text-[14px] max-md:text-[12px] font-[300] leading-[180%] uppercase mb-[64px] max-md:mb-[80px] opacity-50 text-center max-md:px-[45px]">
        十万象限常年与国内外一线品牌 上星卫视等通力合作 打造优秀作品
        共筑商业价值
      </p>
      <div className="overflow-hidden">
        <ScrollBox className="flex items-center justify-center cursor-pointer overflow-hidden gap-[16px] max-md:gap-[6.4px] ">
          {[...partner.first, ...partner.first, ...partner.first].map(
            (item: any, index: number) => (
              <Partner key={index}>
                <Image src={item} alt="" key={index} />
              </Partner>
            )
          )}
        </ScrollBox>
        <ScrollCenterBox className="flex items-center justify-center cursor-pointer overflow-hidden gap-[16px] max-md:gap-[6.4px] my-[16px] max-md:my-[6.4px]">
          {[...partner.second, ...partner.second, ...partner.second].map(
            (item: any, index: number) => (
              <Partner key={index}>
                <Image src={item} alt="" key={index} />
              </Partner>
            )
          )}
        </ScrollCenterBox>

        <ScrollBox className="flex items-center justify-center cursor-pointer overflow-hidden gap-[16px] max-md:gap-[6.4px] ">
          {[...partner.third, ...partner.third, ...partner.third].map(
            (item: any, index: number) => (
              <Partner key={index}>
                <Image src={item} alt="" key={index} />
              </Partner>
            )
          )}
        </ScrollBox>
      </div>
    </div>
  );
}
