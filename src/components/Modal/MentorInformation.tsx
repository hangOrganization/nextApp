import Image from 'next/image'
import MentorInformation_bg from '@/assets/image/svg/MentorInformation-bg.svg'
import { teachers } from "@/utils/ourTeam";
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import styled from 'styled-components'


const Panel = styled(Dialog.Panel)`
    background: url(${MentorInformation_bg.src}),linear-gradient(241.27deg, rgba(204, 204, 204, 0.8) 4.73%, rgba(255, 255, 255, 0.8) 47.73%, rgba(204, 204, 204, 0.8) 84.56%), #FFFFFF;
    background-blend-mode: soft-light, normal, normal;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 48px 48px 0px 0px;
    @media not all and (min-width: 768px) {
        border-radius: 16px 16px 0px 0px;
    }
`
const NameOur = styled.p`
    font-family: "General Sans";
    font-style: italic;
    font-weight: 700;
    font-size: 64px;
    line-height: 120%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #e8e8e8;
    -webkit-text-stroke: 1px #0000ff;
    text-shadow: 4px 0px 0px #0000ff;
    @media not all and (min-width: 768px) {
        color: #00F;
        font-family: General Sans;
        font-size: 32px;
        font-style: italic;
        font-weight: 700;
        line-height: 120%;
        letter-spacing: 1.6px;
        text-transform: uppercase; 
        -webkit-text-stroke: 0px #0000ff;
        text-shadow: 0px 0px 0px #0000ff;
    }
`;
interface MentorInformationProps {
    isOpen: number
    textValue: number
    setIsOpen: Function
}
export default function MentorInformation({ isOpen, setIsOpen, textValue }: MentorInformationProps) {
    const [innerHeight, setInnerHeight] = useState<number>(0)
    function closeModal() {
        setIsOpen(0)
    }
    useEffect(() => {
        setInnerHeight(window.innerHeight)
    }, []);
    const Box = styled.div`
      @media (min-width: 768px) {
        max-height:${innerHeight - 200}px;
      }
      @media not all and (min-width: 768px) {
        max-height:${innerHeight - 341}px;
        
      }
  `
    const MobileBox = styled.div`
      @media not all and (min-width: 768px) {
        max-height:${innerHeight - 120}px;
      }
  `

    return (
        <Transition appear show={isOpen === 1 ? true : false} as={Fragment}>
            <Dialog as="div" className="relative z-[1000000]" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-70" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-screen h-screen items-end max-md:pt-[64px] pt-20 justify-center text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-600"
                            enterFrom="translate-y-[1000px]"
                            enterTo="translate-y-[0px]"
                            leave="ease-in duration-600"
                            leaveFrom="translate-y-[0px]"
                            leaveTo="translate-y-[1000px]"
                        >
                            <Panel className="w-full max-md:w-screen min-h-full h-full overflow-hidden transform p-12 max-md:p-[12px] text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg flex justify-end font-medium leading-6 text-gray-900"
                                >
                                    <svg onClick={closeModal} className=' cursor-pointer' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 24L24.0012 7.99879" stroke="#1A1A1A" />
                                        <path d="M8 8L24.0012 24.0012" stroke="#1A1A1A" />
                                    </svg>
                                </Dialog.Title>
                                <div className=" mx-auto max-md:mx-1 h-full max-md:pt-3 pt-10 md:w-[1200px]">
                                    <MobileBox className="md:flex max-md:overflow-auto  justify-between">
                                        <Box className='max-md:flex overflow-auto'>
                                            <Image className='w-[389px] max-md:w-[148px] max-md:h-[197px] mb-6 object-contain h-[519px]' src={teachers[textValue].image} alt='' />
                                            <div className='max-md:ml-4'>
                                                <NameOur>{teachers[textValue].name}</NameOur>
                                                <p className=' font-[300] max-md:font-[400] mt-6 mb-4 max-md:text-[14px] text-[24px] leading-[120%] text-[#1A1A1A]'>{teachers[textValue].position}</p>
                                                <p className=' font-[300] max-md:text-[12px] max-md:w-[179px] text-[14px] w-[235px] max-md:opacity-70 leading-[180%] text-[#1A1A1A]'>{teachers[textValue].works}</p>
                                            </div>
                                        </Box>
                                        <Box className='flex flex-col max-md:w-full md:overflow-auto gap-y-4 h-full'>
                                            {teachers[textValue].detailed.map((el: any) => (
                                                <div key={`${teachers[textValue].value}-${teachers[textValue].name}-1-MentorInformation`} className='text-[#1A1A1A] md:w-[642px] text-[14px] max-md:text-[12px] max-md:font-[300] max-md:opacity-80 leading-[180%] font-light text-justify'>
                                                    {el}
                                                </div>
                                            ))}
                                            {teachers[textValue].participatingWorks.map((el: any) => (
                                                <div key={`${teachers[textValue].value}-${teachers[textValue].name}-2-MentorInformation`} className='text-[#1A1A1A] md:w-[642px] text-[14px] max-md:text-[12px] max-md:font-[300] max-md:opacity-80 leading-[180%] font-light text-justify'>
                                                    {el}
                                                </div>
                                            ))}
                                            {teachers[textValue].personalWorks.map((el: any) => (
                                                <div key={`${teachers[textValue].value}-${teachers[textValue].name}-3-MentorInformation`} className='text-[#1A1A1A] md:w-[642px] text-[14px] max-md:text-[12px] max-md:font-[300] max-md:opacity-80 leading-[180%] font-light text-justify'>
                                                    {el}
                                                </div>
                                            ))}
                                            <div className=' w-12 h-[48px] opacity-0 md:hidden'>1111111111</div>
                                            <div className=' w-12 h-[48px] opacity-0 md:hidden'>1111111111</div>
                                            <div className=' w-12 h-[48px] opacity-0 md:hidden'>1111111111</div>
                                            <div className=' w-12 h-[48px] opacity-0 md:hidden'>1111111111</div>
                                        </Box>
                                    </MobileBox>
                                </div>
                            </Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
