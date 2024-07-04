import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const DropDownTab = ({ name,links }) => {
  console.log("here is name ", name);
  const dataSetOfDropdown = {
    "Integrated Report": ['Integrated Report', 'Message from MD and CEO',
    'Year at a Glance',
    'value creation',
    'Stakeholder engagement',
    'Materiality assessment',
    'Corporate details',
    'Financial Capital',
    'Manufactured and Intellectual Capital',
    'Natural Capital',
    'Human Capital',
    'Social and Relationship Capital',
    'Risk management',
    'Governance',
    'Board of Directors'],
    "Statutory Reports": ['Statutory Reports', 'Notice', 'Board’s Report', 'Management Discussion and Analysis', 'Corporate Governance Report','BRSR'],
    "Financial Statements": ['Financial Statements', 'dummyContent4', 'dummyContent4', 'dummyContent4', 'dummyContent4']
  };
  console.log("the data is ", dataSetOfDropdown[name][0], dataSetOfDropdown[name]);

  return (
    <div className="flex h-[30px] justify-center px-3 align-middle z-20">
      <FlyoutLink href="#" FlyoutContent={DropdownContent} data={dataSetOfDropdown[name]} links={links}>
        {dataSetOfDropdown[name][0]}
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent, data,links }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-blue-900 font-500">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent data={data} links={links} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DropdownContent = ({ data }) => {
  const linksArray=[
    '/Message-from-MD-and-CEO',
    'year-at-glance',
    '/Value-Creations',
    '/Stakeholder-engagement',
    '/Materiality-assessment',
    "/Corporate-details",
    '/Financial-Capital',
    '/Manufactured-and-Intellectual-Capital',
    '/Natural-Capital',
    '/Human-Capital',
    '/Social-and-Relationship-Capital',
    '/Risk-management',
    '/Governance',
  '/Board-of-Directors'
  ]
  // Split the data into two halves
  const midpoint = Math.ceil(data.length / 2);
  const firstHalf = data.slice(1, midpoint);
  const fristHalfLink=linksArray.slice(0, midpoint);
  const secondHalf = data.slice(midpoint+1);
  const SecondHalfLink=linksArray.slice(midpoint);
  return (
    <div className="w-[400px] bg-white p-3 shadow-xl flex flex-wrap">
      <div className="w-1/2 pr-3">
        {firstHalf.map((item, index) => (
          <div key={index} className="mb-3 space-y-3">
            <Link to={fristHalfLink[index]} className="block text-sm hover:underline font-bold text-blue-400 hover:text-blue-500">
              {item}
            </Link>
          </div>
        ))}
      </div>
      <div className="w-1/2 pl-3">
        {secondHalf.map((item, index) => (
          <div key={index} className="mb-3 space-y-3">
            <Link to={SecondHalfLink[index]} className="block text-sm hover:underline font-bold text-blue-400 hover:text-blue-500">
              {item}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};



export default DropDownTab;