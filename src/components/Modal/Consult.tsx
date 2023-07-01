
import Image from 'next/image'
import { Fragment } from 'react'
import sign_QRcode_bg_1 from '@/assets/image/svg/sign-QRcode-bg-1.svg'
import sign_QRcode from '@/assets/image/svg/sign-QRcode.png'
import sign_QRcode_bg_2 from '@/assets/image/svg/sign-QRcode-bg-2.png'
import { Dialog, Transition } from '@headlessui/react'
import styled from 'styled-components'
import wechat_QRcode from "../../assets/image/svg/wechat-QRcode.svg";
import red_book_QRcode from "../../assets/image/svg/red-book-QRcode.svg";
import bilibili_QRcode from "../../assets/image/svg/bilibili-QRcode.svg";
import Tip from '../Tips/tip'


const Panel = styled(Dialog.Panel)`
    width: 343px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 24px 48px rgba(26, 26, 26, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(30px);
    border-radius: 24px;
`
interface ConsultProps {
    isOpen: number
    setIsOpen: Function
}
export default function Consult({ isOpen, setIsOpen }: ConsultProps) {
    function closeModal() {
        setIsOpen(0)
    }
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
                    <div className="fixed inset-0 bg-[#1a1a1a] bg-opacity-70" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-screen items-center pt-10 justify-center text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-[270ms]"
                            enterFrom="translate-y-[-1000px]"
                            enterTo="translate-y-[0px]"
                            leave="ease-in duration-[270ms]"
                            leaveFrom="translate-y-[0px]"
                            leaveTo="translate-y-[-1000px]"
                        >
                            <Panel className="w-full transform overflow-inherit relative p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg flex justify-end items-center"
                                >
                                    <p className=' font-light text-[20px] leading-[28px]'>联系我们</p>
                                    <svg onClick={closeModal} className='ml-[77px] cursor-pointer' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 24L24.0012 7.99879" stroke="#ffffff" />
                                        <path d="M8 8L24.0012 24.0012" stroke="#ffffff" />
                                    </svg>

                                </Dialog.Title>
                                <div className='mt-10 w-full flex justify-center flex-col items-center text-center'>
                                    <p className=' font-light text-[14px] leading-[20px]'>- 请用微信扫描二维码联系我们吧 -</p>
                                    <div className=" flex w-[225px] mt-[9px] mb-[25px] h-[225px] justify-center items-center">
                                        <Image className=' absolute' src={sign_QRcode_bg_1} alt='' />
                                        <Image className=' absolute' src={sign_QRcode_bg_2} alt='' />
                                        <Image className=' absolute' src={sign_QRcode} alt='' />
                                    </div>
                                </div>
                                <svg width="64" className=' absolute top-[65.5px] right-[-17px] ' height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 63L63 0.5" stroke="white" stroke-width="0.5" />
                                </svg>
                                <svg width="25" height="25" className='absolute top-[131px] right-[34.5px]' viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 24.5L24.5 0.5" stroke="white" stroke-width="0.5" />
                                </svg>
                                <svg width="54" height="54" className='absolute bottom-[131px] left-[10px]' viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M53.5 0.5L1 53" stroke="white" stroke-width="0.5" />
                                </svg>
                                <svg width="54" height="54" className='absolute bottom-[91px] left-[-14px]' viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M53.5 0.5L1 53" stroke="white" stroke-width="0.5" />
                                </svg>
                                <div className='flex justify-between items-center'>
                                    <svg width="64" height="1" viewBox="0 0 64 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M0 0.5H64" stroke="white" strokeWidth="0.5" />
                                    </svg>
                                    <p className='font-light text-[12px] leading-[17px] opacity-70'>不要忘记关注我们的平台哦</p>
                                    <svg width="64" height="1" viewBox="0 0 64 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M0 0.5H64" stroke="white" strokeWidth="0.5" />
                                    </svg>
                                </div>


                                <div className='flex mt-6 px-[43.5px] justify-between items-center'>
                                    <Tip
                                        imgSrc={1}
                                        qrCodeSrc={bilibili_QRcode}
                                        id="my-anchor-element-id-bilibili_QRcode"
                                    ></Tip>
                                    <Tip
                                        imgSrc={2}
                                        qrCodeSrc={wechat_QRcode}
                                        id="my-anchor-element-id-wechat_QRcode"
                                    ></Tip>
                                    <Tip
                                        imgSrc={3}
                                        qrCodeSrc={red_book_QRcode}
                                        id="my-anchor-element-id-red_book_QRcode"
                                    ></Tip>
                                </div>
                            </Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}