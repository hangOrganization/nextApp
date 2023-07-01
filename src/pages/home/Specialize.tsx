"use client"
import styled from 'styled-components'
import Image from 'next/image'
import specialize_bg from '@/assets/image/svg/specialize-bg.svg'
import mobileSpecialize_bg from '@/assets/image/mobile/mobileSpecialize-bg.png'
import specialize_Star from '@/assets/image/svg/specialize-Star.svg'
import courseArrow from '@/assets/image/svg/icon-courseArrow.svg'
import course_bg from '@/assets/image/svg/course-bg.svg'
import { modernMusicHotMajor, classicalMusicHotMajor, musicalTheoryHotMajor, musicalTheorySchool, classicalMusicSchool, modernMusicSchool } from '@/utils/specializeText'
import { useState } from 'react'

const SpecializeBox = styled.div`
    background: linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.464341) 48.22%, #1A1A1A 100%),url(${specialize_bg.src}), url(${specialize_bg.src});
    width: 100vw;
    padding-top: 270px;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: normal, soft-light, color-dodge;
    @media not all and (min-width: 768px) {
        background: linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.46) 48.22%, #1A1A1A 100%), url(${specialize_bg.src}), lightgray 0% 0% / 94.09090876579285px 94.09090876579285px repeat, url(${specialize_bg.src}), lightgray 50% / cover no-repeat !important;
        background-blend-mode: normal, soft-light, color-dodge;
    }
`
const CourseBox = styled.div`
    width: 541px;
    height: 600px;
    padding: 40px;
    background:  linear-gradient(241.27deg, rgba(208, 208, 208, 0.9) 4.73%, rgba(249, 249, 249, 0.9) 47.73%, rgba(211, 211, 211, 0.9) 84.56%);
    background-blend-mode: soft-light, normal;
    backdrop-filter: blur(50px);
    box-shadow: inset -1px 1px 15px rgba(255, 255, 255, 0.6);
    border-radius: 48px;
    @media not all and (min-width: 768px) {
        width: calc(100vw - 32px);
        margin: 0 16px;
        height: 486px;
        padding: 24px 36px;
    }
`
export default function Specialize() {
    const [musicGenre, setMusicGenre] = useState<number>(1)
    return (
        <SpecializeBox className='flex justify-center w-screen overflow-hidden flex-col items-center'>
            <div className=''>
                <div style={{ background: 'rgba(26, 26, 26, 0.90)', backdropFilter: 'blur(40px)' }} className='md:px-[160px] max-md:pb-1 max-md:pt-[21px] max-md:flex-col max-md:justify-center max-md:items-center flex justify-between'>
                    <div className='max-md:text-center'>
                        <p className='text-[56px] max-md:text-[28px] leading-[120%] font-light'>专攻方向</p>
                        <p className='text-[22px] max-md:text-[14px] mt-4 text-[Lexend] tracking-[.4em] max-md:tracking-[5.6px] leading-[120%] text-sp opacity-60 uppercase font-extralight'>MUSIC MAJOR</p>
                    </div>
                    <div className='flex flex-col max-md:px-[31px] max-md:w-screen max-md:mt-8 md:justify-end md:items-end'>
                        <div className='flex gap-4 max-md:justify-between items-end'>
                            <div className={`md:w-[200px] ${musicGenre === 1 ? 'md:mb-2' : ''} transition-all duration-300 cursor-pointer text-center`} onClick={() => setMusicGenre(1)}>
                                <p className={`text-[24px] ${musicGenre === 1 ? 'font-[300]' : 'font-[200] max-md:font-light'} max-md:text-[14px] font-[200] leading-[160%]`}>现代音乐类</p>
                            </div>
                            <div className={`md:w-[200px] ${musicGenre === 2 ? 'md:mb-2' : ''} transition-all duration-300 cursor-pointer text-center`} onClick={() => setMusicGenre(2)}>
                                <p className={`text-[24px] ${musicGenre === 2 ? 'font-[300]' : 'font-[200] max-md:font-light'} max-md:text-[14px] font-[200] leading-[160%]`}>古典音乐类</p>
                            </div>
                            <div className={`md:w-[200px] ${musicGenre === 3 ? 'md:mb-2' : ''} transition-all duration-300 cursor-pointer text-center`} onClick={() => setMusicGenre(3)}>
                                <p className={`text-[24px] ${musicGenre === 3 ? 'font-[300]' : 'font-[200] max-md:font-light'} max-md:text-[14px] font-[200] leading-[160%]`}>音乐理论及应用类</p>
                            </div>
                        </div>
                        <div className={`w-[86px] transition-all max-md:hidden duration-500 ${musicGenre === 1 ? 'translate-x-[-488.5px]' : musicGenre === 2 ? 'translate-x-[-272.5px]' : 'translate-x-[-56.5px]'} `} style={{ border: "1px solid #FFFFFF" }}></div>
                        <div className='mt-[16px] md:hidden h-[1px] relative w-full'>
                            <div className={`w-12 transition-all absolute duration-500  ${musicGenre === 1 ? 'left-[0%] translate-x-[10px]' : musicGenre === 2 ? 'left-[50%] translate-x-[-45px]' : 'left-[100%] translate-x-[-82px]'}`} style={{ border: "0.25px solid #FFFFFF" }}></div>
                        </div>
                    </div>
                </div>
                <div className='relative pb-[168px] w-screen md:w-[1440px]'>
                    <Image className={`absolute max-md:hidden bottom-[0px] transition-all duration-500 ${musicGenre === 1 ? 'rotate-0' : musicGenre === 2 ? 'rotate-[90deg]' : 'rotate-[180deg]'} right-[-50px]`} src={specialize_Star} alt='' />
                    <div className='flex mt-12 md:w-[1440px] md:px-[120px] overflow-hidden justify-between'>
                        <div className={`flex gap-[120px] transition-all duration-500 ${musicGenre === 1 ? 'translate-x-[0px]' : musicGenre === 2 ? 'translate-x-[-1320px] max-md:translate-x-[-494px]' : 'translate-x-[-2640px] max-md:translate-x-[-988px]'} w-[3880px]`}>
                            <div className={`flex md:w-[1200px] transition-all duration-500 ${musicGenre === 1 ? ' opacity-100' : 'opacity-0'} max-md:flex-col justify-between`}>
                                <CourseBox>
                                    <div className="flex max-md:justify-center items-center">
                                        <p className='text-[32px] max-md:text-[20px] max-md:font-semibold max-md:mr-2  mr-3 leading-[160%] text-[#0000FF]  font-black'>
                                            热门专业
                                        </p>
                                        <Image className='max-md:w-6 max-md:h-6' src={courseArrow} alt='' />
                                    </div>
                                    <div className="flex mt-4 md:items-center h-[469px] justify-between">
                                        <div className='flex flex-col max-md:h-[390px] h-[469px] flex-wrap md:pl-2 max-md:gap-y-[11px] max-md:gap-x-6 gap-3 md:gap-x-8'>
                                            {modernMusicHotMajor.map((el: any, index: number) => (
                                                <div className='max-md:w-[124px] max-md:text-center' key={`${index}-${el.englishTitle}-modernMusicHotMajor`}>
                                                    <p className='text-[16px] max-md:text-[14px] font-normal text-[#1A1A1A] leading-[160%]'>{el.title}</p>
                                                    <p className='text-[10px] max-md:leading-[13px] text-ellipsis overflow-hidden line-clamp-2 font-light font-[Lexend] text-[#1A1A1A] opacity-40 leading-[160%]'>{el.englishTitle}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CourseBox>
                                <CourseBox className='md:!w-[643px] max-md:!px-6 max-md:!mt-4'>
                                    <div className="flex mb-4 max-md:justify-center items-center">
                                        <p className='text-[32px] mr-3 max-md:text-[20px] max-md:font-semibold max-md:mr-2 leading-[160%] text-[#0000FF] font-black'>
                                            热门院校
                                        </p>
                                        <Image className='max-md:w-6 max-md:h-6' src={courseArrow} alt='' />
                                    </div>
                                    <div className='md:pl-2'>
                                        <div className='flex items-center'>
                                            <p className='text-[18px] max-md:text-[14px] font-medium leading-[160%] text-[#1A1A1A]'>英美</p>
                                            <div style={{ border: '0.5px solid #000000' }} className='ml-[25px]  md:w-[483px] opacity-10'></div>
                                        </div>
                                        <div className='flex max-md:mt-4 mt-[24px] justify-between'>
                                            <div className='flex h-[138px] max-md:w-[163px] max-md:h-[171px] flex-wrap flex-col max-md:gap-x-6 gap-x-12 gap-y-[11.75px]'>
                                                {modernMusicSchool[0].map((el: any, index: number) => (
                                                    <p key={`${index}-modernMusicSchool`} className='text-[13px] max-md:w-[163px] max-md:text-ellipsis max-md:overflow-hidden max-md:line-clamp-1 max-md:font-light max-md:text-[12px] max-md:leading-[14.3px] leading-[140%] text-[#3E3E3E] font-normal '>
                                                        {el}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='md:pl-2'>
                                        <div className='flex mt-11 max-md:mt-6 items-center'>
                                            <p className='text-[18px] max-md:text-[14px] font-medium leading-[160%] text-[#1A1A1A]'>日韩</p>
                                            <div style={{ border: '0.5px solid #000000' }} className='ml-[25px] md:w-[483px] opacity-10'></div>
                                        </div>
                                        <div className='flex max-md:mt-4 mt-[24px]'>
                                            <div className='flex flex-col max-md:h-[97px] h-[138px] gap-x-[137px] max-md:gap-x-[100px] flex-wrap gap-y-[11.75px]'>
                                                {modernMusicSchool[1].map((el: any, index: number) => (
                                                    <p key={`${index}-modernMusicSchool-Japan and South Korea`} className='text-[13px] max-md:text-[11px] max-md:leading-[15.4px] leading-[140%] max-md:font-light text-[#3E3E3E] font-normal '>
                                                        {el}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CourseBox>
                            </div>
                            <div className={`flex md:w-[1200px]  transition-all duration-500 ${musicGenre === 2 ? ' opacity-100' : 'opacity-0'} max-md:flex-col  md:justify-between`}>
                                <CourseBox className='max-md:!h-[285px]'>
                                    <div className="flex max-md:justify-center items-center">
                                        <p className='text-[32px] mr-3 leading-[160%] max-md:text-[20px] max-md:font-semibold max-md:mr-2 text-[#0000FF] font-black'>
                                            热门专业
                                        </p>
                                        <Image className='max-md:w-6 max-md:h-6' src={courseArrow} alt='' />
                                    </div>
                                    <div className="flex mt-4 items-center md:h-[469px] justify-between">
                                        <div className='flex flex-col max-md:h-[198px] h-[264px] flex-wrap md:pl-2 max-md:gap-x-[20px] md:gap-x-[65px] max-md:gap-y-[12px] gap-y-[28px]'>
                                            {classicalMusicHotMajor.map((el: any, index: number) => (
                                                <div className='max-md:w-[126px] max-md:text-center' key={`${index}-${el.englishTitle}-classicalMusicHotMajor`}>
                                                    <p className='text-[16px] max-md:text-[14px] font-normal text-[#1A1A1A] leading-[160%]'>{el.title}</p>
                                                    <p className='text-[12px] text-ellipsis overflow-hidden line-clamp-2 max-md:leading-[13px] font-light font-[Lexend] text-[#1A1A1A] opacity-40 leading-[160%]'>{el.englishTitle}</p>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </CourseBox>
                                <CourseBox className='md:!w-[643px] max-md:!h-[537px] max-md:!mt-4 max-md:!p-6'>
                                    <div className="flex mb-4 max-md:justify-center items-center">
                                        <p className='text-[32px] mr-3 max-md:text-[20px] max-md:font-semibold max-md:mr-2 leading-[160%] text-[#0000FF] font-black'>
                                            热门院校
                                        </p>
                                        <Image className='max-md:h-6 max-md:w-6' src={courseArrow} alt='' />
                                    </div>
                                    <div className='md:pl-2'>
                                        <div className='flex items-center'>
                                            <p className='text-[18px] max-md:text-[14px] font-medium leading-[160%] text-[#1A1A1A]'>英美</p>
                                            <div style={{ border: '0.5px solid #000000' }} className='ml-[25px] md:w-[483px] opacity-10'></div>
                                        </div>
                                        <div className='flex mt-[24px] max-md:mt-4 md:justify-between'>
                                            <div className='flex max-md:h-[170px] h-[138px] flex-wrap flex-col max-md:gap-x-[68px] gap-x-[86px] max-md:gap-y-[11px] gap-y-[11.75px]'>
                                                {classicalMusicSchool[0].map((el: any, index: number) => (
                                                    <p key={`${index}-classicalMusicSchool`} className='text-[13px] leading-[140%] text-[#3E3E3E]  max-md:text-[11px] max-md:leading-[14.3px] max-md:font-light  font-normal '>
                                                        {el}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='md:pl-2'>
                                        <div className='flex max-md:mt-6 mt-11 items-center'>
                                            <p className='text-[18px] max-md:text-[14px] font-medium leading-[160%] text-[#1A1A1A]'>欧洲</p>
                                            <div style={{ border: '0.5px solid #000000' }} className='ml-[25px] md:w-[483px] opacity-10'></div>
                                        </div>
                                        <div className='flex max-md:mt-4 mt-[24px]'>
                                            <div className='flex flex-col max-md:h-[170px] h-[138px] gap-x-[47.5px] max-md:gap-x-[20px] flex-wrap max-md:gap-y-[11px] gap-y-[11.75px]'>
                                                {classicalMusicSchool[1].map((el: any, index: number) => (
                                                    <p key={`${index}-classicalMusicSchool-Japan and South Korea`} className='text-[13px] max-md:text-[11px] max-md:leading-[14.3px] max-md:font-light leading-[140%] text-[#3E3E3E] font-normal'>
                                                        {el}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CourseBox>
                            </div>
                            <div className={`flex w-[1200px]  transition-all duration-500 ${musicGenre === 3 ? ' opacity-100' : 'opacity-0'} max-md:flex-col md:justify-between`}>
                                <CourseBox className='max-md:!h-[225px]'>
                                    <div className="flex max-md:justify-center items-center">
                                        <p className='text-[32px] mr-3 max-md:text-[20px] max-md:font-semibold max-md:mr-2 leading-[160%] text-[#0000FF] font-black'>
                                            热门专业
                                        </p>
                                        <Image className='max-md:h-6 max-md:w-6' src={courseArrow} alt='' />
                                    </div>
                                    <div className="flex mt-4 items-center md:h-[469px] justify-between">
                                        <div className='flex flex-col max-md:h-[129px] h-[264px] flex-wrap md:pl-2 max-md:gap-y-[11px] gap-y-[28px] max-md:gap-x-[23px] gap-x-[128px]'>
                                            {musicalTheoryHotMajor.map((el: any, index: number) => (
                                                <div className='max-md:text-center max-md:w-[124px]' key={`${index}-${el.englishTitle}-musicalTheoryHotMajor`}>
                                                    <p className='text-[16px] max-md:text-[14px] font-normal text-[#1A1A1A] leading-[160%]'>{el.title}</p>
                                                    <p className='text-[12px] text-ellipsis overflow-hidden line-clamp-2 max-md:leading-[13px] font-light font-[Lexend] text-[#1A1A1A] opacity-40 leading-[160%]'>{el.englishTitle}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CourseBox>
                                <CourseBox className='md:!w-[643px] max-md:!h-[261px] max-md:!mt-4'>
                                    <div className="flex md:mb-[102px] max-md:justify-center items-center">
                                        <p className='text-[32px] mr-3 max-md:text-[20px] max-md:font-semibold max-md:mr-2 leading-[160%] text-[#0000FF] font-black'>
                                            热门院校
                                        </p>
                                        <Image className='max-md:h-6 max-md:w-6' src={courseArrow} alt='' />
                                    </div>
                                    <div className='md:pl-2'>
                                        <div className='flex max-md:mt-4 mt-[24px] md:justify-between'>
                                            <div className='flex max-md:h-[167px] max-md:w-[155px] h-[254px] flex-wrap flex-col max-md:gap-x-[24px] gap-x-[102px] max-md:gap-y-[11px] gap-y-[18px]'>
                                                {musicalTheorySchool.map((el: any, index: number) => (
                                                    <p key={`${index}-musicalTheorySchool`} className='text-[13px] max-md:text-[11px] max-md:leading-[14.3px] max-md:font-light leading-[140%] text-[#3E3E3E] font-normal'>
                                                        {el}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CourseBox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SpecializeBox>
    )
}