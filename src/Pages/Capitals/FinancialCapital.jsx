import React from 'react'
import CapsTemplate from '../../Components/CapsTemplate/CapsTemplate';

const FinancialCapital = () => {
  const values = [
    { val1: '₹20,969 crores', val2: 'Revenue from Operations' },
    { val1: '₹4,453 crores', val2: 'Employee wages and benefits' },
    { val1: '₹476 crores', val2: 'Dividend' },
    { val1: '₹4,230 crores', val2: 'EBITDA' },
  ];
  
  return (
    <div>
      <CapsTemplate src={'./CapsTemplate/FCaps.jpg'} title={"Financial"} values={values} theme={"#3d85c6"} gradient={"#3d85c6"} ico={"./Homepage/fin-icon1.svg"} />
      <div className='marginal my-10'>
        <p className='text-blue text-2xl font-semibold'>
          Our financial strength, built on a healthy balance sheet and consistent cash flow generation, fuels our strategic growth plans. With prudent investments, mergers and acquisitions, we have delivered strong revenue growth led by the data portfolio. It not only positions us to strengthen the digital fabric of a hyperconnected future but also provides the necessary impetus for capitalising on emerging opportunities.
        </p>
        <h4 className='font-semibold my-5 text-xl text-navy'>Accelerating Growth</h4>
        <div className='flex flex-wrap justify-between'>
          <div className='w-full md:w-[49%]  mr-2'>
            <p>We are in an exciting phase of driving growth through investment for Tata Communications. The financial fitness we have attained in the recent past has given us room to fund the next phase of our journey while remaining financially fit. The strategic theme around our growth plan guides us to stitch the right capabilities for accelerated growth – Product to Platform to Digital Fabric of Solutions thereby increasing our relevance quotient.</p>
            <h4 className='font-semibold text-blue my-5 text-xl'>Our strategic pillars</h4>
            <div>
              <img src="./capitals/financial/fin1.png" className='w-full lg:w-1/2 my-1' alt="" />
            </div>
            <p>
              We crossed two significant milestones this year with our overall revenues surpassing
              ₹ 20,000 crores. More importantly, the data revenues crossed the ₹ 17,000 crore mark for the first time, powered by an impressive surge in the digital services portfolio. Within data services, Digital solutions like Next-Gen Connectivity maintained a strong double-digit growth trajectory.
            </p>
          </div>
          <div className='w-full md:w-[49%] '>
            <p>
              Our focus on driving profitable growth and strengthening our balance sheet laid the foundation to enable us to complete three acquisitions while investing incrementally in our organic capabilities. Some of these inorganic and organic investments were solely on the back of internal cash accruals. These acquisitions have helped us address product gaps, expand to more geographies and achieve scale.
            </p>
            <div className='border-b-2 pb-4 w-1/3'>
              <h2 className='text-blue text-5xl font-semibold my-5'>
                55.4%
              </h2>
              <p className='text-xl'>
                Increase in revenue <br /> from digital services
              </p>
            </div>
            <div className='border-b-2 pb-4 w-1/3'>
              <h2 className='text-blue text-5xl font-semibold my-5'>
                23.7%
              </h2>
              <p className='text-xl'>
                Core EBITDA margin excluding <br /> subsidiaries and M&A
              </p>
            </div>
          </div>

          <div className='w-full md:w-[49%] '>
            <h4 className='font-semibold my-5 text-xl text-navy'>Strategic Stakeholder Engagement for Financial Health</h4>
            <p>
              Building strong relationships
              with lenders, investors and rating agencies is key to securing capital and maintaining a strong credit rating. Through regular cadence and business review meetings, we engage with lenders, banks and financial institutions to discuss ongoing
              and prospective engagements, market trends and our strategic approach. Additionally, we organise roadshows in different parts of the world to network with potential investors and ensure access to global capital markets. Quarterly meetings with credit rating agencies are also held to provide updates
              on our financial performance and projections, to ensure transparency in our disclosures.
            </p>
            <br />
            <h4 className='bg-blue font-semibold text-light p-1 my-2 w-full md:w-[25%]'>Credit Rating</h4>
            <h4 className='font-semibold my-2 text-xl text-blue'>AAA Outside Stable</h4>
            <p>(Issuer rating and Long- term bank facilities)</p>
            <h4 className='font-semibold my-2 text-xl text-blue'>A1+</h4>
            <p>(Short-Term bank facilities)</p><br />
            <p>
              We proactively manage foreign exchange fluctuations and risks associated with changing interest rates through a Board-approved Foreign Exchange and Interest Rate Risk Management Policy. This policy outlines our risk managemet philosophy and contours of the processes covering, amongst others, permissible hedging instruments and minimum hedge ratios. A dedicated Forex and Interest Rate Risk Management Committee, under the supervision of the CFO and Head of Treasury, oversees
              and reviews exposure, hedge positions and analyses market movements regularly.
            </p>
          </div>
          <div className='w-full md:w-[49%] '>
            <h4 className='font-semibold my-5 text-xl text-navy'>Strategic Acquisitions to Fuel Growth</h4>
            <p>Our finance strategy revolves around two core pillars of ‘Fit to Compete’ and ‘Fit to Grow’. While the ‘Fit to Compete’ framework aims to optimise financial fitness
              of the organisation through cost control and improved efficiencies, ‘Fit to Grow’ is designed to fulfil our growth ambitions. It has helped to improve our balance sheet, enabled efficient capital management and resulted in effective cost control measures. Our recent acquisitions viz., Kaleyra, Switch and Oasis, have further strengthened our capabilities
              and enhanced our market reach. These acquisitions have been instrumental in accelerating our growth path. Notably, two of these acquisitions were entirely funded by internal accruals.</p>
            <div className=' my-2 p-2 bg-grey bg-slate-100'>
              <p className=' text-blue text-2xl '>"FY24 was an eventful year as we witnessed our finance strategy in action, enabling us to successfully complete three strategic acquisitions on the back of a strong balance sheet. Our financial performance is in line with our expectations as we continue to capture newer business opportunities and accelerate our growth path. With the right operating levers in place, we are confident of our financial performance indicators returning to their ambition range in the medium term. We are committed to driving profitable, sustainable, competitive, broad-based, and responsible growth"
              </p>
              <p className='text-blue font-semibold mt-2'>Kabir Ahmed Shakir</p>
              <p>Chief Financial Officer</p>
            </div>
          </div>

          <div className='w-full md:w-[49%] my-5'>
            <h4 className='font-semibold text-xl mb-3 text-blue'>Kaleyra Integration</h4>
            <p>
              We acquired Kaleyra, an organisation specialising in communication services like messaging and chatbots, to develop a new category of Customer Interaction Suite (CIS) comprising of Tata Communications DIGO; InstaCC and now, Kaleyra. Combined with Tata Communications DIGO platform, Kaleyra’s offerings create intelligent, intuitive and innovative multichannel communication solutions. By merging these functionalities, we aim to become a major player in the customer interaction market with a vision to significantly expand our service portfolio in the years ahead.
            </p>
            <h4 className='font-semibold my-3 text-xl text-blue'>Switch Integration</h4>
            <p>
              The Switch acquisition marks
              a significant step for Tata Communications in the production services business. Combined
              with Tata Communications’
              strength in global delivery and transmission, Switch’s forward looking production capability
              makes way for a substantially expanded Media services portfolio for our customers. Through Switch, Tata communications has gained expanded reach in North America and has attained unparallelled access to some of the most premium sporting contents. Immersive video experiences in real-time are going to be the next game changer for enterprises, and our combined expertise will make for a formidable force creating shared value for all.
            </p>
            <h4 className='font-semibold my-3 text-xl text-blue'>Oasis Integration</h4>
            <p>
              Integrating Oasis into Tata Communications MOVE™ platform has enhanced our IoT offerings by incorporating eSIM and remote
              SIM provisioning capabilities. By combining Tata Communications MOVE™ with the eSIM technology of Oasis, we aim to equip enterprises with end-to-end, scalable and secure eSIM connectivity, which is crucial for developing IoT applications and digital experiences. It is anticipated to strengthen our offerings
              for a growing IoT market and attract more customers.
            </p>
          </div>
          <div className='w-full md:w-[49%] my-5'>
            <h4 className='font-semibold mb-2 text-2xl text-navy'>Building Long-Term Value for Shareholders</h4>
            <p>
              Over the last few years, we have focused on changing the texture of the business to significantly improve the customer relevance quotient and drive sustainable and profitable growth. Our global digital fabric
              of solutions is a powerful concept which enterprises, especially in
              the international markets are beginning to realize. Our Digital Portfolio has the capability to holistically address the needs of our enterprise customers. <br /><br />
              Our vision emphasises the importance of continuous investments for building long-
              term capabilities that strengthen our competitive advantage
              and customer relevance. This strategy, coupled with our focus on the ‘Fit to Compete’ and ‘Fit to Grow’ strategies, aims to ensure sustainable growth and consistent value creation for shareholders.
            </p>
            <h4 className='font-semibold my-3 text-xl text-blue'>Economic performance</h4>
            <p>In the context of sustainability, it is crucial to consider the economic impact of our actions on stakeholders and overall economic systems. We have documented the flow of capital among various stakeholders, as well as the economic value added to society and stakeholders. <br /><br />
            We have gradually improved our economic performance, adding value to our stakeholders through numerous channels such as operating expenses, employee perks, community investments, and so on. Detailed information on this is available in the ESG Addendum and the graph herein depicts our                                                contribution to stakeholder value creation over the years. We have not received any financial assistance from the government during the reporting period across the sites of our operations in FY 2023-24.
            </p>
            <img src="./capitals/financial/fin2.png" className='w-full md:w-1/3 mt-2' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinancialCapital