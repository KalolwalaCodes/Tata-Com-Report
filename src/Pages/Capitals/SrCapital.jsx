import React from 'react'
import CapsTemplate from '../../Components/CapsTemplate/CapsTemplate';

const SrCapital = () => {
    const values = [
        { val1: '170,000', val2: 'LinkedIn newsletter subscribers' },
        { val1: '₹25.45 crores', val2: 'Contributions in CSR activities' },
        { val1: '5', val2: 'Awareness sessions with Tier I and Tier II suppliers' },
    ];

    return (
        <div>
            <CapsTemplate src={'./CapsTemplate/SCaps.jpg'} title={"Social and \u000aRelationship"} values={values} theme={"#e97725"} gradient={"#e97725"} ico={"./Homepage/sr-icon5.svg"} />
            <div className='marginal'>
        <div>
            <p className='text-2xl font-bpld py-4'>Building Reliable Relationships</p>
            <p className='text-2xl text-[#0081a5] font-bold'>At Tata Communications, we aspire to build stronger bonds with stakeholders
            and create value for each and every life that we touch. We are conscious of our
            collective responsibility towards ushering a meaningful change which not only
            empowers people but also secures sustainable relationships with communities,
            customers, business partners and investors alike.</p>
        </div>
        <div>
            <p className='text-xl font-bold py-4 text-[#165773]'>Nurturing lasting relationships</p>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div>
                        <p className='py-4'>At Tata Communications, we
                        believe in forging mutually
                        beneficial ties with our stakeholders
                        including suppliers, communities,
                        investors and regulators to
                        uphold the highest standards of
                        accountability, transparency, fairness
                        and ethical conduct.</p>
                        <p className='py-4 font-bold text-[#5897cb]'>Customers</p>
                        <p className='py-4'>Customers form the very core of our
                        operations and strategies at Tata
                        Communications. We are committed
                        to building deep, productive and
                        lasting customer relationships
                        and to devise multi-faceted
                        solutions that cater to the unique
                        requirements of our customers.</p>

                        <div className='py-4'>
                            <p className='text-6xl font-bold text-[#e97724]'>274</p>
                            <p className='text-xl'>Million Dollar Club customers</p>
                        </div>
                        <div className='py-4'>
                            <p className='text-6xl font-bold text-[#e97724]'>41</p>
                            <p className='text-xl'>Net million dollar customers
                            added</p>
                        </div>
                </div>
                <div >
                            <div>
                                <p className='py-4'><span className='font-bold'>Tata Communications Execute
                                WeConnect (EWC)</span> – One of our
                                flagship customer engagement
                                platform facilitating direct
                                engagement and driving deeper
                                discussions between our senior
                                leadership and our customers,
                                developing an environment where
                                innovative solutions are co-created
                                to meet specific business needs.</p>

                                <p className='py-4'><span className='font-bold'>Interactive Discussions:</span> Quality
                                discussions, industry speakers,
                                exchange of ideas and insights have made this a much sought after
                                annual engagement.</p>
                                <p className='py-4'>Technology Showcases:
                                Opportunity for Tata
                                Communications to demonstrate
                                our latest innovations and digitalfirst
                                technologies we are building
                                for customers to future-proof their
                                businesses and adapt to changing
                                market conditions.</p>

                                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                                    <div className=''>
                                        <p className='text-xl'>Engaged</p>
                                        <p className='text-6xl font-bold text-[#e97724]'>150+</p>
                                        <p className='text-xl'>accounts in FY24</p>
                                    </div>
                                    <div className=' pt-8'>
                                        <p className='text-6xl font-bold text-[#e97724]'>2.5Mn</p>
                                        <p>Users on website</p>
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
            <div className='flex justify-center my-4'>
                <img src="./Relationship/rel-1.jpg" alt="" className='w-[50%]' />
            </div>
        </div>
        <div>
              <p className='font-bold'>Leadership in the Fast Lane</p>
             <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
                <div>
                        <p className='py-4'>Tata Communications has been a
                        trusted partner for leading global
                        sports, delivering live action from
                        across 5 continents to millions
                        of fans globally. Leading sports
                        like Formula One, Formula E are
                        successful examples of global
                        businesses that are leveraging
                        technology to transform their
                        operations, delivering great</p>
                </div>
                <div>
                        <p className='py-4'>customer experience as well as
                        making significant progress against
                        their sustainability goals.</p>

                        <p className='py-4'>We invited senior executives from
                        global enterprises to our series
                        of ‘Leadership in the Fast lane’
                        programs to experience technology
                        in action from behind the scenes
                        at these sporting events, and learn</p>
                </div>
                <div>
                        <p className='py-4'>from the sport as well as their
                            peers on how digital technology
                            is transforming businesses across
                            all areas. More than 250 senior
                            executives from 200+ global
                            accounts joined us for this program
                            and an additional 25,000+ audience
was engaged via digital platforms.</p>
                </div>
             </div>
        </div>

        <div>
            <p className='font-extrabold py-4'>TCX Tata Communications Customer Experience Portal</p>
            <p>We continue being committed in empowering digital transformation journeys of our clients through advanced digital
                solutions. Our Customer Experience platform, TCX Tata Communications, focuses on ease of doing business, across
                the Buying, Implementation and Life Cycle management journey.</p>
                <br />
            <p>To ensure customer privacy, TCX
                    Tata Communications adheres to
                    stringent data protection protocols.
                    We actively monitor and address
                    any issues related to privacy
                    breaches or complaints. Over
                                                    the past year, we have received  minuscule number of complaints
                                regarding privacy, reflecting our
                                commitment of maintaining high
                standards of customer data security.</p>
                 <br />
                   <p>With TCX Tata Communications, we
                                offer customers a new-age scalable and flexible self-service portal. The
                    integrated platform enables quick
                    and easy access to all our B2B
                    engagements. It is also an intuitive
                    tool that effectively acts as a
                    ‘Single Pane of Glass’.</p>
        </div>
        <div className='my-4'>
            <img src="./Relationship/rel-2.jpg" alt="" />
        </div>
        <div>
             <p className='text-xl font-bold text-[#0081a5] py-4'>Suppliers</p>
             <p>Suppliers form a critical component
                of our operational success and
                are pivotal in enabling us to offer
                quality products and services to our
                customers. We ensure responsible
                sourcing with a collaborative
                approach while promoting
                transparency, sustainability and
                ethical business practices. Our
                suppliers are subject to Supply
                Chain management Policy, Supplier
                code of conduct and Sustainable
                supply chain policy, which guide our
                procurement practices.</p>
            <p className='text-xl font-bold py-8'>Supplier Engagement Focus Areas</p>
            <div className='grid lg:grid-cols-5 sm:grid-cols-1 gap-4'>
                <div>
                    <img src="./Relationship/rel-3.jpg" alt="" />
                </div>
                <div>
                    <img src="./Relationship/rel-4.jpg" alt="" />
                </div>
                <div>
                    <img src="./Relationship/rel-5.jpg" alt="" />
                </div>
                <div>
                    <img src="./Relationship/rel-6.jpg" alt="" />
                </div>
                <div>
                    <img src="./Relationship/rel-7.jpg" alt="" />
                </div>
            </div>
        </div>
        <div>
            <p className='text-xl font-bold py-4'>Governance in Supply Chain</p>
            <p className='py-4'>Our Sustainable Supply Chain Policy
                    is designed to uphold the highest
                    ethical standards and integrity
                    in our business operations. This
                    policy promotes sustainability and
                    responsible corporate behaviour
                    throughout our supply chain.
                    It emphasises environmental
                    stewardship, occupational health
                    and safety as well as ethical conduct,
                    aligning with our Supplier Code
                    of Conduct. Our Supplier Code
                    of Conduct is a comprehensive
                    framework which outlines Tata
                    Communications’ expectations
                    regarding supplier conduct in relation
                    to its’ 5 key principles:</p>
            <ul className='py-4 px-4 flex justify-between'>
                <li>Anti-corruption & anti-bribery</li>
                <li>Ethics & transparency</li>
                <li>Labour & human rights</li>
                <li>Environment, health & safety</li>
                <li>Information security</li>
            </ul>
            <p className='py-4'>We encourage our suppliers
                in adopting and adhering to
                stringent environmental, social, and
                governance standards. By doing
                so, we ensure that our business
                operations and extended supply
                network contribute positively
                to societal and environmental
                well-being, developing a culture
                of compliance, transparency,
                and sustainability across all
                operational geographies.</p>
        </div>
        <div>
            <p className='text-xl font-bold py-4'>Strategic Supply Chain Management</p>
            <p className='py-4'>Our procurement strategy involves
                sourcing materials from original
                equipment manufacturers or their
                accredited distributors, tapping
                into local and global supply chains
                across multiple tiers. Additionally,
                we entrust our contractors with the
                comprehensive management of
                general services, ensuring end-toend
                accountability.</p>
                            <p className='py-4'>Our suppliers are segregated into
                four categories based on strategic
                importance, wherein every category
                indicates the level of engagement
                with the supplier:</p>
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-4 py-4'>
                <div>
                    <img src="./Relationship/rel-8.jpg" alt="" />
                </div>
                <div>
                    <img src="./Relationship/rel-9.jpg" alt="" />
                </div>
                <div>
                    <img src="./Relationship/rel-10.jpg" alt="" />
                </div>
                <div>
                    <img src="./Relationship/rel-11.jpg" alt="" />
                </div>
            </div>

                    <p className='py-4'>Our Suppliers are divided into three
                    groups using the ABC analysis,
                    which takes into account their share
                    of spend. Suppliers who cover 80%
                    of the spend are categorised as
                    category A, while those with upto
                    next 15% are placed in category
                    B. The remaining suppliers
                    in the bottom 5% spend are
                    categorized as category C.</p>
                    <p className='text-xl font-extrabold py-4'>Survey</p>
                    <p className='py-4'>We encourage our suppliers to freely
                    communicate with us and share their
                    grievances or issues.</p>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                        <div>
                            <p className='py-4 font-extrabold text-[#f99528]'>Supplier Feedback Survey</p>
                            <p>To identify areas of improvement
                            and enhance operational efficiency.</p>
                        </div>
                        <div>
                            <p className='py-4 font-extrabold text-[#f99528]'>Supplier Diversity Survey</p>
                            <p>To understand diversity policies and
                            programmes of our key suppliers.</p>
                        </div>
                    </div>
        </div>
        <div className='my-8'>
            <p className='text-xl font-bold py-4'>Strengthening our communication with suppliers</p>
            <p className='py-4'>At Tata Communications, we promote responsible practices across the supply chain.</p>
             <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                    <div className=''>
                        <img src="./Relationship/rel-12.jpg" alt="" />
                    </div>
                    <div>
                        <p className='text-xl font-bold'>A Sustainable and Responsible Supply Chain</p>
                        <p className='py-4'>We have implemented Sustainable Supply Chain Framework (SSCF) to promote responsible sourcing practices. Our
                            objective is to enhance our commitment to sustainability by analysing risks in key areas such as procurement decisions,
                            supplier selection, supplier engagement, and supplier performance management. There are four pillars of this framework:</p>
                        <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-2'>
                            <div>
                                <p className='text-xl font-bold text-[#5c4c85]'>ESG Assessment</p>
                                <p className='py-4'>Assessment of 47
                                strategic suppliers on
                                ESG criteria based
                                on their sustainability
                                policies, practices
                                and activities in
                                partnership with Ecovadis.</p>
                            </div>
                            <div>
                                <p className='text-xl font-bold text-[#5c4c85]'>Due Diligence</p>
                                <p className='py-4'>Includes screening using
                                    an ESG checklist. All new
                                    Requests for Proposals
                                    (RFPs) from suppliers
                                    that exceed a predefined
                                    threshold value are
                                    evaluated, assigning
                                    a 5% weightage to
                                    sustainability in Technocommercial
                                    evaluation
                                    for supplier selection.</p>
                            </div>
                            <div>
                                <p className='text-xl font-bold text-[#5c4c85]'>Monitoring</p>
                                <p className='py-4'>Periodic audits by
                                    our teams on health,
                                    safety and compliance
                                    aspects of all our service
                                    providers. Engaged with
                                    key strategic suppliers
                                    on climate mitigation
                                    efforts - particularly
                                    those contributing to
                                    Scope 3 emissions.</p>
                            </div>
                            <div>
                                <p className='text-xl font-bold text-[#5c4c85]'>Supplier Diversity</p>
                                <p className='py-4'>We encourage supplier
                                    diversity and include the
                                    participation of varied
                                    groups. Our supplier
                                    base now includes 2,541
                                    suppliers of which 484
                                    are MSME suppliers
                                    (19%) and 219 are diverse
                                    suppliers (8.6%), out
                                    of which 26 are from
                                    Tata Affirmative Action
                                    Program, growing from 16
                                    in the previous fiscal year.</p>
                            </div>
                            
                            
                        </div>
                    </div>
             </div>
        </div>
        <div>
            <p className='py-4 font-bold text-xl'>Training and Innovation</p>
            <p className='py-4'>We provide awareness sessions
                on the Supplier Code of Conduct,
                and Whistleblower Policy and
                entrepreneur programs under TAAP.
                We disseminate knowledge on
                Corporate Sustainability Goals and
                ESG assessment through informative
                webinars, creating a culture of
                responsible business practices.
                Additionally, our engagement with
                partners through Innovista enables
                us to showcase pioneering projects
                and initiatives, further bolstering
                collaborative efforts towards
                technological advancement and
                sustainable growth.</p>
                <p className='py-4'>The implementation of several digital interventions has enhanced
                engagement with our business partners. These initiatives aim to
                streamline communication, facilitate quicker responses and foster
                stronger partnerships within the supply chain ecosystem.</p>

                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                    <div>
                            <p>An API integrated supplier
                            onboarding platform
                            has been developed for
                            efficient integration of new
                            suppliers.</p>
                    </div>
                    <div>
                            <p>Automated email
                            notifications are delivered
                            to suppliers to notify them
                            about the creation or
                            change of purchase orders.</p>
                    </div>
                </div>

                <p className='font-bold text-xl py-4'>Supplier diversity at Tata Communications</p>
                <p className='py-4'>We recongnise the significance of diversity and
                    inclusivity in the business landscape, focusing
                    on upstream & downstream suppliers/vendors,
                    providing them opportunities in employability &
                    entrepreneurship aspects. Unique & new initiatives
                    are introduced by Supply Chain team which focus
                    on AA communities. “Supply Chain Stimulating
                    Employability & Entrepreneurship Development (SEED)
                    Programme is one such programme. The SCM SEED
                    programme has been designed to foster economic
                    empowerment, inclusivity, and sustainable growth
                    within our supplier ecosystem. This initiative plays a
                    crucial role in aligning with our broader organizational
                    mission and our commitment to the Tata Affirmative
                    Action Programme (TAAP).</p>
                <ul className='py-4'>
                    <p className='py-4 font-bold text-xl'>Under this initiative, we accomplished
                    following programmes:</p>
                    <li>Sensitization on TAAP to Supply
                    Chain Sourcing team.</li>
                    <li>Social Compact Workshop for
                    Contractor Workforce.</li>
                    <li>Collaboration opportunities with Tata Motors’
                    Grihini Social Welfare Society.</li>
                    <li>Senior Leadership Mentorship Programme.</li>
                    <li>Sustainability in Supply Chain Innovathon.</li>
                </ul>
                <div className='mt-4'>
                    <img src="Relationship/rel-13.jpg" alt="" className=''/>
                </div>
        </div>
    </div>
            <div className='marginal my-10'>
                <div className='flex flex-wrap justify-between'>
                    <div className='w-full md:w-[49%] pb-3 mr-2'>
                        <h4 className='font-semibold text-blue my-5 text-xl'>Supporting our Communities*</h4>
                        <p>
                            Our dedicated endeavours have enabled lasting changes within society, empowered people, created sustainable livelihood sources
                            and unlocked opportunities for underserved sections of society. Guided by our CSR Vision of ‘Creating connected societies
                            to advance the well-being of
                            people and planet,’ we aspire to continuously impact communities by differentiating ourselves as a unique ecosystem of connections.
                            <br /><br />
                            We contribute to Sustainable Development through our Corporate Social Responsibility (CSR) projects focused on creating a positive impact on the economy, society,
                            and the environment. Our CSR framework is built on the foundation of integrity and good corporate governance. We believe that technology plays a significant role
                            in accelerating human development and resolving global challenges.
                            Our CSR vision is aligned with
                            the United Nations’ Sustainable Development Goals (SDGs). We approach social and environmental challenges to create value for all our customers, employees, shareholders, and communities for long-term success. While working towards the benefit of the community at large, we respect the culture, customs
                            and traditions of each country and region where we operate. Our CSR programmes derive inspiration from Tata Group’s philosophy ‘to improve the quality of life of the communities we serve globally through long term stakeholder value creation based on leadership with trust’.
                            <br /><br />
                            <b>
                                Our corporate social responsibility projects encompass the following areas:
                            </b>
                        </p>
                        <img src="./capitals/sr/sr1.jpg" className='w-[70%] my-3' alt="" />
                        <h4 className='font-semibold my-5 text-xl'>Our Reach</h4>
                        <p>
                            We understand that being a digital ecosystem enabler, our sphere
                            of influence extends beyond our immediate geographical presence. Thus, the selection of regions
                            for our CSR projects is based on our philosophy of ‘Right thing
                            to do’. It reflects our intent to reach underserved communities in locations which are in dire need of social interventions, (due to historical, geographical isolation) with low values on Human Development indicators (such as in ‘Aspirational Districts’ identified by the Government of India Apart from India.
                        </p>
                        <div className='w-full mt-2 py-3 border-y border-black text-sm'>
                            <p>
                                *Information provided under this section pertains to Tata Communications Limited and its Indian subsidiaries
                                <br />
                                [For more information on CSR projects and expenditure, read Principle 8 of BRSR]
                            </p>
                        </div>
                    </div>
                    <div className='w-full md:w-[49%] '>
                        <h4 className='font-semibold my-5 text-xl'>
                            Partnerships to Improve Outreach
                        </h4>
                        <p>
                            We implement our programmes in association with Non-governmental organizations (‘NGOs‘) which helps us harness their inherent domain expertise and other capabilities. We realize that it takes time and consistent effort to change status quo and bring about a change,
                            and hence, we establish multi- year partnerships with NGOs ensuring there is adequate time to create impact.
                            <br /><br />
                            We follow a life cycle approach to partnership and have adopted a multi-layered evaluation process for partner selection. After conducting thorough due diligence, we select regional and/or national partners. Our CSR projects also undergo through extensive monitoring
                            and evaluation by our leadership and Board Committees, using a structured framework.
                        </p>
                        <div className='flex flex-wrap my-3  justify-between'>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-orange text-4xl font-semibold m-0 mt-5'>
                                    15
                                </h2>
                                <p className='text-xl '>
                                    NGO Partners
                                </p>
                            </div>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-orange text-4xl font-semibold m-0 mt-5'>
                                    20
                                </h2>
                                <p className='text-xl '>
                                    CSR Projects
                                </p>
                            </div>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-orange text-4xl font-semibold m-0 mt-5'>
                                    9,82,471
                                </h2>
                                <p className='text-xl '>
                                    People benefitted
                                </p>
                            </div>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-orange text-4xl font-semibold m-0 mt-5'>
                                    10
                                </h2>
                                <p className='text-xl '>
                                    States in India covered
                                </p>
                            </div>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-orange text-4xl font-semibold m-0 mt-5'>
                                    8
                                </h2>
                                <p className='text-xl '>
                                    Aspirational districts in India covered
                                </p>
                            </div>
                        </div>
                        <h4 className='font-semibold my-5 text-xl'>Tata Affirmative Action Programme (‘TAAP’)
                        </h4>
                        <p>
                            The Tata Affirmative Action Programme (‘TAAP’), a Tata group-level initiative, has been implemented to support the underserved communities in India by providing equal opportunities and inclusivity through mitigating structural and social imbalances. This is consistent with the affirmative action (‘AA’) framework of the Confederation of Indian Industry, which focuses on four areas of development such as employment, employability, entrepreneurship and education. Our programmes are designed to improve the quality of life of the undeserved communities as primary beneficiaries particularly Dalits and Tribals, women and persons with disabilities (‘PWD’) by utilizing our expertise in digital enablement.
                        </p>
                    </div>
                    <div className='w-full my-3'>
                        <h4 className='font-semibold my-5 text-blue text-2xl'>Education
                        </h4>
                        <img src="./capitals/sr/sr2.jpg" className='w-[90%] my-3' alt="" />

                        <img src="./capitals/sr/sr3.jpg" className='w-[90%] my-3' alt="" />

                        <img src="./capitals/sr/sr4.jpg" className='w-[90%] my-3' alt="" />
                    </div>

                    <div className='w-full md:w-[49%] '>
                        <h4 className='font-semibold my-5 text-xl'>Global Employee Volunteering Programme
                        </h4>
                        <p>
                            Our employees play a vital role in our community development and outreach programmes. The Global Employee Volunteering Programme (‘GEVP’), governed by the motto of ‘for a better world and workplace’, enables employees to contribute
                            their time, skills and passion
                            for addressing social and environmental issues in different parts of the world.
                            <br /><br />
                            Through skill-based volunteering and leadership development opportunities, GEVP adds value to our CSR programmes, engaging more than 16,206 employees
                            in various social enrichment activities. These activities focus on areas such as education, women empowerment, youth, health, environment and people with disabilities, ensuring maximum participation and impact.
                        </p>
                        <div className='flex flex-wrap my-3  justify-between'>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-orange text-4xl font-semibold m-0 mt-5'>
                                    16,206
                                </h2>
                                <p className='text-xl '>
                                    Number of employee volunteers
                                </p>
                            </div>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-orange text-4xl font-semibold m-0 mt-5'>
                                    94,671
                                </h2>
                                <p className='text-xl '>
                                    Volunteering hours
                                </p>
                            </div>
                        </div>
                        <h4 className='font-semibold my-3 text-xl text-blue'>Investors
                        </h4>
                        <p>
                            We believe in maintaining transparent and open communication, and for this, we actively engage with investors, analysts and other stakeholders through various channels. Quarterly Earnings Calls, Annual Investor
                            Day, Meetings and Conferences; Roadshows, one on one interactions and Q&A sessions enable us
                            to help investors, analysts and prospective investors understand our growth prospects, outlook and plans. Investor feedback
                            is regularly shared with senior management and plays a crucial role in enhancing and simplifying our communications with investors.
                        </p>
                        <div className='p-2 border-b-4 w-[60%] my-2'>
                            <h2 className='text-orange text-4xl font-semibold m-0 mt-5'>
                                150+
                            </h2>
                            <p className='text-xl '>
                                attendees in - person every year at Annual Institutional and Analyst Day
                            </p>
                        </div>
                    </div>

                    <div className='w-full md:w-[49%] '>
                        <h4 className='font-semibold my-3 text-xl text-navy'>
                            Our primary focus areas include:
                        </h4>
                        <img src="./capitals/sr/sr5.jpg" className='w-[100%] border-b border-black my-3' alt="" />
                        <h4 className='font-semibold my-3 text-xl text-navy'>
                            Enhancing Investor Engagement
                        </h4>
                        <p>
                            We are committed to fostering long- term relationships with Domestic Institutional Investors (‘DIIs’) and Foreign Institutional Investors
                            (‘FIIs’) who share our optimism
                            and have faith in our growth prospects. Over the past 18 months, we have increased our presence
                            in international roadshows and conferences to enhance visibility and connect with a wider investor base. We strategically organise roadshows in key global regions of APAC, UK, EMEA and US to engage with FIIs and reinforce our growth narrative. We also engage with our investors for comforting / addressing their concerns through regular interactions.
                        </p>
                        <img src="./capitals/sr/sr6.jpg" className='w-[100%] border-b border-black my-3' alt="" />
                    </div>

                    <div className='w-full md:w-[49%] '>
                        <h4 className='font-semibold my-3 text-xl text-blue'>
                            Regulatory and Industry Bodies
                        </h4>
                        <p>
                            We place significant emphasis on actively engaging with regulatory bodies and industry associations to ensure compliance with evolving regulations. We participate in industry forums and directly engage with regulators through forums and industry associations.
                        </p>
                        <h4 className='font-semibold my-3 text-xl text-navy'>
                            Regulatory Compliance and Engagement with Industry Bodies
                        </h4>
                        <p>
                            At Tata Communications, we have an established culture to prioritise adherence to regulatory norms. We proactively anticipate and address regulatory requirements and actively engage with governing bodies.
                            <br /><br />
                            Through our network of legal counsel and consultants, we strive to ensure complete compliance with country specific rules and regulations. Our expertise in
                            the domain of communication technology enables us to share meaningful insights and information about data driven digital innovations with regulatory authorities from different parts of the world. It facilitates open and transparent communication, thereby affirming trust and establishing our repertoire as a reliable digital service provider.
                            <br /><br />
                            We ensure active participation
                            in various industry forums and seminars across the world, both directly and through membership in industry associations. It
                            allows us to stay informed about industry developments and contribute to the future of the telecommunications sector.
                        </p>
                        <h4 className='font-semibold my-3 text-xl text-navy'>
                            Global
                        </h4>
                        <p>
                            We provided valuable insights pertaining to the security of communications infrastructure
                            to OFCOM (the United Kingdom telecommunications regulator)
                            and the UK National Cyber
                            Security Centre in the United Kingdom. We also made a fraud prevention presentation to OFCOM. During the year, we were invited
                            to participate in an emerging technology regulatory Sandbox in the Kingdom of Saudi Arabia where we showcased our connected car capabilities and partnered with the regulator to open up the market
                            to more advanced technologies.
                            We have also filed comments in
                            a U.S. Federal Communications Commission proceeding and U.S. FCC proceeding. We leverage our memberships in global organizations to represent our position on
                            issues impacting business and
                            new areas like Captive Private Networks and M2M Services.
                        </p>
                        <div className='p-2 border-b-4 w-[60%] my-2'>
                            <p className='text-xl '>
                                Member of
                            </p>
                            <h2 className='text-orange text-4xl font-semibold m-0 my2'>
                                i3Forum
                            </h2>
                        </div>
                    </div>
                    <div className='w-full md:w-[49%] '>
                        <h4 className='font-semibold my-3 text-xl text-navy'>
                            India
                        </h4>
                        <p>
                            We engage with various Indian industry associations to protect business interests amidst regulatory changes and industry developments. India’s highly regulated telecom market requires stringent compliance. We align our business with licensing and regulatory compliance requirements through an internal online compliance monitoring mechanism. This system ensures timely submissions of compliance reports to regulators, licensors, and other statutory authorities.
                        </p>
                        <h4 className='font-semibold my-3 text-xl text-orange'>
                        Key Achievements
                        </h4>
                        <ul className='my-3 px-4'>
                            <li className='my2'>
                            Active response to ten consultation papers in FY 2023-24, with several favourable recommendations from TRAI on topics like Cable Landing Stations, telecom reforms, and ease of doing business.
                            </li>
                            <li className='my2'>
                            Successful advocacy efforts led to creating a positive impact on issues relating to regulatory matters.
                            </li>
                        </ul>
                        <div className='p-4 my-3 bg-orange'>
                        <h4 className='font-semibold mb-3 text-xl '>
                        Industry associations
                        </h4>
                        <h4 className='font-semibold mb-3 text-orange text-xl '>
                        Global
                        </h4>
                        <ul className='my-3 px-4'>
                            <li className='my2'>
                            International Telecommunication Union (ITU)
                            </li>
                            <li className='my2'>
                            Global System for Mobile Communications Association (GSMA)
                            </li>
                            <li className='my2'>
                            Cloud Security Alliance (CSA)
                            </li>
                            <li className='my2'>
                            LoRa Alliance
                            </li>
                            <li className='my2'>
                            Mobile Ecosystem Forum
                            </li>
                        </ul>
                        <h4 className='font-semibold mb-3 text-orange text-xl '>
                        India
                        </h4>
                        <ul className='my-3 px-4'>
                            <li className='my2'>
                            Department of Telecommunications (‘DOT’), Government of India
                            </li>
                            <li className='my2'>
                            Telecom Regulatory Authority of India (‘TRAI’)
                            </li>
                            <li className='my2'>
                            Internet Service Providers Association of India (‘ISPA’)
                            </li>
                            <li className='my2'>
                            Federation of Indian Chambers of Commerce and Industry (‘FICCI’)
                            </li>
                            <li className='my2'>
                            National Internet Exchange of India (‘NIXI’)
                            </li>
                            <li className='my2'>
                            ITU-APT Foundation of India
                            </li>
                            <li className='my2'>
                            - ASSOCHAM
                            </li>
                            <li className='my2'>
                            - TSDSI (Telecommunications Standards
                                Development Society, India)
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SrCapital