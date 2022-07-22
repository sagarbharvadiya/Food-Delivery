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
import { useState, useEffect } from 'react';
import EveryFestival from './Components/Pages/EveryFestival';

function App(){
  const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();
  
    const [countDown, setCountDown] = useState(
      countDownDate - new Date().getTime()
    );
    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);
      return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown);
  };

  const getReturnValues = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  
    return [days, hours, minutes, seconds];
  };
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
        <Route exact path='/footer' element={<Footer />} />
      </Routes>
      {/* <EveryFestival timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds} /> */}
    </>
  );
}
EveryFestival.defaultProps = {
  timerDays: 56,
  timerHours: 20,
  timerMinutes: 29,
  timerSeconds: 25,

}
export default App;
