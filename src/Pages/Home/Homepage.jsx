import React,{useState} from 'react'
import Scene from '../../Components/Particles/Particles';
import {TextAnimation01,TextAnimation02} from '../../Animation/TextAnimation';
import { Element, scroller } from 'react-scroll'

const Section = ({ name, children }) => (
  <Element name={name} className="section">
    {children}
  </Element>
);
const Homepage = () => {
  return (
    <div className="app-container h-screen">
    <h1 className='re'><TextAnimation01 text={'Re'}/></h1>
    <p className='cover-subtitle'>Integrated <br />Report 2023-24</p>
    <div className="scene-container">
    <h1 className='imagine'><TextAnimation02 text={'imagine'}/></h1>
      <Scene />
    </div>
  </div>
  )
}

export default Homepage
