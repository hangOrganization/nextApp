import Image from 'next/image'
import top_bg from '@/assets/image/svg/top-bg.svg'
import sign_logo from '@/assets/image/svg/sign-logo.svg'
import top_bg_1 from '@/assets/image/svg/top-bg-1.svg'
import top_bg_2 from '@/assets/image/svg/top-bg-2.svg'

export default function Top() {
    return (
        <div className=''>
            <div className='relative h-[637px] flex justify-center w-screen top-0 left-0'>
                <Image className='absolute' src={top_bg} alt='' />
                <Image className='absolute' src={top_bg_1} alt='' />
                <Image className='absolute' src={top_bg_2} alt='' />
                <Image className='absolute' src={sign_logo} alt='' />
            </div>
        </div>
    )
}
