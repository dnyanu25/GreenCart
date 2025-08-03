import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


import Home from '/src/pages/Home.jsx';

const App = () => {

  const isSellerPath=useLocation().pathname.includes("seller");
  return (
    <div>

     {isSellerPath ? null : <Navbar/> }

      <div className={` ${isSellerPath ? "mt-0" : "mt-10"} px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16`}>  
        <Routes>
       <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
