import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Page from './Components/Page';
import Shop from './Components/Shop';
import Blog from './Components/Blog';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './css/index.css';
import { Routes, Route } from 'react-router-dom';




function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/service' element={<Services />} />
        <Route exact path='/page' element={<Page />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    
      <Footer/>
   
     
    </>
  );
}

export default App;
