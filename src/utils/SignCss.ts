import styled from "styled-components";

export const Box = styled.div`
  position: absolute;
  z-index: 20;
  width: 196.08px;
  height: 87.87px;
  top: 25px;
  mix-blend-mode: normal;
  border-radius: 100px/45px;
  border: 1px solid #cccccc;
  transform: rotate(-30deg);
  .ball1 {
    animation: animX 2s cubic-bezier(0.36, 0, 0.64, 1) 1s infinite alternate,
      animY 2s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
  }
  @keyframes animX {
    0% {
      left: -20px;
    }
    100% {
      left: 170px;
    }
  }
  @keyframes animY {
    0% {
      top: -20px;
    }
    100% {
      top: 70px;
    }
  }
`;
export const SliderBox = styled.div`
  .slider {
    animation: sliderAnimation 5s linear infinite;
  }
  @keyframes sliderAnimation {
    0% {
      top: 0%;
    }
    30% {
      top: 0%;
    }
    35% {
      top: 50%;
    }
    60% {
      top: 50%;
    }
    65% {
      top: 100%;
    }
    95% {
      top: 100%;
    }
    100% {
      top: 0%;
    }
  }
`;
export const ShadowBox = styled.div`
  width: 33.58px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 129.57px;
  background: #ffd701;
  mix-blend-mode: overlay;
  filter: blur(8px);
  transform: rotate(30deg);
`;
export const ShadowBox2 = styled.div`
  width: 6.16px;
  height: 99.63px;
  background: #ffd701;
  mix-blend-mode: overlay;
  filter: blur(4px);
  transform: rotate(30deg);
`;
export const ButtonBox = styled.div`
  @media (min-width: 768px) {
    button {
    :hover {
      .shadow {
        margin-top: -27px;
        margin-left: 260px;
    }
    }
  }
  }
`;
export const EchoRollBox = styled.div`
  @media (min-width: 768px) {
    opacity: 0;
  animation: move-echo 2s linear 1s forwards,
    echoRollBox 6s cubic-bezier(0.33, 0.6, 0.81, 0.5) infinite 3s;
  @keyframes move-echo {
    0% {
      opacity: 0;
      transform: translateX(230px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @keyframes echoRollBox {
    0% {
      transform: translateX(0px);
    }
    40% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(-780px);
    }
    90% {
      transform: translateX(-780px);
    }
    100% {
      transform: translateX(-1560px);
    }
  }
  }
`;
export const ButtonBorder = styled.div`
  border: 1px solid;
  box-sizing: border-box;
`;
export const ScaleBox = styled.div`
  .textScale {
    animation: textScale 4s linear infinite;
  }
  @keyframes textScale {
    0% {
      transform: scale(1);
    }
    5% {
      transform: scale(1.2);
    }
    10% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
export const RollBox = styled.div`
  .roll {
    animation: rollBox 5s linear infinite;
  }
  @keyframes rollBox {
    0% {
      transform: translateY(0px);
    }
    30% {
      transform: translateY(0px);
    }
    35% {
      transform: translateY(-102px);
    }
    60% {
      transform: translateY(-102px);
    }
    65% {
      transform: translateY(-204px);
    }
    95% {
      transform: translateY(-204px);
    }
    100% {
      transform: translateY(-306px);
    }
  }
`;
export const MoireFringe = styled.div`
  overflow: hidden;
  .moireFringe {
    animation: MoireFringe 5s linear infinite;
    @keyframes MoireFringe {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.3);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;
export const LineBox = styled.div`
  .line-1 {
    animation: line-1 1s linear infinite;
    transform: translateX(80px);
  }
  .before {
    :before {
      content: "10";
      color: #fff;
      text-align: center;
      font-size: 72px;
      font-family: Lexend;
      font-weight: 150;
      line-height: 120%;
      text-transform: uppercase;
      animation: beforeMove 2s linear;
      @keyframes beforeMove {
        0% {
          content: "0";
          opacity: 0;
        }
        10% {
          content: "1";
          opacity: 0.1;
        }
        20% {
          content: "2";
          opacity: 0.2;
        }
        30% {
          content: "3";
          opacity: 0.3;
        }
        40% {
          content: "4";
          opacity: 0.4;
        }
        50% {
          content: "5";
          opacity: 0.5;
        }
        60% {
          content: "6";
          opacity: 0.6;
        }
        70% {
          content: "7";
          opacity: 0.7;
        }
        80% {
          content: "8";
          opacity: 0.8;
        }
        90% {
          content: "9";
          opacity: 0.9;
        }
        100% {
          content: "10";
          opacity: 1;
        }
      }
    }
    :after {
      content: "年";
      color: #ccc;
      text-align: center;
      font-size: 40px;
      font-weight: 300;
      line-height: 150%;
      text-transform: uppercase;
      animation: afterMove 2s linear;
      @keyframes afterMove {
        0% {
          opacity: 0;
        }
        10% {
          opacity: 0.1;
        }
        20% {
          opacity: 0.2;
        }
        30% {
          opacity: 0.3;
        }
        40% {
          opacity: 0.4;
        }
        50% {
          opacity: 0.5;
        }
        60% {
          opacity: 0.6;
        }
        70% {
          opacity: 0.7;
        }
        80% {
          opacity: 0.8;
        }
        90% {
          opacity: 0.9;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
  @keyframes line-1 {
    0% {
      transform: translateX(80px);
    }
    50% {
      transform: translateX(-112px);
    }
    100% {
      transform: translateX(-230px);
      width: 20px;
    }
  }
  .line-2 {
    animation: line-2 800ms linear infinite;
    transform: translateX(85px);
  }
  @keyframes line-2 {
    0% {
      transform: translateX(85px);
    }
    50% {
      transform: translateX(-112px);
    }
    100% {
      transform: translateX(-230px);
      width: 20px;
    }
  }
  .line-3 {
    animation: line-3 1200ms linear infinite;
    transform: translateX(62px);
  }
  @keyframes line-3 {
    0% {
      transform: translateX(62px);
    }
    50% {
      transform: translateX(-112px);
    }
    100% {
      transform: translateX(-230px);
      width: 20px;
    }
  }
  .line-4 {
    animation: line-4 900ms linear infinite;
    transform: translateX(62px);
  }
  @keyframes line-4 {
    0% {
      transform: translateX(62px);
    }
    50% {
      transform: translateX(-112px);
    }
    100% {
      transform: translateX(-230px);
      width: 20px;
    }
  }
`;

export const SignBgBox = styled.div`
  .sign-bg-2 {
    transform: scaleY(0);
    animation: sign-bg-2-move 1500ms linear 300ms forwards;
  }
  @keyframes sign-bg-2-move {
    0% {
      transform: scaleY(0);
    }

    100% {
      transform: scaleY(1);
    }
  }

  .sign-bg-1 {
    opacity: 0;

    animation: sign-bg-1-move 2000ms linear 800ms,
      sign-bg-1-move-2 3000ms linear infinite 2800ms;
  }
  @keyframes sign-bg-1-move {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  @keyframes sign-bg-1-move-2 {
    0% {
      transform: scale(1.1);
      opacity: 1;
    }

    50% {
      transform: scale(0.8);
      opacity: 1;
    }

    100% {
      transform: scale(1.1);
      opacity: 1;
    }
  }
`;

export const TextBox = styled.div`
  animation: text-box-move 1200ms linear forwards 1400ms;
  width: 288px;
  display: flex;
  opacity: 0;
  overflow: hidden;
  justify-content: center;
  height: 49px;
  @media not all and (min-width: 768px) {
    width: 120px;
    height: 21px !important;
    @keyframes text-box-move {
      0% {
        width: 120px;
        height: 21px;
        opacity: 0;
      }
      30% {
        opacity: 1;
        height: 21px;
      }
      100% {
        width: 343px;
        opacity: 1;
        height: 21px;
      }
    }
  }
  @keyframes text-box-move {
    0% {
      width: 288px;
      height: 49px;
      opacity: 0;
    }
    30% {
      opacity: 1;
      height: 49px;
    }

    100% {
      width: 818px;
      opacity: 1;
      height: 49px;
    }
  }
`;
export const SingLogo = styled.div`
  height: 155px;
  .img-box-1 {
    transform: scaleY(0);
    transform-origin: center center;
    animation: img-box-1-move 260ms linear 920ms forwards;
  }
  @keyframes img-box-1-move {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }

  .img-box-2 {
    transform: scaleY(0);

    transform-origin: center center;
    animation: img-box-2-move 300ms linear 900ms forwards;
  }
  @keyframes img-box-2-move {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }

  .img-box-3 {
    transform: scaleY(0);

    transform-origin: center center;
    animation: img-box-3-move 170ms linear 930ms forwards;
  }
  @keyframes img-box-3-move {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }
  .img-box-4 {
    transform: scaleY(0);
    transform-origin: center center;
    animation: img-box-4-move 100ms linear 900ms forwards;
  }
  @keyframes img-box-4-move {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }

  .img-box-5 {
    transform: scaleY(0);
    transform-origin: center center;
    animation: img-box-5-move 250ms linear 950ms forwards;
  }
  @keyframes img-box-5-move {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;
