import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DropDownTab = ({ name }) => {
  console.log("here is name ", name);
  const dataSetOfDropdown = {
    "Integrated Report": ['Integrated Report', 'dummyContent2', 'dummyContent2', 'dummyContent2', 'dummyContent2', 'dummyContent2'],
    "Statutory Reports": ['Statutory Reports', 'dummyContent3', 'dummyContent3', 'dummyContent3', 'dummyContent3'],
    "Financial Statements": ['Financial Statements', 'dummyContent4', 'dummyContent4', 'dummyContent4', 'dummyContent4']
  };
  console.log("the data is ", dataSetOfDropdown[name][0], dataSetOfDropdown[name]);

  return (
    <div className="flex h-[30px] justify-center px-3 align-middle z-20">
      <FlyoutLink href="#" FlyoutContent={DropdownContent} data={dataSetOfDropdown[name]}>
        {dataSetOfDropdown[name][0]}
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent, data }) => {
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
            <FlyoutContent data={data} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DropdownContent = ({ data }) => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl ">
      {data.map((item, index) => (
        <div key={index} className="mb-3 space-y-3">
          <a href="#" className="block text-sm hover:underline">
            {item}
          </a>
        </div>
      ))}
    </div>
  );
};

export default DropDownTab;