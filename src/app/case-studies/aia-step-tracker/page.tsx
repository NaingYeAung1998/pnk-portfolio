"use client"

import Divider from "@/app/components/divider"
import { Colors, FontSizes } from "@/app/constants/constants"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/modal"
import React, { FC, MouseEvent, useEffect, useMemo, useRef, useState } from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import SliderWrapper from "./slider.style";
import { throttle } from 'lodash';
import styles from '../styles.module.css'


const achieveSliderSetting: Settings = {
    dots: true,
    infinite: false,
    autoplay: false,
    centerPadding: "20px",
    variableWidth: true,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
        <div className="ft-slick__dots--custom">
            <div className="loading" />
        </div>
    )
}

const sliderFrameSetting: Settings = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: false,
    centerPadding: "20px"
}

const navigations = [
    {
        title: 'INTRODUCTION',
        id: 'introduction',
    },
    {
        title: 'OVERVIEW',
        id: 'overview',
    },
    {
        title: 'BUSINESS PROBLEMS',
        id: 'businessProblems',
    },
    {
        title: 'STRATEGY & BEHAVIOR DESIGN',
        id: 'strategyBehavior',
    },
    {
        title: 'DESIGN PROCESS & RESEARCH',
        id: 'designProcess',
    },
    {
        title: 'FINAL SOLUTION',
        id: 'finalSolution',
    },
    {
        title: 'IMPACT',
        id: 'impact',
    },
    {
        title: 'RETROSPECTIVE',
        id: 'retrospective',
    }
]

export default function AiaStepTracker() {
    const [currentNavigation, setCurrentNavigation] = useState("introduction");
    const navRefs = useRef(new Array(navigations.length));

    const checkVisibility = () => {
        const viewPort = {
            height: window.innerHeight,
            width: window.innerWidth,
        };
        navigations.forEach((nav, index) => {
            const section = navRefs.current[index];
            if (!section) return;

            const rect = section.getBoundingClientRect();

            const isVisible = (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= viewPort.height &&
                rect.right <= viewPort.width
            );
            if (isVisible) {
                setCurrentNavigation(nav.id);
            } else {
                let currentNavigatedIndex = navigations.findIndex(x => x.id == currentNavigation);
                if (currentNavigatedIndex > 0) {
                    setCurrentNavigation(navigations[currentNavigatedIndex - 1].id)
                }
            }
        });
    };

    const throttledCheck = useMemo(() => throttle(checkVisibility, 300), []);

    useEffect(() => {
        window.addEventListener('scroll', throttledCheck);
        return () => {
            window.removeEventListener('scroll', throttledCheck);
        };
    }, []);

    return (
        <div className="bg-white" >

            <div className="px-[100px] py-[60px]" id="headerSection">
                <h1 className="text-[48px] tracking-wider font-semibold">
                    AIA STEP TRACKER
                </h1>
                <div className="md:flex gap-3 pt-[10px]">
                    <Tag title="Behavioral design" />
                    <Tag title="Engagement loops" />
                    <Tag title="Gamified wellness experience" />
                </div>
            </div>
            <div id="bannerSection">
                <video className="w-[100vw]" muted playsInline loop autoPlay>
                    <source src="/images/aia/aia-banner.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="px-[100px]" id="contentSection">
                <div className="w-[100%] py-[64px]">
                    <img src={"/images/aia/agency-designer.png"} width={"100%"} />
                </div>
                <SliderWrapper>
                    <Slider {...achieveSliderSetting}>
                        <div>
                            <div className="pr-[20px]">
                                <div className="w-[700px] h-[350px]">
                                    <img src={"/images/aia/slide-ownership.png"} />
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className="pr-[20px]">
                                <div className="w-[700px] h-[350px]">
                                    <img src={"/images/aia/slide-product.png"} />
                                </div>
                            </div>

                        </div>

                    </Slider>
                    <div className="pb-[120px]"></div>
                </SliderWrapper>


                <Divider />
                <div className="pt-[120px]">
                    <div className="w-[20%] sticky top-[50px] left-20">
                        {
                            navigations.map((nav, index) =>
                                <Navigation key={nav.id} text={nav.title} isActive={nav.id == currentNavigation} handleClick={() => {
                                    navRefs.current[index].scrollIntoView({
                                        behavior: "smooth",
                                        block: "start"
                                    });
                                }} />
                            )
                        }
                    </div>
                    <ContentSectionWrapper>
                        <div className="mt-[-530px]" ref={(nav) => { if (nav) { navRefs.current[0] = nav } }}>
                            <ContentContainer>
                                <h2 className={`text-[${FontSizes.medium}] text-[${Colors.title}] tracking-wider pb-[40px]`} style={{ fontVariant: 'small-caps' }}>Introduction: <span className="text-[#D02149]">making wellness rewarding</span></h2>
                                <ContentParagraph>Ever since AIA launched their operations in Myanmar at 2020, connecting with local users and vendors have been one of the priority mission of AIA.  </ContentParagraph>
                                <ContentParagraph>In 2021, I had the opportunity to design user interfaces for the AIA Step Tracker mobile application, a wellness-focused platform aimed at encouraging healthier lifestyles among AIA members.</ContentParagraph>
                                <div className="pt-[120px]" id="expTableSection">
                                    <ExperienceRow labelChildren={<p className={`text-[${Colors.content}]`}>Year</p>} valueChildren={<p className={`text-[${Colors.content}]`}>2021</p>} />
                                    <ExperienceRow labelChildren={<p className={`text-[${Colors.content}]`}>Timeline</p>} valueChildren={<p className={`text-[${Colors.content}]`}>4 weeks</p>} />
                                    <ExperienceRow labelChildren={<p className={`text-[${Colors.content}]`}>My Role</p>} valueChildren={<p className={`text-[${Colors.title}]`}>Senior UI/UX Designer</p>} />
                                    <ExperienceRow labelChildren={<p className={`text-[${Colors.content}]`}>Contributors</p>}
                                        valueChildren={<><p className={`text-[${Colors.content}] pb-[10px]`}>Project Manager</p>
                                            <p className={`text-[${Colors.content}] pb-[10px]`}>Business Analyst</p>
                                            <p className={`text-[${Colors.content}] pb-[10px]`}>Product Owners</p>
                                            <p className={`text-[${Colors.content}] pb-[10px]`}>Client Relationship Manager</p>
                                            <p className={`text-[${Colors.content}] pb-[10px]`}>Frontend Developer</p>
                                            <p className={`text-[${Colors.content}] pb-[10px]`}>Backend Team members</p>
                                            <p className={`text-[${Colors.content}] pb-[10px]`}>Quality Assurance</p>
                                        </>} />
                                </div>
                            </ContentContainer>
                        </div>
                        <ContentContainer py={"0px"} isFull={true}>
                            <ContentDivider isFull={true} />
                        </ContentContainer>
                    </ContentSectionWrapper>



                    <ContentSectionWrapper>
                        <div ref={(nav) => { if (nav) { navRefs.current[1] = nav } }}>
                            <ContentContainer>
                                <Title text="Overview" />
                                <ContentParagraph>First, we step back to understand the broader context. This section provides background on ESGpedia, explains what ESG means in practice, and outlines how the ESG Calculator fits into the overall ecosystem. It also clarifies the project scope, constraints, stakeholders involved, and my role in leading the revamp end to end.</ContentParagraph>
                            </ContentContainer>
                            <ContentDivider />

                            <HideableComponent title="What is AIA Step Tracker?"
                                children={
                                    <div className="pt-[40px]">
                                        <ContentParagraph>AIA Step Tracker’s core feature was step tracking, allowing users to automatically record their daily physical activity and convert completed steps into reward points. These points could then be redeemed for various benefits within AIA’s partner ecosystem.</ContentParagraph>
                                        <ContentParagraph>Users were able to exchange accumulated points for rewards such as:.</ContentParagraph>
                                        <div className="pb-[15px]"></div>
                                        <ContentList lineHeight="-15px">Discounts on insurance premium fees (e.g., 10% premium reduction)</ContentList>
                                        <ContentList lineHeight="-15px">Promotional vouchers from partner brands</ContentList>
                                        <ContentList lineHeight="0px">Lifestyle rewards such as discounts at hotels, restaurants and cafés (e.g., KFC, Starbucks)</ContentList>
                                    </div>
                                }
                                fullWidhtChildren={
                                    <div className="mt-[-15px] float-right">
                                        <div className="w-[800px] mb-[25px] lg:flex justify-between">
                                            <img src={"/images/aia/aia-logo.png"} className="w-[390px] h-[200px]" />
                                            <div className="w-[390px] h-[235px]">
                                                <img src={"/images/aia/aia-cover.png"} className="w-[390px] h-[200px] rounded-[24px]" />
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                            <ContentDivider />
                            <HideableComponent title="How it works?"
                                children={
                                    <div className="pt-[40px]">
                                        <ContentParagraph>The AIA Step Tracker transforms everyday walking into a simple reward-driven experience through a three-step engagement cycle. Track-Earn-Redeem.</ContentParagraph>
                                    </div>
                                }
                                fullWidhtChildren={
                                    <div className="mt-[-15px] float-right">
                                        <div className="w-[800px] mb-[25px] lg:flex justify-between">
                                            <WorkStepComponent title="1. Track Steps" content={<p>
                                                Users automatically <span className="text-black">track daily steps</span> through
                                                mobile devices.no need
                                                to input manually and
                                                allowing participation
                                                to happen naturally
                                                throughout the day.
                                            </p>} />
                                            <WorkStepComponent title="2. Earn Points" content={<p>
                                                As users accumulate
                                                steps, the interface
                                                instantly <span className="text-black">updates their
                                                    progress and reward
                                                    points</span> ,allowing them
                                                to immediately see the
                                                impact of their activity.
                                            </p>} />
                                            <WorkStepComponent title="3. Redeem Rewards" content={<p>
                                                These points can then
                                                be redeemed for tangible
                                                benefits such as
                                                insurance discounts and
                                                partner vouchers,
                                                reinforcing the value of
                                                continued participation.
                                            </p>} />
                                        </div>
                                    </div>
                                }
                            />
                            <ContentDivider />
                            <HideableComponent title="Target Audience and Platform"
                                children={
                                    <></>
                                }
                                fullWidhtChildren={
                                    <div className="mt-[-15px] float-right">
                                        <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between ">
                                            <div className="p-[12px]">
                                                <div className="bg-white rounded-[32px] w-[180px] h-[200px] flex items-center justify-center">
                                                    <img src={"/images/aia/target.png"} width={"120px"} />
                                                </div>

                                            </div>
                                            <div className="h-[100%] rounded-[24px] p-[20px]">
                                                <div className="flex justify-between items-center">
                                                    <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Target Audience</h2>
                                                </div>
                                                <div className="">
                                                    <ContentParagraph><span className="tracking-wider">The primary users were existing AIA members, many of
                                                        whom interacted with insurance services only occasionally.</span> </ContentParagraph>
                                                    <ContentParagraph><span className="tracking-wider">Therefore not only functional but behavioral challenges were
                                                        — lowering participation barriers while creating a rewarding
                                                        experience that felt immediate, trustworthy, and easy to adopt.</span></ContentParagraph>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between ">
                                            <div className="p-[12px]">
                                                <div className="bg-white rounded-[32px] w-[180px] h-[200px] flex items-center justify-center">
                                                    <img src={"/images/aia/platform.png"} width={"120px"} />
                                                </div>

                                            </div>
                                            <div className="h-[100%] rounded-[24px] p-[20px]">
                                                <div className="flex justify-between items-center">
                                                    <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Platform</h2>
                                                </div>
                                                <div className="">
                                                    <ContentParagraph><span className="tracking-wider">Smartphones provide built-in motion sensors, health integrations,
                                                        and push notification capabilities, enabling passive step tracking
                                                        and real-time behavioral nudges.</span></ContentParagraph>
                                                    <ContentParagraph><span className="tracking-wider">This allowed the product to integrate seamlessly into users’ daily
                                                        routines while supporting instant reward redemption — resulting
                                                        insurance interaction from occasional usage into an ongoing
                                                        wellness relationship.</span></ContentParagraph>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                }
                            />
                        </div>
                        <ContentContainer py={"0px"} isFull={true}>
                            <ContentDivider isFull={true} />
                        </ContentContainer>
                    </ContentSectionWrapper>




                    <ContentSectionWrapper>
                        <div ref={(nav) => { if (nav) { navRefs.current[2] = nav } }}>
                            <ContentContainer>
                                <Title text="Core Business Problems" />
                                <ContentParagraph>Because insurance services are used only occasionally, <span className="text-black">users rarely engage with the platform</span>, making it challenging for AIA to <span className="text-black">build market presence, collect user insights, establish trust, and drive cross-selling opportunities.</span></ContentParagraph>
                            </ContentContainer>
                            <ContentDivider />
                            <HideableComponent title="1. Lack of Engagement" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>Insurance products are typically interaction-based services, meaning users engage only during policy purchase, renewal, or claims. This naturally results in long periods of inactivity, making it difficult for AIA to maintain an ongoing relationship with customers.   </ContentParagraph>
                                    <ContentParagraph>Without regular touchpoints, the brand remains distant from users’ daily lives, reducing <span className="text-black">opportunities to build familiarity, reinforce value,</span> or <span className="text-black">encourage continued app usage.</span> </ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[-15px] float-right">
                                        <img src={"/images/aia/engagement-challenge.png"} width={"725px"} />
                                    </div>
                                } />

                            <ContentDivider />
                            <HideableComponent title="2. Low Emotional Connection" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>Insurance products are only valued during critical moments such as emergencies and as a result, customers have limited emotional connection with the brand during their everyday lives. </ContentParagraph>
                                    <ContentParagraph>This lack of continuous positive interaction makes it difficult for AIA to build long-term trust and loyalty beyond contractual relationships.</ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[-15px] float-right">
                                        <img src={"/images/aia/low-emotion.png"} width={"725px"} />
                                    </div>
                                } />

                            <ContentDivider />
                            <HideableComponent title="3. Lack of Customer Data & Insights" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>Because users interact with insurance platforms infrequently, AIA has limited visibility into customers’ daily behaviors, preferences, and lifestyle patterns. This restricts the company’s ability to understand user needs, personalize services, or identify opportunities for future product offerings.</ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[-15px] float-right">
                                        <img src={"/images/aia/customer-data.png"} width={"725px"} />
                                    </div>
                                } />

                            <ContentContainer py={"0px"} isFull={true}>
                                <ContentDivider isFull={true} />
                            </ContentContainer>
                        </div>
                    </ContentSectionWrapper>

                    <ContentSectionWrapper>
                        <div ref={(nav) => { if (nav) { navRefs.current[3] = nav } }}>
                            <ContentContainer>
                                <Title text="Strategy & Behavior design" />
                                <ContentParagraph>Because insurance services are used only occasionally, <span className="text-black">users rarely engage with the platform,</span> making it challenging for AIA to <span className="text-black">build market presence, collect user insights, establish trust, and drive cross-selling opportunities.</span></ContentParagraph>
                            </ContentContainer>
                            <ContentDivider />
                            <HideableComponent title="Problem Farming"
                                children={
                                    <div className="pt-[40px]">
                                        <ContentParagraph>We got three business problems to solve in this project, which are</ContentParagraph>
                                        <div className="pl-[20px] pb-[20px]">
                                            <ol style={{ listStyleType: "decimal" }} type="1">
                                                <li className={`text-[${Colors.content}] text-[${FontSizes.small}]`}>Lack of Engagement,</li>
                                                <li className={`text-[${Colors.content}] text-[${FontSizes.small}]`}>Low Emotional Connection and </li>
                                                <li className={`text-[${Colors.content}] text-[${FontSizes.small}]`}>Lack of Customer data and Insights.</li>
                                            </ol>
                                        </div>
                                        <ContentParagraph>Among these three problems, we decided that the main problem is Lack of Engagement since it doesnt stand on equal level with other problems. They form a cause - effect chain where Engagement is being cause. refer to below image:</ContentParagraph>
                                    </div>
                                }
                                fullWidhtChildren={
                                    <div className="mt-[-15px] float-right">
                                        <img src={'/images/aia/problem-foundation.png'} width={"720px"} />
                                        <ContentContainer py="120px" pb="0px">
                                            <ContentParagraph>This is the reason why we put Low Engagement as foundation problem and our solution should revolved around this and then later expand into the other problems of #2 and #3.</ContentParagraph>
                                        </ContentContainer>
                                    </div>
                                }
                            />

                            <ContentDivider />
                            <HideableComponent title="Core Strategy"
                                children={
                                    <div className="pt-[40px]">
                                        <ContentParagraph>Our Core Strategy - We will focus first on Engagement as it is a foundation level problem. The strategy we come up is Track - Earn - Redeem - Repeat pattern, which support sustained engagement. The experience was designed around a continuous behavioral loop connecting daily activity with tangible rewards.
                                            Refer below image:</ContentParagraph>
                                        <div className="py-[64px]">
                                            <img src={"/images/aia/core-strategy.png"} width={"700px"} />
                                        </div>
                                        <ContentParagraph>Rather than relying on one-time interactions, this created a self-reinforcing engagement system that transformed occasional insurance interaction into an ongoing wellness habit, encouraging repeat participation through a structured cycle.</ContentParagraph>
                                    </div>
                                }
                                fullWidhtChildren={
                                    <div className="mt-[-15px] float-right">

                                    </div>
                                }
                            />

                            <ContentDivider />
                            <HideableComponent title="Behavioral Design Thinking"
                                children={
                                    <div className="pt-[40px]">
                                        <ContentParagraph>To ensure that our core strategy is really moving in a loop, we need to apply behavior thinking in every step - which will encourage users to voluntarily return to the application as part of their daily routine.</ContentParagraph>
                                        <ContentParagraph>Here in this section, we showcase the process of how we translate behavioral design problems into UX solution and finally to the UI elements in every step of our strategy, Track - Earn - Redeem - Repeat.</ContentParagraph>
                                    </div>
                                }
                                fullWidhtChildren={
                                    <div className="mt-[-15px] float-right">
                                        <div className="mb-[64px]">
                                            <img src={"/images/aia/low-friction.png"} width={"800px"} />
                                        </div>
                                        <div className="my-[64px]">
                                            <img src={"/images/aia/immediate-gratification.png"} width={"800px"} />
                                        </div>
                                        <div className="my-[64px]">
                                            <img src={"/images/aia/progress-tracking.png"} width={"800px"} />
                                        </div>
                                        <div className="my-[64px]">
                                            <img src={"/images/aia/social-emotional.png"} width={"800px"} />
                                        </div>
                                    </div>
                                }
                            />
                            <ContentContainer py={"0px"} isFull={true}>
                                <ContentDivider isFull={true} />
                            </ContentContainer>
                        </div>
                    </ContentSectionWrapper>

                    <ContentSectionWrapper>
                        <div ref={(nav) => { if (nav) { navRefs.current[4] = nav } }}>
                            <ContentContainer isFull={true}>
                                <ContentContainer py="0px" pb="60px">
                                    <Title text="Design process & Research" />
                                    <ContentParagraph>The project followed an iterative design approach across the full product lifecycle, from understanding business goals and user needs to research, ideation, and solution design. Insights were translated into prototypes and refined through continuous validation and collaboration, ensuring the final experience balanced user engagement, usability, and business objectives.</ContentParagraph>
                                </ContentContainer>
                                <div className="float-right">
                                    <img src={"/images/aia/design-process.png"} width={"800px"} />
                                </div>
                            </ContentContainer>
                            <ContentDivider />

                            <HideableComponent title="User Persona" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>This persona represents an existing AIA member who rarely interacts with insurance beyond essential moments. Although interested in staying healthy, maintaining consistent exercise is challenging due to daily routines.</ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right  mb-[45px]">
                                        <PersonaOneComponent />
                                    </div>

                                } />
                            <ContentDivider />

                            <HideableComponent title="Journey Map" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>The journey map helped shift the design approach from individual features to a continuous engagement experience. By visualizing user actions, emotions, and drop-off points across the Track → Earn → Redeem → Repeat cycle, it became easier to identify motivation gaps and prioritize solutions that encourage sustained participation.</ContentParagraph>

                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right  mb-[45px]">
                                        <JourneyMapComponent />
                                    </div>


                                } />
                            <ContentDivider />

                            <HideableComponent title="User Flow" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>Next, we worked on user flows along with hand-drawn sketches to explore different concepts and ideated key journey for each module. The basic flow helped us to understand complete picture and identity any gaps in logic while dealing with AIA stakeholders and our developers.</ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right  mb-[45px]">
                                        <AccountRegistrationComponent />
                                        <DailyTrackingComponent />
                                        <PointsToBenefitComponent />
                                    </div>

                                } />
                        </div>
                        <ContentContainer py={"0px"} isFull={true}>
                            <ContentDivider isFull={true} />
                        </ContentContainer>
                    </ContentSectionWrapper>

                    <ContentSectionWrapper>
                        <div ref={(nav) => { if (nav) { navRefs.current[5] = nav } }}>
                            <ContentContainer>
                                <Title text="Final Solution" />
                                <ContentParagraph>AIA internal team provided us with their existing design system, which included comprehensive guidelines and reusable components.</ContentParagraph>
                                <ContentParagraph>Based on this foundation, my primary focus was to ensure both visual and functional consistency by leveraging the available UI components and established guidelines. I led the team in conducting a component audit to identify elements that could be reused in the new design, as well as areas that required refinement or the creation of new custom components to support product requirements.</ContentParagraph>
                            </ContentContainer>
                            <ContentDivider />

                            <HideableComponent title="Design System Adoption" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>AIA internal team provided us with their existing design system, which included comprehensive guidelines and reusable components.</ContentParagraph>
                                    <ContentParagraph>Based on this foundation, my primary focus was to ensure both visual and functional consistency by leveraging the available UI components and established guidelines. I led the team in conducting a component audit to identify elements that could be reused in the new design, as well as areas that required refinement or the creation of new custom components to support product requirements.</ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right  mb-[45px]">
                                        <img src={"/images/aia/design-adoption.png"} width={"800px"} />
                                    </div>

                                } />
                            <ContentDivider />

                            <HideableComponent title="Taking a Challenge" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>I led the team in conducting a component audit to identify elements that could be reused in the new design, as well as areas that required refinement or the creation of new custom components to support product requirements.</ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right  mb-[45px]">
                                        <img src={"/images/aia/design-adoption.png"} width={"800px"} />
                                    </div>

                                } />
                            <ContentDivider />

                            <HideableComponent title="Point System & Activities" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>I led the team in conducting a component audit to identify elements that could be reused in the new design, as well as areas that required refinement or the creation of new custom components to support product requirements.</ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right  mb-[45px]">
                                        <img src={"/images/aia/design-adoption.png"} width={"800px"} />
                                    </div>

                                } />
                            <ContentDivider />

                            <HideableComponent title="Redeem Coupon Journey" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>I led the team in conducting a component audit to identify elements that could be reused in the new design, as well as areas that required refinement or the creation of new custom components to support product requirements.</ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right  mb-[45px]">
                                        <img src={"/images/aia/design-adoption.png"} width={"800px"} />
                                    </div>

                                } />

                        </div>
                        <ContentContainer py={"0px"} isFull={true}>
                            <ContentDivider isFull={true} />
                        </ContentContainer>
                    </ContentSectionWrapper>

                    <ContentSectionWrapper>
                        <div ref={(nav) => { if (nav) { navRefs.current[6] = nav } }}>
                            <ContentContainer>
                                <Title text="IMPACT" />
                                <ContentParagraph>As an agency designer, I was responsible for product strategy and UX/UI design during the development phase. Post-launch analytics and business metrics were managed by the client. Thus, results cannot be measured. But you can see what I accomplished being an agency designer in below section</ContentParagraph>
                            </ContentContainer>
                            <ContentDivider />

                            <HideableComponent title="Accomplishments" children={
                                <></>
                            }
                                fullWidhtChildren={
                                    <div className="float-right">
                                        <div className="my-[24px]">
                                            <img src={"/images/aia/ownership-stakeholder.png"} width={"800px"} />
                                        </div>
                                        <div className="my-[24px]">
                                            <img src={"/images/aia/product-direction.png"} width={"800px"} />
                                        </div>
                                        <div className="my-[24px]">
                                            <img src={"/images/aia/techincal-feasibility.png"} width={"800px"} />
                                        </div>
                                    </div>
                                } />
                        </div>
                        <ContentContainer py={"0px"} isFull={true}>
                            <ContentDivider isFull={true} />
                        </ContentContainer>
                    </ContentSectionWrapper>

                    <ContentSectionWrapper>
                        <div ref={(nav) => { if (nav) { navRefs.current[7] = nav } }}>
                            <ContentContainer>
                                <Title text="REFLECTION" />
                                <ContentParagraph>Working on the AIA wellness application showed me how design extends beyond interfaces into shaping product strategy. While the request began with a step-tracking feature, the real challenge was transforming an insurance app into an experience users would engage with daily. I learned that meaningful engagement comes from reducing friction and aligning user motivation with business goals.</ContentParagraph>
                                <ContentParagraph>
                                    Operating within an agency environment also reinforced the importance of translating business objectives into clear user experiences, even without direct access to post-launch metrics. Design decisions were based on behavioral principles, usability best practices, and anticipated product outcomes rather than performance data alone.
                                </ContentParagraph>
                            </ContentContainer>
                        </div>
                    </ContentSectionWrapper>
                </div>
            </div >
        </div >
    )
}

type WorkStepComponentProps = {
    title: string,
    content: React.ReactNode,
}

const WorkStepComponent: FC<WorkStepComponentProps> = ({ title, content }) => {
    return (
        <div className="pb-[45px] bg-[#F4F4F4] w-[260px] rounded-[32px]">
            <div className="py-[32px] pl-[24px] border-b-white border-b-[3px] text-[20px] text-black font-bold tracking-widest">
                {title}
            </div>
            <div className="pt-[32px] px-[24px] text-[16px] text-[#777777] tracking-wider font-medium">
                {content}
            </div>
        </div>
    )
}

const QualityQuestionSetsComponent = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [hover, setHover] = useState(false);
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onOpen}>
                <div className="w-[30%]">
                    <img src={"/images/quality-research.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Qualitative Question Sets</h2>
                        <div className="rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" style={{ backgroundColor: hover ? '#FF5B5B' : 'white' }} >
                            <img src={hover ? "/images/arrow-outward-white.png" : "/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the qualitative interview questions
                            that informed our understanding of user behavior and
                            decision-making.</ContentParagraph>
                    </div>

                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" classNames={{ closeButton: 'mt-[8px]' }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex items-center font-medium border-b-[1px] border-b-[#E3E3E3]">
                                <h2 className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Qualitative Question Set</h2>
                            </ModalHeader>
                            <ModalBody className="p-[0px]">
                                <div className="bg-[#F4F4F4] p-[30px]">
                                    <div className="flex justify-between h-[600px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        <div className="w-[48%] h-fit bg-white rounded-[24px] py-[30px] px-[20px]">
                                            <div className="flex justify-between items-center">
                                                <p className={`text-[${FontSizes.small}] text-[${Colors.title}] font-thin`}>Interview For <span className="text-[#FF5B5B]">Existing Users</span></p>
                                                <div className="bg-[#F4F4F4] p-[10px] flex items-center gap-3">
                                                    <img src={"/images/time.png"} width={"12px"} height={"12px"} />
                                                    <p className="text-[10px]">Estimated: 40 mins</p>
                                                </div>
                                            </div>
                                            <ContentDivider isFull={true} />

                                            <h2 className={`text-[${FontSizes.medium}] text-[${Colors.content}] font-medium pb-[20px]`}>Introduction</h2>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Can you tell me a bit about your role and how you’re evolved in your company’s ESG reporting or data collection?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">When was the last time you used our ESG calculator tool?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">What wss your main purpose for using it (e.g. reporting, internal review?)</p> </ContentList>

                                            <ContentDivider isFull={true} />

                                            <h2 className={`text-[${FontSizes.medium}] text-[${Colors.content}] font-medium pb-[20px]`}>Usability & Workflow</h2>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">How easy or difficult is it for you to input data into the tool?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Did you face any confusion or difficulty while entering the data?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">What part of the process took the most time or effort?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Did you need help from teammates or consultants while using the tool?</p> </ContentList>

                                            <ContentDivider isFull={true} />

                                            <h2 className={`text-[${FontSizes.medium}] text-[${Colors.content}] font-medium pb-[20px]`}>Data Accuracy & Trust</h2>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">How confident were you in the results generated by the calculator?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Did you verify any of the outputs manually or compare them with other  tools and spreadsheets?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Were the units, formats, or frameworks (e.g. GHG Protocol, CDP, SBTi) aligned with what you needed for reporting?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Did you encounter any challenges aligning your data with the required frameworks or standards?</p></ContentList>

                                            <ContentDivider isFull={true} />

                                            <h2 className={`text-[${FontSizes.medium}] text-[${Colors.content}] font-medium pb-[20px]`}>Value & Outcome</h2>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">How did the calculator help you complete your ESG reporting or carbon disclosure?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Did the results support your company’s reporting goals or internal decision-making?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">What aspects of the tool felt most valuable to you?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Were there any features or outputs you found unnecessary or confusing?</p> </ContentList>

                                            <ContentDivider isFull={true} />

                                            <h2 className={`text-[${FontSizes.medium}] text-[${Colors.content}] font-medium pb-[20px]`}>Support & Improvement</h2>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Was it easy to understand what data you needed before starting?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Did you use any onboarding guide or tutorial? If so, was it helpful?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">When you faced difficulties, how easy was it to find help or support?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">If you were to use it again, what would you want improved?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">If you could change one thing about the tool, what would it be?</p> </ContentList>

                                            <ContentDivider isFull={true} />

                                            <h2 className={`text-[${FontSizes.medium}] text-[${Colors.content}] font-medium pb-[20px]`}>Wrap-up</h2>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Would you recommend this calculator to another company preparing for ESG reporting? Why or Why not?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">How confident are you about using it for next year’s report?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Is there anything else you wish the tool could do to make reporting easier?</p> </ContentList>
                                        </div>

                                        <div className="w-[48%] h-fit bg-white rounded-[24px] py-[30px] px-[20px]">
                                            <div className="flex justify-between items-center">
                                                <p className={`text-[${FontSizes.small}] text-[${Colors.title}] font-thin`}>Interview For <span className="text-[#FF5B5B]">Existing Users</span></p>
                                                <div className="bg-[#F4F4F4] p-[10px] flex items-center gap-3">
                                                    <img src={"/images/time.png"} width={"12px"} height={"12px"} />
                                                    <p className="text-[10px]">Estimated: 40 mins</p>
                                                </div>
                                            </div>
                                            <ContentDivider isFull={true} />

                                            <h2 className={`text-[${FontSizes.medium}] text-[${Colors.content}] font-medium pb-[20px]`}>Introduction</h2>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Can you share a bit about your company’s current ESG or carbon reporting process?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">How does your company currently handle ESG or carbon data collection and reporting?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Have you evaluated or considered any ESG or carbon tools in the past? Why or why not?</p> </ContentList>

                                            <ContentDivider isFull={true} />

                                            <h2 className={`text-[${FontSizes.medium}] text-[${Colors.content}] font-medium pb-[20px]`}>Awareness & Perception</h2>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">When you hear “ESG calculator,” what comes to mind?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">What do you think are the biggest challenges in collecting or calculating ESG data today?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Have you explored or heard about similar ESG or carbon tools?</p> </ContentList>

                                            <ContentDivider isFull={true} />

                                            <h2 className={`text-[${FontSizes.medium}] text-[${Colors.content}] font-medium pb-[20px]`}>Trust & Credibility Expectations</h2>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">If your company were to use an ESG calculator, what features or outcomes would be most important to you?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">What would make you trust the results generated by an ESG calculator?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">How important are standards or frameworks (e.g. GHG Protocol, GRI, CDP, SBTi) in influencing your confidence?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">What kind of transparency (e.g. methodology, emission factors, assumptions) would you expect from such a tool?</p> </ContentList>

                                            <ContentDivider isFull={true} />

                                            <h2 className={`text-[${FontSizes.medium}] text-[${Colors.content}] font-medium pb-[20px]`}>Needs & Decision Triggers</h2>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">If your company were to adopt an ESG calculator, what problems would you expect it to solve?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">What features or capabilities would be non-negotiable for you?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">How important is integration with your existing systems, data sources, or spreadsheets?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">What would prevent your company from adopting a tool like this?</p> </ContentList>

                                            <ContentDivider isFull={true} />

                                            <h2 className={`text-[${FontSizes.medium}] text-[${Colors.content}] font-medium pb-[20px]`}>Perceived Value & Risk</h2>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">What outcomes would make an ESG calculator feel worth the investment?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">What risks (e.g. inaccurate data, compliance issues, complexity) would concern you the most?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Are there any features you would expect to be unnecessary or overcomplicated?</p> </ContentList>

                                            <ContentDivider isFull={true} />

                                            <h2 className={`text-[${FontSizes.medium}] text-[${Colors.content}] font-medium pb-[20px]`}>Wrap-up</h2>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Under what conditions would you recommend an ESG calculator to another company?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">What would increase your confidence in using an ESG calculator for future reporting?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Is there anything else you would expect from an ESG calculator to make adoption easier?</p> </ContentList>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>

    )
}

const QuantityQuestionSetsComponent = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [hover, setHover] = useState(false);
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onOpen}>
                <div className="w-[30%]">
                    <img src={"/images/quantity-research.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Quantitative Question Sets</h2>
                        <div className="rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" style={{ backgroundColor: hover ? '#FF5B5B' : 'white' }} >
                            <img src={hover ? "/images/arrow-outward-white.png" : "/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to review the quantitative survey questions
                            used to evaluate usability, confidence, and performance
                            throughout the ESG assessment.</ContentParagraph>
                    </div>

                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" classNames={{ closeButton: 'mt-[8px]' }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-medium border-b-[1px] border-b-[#E3E3E3]">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Quantitative Question Set</p>
                            </ModalHeader>
                            <ModalBody className="p-[0px]">
                                <div className="bg-[#F4F4F4] px-[30px]">
                                    <div className="h-[650px] p-[32px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        {/* <div className="w-[100%] h-[435px] bg-white p-[30px] rounded-[24px] flex justify-center">
                                            <img src={"/images/quantity-1.png"} />
                                        </div>
                                        <div className="h-[30px]"></div>
                                        <div className="w-[100%] h-[435px] bg-white p-[30px] rounded-[24px] flex justify-center">
                                            <img src={"/images/quantity-3.png"} />
                                        </div> */}
                                        <img src={"/images/quantative.png"} width={"100%"} />
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>

    )
}

const UsabilityTestingPlanComponent = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [hover, setHover] = useState(false);

    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onOpen}>
                <div className="w-[30%]">
                    <img src={"/images/usability-testing.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Usability Testing Plan</h2>
                        <div className="rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" style={{ backgroundColor: hover ? '#FF5B5B' : 'white' }} >
                            <img src={hover ? "/images/arrow-outward-white.png" : "/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the detailed empathy map
                            and understand users’ thoughts, behaviors, and
                            emotions throughout the journey.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl" classNames={{ closeButton: 'mt-[8px]' }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-medium border-b-[1px] border-b-[#E3E3E3]">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Usability Testing Plan</p>
                            </ModalHeader>
                            <ModalBody className="p-[0px]">
                                <div className="bg-[#F4F4F4]">
                                    <div className="h-[650px] p-[32px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        <div className="w-[100%] bg-white p-[30px] rounded-[24px]">
                                            <ContentDivider isFull={true} />
                                            <h2 className={`text-[${FontSizes.small}] text-[${Colors.title}] font-medium pb-[20px]`}>
                                                Testing Objectives
                                            </h2>
                                            <ContentList>Evaluate whether users can complete a carbon or ESG calculation
                                                without guidance.</ContentList>
                                            <ContentList>Identify steps that are confusing, slow, or error-prone.</ContentList>
                                            <ContentList>Test clarity of inputs, units, frameworks, and output results.</ContentList>
                                        </div>

                                        <div className="h-[30px]"></div>
                                        <div className="w-[100%] bg-white p-[30px] rounded-[24px]">
                                            <ContentDivider isFull={true} />
                                            <h2 className={`text-[${FontSizes.small}] text-[${Colors.title}] font-medium pb-[20px]`}>
                                                Participant Types and Numbers
                                            </h2>
                                            <ContentList>Internal Stakeholders, and potential users from SMEs or corporates.</ContentList>
                                            <ContentList>5–7 users for initial round (3 internal, 4 potential).</ContentList>
                                        </div>

                                        <div className="h-[30px]"></div>
                                        <div className="w-[100%] bg-white p-[30px] rounded-[24px]">
                                            <ContentDivider isFull={true} />
                                            <h2 className={`text-[${FontSizes.small}] text-[${Colors.title}] font-medium pb-[20px]`}>
                                                Objectives
                                            </h2>
                                            <ContentParagraph>Entering Company Data</ContentParagraph>
                                            <ContentList>Can the user identify what information is required before starting?</ContentList>
                                            <ContentList>Do they understand data formats and units?</ContentList>

                                            <ContentParagraph>Inputting Emission Data</ContentParagraph>
                                            <ContentList>Can they enter Scope 1, 2, or 3 data correctly?</ContentList>
                                            <ContentList>Do they understand terms like “tCO₂e” or “GHG Protocol”?</ContentList>

                                            <ContentParagraph>Understanding the Results</ContentParagraph>
                                            <ContentList>Can they interpret the results easily (graphs, metrics, or summary)?</ContentList>
                                            <ContentList>Do they understand whether results are good/bad or need action?</ContentList>
                                        </div>

                                        <div className="h-[30px]"></div>
                                        <div className="w-[100%] bg-white p-[30px] rounded-[24px]">
                                            <ContentDivider isFull={true} />
                                            <h2 className={`text-[${FontSizes.small}] text-[${Colors.title}] font-medium pb-[20px]`}>
                                                Key Task for Participants
                                            </h2>
                                            <ContentList>Imagine you’re preparing your company’s ESG report. Log in and locate the
                                                ESG Calculator feature.</ContentList>
                                            <ContentList>Add data for Scope 1, Scope 2, and Scope 3 emissions.</ContentList>
                                            <ContentList>Change the data unit (e.g., from “kg CO₂e” to “tonnes CO₂e”) and confirm
                                                whether the values update correctly.</ContentList>
                                            <ContentList>If you’re unsure what this term means, where would you go for help?</ContentList>
                                            <ContentList>After results appear, ask: “Can you explain what this number means?”</ContentList>
                                        </div>

                                        <div className="h-[30px]"></div>
                                        <div className="w-[100%] bg-white p-[30px] rounded-[24px]">
                                            <ContentDivider isFull={true} />
                                            <h2 className={`text-[${FontSizes.small}] text-[${Colors.title}] font-medium pb-[20px]`}>
                                                Post-test Questions
                                            </h2>
                                            <ContentList>How easy or difficult was it to complete the tasks?</ContentList>
                                            <ContentList>What part of the calculator felt confusing or time-consuming?</ContentList>
                                            <ContentList>How confident do you feel about the accuracy of your input data?</ContentList>
                                            <ContentList>If you could change one thing about this tool, what would it be?</ContentList>
                                            <ContentList>Would you use this tool again for your next ESG report?</ContentList>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>

    )
}

const StudyPlanComponent = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [hover, setHover] = useState(false);

    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onOpen}>
                <div className="w-[30%]">
                    <img src={"/images/study-plan.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Study Plan</h2>
                        <div className="rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" style={{ backgroundColor: hover ? '#FF5B5B' : 'white' }} >
                            <img src={hover ? "/images/arrow-outward-white.png" : "/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the detailed empathy map
                            and understand users’ thoughts, behaviors, and
                            emotions throughout the journey.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl" classNames={{ closeButton: 'mt-[8px]' }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-medium border-b-[1px] border-b-[#E3E3E3]">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Diary Study Plan</p>
                            </ModalHeader>
                            <ModalBody className="p-[0px]">
                                <div className="bg-[#F4F4F4]">
                                    <div className="h-[650px] p-[32px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        {/* <div className="w-[100%] bg-white p-[30px] rounded-[24px]">
                                            <ContentDivider isFull={true} />
                                            <h2 className={`text-[${FontSizes.small}] text-[${Colors.title}] font-medium pb-[20px]`}>
                                                Objectives
                                            </h2>
                                            <ContentList>Understand how user perception, confidence, and frustration levels change
                                                over time.</ContentList>
                                            <ContentList>Validate whether the current calculator supports users in completing
                                                end-to-end ESG reporting tasks efficiently.</ContentList>
                                            <ContentList>Prepare the groundwork for a future client-facing diary study after product
                                                refinements.</ContentList>
                                        </div>

                                        <div className="h-[30px]"></div>
                                        <div className="w-[100%] bg-white p-[30px] rounded-[24px]">
                                            <ContentDivider isFull={true} />
                                            <h2 className={`text-[${FontSizes.small}] text-[${Colors.title}] font-medium pb-[20px]`}>
                                                Duration & Format
                                            </h2>
                                            <ContentList>Duration: 7 - 10 days </ContentList>
                                            <ContentList>Participants: 6–8 internal staff members (from various departments).</ContentList>
                                            <ContentList>Platform: Shared Notion link with structured questions and optional screenshots.</ContentList>
                                        </div>

                                        <div className="h-[30px]"></div>
                                        <div className="w-[100%] bg-white p-[30px] rounded-[24px]">
                                            <div className="flex justify-between pb-[10px] items-center">
                                                <h2 className={`text-[${FontSizes.medium}] text-[${Colors.title}] font-medium`}>
                                                    Schedule & Prompts
                                                </h2>
                                                <div className="bg-[#F4F4F4] p-[10px] flex items-center gap-3">
                                                    <img src={"/images/time.png"} width={"12px"} height={"12px"} />
                                                    <p className="text-[10px]">Estimated: 30 mins/day</p>
                                                </div>
                                            </div>
                                            <ContentDivider isFull={true} />
                                            <h2 className={`text-[${FontSizes.small}] text-[${Colors.title}] font-medium py-[20px]`}>
                                                Day 1 - Onboarding and Renewable Energy
                                            </h2>
                                            <ContentList>Which part of the interface was confusing or unclear?</ContentList>
                                            <ContentList>What do you expect to happen after entering your company details?</ContentList>
                                            <ContentList>What type of data did you input today (e.g., Renewable, Certificates)?</ContentList>

                                            <h2 className={`text-[${FontSizes.small}] text-[${Colors.title}] font-medium py-[20px]`}>
                                                Day 2 - Scope 1, 2 and Emission Intensity
                                            </h2>
                                            <ContentList>Which part of the interface was confusing or unclear?</ContentList>
                                            <ContentList>What do you expect to happen after entering your company details?</ContentList>
                                            <ContentList>What type of data did you input today (e.g., Renewable, Certificates)?</ContentList>
                                        </div> */}
                                        <img src={"/images/diary-study-plan.png"} width={"100%"} />

                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>

    )
}

const PersonaOneComponent = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [hover, setHover] = useState(false);

    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onOpen}>
                <div className="">
                    <img src={"/images/aia/aia-persona.png"} width={"170px"} />
                </div>
                <div className="w-[80%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>User Persona</h2>
                        <div className="rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" style={{ backgroundColor: hover ? '#FF5B5B' : 'white' }} >
                            <img src={hover ? "/images/arrow-outward-white.png" : "/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the user persona
                            we created to represent AIA existing member
                            and his motivation.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl" classNames={{ closeButton: 'mt-[8px]' }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-medium border-b-[1px] border-b-[#E3E3E3]">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Persona 1 - ShengSion</p>
                            </ModalHeader>
                            <ModalBody className="p-[0px]">
                                <div className="bg-[#F4F4F4]">
                                    <div className="h-[650px] p-[32px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        <img src={"/images/persona-one.png"} width={"100%"} />
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>

    )
}

const PersonaTwoComponent = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [hover, setHover] = useState(false);

    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onOpen}>
                <div className="w-[20%]">
                    <img src={"/images/razer-persona.png"} width={"170px"} />
                </div>
                <div className="w-[80%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Persona 2 - Razer</h2>
                        <div className="rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" style={{ backgroundColor: hover ? '#FF5B5B' : 'white' }} >
                            <img src={hover ? "/images/arrow-outward-white.png" : "/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the Razer persona and
                            its ESG challenges.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl" classNames={{ closeButton: 'mt-[8px]' }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-medium border-b-[1px] border-b-[#E3E3E3]">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Persona 2 - Razer</p>
                            </ModalHeader>
                            <ModalBody className="p-[0px]">
                                <div className="bg-[#F4F4F4]">
                                    <div className="h-[650px] p-[32px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        <img src={"/images/persona-two.png"} width={"100%"} />
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>

    )
}

const AffinityMapOneComponent = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [hover, setHover] = useState(false);

    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onOpen}>
                <div className="w-[30%]">
                    <img src={"/images/affinity-one-small.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Affinity Map - Step 1</h2>
                        <div className="rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" style={{ backgroundColor: hover ? '#FF5B5B' : 'white' }} >
                            <img src={hover ? "/images/arrow-outward-white.png" : "/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the detailed empathy map
                            and understand users’ thoughts, behaviors, and
                            emotions throughout the journey.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" classNames={{ closeButton: 'mt-[8px]' }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-medium border-b-[1px] border-b-[#E3E3E3]">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Affinity Map - Step 1</p>
                            </ModalHeader>
                            <ModalBody className="p-[0px]">
                                <div className="bg-[#F4F4F4]">
                                    <div className="h-[650px] p-[32px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        <img src={"/images/affinity-one.png"} width={"100%"} />
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>

    )
}

const AffinityMapTwoComponent = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [hover, setHover] = useState(false);

    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onOpen}>
                <div className="w-[30%]">
                    <img src={"/images/affinity-one-small.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Affinity Map - Step 2</h2>
                        <div className="rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" style={{ backgroundColor: hover ? '#FF5B5B' : 'white' }} >
                            <img src={hover ? "/images/arrow-outward-white.png" : "/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the detailed empathy map
                            and understand users’ thoughts, behaviors, and
                            emotions throughout the journey.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" classNames={{ closeButton: 'mt-[8px]' }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-medium border-b-[1px] border-b-[#E3E3E3]">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Affinity Map - Step 2</p>
                            </ModalHeader>
                            <ModalBody className="p-[0px]">
                                <div className="bg-[#F4F4F4]">
                                    <div className="h-[650px] p-[32px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        <img src={"/images/affinity-two.png"} width={"100%"} />
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>

    )
}

const EmpathyMapComponent = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [hover, setHover] = useState(false);

    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onOpen}>
                <div className="w-[30%]">
                    <img src={"/images/empathy-map-small.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Empathy Map</h2>
                        <div className="rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" style={{ backgroundColor: hover ? '#FF5B5B' : 'white' }} >
                            <img src={hover ? "/images/arrow-outward-white.png" : "/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the detailed empathy map
                            and understand users’ thoughts, behaviors, and
                            emotions throughout the journey.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" classNames={{ closeButton: 'mt-[8px]' }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-medium border-b-[1px] border-b-[#E3E3E3]">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Empathy Map</p>
                            </ModalHeader>
                            <ModalBody className="p-[0px]">
                                <div className="bg-[#F4F4F4]">
                                    <div className="h-[650px] p-[32px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        <img src={"/images/empathy-map.png"} width={"100%"} />
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>

    )
}

const PainGainComponent = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [hover, setHover] = useState(false);

    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onOpen}>
                <div className="w-[30%]">
                    <img src={"/images/pain-gain-small.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Pains and Gains</h2>
                        <div className="rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" style={{ backgroundColor: hover ? '#FF5B5B' : 'white' }} >
                            <img src={hover ? "/images/arrow-outward-white.png" : "/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the key pains and gains
                            uncovered from the empathy mapping.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" classNames={{ closeButton: 'mt-[8px]' }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-medium border-b-[1px] border-b-[#E3E3E3]">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Pains and Gains</p>
                            </ModalHeader>
                            <ModalBody className="p-[0px]">
                                <div className="bg-[#F4F4F4]">
                                    <div className="h-[650px] p-[32px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        <img src={"/images/pain-gain.png"} width={"100%"} />
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>

    )
}


const JourneyMapComponent = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    const onMouseDown = (e: MouseEvent) => {
        e.preventDefault()
        const slider: HTMLDivElement | null = scrollRef.current;
        if (slider) {
            setIsDown(true);
            setStartX(e.pageX - slider.offsetLeft);
            setStartY(e.pageY - slider.offsetTop);
            setScrollLeft(slider.scrollLeft);
            setScrollTop(slider.scrollTop);
        }

    };

    const onMouseLeave = () => {
        setIsDown(false);
    };

    const onMouseUp = () => {
        setIsDown(false);
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const slider = scrollRef.current;
        if (slider) {
            const x = e.pageX - slider.offsetLeft;
            const y = e.pageY - slider.offsetTop;

            // Drag speed multiplier (optional, 1 is default)
            const walkX = (x - startX);
            const walkY = (y - startY);

            slider.scrollLeft = scrollLeft - walkX;
            slider.scrollTop = scrollTop - walkY;
        }

    };
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [hover, setHover] = useState(false);
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onOpen}>
                <div className="w-[30%]">
                    <img src={"/images/aia/journey-map.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Joureny Mapping</h2>
                        <div className="rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" style={{ backgroundColor: hover ? '#FF5B5B' : 'white' }} >
                            <img src={hover ? "/images/arrow-outward-white.png" : "/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the full customer journey
                            map in detail.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" classNames={{ closeButton: 'mt-[8px]' }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-medium border-b-[1px] border-b-[#E3E3E3]">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Journey Map</p>
                            </ModalHeader>
                            <ModalBody className="p-[0px]">
                                <div className="bg-[#F4F4F4]">
                                    <div ref={scrollRef} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onMouseMove={onMouseMove} className="h-[650px] p-[32px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        <img className="max-w-none" src={"/images/journey-map.png"} width={"2100px"} />
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>

    )
}

const MoscowMethodComponent = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    const onMouseDown = (e: MouseEvent) => {
        e.preventDefault()
        const slider: HTMLDivElement | null = scrollRef.current;
        if (slider) {
            setIsDown(true);
            setStartX(e.pageX - slider.offsetLeft);
            setStartY(e.pageY - slider.offsetTop);
            setScrollLeft(slider.scrollLeft);
            setScrollTop(slider.scrollTop);
        }

    };

    const onMouseLeave = () => {
        setIsDown(false);
    };

    const onMouseUp = () => {
        setIsDown(false);
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const slider = scrollRef.current;
        if (slider) {
            const x = e.pageX - slider.offsetLeft;
            const y = e.pageY - slider.offsetTop;

            // Drag speed multiplier (optional, 1 is default)
            const walkX = (x - startX);
            const walkY = (y - startY);

            slider.scrollLeft = scrollLeft - walkX;
            slider.scrollTop = scrollTop - walkY;
        }

    };
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [hover, setHover] = useState(false);
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onOpen}>
                <div className="w-[30%]">
                    <img src={"/images/moscow-method-small.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>MOSCOW Method</h2>
                        <div className="rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" style={{ backgroundColor: hover ? '#FF5B5B' : 'white' }} >
                            <img src={hover ? "/images/arrow-outward-white.png" : "/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore a detailed breakdown
                            of the MoSCoW prioritization method.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" classNames={{ closeButton: 'mt-[8px]' }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-medium border-b-[1px] border-b-[#E3E3E3]">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>MOSCOW Method</p>
                            </ModalHeader>
                            <ModalBody className="p-[0px]">
                                <div className="bg-[#F4F4F4]">
                                    <div ref={scrollRef} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onMouseMove={onMouseMove} className="h-[650px] p-[32px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        <img className="max-w-none" src={"/images/moscow-method.png"} width={"1700"} />
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>

    )
}

const RevampedSitemapComponent = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    const onMouseDown = (e: MouseEvent) => {
        e.preventDefault()
        const slider: HTMLDivElement | null = scrollRef.current;
        if (slider) {
            setIsDown(true);
            setStartX(e.pageX - slider.offsetLeft);
            setStartY(e.pageY - slider.offsetTop);
            setScrollLeft(slider.scrollLeft);
            setScrollTop(slider.scrollTop);
        }

    };

    const onMouseLeave = () => {
        setIsDown(false);
    };

    const onMouseUp = () => {
        setIsDown(false);
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const slider = scrollRef.current;
        if (slider) {
            const x = e.pageX - slider.offsetLeft;
            const y = e.pageY - slider.offsetTop;

            // Drag speed multiplier (optional, 1 is default)
            const walkX = (x - startX);
            const walkY = (y - startY);

            slider.scrollLeft = scrollLeft - walkX;
            slider.scrollTop = scrollTop - walkY;
        }

    };
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [hover, setHover] = useState(false);
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onOpen}>
                <div className="w-[30%]">
                    <img src={"/images/site-map-small.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Revamped Sitemap</h2>
                        <div className="rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" style={{ backgroundColor: hover ? '#FF5B5B' : 'white' }} >
                            <img src={hover ? "/images/arrow-outward-white.png" : "/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore a detailed breakdown
                            of the sitemap structure.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" classNames={{ closeButton: 'mt-[8px]' }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-medium border-b-[1px] border-b-[#E3E3E3]">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Revamped Sitemap</p>
                            </ModalHeader>
                            <ModalBody className="p-[0px]">
                                <div className="bg-[#F4F4F4]">
                                    <div ref={scrollRef} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onMouseMove={onMouseMove} className="h-[650px] p-[32px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        <img className="max-w-none" src={"/images/site-map.png"} width={"1700"} />
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>

    )
}

const ProductRoadmapComponent = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    const onMouseDown = (e: MouseEvent) => {
        e.preventDefault()
        const slider: HTMLDivElement | null = scrollRef.current;
        if (slider) {
            setIsDown(true);
            setStartX(e.pageX - slider.offsetLeft);
            setStartY(e.pageY - slider.offsetTop);
            setScrollLeft(slider.scrollLeft);
            setScrollTop(slider.scrollTop);
        }

    };

    const onMouseLeave = () => {
        setIsDown(false);
    };

    const onMouseUp = () => {
        setIsDown(false);
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const slider = scrollRef.current;
        if (slider) {
            const x = e.pageX - slider.offsetLeft;
            const y = e.pageY - slider.offsetTop;

            // Drag speed multiplier (optional, 1 is default)
            const walkX = (x - startX);
            const walkY = (y - startY);

            slider.scrollLeft = scrollLeft - walkX;
            slider.scrollTop = scrollTop - walkY;
        }

    };
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [hover, setHover] = useState(false);
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onOpen}>
                <div className="w-[30%]">
                    <img src={"/images/roadmap-small.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Product Roadmap</h2>
                        <div className="rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" style={{ backgroundColor: hover ? '#FF5B5B' : 'white' }} >
                            <img src={hover ? "/images/arrow-outward-white.png" : "/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to view the product roadmap that
                            outlines phased delivery and feature rollout.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" classNames={{ closeButton: 'mt-[8px]' }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-medium border-b-[1px] border-b-[#E3E3E3]">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Product Roadmap</p>
                            </ModalHeader>
                            <ModalBody className="p-[0px]">
                                <div className="bg-[#F4F4F4]">
                                    <div ref={scrollRef} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onMouseMove={onMouseMove} className="h-[650px] p-[32px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        <img className="max-w-none" src={"/images/roadmap.png"} width={"1200"} />
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>

    )
}

const AccountRegistrationComponent = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    const onMouseDown = (e: MouseEvent) => {
        e.preventDefault()
        const slider: HTMLDivElement | null = scrollRef.current;
        if (slider) {
            setIsDown(true);
            setStartX(e.pageX - slider.offsetLeft);
            setStartY(e.pageY - slider.offsetTop);
            setScrollLeft(slider.scrollLeft);
            setScrollTop(slider.scrollTop);
        }

    };

    const onMouseLeave = () => {
        setIsDown(false);
    };

    const onMouseUp = () => {
        setIsDown(false);
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const slider = scrollRef.current;
        if (slider) {
            const x = e.pageX - slider.offsetLeft;
            const y = e.pageY - slider.offsetTop;

            // Drag speed multiplier (optional, 1 is default)
            const walkX = (x - startX);
            const walkY = (y - startY);

            slider.scrollLeft = scrollLeft - walkX;
            slider.scrollTop = scrollTop - walkY;
        }

    };
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [hover, setHover] = useState(false);
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[40px] cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onOpen}>

                <div className="p-[40px] border-b-white border-b-[4px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Account Registration</h2>
                        <div className="rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" style={{ backgroundColor: hover ? '#FF5B5B' : 'white' }} >
                            <img src={hover ? "/images/arrow-outward-white.png" : "/images/arrow-outward.png"} />
                        </div>
                    </div>
                </div>
                <div className="p-[20px]">
                    <img src={"/images/aia/account-registration-small.png"} />
                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" classNames={{ closeButton: 'mt-[8px]' }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-medium border-b-[1px] border-b-[#E3E3E3]">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Journey Map</p>
                            </ModalHeader>
                            <ModalBody className="p-[0px]">
                                <div className="bg-[#F4F4F4]">
                                    <div ref={scrollRef} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onMouseMove={onMouseMove} className="h-[650px] p-[32px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        <img className="max-w-none" src={"/images/journey-map.png"} width={"2100px"} />
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>

    )
}

const DailyTrackingComponent = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    const onMouseDown = (e: MouseEvent) => {
        e.preventDefault()
        const slider: HTMLDivElement | null = scrollRef.current;
        if (slider) {
            setIsDown(true);
            setStartX(e.pageX - slider.offsetLeft);
            setStartY(e.pageY - slider.offsetTop);
            setScrollLeft(slider.scrollLeft);
            setScrollTop(slider.scrollTop);
        }

    };

    const onMouseLeave = () => {
        setIsDown(false);
    };

    const onMouseUp = () => {
        setIsDown(false);
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const slider = scrollRef.current;
        if (slider) {
            const x = e.pageX - slider.offsetLeft;
            const y = e.pageY - slider.offsetTop;

            // Drag speed multiplier (optional, 1 is default)
            const walkX = (x - startX);
            const walkY = (y - startY);

            slider.scrollLeft = scrollLeft - walkX;
            slider.scrollTop = scrollTop - walkY;
        }

    };
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [hover, setHover] = useState(false);
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[40px] cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onOpen}>

                <div className="p-[40px] border-b-white border-b-[4px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Daily Tracking & Progress Flow</h2>
                        <div className="rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" style={{ backgroundColor: hover ? '#FF5B5B' : 'white' }} >
                            <img src={hover ? "/images/arrow-outward-white.png" : "/images/arrow-outward.png"} />
                        </div>
                    </div>
                </div>
                <div className="p-[20px]">
                    <img src={"/images/aia/daily-tracking-small.png"} />
                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" classNames={{ closeButton: 'mt-[8px]' }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-medium border-b-[1px] border-b-[#E3E3E3]">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Journey Map</p>
                            </ModalHeader>
                            <ModalBody className="p-[0px]">
                                <div className="bg-[#F4F4F4]">
                                    <div ref={scrollRef} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onMouseMove={onMouseMove} className="h-[650px] p-[32px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        <img className="max-w-none" src={"/images/journey-map.png"} width={"2100px"} />
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>

    )
}

const PointsToBenefitComponent = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    const onMouseDown = (e: MouseEvent) => {
        e.preventDefault()
        const slider: HTMLDivElement | null = scrollRef.current;
        if (slider) {
            setIsDown(true);
            setStartX(e.pageX - slider.offsetLeft);
            setStartY(e.pageY - slider.offsetTop);
            setScrollLeft(slider.scrollLeft);
            setScrollTop(slider.scrollTop);
        }

    };

    const onMouseLeave = () => {
        setIsDown(false);
    };

    const onMouseUp = () => {
        setIsDown(false);
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const slider = scrollRef.current;
        if (slider) {
            const x = e.pageX - slider.offsetLeft;
            const y = e.pageY - slider.offsetTop;

            // Drag speed multiplier (optional, 1 is default)
            const walkX = (x - startX);
            const walkY = (y - startY);

            slider.scrollLeft = scrollLeft - walkX;
            slider.scrollTop = scrollTop - walkY;
        }

    };
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [hover, setHover] = useState(false);
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[40px] cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onOpen}>

                <div className="p-[40px] border-b-white border-b-[4px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Points to Benefit Redemption</h2>
                        <div className="rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" style={{ backgroundColor: hover ? '#FF5B5B' : 'white' }} >
                            <img src={hover ? "/images/arrow-outward-white.png" : "/images/arrow-outward.png"} />
                        </div>
                    </div>
                </div>
                <div className="p-[20px]">
                    <img src={"/images/aia/points-to-benefit-small.png"} />
                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" classNames={{ closeButton: 'mt-[8px]' }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-medium border-b-[1px] border-b-[#E3E3E3]">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Journey Map</p>
                            </ModalHeader>
                            <ModalBody className="p-[0px]">
                                <div className="bg-[#F4F4F4]">
                                    <div ref={scrollRef} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onMouseMove={onMouseMove} className="h-[650px] p-[32px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        <img className="max-w-none" src={"/images/journey-map.png"} width={"2100px"} />
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>

    )
}

type HmwSolutionComponentProps = {
    problem: string,
    solution: string,
    video: string
}

const HmwSoltuionComponent: FC<HmwSolutionComponentProps> = ({ problem, solution, video }) => {
    const [showPlayBtn, setShowPlayBtn] = useState(true)
    const [play, setPlay] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null)
    const playPause = () => {
        if (play) {
            videoRef.current?.pause()
        } else {
            videoRef.current?.play()
        }
        setPlay((prev) => !prev)
    }
    return (
        <div>
            <div className="w-[100%] rounded-[24px] bg-white p-[32px] ">
                <ContentDivider isFull={true} />
                <p className={`text-[${Colors.title}] text-[${FontSizes.small}]`}>
                    Problems (HMW)
                </p>
                <br />
                <ContentList>{problem}</ContentList>
                <br />
                <p className={`text-[${Colors.title}] text-[${FontSizes.small}]`}>
                    Solution Idea
                </p>
                <br />
                <ContentList>{solution}</ContentList>
            </div>
            <div className="w-[100%] rounded-[24px] bg-white p-[32px] mt-[20px]">
                <div className="flex gap-2 items-center">
                    <img src={"/images/multi-star.png"} width={"14px"} height={"14px"} />
                    <p className={`text-[${Colors.title}] text-[${FontSizes.small}]`}>
                        UI Solution
                    </p>
                </div>
                <div className="pt-[20px]">
                    <div className="relative" onMouseEnter={() => setShowPlayBtn(true)} onMouseLeave={() => setShowPlayBtn(false)}>
                        <div className="absolute flex justify-center items-center w-[100%] h-[100%] z-[10]">
                            {
                                showPlayBtn ?
                                    // <button className="cursor-pointer" onClick={() => playPause()}>
                                    //     <img src={"/images/play.png"} width={"90px"} height={"90px"} />
                                    // </button>
                                    <PlayPauseButtonComponent play={play} handleClick={() => playPause()} />
                                    :
                                    <></>
                            }

                        </div>
                        <div className="absoute z-[5]">
                            <video ref={videoRef} src={video} controls={false} className="rounded-[24px]" height={"620px"} />
                        </div>
                    </div>


                </div>
            </div>
            <div className="w-[100%] rounded-[24px] bg-white p-[32px] mt-[20px]">
                <ContentDivider isFull={true} />
                <div className="flex justify-between items-center w-[100%]">
                    <p className={`text-[${Colors.title}] text-[${FontSizes.small}]`}>
                        UI Before Revamp
                    </p>
                    <div className="flex gap-2 items-center">
                        <p className={`text-[${Colors.title}] text-[${FontSizes.small}]`}>
                            compare with previous version
                        </p>
                        <img src={"/images/arrow-outward.png"} width={"10px"} />
                    </div>

                </div>

            </div>

        </div>


    )
}


type ContentSectionWrapperProps = {
    children: React.ReactNode
}
const ContentSectionWrapper: FC<ContentSectionWrapperProps> = ({ children }) => {
    return (
        <div className="w-[80%] ml-[20%] flow-root">
            {children}
        </div>
    )

}

type TagProps = {
    title: string
}

const Tag: FC<TagProps> = ({ title }) => {
    return (
        <div className="px-[15px] py-[5px] bg-[#F4F4F4] flex items-center justify-center rounded tracking-wider">
            <p className="text-[16px] text-[#777777]">
                {title}
            </p>
        </div>
    )
}

type ImporvementPorps = {
    title: string,
    icon: string,
    improvedNumber: string,
    improvedUnit: string,
    improvedFrom: string,
    improvedPercent: string
}

const Improvement: FC<ImporvementPorps> = ({ title, icon, improvedNumber, improvedUnit, improvedFrom, improvedPercent }) => {
    return (
        <div className=" bg-[#F4F4F4] rounded-[12px] py-[28px] px-[30px]">
            <div className="flex gap-4 justify-start items-center">
                <img src={icon} width={'20px'} height={'18px'} />
                <p className={`text-[${Colors.content}] text-[${FontSizes.small}]`}>{title}</p>
            </div>
            <div className="flex pt-[24px] items-end gap-3">
                <p className="text-[48px] tracking-widest font-thin">{improvedNumber}</p>
                <p className="text-[20px] tracking-widest font-thin mb-[12px]">{improvedUnit}</p>
            </div>
            <div className="pt-[60px] flex gap-4 items-center">
                <p className={`text-[${Colors.content}] text-[${FontSizes.small}]`}>
                    {improvedFrom}
                </p>
                <div className="bg-[#D9F2ED] w-[120px] h-[37px] flex justify-center items-center rounded-[20px]">
                    <p className="text-[#111111] text-[16px]">
                        {improvedPercent}
                    </p>
                </div>
            </div>
        </div>
    )
}

type CustomerExperienceVideoProps = {
    link: string,
    icon: string,
    title: string,
    content: string,
    customer: string
}
const CustomerExperienceVideo: FC<CustomerExperienceVideoProps> = ({ link, icon, title, content, customer }) => {
    return (
        <div className="w-[100%] lg:w-[48%] border-[#E3E3E3] border-[1px] rounded-[12px]">
            <iframe width="100%" height="300" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div className="p-[43px]">
                <div className="flex items-center gap-5">
                    <img src={icon} width={'24px'} height={'24px'} />
                    <h2 className={`text-[${Colors.content}] text-[${FontSizes.medium}] font-semibold tracking-wider`}>{title}</h2>

                </div>
                <p className={`text-[${Colors.title}] text-[${FontSizes.medium}] pt-[45px]`}>
                    {content}
                </p>
                <p className={`text-[${Colors.content}] text-[${FontSizes.small}] pt-[45px]`}>
                    {customer}
                </p>
            </div>
        </div>
    )
}

type NavigationProps = {
    text: string,
    isActive?: boolean
    handleClick: () => void
}
const Navigation: FC<NavigationProps> = ({ text, isActive, handleClick }) => {
    return (
        <div className="pb-[20px] cursor-pointer" onClick={handleClick}>
            {isActive ?
                <p className={`text-[${FontSizes.small}] text-[#111111] font-bold`}>{text}</p>
                :
                <p className={`text-[${FontSizes.small}] text-[#8F969D] `}>{text}</p>}
        </div>

    )
}

type TitleProps = {
    text: string
}
const Title: FC<TitleProps> = ({ text }) => {
    return (
        <h2 className={`text-[${FontSizes.medium}] text-[${Colors.title}] tracking-wider pb-[40px]`} style={{ fontVariant: 'small-caps' }}>{text}</h2>
    )
}

type ContentParagraphProps = {
    children: React.ReactNode
}
const ContentParagraph: FC<ContentParagraphProps> = ({ children }) => {
    return (
        <p className={`text-[${FontSizes.small}] text-[${Colors.content}] pb-[20px] !tracking-wider font-medium`}>{children}</p>
    )
}

type ContentListProps = {
    children: React.ReactNode
    fontSize?: string,
    lineHeight?: string
}
const ContentList: FC<ContentListProps> = ({ children, fontSize, lineHeight }) => {
    return (
        <div className="pl-[20px]">
            <li style={{ fontSize: fontSize || '', color: '#777777', marginBottom: lineHeight || '' }}><ContentParagraph>{children}</ContentParagraph></li>
        </div>
    )
}

type ContentContainerProps = {
    children: React.ReactNode,
    id?: string,
    py?: string,
    isFull?: boolean,
    pb?: string,
}

const ContentContainer: FC<ContentContainerProps> = ({ children, id, isFull, py, pb }) => {
    return (
        <>
            {isFull ?
                <div id={id} className="float-right w-[100%]">
                    <div className={`w-[100%] flow-root`} style={{ paddingTop: py ? py : "120px", paddingBottom: pb ? pb : py ? py : "120px" }}>
                        {children}
                    </div>
                </div>
                :
                <div id={id} className="float-right">
                    <div className={`w-[700px]`} style={{ paddingTop: py ? py : "120px", paddingBottom: pb ? pb : py ? py : "120px" }} >
                        {children}
                    </div>
                </div>
            }
        </>

    )
}


type ContentDividerProps = {
    isFull?: boolean
}
const ContentDivider: FC<ContentDividerProps> = ({ isFull }) => {
    return (
        isFull ?
            <div className="float-right flow-root w-[100%]">
                <div className="w-[100%]" >
                    <Divider />
                </div>
            </div>
            :
            <div className="float-right">
                <div className="w-[700px]" >
                    <Divider />
                </div>
            </div>
    )
}

type BusinessProblemCardProps = {
    icon: string,
    text: string
}
const BusinessProblemCard: FC<BusinessProblemCardProps> = ({ icon, text }) => {
    return (
        <div className="p-[24px] w-[220px] h-[185px] bg-[#F4F4F4] rounded-[16px] flex flex-col justify-between">
            <img src={icon} width={"40px"} height={"40px"} />
            <p className="font-semibold">{text}</p>
        </div>
    )
}

type ExperienceRowProps = {
    labelChildren: React.ReactNode,
    valueChildren: React.ReactNode
}
const ExperienceRow: FC<ExperienceRowProps> = ({ labelChildren, valueChildren }) => {
    return (
        <div className="py-[15px] border-t-[1px] border-t-[#D0D3D6] flex">
            <div className="w-[50%]">
                {labelChildren}
            </div>
            <div className="w-[50%]">
                {valueChildren}
            </div>
        </div>
    )
}

type HideableComponentProps = {
    defaultHide?: boolean,
    title?: string,
    children?: React.ReactNode,
    fullWidhtChildren?: React.ReactNode
}
const HideableComponent: FC<HideableComponentProps> = ({ defaultHide, title, children, fullWidhtChildren }) => {
    const [hide, setHide] = useState<boolean>(defaultHide ? defaultHide : true);
    return (
        <>
            <ContentContainer py="0px" pb="60px">
                <div className="flex justify-between items-center cursor-pointer pt-[60px]" onClick={() => setHide(!hide)}>
                    <h2 className={`text-[${FontSizes.medium}] text-[${Colors.title}] tracking-wider`}>{title}</h2>
                    <img className="cursor-pointer" src={hide ? '/images/arrow-downward.png' : '/images/arrow-upward.png'} width={"20px"} height={"20px"} onClick={() => setHide(!hide)} />
                </div>
                {
                    hide ?
                        <></>
                        :
                        children
                }
            </ContentContainer>
            {
                hide ?
                    <></>
                    :
                    <ContentContainer isFull={true} py="0px" pb="75px">
                        {fullWidhtChildren}
                    </ContentContainer>
            }

        </>


    )
}

type SliderFrameComponentProps = {
    width: string,
    height?: string,
    title: string,
    numOfSlides: string,
    children: React.ReactNode
}

const SliderFrameComponent: FC<SliderFrameComponentProps> = ({ width, height, title, numOfSlides, children }) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const sliderRef = useRef<Slider>(null);
    return (
        <div style={{ width: width, height: height, backgroundColor: '#F4F4F4' }} className="p-[24px] rounded-[24px]">
            <div className="flex justify-between items-center p-[20px] pb-[30px]">
                <div className="flex justify-start items-center gap-3">
                    <p className={`text-[${Colors.content}] text-[${FontSizes.medium}]`}>{title} </p>
                    <p className={`text-[${Colors.title}] text-[${FontSizes.small}]`}><span className={`text-[${FontSizes.medium}]`}>{currentIndex} </span> of {numOfSlides}</p>
                </div>
                <div className="flex justify-end items-center gap-3">
                    <button className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center border-[1px] border-[#E3E3E3] cursor-pointer" onClick={() => sliderRef.current?.slickPrev()}>
                        <img src={"/images/left-arrow.png"} width={"18px"} />
                    </button>
                    <button className="w-[137px] h-[56px] rounded-[32px] bg-[#FF5B5B] flex items-cetner justify-center border-[1px] border-[#E3E3E3] cursor-pointer" onClick={() => sliderRef.current?.slickNext()}>
                        <div className="flex items-center justify-center gap-3">
                            <p className="text-[20px] text-white">Next</p>
                            <img src={"/images/right-arrow.png"} width={"18px"} height={"18px"} />
                        </div>

                    </button>
                </div>
            </div>
            <Slider {...sliderFrameSetting} ref={sliderRef} afterChange={(index) => setCurrentIndex(index + 1)}>
                {children}
            </Slider>
        </div>
    )
}

type PlayPauseButtonComponentProps = {
    play: boolean,
    handleClick: () => void
}

const PlayPauseButtonComponent: FC<PlayPauseButtonComponentProps> = ({ play, handleClick }) => {
    return (
        <div className={`${styles.glassContainer} w-[90px] h-[90px] rounded-full text-white justify-center items-center cursor-pointer`} style={{ zIndex: 99 }} onClick={handleClick}>
            <img src={play ? '/icons/pause.svg' : '/icons/play.svg'} className='w-[32px] h-[32px]' style={{ marginLeft: play ? '0px' : '5px' }} />
        </div>
    )
}

type TickTextComponentProps = {
    text: string
}
const TickTextComponent: FC<TickTextComponentProps> = ({ text }) => {
    return (
        <div className="flex gap-3 items-center">
            <img src={"/images/tick-circle.png"} width={"20px"} />
            <p className={`text-[${Colors.content}] text-[${FontSizes.small}]`}>{text}</p>
        </div>
    )
}