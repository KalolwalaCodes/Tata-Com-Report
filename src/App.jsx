import { useState } from 'react'

import './App.css'
import Navbar from './Navbar/Navbar'
import Example from './Navbar/Dev'
import Homepage from './Pages/Home/Homepage';
import MdMessage from './Pages/Mdmessage/MdMessage';
import YearAtGlance from './Pages/Home/Smallpages/YearAtGlance';
import About from './Components/About/About';
import FinancialCapital from './Pages/FinancialCapital/FinancialCapital';
import BoardOfDirector from './Pages/BoardOfDirector/BoardOfDirector';
import RiskManagement from './Pages/RiskManagment/RiskManagment';
import ReliableGovernance from './Pages/ReliableGovernance/ReliableGovernance';
import Footer from './Components/Footer/Footer';
function App() {

  return (
    <>
     <Navbar/>
     {/* <Example/>  */}
     {/* <Homepage/> */}
     {/* <MdMessage/> */}
    {/* <FinancialCapital/>   */}
    {/*
     <YearAtGlance/> */}
     {/* <BoardOfDirector/> */}
     {/* <RiskManagement/> */}
     <ReliableGovernance/>
     <Footer/>
    </>
  )
}

export default App
