import shadow_bg from '@/assets/image/svg/shadow-bg.svg'
import shadow_bg_2 from '@/assets/image/svg/shadow-bg-2.svg'
import shadow_bg_3 from '@/assets/image/svg/shadow-bg-3.svg'
import shadow_bg_4 from '@/assets/image/svg/shadow-bg-4.svg'
import Image from 'next/image'
export default function ShadowBg() {
    return(
        <div className='max-md:hidden'>
            <Image className=' absolute left-0 top-[894px]' src={shadow_bg} alt='' />
            <Image className=' absolute right-0 top-[1797px]' src={shadow_bg_2} alt='' />
            <Image className=' absolute left-0 top-[2996px]' src={shadow_bg_3} alt='' />
            <Image className=' absolute right-0 top-[2894px]' src={shadow_bg_4} alt='' />
        </div>
    )
}   