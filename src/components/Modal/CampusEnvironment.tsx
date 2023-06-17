import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import styled from "styled-components"

const Panel = styled(Dialog.Panel)`
    width: 343px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 24px 48px rgba(26, 26, 26, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(30px);
    border-radius: 24px;
`
interface CampusEnvironmentProps {
    isOpen: number
    setIsOpen: Function
}
export default function CampusEnvironment({ isOpen, setIsOpen }: CampusEnvironmentProps) {
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
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-screen items-center pt-10 justify-center text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-500"
                            enterFrom="translate-y-[-1000px]"
                            enterTo="translate-y-[0px]"
                            leave="ease-in duration-500"
                            leaveFrom="translate-y-[0px]"
                            leaveTo="translate-y-[-1000px]"
                        >
                            <Panel className="w-full transform overflow-auto p-6 text-left align-middle shadow-xl transition-all">
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
                                <div className='mt-10 text-center'>
                                    <p className=' font-light text-[14px] leading-[20px]'>- 请用微信扫描二维码联系我们吧 -</p>
                                    {/* <Image src={sign_QRcode} alt='' /> */}
                                </div>
                                <div className='flex justify-between items-center'>
                                    <svg width="64" height="1" viewBox="0 0 64 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M0 0.5H64" stroke="white" strokeWidth="0.5" />
                                    </svg>
                                    <p className='font-light text-[12px] leading-[17px] opacity-70'>不要忘记关注我们的平台哦</p>
                                    <svg width="64" height="1" viewBox="0 0 64 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M0 0.5H64" stroke="white" strokeWidth="0.5" />
                                    </svg>
                                </div>
                            </Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}