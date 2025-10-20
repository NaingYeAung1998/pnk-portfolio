import { FC } from 'react'
import styles from './styles.module.css'
import Divier from '../components/divider'

export default function About() {
    return (
        <div className="py-[40px] px-[32px]">

            <div className="grid lg:grid-cols-3">
                <div>
                    <h1 className="text-[92px]">About</h1>
                    <h2 className="text-[24px] text-[#8F969D] font-normal tracking-wider">Phoe Nyan ~ A Product Designer</h2>
                </div>
                <div className="col-span-2">
                    <div className="sm:flex gap-8 py-[34px]">
                        <ImageComponent title={'This is me'} src='/images/about-img-01.jpg' imgPosition='top' />
                        <ImageComponent title={'The Kite Runner'} src='/images/about-img-02.jpg' imgPosition='center' />
                        <ImageComponent title={'third wheeling @KL Malaysia'} src='/images/about-img-03.jpg' imgPosition='bottom' />
                        <ImageComponent title={'Storm I witnessed @Ho Chi Minh'} src='/images/about-img-04.jpg' imgPosition='bottom' />
                    </div>
                </div>
            </div>

            <Divier />

            <div className='grid lg:grid-cols-3 py-[56px]'>
                <div className='pr-[40px]'>
                    <h1 className='text-[24px] text-[#8F969D] font-[510px]'>EXPERIENCE</h1>
                    <div className='h-[40px]'></div>
                    <p className='text-[16px] text-[#777777] leading-[24px] tracking-wider'>As a Product Designer, I focus on building features that bring real value to both people and business goals. Having worn multiple hats as a UX Manager and Product Designer, I’ve learned that design goes far beyond visuals.</p>
                    <div className='h-[17px]'></div>
                    <p className='text-[16px] text-[#777777] leading-[24px] tracking-wider'>Design for me is all about understanding people, shaping strategies, and creating experiences that move the business forward.</p>
                </div>
                <div className='col-span-2 lg:pl-[100px] pt-[40px] lg:pt-0'>
                    <div className='flex items-center gap-4 mb-[30px]'>
                        <div className='w-[38px] h-[27px] bg-black rounded-[6px] align-center text-center text-white text-[16px]'>6+</div>
                        <h1 className='text-[24px] text-[#8F969D] font-[510px]'>YEARS IN THE INDUSTRY</h1>
                    </div>
                    <IndustryExperienceComponent company='ESGPEDIA.IO' role='Product Designer' period='Dec 2023 - Apr 2025' link='' />
                    <Divier />
                    <IndustryExperienceComponent company='MO' role='UX Manager' period='Aug 2022 - Dec 2023' link='' />
                    <Divier />
                    <IndustryExperienceComponent company='ACEPLUS SOLUTIONS' role='Senior UX/UI Designer' period='Jan 2021 - Aug 2022' link='' />
                    <Divier />
                    <IndustryExperienceComponent company='CONCEPTX' role='UX/UI Designer' period='Aug 2019 - Dec 2020' link='' />
                    <Divier />
                    <IndustryExperienceComponent company='MR. BLUE KOREAN COMIC' role='Comic Artist' period='Sept 2018 - Jan 2019' link='' />

                </div>
            </div>

            <Divier />

            <div className='grid lg:grid-cols-3 py-[56px]'>
                <div>
                    <h1 className='text-[24px] text-[#8F969D] font-[510px]'>WHAT I DO</h1>
                    <div className='flex gap-2'>
                        <h1 className='text-[48px] text-[#111111] font-[400px] leading-[120px]'>Product Design</h1>
                        <div className='w-[22px] h-[22px] rounded-full border text-center mt-[70px]'>1</div>
                    </div>

                </div>
                <div className='col-span-2 pt-[40px] lg:pt-[70px]'>
                    <p className='text-[16px] text-[#777777] leading-[24px] tracking-wider'>Coming from a comic illustration background, I view color and layout as storytelling tools.</p>
                    <div className='h-[17px]'></div>
                    <p className='text-[16px] text-[#777777] leading-[24px] tracking-wider'>Combined with my experience of leading UX team and building products, I’ve grown into a full-fledged Product Designer who bridges creativity and strategy — using solid design foundations to deliver business impact.</p>
                    <div className='h-[40px]'></div>
                    <div className='flex gap-4'>
                        <div className='w-[40%]'>
                            <ImageComponent title={'The Kite Runner'} src='/images/about-img-02.jpg' imgPosition='center' />
                            <ImageComponent title={'The Kite Runner'} src='/images/about-img-02.jpg' imgPosition='center' />
                        </div>
                        <div className='w-[30%]'>
                            <ImageComponent title={'The Kite Runner'} src='/images/about-img-02.jpg' imgPosition='center' />
                        </div>
                        <div className='w-[30%]'>
                            <ImageComponent title={'The Kite Runner'} src='/images/about-img-02.jpg' imgPosition='center' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

type ImageComponentProps = {
    title: string,
    src: string,
    imgPosition: string,
}

const ImageComponent: FC<ImageComponentProps> = ({ title, src, imgPosition }) => {

    return (
        <div className={`${styles.imageContainer} w-[100%] h-[222px] bg-[#F4F4F4] rounded-[16px] p-[12px] mt-[20px] sm:mt-[0px]`}>
            <img src={src} className={`h-[168px] w-[100%] mb-[5px] object-cover object-${imgPosition}`} />
            <div className={`${styles.imageCaption} text-center w-[100%] text-[12px]`}>{title}</div>
        </div>
    )
}

type IndustryExperienceComponentProps = {
    company: string,
    role: string,
    period: string,
    link: string
}

const IndustryExperienceComponent: FC<IndustryExperienceComponentProps> = ({ company, role, period, link }) => {
    return (
        <div className='w-[100%] grid grid-cols-3'>
            <h2 className='text-[16px] text-[#777777] leading-[24px] tracking-wider cursor-pointer'>{company}</h2>
            <h2 className='text-[16px] text-[#111111] leading-[24px] tracking-wider text-left ml-[40%] w-[50%]'>{role}</h2>
            <h2 className='text-[16px] text-[#777777] leading-[24px] tracking-wider text-right'>{period}</h2>
        </div>
    )
}
