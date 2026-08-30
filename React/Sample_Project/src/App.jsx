import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import "./App.css";
import React from "react";


import Student from './Student'
import Details from './Details'
 import NewFruit from './Newfruit';
import Navigation from "./Navigation";
import Home from './Home'
import About from './About'

let App = () => {
  let infor={
    name:"arun",
    age:"21",
    course:"React",
  };

  // let [products, setProducts] = useState([]);

  // useEffect(() => {

  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));

  // }, []);

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

        

        {/*
      <h1>My Store 🛍️</h1>

      <ul>

        {products.map((product) => (

          <li key={product.id}>

            <img
              src={product.image}
              alt={product.title}
            />

            <h3>{product.title}</h3>

            <p>₹ {product.price}</p>

            <p>⭐ {product.rating.rate}</p>

            <button>Add to Cart</button>

          </li>

        ))}

      </ul>  */}

      </div>
    </>
  );
}

export default App;