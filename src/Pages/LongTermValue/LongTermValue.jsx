import React from 'react'

function LongTermValue() {
  return (
    <div className='marginal'>
         <div>
              <p  className='text-3xl font-bold text-[#123c61] py-8'>Addressing material issues, growing long-term value</p>
              <p className='text-2xl font text-[#e9b518] py-4'>At Tata Communications, material issues are identified across various
              timeframes after consultation with all stakeholders.</p>
         </div>
         <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8 my-8'>
             <div>
                  <p>We conduct detailed analysis of
                  the external business environment,
                  stakeholder concerns and corporate
                  risks and opportunities to identify
                  factors of material importance.
                  This process allows us to refine
                  our strategic and operational plans
                  in response to these identified
                  material matters, adapting to
                  stakeholder inputs, specific risks,
                  and market conditions.</p>
             </div>
             <div>
                 <p className='text-xl font-bold text-[#125eb1]'>Our approach</p>
                  <p>Our approach to
                  managing critical
                  material aspects
                  involves a structured
                  four-step process,
                  ensuring transparency
                  and systematic
                  mapping as per priority.</p>
             </div>
             <div>
                 <img src="./Stakeholders/stake-23.jpg" alt="" />
             </div>
         </div>
         <div>
               <p className='text-[#3d9ee4]'>Material topics identified</p>
                <div>
                    <img src="./Stakeholders/stake-24.jpg" alt="" />
                </div>
         </div>
         <div>
               <img src="./Stakeholders/stake-25.jpg" alt="" />
         </div>
    </div>
  )
}

export default LongTermValue

