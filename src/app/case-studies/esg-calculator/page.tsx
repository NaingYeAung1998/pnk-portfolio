"use client"

import Divider from "@/app/components/divider"
import { Colors, FontSizes } from "@/app/constants/constants"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/modal"
import React, { FC, useEffect, useRef, useState } from "react"

export default function EsgCalculator() {

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
                <div id="achievementSection" className="pt-[120px] pb-[120px]">
                    <div className="pb-[50px] flex justify-center items-center">
                        <img src={'/images/gold-achievement.png'} />
                    </div>
                    <div className="lg:flex gap-4" id="improvementSection">
                        <Improvement title="Avg. Time On Each Section" icon="/images/time.png" improvedNumber="19" improvedUnit="min" improvedFrom="From 36 min" improvedPercent="39% faster" />
                        <Improvement title="Task Completion Rate" icon="/images/checked.png" improvedNumber="90" improvedUnit="%" improvedFrom="Grow from 71%" improvedPercent="+28%" />
                        <Improvement title="Assistance Rate" icon="/images/headphone.png" improvedNumber="11" improvedUnit="%" improvedFrom="From 39%" improvedPercent="-28%" />
                        <Improvement title="SUS Scores" icon="/images/meter.png" improvedNumber="82" improvedUnit="/100" improvedFrom="From 54" improvedPercent="+28" />
                    </div>

                </div>
                <Divider />
                <div id="customerExperienceSection" className="pt-[120px] pb-[120px]">
                    <h2 className={`text-[${FontSizes.medium}]`}>HOW OUR CUSTOMERS EXPERIENCE THE SOLUTION -</h2>
                    <div className="pt-[40px] lg:flex justify-between">
                        <CustomerExperienceVideo link="https://www.youtube.com/embed/_QDthx_WjwE?si=Z8ZadHlV6saW_bVB" icon="/images/razor.png" title="Razer Inc."
                            content="“...helping us understand the questionnaire and
                                    also helped to make the whole user 
                                    experience more palatable...”"
                            customer="Kenneth Ng, Global Sustainability Lead" />
                        <CustomerExperienceVideo link="https://www.youtube.com/embed/g6UxU677DiE?si=AwONnUvlBZ4DE1DI" icon="/images/dp.png" title="Durapower Group"
                            content="“...Calculator improves the accuracy and credibility
of emissions tracking across our value chain,as
it is built in alignment with GHG protocol...”"
                            customer="Lay See Tan, Group CFO and Sustainability Officer" />
                    </div>
                </div>
                <Divider />
                <div className="pt-[120px]">
                    <div className="w-[20%] sticky top-[50px] left-20">
                        <Navigation text="INTRODUCTION" isActive />
                        <Navigation text="OVERVIEW" />
                        <Navigation text="RESEARCHES" />
                        <Navigation text="PROBLEM DEFINE" />
                        <Navigation text="IDEATION" />
                        <Navigation text="FINAL SOLUTION" />
                        <Navigation text="CHALLENGE" />
                        <Navigation text="IMPACT" />
                        <Navigation text="RETROSPECTIVE" />
                    </div>
                    <div className="w-[80%] ml-[20%] mt-[-550px] flow-root">
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
                        <ContentDivider />
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
                                        <div className="bg-white w-[70%] h-[100%] rounded-[24px] p-[30px]">
                                            <ContentList><span className="text-black">Carbon emissions and energy consumption</span></ContentList>
                                            <ContentList><span className="text-black">Waste management and pollution</span></ContentList>
                                            <ContentList><span className="text-black">Use of natural resources and biodiversity</span></ContentList>
                                        </div>
                                    </div>

                                    <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between">
                                        <div className="p-[25px]">
                                            <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}]`}>Social</h2>
                                            <p className={`text-[${Colors.content}] text-[${FontSizes.small}]`}>standards</p>
                                        </div>
                                        <div className="bg-white w-[70%] h-[100%] rounded-[24px] p-[30px]">
                                            <ContentList><span className="text-black">Labor practices, diversity, and inclusion</span></ContentList>
                                            <ContentList><span className="text-black">Human rights and supply chain management</span></ContentList>
                                            <ContentList><span className="text-black">Community relations and customer satisfaction</span></ContentList>
                                        </div>
                                    </div>

                                    <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between">
                                        <div className="p-[25px]">
                                            <h2 className={`text-[${Colors.title}] text-[${FontSizes.medium}]`}>Governance</h2>
                                            <p className={`text-[${Colors.content}] text-[${FontSizes.small}]`}>standards</p>
                                        </div>
                                        <div className="bg-white w-[70%] h-[100%] rounded-[24px] p-[30px]">
                                            <ContentList><span className="text-black">Board composition and structure</span></ContentList>
                                            <ContentList><span className="text-black">Executive compensation</span></ContentList>
                                            <ContentList><span className="text-black">Internal controls and audits</span></ContentList>
                                            <ContentList><span className="text-black">Business ethics and transparency</span></ContentList>
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
                        <ContentContainer py={"0px"} isFull={true}>
                            <ContentDivider isFull={true} />
                        </ContentContainer>
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
                                <div className="mt-[-15px] float-right">
                                    <div className="w-[980px] h-[700px] bg-[#F4F4F4] p-[65px]">
                                        <div className="w-[100%] h-[100%] border-[15px] rounded-[24px] border-black overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                            <img src={"/images/usability-website.png"} width={"100%"} />
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

                    </div>

                </div>
            </div>
            <div className="pt-[200px]"></div>
        </div>
    )
}


const QualityQuestionSetsComponent = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <div className="w-[800px] bg-[#F4F4F4] rounded-[32px] mb-[25px] p-[16px] flex justify-between items-center">
                <div>
                    <img src={"/images/quality-research.png"} height={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[30px]">
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
                            <ModalHeader className="flex flex-col gap-1 font-medium">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Qualitative Question Set</p>
                            </ModalHeader>
                            <ModalBody>
                                <div className="bg-[#F4F4F4] p-[30px]">
                                    <div className="flex justify-between h-[450px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
                            <ModalFooter>

                            </ModalFooter>
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
                <div>
                    <img src={"/images/quantity-research.png"} height={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[30px]">
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
                            <ModalHeader className="flex flex-col gap-1 font-medium">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Quantitative Question Set</p>
                            </ModalHeader>
                            <ModalBody>
                                <div className="bg-[#F4F4F4] p-[30px]">
                                    <div className="h-[450px] p-[32px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        <div className="w-[100%] h-[435px] bg-white p-[30px] rounded-[24px] flex justify-center">
                                            <img src={"/images/quantity-1.png"} />
                                        </div>
                                        <div className="h-[30px]"></div>
                                        <div className="w-[100%] h-[435px] bg-white p-[30px] rounded-[24px] flex justify-center">
                                            <img src={"/images/quantity-3.png"} />
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>

                            </ModalFooter>
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
                <div>
                    <img src={"/images/usability-testing.png"} height={"100%"} />
                </div>
                <div className="w-[70%] h-[100%] rounded-[24px] p-[30px]">
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
                            <ModalHeader className="flex flex-col gap-1 font-medium">
                                <p className={`text-[${FontSizes.medium}] text-[${Colors.title}]`}>Quantitative Question Set</p>
                            </ModalHeader>
                            <ModalBody>
                                <div className="bg-[#F4F4F4] p-[20px]">
                                    <div className="h-[450px] p-[32px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
                            <ModalFooter>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>

    )
}

type TagProps = {
    title: string
}

const Tag: FC<TagProps> = ({ title }) => {
    return (
        <div className="w-[140px] h-[30px] bg-[#F4F4F4] flex items-center justify-center rounded tracking-wider">
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
            <div className="flex gap-4 justify-center items-center">
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
}
const Navigation: FC<NavigationProps> = ({ text, isActive }) => {
    return (
        <div className="pb-[20px]">
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
    fontSize?: string
}
const ContentList: FC<ContentListProps> = ({ children, fontSize }) => {
    return (
        <div className="pl-[20px]">
            <li style={{ fontSize: fontSize || '' }}><ContentParagraph>{children}</ContentParagraph></li>
        </div>
    )
}

type ContentContainerProps = {
    children: React.ReactNode,
    py?: string,
    isFull?: boolean
}

const ContentContainer: FC<ContentContainerProps> = ({ children, isFull, py }) => {
    return (
        <>
            {isFull ?
                <div className="float-right flow-root w-[100%]">
                    <div className={`w-[100%]`} style={{ paddingTop: py ? py : "120px", paddingBottom: py ? py : "120px" }}>
                        {children}
                    </div>
                </div>
                :
                <div className="float-right">
                    <div className={`w-[700px]`} style={{ paddingTop: py ? py : "120px", paddingBottom: py ? py : "120px" }} >
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
            <ContentContainer py="60px">
                <div className="flex justify-between items-center">
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
                    <ContentContainer isFull={true} py="0px">
                        {fullWidhtChildren}
                    </ContentContainer>
            }

        </>


    )
}