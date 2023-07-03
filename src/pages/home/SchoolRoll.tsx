"use client"
import styled from "styled-components"
import "@/styles/lineCartoon.css"

const Box = styled.div`
    white-space:nowrap;
    border: 1px solid #FF4B00;
    font-family: 'FusionPixel';
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
    color: #FF4B00;
`
const Roll = styled.div`
    display: flex;
    gap: 0.25rem;
    animation: schoolRoll 20s linear infinite;
    @keyframes schoolRoll {
        from{}
        to{transform:translateX(-3544px)}
    }
    @media not all and (min-width: 768px){
        @keyframes schoolRoll {
        from{}
        to{transform:translateX(-1932px)}
    }
    }
`
const text = [
    '纽约大学史丹赫音乐学院',
    '英国皇家音乐学院',
    '音乐科技',
    '多媒体视觉配乐',
    '约翰霍普金斯大学皮博迪音乐学院',
    '东京艺术大学',
    '钢琴表演',
    '声音设计',
    '朱莉亚音乐学院',
    '柏林艺术大学',
    '电子音乐制作',
    '庆熙大学',
    '米兰威尔第音乐学院',
    '歌剧声乐',
    '古典器乐演奏',
    '爱丁堡大学',
]
interface SchoolRollProps {
    value: number
}
export default function SchoolRoll({ value }: SchoolRollProps) {
    return (
        <div className={`flex max-md:mt-[96px] transition-all duration-1000 ${value === 2 ? ' opacity-100' : ''} opacity-0 mt-[214px] w-full flex-col justify-center`}>
            <div className="max-md:hidden pt-[10px] h-[35.43px]">
                <div className=" LetIsROCKLine1 border-[0.5px] border-[#FF4B00] border-solid"></div>
                <div className=" LetIsROCKLine2 my-2 border-[0.5px] border-[#FF4B00] border-solid"></div>
                <div className=" LetIsROCKLine3 border-[0.5px] border-[#FF4B00] border-solid"></div>
            </div>
            <div className="w-screen overflow-hidden">
                <Roll className="w-[7152px]">
                    {[...text, ...text].map((el: any, index: number) => (
                        <Box key={`${index}-SchoolRoll`} className={`${el === '纽约大学史丹赫音乐学院' || el === '东京艺术大学' || el === '米兰威尔第音乐学院' ? 'bg-[#FF4B00] !text-[#1a1a1a]' : ''} max-md:text-[14px] text-[28px] p-[15px] max-md:p-[11px] rounded-[24px] max-md:rounded-[16px] `}>{el}</Box>
                    ))}
                </Roll>
            </div>
            <div className='max-md:hidden mt-3 w-[35.43px]'>
                <div className=" LetIsROCKLine3 border-[0.5px]  border-[#FF4B00] border-solid"></div>
                <div className=" LetIsROCKLine2 my-2 border-[0.5px] border-[#FF4B00] border-solid"></div>
                <div className=" LetIsROCKLine1 border-[0.5px] border-[#FF4B00] border-solid"></div>
            </div>
        </div>
    )
}