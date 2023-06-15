"use client"
import Image from 'next/image'
import products_right from '@/assets/image/svg/icon-products-right.svg'
import signCharacteristic_bg from '@/assets/image/svg/signCharacteristic-bg.svg'
import seniorMentor_bg from '@/assets/image/svg/seniorMentor-bg.svg'
import styled from 'styled-components'

const SignCharacteristicBox = styled.div`
    width: 310px;
    height: 385px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${signCharacteristic_bg.src});
`
export default function SignCharacteristic() {
    return (
        <div className='flex mt-[215px] px-[120px] justify-between'>
            <SignCharacteristicBox>
                <div>
                    <p className=' font-light text-[56px] leading-[120%]'>公司特色</p>
                    <p className=' font-extralight font-[Lexend] text-[22px] tracking-[0.53em] mt-4 opacity-60 uppercase leading-[160%]'>Why SIGN?</p>
                </div>
            </SignCharacteristicBox>
            <div className='flex'>
                <div className='mr-[193px]'>
                    <div className='flex'>
                        <p className='text-[40px] mr-[26px] font-normal leading-[120%] text-[#FF4B00]'>资深导师团队</p>
                        <Image src={seniorMentor_bg} alt='' />
                    </div>
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
                <Image src={products_right} alt='' />
            </div>
        </div>
    )
}