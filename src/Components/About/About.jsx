import React from 'react'
import Capslider from '../CapSlider/CapSlider'
import BookOpen from '../BookOpen/BookOpen'

import './About.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TextAnimation01 } from '../../Animation/TextAnimation';
const About = () => {
    return (
        <div>
            <div className='marginal my-8'>

                <div className='flex align-center flex-wrap'>
                    <motion.div  initial={{ x: "-100px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }} 
           className='sm:w-full md:w-[70%]'>
                        <h2 className='h2 text-navy my-5'>About the report </h2>
                        <h2 className='h-xl text-orange'>Our Integrated Approach</h2>
                        <p className='flex-1'>The Report provides a succinct account of our performance from a broad perspective, and our value creation process in the short, medium and long term. It demonstrates how we create and retain stakeholder value through the intervention of various capitals that we deploy. We leverage our capital to formulate and execute strategies for sustained value creation. We measure the outcome of our business strategies by measuring the stakeholder impact. The Report takes a forward-looking approach and also elaborates on the opportunities and challenges faced by us.</p>
                        <Link target='_blank' to={'./Pdf/ATR.pdf'}> <button className='px-5 py-2 my-5 rounded-md bg-[#e87625] text-xl font-700 bottom-[10%] left-[7%] hover:bg-[#ef8438] text-white transition-all duration-300'> Read More</button></Link>
                       
                    </motion.div>
                    <motion.div  initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}  className='flex-1 sm:w-full md:w-[30%]'>
                        <BookOpen />
                    </motion.div>
                </div>
                {/* <Capslider /> */}

            </div>

            <div className='bg-green-grad'>
                <div className='marginal'>
                    <h2 className='h2 text-light mb-10 '>Our ethos </h2>
                    <motion.div initial={{ x:"-100%" ,opacity: 0 }}
        whileInView={{x:0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}  className='card-container'>
                        <div className='card'>
                            <img src="./Homepage/Artboard 14.svg" alt="Vision Icon" />
                            <h3>Vision</h3>
                            <div className="card-content">
                                <p>To deliver a New World of CommunicationsTM to advance the reach and leadership of customers as a global digital ecosystem enabler.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img src="./Homepage/Artboard 15.svg" alt="Mission Icon" />
                            <h3>Mission</h3>
                            <div className="card-content">
                                <p>To enable enterprises to succeed in the new world of digital (technologies and business models) by being borderless and always available (to our customers and partners).</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img src="./Homepage/Artboard 16.svg" alt="Shared Ambition Icon" />
                            <h3>Shared Ambition</h3>
                            <div className="card-content">
                                <p>To achieve profitable growth and become a leading digital ecosystem enabler in the eyes of our customers and the industry.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img src="./Homepage/Artboard 17.svg" alt="DRIVE AHEAD BEHAVIOUR Icon" />
                            <h3>DRIVE AHEAD <br />Behaviour</h3>
                            <div className="card-content">
                                <p><b>D</b>aring | <b>R</b>esponsive | <b>I</b>nclusive | <b>V</b>enturing | <b>E</b>thical</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>




        </div>
    )
}

export default About