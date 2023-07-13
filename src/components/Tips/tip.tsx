import { Tooltip } from "react-tooltip";
import Image from "next/image";
import styled from "styled-components";
import { useMemo, useState } from "react";
import { useOuterWidth } from "@/state/application/hooks";

interface props {
  children?: Element;
  imgSrc: number;
  id: string;
  qrCodeSrc: any;
  url?: string;
}
const TooltipBox = styled(Tooltip)`
  padding: 0;
  margin: 0;
  overflow: hidden;
  background: transparent;
  .react-tooltip-arrow {
    height: 0;
  }
`;
const HoverButton = styled(`div`)`
  :hover {
    g {
      opacity: 1;
    }
  }
`;
const Img = styled(Image)`
  animation: identifierImg 300ms;
  @keyframes identifierImg {
    to {
      transform: translateY(0px);
    }
    from {
      transform: translateY(100px);
    }
  }
`;
export default function Index({ children, imgSrc, id, qrCodeSrc, url }: props) {
  const [isOpen, setIsOpen] = useState(false)
  const innerWidth = useOuterWidth();
  const icon = useMemo(() => {
    switch (imgSrc) {
      case 1:
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M23.4676 5.31967C23.6069 5.45896 23.7175 5.62432 23.7929 5.80632C23.8683 5.98832 23.9071 6.1834 23.9071 6.3804C23.9071 6.5774 23.8683 6.77247 23.7929 6.95447C23.7175 7.13648 23.6069 7.30184 23.4676 7.44112L22.096 8.81143H23.5C24.091 8.81143 24.6763 8.92786 25.2224 9.15406C25.7684 9.38027 26.2645 9.71182 26.6824 10.1298C27.1003 10.5477 27.4317 11.0439 27.6578 11.59C27.8839 12.1361 28.0002 12.7213 28 13.3123V22.3117C28 23.5051 27.5259 24.6496 26.682 25.4934C25.8381 26.3373 24.6935 26.8114 23.5 26.8114H8.5C7.30653 26.8114 6.16193 26.3373 5.31802 25.4934C4.47411 24.6496 4 23.5051 4 22.3117V13.3123C4 12.1189 4.47411 10.9744 5.31802 10.1306C6.16193 9.2867 7.30653 8.81263 8.5 8.81263H9.8992L8.53 7.44232C8.3867 7.304 8.27238 7.13853 8.19371 6.95556C8.11505 6.77259 8.07361 6.57579 8.07183 6.37663C8.07004 6.17748 8.10794 5.97996 8.18331 5.79561C8.25867 5.61126 8.37001 5.44376 8.51081 5.30289C8.6516 5.16202 8.81905 5.0506 9.00337 4.97513C9.1877 4.89967 9.3852 4.86166 9.58437 4.86333C9.78354 4.86501 9.98038 4.90633 10.1634 4.98488C10.3464 5.06344 10.512 5.17766 10.6504 5.32087L13.8328 8.50305C13.9276 8.59784 14.0068 8.70104 14.0704 8.81143H17.926C17.9896 8.70104 18.07 8.59544 18.1648 8.50185L21.346 5.31967C21.4853 5.18035 21.6507 5.06984 21.8327 4.99444C22.0147 4.91903 22.2098 4.88022 22.4068 4.88022C22.6038 4.88022 22.7989 4.91903 22.9809 4.99444C23.1629 5.06984 23.3283 5.18035 23.4676 5.31967ZM23.5 11.8232H8.5C8.1214 11.8231 7.75675 11.9661 7.47921 12.2236C7.20167 12.4811 7.03177 12.834 7.0036 13.2115L7 13.3243V22.3237C7 23.1144 7.612 23.7624 8.3884 23.8188L8.5 23.8236H23.5C23.8786 23.8237 24.2433 23.6807 24.5208 23.4232C24.7983 23.1657 24.9682 22.8128 24.9964 22.4353L25 22.3237V13.3243C25 12.4964 24.328 11.8244 23.5 11.8244V11.8232ZM11.5 14.823C12.328 14.823 13 15.495 13 16.3229V17.8228C13 18.2206 12.842 18.6021 12.5607 18.8834C12.2794 19.1647 11.8978 19.3227 11.5 19.3227C11.1022 19.3227 10.7206 19.1647 10.4393 18.8834C10.158 18.6021 10 18.2206 10 17.8228V16.3229C10 15.495 10.672 14.823 11.5 14.823ZM20.5 14.823C21.328 14.823 22 15.495 22 16.3229V17.8228C22 18.2206 21.842 18.6021 21.5607 18.8834C21.2794 19.1647 20.8978 19.3227 20.5 19.3227C20.1022 19.3227 19.7206 19.1647 19.4393 18.8834C19.158 18.6021 19 18.2206 19 17.8228V16.3229C19 15.495 19.672 14.823 20.5 14.823Z"
                fill="white"
              />
            </g>
          </svg>
        );
      case 4:
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <g clipPath="url(#clip0_407_10645)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.69 4H20.31C23 4 24 4.28 24.93 4.8C25.8974 5.3116 26.6884 6.10259 27.2 7.07C27.72 8 28 9 28 11.69V20.31C28 22.98 27.72 23.95 27.2 24.93C26.6884 25.8974 25.8974 26.6884 24.93 27.2C23.93 27.72 22.98 28 20.31 28H11.69C9 28 8 27.72 7.07 27.2C6.10259 26.6884 5.3116 25.8974 4.8 24.93C4.28 24 4 23 4 20.31V11.69C4 9 4.28 8 4.8 7.07C5.3116 6.10259 6.10259 5.3116 7.07 4.8C8 4.28 9 4 11.69 4ZM19.5498 7.09014C20.1208 7.23025 20.6558 7.48922 21.1198 7.85014C21.2956 7.97365 21.434 8.14318 21.5198 8.34014C21.5817 8.49077 21.6058 8.65422 21.5901 8.8163C21.5744 8.97837 21.5194 9.13416 21.4298 9.27014C21.2881 9.49151 21.0648 9.64815 20.8084 9.70617C20.552 9.76419 20.2831 9.71891 20.0598 9.58014C20.0093 9.548 19.9652 9.50954 19.9215 9.47153C19.8701 9.42675 19.8193 9.38259 19.7598 9.35014C19.4666 9.14346 19.1185 9.0286 18.7598 9.02014C18.5129 9.04685 18.2848 9.16448 18.1198 9.35014C18.0381 9.43306 17.9781 9.53481 17.9449 9.64641C17.9118 9.75802 17.9066 9.87606 17.9298 9.99014L18.2998 11.3801C19.1882 11.414 20.0542 11.6683 20.8198 12.1201C21.5627 12.5751 22.2166 13.1613 22.7498 13.8501C23.2056 14.4483 23.5448 15.1267 23.7498 15.8501C23.9681 16.5995 24.0527 17.3814 23.9998 18.1601C23.953 18.8151 23.8185 19.4609 23.5998 20.0801C23.0235 21.5986 21.971 22.8896 20.5998 23.7601C19.5959 24.3869 18.4654 24.7831 17.2898 24.9201C16.4842 25.0396 15.6654 25.0396 14.8598 24.9201C13.1911 24.63 11.6574 23.8177 10.4798 22.6001C9.46727 21.5744 8.72872 20.3107 8.33208 18.925C7.93543 17.5394 7.89339 16.0763 8.20984 14.6701C8.50421 13.335 9.11853 12.0913 9.99995 11.0462C10.8814 10.001 12.0035 9.18561 13.2698 8.67014C13.4498 8.59863 13.6431 8.56696 13.8364 8.57732C14.0298 8.58768 14.2186 8.63981 14.3898 8.73014C14.5367 8.83521 14.6523 8.97808 14.7245 9.14358C14.7967 9.30908 14.8227 9.49104 14.7998 9.67014C14.7786 9.85238 14.7077 10.0253 14.5948 10.1699C14.482 10.3145 14.3315 10.4253 14.1598 10.4901C13.0769 10.9027 12.1254 11.5998 11.4055 12.5079C10.6857 13.4161 10.2243 14.5016 10.0698 15.6501C9.92547 16.7236 10.0492 17.8161 10.4298 18.8301C10.9738 20.3111 12.0409 21.5418 13.4298 22.2901C14.2727 22.7286 15.2097 22.9551 16.1598 22.9501C16.941 22.9456 17.7156 22.8069 18.4498 22.5401C19.717 22.0893 20.7718 21.1842 21.4098 20.0001C21.5692 19.715 21.6967 19.4132 21.7898 19.1001C22.0526 18.1921 22.0526 17.2282 21.7898 16.3201C21.5576 15.564 21.1176 14.8883 20.5198 14.3701C20.2595 14.1411 19.9783 13.9368 19.6798 13.7601C19.4162 13.6146 19.1335 13.5069 18.8398 13.4401C18.9623 13.9301 19.0923 14.4201 19.223 14.9124L19.223 14.9125C19.3056 15.224 19.3885 15.5363 19.4698 15.8501L19.5698 16.4301C19.5969 17.2395 19.3351 18.032 18.8313 18.666C18.3274 19.2999 17.6144 19.7339 16.8198 19.8901C15.9917 20.0557 15.1317 19.8944 14.4198 19.4401C13.7566 19.0001 13.2574 18.3532 12.9998 17.6001C12.8534 17.1783 12.7724 16.7365 12.7598 16.2901C12.7074 15.3121 12.9742 14.3435 13.5198 13.5301C14.1957 12.587 15.1785 11.9082 16.2998 11.6101L16.0598 10.6801C15.8573 10.0182 15.9108 9.30441 16.2098 8.68014C16.3858 8.33125 16.6308 8.02167 16.9298 7.77014C17.2347 7.47556 17.5998 7.25042 17.9998 7.11014C18.5058 6.9678 19.0403 6.9609 19.5498 7.09014ZM14.83 15.5103C14.9201 15.0899 15.1242 14.7023 15.42 14.3903C15.8138 13.9979 16.3033 13.7152 16.84 13.5703L17.53 16.1803C17.57 16.3315 17.6001 16.4852 17.62 16.6403C17.6035 16.9519 17.4834 17.2491 17.2786 17.4847C17.0739 17.7202 16.7963 17.8806 16.49 17.9403C16.3193 17.9793 16.1423 17.9826 15.9702 17.9499C15.7981 17.9172 15.6346 17.8492 15.49 17.7503C15.1415 17.4866 14.9057 17.1008 14.83 16.6703C14.7546 16.2873 14.7546 15.8933 14.83 15.5103Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_407_10645">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(4 4)"
                />
              </clipPath>
            </defs>
          </svg>
        );
      case 2:
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <g clipPath="url(#clip0_407_10135)">
                <path
                  d="M11.545 11.6758C11.0928 11.6758 10.6406 11.9772 10.6406 12.4294C10.6406 12.8816 11.0928 13.1831 11.545 13.1831C11.9971 13.1831 12.2986 12.8816 12.2986 12.4294C12.2986 11.9584 11.9971 11.6758 11.545 11.6758ZM17.6682 16.0469C17.3667 16.0469 17.0841 16.3672 17.0841 16.6498C17.0841 16.9701 17.3856 17.2528 17.6682 17.2528C18.1203 17.2528 18.4218 16.9513 18.4218 16.6498C18.4218 16.3484 18.1203 16.0469 17.6682 16.0469ZM15.7276 13.1831C16.1798 13.1831 16.4812 12.8628 16.4812 12.4294C16.4812 11.9772 16.1798 11.6758 15.7276 11.6758C15.2754 11.6758 14.8232 11.9772 14.8232 12.4294C14.8232 12.8816 15.2754 13.1831 15.7276 13.1831ZM20.9464 16.0469C20.645 16.0469 20.3624 16.3672 20.3624 16.6498C20.3624 16.9701 20.6638 17.2528 20.9464 17.2528C21.3986 17.2528 21.7 16.9513 21.7 16.6498C21.7 16.3484 21.3986 16.0469 20.9464 16.0469Z"
                  fill="white"
                />
                <path
                  d="M15.9541 3.04688C8.77584 3.04688 2.9541 8.86879 2.9541 16.0473C2.9541 23.2258 8.77584 29.0477 15.9541 29.0477C23.1324 29.0477 28.9541 23.2258 28.9541 16.0473C28.9541 8.86879 23.1324 3.04688 15.9541 3.04688ZM13.486 19.3822C12.7324 19.3822 12.1295 19.2314 11.4135 19.0619L9.34106 20.117L9.92512 18.2894C8.43671 17.2343 7.53236 15.8589 7.53236 14.2197C7.53236 11.337 10.2266 9.07605 13.486 9.07605C16.4063 9.07605 18.9874 10.8848 19.4961 13.3153C19.3077 13.2965 19.1193 13.2776 18.9309 13.2776C16.1048 13.3153 13.8816 15.4444 13.8816 18.0821C13.8816 18.5155 13.957 18.93 14.07 19.3445C13.8816 19.3633 13.6744 19.3822 13.486 19.3822ZM22.3034 21.4924L22.7556 22.9997L21.1353 22.0953C20.5512 22.246 19.9483 22.3967 19.3454 22.3967C16.5005 22.3967 14.2584 20.4373 14.2584 18.0068C14.2396 15.5951 16.4816 13.6356 19.3077 13.6356C22.0019 13.6356 24.3758 15.6139 24.3758 18.0256C24.3758 19.3822 23.4903 20.588 22.3034 21.4924Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_407_10135">
                <rect
                  width="26"
                  height="26.0008"
                  fill="white"
                  transform="translate(2.95312 3.04688)"
                />
              </clipPath>
            </defs>
          </svg>
        );
      case 3:
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <g clipPath="url(#clip0_407_10134)">
                <path
                  d="M27.3473 5.32452C27.1601 5.07018 26.9346 4.83503 26.6706 4.64788C26.1283 4.24473 25.4708 4 24.751 4H7.24417C6.52429 4 5.85723 4.24476 5.31494 4.64786C5.06059 4.83503 4.82545 5.06059 4.6383 5.3245C4.24476 5.86206 4 6.52429 4 7.24898V24.7558C4 25.4757 4.24473 26.1427 4.64784 26.6754C4.83501 26.9298 5.06057 27.1649 5.3245 27.3521C5.8668 27.7552 6.52427 28 7.24412 28H24.751C25.4708 28 26.1379 27.7552 26.6706 27.3521C26.9249 27.1649 27.1601 26.9394 27.3472 26.6755C27.7504 26.1331 27.9951 25.4757 27.9951 24.7558V7.24895C27.9951 6.52427 27.7408 5.86204 27.3473 5.3245L27.3473 5.32452ZM12.5903 14.9466C12.9742 14.0972 13.4061 13.2621 13.814 12.4271H15.2201C14.8746 13.1133 14.4907 13.7852 14.2459 14.4379C14.817 14.4043 15.3353 14.3755 15.9448 14.3419C15.6185 14.9946 15.3305 15.5753 15.0426 16.1559C15.0042 16.2327 14.9658 16.3143 14.9274 16.3911C14.625 16.9958 14.625 17.0005 15.2969 17.015C15.3689 17.015 15.4361 17.0246 15.5657 17.0389C15.3785 17.4085 15.2105 17.7444 15.033 18.0755C15.0042 18.1283 14.9226 18.1907 14.8698 18.1907C14.3755 18.1907 13.8764 18.2051 13.3821 18.1523C13.027 18.1139 12.8878 17.8404 13.027 17.5045C13.1949 17.0869 13.3965 16.679 13.5837 16.2663C13.6461 16.1223 13.7132 15.9832 13.8044 15.772C13.5309 15.772 13.3293 15.7768 13.1278 15.772C12.5471 15.748 12.3503 15.484 12.5903 14.9466ZM5.78523 19.4289C5.4877 18.9106 5.21898 18.4307 4.94542 17.9508C4.94542 17.8932 5.48291 16.2519 5.36294 14.3947H6.84102C6.84102 14.3947 6.89383 17.874 5.78523 19.4289ZM9.23575 19.2417C9.25014 20.1104 8.65028 20.1104 8.65028 20.1104H7.80084L6.90822 18.9298H7.84403V12.4271H9.25014C9.25014 14.5579 9.24536 17.1109 9.23575 19.2417ZM11.2801 19.3521C10.6083 18.7618 10.2436 17.0006 10.2531 14.3851H11.6401C11.5345 15.7624 11.9808 17.6005 11.9808 17.6005C11.9808 17.6005 11.5729 18.5027 11.2801 19.3521ZM14.3227 19.9616C14.2843 20.0336 14.1644 20.1008 14.078 20.1055C13.4253 20.1152 12.7678 20.1104 12.0192 20.1104C12.3023 19.5441 12.5375 19.0834 12.7439 18.6802H14.985C14.7354 19.1697 14.5387 19.5729 14.3227 19.9616V19.9616ZM20.0527 20.1152H15.009C15.2537 19.6305 15.6904 18.7666 15.6904 18.7666H17.1302V14.3563H16.2327V12.979H19.4817V14.3371H18.5939V18.7714H20.0527V20.1152ZM26.7234 19.0978C26.7234 20.1152 25.73 20.0864 25.73 20.0864H24.4343L23.892 18.9202L25.2981 18.925C25.2981 18.925 25.3125 17.8692 25.2981 17.5045C25.2885 17.1973 25.1205 17.0006 24.8086 16.9958C24.1847 16.9814 23.556 16.991 22.8698 16.991V20.0912H21.4781V17.0102H20.0719V15.5753H21.4397V14.3611H20.5326V13.003H21.4541V12.4271H22.8602L22.8698 13.003H23.9879C23.9879 13.003 25.0198 12.979 25.0245 13.9819C25.0293 14.2795 25.0341 15.2537 25.0341 15.5801C26.2195 15.5753 26.7234 15.8152 26.7234 16.6406V19.0977V19.0978ZM26.1283 14.3995H25.3797V13.6845C25.3797 13.4253 25.5092 13.1854 25.73 13.0462C25.9795 12.8878 26.3251 12.787 26.6514 13.099C26.6658 13.1086 26.6754 13.123 26.685 13.1374C27.1361 13.6124 26.781 14.3995 26.1283 14.3995L26.1283 14.3995Z"
                  fill="white"
                />
                <path
                  d="M22.8787 15.5745H23.8097V14.3555H22.8691L22.8787 15.5745Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_407_10134">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(4 4)"
                />
              </clipPath>
            </defs>
          </svg>
        );
    }
  }, [imgSrc]);
  const goPage = () => {
    if (url) {
      window.open(url);
    } else {
      return;
    }
  };
  return (
    <div>
      {innerWidth > 768 ?
        <div style={{ cursor: "pointer" }} onClick={goPage}>
          <HoverButton className="hover:md:translate-y-[-4px] transition-all" id={id}>
            {icon}
          </HoverButton>
          <TooltipBox data-tooltip-offset={1} anchorSelect={`#${id}`}>
            <Img className="mb-[-20px]" src={qrCodeSrc} alt="" />
          </TooltipBox>
        </div> :
        <div style={{ cursor: "pointer" }} className=" flex justify-center items-center" onClick={goPage}>
          <HoverButton onClick={() => {
            if (!url) {
              isOpen ? setIsOpen(false) : setIsOpen(true)
            }
          }
          } className="hover:md:translate-y-[-4px] transition-all" id={id}>
            {icon}
          </HoverButton>
          {imgSrc === 2 && <Img className={`absolute transition-all ${isOpen ? 'h-[100px]' : ''} h-0 bottom-12`} src={qrCodeSrc} alt="" onClick={() => console.log('11111111111')} />}
        </div>
      }
    </div>

  );
}
