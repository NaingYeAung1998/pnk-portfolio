"use client"

import Divider from "../components/divider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { FC, ReactNode, useState } from "react";

export default function Work() {
    const brandSliderSettings: Settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true
    };

    const workSliderSettings: Settings = {
        dots: false,
        infinite: false,
        autoplay: false,
        variableWidth: true,
        centerPadding: "20px"
    }

    return (
        <div className="py-[40px] px-[32px]">
            <div className="grid lg:grid-cols-4 py-[56px] pb-[100px]">
                <div className="col-span-3">
                    <h1 className="text-[92px]">Work.</h1>
                    <p className='text-[24px] text-[#8F969D] leading-[34px] tracking-wider'>
                        A living archive that captures it all — from first scribbles and half-formed concepts to refined,
                        finished designs. Shared here not just to showcase the work itself, but to ignite curiosity,
                        and celebrate the imperfect process behind every idea.
                    </p>
                </div>
            </div>

            <Divider />

            <div className="py-[56px] pb-[0px]">
                <h2 className="text-[18px] text-[#8F969D] tracking-wider">
                    BRANDS THAT I CAME ACROSSED
                </h2>
                <div className="w-[100%]">
                    <Slider {...brandSliderSettings}>
                        <div>
                            <div className="w-[400px] p-[30px] flex justify-center">
                                <img src='/images/companies-1.png' width={'200px'} />
                            </div>
                        </div>
                        <div className="w-[400px]">
                            <div className="w-[400px] p-[30px]">
                                <img src='/images/companies-1.png' width={'200px'} />
                            </div>
                        </div>
                        <div className="w-[400px]">
                            <div className="w-[400px] p-[30px]">
                                <img src='/images/companies-1.png' width={'200px'} />
                            </div>
                        </div>
                        <div className="w-[400px]">
                            <div className="w-[400px] p-[30px]">
                                <img src='/images/companies-1.png' width={'200px'} />
                            </div>
                        </div>
                        <div className="w-[400px]">
                            <div className="w-[400px] p-[30px]">
                                <img src='/images/companies-1.png' width={'200px'} />
                            </div>
                        </div>
                        <div className="w-[400px]">
                            <div className="w-[400px] p-[30px]">
                                <img src='/images/companies-1.png' width={'200px'} />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

            <Divider />

            <div className="py-[56px]">
                <div className="grid grid-cols-5">
                    <div className="col-span-2">
                        <div className="w-[75%]">
                            <div className="flex items-center pb-[48px]">
                                <div className="bg-[#E8E8E8] w-[54px] h-[54px]"></div>
                                <div className="p-[16px]">
                                    <h3 className="text-[16px] tracking-wider">ESGpieda</h3>
                                    <p className="text-[#777777] tracking-wider">Dec 2023 - April 2025</p>
                                </div>
                            </div>
                            <p className="text-[16px] text-[#777777] pb-[40px] tracking-wider">At the first week of January 2020, I started joining the ESGpedia, a digital platform focused on sustainability data and solutions -- a verified hub where companies can measure, disclose, and share their ESG journey with regulators, investors, and partners.</p>
                            <WorkExpAccordionComponent title="Role">
                                <h3 className="text-[16px] text-[#777777]">Product Designer</h3>
                            </WorkExpAccordionComponent>
                            <WorkExpAccordionComponent title="Accomplishments">

                                <AccomplishmentListItemComponent content="Conducted research and testing on current web application design." />

                                <AccomplishmentListItemComponent content="Conducted research and testing on current web application design." />

                                <AccomplishmentListItemComponent content="Conducted research and testing on current web application design." />

                                <AccomplishmentListItemComponent content="Conducted research and testing on current web application design." />


                            </WorkExpAccordionComponent>
                            <WorkExpAccordionComponent title="Timeline">
                                <h3 className="text-[16px] text-[#777777]">Dec 2023 - Apr 2025</h3>
                            </WorkExpAccordionComponent>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <h3 className="text-[18px] text-[#8F969D] tracking-wider">SOME OF MY WORK at ESGpedia.io</h3>
                        <div className="pt-[28px] w-[100%]">

                            <Slider {...workSliderSettings}>
                                <div>
                                    <div className="pr-[20px]">
                                        <div className="w-[793px] h-[546px] bg-[#F4F4F4] rounded-[20px]"></div>
                                    </div>

                                </div>
                                <div>
                                    <div className="pr-[20px]">
                                        <div className="w-[793px] h-[546px] bg-[#F4F4F4] rounded-[20px]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="pr-[20px]">
                                        <div className="w-[793px] h-[546px] bg-[#F4F4F4] rounded-[20px]"></div>
                                    </div>
                                </div>

                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

interface WorkExpAccordionComponentProps {
    title: string
    children: ReactNode
}

const WorkExpAccordionComponent: FC<WorkExpAccordionComponentProps> = ({ title, children }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="py-[26px] border-b-[1px] border-b-[#D0D3D6]">
            <div className="flex justify-between items-center">
                <h3 className="text-[16px]">{title}</h3>
                <button className="cursor-pointer" onClick={() => setOpen(!open)}>{open ? "-" : "+"}</button>
            </div>
            <div className="pt-[12px]" hidden={!open}>
                {children}

            </div>
        </div>
    )
}


interface AccomplishmentListItemComponentProps {
    content: string
}

const AccomplishmentListItemComponent: FC<AccomplishmentListItemComponentProps> = ({ content }) => {
    return (
        <div className="pl-[10px] pt-[10px] flex gap-3">
            <div className="w-[3px] h-[3px] bg-[#777777] rounded-full mt-[10px]"></div>
            <div className="text-[16px] text-[#777777] tracking-wider">
                {content}
            </div>
        </div>
    )
}