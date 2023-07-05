import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Register } from "./Register";
import { UserDataPage } from './UserDataPage';
import { MyAccountPage } from './MyAccountPage';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/myaccount"element={<MyAccountPage/>}/>
          <Route path="/datapage" element={<UserDataPage/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App
