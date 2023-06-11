import Image from "next/image";
import logo from "@/assets/image/svg/logo.svg";
export default function Footer() {
  return (
    <div className="w-screen">
      <div className="flex items-center justify-between w-full px-6">
        <div className="w-[114px] pl-6">
          <Image src={logo} alt=""></Image>
        </div>
      </div>
    </div>
  );
}
