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
        title: 'RESEARCHES',
        id: 'researches',
    },
    {
        title: 'PROBLEM DEFINE',
        id: 'problemDefine',
    },
    {
        title: 'IDEATION',
        id: 'ideation',
    },
    {
        title: 'FINAL SOLUTION',
        id: 'finalSolution',
    },
    {
        title: 'CHALLENGE',
        id: 'challenge',
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

export default function EsgCalculator() {
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
                    REVAMPING ESG CALCULATOR
                </h1>
                <div className="md:flex gap-3 pt-[10px]">
                    <Tag title="Product Design" />
                    <Tag title="UI Interaction" />
                    <Tag title="Sketches" />
                    <Tag title="Digital Interaction" />
                </div>
            </div>
            <div id="bannerSection">
                <video className="w-[100vw]" muted playsInline loop autoPlay>
                    <source src="/images/esg-calculator-banner.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="px-[100px]" id="contentSection">
                <SliderWrapper>
                    <Slider {...achieveSliderSetting}>
                        <div id="achievementSection" className="pt-[120px] pb-[120px]">
                            <div className="pb-[50px] flex justify-center items-center">
                                <img src={'/images/gold-achievement.png'} />
                            </div>
                            <div className="lg:flex gap-4 justify-between" id="improvementSection">
                                <Improvement title="Avg. Time On Each Section" icon="/images/time.png" improvedNumber="19" improvedUnit="min" improvedFrom="From 36 min" improvedPercent="39% faster" />
                                <Improvement title="Task Completion Rate" icon="/images/checked.png" improvedNumber="90" improvedUnit="%" improvedFrom="Grow from 71%" improvedPercent="+28%" />
                                <Improvement title="Assistance Rate" icon="/images/headphone.png" improvedNumber="11" improvedUnit="%" improvedFrom="From 39%" improvedPercent="-28%" />
                                <Improvement title="SUS Scores" icon="/images/meter.png" improvedNumber="82" improvedUnit="/100" improvedFrom="From 54" improvedPercent="+28" />
                            </div>

                        </div>
                        <div id="achievementSection" className="pt-[120px] pb-[120px]">
                            <div className="pb-[50px] flex justify-center items-center">
                                <img src={'/images/silver-achievement.png'} />
                            </div>
                            <div className="lg:flex gap-4 justify-between" id="improvementSection">
                                <Improvement title="Data Error Rate" icon="/images/error.png" improvedNumber="12" improvedUnit="%" improvedFrom="From 40%" improvedPercent="28% drop" />
                                <Improvement title="Range Click Level" icon="/images/cursor.png" improvedNumber="25" improvedUnit="%" improvedFrom="From 64%" improvedPercent="39% drop" />
                                <Improvement title="Framework Understanding" icon="/images/framework.png" improvedNumber="77" improvedUnit="%" improvedFrom="From 52%" improvedPercent="+25% raise" />
                                <Improvement title="Confidence In Results" icon="/images/star.png" improvedNumber="87" improvedUnit="%" improvedFrom="From 64%" improvedPercent="+23% raise" />
                            </div>

                        </div>
                        <div id="achievementSection" className="pt-[120px] pb-[120px]">
                            <div className="pb-[50px] flex justify-center items-center">
                                <img src={'/images/bronze-achievement.png'} />
                            </div>
                            <div className="lg:flex gap-4 justify-between" id="improvementSection">
                                <Improvement title="Drop-off Rate" icon="/images/dropoff.png" improvedNumber="15" improvedUnit="%" improvedFrom="From 43%" improvedPercent="-28%" />
                                <Improvement title="Retention/Reuse Intention" icon="/images/rotate.png" improvedNumber="29" improvedUnit="%" improvedFrom="From 68%" improvedPercent="+21% raise" />
                                <Improvement title="Scroll Depth" icon="/images/scroll.png" improvedNumber="<28" improvedUnit="%" improvedFrom="From 58%" improvedPercent="-30%" />
                                <Improvement title="Avg. Satisfaction Level" icon="/images/level.png" improvedNumber="83" improvedUnit="%" improvedFrom="From 55%" improvedPercent="+28 raise" />
                            </div>

                        </div>
                    </Slider>
                </SliderWrapper>


                <Divider />
                <div id="customerExperienceSection" className="pt-[120px] pb-[120px]">
                    <h2 className={`text-[${FontSizes.medium}]`}>HOW OUR CUSTOMERS EXPERIENCE THE SOLUTION -</h2>
                    <div className="pt-[40px] lg:flex justify-between">
                        <CustomerExperienceVideo link="https://www.youtube.com/embed/uxcfLEHojvM?si=otmTcJiKpzG2-A8N" icon="/images/razor.png" title="Razer Inc."
                            content="“...helping us understand the questionnaire and
                                    also helped to make the whole user 
                                    experience more palatable...”"
                            customer="Kenneth Ng, Global Sustainability Lead" />
                        <CustomerExperienceVideo link="https://www.youtube.com/embed/eXsZdLYeK4s?si=6Zqv2fAVm9AuRE0c" icon="/images/dp.png" title="Durapower Group"
                            content="“...Calculator improves the accuracy and credibility
                                    of emissions tracking across our value chain,as
                                    it is built in alignment...”"
                            customer="Lay See Tan, Group CFO and Sustainability Officer" />
                    </div>
                </div>
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
                        <div className="mt-[-550px]" ref={(nav) => { if (nav) { navRefs.current[0] = nav } }}>
                            <ContentContainer>
                                <Title text="Introduction" />
                                <ContentParagraph>ESGpedia is a company I joined in December 2023, and the ESG Calculator was the first project I was responsible for delivering with improved results. This tool evaluates a company’s </ContentParagraph>
                                <ContentList><span className="text-[black]">Environmental</span> impact (such as greenhouse gas emissions and resource use)</ContentList>
                                <ContentList><span className="text-[black]">Social</span> practices toward employees, customers, and communities, and</ContentList>
                                <ContentList><span className="text-[black]">Governance</span> standards, including transparency, compliance, ethics, and accountability.</ContentList>

                            </ContentContainer>
                            <ContentDivider />
                            <ContentContainer>
                                <Title text="Business problems (or) product north stars" />
                                <ContentParagraph>Above are the early signals that something wasn’t working as expected. These revealed three core business problems that needed to be addressed —</ContentParagraph>
                                <ContentParagraph><span className="text-[black]">Ease of use</span> - High support requests increased operational costs and reduced user self-sufficiency.</ContentParagraph>
                                <ContentParagraph><span className="text-[black]">Low confidence in data accuracy</span> - Users doubted the reliability of the results, weakening the product’s core value proposition and sales potential.</ContentParagraph>
                                <ContentParagraph><span className="text-[black]">Drop-offs and Poor retention</span> - Friction during data input and framework selection led to abandonment, limiting adoption, repeat usage, and overall business impact.</ContentParagraph>
                                <div className="flex gap-4">
                                    <BusinessProblemCard icon="/images/cake.png" text="1. Ease of use" />
                                    <BusinessProblemCard icon="/images/file_box.png" text="2. Low confidence in data accuracy" />
                                    <BusinessProblemCard icon="/images/boomerang.png" text="3. Drop-offs and poor retention" />
                                </div>
                                <div className="pt-[120px]" id="expTableSection">
                                    <ExperienceRow labelChildren={<p className={`text-[${Colors.content}]`}>Year</p>} valueChildren={<p className={`text-[${Colors.content}]`}>2023</p>} />
                                    <ExperienceRow labelChildren={<p className={`text-[${Colors.content}]`}>Timeline</p>} valueChildren={<p className={`text-[${Colors.content}]`}>12 weeks</p>} />
                                    <ExperienceRow labelChildren={<p className={`text-[${Colors.content}]`}>My Role</p>} valueChildren={<p className={`text-[${Colors.title}]`}>Lead Product Designer</p>} />
                                    <ExperienceRow labelChildren={<p className={`text-[${Colors.content}]`}>Contributors</p>}
                                        valueChildren={<><p className={`text-[${Colors.content}] pb-[10px]`}>VP of Product</p>
                                            <p className={`text-[${Colors.content}] pb-[10px]`}>Chief Technology Office</p>
                                            <p className={`text-[${Colors.content}] pb-[10px]`}>Technical Product Manager</p>
                                            <p className={`text-[${Colors.content}] pb-[10px]`}>Business and Sales Team</p>
                                            <p className={`text-[${Colors.content}] pb-[10px]`}>Data Analyst</p>
                                            <p className={`text-[${Colors.content}] pb-[10px]`}>Backend Team members</p>
                                            <p className={`text-[${Colors.content}] pb-[10px]`}>Frontend Engineering Team</p>
                                        </>} />
                                </div>

                            </ContentContainer>
                        </div>
                        <ContentDivider />
                    </ContentSectionWrapper>



                    <ContentSectionWrapper>
                        <div ref={(nav) => { if (nav) { navRefs.current[1] = nav } }}>
                            <ContentContainer>
                                <Title text="Overview" />
                                <ContentParagraph>First, we step back to understand the broader context. This section provides background on ESGpedia, explains what ESG means in practice, and outlines how the ESG Calculator fits into the overall ecosystem. It also clarifies the project scope, constraints, stakeholders involved, and my role in leading the revamp end to end.</ContentParagraph>
                            </ContentContainer>
                            <ContentDivider />

                            <HideableComponent title="What is ESG?"
                                children={
                                    <div className="pt-[40px]">
                                        <ContentParagraph>ESG stands for Environmental, Social, and Governance, a set of standards used to measure a company's impact on the environment and society, and how transparently it is managed.</ContentParagraph>
                                        <ContentParagraph>By supporting Singapore’s Green Plan 2030, ESG builds trust with customers and partners, boosts innovation, and ensures long-term success in a world that values sustainability.</ContentParagraph>
                                    </div>
                                }
                                fullWidhtChildren={
                                    <div className="mt-[-15px] float-right">
                                        <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between">
                                            <div className="p-[25px]">
                                                <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}]`}>Environmental</h2>
                                                <p className={`text-[${Colors.content}] text-[${FontSizes.small}]`}>standards</p>
                                            </div>
                                            <div className="bg-white w-[70%] rounded-[24px] p-[25px]">
                                                <ContentList lineHeight="10px"><span className="text-black">Carbon emissions and energy consumption</span></ContentList>
                                                <ContentList lineHeight="10px"><span className="text-black">Waste management and pollution</span></ContentList>
                                                <ContentList lineHeight="10px"><span className="text-black">Use of natural resources and biodiversity</span></ContentList>
                                            </div>
                                        </div>

                                        <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between">
                                            <div className="p-[25px]">
                                                <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}]`}>Social</h2>
                                                <p className={`text-[${Colors.content}] text-[${FontSizes.small}]`}>standards</p>
                                            </div>
                                            <div className="bg-white w-[70%] rounded-[24px] p-[25px]">
                                                <ContentList lineHeight="10px"><span className="text-black">Labor practices, diversity, and inclusion</span></ContentList>
                                                <ContentList lineHeight="10px"><span className="text-black">Human rights and supply chain management</span></ContentList>
                                                <ContentList lineHeight="10px"><span className="text-black">Community relations and customer satisfaction</span></ContentList>
                                            </div>
                                        </div>

                                        <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between">
                                            <div className="p-[25px]">
                                                <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}]`}>Governance</h2>
                                                <p className={`text-[${Colors.content}] text-[${FontSizes.small}]`}>standards</p>
                                            </div>
                                            <div className="bg-white w-[70%] rounded-[24px] p-[25px]">
                                                <ContentList lineHeight="10px"><span className="text-black">Board composition and structure</span></ContentList>
                                                <ContentList lineHeight="10px"><span className="text-black">Executive compensation</span></ContentList>
                                                <ContentList lineHeight="10px"><span className="text-black">Internal controls and audits</span></ContentList>
                                                <ContentList lineHeight="10px"><span className="text-black">Business ethics and transparency</span></ContentList>
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                            <ContentDivider />
                            <HideableComponent title="Who is ESGpedia?"
                                children={
                                    <div className="pt-[40px]">
                                        <ContentParagraph>ESGpedia is a Singapore-headquartered ESG data and technology company that provides a one-stop digital platform designed to help businesses, SMEs, and financial institutions across the Asia-Pacific region measure, manage, and report on Environmental, Social, and Governance (ESG) performance.</ContentParagraph>
                                        <ContentParagraph>The platform aggregates millions of sustainability data points and offers end-to-end solutions such as carbon accounting, ESG reporting, supply chain engagement, and sustainable finance tools, enabling organizations to comply with global and local standards, improve transparency, and support initiatives like the Asia-Pacific Single Accesspoint for ESG Data (SAFE) and the ESCAP Sustainable Business Network (ESBN) Asia-Pacific Green Deal.</ContentParagraph>
                                    </div>
                                }
                                fullWidhtChildren={
                                    <div className="mt-[-15px] float-right">
                                        <div className="w-[800px] mb-[25px] lg:flex justify-between">
                                            <div className="w-[300px] h-[235px] p-[25px] rounded-[32px] bg-[#F4F4F4] p-[16px]">
                                                <div className="w-[100%] h-[100%] bg-white rounded-[28px] flex justify-center items-center">
                                                    <img src={"/images/esgpedia-logo.png"} />
                                                </div>
                                            </div>
                                            <div className="w-[470px] h-[235px]">
                                                <img src={"/images/esgpedia-cover.jpg"} className="w-[470px] h-[235px] rounded-[24px]" />
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                            <ContentDivider />
                            <HideableComponent title="How does ESG calculator work?"
                                children={
                                    <div className="pt-[40px]">
                                        <ContentParagraph>ESGpedia’s ESG Calculator is a built-in, standards-aligned tool that helps businesses and SMEs quantify their greenhouse gas (GHG) emissions and related sustainability metrics by converting operational and supply chain data into Scope 1, 2, and 3 emissions in accordance with the GHG Protocol and ISO 14064 methodologies. </ContentParagraph>
                                        <ContentParagraph>The calculator uses an extensive database of localised emission factors and detailed input categories (such as fuel use, electricity consumption, travel, materials, and value-chain activities) to generate credible, automated carbon footprint results that can be tracked, analysed, and reported within the broader ESGpedia platform for compliance with international and local reporting requirements. </ContentParagraph>
                                    </div>
                                }
                                fullWidhtChildren={
                                    <div className="mt-[-15px] float-right">
                                        <img src={'/images/old-vs-new-ui.png'} width={"980px"} height={"850px"} />
                                    </div>
                                }
                            />
                            <ContentDivider />
                            <ContentContainer>
                                <div className="flex gap-4 items-center">
                                    <img src={"/images/multi-star.png"} width={"24px"} height={"24px"} className="mt-[-30px]" />
                                    <Title text="Overview - Conclusion" />
                                </div>

                                <ContentParagraph>This case study documents the full revamp of ESGpedia’s ESG Calculator, focused on improving accuracy, usability, and business outcomes.</ContentParagraph>
                                <ContentParagraph>Through this project, I introduced a Human-Centered Design (HCD) process to the company, establishing a habit of user interviews and usability testing rather than relying on assumptions. This approach ensured that time and resources were invested in solving the right problems and delivering meaningful, measurable results when the product was launched. Read on to explore my approach, the key decisions I made, and the outcomes achieved by the end of the project.</ContentParagraph>
                            </ContentContainer>
                        </div>
                        <ContentContainer py={"0px"} isFull={true}>
                            <ContentDivider isFull={true} />
                        </ContentContainer>
                    </ContentSectionWrapper>




                    <ContentSectionWrapper>
                        <div ref={(nav) => { if (nav) { navRefs.current[2] = nav } }}>
                            <ContentContainer>
                                <Title text="Researches" />
                                <ContentParagraph>With the context established, let’s move into researches. This section tells the story of how we listened to users and observed real behaviors through qualitative interviews, surveys, usability testing, diary studies, and Microsoft Clarity. Together, these methods helped uncover <span className="text-black">the frustrations, doubts, and hidden behaviors behind the numbers.</span></ContentParagraph>
                            </ContentContainer>
                            <ContentDivider />
                            <HideableComponent title="Qualitative and Quantitative Research" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>First what i did is prepare an interview question set for our current customers and structure how product team would consolidate the interview session for ESG Calculator. Also, a set of survey questions to follow up.  </ContentParagraph>
                                    <ContentParagraph>Furthermore, I communicate closely with the sale team to tag along at their meeting of potential customers and observe the business nature. And whenever I got a chance, I politely ask for customer time and have them answer my survey questions. </ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[-15px] float-right">
                                        <QualityQuestionSetsComponent />
                                        <QuantityQuestionSetsComponent />
                                    </div>
                                } />

                            <ContentDivider />
                            <HideableComponent title="Usability testing" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>After preparing the Qualitative and Quantitative question sets, we now have to learn the real pain points of our calculator by doing the usability testing.</ContentParagraph>
                                    <ContentParagraph>Usability testing helps us observe how users actually interact with the ESG calculator — revealing hidden friction, confusion, or workflow issues that users might not articulate verbally.</ContentParagraph>
                                    <ContentParagraph>Since the feature was already available in our live app, we conducted the usability test using the real product. Below is a sample of our initial (pre-revamp) version, only for case study viewers to have a glimpse. </ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[-15px]">
                                        <div className="float-right">
                                            <div className="w-[980px] h-[700px] bg-[#F4F4F4] p-[65px] rounded-[24px]">
                                                <div className="w-[100%] h-[100%] border-[15px] rounded-[24px] border-black overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                                    <img src={"/images/usability-website.png"} width={"100%"} />
                                                </div>
                                            </div>
                                        </div>

                                        <ContentContainer py="80px">
                                            <ContentParagraph><ContentParagraph>Below is the testing plan, we used along side the live usabilitiy testing session. Participants will perform key tasks using the real product to identify any usability issues, workflow friction, or unclear interfaces. </ContentParagraph></ContentParagraph>
                                        </ContentContainer>
                                        <div className="float-right">
                                            <UsabilityTestingPlanComponent />
                                        </div>

                                    </div>
                                } />

                            <ContentDivider />
                            <HideableComponent title="Diary Studies" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>Since diary studies require consistent follow-ups, we anticipated that our clients—who already face the complex process of calculating ESG metrics—might find them intrusive or time-consuming.</ContentParagraph>
                                    <ContentParagraph>To balance this, we decided to conduct the diary study internally by involving team members from different departments. This approach allows us to simulate real user scenarios, gather authentic insights, and test the process flow—without placing extra burden on our customers.</ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right">
                                        <StudyPlanComponent />
                                    </div>

                                } />

                            <ContentDivider />
                            <HideableComponent title="Microsoft Clarity as Validation layer" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>And lastly, to validate the usability findings from our qualitative studies, we used Microsoft Clarity to observe real user behavior within the live ESG Calculator. We mainly used Microsoft Clarity as a validation layer — to support and cross-check the insights gathered from our earlier research.</ContentParagraph>
                                    <ContentParagraph>Our goal was to identify engagement trends, task duration, and potential drop-off points throughout the calculator flow. These insights helped confirm whether the usability issues reported by users were also reflected in their actual behavior on the platform.</ContentParagraph>
                                    <p className="p-[10px] text-[16px] font-normal">
                                        ''  By bridging what users said with what they actually did, we confirmed the
                                        core usability pain points and ensured our next design decisions were
                                        grounded in real user behavior ''
                                    </p>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right  mb-[45px]">
                                        <img src={"/images/microsoft-clarity.png"} width={"800px"} />
                                    </div>

                                } />

                            <ContentDivider />

                            <ContentContainer isFull={true}>
                                <ContentContainer py="0px">
                                    <div className="flex gap-4 items-center">
                                        <img src={"/images/multi-star.png"} width={"24px"} height={"24px"} className="mt-[-30px]" />
                                        <Title text="Conclusion of Research Findings" />
                                    </div>

                                    <ContentParagraph>To comprehensively assess the usability and effectiveness of the ESG Calculator, we triangulated user feedback, behavioral analytics, and real task performance across multiple research methods.</ContentParagraph>
                                    <ContentParagraph>Our evaluation focused on two key dimensions — Usability Metrics, which measure how smoothly users interact with the tool, and Effectiveness Metrics, which reflect how well the product delivers value and drives impact for both users and the business.</ContentParagraph>
                                </ContentContainer>
                                <div className="mt-[15px] float-right">
                                    <img src={"/images/usability-metrics.png"} width={"800px"} />
                                </div>
                                <ContentContainer py="60px">
                                    <ContentParagraph>The 71% task completion shows it delivers core functionality, and users can eventually succeed (with help), which is a solid foundation for an ESG tool targeting non-experts like small suppliers.</ContentParagraph>
                                    <ContentParagraph>Low SUS (59), high assistance (68%) and frustration (above 64%), plus 58%
                                        drop-offs, indicate it's frustrating and inefficient. This could lead to low user engagement, higher support costs, increased errors (29%), and poor word-of-mouth among SMEs. At 36 minutes average time, it's not scalable for busy users.</ContentParagraph>
                                </ContentContainer>
                                <div className="mt-[15px] float-right">
                                    <img src={"/images/impact-metrics.png"} width={"800px"} />
                                </div>
                                <ContentContainer py="60px">
                                    <ContentParagraph>The business impact metrics reveal a tool with clear potential but critical trust and retention hurdles: only 58% of users trust the final output due to opaque formulas and input gaps, while 33% abandon the process—mostly at the complex Pillar 2 calculations.</ContentParagraph>
                                    <ContentParagraph>Framework clarity stands at just 42%, with existing tooltips and examples failing to help, dragging average satisfaction to 55% amid perceptions of complexity and time burden. Yet, a strong 68% of users express intent to return if efficiency, automation, and clarity are meaningfully improved—signaling that while the feature currently undermines confidence and completion, targeted fixes could unlock high reuse and long-term business value.</ContentParagraph>
                                </ContentContainer>
                            </ContentContainer>
                            <ContentContainer py={"0px"} isFull={true}>
                                <ContentDivider isFull={true} />
                            </ContentContainer>
                        </div>
                    </ContentSectionWrapper>

                    <ContentSectionWrapper>
                        <div ref={(nav) => { if (nav) { navRefs.current[3] = nav } }}>
                            <ContentContainer>
                                <Title text="Problem Define" />
                                <ContentParagraph>After gathering insights, we synthesized what we learned. This section shows how scattered findings were transformed into clear problem statements using user personas, stories, affinity mapping, empathy maps, and customer journey mapping. It highlights the key usability, trust, and retention challenges that mattered most to both users and the business.</ContentParagraph>
                            </ContentContainer>
                            <ContentDivider />
                            <HideableComponent title="User Story"
                                children={
                                    <div className="pt-[40px]">
                                        <ContentParagraph>Managing ESG data is complex—even for small companies. Tracking electricity, water, waste, and emissions within a single organization is already challenging. That complexity multiplies for large companies that rely on hundreds of suppliers.</ContentParagraph>
                                        <div>
                                            <img src={"/images/user-story-relation.png"} />
                                        </div>
                                        <ContentParagraph>Many local suppliers and SMEs are unfamiliar with ESG reporting altogether and often track data in inconsistent ways—across spreadsheets, different formats, or even paper records. As a result, collecting and verifying data becomes slow and error-prone, with progress stalled by endless email follow-ups and manual clarification.</ContentParagraph>
                                    </div>
                                }
                                fullWidhtChildren={
                                    <div className="mt-[-15px] float-right">
                                        <img src={'/images/user-story-explain.png'} />
                                    </div>
                                }
                            />

                            <ContentDivider />
                            <HideableComponent title="User Persona"
                                children={
                                    <div className="pt-[40px]">
                                        <ContentParagraph>We didn't guess who our users were—we already knew two of them.</ContentParagraph>
                                        <ContentParagraph>ShengSiong and Razer both are our real customers and we met with their sustainability manager occasionally. We thought using them as our persona will greatly enhance our understanding of them and help validate their problems.</ContentParagraph>

                                    </div>
                                }
                                fullWidhtChildren={
                                    <div className="mt-[-15px] float-right">
                                        <PersonaOneComponent />
                                        <PersonaTwoComponent />
                                        <ContentContainer py="60px">
                                            <ContentParagraph>These personas helped us design with empathy and clarity. Instead of assuming all companies use ESG tools the same way, we could tailor our decisions to real needs — whether that meant simplifying the data input journey for beginners or optimizing framework mapping for advanced users. This approach ensured our redesign was grounded in real-world challenges, not just assumptions.</ContentParagraph>
                                        </ContentContainer>

                                    </div>
                                }
                            />

                            <ContentDivider />
                            <HideableComponent title="Affinity Mapping"
                                children={
                                    <div className="pt-[40px]">
                                        <ContentParagraph>After gathering a lot of research data and behavioral insights, we needed a structured way to make sense of it all. Affinity mapping was the perfect starting point for synthesis.</ContentParagraph>
                                        <ContentParagraph>In the first step, we placed every data point, quote, behavior, and metric as individual sticky notes without judging or filtering them.</ContentParagraph>
                                        <ContentParagraph>Color code by research method:</ContentParagraph>
                                        <ContentParagraph>🟪 Qualitative | 🟥 Survey | 🟦 Usability | 🟨 Diary | 🟩 Clarity</ContentParagraph>
                                    </div>
                                }
                                fullWidhtChildren={
                                    <div className="mt-[-15px]">
                                        <div className="float-right">
                                            <AffinityMapOneComponent />
                                        </div>

                                        <ContentContainer py="60px">
                                            <ContentParagraph>Then as a Step 2, we categorize the data by identifying patterns and similarities through iterative sorting, grouping related notes, across our diverse users, from beginner SMEs to advanced enterprises like Sheng Siong and Razer.</ContentParagraph>
                                            <ContentParagraph>The six main categories were emerged.</ContentParagraph>
                                            <div className="py-[20px]">
                                                <p>"</p>
                                                <div className="pl-[10px]">
                                                    <p className="leading-9">
                                                        a. Data accuracy, format and input frictions. <br />
                                                        b. Barriers Related to Terminology and Trust <br />
                                                        c. UI Challenges: Visual Hierarchy and Information Overload <br />
                                                        d. UX Challenges: Learning Curve, Onboarding Gaps, and Time Efficiency  <br />
                                                        e. Guidance, Help Resources, or Integrated Assistance <br />
                                                        f.  Suggestions for New Features or Direct User Requests &nbsp; &nbsp; "
                                                    </p>
                                                </div>
                                            </div>

                                            <ContentParagraph>Once clear themes emerged, we moved into Step 3 — conducting a dot-voting exercise with the team to identify which clusters represented the most critical user problems. This allowed us to prioritize the issues with the highest impact and frequency, ensuring that our efforts focused on what truly mattered to both users and the business.</ContentParagraph>
                                        </ContentContainer>

                                        <div className="mt-[-15px] float-right">
                                            <AffinityMapTwoComponent />
                                        </div>

                                    </div>
                                }
                            />

                            <ContentDivider />
                            <HideableComponent title="Empathy Map"
                                children={
                                    <div className="pt-[40px]">
                                        <ContentParagraph>Empathy mapping is a pivotal tool in human-centered design, particularly for complex domains like ESG reporting, where users range from novice SMEs to seasoned enterprises. This tool bridged raw data from affinity clusters (e.g., data friction, framework confusion) to a deeper understanding of what user struggles. </ContentParagraph>
                                        <ContentParagraph>To populate the empathy map quadrants, we drew directly from triangulated research data, starting with affinity-mapped notes which are already categorized. </ContentParagraph>
                                        <div className="flex gap-3 items-start pt-[10px]">
                                            <img src={"/images/ear.png"} width={"20px"} height={"25px"} />
                                            <ContentParagraph>
                                                <span className="text-black">What user "Hears"</span> - captured external influences like stakeholder demands for reliable data (e.g., only 27.3% gathered on time) and feedback on framework mismatches.
                                            </ContentParagraph>
                                        </div>
                                        <div className="flex gap-3 items-start pt-[10px]">
                                            <img src={"/images/eye.png"} width={"20px"} height={"25px"} />
                                            <ContentParagraph>
                                                <span className="text-black">What user "Sees"</span> - focused on observed behaviors via Clarity heatmaps and session recordings, such as rage clicks on help icons (64% frustration during uploads) and low scroll depth (58% drop-offs in Scope 2).
                                            </ContentParagraph>
                                        </div>
                                        <div className="flex gap-3 items-start pt-[10px]">
                                            <img src={"/images/brain.png"} width={"20px"} height={"25px"} />
                                            <ContentParagraph>
                                                <span className="text-black">What user "Thinks & Feels"</span> - delved into internal states, inferring anxiety from low confidence scores (58%) and overwhelm from diary entries about supplier verification.
                                            </ContentParagraph>
                                        </div>
                                        <div className="flex gap-3 items-start pt-[10px]">
                                            <img src={"/images/touch.png"} width={"20px"} height={"25px"} />
                                            <ContentParagraph>
                                                <span className="text-black">What user "Says & Does"</span> - compiled verbatim quotes and actions from interviews/usability tests, like "I need examples for Scope 3" or backtracking during inputs (29% error rate).
                                            </ContentParagraph>
                                        </div>
                                    </div>
                                }
                                fullWidhtChildren={
                                    <div className="mt-[-15px] float-right">
                                        <div className="float-right">
                                            <EmpathyMapComponent />
                                        </div>

                                        <ContentContainer py="60px">
                                            <ContentParagraph>Once the empathy map was complete, we synthesized recurring patterns across all quadrants to identify: Pains and Gains.</ContentParagraph>
                                            <div className="flex gap-3 items-start pt-[10px]">
                                                <img src={"/images/pains.png"} width={"20px"} height={"25px"} />
                                                <ContentParagraph>
                                                    <span className="text-black">Pains</span> - distilled frustrations (e.g., learning curves, 33% abandonment) and drove simplifications (tooltips, auto-conversions cutting errors, etc).
                                                </ContentParagraph>
                                            </div>
                                            <div className="flex gap-3 items-start pt-[10px]">
                                                <img src={"/images/gains.png"} width={"20px"} height={"25px"} />
                                                <ContentParagraph>
                                                    <span className="text-black">Gains</span> - inspired features (bulk imports, progress trackers), reducing drop-offs, boosting trust, and enabling scalable ESG compliance for stakeholders.
                                                </ContentParagraph>
                                            </div>
                                        </ContentContainer>
                                        <div className="float-right">
                                            <PainGainComponent />
                                        </div>
                                    </div>
                                }
                            />

                            <ContentDivider />
                            <HideableComponent title="Customer Journey"
                                children={
                                    <div className="pt-[40px]">
                                        <ContentParagraph>Customer journey mapping allowed us to deeply understand how sustainability managers and SMEs navigate the our Calculator. ESG workflows are inherently fragmented and data-heavy, visualizing the entire journey helped us see not just what users do, but where emotions shift, where confusion builds, and where friction accumulates across different touchpoints. </ContentParagraph>
                                        <ContentParagraph>The journey map became the bridge between raw research and actionable design decisions, giving us a holistic view of users’ real challenges across phases of the ESG reporting cycle.</ContentParagraph>

                                    </div>
                                }
                                fullWidhtChildren={
                                    <div className="mt-[-15px] float-right">
                                        <JourneyMapComponent />

                                    </div>
                                }
                            />
                            <ContentDivider />
                            <ContentContainer py="60px">
                                <div className="flex gap-4 items-center">
                                    <img src={"/images/multi-star.png"} width={"24px"} height={"24px"} className="mt-[-30px]" />
                                    <Title text="Conclusion of Problem Define or HMWs" />
                                </div>

                                <ContentParagraph>After all methods of above, we can say now that we know our customer along with their pain points throughout the whole journey. Before turning those pain points into business opportunities, we need to loudly address the brutal honest weak points or problems our current application is having. </ContentParagraph>
                                <ContentParagraph>This is where HMW method is used. We translated key pain points and opportunities identified in the customer journey into focused “How Might We” questions to guide solution ideation.</ContentParagraph>
                            </ContentContainer>
                            <ContentContainer py={"0px"} isFull={true}>
                                <ContentDivider isFull={true} />
                            </ContentContainer>
                        </div>
                    </ContentSectionWrapper>

                    <ContentSectionWrapper>
                        <div ref={(nav) => { if (nav) { navRefs.current[4] = nav } }}>
                            <ContentContainer>
                                <Title text="Ideation" />
                                <ContentParagraph>Once the problems were clearly defined, we shifted into exploration. This section walks through how we reframed challenges into opportunities using How Might We (HMW) statements, prioritized ideas, and explored multiple solution directions before converging on the most impactful concepts.</ContentParagraph>
                            </ContentContainer>
                            <ContentDivider />

                            <HideableComponent title="Prioritising the Problems" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>According to previous sections, we have 25 problems to solve to achieve our business goals. We need to align with our stakeholders to fully understand that our solutions are feasible and how much time and effort needed to tackle this improvements effectively. So that, our teams could build the right features at right time and avoid feature creep.</ContentParagraph>
                                    <ContentParagraph>So, I initially thought there were many methods to prioritize the features but later I found out that MOSCOW Method was the most relevant method for us.</ContentParagraph>
                                    <div className="flex gap-3 items-start pt-[10px]">
                                        <img src={"/images/cross.png"} width={"22px"} height={"26px"} />
                                        <ContentParagraph>
                                            <span className="text-black">RICE Method</span> - the first downside is we need to collect data again and also this method relies heavily on guessing which would result on assumptions again. Honestly, we don’t want to go back to research and guessing again in this later stage.
                                        </ContentParagraph>
                                    </div>
                                    <div className="flex gap-3 items-start pt-[10px]">
                                        <img src={"/images/cross.png"} width={"22px"} height={"26px"} />
                                        <ContentParagraph>
                                            <span className="text-black">Impact-Effort</span> - this looks pretty simple and useful method at first but then later we realized that we need to develop the features when our client Razer or Shengsiong requests when even if this method is suggesting it is low impact or high effort.
                                        </ContentParagraph>
                                    </div>
                                    <div className="flex gap-3 items-start pt-[10px]">
                                        <img src={"/images/tick.png"} width={"22px"} height={"26px"} />
                                        <div>
                                            <ContentParagraph>
                                                <span className="text-black">MOSCOW Method</span> - becomes the most convenient method for us. We used this method not only with our internal stakeholders but also with our precious clients to clear next milestones in our project with categorizing of MUST HAVE, SHOULD HAVE, COULD HAVE and WILL NOT HAVE.
                                            </ContentParagraph>
                                            <ContentParagraph>This method not only clear our next steps but also helps a lot in aligning with our development team regarding our roadmap and timelines.</ContentParagraph>
                                        </div>

                                    </div>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right  mb-[45px]">
                                        <MoscowMethodComponent />
                                    </div>

                                } />
                            <ContentDivider />

                            <HideableComponent title="Brainstorming and Low fidelity Wireframe " children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>Once the key problems were prioritized, we moved quickly into solution ideation. Given time constraints, we intentionally avoided broad, time-heavy ideation methods like SCAMPER or Crazy 8s, and instead <span className="text-black">adopted a lean, decision-driven approach.</span></ContentParagraph>
                                    <ContentParagraph>① Our core group—VP of Product, Product Manager, Product Owner, and a technical counterpart—worked together to evaluate each “How Might We” problem.</ContentParagraph>
                                    <ContentParagraph>② As a product designer, I framed the user context and pain points, the team generated a small set of solution options, and we rapidly converged on one or two viable directions. </ContentParagraph>
                                    <ContentParagraph>③ I then sketched these ideas in real time to make them tangible.</ContentParagraph>

                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right  mb-[45px]">
                                        <SliderFrameComponent width="900px" title="Brainstorm sketches" numOfSlides="15">
                                            {
                                                new Array(15).fill(null).map((v, i) => {
                                                    return <div><img src={`/images/bss-${i + 1}.png`} width={"100%"} /></div>
                                                }
                                                )
                                            }
                                        </SliderFrameComponent>
                                        <ContentContainer>
                                            <ContentParagraph>
                                                These quick sketches played a critical role in bridging conversation and execution. By visualizing ideas immediately, we turned abstract discussions into something concrete the entire team could react to, challenge, and align on.<span className="text-black">From verbal ideation to visual thinking</span> , and <span className="text-black">from exploration to execution—</span>setting a strong, practical baseline for the solutions.
                                            </ContentParagraph>
                                        </ContentContainer>
                                    </div>


                                } />
                            <ContentDivider />

                            <HideableComponent title="Sitemap (Content-centered Approach)" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>Initially, we assumed a sitemap wasn’t necessary because the team was familiar with the product. However, as we began addressing deeper structural problems, it became clear that skipping this step was a mistake. We quickly realized that without a clear, shared view of the existing information architecture, solving complexity at the feature level would remain fragmented.</ContentParagraph>
                                    <ContentParagraph>This exercise gave us a clear structural baseline, enabling more intentional ideation, cleaner feature placement, and a more scalable foundation for future growth.</ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right  mb-[45px]">
                                        <RevampedSitemapComponent />
                                    </div>

                                } />
                            <ContentDivider />

                            <HideableComponent title="Product Roadmap" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph><span className="text-black">Rather than delivering everything in a single, high-risk release, we chose a phased approach</span> that allows the team to ship value gradually, manage complexity, and align more closely with client expectations.</ContentParagraph>
                                    <ContentParagraph>To support this approach, we evaluated available resources and timelines to ensure each phase could be delivered efficiently without compromising quality. </ContentParagraph>
                                    <ContentParagraph><span className="text-black">Phase 1 </span>– Preparation focuses on building a strong foundation and essential setup.</ContentParagraph>
                                    <ContentParagraph><span className="text-black">Phase 1 </span>– Core Functionality, rolling out most of the Must-have and Should-have features. </ContentParagraph>
                                    <ContentParagraph><span className="text-black">Phase 1 </span>– Refinement centers on optimization and polish, implementing <span className="text-black">Could-have</span> enhancements.</ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right  mb-[45px]">
                                        <ProductRoadmapComponent />
                                    </div>

                                } />
                            <ContentDivider />

                            <HideableComponent title="UI Elements" children={
                                <div>

                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right  mb-[45px]">
                                        <div className="pb-[30px]"><img src={"/images/uie-1.png"} width={"800px"} /></div>
                                        <div className="pb-[30px]"><img src={"/images/uie-2.png"} width={"800px"} /></div>
                                        <div className="pb-[30px]"><img src={"/images/uie-3.png"} width={"800px"} /></div>
                                        <div className="pb-[30px]"><img src={"/images/uie-4.png"} width={"800px"} /></div>
                                    </div>

                                } />
                            <ContentDivider />
                            <ContentContainer>
                                <div className="flex gap-4 items-center">
                                    <img src={"/images/multi-star.png"} width={"24px"} height={"24px"} className="mt-[-30px]" />
                                    <Title text="Conclusion of Ideation" />
                                </div>

                                <ContentParagraph>With problems clearly defined and solutions prioritized, the ideation phase moved from exploration into alignment. Through structured brainstorming, wireframing, sitemap refinement, and roadmap planning, we translated abstract ideas into clear, intentional decisions.</ContentParagraph>
                                <ContentParagraph>This section includes low-fidelity wireframes, site map and timeline  — not as visual polish, but as a shared blueprint. They represent our collective understanding of the problem space, the priorities we committed to, and the direction we were confident enough to move forward with before investing in high-fidelity design.</ContentParagraph>
                            </ContentContainer>
                        </div>
                        <ContentContainer py={"0px"} isFull={true}>
                            <ContentDivider isFull={true} />
                        </ContentContainer>
                    </ContentSectionWrapper>

                    <ContentSectionWrapper>
                        <div ref={(nav) => { if (nav) { navRefs.current[5] = nav } }}>
                            <ContentContainer>
                                <Title text="Final Solution" />
                                <ContentParagraph>Here, the story comes to life. This section presents the redesigned ESG Calculator experience, explaining how each design decision addressed the core problems. It showcases improvements across onboarding, data input, framework clarity, and feedback—connecting solutions directly back to user and business needs.</ContentParagraph>
                            </ContentContainer>
                            <ContentDivider />

                            <HideableComponent title="Phase 1 - Preparation" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>This phase focuses on establishing a strong foundation by introducing core preparation steps, data prerequisites, and critical configuration settings. Based on the feature prioritization, selected must-have and key should-have features are included in this phase to eliminate early friction and set users up for success.</ContentParagraph>
                                    <ContentParagraph>This phase covers —</ContentParagraph>
                                    <ContentParagraph>
                                        ① framework selection,
                                        <br />
                                        ② preparation steps 1–3,
                                        <br />
                                        ③ the product tour, and
                                        <br />
                                        ④ the core assessment structure, including
                                        <br />
                                        ⑤ the main screen and sidebar hierarchy.
                                    </ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right  mb-[45px]">
                                        <SliderFrameComponent title="Solution" width="900px" numOfSlides="6">
                                            <HmwSoltuionComponent
                                                problem="How might we provide guided framework selection with previews to boost initial confidence and prevent early confusion?"
                                                solution="Clearly separated tools and standards during framework selection, using distinct labels, logos, and descriptions to help users understand their purpose and choose confidently."
                                                video="/images/solution-1-1.mp4"
                                            />
                                            <HmwSoltuionComponent
                                                problem="How might we use progressive disclosure to reduce overwhelm when users input data for multiple assets?"
                                                solution="Added an upfront asset setup step and surfaced assets in the sidebar, allowing users to focus on one asset at a time, progressively reveal related inputs, and still edit asset details at any stage."
                                                video="/images/solution-1-2.mp4"
                                            />
                                            <HmwSoltuionComponent
                                                problem="How might we accurately calculate emissions based on an organization’s percentage of ownership or responsibility?"
                                                solution="Added an upfront ownership step as preparation Step 3 to calculate emissions based each organization’s share."
                                                video="/images/solution-1-3.mp4"
                                            />
                                            <HmwSoltuionComponent
                                                problem="How might we reduce the learning curve and help users quickly reorient themselves when returning to the tool? "
                                                solution="Implemented a contextual product tour for new and returning users to accelerate onboarding, reduce relearning effort, and increase successful assessment completion."
                                                video="/images/solution-1-4.mp4"
                                            />
                                            <HmwSoltuionComponent
                                                problem="How might we make the reporting year and ownership percentage clearly visible and easy to edit at any point in the assessment flow?"
                                                solution="Placed reporting year and ownership percentage as always-visible controls in the top bar, allowing users to review and edit them at any point in the assessment."
                                                video="/images/solution-1-5.mp4"
                                            />
                                            <HmwSoltuionComponent
                                                problem="How might we simplify the sections so that user could see it as a simple journey or divide the big section into smaller chunk and don’t miss Social and Governance sections?"
                                                solution="Reorganized the assessment into a four-level structure, Asset → ESG pillar → Category → Detailed inputs — with the first three levels visible in the sidebar and detailed sections shown in the main view."
                                                video="/images/solution-1-6.mp4"
                                            />
                                        </SliderFrameComponent>
                                    </div>

                                } />
                            <ContentDivider />

                            <HideableComponent title="Phase 2 - MVP" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>This phase delivers the core Environmental calculation experience that users can complete end-to-end with confidence. It includes selected should-have and could-have features that improve accuracy, reduce friction, and strengthen trust in the results.</ContentParagraph>
                                    <ContentParagraph>This phase covers —</ContentParagraph>
                                    <ContentParagraph>
                                        ① unit conversion and data upload,
                                        <br />
                                        ② Scope 1–3 calculations,
                                        <br />
                                        ③ section summaries, and
                                        <br />
                                        ④ emission removal.
                                    </ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right  mb-[45px]">
                                        <SliderFrameComponent title="Solution" width="900px" numOfSlides="5">
                                            <HmwSoltuionComponent
                                                problem="How might we add built-in unit conversion across Scope 1–3 and renewable energy inputs to reduce errors and user frustration from unit mismatches?"
                                                solution="Embedded unit conversion directly within input fields and data entry modals, allowing users to switch units easily and prevent mismatches across Scope 1–3 and other inputs"
                                                video="/images/solution-2-1.mp4"
                                            />
                                            <HmwSoltuionComponent
                                                problem="How might we differentiate Scope 2 electricity into market-based and location-based inputs so users can accurately reflect green electricity purchases?"
                                                solution="Split Scope 2 electricity into separate market-based and location-based sections, allowing users to input green electricity certificates and see their adjusted emissions results."
                                                video="/images/solution-2-2.mp4"
                                            />
                                            <HmwSoltuionComponent
                                                problem="How might we support all Scope 3 categories so users can accurately calculate and report their full Scope 3 emissions?"
                                                solution="Supported full Scope 3 reporting by surfacing all 15 categories and enabling direct data import from the dedicated Scope 3 calculator, while still allowing manual input for flexibility."
                                                video="/images/solution-2-3.mp4"
                                            />
                                            <HmwSoltuionComponent
                                                problem="How might we create a clear, relatable assessment journey with saved progress and section summaries that encourage users to continue and return?"
                                                solution="Added a section summary as the final step to reinforce progress and outcomes, while placing Save, Submit, and Cancel actions consistently at the bottom of the flow."
                                                video="/images/solution-2-4.mp4"
                                            />
                                            <HmwSoltuionComponent
                                                problem="How might we support emission removals so certified activities can be accurately reflected in emissions calculations?"
                                                solution="Enabled emission removals to be applied in the final summary, allowing certified activities to be  reflected immediately in the overall emissions results."
                                                video="/images/solution-2-5.mp4"
                                            />
                                        </SliderFrameComponent>
                                    </div>

                                } />
                            <ContentDivider />

                            <HideableComponent title="Phase 3 - Efficiency" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>The final phase focuses on refinement, efficiency, and long-term adoption with Advanced conveniences, and experience enhancements are added. As per feature prioritiztion, we will have most of could have features will be put here.</ContentParagraph>
                                    <ContentParagraph>This phase covers —</ContentParagraph>
                                    <ContentParagraph>
                                        ① feedback form
                                        <br />
                                        ② data import feature,
                                        <br />
                                        ③ Upload modal with previous-year data,
                                        <br />
                                        ④ improved terminology and formula breakdowns and
                                        <br />
                                        ⑤ refined Social and Governance structure.
                                    </ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right  mb-[45px]">
                                        <SliderFrameComponent title="Solution" width="900px" numOfSlides="5">
                                            <HmwSoltuionComponent
                                                problem="How might we make feedback easily accessible throughout the journey so users can share input at the right moment?"
                                                solution="Made feedback accessible throughout the flow by placing a persistent feedback button at the bottom of the interface, allowing users to share input at the moment issues arise."
                                                video="/images/solution-3-1.mp4"
                                            />
                                            <HmwSoltuionComponent
                                                problem="How might we support data import (e.g., CSV) across different sections to reduce manual input effort and speed up assessment completion?"
                                                solution="Enabled scope-based data import by adding dedicated import actions for each scope. Users can upload CSV files via a guided modal with downloadable templates."
                                                video="/images/solution-3-2.mp4"
                                            />
                                            <HmwSoltuionComponent
                                                problem="How might we reduce frustration during file uploads and dropdown selections while allowing users to reference previous-year data to build confidence?"
                                                solution="Structured dropdowns to align with calculation logic and introduced a dedicated upload modal that displays previous-year data, reducing friction and improving user confidence."
                                                video="/images/solution-3-3.mp4"
                                            />
                                            <HmwSoltuionComponent
                                                problem="How might we improve terminology clarity for users of all experience levels while providing transparent formula breakdowns to build trust and reduce anxiety?"
                                                solution="Standardized terminology through research-led language choices and added contextual tooltips with formula breakdowns, helping users of all experience understand calculations and trust the results."
                                                video="/images/solution-3-4.mp4"
                                            />
                                            <HmwSoltuionComponent
                                                problem="How might we simplify the Social and Governance sections using collapsible sub-sections to reduce endless scrolling and user fatigue?"
                                                solution="By using collapsible sub-sections, users can see all required disclosures at a glance while focusing on one section at a time, reducing scrolling, cognitive load, and overall reporting fatigue."
                                                video="/images/solution-3-5.mp4"
                                            />
                                        </SliderFrameComponent>
                                    </div>

                                } />
                            <ContentDivider />
                            <ContentContainer isFull={true}>
                                <ContentContainer py="0px">
                                    <div className="flex gap-4 items-center">
                                        <img src={"/images/multi-star.png"} width={"24px"} height={"24px"} className="mt-[-30px]" />
                                        <Title text="Conclusion of Final Solution" />
                                    </div>

                                    <ContentParagraph>These solutions addressed the key barriers that were limiting the ESG Calculator’s commercial success — high user friction, low confidence in results, and inconsistent completion. By simplifying complex workflows and improving transparency around data and frameworks, the product became easier to use, easier to trust, and easier to adopt.</ContentParagraph>
                                    <ContentParagraph>As a result, the redesigned experience not only improved user efficiency and confidence, but also strengthened the product’s market readiness, reduced operational support burden, and positioned the ESG Calculator as a more scalable and revenue-driving offering.</ContentParagraph>
                                </ContentContainer>
                                <div className="float-right">
                                    <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center">
                                        <div className="w-[30%]">
                                            <div className="bg-white rounded-[24px] items-center justify-center flex h-[126px] w-[156px]">
                                                <img src={"/images/figma.png"} width={"64px"} />
                                            </div>

                                        </div>
                                        <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                                            <div className="flex justify-between items-center">
                                                <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Figma Prototype</h2>
                                                <div className="bg-white rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" >
                                                    <img src={"/images/arrow-outward.png"} />
                                                </div>
                                            </div>
                                            <div className="w-[85%]">
                                                <ContentParagraph>To experience the full revamp journey in detail, explore the  Figma files here.</ContentParagraph>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                            </ContentContainer>
                        </div>
                        <ContentContainer py={"0px"} isFull={true}>
                            <ContentDivider isFull={true} />
                        </ContentContainer>
                    </ContentSectionWrapper>

                    <ContentSectionWrapper>
                        <div ref={(nav) => { if (nav) { navRefs.current[6] = nav } }}>
                            <ContentContainer>
                                <Title text="Challenge" />
                                <ContentParagraph>Every project has its obstacles. This section reflects on the complexities of designing for ESG—balancing regulatory accuracy, diverse user maturity levels, and evolving business requirements—while aligning multiple stakeholders around a shared vision.</ContentParagraph>
                            </ContentContainer>
                            <ContentDivider />

                            <HideableComponent title="Ownership and Accountability" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>Beyond designing interfaces, I was responsible for aligning multiple stakeholders including clients, developers, and internal leads. the challenge was not a lack of input, but the responsibility of synthesis and decision-making with multiple stakeholders involved.</ContentParagraph>
                                    <ContentParagraph>I had to emphasize my ability to  ① lead cross-functional collaboration,
                                        ② communicate confident decisions with clarity, and ③ take accountability for outcomes. — even when information was incomplete or opinions conflicted.</ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right  mb-[45px]">
                                        <img src={"/images/ownership.png"} width={"700px"} />
                                    </div>

                                } />
                            <ContentDivider />

                            <HideableComponent title="Feedback Handling" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>Throughout the project, feedback came from many directions — clients, sales, customer support, engineers, and internal stakeholders — each with different priorities and expectations. The challenge was learning how to absorb large volumes of feedback without becoming reactive or design-by-committee. </ContentParagraph>
                                    <ContentParagraph>I needed to ① distinguish between opinion and evidence, ② validate assumptions through research, and ③ decide which feedback aligned with user needs and business objectives.</ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right  mb-[45px]">
                                        <img src={"/images/feedback.png"} width={"700px"} />
                                    </div>

                                } />
                            <ContentDivider />

                            <HideableComponent title="Limited Information on Competitors" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>Unlike many consumer or typical SaaS products, researching competitor ESG tools was difficult due to limited access and transparency. Most ESG platforms require company registration, verified business details, and long onboarding processes before users can explore the product. On top of that, ESG standards and reporting practices vary widely across regions and industries.</ContentParagraph>
                                    <ContentParagraph>To work around this, I ① focused less on direct UI comparisons and more on  ② understanding real user needs, workflows, and pain points through research. I supported this approach with stakeholder interviews, customer feedback, regulatory guidelines, and usability insights from our own product.</ContentParagraph>
                                </div>
                            }
                                fullWidhtChildren={
                                    <div className="mt-[15px] float-right  mb-[45px]">
                                        <img src={"/images/competitor.png"} width={"700px"} />
                                    </div>

                                } />
                            <ContentDivider />
                        </div>
                    </ContentSectionWrapper>

                    <ContentSectionWrapper>
                        <div ref={(nav) => { if (nav) { navRefs.current[7] = nav } }}>
                            <ContentContainer>
                                <Title text="IMPACT" />
                                <ContentParagraph>With the solution in place, we look at the results. This section demonstrates how the redesign improved usability, confidence, and efficiency through measurable outcomes, tying design changes to real user behavior and business impact.</ContentParagraph>
                            </ContentContainer>
                            <ContentDivider />

                            <HideableComponent title="Background" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>Do you remember the product north stars, that we mentioned on very first introduction section? If you don’t, here are these</ContentParagraph>

                                    <div className="flex gap-4 mt-[20px]">
                                        <BusinessProblemCard icon="/images/cake.png" text="1. Ease of use" />
                                        <BusinessProblemCard icon="/images/file_box.png" text="2. Low confidence in data accuracy" />
                                        <BusinessProblemCard icon="/images/boomerang.png" text="3. Drop-offs and poor retention" />
                                    </div>
                                </div>
                            }
                                fullWidhtChildren={
                                    <></>
                                } />
                            <ContentDivider />

                            <HideableComponent title="1. Ease of Use" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>Ease of use directly affects how efficiently users can complete ESG assessments without external help. By reducing complexity, we aimed to enable users to complete tasks independently,  lowering support dependency while increasing productivity and completion rates.</ContentParagraph>
                                    <img src={"/images/ease-of-use.png"} width={"100%"} />
                                    <div className="pt-[60px]">
                                        <h2 className={`text-[${FontSizes.medium}] text-[${Colors.title}] tracking-wider`}>Impact upon Business</h2>
                                        <br />
                                        <ContentParagraph>Improvements in usability directly reduced internal costs and increased customer efficiency.</ContentParagraph>
                                        <br />
                                        <div className="flex pt-[15px]">
                                            <div className="w-[50%]">
                                                <TickTextComponent text="Reduced support costs" />
                                            </div>
                                            <div className="w-[50%]">
                                                <TickTextComponent text="Shorter time to close deals" />
                                            </div>
                                        </div>
                                        <div className="flex pt-[15px]">
                                            <div className="w-[50%]">
                                                <TickTextComponent text="Higher internal team efficiency" />
                                            </div>
                                            <div className="w-[50%]">
                                                <TickTextComponent text="Higher perceived product maturity" />
                                            </div>
                                        </div>
                                        <div className="pt-[15px]">
                                            <TickTextComponent text="Resources shifted from “hand-holding” to higher-value work" />
                                        </div>

                                    </div>

                                </div>
                            }
                                fullWidhtChildren={
                                    <></>
                                } />
                            <ContentDivider />

                            <HideableComponent title="2. Trust and Data Accuracy" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>Trust is the foundation of an ESG product. Users must feel confident that their inputs are interpreted correctly and that results are accurate and auditable. This initiative focused on improving transparency, terminology clarity, and data validation to strengthen confidence in the final.</ContentParagraph>
                                    <img src={"/images/data-accuracy.png"} width={"100%"} />
                                    <div className="pt-[60px]">
                                        <h2 className={`text-[${FontSizes.medium}] text-[${Colors.title}] tracking-wider`}>Impact upon Business</h2>
                                        <br />
                                        <ContentParagraph>Stronger confidence in results increased credibility and positioned the product as a reliable ESG solution.</ContentParagraph>
                                        <br />
                                        <div className="pt-[15px]">
                                            <TickTextComponent text="Improved credibility of results" />
                                        </div>
                                        <div className="pt-[15px]">
                                            <TickTextComponent text="Stronger brand trust" />
                                        </div>
                                        <div className="pt-[15px]">
                                            <TickTextComponent text="Higher willingness to pay" />
                                        </div>
                                    </div>

                                </div>
                            }
                                fullWidhtChildren={
                                    <></>
                                } />
                            <ContentDivider />

                            <HideableComponent title="3. Drop-offs and Poor Retention" children={
                                <div className="pt-[40px]">
                                    <ContentParagraph>High friction during critical steps previously caused users to abandon the assessment or avoid returning altogether. By smoothing the end-to-end journey and reducing cognitive load, the goal was to increase completion, encourage repeat usage, and improve long-term adoption of the ESG Calculator.</ContentParagraph>
                                    <ContentParagraph>Below are the metrics proving our enhancement in this section —</ContentParagraph>
                                    <img src={"/images/retention.png"} width={"100%"} />
                                    <div className="pt-[60px]">
                                        <h2 className={`text-[${FontSizes.medium}] text-[${Colors.title}] tracking-wider`}>Impact upon Business</h2>
                                        <br />
                                        <ContentParagraph>Lower friction and clearer value improved activation, retention, and long-term business performance.</ContentParagraph>
                                        <br />
                                        <div className="flex pt-[15px]">
                                            <div className="w-[50%]">
                                                <TickTextComponent text="Higher activation rate" />
                                            </div>
                                            <div className="w-[50%]">
                                                <TickTextComponent text="Lower churn" />
                                            </div>
                                        </div>
                                        <div className="flex pt-[15px]">
                                            <div className="w-[50%]">
                                                <TickTextComponent text="Higher renewal rates" />
                                            </div>
                                            <div className="w-[50%]">
                                                <TickTextComponent text="Stronger long-term revenue stability" />
                                            </div>
                                        </div>
                                        <div className="pt-[15px]">
                                            <TickTextComponent text="Product value becomes tangible, not theoretical" />
                                        </div>

                                    </div>

                                </div>
                            }
                                fullWidhtChildren={
                                    <></>
                                } />

                        </div>
                        <ContentContainer py={"0px"} isFull={true}>
                            <ContentDivider isFull={true} />
                        </ContentContainer>
                    </ContentSectionWrapper>

                    <ContentSectionWrapper>
                        <div ref={(nav) => { if (nav) { navRefs.current[8] = nav } }}>
                            <ContentContainer>
                                <Title text="RETROSPECTIVE" />
                                <ContentParagraph>This retrospective marks the conclusion of the case study. Leading the end-to-end redesign of the ESG calculation experience was a rewarding journey that strengthened my ability to navigate complexity, align cross-functional teams, and turn research insights into real business impact.</ContentParagraph>
                                <ContentParagraph>
                                    Through strong teamwork and a shared commitment to a research-driven design process, the project delivered meaningful product improvements and received positive feedback from company leadership.
                                </ContentParagraph>
                                <ContentParagraph>
                                    <span className="text-black">
                                        This is a data-backed story I am proud to share.
                                    </span>
                                </ContentParagraph>
                            </ContentContainer>
                        </div>
                    </ContentSectionWrapper>
                </div>
            </div >
            <div className="py-[100px] px-[20px]">
                <div className="bg-[#F4F4F4] w-[100%] h-[700px] flex justify-center items-end">
                    <img src={"/images/team.png"} className="w-[900px]" />
                </div>
            </div>
        </div >
    )
}


const QualityQuestionSetsComponent = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center">
                <div className="w-[30%]">
                    <img src={"/images/quality-research.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Qualitative Question Sets</h2>
                        <div className="bg-white rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" onClick={onOpen}>
                            <img src={"/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the qualitative interview questions
                            that informed our understanding of user behavior and
                            decision-making.</ContentParagraph>
                    </div>

                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-medium border-b-[1px] border-b-[#E3E3E3]">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Qualitative Question Set</p>
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
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">What wss your main purpose for using it (e.g. reporting, internal review?)</p> </ContentList>

                                            <ContentDivider isFull={true} />

                                            <h2 className={`text-[${FontSizes.medium}] text-[${Colors.content}] font-medium pb-[20px]`}>Introduction</h2>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Can you tell me a bit about your role and how you’re evolved in your company’s ESG reporting or data collection?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">When was the last time you used our ESG calculator tool?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">What wss your main purpose for using it (e.g. reporting, internal review?)</p> </ContentList>

                                            <ContentDivider isFull={true} />

                                            <h2 className={`text-[${FontSizes.medium}] text-[${Colors.content}] font-medium pb-[20px]`}>Introduction</h2>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Can you tell me a bit about your role and how you’re evolved in your company’s ESG reporting or data collection?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">When was the last time you used our ESG calculator tool?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">What wss your main purpose for using it (e.g. reporting, internal review?)</p> </ContentList>

                                            <ContentDivider isFull={true} />

                                            <h2 className={`text-[${FontSizes.medium}] text-[${Colors.content}] font-medium pb-[20px]`}>Introduction</h2>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Can you tell me a bit about your role and how you’re evolved in your company’s ESG reporting or data collection?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">When was the last time you used our ESG calculator tool?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">What wss your main purpose for using it (e.g. reporting, internal review?)</p> </ContentList>
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

                                            <h2 className={`text-[${FontSizes.medium}] text-[${Colors.content}] font-medium pb-[20px]`}>Introduction</h2>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Can you tell me a bit about your role and how you’re evolved in your company’s ESG reporting or data collection?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">When was the last time you used our ESG calculator tool?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">What wss your main purpose for using it (e.g. reporting, internal review?)</p> </ContentList>

                                            <ContentDivider isFull={true} />

                                            <h2 className={`text-[${FontSizes.medium}] text-[${Colors.content}] font-medium pb-[20px]`}>Introduction</h2>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Can you tell me a bit about your role and how you’re evolved in your company’s ESG reporting or data collection?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">When was the last time you used our ESG calculator tool?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">What wss your main purpose for using it (e.g. reporting, internal review?)</p> </ContentList>

                                            <ContentDivider isFull={true} />

                                            <h2 className={`text-[${FontSizes.medium}] text-[${Colors.content}] font-medium pb-[20px]`}>Introduction</h2>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Can you tell me a bit about your role and how you’re evolved in your company’s ESG reporting or data collection?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">When was the last time you used our ESG calculator tool?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">What wss your main purpose for using it (e.g. reporting, internal review?)</p> </ContentList>

                                            <ContentDivider isFull={true} />

                                            <h2 className={`text-[${FontSizes.medium}] text-[${Colors.content}] font-medium pb-[20px]`}>Introduction</h2>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">Can you tell me a bit about your role and how you’re evolved in your company’s ESG reporting or data collection?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">When was the last time you used our ESG calculator tool?</p> </ContentList>
                                            <ContentList fontSize="10px"><p className="text-[10px] text-black">What wss your main purpose for using it (e.g. reporting, internal review?)</p> </ContentList>
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
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center">
                <div className="w-[30%]">
                    <img src={"/images/quantity-research.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Quantitative Question Sets</h2>
                        <div className="bg-white rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" onClick={onOpen}>
                            <img src={"/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to review the quantitative survey questions
                            used to evaluate usability, confidence, and performance
                            throughout the ESG assessment.</ContentParagraph>
                    </div>

                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
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
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center">
                <div className="w-[30%]">
                    <img src={"/images/usability-testing.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Usability Testing Plan</h2>
                        <div className="bg-white rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" onClick={onOpen}>
                            <img src={"/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the detailed empathy map
                            and understand users’ thoughts, behaviors, and
                            emotions throughout the journey.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
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
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center">
                <div className="w-[30%]">
                    <img src={"/images/study-plan.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[30px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Study Plan</h2>
                        <div className="bg-white rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" onClick={onOpen}>
                            <img src={"/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the detailed empathy map
                            and understand users’ thoughts, behaviors, and
                            emotions throughout the journey.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
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
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center">
                <div className="w-[30%]">
                    <img src={"/images/shengsion-persona.png"} width={"170px"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[30px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Persona 1 - ShengSiong</h2>
                        <div className="bg-white rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" onClick={onOpen}>
                            <img src={"/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the ShengSiong persona and
                            its ESG challenges.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
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
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center">
                <div className="w-[30%]">
                    <img src={"/images/razer-persona.png"} width={"170px"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[30px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Persona 2 - Razer</h2>
                        <div className="bg-white rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" onClick={onOpen}>
                            <img src={"/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the Razer persona and
                            its ESG challenges.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
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
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center">
                <div className="w-[30%]">
                    <img src={"/images/affinity-one-small.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Affinity Map - Step 1</h2>
                        <div className="bg-white rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" onClick={onOpen}>
                            <img src={"/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the detailed empathy map
                            and understand users’ thoughts, behaviors, and
                            emotions throughout the journey.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
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
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center">
                <div className="w-[30%]">
                    <img src={"/images/affinity-one-small.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Affinity Map - Step 2</h2>
                        <div className="bg-white rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" onClick={onOpen}>
                            <img src={"/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the detailed empathy map
                            and understand users’ thoughts, behaviors, and
                            emotions throughout the journey.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
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
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center">
                <div className="w-[30%]">
                    <img src={"/images/empathy-map-small.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Empathy Map</h2>
                        <div className="bg-white rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" onClick={onOpen}>
                            <img src={"/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the detailed empathy map
                            and understand users’ thoughts, behaviors, and
                            emotions throughout the journey.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
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
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center">
                <div className="w-[30%]">
                    <img src={"/images/pain-gain-small.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Pains and Gains</h2>
                        <div className="bg-white rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" onClick={onOpen}>
                            <img src={"/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the key pains and gains
                            uncovered from the empathy mapping.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
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
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center">
                <div className="w-[30%]">
                    <img src={"/images/affinity-one-small.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Joureny Mapping</h2>
                        <div className="bg-white rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" onClick={onOpen}>
                            <img src={"/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore the full customer journey
                            map in detail.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
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
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center">
                <div className="w-[30%]">
                    <img src={"/images/moscow-method-small.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>MOSCOW Method</h2>
                        <div className="bg-white rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" onClick={onOpen}>
                            <img src={"/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore a detailed breakdown
                            of the MoSCoW prioritization method.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
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
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center">
                <div className="w-[30%]">
                    <img src={"/images/site-map-small.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Revamped Sitemap</h2>
                        <div className="bg-white rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" onClick={onOpen}>
                            <img src={"/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to explore a detailed breakdown
                            of the sitemap structure.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
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
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center">
                <div className="w-[30%]">
                    <img src={"/images/roadmap-small.png"} width={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}] pb-[5px]`}>Product Roadmap</h2>
                        <div className="bg-white rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer" onClick={onOpen}>
                            <img src={"/images/arrow-outward.png"} />
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <ContentParagraph>Tap here to view the product roadmap that
                            outlines phased delivery and feature rollout.</ContentParagraph>
                    </div>


                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-medium border-b-[1px] border-b-[#E3E3E3]">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Product Roadmap</p>
                            </ModalHeader>
                            <ModalBody className="p-[0px]">
                                <div className="bg-[#F4F4F4]">
                                    <div ref={scrollRef} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onMouseMove={onMouseMove} className="h-[650px] p-[32px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        <img className="max-w-none" src={"/images/roadmap.png"} width={"1700"} />
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
                <br /><br />
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
                <p className={`text-[${FontSizes.small}] text-[${Colors.title}]`}>{text}</p>
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
        <p className={`text-[${FontSizes.small}] text-[${Colors.content}] pb-[20px]`}>{children}</p>
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
            <li style={{ fontSize: fontSize || '', color: '#777777', lineHeight: lineHeight || '' }}><ContentParagraph>{children}</ContentParagraph></li>
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