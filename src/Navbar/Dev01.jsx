import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
const dataLink={StatutoryReports:[['Notice','./Pdf/02. TATA Communication Notice_27.06.2024.pdf']
,['Board’s Report','./Pdf/03. TATA Communication Board Report 27.06.24.pdf'],
['Management Discussion and Analysis','/Pdf/04. TATA Communication -MDA- 27.06.2024.pdf'],
['Corporate Governance Report','./Pdf/05. TATA Communication-CG_27.06.2024.pdf'],
['BRSR','./Pdf/06. TATA Communication-BRSR- 24.06.2024 V1.pdf']
]}
const DropDownTab01 = ({ name }) => {
  console.log("here is name ", name);
  console.log("here is name ss ", dataLink[name]);
  
 // console.log("the data is ", dataSetOfDropdown[name][0], dataSetOfDropdown[name]);

  return (
    <div className="flex h-[30px] justify-center px-3 align-middle z-20">
      <FlyoutLink href="#" FlyoutContent={DropdownContent} data={dataLink[name]}>
        {'Statutory Reports'}
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
  console.log("here is data",data);
  // Split the data into two halves
  
  return (
    <div className="w-[400px] bg-white p-3 shadow-xl flex flex-wrap">
      <div className="w-full p-3">
        {data.map((item, index) => (
          <div key={index} className="mb-3 space-y-3">
            <Link target="_blank" to={data[index][1]} className="block text-sm hover:underline font-500 text-[rgb(20 68 107)] hover:text-blue-500">
              {data[index][0]}
            </Link>
          </div>
        ))}
        <Link target="_blank" to={"./Pdf/06. TATA Communication Standalone_Consolidated27.06.2024.pdf"} className="block text-sm hover:underline font-500 text-[rgb(20 68 107)] hover:text-blue-500 mb-3">Financial Statements</Link>
      </div>
     
    </div>
  );
};



export default DropDownTab01;