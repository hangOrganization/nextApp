import Development_bg from '@/assets/image/svg/development-bg.png'
import signCharacteristic_bg from '@/assets/image/svg/signCharacteristic-bg.svg'
import CampusEnvironment from '@/components/Modal/CampusEnvironment';
import styled from 'styled-components'

const DevelopmentBox = styled.div`
    width: 100%;
    height: 1050px;
    padding-left: 212px;
    padding-right: 120px;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    background: url(${Development_bg.src});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    /* mix-blend-mode: color-dodge; */
`
const ButtonBox = styled.div`
  cursor: pointer;
  border: 1px solid #ffffff;
  .hover {
    border: 1px solid #ffffff;
  }
  &:hover {
    color: #ffffff;
    background: #1a1a1a;
    border: 1px solid #1a1a1a;
    mix-blend-mode: difference;
    .hover {
      border: 1px solid #1a1a1a;
      background: #cccccc;
    }
    path {
      stroke: #1a1a1a;
    }
  }
`;
const SignCharacteristicBox = styled.div`
    width: 310px;
    height: 385px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${signCharacteristic_bg.src});
`
interface AboutUsProps {
    isOpenCampus: number
    setIsOpenCampus: Function
}
export default function Development({ setIsOpenCampus, isOpenCampus }: AboutUsProps) {
    return (
        <div className=''>
            <DevelopmentBox>
                <div className=' flex justify-between pt-[312px] w-full'>
                    <div className=''>
                        <div className=''>
                            <div className='w-[599px] mt-12'>
                                <p className='text-[14px] font-light leading-[320%] opacity-70'>
                                    2012年 初始音乐团队创办SOUNDPIC工作室<br />
                                    2016年 万像循声文化传媒有限公司正式成立 ｜总部位于杭州滨江，并在南京、重庆设立分棚<br />
                                    2016年 开启音乐留学作品集培训服务 初步组建音乐教学团队<br />
                                    2020年 完善音乐留学作品集规划团队建设<br />
                                    2021年 十万象限教育咨询有限公司正式成立<br />
                                    2022年 UDC音乐艺术中心校区正式启用<br />
                                    2023年 西兴校区教学场地全新升级 扩建至1500平<br />
                                </p>
                            </div>
                        </div>
                    </div>
                    <SignCharacteristicBox>
                        <div>
                            <p className=' font-light text-[56px] leading-[120%]'>发展历程</p>
                            <p className=' font-extralight font-[Lexend] text-[22px] tracking-[0.1em] mt-4 opacity-60 uppercase leading-[160%]'>Development Path</p>
                        </div>
                    </SignCharacteristicBox>
                </div>
                <div className=' flex justify-start mt-[60px] w-full'>
                    <ButtonBox className="p-4 text-[16px] leading-[120%] font-normal pl-[30px] pr-[15px] flex items-center rounded-[64px]" onClick={() => { setIsOpenCampus(1) }}>
                        了解校区环境
                        <div className="w-[36px] hover ml-[14px] items-center justify-center flex rounded-full h-[36px]">
                            <svg
                                width="19"
                                height="16"
                                viewBox="0 0 19 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 15C9 15 11.9412 8 19 8C11.9412 8 9 1 9 1"
                                    stroke="white"
                                    strokeWidth="1.6"
                                />
                                <path d="M18 8L0 8" stroke="white" strokeWidth="1.6" />
                            </svg>
                        </div>
                    </ButtonBox>
                </div>
            </DevelopmentBox>
            <CampusEnvironment setIsOpen={setIsOpenCampus} isOpen={isOpenCampus} />
        </div>
    )
}