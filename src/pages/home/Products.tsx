"use client"
import Image from 'next/image'
import products_bg from '@/assets/image/svg/products-bg.svg'
import products_right from '@/assets/image/svg/icon-products-right.svg'
import products_right_bg from '@/assets/image/svg/products-right-bg.svg'
import styled from 'styled-components'

const ProductsBox = styled.div`
    width: 440px;
    height: 530px;
    padding: 92px 40px;
    background: url(${products_bg.src});
    background-blend-mode: soft-light, overlay, normal;
    opacity: 0.9;
    border-radius: 40px;
`
const ProductsRightBox = styled.div`
    width: 621px;
    padding-left: 200px;
    margin-top: 110px;
    margin-right: 76px;
    height: 506.74px;
    background: url(${products_right_bg.src});
    background-blend-mode: soft-light, overlay, normal;
`
export default function Products() {
    return (
        <div className='flex mt-[324px] w-screen pl-[136px] pr-[120px]'>
            <div className="flex w-[100%] justify-between">
                <ProductsBox>
                    <p className='font-extrabold text-[56px] leading-[160%] text-[#1a1a1a]'>产品体系</p>
                    <p className='font-medium mt-4 text-[24px] uppercase font-[Lexend] leading-[160%] text-[#1a1a1a]'>System  of  products</p>
                </ProductsBox>
                <div className='flex'>
                    <ProductsRightBox>
                        <p className='text-[38px] text-[#FF4B00] font-medium leading-[160%]'>主体课程</p>
                        <div className="flex gap-2 mt-[35px] items-center">
                            <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                            <p className='text-[20px] leading-[160%] text-[#cccccc] uppercase font-extralight font-[Lexend]'>Foundation</p>
                            <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>音乐启蒙课</p>
                        </div>
                        <div className="flex gap-2 my-[30px] items-center">
                            <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                            <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>音乐专业课</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                            <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>音乐作品集</p>
                        </div>
                    </ProductsRightBox>
                    <Image src={products_right} alt='' />
                </div>
            </div>
        </div>
    )
}