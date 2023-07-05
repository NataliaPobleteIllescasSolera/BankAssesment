import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Register } from "./Register";
import { SideMenu } from './SideMenu';
import { TopNavbar } from './TopNavbar';
import { UserDataPage } from './UserDataPage';
import { MyAccountPage } from './MyAccountPage';

function App() {
 
  return (
    <>
      <div className="App">
      <BrowserRouter>
       <Register/>
      {/*<TopNavbar/> */}
        <Routes>
          
          {/* <Route path="/myAccount" element={<MyAccountPage/>} />
        <Route path="/myaccount/" element={<SideMenu/>} />
        <Route path="/myaccount/" element={<SideMenu/>} /> */}
          {/* <Route path="/signup" element={<Register/>} /> */}
          <Route path='/a' element={<UserDataPage />} />
        </Routes>
      </BrowserRouter>

        
        
        
        
       
        
        
      </div>
    </>
  )
}
export default App
