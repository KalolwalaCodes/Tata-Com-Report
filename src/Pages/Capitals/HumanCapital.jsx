import React from 'react'
import CapsTemplate from '../../Components/CapsTemplate/CapsTemplate';

const HumanCapital = () => {
    const values = [
        { val1: 'Zero', val2: 'fatalities' },
        { val1: '31.5%', val2: 'LTIFR reduction' },
        { val1: '22.5', val2: 'Gender diversity' },
        { val1: 'USD 2.4 Mn', val2: 'Total investment in Learning and Development' },
        { val1: '5,61,522', val2: 'Total Learning hours' },
        { val1: '59,826', val2: 'of Training on Business & Human Rights' },
        { val1: '9.6', val2: 'Total Average Learning Person Days' },
    ];
    return (
        <div>
            <CapsTemplate src={'./CapsTemplate/HCaps.jpg'} title={"Human"} values={values} theme={"#ad3087"} gradient={"#ad3087"} ico={"./Homepage/hum-icon4.svg"} />
            <div className='marginal my-10'>
                <p className='text-navy text-2xl mb-4 font-semibold'>
                    Building Tomorrow’s Talent – Cultivating a Culture of Growth and Empowerment
                </p>
                <p className='text-hum text-2xl font-semibold'>
                    At Tata Communications, we believe that technology is most transformational when combined with the strength of our people. Therefore, we focus on enabling mutual growth by cultivating a people-first culture where every individual feels valued, engaged and empowered to deliver their best. We provide our people with dedicated employee engagement and upskilling programmes, facilitating their personal and professional development.
                </p>
                <img src="./capitals/human/hum1.jpg" className='w-[80%] my-1' alt="" />

                <h4 className='font-semibold my-5 text-xl text-navy'>People-centric HR Strategy and Policies</h4>
                <div className='flex flex-wrap justify-between'>
                    <div className='w-full md:w-[31%]  mr-2'>
                        <p>
                            Our focus is on cultivating a talent pool primed for the future. Creating a robust talent pipeline hinges on fostering a work environment conducive to diverse growth opportunities, grooming future leaders, and continually enhancing employee skills. The key aspects of our HR strategy, which aligned with overarching business goals and our DRIVE AHEAD values, help us foster a positive workplace culture, </p>
                    </div>
                    <div className='w-full md:w-[31%]  mr-2'>
                        <p>
                            attract top talent, drive sustainable growth and cultivate a high- performing workforce poised for long-term success.
                            <br /><br />

                            Our carefully crafted HR policies promote talent acquisition, development and retention while ensuring compliance with legal and ethical standards. All policies have been made available to all employees via our AskHR portal.
                        </p>

                    </div>
                    <div className='w-full md:w-[31%] '>
                        <div >
                            <img src="./capitals/human/hum2.jpg" className='w-[80%] my-1' alt="" />
                        </div>
                    </div>
                </div>

                <h4 className='text-hum text-4xl my-2 font-semibold'>
                    Key focus areas of our HR strategy during FY 2023-24:
                </h4>
                <div className='flex flex-wrap justify-between'>
                    <div className='w-full md:w-[31%] my-3'>
                        <img src="./capitals/human/hum3.jpg" className='w-[20%] my-1' alt="" />
                        <h4 className='font-semibold my-3 text-2xl text-purp'>Enhancing Employee Experiences</h4>
                        <p>
                            We have adopted a multifaceted approach that entails leveraging insights from employee engagement surveys, encouraging diversity and inclusion, as well as offering ample learning opportunities through the
                            Tata Communications Learning Academy (‘TCLA’). Talent Central 2.0, our integrated talent management platform plays a pivotal role by utilising generative skills domain artificial intelligence (domain-AI) to facilitate internal talent mobility, provide tailored career development recommendations, and skill enhancement
                            opportunities to employees.
                        </p>
                    </div>
                    <div className='w-full md:w-[31%] my-3'>
                        <img src="./capitals/human/hum4.jpg" className='w-[20%] my-1' alt="" />
                        <h4 className='font-semibold my-3 text-2xl text-purp'>Effective Workforce Planning</h4>
                        <p>
                            By undertaking detailed and accurate workforce planning, we seek to ensure that our workforce is aligned with our existing and long-term business objectives. We leverage Workforce Studio 2.0, a real-time data and analytics dashboard and Talent Central 2.0 to gather insights for strategic workforce planning,
                            skill development in line with business requirement/employee aspiration, and streamlined hiring and internal mobility processes.
                        </p>
                    </div>
                    <div className='w-full md:w-[31%] my-3'>
                        <img src="./capitals/human/hum5.jpg" className='w-[90%] my-1' alt="" />
                    </div>

                    <div className='w-full md:w-[49%] my-3'>
                        <h4 className='font-semibold my-3 text-xl text-purp'>
                            Nurturing the Right Talent
                        </h4>
                        <p>
                            Our recruitment strategy prioritises identifying the right talent, as it strengthens our core competencies and contributes to our overall performance. At Tata Communications, we are cognisant of the importance of nurturing the right talent within our ranks with internal first at the core of our talent strategy.
                        </p>
                        <h4 className='font-semibold my-3 text-xl text-blue'>
                            Key Elements:
                        </h4>
                        <ul className='my-3 px-4'>
                            <li className='my-2'>
                                Our talent management platform is based on generative skills domain AI and data analytics. It enables us to implement our internal first talent strategy.
                            </li>
                            <li className='my-2'>
                                Focus on talent with strong digital skills and tech proficiency enabled through Campus Hiring
                            </li>
                            <li className='my-2'>
                                Lay significant importance on Diversity & Inclusion in hiring practices
                            </li>
                            <li className='my-2'>
                                Our alignment with societal and environmental objectives enables us to attract talent
                            </li>
                            <li className='my-2'>
                                Multiple initiatives on workplace wellness programs, mental health support services and initiatives to promote work-life balance
                            </li>
                        </ul>
                    </div>
                    <div className='w-full md:w-[49%] my-3'>
                        <img src="./capitals/human/hum6.jpg" className='w-[60%] my-1 m-auto' alt="" />
                    </div>

                    <div className='w-full md:w-[49%] my-3'>
                        <h4 className='font-semibold my-3 text-xl text-purp'>
                            Keeping Our People Engaged
                        </h4>
                        <p>
                            We have adopted a multifaceted approach designed to understand and effectively address the needs of our workforce. We encourage open communication, tailored assistance and uphold a commitment to nurturing a productive and satisfied workforce.
                        </p>
                        <div className='flex flex-wrap my-3 w-[95%] justify-between'>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                    87%
                                </h2>
                                <p className='text-xl '>
                                    Overall Engagement Score
                                </p>
                            </div>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                    20 out of 21
                                </h2>
                                <p className='text-xl '>
                                    Engagement Drivers vs. Benchmark
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[49%] my-3'>
                        <div className='flex flex-wrap my-3 w-[95%] justify-between'>
                            <div className='p-2 w-[49%] mt-1'>
                                <img src="./capitals/human/hum7.jpg" className='' alt="" />
                            </div>
                            <div className='p-2 w-[49%] mt-1'>
                                <img src="./capitals/human/hum8.jpg" className='' alt="" />
                            </div>
                            <div className='p-2 w-[49%] mt-1'>
                                <img src="./capitals/human/hum8.jpg" className='' alt="" />
                            </div>
                            <div className='p-2 w-[49%] mt-1'>
                                <img src="./capitals/human/hum10.jpg" className='' alt="" />
                            </div>
                            <div className='p-2 w-[60%] mt-1 ml-3'>
                                <img src="./capitals/human/hum11.jpg" className='' alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-[49%] my-3'>
                        <h4 className='font-semibold my-3 text-xl text-blue'>
                            Assessing employee satisfaction
                        </h4>
                        <p>
                            Each year, an Employee Engagement Survey is conducted to gauge workplace satisfaction and identify areas for improvement. This process enables us to pinpoint focus areas at organisational, business unit and regional levels, leading to the development of targeted action plans. We regularly track our progress and assess the impact of our actions through the Employee Satisfaction (‘ESAT’) scores of the following year.
                        </p>
                    </div>
                    <div className='w-full md:w-[49%] my-3'>
                        <h4 className='font-semibold my-3 '>
                            Actions Taken on the Feedback Received on ESAT Surveys
                        </h4>
                        <ul className='my-3 px-4'>
                            <li className='my-2'>
                                Gaining Enhanced Recognition
                            </li>
                            <li className='my-2'>
                                Career Growth Opportunities
                            </li>
                            <li className='my-2'>
                                Leadership Development
                            </li>
                            <li className='my-2'>
                                Improving Productivity and Performance
                            </li>
                            <li className='my-2'>
                                Skill Development
                            </li>
                        </ul>
                    </div>
                </div>
                <h4 className='font-semibold text-purp my-3 text-2xl'>
                    Sustaining continued learning & advancement
                </h4>
                <p>
                    Recognising the need of continuous learning and development of our team members, we have developed a unique six-tier, platform-based learning and development (‘L&D’) strategy that emphasises on making learning accessible and tailoring the learning initiatives to effectively meet current and future business needs.
                    New Hire Winning Mix Trend (in %) FY 2023-24 27
                    FY 2022-23 21
                </p>
                <div className='flex flex-wrap my-3 w-[95%] justify-between'>
                    <div className='w-full md:w-[49%] my-3'>
                        <h4 className='font-semibold text-navy text-xl my-3'>
                            Sustaining continued learning & advancement
                        </h4>
                        <p>
                            Our L&D strategy focuses on three primary objectives:
                        </p>
                        <h4 className='text-hum my-3 text-4xl'>
                            Encouraging lifelong learning
                        </h4>
                        <h4 className='text-hum my-3 text-4xl'>
                            Becoming a learning powerhouse
                        </h4>
                        <h4 className='text-hum my-3 text-4xl'>
                            Shaping the future of work
                        </h4>
                        <p>
                            Our Learning Academy serves as a central hub for online learning that empowers our team to learn according to convenience, suiting their personal and professional commitments. Hosting a range of learning options, from short modules to in-depth courses, it is designed to be user- friendly and engaging. This platform provides each of our team members with the opportunity to upskill, reskill and cross-skill by leveraging top-notch learning resources available right
                            at their fingertips.
                        </p>
                    </div>
                    <div className='w-full md:w-[49%] my-3'>
                        <h4 className='font-semibold text-navy text-xl my-3'>
                            Key L&D highlights
                        </h4>
                        <div className='flex flex-wrap my-3 w-[95%] justify-between'>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                    1,25,593
                                </h2>
                                <p className='text-xl '>
                                    Total learning days (across workforce)
                                </p>
                            </div>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                    3,050
                                </h2>
                                <p className='text-xl '>
                                    Skills developed
                                </p>
                            </div>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                    9,186
                                </h2>
                                <p className='text-xl '>
                                    TCLA Repeat learners
                                </p>
                            </div>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                    88
                                </h2>
                                <p className='text-xl '>
                                    L&D Net Promoter Score
                                </p>
                            </div>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                    12,300+
                                </h2>
                                <p className='text-xl '>
                                    Certifications
                                </p>
                            </div>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                    9.6
                                </h2>
                                <p className='text-xl '>
                                    Learning Person Days / Employee
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-[49%] my-3'>
                        <h4 className='font-semibold text-navy text-xl my-3'>
                            Learning Organisation (‘LO’)
                        </h4>
                        <p>
                            The LO provides employees with access to a vast library of learning resources, encouraging continuous learning. Subject matter experts within the organisation create and deliver learning sessions on various topics, ensuring the knowledge stays relevant and up to date.
                        </p>
                        <div className='flex flex-wrap my-3 w-[95%] justify-between'>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                    76
                                </h2>
                                <p className='text-xl '>
                                    sessions conducted
                                </p>
                            </div>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                    13,200+
                                </h2>
                                <p className='text-xl '>
                                    learning person days (across workforce)
                                </p>
                            </div>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                    76%
                                </h2>
                                <p className='text-xl '>
                                    workforce engaged
                                </p>
                            </div>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                    4.5/5
                                </h2>
                                <p className='text-xl '>
                                    feedback score
                                </p>
                            </div>
                        </div>
                        <h4 className='font-semibold text-navy text-xl my-3'>
                            New World People Leader (‘NWPL’) Programme
                        </h4>
                        <p>
                            Designed to refine the capabilities of our People Managers, enabling them to navigate the complexities of the present dynamic business environment. Focuses on transformative leadership, change management and fostering a culture of accountability and inspiration.
                        </p>
                        <div className='p-2 border-b-4 w-[40%] my-2'>
                            <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                38
                            </h2>
                            <p className='text-xl '>
                                people leaders developed across levels
                            </p>
                        </div>
                        <h4 className='font-semibold text-purp text-xl my-3'>
                            Empowering Future Leaders
                        </h4>
                        <p>
                            We recognise the importance of investing in our talent pipeline to ensure a strong bench of future leaders. Our Leadership Development Programme fosters a culture
                            of continuous learning and growth by equipping team members with the requisite skills and knowledge to excel in leadership roles.
                        </p>
                    </div>
                    <div className='w-full md:w-[49%] my-3'>
                        <div className='p-2 border-b-4 w-[90%] my-2'>
                            <h4 className='font-semibold text-navy text-xl'>
                                Leadership Development Initiatives
                            </h4>
                            <h2 className='text-hum text-4xl font-semibold my-2'>
                                23,113 Hours
                            </h2>
                            <p className='text-xl '>
                                Total learning hours (across eligible workforce)
                            </p>
                        </div>
                        <h4 className='font-semibold text-purp text-xl my-3'>
                            Fostering Diversity and Inclusion
                        </h4>
                        <p>
                            Our diversity and inclusion strategy - Winning Mix, is driven by a continued commitment from the leadership, guiding our actions and decisions. We aim to empower each employee to achieve success and demonstrate their diverse individuality and strengths. The initiatives under the Winning Mix umbrella focus on the three pillars <b className='text-hum'>of building an inclusive culture, creating a diverse talent pool, and enabling policies and infrastructure.</b>
                        </p>
                        <div className='flex flex-wrap my-3  justify-between'>
                            <div className='p-2 border-b-4 w-[31%] my-2'>
                                <h4 className='font-semibold text-purp text-xl my-3'>
                                    Increasing Gender Diversity
                                </h4>
                                <p className=''>
                                    Since its launch, Winning Mix has been instrumental in increasing the diversity representation across the organisation
                                </p>
                            </div>
                            <div className='p-2 border-b-4 w-[31%] my-2'>
                                <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                    41%
                                </h2>
                                <p className='text-xl '>
                                    Increase in gender diversity since the launch of the Winning Mix. The current winning mix stands at 22.5%.
                                </p>
                            </div>
                            <div className='p-2 border-b-4 w-[31%] my-2'>
                                <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                    32%
                                </h2>
                                <p className='text-xl '>
                                    Increase in women hiring since the launch of the Winning Mix. The current new hire mix stands at 25%.
                                </p>
                            </div>
                        </div>
                        <h4 className='font-semibold text-purp text-xl my-3'>
                            Inclusive policies and process and digital transforming of HR practices
                        </h4>
                        <p>
                            Our Inclusive policies and processes, which consists of “care giver leave policy framework’’, “Life Event Assistance Programme (LEAP), “day care facilities” amongst others, are consciously designed to ensure that all employees within Tata Communications feel appreciated and valued at work. Moreover our technology-driven HR approach optimizes operational processes while facilitating seamless adaptation to evolving work trends. This cultivates a culture of innovation and inclusivity, positioning Tata Communications as great place to work by providing superior employee experience.
                        </p>
                    </div>

                    <div className='w-full md:w-[49%] my-3'>
                        <h4 className='font-semibold text-navy text-xl my-3'>
                            Championing Women at Tata Communications
                        </h4>
                        <p>
                            We have a steadfast commitment to cultivating a work environment that nurtures growth and development for women in the workplace. Our strategic business imperative ‘Winning Mix’, helps us harness the power of a diverse and inclusive talent pool.
                        </p>
                        <h4 className='font-semibold text-blue text-xl my-3'>
                            Some key initiatives launched to champion women at Tata Communications include:
                        </h4>
                        <h4 className='font-semibold text-hum text-2xl my-3'>
                            Each One, Bring One
                        </h4>
                        <p>
                            An exclusive women referral programme for India, which leverages existing employee networks to create a funnel of qualified women candidates.
                        </p>
                        <div className='p-2 border-b-4 w-[90%] my-2'>
                            <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                22%
                            </h2>
                            <p className='text-xl '>
                                Women laterals hired in India in FY24, is through this programme. (14% in FY23 before the launch
                                of the program)
                            </p>
                        </div>
                        <h4 className='font-semibold text-hum text-2xl my-3'>
                            Make Each Woman Count
                        </h4>
                        <p>
                            Focuses on recognising women at risk of leaving the company, often due to challenges that are controllable. It ensures mandatory retention dialogues are conducted for all women employees who have submitted their resignations or show signs of disengagement. Proactive steps and solutions are taken to retain such women. This is closely tracked and reported through monthly retention dashboard.
                        </p>
                        <div className='p-2 border-b-4 w-[90%] my-2'>
                            <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                25
                            </h2>
                            <p className='text-xl '>
                                Women retained from the resigned pool in FY24 through this initiative.
                            </p>
                        </div>
                        <div className='p-2 border-b-4 w-[90%] my-2'>
                            <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                53%
                            </h2>
                            <p className='text-xl '>
                                Reduction in women attrition compared to FY23. The current attrition rate for women stands at 13%.
                            </p>
                        </div>
                    </div>
                    <div className='w-full md:w-[49%] my-3'>
                        <h4 className='font-semibold text-hum text-2xl my-3'>
                            Achieve
                        </h4>
                        <p>
                            A leadership development programme introduced by our Chief Financial Officer to empower women in finance and accounting through development journeys and realise the power of diversity.
                        </p>
                        <h4 className='font-semibold text-hum text-2xl my-3'>
                            Walk in My Shoes - Bias Awareness Programme
                        </h4>
                        <p>
                            Cobbler’s Street – A theatre-based session attended by
                            86 people managers (Sr managers+) at Pune and Mumbai location. The session aimed to reflect on the different biases, empathy of being in someone else’s shoes.
                        </p>
                        <h4 className='font-semibold text-hum text-2xl my-3'>
                            Reverse Mentoring
                        </h4>
                        <p>
                            Connects early-career women with senior leaders to exchange insights on strategic, cultural and technological trends.
                        </p>
                        <div className='my-2 bg-purp p-4'>
                            <h4 className='font-semibold text-hum text-2xl mb-3'>
                                Employee testimonials
                            </h4>
                            <h4 className='font-semibold text-xl'>
                                Ankita Kapadia -
                            </h4>
                            <h4 className='text-xl mb-3'>
                                Tax Planning & Structuring
                            </h4>
                            <p>
                                While navigating challenges, my experience has been transformative and unique as I have endured a full 9-month bed rest complicated pregancy. Amid these hurdles, my manager and my team stood by me. They were extremely supportive and offered me flexibility by adjusting call times to suit my availability. My team stayed in touch with me round the clock; I would constantly guide them over calls, messages and more. My team and me would prepare the deliverables, which would then be reviewed by my manager, who would go out of his way to make things happen.
                            </p>
                            <h4 className='font-semibold text-xl mt-3'>
                                Sneha Mishra -
                            </h4>
                            <h4 className='text-xl mb-3'>
                                Supply Chain Management
                            </h4>
                            <p>
                                Returning to work after maternity leave
                                was daunting. I was nervous as it had been
                                a long time away from work. However, my experience of joining back as a new mom at Tata Communications has been really seamless. The hybrid working culture enabled me to efficiently balance both my personal and professional commitments. My colleagues, my manager
                                and my team eased my transition, while stakeholders enabled me to swiftly integrate into the workflow. The positive atmosphere propelled me forward, helping me overcome the guilt of not being with my child and giving me the moral push to have my own career despite starting a family.
                            </p>
                        </div>

                    </div>
                    <div className='w-full md:w-[49%] my-3'>
                        <h4 className='font-semibold text-purp text-2xl my-3'>
                            Talent Succession Planning
                        </h4>
                        <p>
                            Our succession strategy emphasises proactive planning and forward-thinking to enable a smooth transition of leadership and the presence of competent leaders at all organisational levels, ensuring continuity and long-term growth. We integrate our succession planning into our overarching talent development framework, which ensures readiness and adaptability for the future.
                        </p>

                        <h4 className='font-semibold text-purp  my-3'>
                            Talent Succession Planning
                        </h4>
                        <div className='flex flex-wrap my-3  justify-between'>
                            <div className='p-2 border-b-4 w-[31%] my-2'>
                                <img src="./capitals/human/hum12.jpg" className='' alt="" />
                            </div>
                            <div className='p-2 border-b-4 w-[31%] my-2'>
                                <img src="./capitals/human/hum13.jpg" className='' alt="" />
                            </div>
                            <div className='p-2 border-b-4 w-[31%] my-2'>
                                <img src="./capitals/human/hum14.jpg" className='' alt="" />
                            </div>
                        </div>
                        <h4 className='font-semibold text-purp text-2xl my-3'>
                            Promoting a Culture of Appreciation
                        </h4>
                        <p>
                            In keeping with our organisational ethos, we have designed a reward and remuneration framework that fosters a culture of high performance and accountability. This approach ensures that employee efforts are acknowledged and rewarded based on their contributions to our business objectives.
                        </p>
                        <h4 className='font-semibold text-hum text-xl my-3'>
                            Recognition:
                        </h4>
                        <p className='text-hum text-xl'>
                            The ‘Applause’ programme aims to acknowledge discretionary, stretch and innovative contributions aligned to our ‘DRIVE Ahead’ behaviour(s). It focuses on timely appreciation, making it exciting and celebratory. Our ‘Applause’ recognition increased by 30% due to integration of MS Teams plug-in onto the platform.
                        </p>
                    </div>
                    <div className='w-full md:w-[49%] my-3'>
                        <h4 className='font-semibold text-purp text-2xl my-3'>
                            Creating a Culture of Health and Safety
                        </h4>
                        <p>
                            At Tata Communications, creating a safe working environment remains our foremost priority. Our approach combines proactive strategies and technological advancements to create a safe and healthy work environment.
                        </p>
                        <h4 className='font-semibold border rounded border-orange-500 px-2 w-fit text-xl my-3'>
                            Commitment to Compliance
                        </h4>
                        <p>
                            Our approach has constantly evolved with changing legal requirements and going beyond compliance.
                        </p>

                        <h4 className='font-semibold text-navy text-xl my-3'>
                            Proactive Safety culture
                        </h4>
                        <p>
                            Cultivated proactive safety culture which encourages employees
                            to identify and mitigate risks before incidents occur.
                        </p>
                        <h4 className='font-semibold text-navy text-xl my-3'>
                            Training and Capacity building
                        </h4>
                        <p>
                            Training programmes which consist of audio-video modules in local languages, educating staff across levels about workplace hazards and effective mitigation strategies.
                        </p>
                        <h4 className='font-semibold text-navy text-xl my-3'>
                            Technology integration
                        </h4>
                        <p>
                            Deployed digital solutions for hazard Identification, incident reporting and safety inspections. Utilising technology to promote defensive driving and speed detection, particularly in high-risk environments.
                        </p>
                    </div>

                    <div className='w-full md:w-[49%] my-3'>
                        <h4 className='font-semibold text-navy text-xl my-3'>
                            Zero Harm
                        </h4>
                        <p>
                            As a vital element of our Sustainability Strategy, we remain committed to the principle of Zero- Harm to People and Planet.
                        </p>
                        <img src="./capitals/human/hum15.jpg" className='w-[60%] my-1' alt="" />
                        {/* <h4 className='font-semibold text-blue text-xl my-3'>
                            Occupational Health Hazards
                        </h4>
                        <p>
                            Being in the service sector, Tata Communications has minimal occupational health hazard exposure pertaining to its operations. Ergonomics and mental health are crucial for employee well-being in our fast-paced industry. We provide periodic training and use digital tools for ergonomics awareness. Infrastructure upgrades ensure a conducive work environment with
                        </p> */}
                        <h4 className='font-semibold text-blue text-xl my-3'>
                            Occupational Health Hazards
                        </h4>
                        <p>
                            Being in the service sector, Tata Communications has minimal occupational health hazard exposure pertaining to its operations. Ergonomics and mental health are crucial for employee well-being in our fast-paced industry. We provide periodic training and use digital tools for ergonomics awareness. Infrastructure upgrades ensure a conducive work environment with proper lighting, ventilation, and ergonomic furniture.
                        </p>
                    </div>
                    <div className='w-full md:w-[49%] my-3'>
                        <img src="./capitals/human/hum16.jpg" className='w-[80%] my-3' alt="" />
                        <p>
                            We also offer access to mental health resources like counselling services and employee assistance programmes (EAP). Our flexible work policies support employees facing challenges, promoting work- life balance and stress management. We foster a supportive culture
                            that encourages open dialogue about mental health.
                        </p>
                        <h4 className='font-semibold text-navy text-xl my-3'>
                            Major Health and Safety Initiatives
                        </h4>
                        <ul className='my-3 px-4'>
                            <li className='my-2'>
                                Partnered with unlock.fit, one of the leading DNA- based personalized wellness company that leverages
                                the power of genomics and mobile technology.
                            </li>
                            <li className='my-2'>
                                Awareness video on First Aid and basic life support was developed with respect to health emergencies that may occur during Tata Communications operations
                            </li>
                            <li className='my-2'>
                                External training provided on high-risk operations such as working in confined spaces.
                            </li>
                            <li className='my-2'>
                                Occupational health risk assessment.
                            </li>
                            <li className='my-2'>
                                Workshop on Behavioural Based Safety (BBS) for Business heads and manag
                            </li>
                        </ul>
                        <div className='flex flex-wrap my-3  justify-between'>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                    100%
                                </h2>
                                <p className='text-xl '>
                                    New joiners were introduced to health and safety protocols
                                </p>
                            </div>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-hum text-4xl font-semibold m-0 mt-5'>
                                    1,424
                                </h2>
                                <p className='text-xl '>
                                    Employees trained in first aid and basic life support
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-[49%] my-3'>
                        <h4 className='font-semibold text-purp text-2xl my-3'>
                            Major Health and Safety Initiatives
                        </h4>
                        <p>
                            We adhere to the highest standards of ethics and integrity and make sure that human rights are respected across all operational levels. Central to this commitment are our core principles of zero tolerance for sexual harassment and discrimination, along with a steadfast dedication to providing equal employment opportunities. These principles guide our decisions and promote a culture of respect, equality and safety.
                            <br /><br />
                            We published the Business and Human Rights Policy, committing to high ethical standards in all operations relevant to stakeholders. This policy is aligned to and follows various national and international frameworks on Human Rights. This policy is applicable to all our rightsholders as identified by the Company and encompasses salient elements of business human rights.
                        </p>
                    </div>
                    <div className='w-full md:w-[49%] my-3'>
                        <h4 className='font-semibold text-navy text-xl my-3'>
                            Reporting and Redressal:
                        </h4>
                        <p>
                            Employees and contractors are encouraged to report cases of human rights violations, including discrimination and harassment, through our Dignity in Workplace (‘DWP’), PoSH and Whistleblower mechanisms.
                        </p>
                        <h4 className='font-semibold text-blue text-xl my-3'>
                            Key initiatives undertaken in FY 2024
                        </h4>
                        <p>
                            As part of our endeavour to uphold Business Human Rights (‘BHR’) across our supply chain, we have undertaken the following initiatives -
                        </p>

                    </div>
                    <img src="./capitals/human/hum17.jpg" className=' my-3' alt="" />
                    <img src="./capitals/human/hum18.jpg" className=' my-3' alt="" />
                </div>

            </div>
        </div>
    )
}

export default HumanCapital