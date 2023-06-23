"use client"
import Image from 'next/image'
import _ from 'lodash'
import products_right from '@/assets/image/svg/icon-products-right.svg'
import AboutUs_bg from '@/assets/image/svg/aboutUs-bg.png'
import signCharacteristic_bg from '@/assets/image/svg/signCharacteristic-bg.svg'
import characteristic_bg from '@/assets/image/svg/characteristic-bg.svg'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

const SignBox = styled.div`
    width: 100vw;
    background-image:url(${characteristic_bg.src});
    &.ABOUT{
        background-image:url(${AboutUs_bg.src}) !important;
    }
    background-size: 100% !important;
    background-repeat: no-repeat !important;
`
const SignCharacteristicBox = styled.div`
    width: 310px;
    height: 385px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${signCharacteristic_bg.src});
`
const ButtonBox = styled.div`
  cursor: pointer;
  border: 1px solid #ffffff;
  .hover {
    border: 1px solid #ffffff;
  }
  &:hover {
    color: #ffffff;
    background: #1a1a1a;
    border: 1px solid #1a1a1a;
    mix-blend-mode: difference;
    .hover {
      border: 1px solid #1a1a1a;
      background: #cccccc;
    }
    path {
      stroke: #1a1a1a;
    }
  }
`;
interface SignCharacteristicProps {
    characteristicType: number
    setCharacteristicType: Function
}
export default function SignCharacteristic({ characteristicType, setCharacteristicType }: SignCharacteristicProps) {
    const [right, setRight] = useState<number>(0)
    useEffect(() => {
        document.body.addEventListener('wheel', function (e) {
            if (document.documentElement.scrollTop > 6200 && document.documentElement.scrollTop < 6500) {
                document.body.classList.add("overflow-hidden");
                if (characteristicType === 0) {
                    if (e.deltaY < 0) {
                        document.body.classList.remove("overflow-hidden");
                    } else {
                        document.body.classList.add("overflow-hidden");
                    }
                }
                if (characteristicType === 3) {
                    if (e.deltaY > 0 && right === 1) {
                        document.body.classList.remove("overflow-hidden");
                    } else {
                        document.body.classList.add("overflow-hidden");
                    }
                }
            }
        })
    }, [characteristicType, right])
    return (
        <div className="flex w-screen overflow-hidden">
            <div className='flex'>
                <SignBox className={`flex ${right === 0 ? 'WhySIGN' : 'ABOUT'} h-[1278px] w-screen items-center px-[120px] justify-between`}
                    onWheelCapture={
                        _.throttle((e: any) => {
                            if (right === 0) {
                                if (characteristicType === 0) {
                                    if (e.deltaY > 0) {
                                        setCharacteristicType(1)
                                    }
                                } else if (characteristicType === 3) {
                                    if (e.deltaY < 0) {
                                        setCharacteristicType(2)
                                    }
                                    if (e.deltaY > 0) {
                                        setRight(1)
                                    }
                                } else {
                                    if (e.deltaY < 0) {
                                        setCharacteristicType(characteristicType - 1)
                                    } else {
                                        setCharacteristicType(characteristicType + 1)
                                    }
                                }
                            } else {
                                if (e.deltaY < 0) {
                                    setRight(0)
                                }
                            }
                        }, 500)}
                >
                    <SignCharacteristicBox className={`${right === 1 ? ' translate-x-[908px]' : 'translate-x-[0px]'} transition-all duration-300`}>
                        <div >
                            <p className=' font-light text-[56px] leading-[120%]'>{`${right === 1 ? '关于我们' : '公司特色'}`}</p>
                            <p className={`font-extralight font-[Lexend] text-[22px] ${right === 1 ? 'tracking-[15.18px]' : 'tracking-[0.53em]'} mt-4 opacity-60 uppercase leading-[160%]`}>{`${right === 1 ? 'ABOUT US' : 'Why SIGN?'}`}</p>
                        </div>
                    </SignCharacteristicBox>
                    <div className={`transition-all duration-300 flex items-center ${right === 1 ? ' flex-row-reverse translate-x-[-510px]' : 'translate-x-[0px]'}`}>
                        <div className={`${right === 1 ? 'ml-20' : 'mr-[193px]'}`}>
                            {right === 0 ?
                                <div className=' h-[488px] overflow-hidden'>
                                    <div className={`w-[599px transition-all duration-300 ${characteristicType === 1 ? 'translate-y-[-488px]' : characteristicType === 2 ? 'translate-y-[-976px]' : characteristicType === 3 ? 'translate-y-[-1464px]' : ''} `}>
                                        <div className='h-[488px] flex flex-col justify-center'>
                                            <p className='text-[40px] mr-[26px] font-normal leading-[120%] text-[#FF4B00]'>资深导师团队</p>
                                            <div className='w-[488px] mt-12'>
                                                <p className='text-[14px] font-light leading-[220%] opacity-70'>
                                                    高标准高要求的一线资深海归音乐导师团队，拥有五年以上的一线行业经验及教学经验，独树一帜的从业思维教学结合往年丰富的海外院校申请经验，让学生接受最新的音乐专业讯息，带来的音乐艺术理念、音乐创作思维和声音设计紧跟时代潮流，富有指导性和前瞻性。
                                                </p>
                                                <p className='text-[14px] my-[31px] font-light leading-[220%] opacity-70'>
                                                    已配备全职音乐导师6人，兼职音乐导师150+，音乐产业规划师1人，专业录音师2人，资深留学规划师2人，专业师资团队由海外各个院校的海归音乐导师、一线声音从业者及交响乐团演奏家组成。
                                                </p>
                                                <p className='text-[14px] font-light leading-[220%] opacity-70'>
                                                    由SIGNART名校录取导师团队全程跟踪，各领域专业导师多对一服务，实现名校战略录取。
                                                </p>
                                            </div>
                                        </div>
                                        <div className='h-[488px] flex flex-col justify-center'>
                                            <p className='text-[40px] mr-[26px] font-normal leading-[120%] text-[#FF4B00]'>独家顶级设备配置</p>
                                            <p className='text-[14px] w-[488px] mt-12 font-light leading-[320%] opacity-70'>
                                                浙江省内最大的国际音乐教育空间<br />
                                                西兴+UDC双校区配置，教学实践总面积达1500m2+<br />
                                                独家7.1.4 Dolby Atmos电影混录棚<br />
                                                独家5.1.4 Dolby Atmos音乐混录棚<br />
                                                独家现代电声乐队排练录音棚<br />
                                                独家自然混响古典演奏录音棚<br />
                                                Foley拟音棚，声音设计实验室，音频编辑室，独立编曲间，表演教室等<br />
                                                ITU标准声学环境垂直于作品全方向全流程的学习与实践<br />
                                            </p>
                                        </div>
                                        <div className='h-[488px] flex flex-col justify-center'>
                                            <p className='text-[40px] mr-[26px] font-normal leading-[120%] text-[#FF4B00]'>高质量高效率精致教学</p>
                                            <p className='text-[14px] w-[488px] mt-12 font-light leading-[320%] opacity-70'>
                                                免费专业入学评估<br />
                                                一对一课程定制+未来职业规划<br />
                                                高效干货教学，拒绝照本宣科，拒绝纯应试培训<br />
                                                各专业导师多对一服务，实现名校战略录取<br />
                                                独家审核团队多轮严格作品审核，保证最高录取率<br />
                                                公开透明的艺术文书创作及升学行前指导<br />
                                                提供名校保录取<br />
                                            </p>
                                        </div>
                                        <div className='h-[488px] flex flex-col justify-center '>
                                            <p className='text-[40px] mr-[26px] font-normal leading-[120%] text-[#FF4B00]'>产学结合&背景提升</p>
                                            <p className='text-[14px] w-[488px]  mt-12 font-light leading-[220%] opacity-70'>
                                                产学研一体，团队十余年一线音乐行业经验。各类音乐作品千余，如央视《2008我们的奥林匹克》 《中国冰雪记忆》《家园》《2022北京冬奥会遗产纪录片》《张艺谋的2022》，芒果TV《这十年》《党的女儿》以及浙江卫视《西泠印社》等，团队独立厂牌发行创作人计划系列专辑二十余张，将创作，录制，发行全流程结为一体，让学生在学习中有机会参与各类重大音乐项目的录制与制作，为其音乐生涯提供丰富的背景提升和行业经验。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='w-[599px] mt-12'>
                                    <p className='text-[14px] font-light leading-[220%] opacity-70'>
                                        SIGNART 十万象限音乐留学作品集由世界名校海归艺术导师与顶尖音乐传媒公司联合创立，杭州首家拥有十年音乐传媒行业经验的创始人团队，专攻于音乐艺术作品集教育，留学申请规划以及跨界艺术联动，致力打造音乐教育与声音全流程制作的产学联动生态。同时作为浙江传媒学院等艺术高校的实训基地，每年为传媒行业输送大量人才。
                                    </p>
                                    <p className='text-[14px] my-[31px] font-light leading-[220%] opacity-70'>
                                        我们为您提供各类细分音乐专业的完整海归教师团队，他们或为交响乐团的演奏家，知名录音室乐手，或为一线音乐制作人，声音设计师，或为国内外顶尖名校的在职教师。
                                    </p>
                                    <p className='text-[14px] font-light leading-[220%] opacity-70'>
                                        我们为您提供十年一线行业经验的老牌声音全流程制作团队，多次出色完成奥运会/冬奥会/亚运会等国家级项目的声音设计，管弦乐编写与录制，环绕声制作。大量院线电影/知名广告/游戏的声音全流程制作，袁娅维韩磊等知名艺人的歌曲制作。同时我们专精于AI声音合成处理，AMBISONIC全景声制作，交互类音效定制等声音科技产品服务。为您提供ITU标准声学制作环境，完整的声学硬件及经验丰富的声音技术团队。
                                    </p>
                                    <ButtonBox className="p-4 mt-[68px] text-[16px] w-[211px] leading-[120%] font-normal pl-[30px] pr-[15px] flex items-center rounded-[64px]" onClick={() => { }}>
                                        了解校区环境
                                        <div className="w-[36px] hover ml-[14px] items-center justify-center flex rounded-full h-[36px]">
                                            <svg
                                                width="19"
                                                height="16"
                                                viewBox="0 0 19 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9 15C9 15 11.9412 8 19 8C11.9412 8 9 1 9 1"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                />
                                                <path d="M18 8L0 8" stroke="white" strokeWidth="1.6" />
                                            </svg>
                                        </div>
                                    </ButtonBox>
                                </div>
                            }
                        </div>
                        <div className='h-[457px] overflow-hidden'>
                            <div
                                onClick={() => { setRight(0) }}
                                className={` transition-all duration-300 ${characteristicType === 1 ? 'translate-y-[-457px]' : characteristicType === 2 ? 'translate-y-[-914px]' : characteristicType === 3 ? 'translate-y-[-1371px]' : ''} `} >
                                <Image src={products_right} alt='' />
                                <Image src={products_right} alt='' />
                                <Image src={products_right} alt='' />
                                <Image src={products_right} alt='' />
                            </div>
                        </div>
                    </div>
                </SignBox>
            </div>
        </div>
    )
}