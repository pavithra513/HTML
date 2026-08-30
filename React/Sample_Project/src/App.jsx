import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import "./App.css";
import React from "react";
import "./index.css";


import Student from './Student'
import Details from './Details'
 import NewFruit from './Newfruit';
import Navigation from "./Navigation";
import Home from './Home'
import About from './About'
import Shop from './Shop'

let App = () => {
  let infor={
    name:"arun",
    age:"21",
    course:"React",
  };

  

  return (
    <>
      <div>
        {/* <Task1/>
      <Task2/>
      <Fruit/>
       <Navbar /> */}
       <BrowserRouter>
       <Navigation/>
       
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
              <Route path="/Student" element={<Student detail={infor}/>}/>
            ``
        </Routes>
      
       </BrowserRouter>
       <Details/>
       <Student detail={infor}/>
       <NewFruit/>
       <Home/>
       <About/>
       <Shop/>

        

      </div>
    </>
  );
}

export default App;