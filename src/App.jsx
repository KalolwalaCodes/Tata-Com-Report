import { useState } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
import Navbar from './Navbar/Navbar'
import Homepage from './Pages/Home/Homepage';
import Footer from './Components/Footer/Footer';
import FinancialCapital from './Pages/Capitals/FinancialCapital.jsx';
import MfdIntelCapital from './Pages/Capitals/MfdIntelCapital';
import NaturalCapital from './Pages/Capitals/NaturalCapital';
import RiskManagement from './Pages/RiskManagment/RiskManagment';
import BoardOfDirector from './Pages/BoardOfDirector/BoardOfDirector';
import ReliableGovernance from './Pages/ReliableGovernance/ReliableGovernance';
import MdMessage from './Pages/Mdmessage/MdMessage';
import LongTermValue from './Pages/LongTermValue/LongTermValue.jsx';
import Stakeholders from './Pages/Stakeholders/Stakeholders.jsx';
import YearAtGlance from './Pages/Home/Smallpages/YearAtGlance';

function App() {

  return (
    <>
    <BrowserRouter>   
     <Navbar/>
     <Routes>
     < Route path='/'  element={<Homepage/>} />
     < Route path='/Message-from-MD-and-CEO'  element={<MdMessage/>} />
     < Route path='/Materiality-assessment'  element={<LongTermValue/>} />
     < Route path='/Stakeholder-engagement'  element={<Stakeholders/>} />
     < Route path='/Corporate-details'  element={<Stakeholders/>} />
     < Route path='/Financial-Capital'  element={<FinancialCapital/>} />
     < Route path='/Manufactured-and-Intellectual-Capital'  element={<MfdIntelCapital/>} />
     < Route path='/Natural-Capital'  element={<NaturalCapital/>} />
     < Route path='/Risk-management'  element={<RiskManagement/>} />
     < Route path='/Governance'  element={<ReliableGovernance/>} />
     < Route path='/Board-of-Directors'  element={<BoardOfDirector/>} />
     < Route path='/year-at-glance'  element={<YearAtGlance/>} />
     </Routes>
<Footer/>
</BrowserRouter>
    </>
  )
}

export default App
