import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BoardOfDirector = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const bodData = [
    [
      "./Bod/m1.png",
      "Ms. Renuka Ramnath",
      "Chairperson and Independent Director",
      "Ms. Renuka Ramnath is the Founder, Managing Director and CEO of Multiples Alternate Asset Management, a private equity manager and advisor to funds of ~ USD 3 bn in AUM.",
      "Ms. Renuka Ramnath is one of the most experienced private equity fund managers in India, with a career of over 35 years in financial services across private equity, investment banking, and structured finance.",
    ],
    [
      "./Bod/m2.png",
      "Mr. A.S. Lakshminarayanan",
      "Managing Director & CEO",
      "Mr. A.S. Lakshminarayanan, is the Managing Director & CEO of Tata Communications Limited. He is a global technocommercial leader across regions and industries recognised for developing scalable businesses in UK, Europe, Japan and India, and has worked across the globe.",
      "Under his leadership, Tata Communications is progressing to play a solid role as a digital ecosystem enabler – a digital fabric on which customers can build secure, connected, digital experiences. He is known to drive all things technology and transformation, with trust and purpose.",
    ],
    [
      "./Bod/m3.png",
      "Mr. Krishnakumar Natarajan",
      "Independent Director",
      "A leading authority in the global IT sector, Mr. Krishnakumar Natarajan co-founded Mindtree in 1999 and has played key roles in building the company’s innovative approach to delivering IT services and solutions to global 2000 enterprises. Social enterprises and Philanthropy are some of his other key interests. Along with his wife Akila he runs their Personal foundation “Mela” which is focused on helping high potential rural girls to attain professional qualifications and helping Senior Citizens age gracefully.",
    ],
    [
      "./Bod/m4.png",
      "Mr. N. Ganapathy Subramaniam",
      "Non-Executive Director",
      "Mr. N. Ganapathy Subramaniam was the Chief Operating Officer (‘COO’) and Executive Director of Tata Consultancy Services Limited (‘TCS’) since February 2017 till May 2024. He is also a Director and Chairman of Tata Elxsi Limited and Tejas Networks Limited.",
      "He has over 40 years of experience in TCS in strategic management of technology and operations, across large corporations in both established and new growth markets. He has been part of the evolution of Indian IT industry, and the value creation process with a globally distributed talent",
    ],
    [
      "./Bod/m5.png",
      "Mr. Ashok Sinha",
      "Independent Director",
      "Mr. Ashok Sinha is Chairman, 4 I Advisors, a proprietary consulting firm that provides a specialised spectrum of technical consultancy and advisory services in the area of Energy, Technology and Finance since December 2010. He has a wealth of experience, competencies, and expertise from his leadership journey as the Chairman and Managing Director of Bharat Petroleum Corporation Ltd. (‘BPCL’).",
      "He has been conferred the Distinguished Alumnus Award from both IIT, Kanpur and IIM, Bangalore.",
    ],
    [
      "./Bod/m6.png",
      "Mr. Ankur Verma",
      "Non-Executive Director",
      "Mr. Ankur Verma, a B.E. in Mechanical Engineering and PGDM from IIM, Calcutta has around 25 years of experience in Investment Banking, Capital Markets and Corporate Strategy.",
      "At present, Mr. Verma is Group Chief Strategy Officer at Tata Sons Private Limited, where he has responsibilities in strategy, corporate finance and mergers and acquisitions.",
    ],
  ];

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

  return (
    <div className="w-[86%] m-auto relative">
      <h3 className="big-normal-heading-blue my-5">Board of Directors</h3>
      <div className="flex flex-wrap w-full justify-center gap-10 relative ">
        {bodData.map((data, index) => (
          <>
            <AnimatePresence>
              {selectedCard === index && (
                <motion.div
                  className="absolute-content-desc"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span onClick={() => setSelectedCard(null)}>x</span>
                  {data[3]}
                  <br />
                  {data[4]&&data[4]}
                </motion.div>
              )}
            </AnimatePresence>
            <div
              key={index}
              className="relative bod-container-wrapper w-[400px] cursor-pointer flex flex-col justify-center align-middle my-5 p-4 gap-8"
              onClick={() => handleCardClick(index)}
            >
              <img
                className="w-[80%] m-auto object-contain"
                src={data[0]}
                alt={data[1]}
              />
              <h3 className="name-of-bod text-center text-[#3e85c6] font-bold mt-0 pt-0">
                {data[1]}
                <br />
                <span className="designation text-center mt-0 pt-0 text-gray-700">
                  {data[2]}
                </span>
              </h3>
            </div>
          </>
        ))}
      </div>
      <div className="flex flex-col gap-8 mt-10">
        <motion.img
          initial={{ x: "300px", opacity: 0.4 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-[70%] "
          src="./Bod/bod001.png"
          alt=""
        />
        <motion.img
          initial={{ x: "300px", opacity: 0.4 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="w-[70%]  ml-[10%]"
          src="./Bod/bod002.png"
          alt=""
        />
        <motion.img
          initial={{ x: "300px", opacity: 0.4 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="w-[70%]  ml-[20%]"
          src="./Bod/bod003.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default BoardOfDirector;
