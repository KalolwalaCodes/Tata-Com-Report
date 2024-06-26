// import React, { useEffect, useState } from 'react'

// const DropdownContent = ({activeTab}) => {
//     const data={Home:['dummyContent1','dummyContent1','dummyContent1','dummyContent1'],
//         IntegratedReport:['dummyContent2','dummyContent2','dummyContent2','dummyContent2','dummyContent2'],
//         StatutoryReports:['dummyContent3','dummyContent3','dummyContent3','dummyContent3'],
//         FinancialStatements:['dummyContent4','dummyContent4','dummyContent4','dummyContent4']
//     }
//     const [dataToRender,setDataToData]=useState(data.Home);
//     useEffect(()=>{
//         setDataToData(data[activeTab]);
//         console.log("here is data",data.Home);
//         console.log(activeTab);
//     },[activeTab])
//   return (
//     <div className='dropdown-content-main-wrapper'>
       
//       {
//      dataToRender.map((data,key)=>{
//         return <div className='flex gap-10'><div className='list-items' key={key}>{data}</div> <div>hii</div></div> 
//      })
//       }
//     </div>
//   )
// }

// export default DropdownContent
