"use client"
import styled from "styled-components"
import "@/styles/lineCartoon.css"
import { dataFrom } from "."

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
interface SchoolRollProps {
    value: number
    dataFrom?: dataFrom
}
export default function SchoolRoll({ value, dataFrom }: SchoolRollProps) {
    return (
        <div className={`flex max-md:mt-[96px] transition-all duration-1000 ${value === 2 ? ' opacity-100' : ''} opacity-0 max-md:opacity-100 max-md:w-screen max-md:overflow-hidden mt-[214px] w-full flex-col justify-center`}>
            <div className="pt-[10px] h-[35.43px]">
                <div className=" LetIsROCKLine1 border-[0.5px] border-[#FF4B00] border-solid"></div>
                <div className=" LetIsROCKLine2 my-2 border-[0.5px] border-[#FF4B00] border-solid"></div>
                <div className=" LetIsROCKLine3 border-[0.5px] border-[#FF4B00] border-solid"></div>
            </div>
            <div className="w-screen overflow-hidden">
                {dataFrom?.marqueeContent && <Roll className="w-[7152px]">
                    {[...dataFrom?.marqueeContent, ...dataFrom?.marqueeContent].map((el: any, index: number) => (
                        <Box key={`${index}-SchoolRoll`} className={`${el.vip ? 'bg-[#FF4B00] !text-[#1a1a1a]' : ''} max-md:text-[14px] text-[28px] p-[15px] max-md:p-[11px] rounded-[24px] max-md:rounded-[16px] `}>{el.school}</Box>
                    ))}
                </Roll>}
            </div>
            <div className='mt-3 w-[35.43px]'>
                <div className=" LetIsROCKLine3 border-[0.5px]  border-[#FF4B00] border-solid"></div>
                <div className=" LetIsROCKLine2 my-2 border-[0.5px] border-[#FF4B00] border-solid"></div>
                <div className=" LetIsROCKLine1 border-[0.5px] border-[#FF4B00] border-solid"></div>
            </div>
        </div>
    )
}