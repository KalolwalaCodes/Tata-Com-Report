import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Scene from "../../Components/Particles/Particles";
import {
  TextAnimation01,
  TextAnimation02,
} from "../../Animation/TextAnimation";
import { Element, scroller } from "react-scroll";
import Sphere from "../../Components/Particles/Sphere";
import About from "../../Components/About/About";
import Performance from "../../Components/Performance/Performance";
import Stakeholders from "../../Components/Stakeholders/Stakeholders";
import CapsTemplate from "../../Components/CapsTemplate/CapsTemplate";
import FinancialCapital from "../Capitals/FinancialCapital";
import MfdIntelCapital from "../Capitals/MfdIntelCapital";
import NaturalCapital from "../Capitals/NaturalCapital";
import Capslider from "../../Components/CapSlider/CapSlider";
import { Link } from "react-router-dom";

const Homepage = () => {
  const texts = ["Imagine", "Design", "Position"]; // Array of texts to cycle through
  const [textIndex, setTextIndex] = useState(0); // State to track current text index
  const [cycleComplete, setCycleComplete] = useState(false); // State to track if the cycle is complete

  useEffect(() => {
    if (cycleComplete) return; // Stop the effect if the cycle is complete

    // Set a timer to change text every 4 seconds
    const textTimer = setInterval(() => {
      setTextIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex === texts.length - 1) {
          clearInterval(textTimer); // Clear the timer once the cycle is complete
          // Set the cycle complete state
          return newIndex % texts.length;
        }
        if (newIndex === texts.length) {
          clearInterval(textTimer); // Clear the timer once the cycle is complete
          setCycleComplete(true); // Set the cycle complete state
          return prevIndex;
        }
        return newIndex % texts.length;
      });
    }, 4000);

    // Clean up timer on component unmount
    return () => {
      clearInterval(textTimer);
    };
  }, [cycleComplete, texts.length]);

  return (
    <div className="w-full">
      <div className="app-container">
        <img className="cover-logo" src="./Tata_Comm_logo.svg" alt="" />
        <h1 className="re text-blue-900">Re</h1> {/* Static text */}
        <p className="cover-subtitle">
          Integrated <br />
          Report 2023-24
        </p>
        <div className="scene-container">
          <h1 className="imagine">
            <AnimatePresence mode="wait">
              <motion.span
                key={textIndex} // Unique key for each text change
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {texts[textIndex]}
              </motion.span>
            </AnimatePresence>
          </h1>
          <Scene />
        </div>
      </div>

      <div className="section002 p-5">
        <div className="flex justify-center align-middle gap-8">
          <div className="w-[60%] pl-[4%] ">
            <h3 className="heading-tag-bigger  ">
              We are Enabling the future of digital landscape
            </h3>
            <h3 className="orange-heading-tag">
              Reimagine,
              <br /> Redefine and
              <br />
              Revolutionise
            </h3>
           
          </div>

          <div className="w-[40%] relative">
            <Sphere />
          </div>
          
        </div>
        <p className="text-white p-[4%] py-[2%]  text-2xl">
              are the operative words that best encapsulate our positioning in
              the global digital landscape. We believe that all enterprises will
              operate in a hyperconnected world. Our aim is to uncomplicate
              matter for our customers and make their ecosystems more secured
              and flawless. At the same time, we are undergoing a constant
              transformation ourselves, making strategic shifts, first from
              products to platforms and now, to a digital fabric of solutions,
              which will enable us to deliver exceptional value to our customers
              and stakeholders.
            </p>
      </div>
      {/* *************************** */}
      <About />
      <div className="w-[86%] my-6  m-auto relative">
        <h2 className="h2 text-navy my-5">Message from MD and CEO</h2>
        <img
          className="rounded-xl object-contain"
          src="./mdb chiarman.webp"
          alt=""
        />
        <Link to={"/Message-from-MD-and-CEO"}>
          <button className="absolute px-5 py-2 rounded-md bg-pink-100 text-xl font-700 bottom-[10%] left-[7%] hover:bg-pink-600 hover:text-white transition-all duration-300">
            {" "}
            Read More
          </button>
        </Link>
      </div>
      <div className="marginal">
        <h2 className="h2 text-navy mt-10 text-center">
          Our performance highlights
        </h2>
        <Performance />
        <Capslider />
        <h2 className="h2 text-navy">Our stakeholders</h2>
        <Stakeholders />
        {/* *************************** */}
      </div>
      {/* <FinancialCapital/>
    <MfdIntelCapital/>
    <NaturalCapital/> */}
    <HumanCapital/>
    </div>
  );
};

export default Homepage;
