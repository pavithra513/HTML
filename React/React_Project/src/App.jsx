import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
//import './App.css';
import Gallary from "./Gallary"
import DecCount from './DecCount'


const App = () => {
  return (
    <>
    <DecCount/>
     {/* <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallary" element={<Gallary />} />
        

      </Routes>
    </BrowserRouter>
    </div>  */}
  </>
  );
}

export default App;