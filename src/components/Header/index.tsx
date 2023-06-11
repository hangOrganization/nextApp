import Image from 'next/image'
import logo from '../../assets/image/svg/logo.svg'


export default function Header() {
    return(
        <div className="fixed z-[10000] w-screen pl-[48px] pr-6 py-4 left-0 flex items-center justify-between top-0">
            <div>
                <Image src={logo} alt=''/>
            </div>
            <div className='flex gap-4 items-center'>
                <div className="py-4 cursor-pointer text-[14px] leading-[100%] opacity-80 px-6 font-light">服务项目</div>
                <div className="py-4 cursor-pointer text-[14px] leading-[100%] opacity-80 px-6 font-light">公司特色</div>
                <div className="py-4 cursor-pointer text-[14px] leading-[100%] opacity-80 px-6 font-light">团队作品</div>
                <div className="py-4 cursor-pointer text-[14px] leading-[100%] opacity-80 px-6 font-light">关于我们</div>
                <div style={{border: '1px solid rgba(255, 75, 0, 0.5)'}} className="py-[15px] cursor-pointer text-[16px] rounded-2xl leading-[100%] opacity-80 px-8 font-bold text-[#FF4B00]">我要咨询</div>
            </div>
        </div>
    )
}