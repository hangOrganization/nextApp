import { Tooltip } from "react-tooltip";
import logo from "../../assets/image/svg/logo.svg";
import Image from "next/image";
import { Children } from "react";

interface props {
  children?: Element;
  imgSrc: any;
  id: string;
  qrCodeSrc: any;
}

export default function Index({ children, imgSrc, id, qrCodeSrc }: props) {
  return (
    <div>
      <Image src={imgSrc} alt="" id={id}></Image>

      <Tooltip anchorSelect={`#${id}`}>
        <Image src={qrCodeSrc} alt=""></Image>
      </Tooltip>
    </div>
  );
}
