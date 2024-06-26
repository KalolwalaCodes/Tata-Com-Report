import { useState } from 'react'

import './App.css'
import Navbar from './Navbar/Navbar'
import Example from './Navbar/Dev'
import Homepage from './Pages/Home/Homepage';

function App() {

  return (
    <>
     <Navbar/>
     {/* <Example/>  */}
     <Homepage/>
     <div className='h-screen w-full'>hii</div>
    </>
  )
}

export default App
