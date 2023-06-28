
interface TitleBeam {
    type: string
}
export default function TitleBeam({ type }: TitleBeam) {
    return (
        <div className={`w-[205px] max-md:hidden flex h-[46px]`}>
            <div className={` transition-all duration-500 ${type === 'open' ? 'w-3' : ' w-0'} mr-[24px] bg-[#FF4B00] h-full`}></div>
            <div className={` transition-all duration-500 ${type === 'open' ? 'w-[10.2px]' : ' w-0'} mr-[21.75px] bg-[#FF4B00] opacity-[0.85] h-full`}></div>
            <div className={` transition-all duration-500 ${type === 'open' ? 'w-[8.64px]' : ' w-0'} mr-[21.37px] bg-[#FF4B00] opacity-[0.7] h-full`}></div>
            <div className={` transition-all duration-500 ${type === 'open' ? 'w-[7.196px]' : ' w-0'} mr-[18.8px] bg-[#FF4B00] opacity-[0.56] h-full`}></div>
            <div className={` transition-all duration-500 ${type === 'open' ? 'w-[5.895px]' : ' w-0'} mr-[18.1px] bg-[#FF4B00] opacity-[0.445] h-full`}></div>
            <div className={` transition-all duration-500 ${type === 'open' ? 'w-[4.475px]' : ' w-0'} mr-[15.26px] bg-[#FF4B00] opacity-[0.34] h-full`}></div>
            <div className={` transition-all duration-500 ${type === 'open' ? 'w-[3.475px]' : ' w-0'} mr-[13.26px] bg-[#FF4B00] opacity-[0.25] h-full`}></div>
            <div className={` transition-all duration-500 ${type === 'open' ? 'w-[2.895px]' : ' w-0'} mr-[12.1px] bg-[#FF4B00] opacity-[0.17] h-full`}></div>
            <div className={` transition-all duration-500 ${type === 'open' ? 'w-[1.195px]' : ' w-0'} mr-[8.1px] bg-[#FF4B00] opacity-[0.1] h-full`}></div>
        </div>
    )
}