import { useState } from 'react'

import './App.css'
import Navbar from './Navbar/Navbar'
import Example from './Navbar/Dev'
import Homepage from './Pages/Home/Homepage';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
     <Navbar/>
     {/* <Example/>  */}
     <Homepage/>
     {/* <div className='h-screen w-full'>hii</div> */}
     <Footer/>
    </>
  )
}

export default App
