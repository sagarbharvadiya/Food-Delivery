import React from 'react'
// import { useEffect, useState } from 'react';
const EveryFestival = ({timerDays,timerHours,timerMinutes,timerSeconds}) => {
    return (
        <>
            <section className='Deal-off'>
                <div className='container'>
                    <div className="book-deal">
                        <div className="timer counter">
                            <h4>We offer a hot deal offer every festival</h4>
                            <h1 id="head">Deal off the day</h1>
                            <ul>
                               <li><span id="days">-{timerDays}</span>days</li>
                                <li><span id="hours">-{timerHours}</span>Hours</li>
                                <li><span id="minutes">-{timerMinutes}</span>Minutes</li>
                                <li><span id="seconds">-{timerSeconds}</span>Seconds</li>
                            </ul>
                        </div>
                        <div className="button-bar pt-20">
                            <a href="#btn" className="btn btn-lg">
                                <span>Shop Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        
         </> 
      
    )
}


export default EveryFestival