import ourTeam_bg from '@/assets/image/svg/ourTeam-bg.svg'
import { teachers } from '@/utils/ourTeam'
import styled from 'styled-components'

const OurTeamBox = styled.div`
    width: 100%;
    margin-top: 450px;
    border-radius: 48px;
    background: url(${ourTeam_bg.src});
 `
const ButtonBox = styled.div`
    cursor: pointer;
    border: 1px solid #FFFFFF;
    .hover{
        border: 1px solid #FFFFFF; 
    }
    &:hover{
        color: #FFFFFF;
        background: #1A1A1A;
        border: 1px solid #1A1A1A;
        mix-blend-mode: difference;
        .hover{
            border: 1px solid #1A1A1A; 
            background: #cccccc;
        }
        path{
            stroke:#1A1A1A;
        }
    }
 `
const OurTeamBg = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 48px;
    background: rgba(238, 238, 238, 0.01);
 `
const OurTeamBlur = styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: 80px;
    backdrop-filter: blur(250px);
    border-radius: 48px;
 `
const CardBox = styled.div`
    width: 237px;
    cursor: pointer;
    height: 368px;
    background-size: cover;
    transition: all 150ms;
    background-repeat: no-repeat;
    :hover{
        transform: translateY(-10px);
    }
 `
const CardFilterBox = styled.div`
    position: relative;
    width: 237px;
    height: 368px;
    background: linear-gradient(0deg, #ECECEC 10.27%, rgba(236, 236, 236, 0) 100%);
 `
const NameOur = styled.p`
    font-family: 'General Sans';
    font-style: italic;
    font-weight: 700;
    font-size: 36px;
    line-height: 120%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    -webkit-text-stroke: 1px #0000FF;
    text-shadow: 4px 0px 0px #0000FF;

 `
const RollBox = styled.div`
    animation: teachersRoll 10s linear infinite;
    @keyframes teachersRoll {
        from {
            transform: translateX(0px);
        }
        to {
            transform: translateX(-1824px);
        }
    }
 `
export default function OurTeam() {
    return (
        <OurTeamBox>
            <OurTeamBg>
                <OurTeamBlur>
                    <div className="flex pt-[120px] ml-[144px] mr-[120px] justify-between items-center">
                        <div>
                            <p className=' font-extrabold text-[56px] leading-[120%] text-[#1a1a1a]'>师资团队</p>
                            <p className=' tracking-[0.51em] font-normal text-[24px] mt-3 text-[Lexend] leading-[160%] text-[#1a1a1a]'>OUR TEAM</p>
                        </div>
                        <div style={{ border: '1px solid rgba(26, 26, 26, 0.5)' }} className='flex p-[15px]'>
                            <div className='w-[119px] text-center'>
                                <p className=' font-normal text-[32px] text-[Lexend] leading-[100%] text-[#1a1a1a]'>6</p>
                                <p className=' font-light text-[14px] leading-[180%] text-[#1a1a1a]'>全职一线导师</p>
                            </div>
                            <div className='w-[119px] text-center'>
                                <p className=' font-normal text-[32px] text-[Lexend] leading-[100%] text-[#1a1a1a]'>150+</p>
                                <p className=' font-light text-[14px] leading-[180%] text-[#1a1a1a]'>兼职音乐导师</p>
                            </div>
                            <div className='w-[119px] text-center'>
                                <p className=' font-normal text-[32px] text-[Lexend] leading-[100%] text-[#1a1a1a]'>5</p>
                                <p className=' font-light text-[14px] leading-[180%] text-[#1a1a1a]'>资深留学规划师</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-screen gap-[67px] my-20">
                        <RollBox className='flex w-[3581px] gap-[67px]'>
                            {[...teachers, ...teachers, ...teachers].map((el: any, index: number) => (
                                <CardBox style={{ background: `url(${el.image.src})` }} key={`${el.name}-${index}-teachers`}>
                                    <CardFilterBox>
                                        <div className='p-6 pr-[17px] w-[253px] absolute bottom-0 right-[-51px] h-[184px] ml-[51px] bg-[#FFFFFF]'>
                                            <NameOur>{el.name}</NameOur>
                                            <p className='font-normal text-[16px] mt-2 mb-4 leading-[120%] uppercase text-[#1a1a1a]'>{el.position}</p>
                                            <p className='font-light text-[12px] leading-[180%] uppercase opacity-80 text-[#1a1a1a]'>{el.works}</p>
                                        </div>
                                    </CardFilterBox>
                                </CardBox>
                            ))}
                        </RollBox>
                    </div>
                    <ButtonBox className='p-4 text-[16px] leading-[120%] w-[226px] font-normal mx-auto pl-[30px] pr-[15px] flex items-center rounded-[64px]'>
                        观看导师精彩作品
                        <div className='w-[36px] hover ml-[14px] items-center justify-center flex rounded-full h-[36px]'>
                            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 15C9 15 11.9412 8 19 8C11.9412 8 9 1 9 1" stroke="white" strokeWidth="1.6" />
                                <path d="M18 8L0 8" stroke="white" strokeWidth="1.6" />
                            </svg>
                        </div>
                    </ButtonBox>
                </OurTeamBlur>
            </OurTeamBg>
        </OurTeamBox>
    )
}