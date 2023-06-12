"use client"
import Image from 'next/image'
import styled from 'styled-components'
import specialize_bg from '@/assets/image/svg/specialize-bg.svg'

const SpecializeBox = styled.div`
    background: linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.464341) 48.22%, #1A1A1A 100%),url(${specialize_bg.src}), url(${specialize_bg.src});
    width: 1440px;
    height: 1309px;
    background-blend-mode: normal, soft-light, color-dodge;
`
export default function Specialize(){
    return(
        <SpecializeBox></SpecializeBox>
    )
}