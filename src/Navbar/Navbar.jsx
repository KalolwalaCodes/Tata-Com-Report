import React, { useEffect, useState ,useRef} from 'react';
import DropDownTab from './Dev';
import { useInView } from 'framer-motion';

const Navbar = () => {
  const dropdowncontnet1=[
    'Message from MD and CEO',
    'Year at a Glance',
    'Reimagining, redefining and revolutionising',
    'value creation',
    'Charting our way forward with all stakeholders',
    'Addressing material issues, growing long-term value',
    'Corporate details',
    'Financial Capital',
    'Manufactured and Intellectual Capital',
    'Revolutionising Innovation ',
    'Our ESG strategy',
    'Natural Capital',
    'Human Capital',
    'Social and Relationship Capital',
    'Risk management',
    'Reliable governance for responsible value creation',
    'Board of Directors'
  ]
  return (
    <div className="main-container-navbar-parent sticky top-[-6%]">
      <div className="navbar-main w-full h-[60px] ">
        <div className="tata-com-main-logo">
          <img className="w-full" src="./Logos/TATA.svg" alt="Tata Logo" />
        </div>
        <div className="tata-com-main-logo-parent">
          <img className="w-full" src="./Logos/main-parent-logo.svg" alt="Parent Logo" />
        </div>
      </div>

      <div className=" navbar-main-sticky flex justify-between w-full h-[50px] align-middle text-blue-900 font-500 sticky top-0">
        <div className="flex w-[20%] justify-start bg-red-sz pl-[5%] align-middle pt-3"> <div>Home</div></div>
        <div className="flex w-[38%]   justify-evenly bg-red-sz pr-6 align-middle  text-blue-900 font-500 pt-3">
          <DropDownTab name="Integrated Report" links={dropdowncontnet1} />
          {/* <DropDownTab name="Financial Statements" /> */}
          <DropDownTab name="Statutory Reports" />
        </div>

    </div>
    </div>
  );
};

export default Navbar;