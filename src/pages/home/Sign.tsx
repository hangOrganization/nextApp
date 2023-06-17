"use client"
import Image from 'next/image'
// import sign_bg from '@/assets/image/svg/sign-bg.svg'
import sign_logo from '@/assets/image/svg/sign-logo.svg'
import sign_text from '@/assets/image/svg/sign-text.svg'
import sign_bg_1 from '@/assets/image/svg/sign-bg-1.svg'
import sign_bg_2 from '@/assets/image/svg/sign-bg-2.svg'
import icon_star from '@/assets/image/svg/icon-star.svg'
import lEtsRock_button from '@/assets/image/svg/lEt’s-Rock-button.svg'
import styled from 'styled-components'

const Box = styled.div`
    position: absolute;
    z-index: 20;
    width: 196.08px;
    height: 87.87px;
    top:25px;
    mix-blend-mode: normal;
    border-radius: 100px/45px;
    border: 1px solid #CCCCCC;
    transform: rotate(-30deg);
`
export default function Sign() {
    return (
        <div className='relative w-screen'>
            <div className='h-[728px]'>
                <div className=' absolute z-10 h-[728px] w-screen flex justify-center top-0 left-0'>
                    {/* <Image className='absolute  w-screen' src={sign_bg} alt='' /> */}
                    <Image className='absolute' src={sign_bg_1} alt='' />
                    <Image className='absolute  w-screen' src={sign_bg_2} alt='' />
                </div>
                <div className=' relative z-20 flex justify-center items-center flex-col pt-[302px]'>
                    <Image className='' src={sign_logo} alt='' />
                    <Image className='mt-[70px]' src={sign_text} alt='' />
                    <p className=' font-normal uppercase tracking-[1em] mt-[72px] text-[26px]'>听见世界的回响</p>
                </div>
            </div>
            <div className='flex items-center mt-[280px] px-[192px] justify-between'>
                <div className='w-[224px] flex-col flex items-center'>
                    <div className='w-full'>
                        <div className='w-20 ml-[143px] h-[1px] mt-2' style={{ border: '0.5px solid #CCCCCC' }}></div>
                        <div className='w-[65px] ml-[85px] h-[1px] mt-2' style={{ border: '0.5px solid #CCCCCC' }}></div>
                        <div className='flex mt-[-2px] w-full gap-[6px] justify-center items-end'>
                            <p className='font-[Lexend] text-[72px] leading-[120%] font-[150]'>10</p>
                            <p className='text-[40px] leading-[150%] font-[300]'>年</p>
                        </div>
                        <div className='w-[62px] h-[1px] mb-[17px]' style={{ border: '0.5px solid #CCCCCC' }}></div>
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
                <div className='w-[224px] flex-col flex items-center'>
                    <div className='flex w-full py-[9px] px-[2px] gap-[27px] justify-center items-center'>
                        <div className='relative  flex justify-center'>
                            <div className='absolute top-[0%] w-4 h-1 bg-[#CCCCCC]'></div>
                            <div style={{ border: '0.5px solid #CCCCCC' }} className='h-20'></div>
                        </div>
                        <div className='text-center'>
                            <p className='text-[32px] leading-[160%] font-[300]'>音乐艺术</p>
                            <p className='text-[32px] leading-[160%] font-[300]'>作品集</p>
                        </div>
                        <div className='relative flex justify-center'>
                            <div className='absolute top-[100%] w-4 h-1 bg-[#CCCCCC]'></div>
                            <div style={{ border: '0.5px solid #CCCCCC' }} className='h-20'></div>
                        </div>
                    </div>
                    <div className='mt-6 py-[31px] h-[124px]'>
                        <div className='font-light leading-[220%] px-[2px] text-[14px] opacity-70 text-center'>
                            专攻于 音乐艺术作品集教育
                        </div>
                        <div className='font-light leading-[220%] px-[2px] text-[14px] opacity-70 text-center'>
                            留学申请规划 以及 跨界艺术联动
                        </div>
                    </div>
                </div>
                <div className='w-[224px] flex-col flex relative items-center pt-[13px]'>
                    <div className=' flex flex-col py-[14px] items-center justify-center'>
                        <p className='font-[Lexend] z-30 bg-[#1A1A1A] w-[98px] text-[28px] leading-[100%] font-[250]'>DREAM</p>
                        <p className='font-[Lexend] mt-6 z-30 bg-[#1A1A1A] text-[40px] leading-[100%] font-[250]'>OFFER</p>
                        <Box>
                            <Image className='top-[20px] right-[-15px] absolute' src={icon_star} alt='' />
                        </Box>
                    </div>
                    <div className='mt-6 py-4'>
                        <div className='font-light leading-[220%] px-[2px] text-[14px] opacity-70 text-center'>
                            以专业的教学专注的态度帮助每一位热爱音乐的学生拿到dream offer 开发艺术领域的无限可能性
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full relative flex mt-16 items-center justify-center'>
                <button className='bg-[#FF4B00] rounded-[39px] w-[314px] h-20 absolute text-[28px] text-[#1a1a1a] leading-[100%] font-[Lexend] font-black'>LEt’s Rock</button>
                <Image src={lEtsRock_button} alt='' />
            </div>
            {/* <iframe src="https://www.bilibili.com/video/BV1zP411i7RD/?spm_id_from=333.337.search-card.all.click&vd_source=f824a6facffe513da888c75a98cbc62a" marginHeight="50">
            </iframe> */}
        </div >
    )
}
