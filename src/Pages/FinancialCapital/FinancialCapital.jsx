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
      <CapsTemplate src={'./CapsTemplate/FCaps.jpg'} title={"Financial"} values={values} theme={"#3d85c6"} gradient={"#376479"} ico={"./Homepage/fin-icon1.svg"} />
      <div className='marginal my-10'>
        <p className='text-blue text-2xl font-semibold'>
          Our financial strength, built on a healthy balance sheet and consistent cash flow generation, fuels our strategic growth plans. With prudent investments, mergers and acquisitions, we have delivered strong revenue growth led by the data portfolio. It not only positions us to strengthen the digital fabric of a hyperconnected future but also provides the necessary impetus for capitalising on emerging opportunities.
        </p>
        <h4 className='font-semibold my-5 text-xl text-navy'>Accelerating Growth</h4>
        <div className='flex flex-wrap gap-2'>
          <div className='w-full md:w-[48%]  mr-2'>
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
          <div className='w-full md:w-[48%] '>
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

          <div className='w-full md:w-[48%] lg:w-1/2'>
            <h4 className='font-semibold my-5 text-xl text-navy'>Strategic Stakeholder Engagement for
              Financial Health</h4>
            <p>
              Building strong relationships
              with lenders, investors and rating agencies is key to securing capital and maintaining a strong credit rating. Through regular cadence and business review meetings, we engage with lenders, banks and financial institutions to discuss ongoing
              and prospective engagements, market trends and our strategic approach. Additionally, we organise roadshows in different parts of the world to network with potential investors and ensure access to global capital markets. Quarterly meetings with credit rating agencies are also held to provide updates
              on our financial performance and projections, to ensure transparency in our disclosures.
            </p>
            <h4 className='bg-blue font-semibold text-light p-1 my-2 w-full w-[25%]'>Credit Rating</h4>
            <h4 className='font-semibold my-2 text-xl text-navy'>AAA Outside Stable</h4>
            <p>(Issuer rating and Long- term bank facilities)</p>
            <h4 className='font-semibold my-2 text-xl text-navy'>A1+</h4>
            <p>(Short-Term bank facilities)</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default FinancialCapital