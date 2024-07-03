import React from 'react'
import CapsTemplate from '../../Components/CapsTemplate/CapsTemplate';

const NaturalCapital = () => {
    const values = [
        { val1: '1,300', val2: 'manhours training imparted to employees on environmental sustainability topics1' },
        { val1: '635', val2: 'EV trips taken by employees for business travel' },
        { val1: '13,000', val2: 'cookstoves distributed under smart cookstoves programme' },
        { val1: '500', val2: 'acres of plantation completed under Climate Sustainability through horticulture project' },
        { val1: 'A-', val2: 'rating achieved in CDP Climate change and CDP Supplier Engagement Rating' },
        { val1: '100%', val2: 'of major Indian facilities certified as per ISO 14001 and ISO 45001 standards.' },
    ];
    return (
        <div>
            <CapsTemplate src={'./CapsTemplate/NCaps.jpg'} title={"Natural"} values={values} theme={"#b3ba35"} gradient={"#b3ba35"} ico={"./Homepage/nat-icon3.svg"} />
            <div className='marginal my-10'>
                <p className='text-green text-2xl font-semibold'>
                    To inculcate sustainability practices across our operations and contribute towards a planet-positive environment, we are consciously limiting energy usage, adopting greener methods and aspiring to achieve efficient resource utilisation. Alongside, our efforts to build a stronger digital ecosystem empower us to pave the path for a better future.
                </p>

                <div className='w-full md:w-[75%]'>
                    <img src="./capitals/natural/nat1.jpg" alt="" />
                    <img src="./capitals/natural/nat2.jpg" alt="" />
                </div>
                <div className='flex flex-wrap justify-between'>
                    <div className='w-full md:w-[49%] my-3'>
                        <h4 className='font-semibold text-navy my-3'>
                            Climate change and energy management
                        </h4>
                        <p>
                            We recognise the urgency of the climate crisis and remain dedicated to mitigating its impact. To take positive action for the prevention of climate change, we have developed a comprehensive climate action strategy. It integrates industry best practices with a deep understanding of our unique business risks and opportunities.
                        </p>
                        <h4 className='font-semibold text-blue  my-3'>
                            Eight Pillars of Action
                        </h4>
                        <p>
                            Our strategy is built on eight key climate action levers that address operational and value-chain decarbonisation. They have been carefully chosen to address existing and emerging climate risks. As part of this strategy, various planning tools will be implemented, including our internal carbon pricing mechanism, which will guide decision- making and incentivise low-carbon choices. It is also anticipated to help in transparent disclosures through regular reporting.
                        </p>
                        <img src="./capitals/natural/nat3.jpg" alt="" />
                        <img src="./capitals/natural/nat4.jpg" alt="" />

                    </div>
                    <div className='w-full md:w-[49%] my-3'>
                        <h4 className='font-semibold text-blue  my-3'>
                            Enhancing Energy Efficiency
                        </h4>
                        <p>
                            Energy efficiency is one of the key decarbonisation levers for reducing and optimising our energy demand while accommodating growing business needs. To this end, we invest significantly in our energy efficiency projects to improve the operations of offices, networking centres and Point of Presence (‘PoP’) locations while addressing any gaps in the infrastructure.
                        </p>
                        <ul className='my-3 mx-5'>
                            <li className='my-2'>
                                <b>7.7 million kwh </b>energy saved, resulting in cost savings of D7.4 crores in India
                            </li>
                            <li className='my-2'>
                                Power usage effectiveness (‘PUE’) in network centres improved to 1.5 in India and global locations
                            </li>
                            <li className='my-2'>
                                Energy intensity improved to <b>83.6 Mwh</b> per million- unit revenue in USD
                            </li>
                        </ul>
                        <h4 className='font-semibold text-blue  my-3'>
                            Transition to Renewable Energy
                        </h4>
                        <p>
                            Recognising the crucial role of renewable energy in reducing carbon emissions, we are actively seeking opportunities to increase the proportion of renewables in our energy portfolio. Our renewable energy portfolio is focused to bring cost effectiveness with less volatile prices and compete with conventional electricity tariffs.
                        </p>
                        <ul className='my-3 mx-5'>
                            <li className='my-2'>
                                <b>27% </b>of total energy usage from renewable sources
                            </li>
                            <li className='my-2'>
                                We added <b>14.64 million</b> units of renewable energy capacity at our prominent office locations
                            </li>
                            <li className='my-2'>
                                <b>8.5 million</b> units at Wall, US and Seixal, Portugal with a combination of on-site installation and third-party purchases
                            </li>
                            <li className='my-2'>
                                <b>8</b> of our offices in India, including Ambattur, Equinox, BKC, Vashi, Mahape, Arvi, SDF Kolkata and VSB Chennai have become <b>100% RE-operated</b>
                            </li>
                            <li className='my-2'>
                                In countries such as Portugal, Spain and the
                                US, <b>6</b> of our offices have become <b>100% RE-operated</b>
                            </li>
                        </ul>
                        <h4 className='font-semibold text-blue  my-3'>
                            Introducing EVs and Cleaner Fuel Options
                        </h4>
                        <ul className='my-3 mx-5'>
                            <li className='my-2'>
                                We are actively exploring options to transition to sustainable business travel and employee commuting practices.
                            </li>
                            <li className='my-2'>
                                Sustainable Aviation Fuel (‘SAF’) partnership with Air France, KLM and Lufthansa,
                                to become the first Indian corporate to collaborate
                                on SAF procurement
                            </li>
                            <li className='my-2'>
                                Electric vehicles utilised for business travel have reduced emissions by <b>63%.</b>
                            </li>
                        </ul>
                        <img src="./capitals/natural/nat5.jpg" alt="" />
                    </div>
                    <div className='w-full md:w-[49%] my-3'>
                        <h4 className='font-semibold text-blue  my-3'>
                            Decarbonising Scope 1 emissions
                        </h4>
                        <p>
                            To reduce the impact of our
                            backup power sources namely diesel generators contributing
                            to Scope 1 emissions, we are exploring alternate fuel systems and emission control devices.
                        </p>
                        <ul className='my-3 mx-5'>
                            <li className='my-2'>
                                Dual fuel kit and Retro emission control devices (‘ECDs’) deployment projects initiated for backup electricity generators
                            </li>
                            <li className='my-2'>
                                Total estimated emission avoidance of 894 tonnes of CO<sub>2</sub> annually
                            </li>
                        </ul>
                        <h4 className='font-semibold text-blue  my-3'>
                            Avoid emissions through products and services
                        </h4>
                        <p>
                            We are developing environment- friendly products and solutions that seamlessly connect our business with the environment and society. By offering green solutions to our clients, we assist them in turning more competitive and sustainable in their supply chains.
                        </p>
                        <ul className='my-3 mx-5'>
                            <li className='my-2'>
                                <b>16 tonnes</b> of emission reduction through the use of low-carbon products and services in FY 24
                            </li>
                        </ul>
                        <h4 className='font-semibold text-blue  my-3'>
                            Reducing value chain-based emissions
                        </h4>
                        <p>
                            Recognising that a significant portion of our carbon footprint is linked to our suppliers, we have adopted a strategic approach
                            to reduce emissions throughout our value chain as part of
                            our comprehensive Scope 3 emissions assessment.
                        </p>
                        <ul className='my-3 mx-5'>
                            <li className='my-2'>
                                Integrated carbon mitigation plan in the Supplier Code of Conduct
                            </li>
                            <li className='my-2'>
                                Climate action framework being implemented across the supply chain
                            </li>
                        </ul>
                        <h4 className='font-semibold text-blue  my-3'>
                            Community-based carbon offset programmes
                        </h4>
                        <p>
                            We remain resolute in our commitment to mitigating risks posed by climate change and
                            to inspire positive change in the communities where we operate. We have also undertaken an extensive baseline and community needs assessment to find feasible carbon offset projects.
                        </p>
                        <ul className='my-3 mx-5'>
                            <li className='my-2'>
                                Introduction of smart cookstoves programme for the community in Jharkhand, Orissa and Meghalaya
                            </li>
                            <li className='my-2'>
                                Encouraging climate sustainability through horticulture project and afforestation drives in Maharashtra
                            </li>
                            <li className='my-2'>
                                13,000 cookstoves distributed in FY 24 and 500 acres of land covered with tree plantation.
                            </li>
                        </ul>
                        <div className='p-2 bg-green text-light'>
                            <h4 className='font-semibold text-2xl my-3'>
                                Advocacy and consultation
                            </h4>
                            <p className='font-semibold'>
                                This year we provided feedback to Singapore’s Sustainability
                                Reporting Advisory Committee (‘SRAC’) for a consultation paper
                                named <b className='text-xl'> ‘Turning Climate Ambition into Action’</b>
                            </p>
                        </div>
                        <p className='my-3 text-green'>
                            For more information on energy and and water management initiatives, please follow the link:
                        </p>
                        <a href="/">
                            https://sustainability.tatacommunications.com/ESG-Addendum
                        </a>
                        <h4 className='font-semibold text-navy my-3'>
                            Responsible Sourcing of Water
                        </h4>
                        <p>
                            We prioritise water stewardship, acknowledging its significance for our business and the communities we serve. Through periodic water-risk assessments, we mitigate potential threats and align our strategies to minimise our water footprint. Our efforts focus on reducing reliance on freshwater, encouraging recycling and reuse of water. It also emphasises the importance of responsible sourcing of water.
                            
                            During FY 2023-24, we made significant progress in our efforts towards water management. We completed a Water Gap Assessment and identified areas of improvement. Additionally, we utilised the Aqueduct Water Risk Atlas 4.0 to assess risks at our Indian and international facilities and confirmed that our Indian locations face higher water risk than the international sites. Therefore, water sourcing is a material topic for Indian region in our operations.
                        </p>
                    </div>
                    <div className='w-full md:w-[49%] my-3'>
                        <p>
                            In response to these findings, we successfully achieved a 5% reduction compared to FY 2019-20. We treat wastewater at most facilities and reuse the treated water for domestic purposes such as gardening. This year, we recycled 16% of our total water usage and are actively exploring ways to build on this. We also initiated rainwater harvesting through newly designed structures, achieving a 2% capture rate, which has also significantly improved groundwater recharge.
                        </p>
                        <h4 className='font-semibold text-xl text-navy my-3'>
                            Efficiently Managing Waste
                        </h4>
                        <p>
                            One of the key pillars of our sustainability strategy is efficient waste management. We continue to inculcate eco-friendly practices across our operations and prioritise end-of-life waste disposal and recycling through authorised vendors. This approach minimises waste to landfill and limits waste generation across our facilities.
                        </p>
                        <div className='py-1 border-y-4 my-3'>
                            <h4 className='font-semibold text-blue my-3'>
                                Waste Minimisation
                            </h4>
                            <p>
                                Elimination of non- recyclable material from our operation
                                <br /><br />
                                Ensuring continuous vigilance on single-use plastic at our sites
                            </p>
                            <h4 className='font-semibold text-blue my-3'>
                                Recycling and Reuse
                            </h4>
                            <p>
                                <b className='text-green2'>100%</b> recycling of non-hazardous waste
                                <br /><br />
                                <b className='text-green2'>100%</b> recycling of e-waste, batteries and other hazardous waste
                            </p>
                            <h4 className='font-semibold text-blue my-3'>
                                Monitoring and Awareness
                            </h4>
                            <p>
                                Segregation of non- hazardous waste into 12 different waste streams
                                <br /><br />
                                Creating awareness among employees and ground staff about waste management and waste handling.
                            </p>
                        </div>
                        <h4 className='font-semibold text-blue my-3'>
                            Waste Management Practices
                        </h4>
                        <p>
                            We prioritise responsible waste management practices and segregate waste into hazardous and non- hazardous categories. To ensure our waste management practices are consistent across sites, we impart training to our housekeeping staff and waste handlers on waste handling, c ollection and segregation practices.
                        </p>
                        <h4 className='font-semibold text-navy my-3'>
                            Non-hazardous waste
                        </h4>
                        <p>
                            Non-hazardous waste mainly consists of municipal solid waste and consists of paper, food, plant thrush, plastic, metal, cartons etc. These wastes are disposed of by authorised recyclers or municipal corporations. The Organic Waste Convertors (‘OWCs’) at our facilities convert cafeteria
                            food waste into nutrient-rich manure, thereby contributing to efforts for nurturing circular economy practices
                        </p>
                        <p className='my-3 text-green text-2xl'>
                            Out of 150,275 Kgs of municipal solid waste generated at our facilities, 78% has been recycled through in-house OWCs and third- party recyclers. Besides, 80% of biodegradable waste was composted by in-house OWCs.
                        </p>
                        <h4 className='font-semibold text-blue my-3'>
                            Eliminating Single-Use Plastic
                        </h4>
                        <p>
                            We have banned single-use plastic across our facilities and replaced them with sustainable alternatives. We ensure usage of reusable glassware and ceramics across our offices and encourage employees to avoid single-use plastic for daily chores.
                        </p>
                        <p className='text-green my-3'>
                            For more information on waste management initiatives, please follow the link:
                        </p>
                        <h4 className='font-semibold text-navy my-3'>
                            Hazardous waste
                        </h4>
                        <p>
                            We ensure 100% recycling of regulatory waste through authorised vendors.
                            In FY24, we generated 266,453 kg
                            of hazardous waste. Some of the hazardous waste generated at our facilities include used oil, oil filters and oil-soaked cotton from diesel generator sets, used batteries from energy utilities and e-waste from electronic equipment. We ensure adequate storage for waste generated within our facilities and ensure safe collection and handling of hazardous waste.
                        </p>
                        <div className='flex flex-wrap my-3 w-[95%] justify-between'>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-green text-5xl font-semibold m-0 mt-5'>
                                Zero
                                </h2>
                                <p className='text-xl '>
                                Landfill Waste by FY 2027
                                </p>
                            </div>
                            <div className='p-2 border-b-4 w-[40%] my-2'>
                                <h2 className='text-green text-5xl font-semibold m-0 mt-5'>
                                266,453 Kgs
                                </h2>
                                <p className='text-xl '>
                                of hazardous waste recycled
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NaturalCapital