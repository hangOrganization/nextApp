import Image from 'next/image'
import sign_bg from '@/assets/image/svg/sign-bg.svg'
import sign_logo from '@/assets/image/svg/sign-logo.svg'
import sign_text from '@/assets/image/svg/sign-text.svg'
import sign_bg_1 from '@/assets/image/svg/sign-bg-1.svg'
import sign_bg_2 from '@/assets/image/svg/sign-bg-2.svg'
import styled from 'styled-components'

const Box = styled.div`
    position: absolute;
    width: 196.08px;
    height: 87.87px;
    mix-blend-mode: normal;
    border: 1px solid #CCCCCC;
    transform: rotate(-30deg);
`
export default function Sign() {
    return (
        <div className='relative w-screen'>
            <div className=' absolute z-10 h-[637px] w-screen flex justify-center top-0 left-0'>
                {/* <Image className='absolute  w-screen' src={sign_bg} alt='' /> */}
                <Image className='absolute' src={sign_bg_1} alt='' />
                <Image className='absolute  w-screen' src={sign_bg_2} alt='' />
            </div>
            <div className=' relative z-20 flex justify-center items-center flex-col pt-[302px]'>
                <Image className='' src={sign_logo} alt='' />
                <Image className='mt-[70px]' src={sign_text} alt='' />
                <p className=' font-normal uppercase tracking-[1em] mt-[72px] text-[26px]'>听见世界的回响</p>
            </div>
            <div className='flex items-center px-[192px] justify-between'>
                <div className='w-[224px] flex-col flex items-center justify-between'>
                    <div className='flex gap-[6px] items-end'>
                        <p className='font-[Lexend] text-[72px] leading-[120%] font-[150]'>10</p>
                        <p className='text-[40px] leading-[150%] font-[300]'>年</p>
                    </div>
                    <div className='mt-6'>
                        <div className='font-light leading-[220%] px-[2px] text-[14px] opacity-70 text-center'>
                            十万象限 是杭州首家拥有
                        </div>
                        <div className='font-light leading-[220%] px-[2px] text-[14px] opacity-70 text-center'>
                            十年音乐传媒行业经验的专业团队
                            由世界艺术名校海归艺术家导师及
                            独立音乐人联合创立
                        </div>
                    </div>
                </div>
                <div className='w-[224px] flex-col flex items-center px-[6px] justify-between'>
                    <div className='flex gap-[27px] items-center'>
                        <div className='relative flex justify-center'>
                            <div className='absolute top-[0%] w-4 h-1 bg-[#CCCCCC]'></div>
                            <div style={{ border: '0.5px solid #CCCCCC' }} className='h-20'></div>
                        </div>
                        <div className='py-[6px] text-center'>
                            <p className='text-[32px] leading-[160%] font-[300]'>音乐艺术</p>
                            <p className='text-[32px] leading-[160%] font-[300]'>作品集</p>
                        </div>
                        <div className='relative flex justify-center'>
                            <div className='absolute top-[100%] w-4 h-1 bg-[#CCCCCC]'></div>
                            <div style={{ border: '0.5px solid #CCCCCC' }} className='h-20'></div>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='font-light leading-[220%] px-[2px] text-[14px] opacity-70 text-center'>
                            专攻于 音乐艺术作品集教育
                        </div>
                        <div className='font-light leading-[220%] px-[2px] text-[14px] opacity-70 text-center'>
                            留学申请规划 以及 跨界艺术联动
                        </div>
                    </div>
                </div>
                <div className='w-[224px] flex-col flex items-center justify-between'>
                    <div className='relative text-center pt-[13px]'>
                        {/* <Box></Box> */}
                        <p className='font-[Lexend] text-[28px] leading-[160%] font-[250]'>DREAM</p>
                        <p className='font-[Lexend] text-[40px] leading-[160%] font-[250]'>OFFER</p>
                    </div>
                    <div className='mt-6'>
                        <div className='font-light leading-[220%] px-[2px] text-[14px] opacity-70 text-center'>
                            以专业的教学专注的态度帮助每一位热爱音乐的学生拿到dream offer 开发艺术领域的无限可能性
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
