import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {  Navigation } from "swiper";
import dtaJson from '../../Data/data.json'


const OurFoodStories = () => {
 

    return (


        <>
            <section className='our-food-stories'>
                <div className='container'>
                    <div className='title sem-title'>
                        <h1>
                            Our Food Stories
                        </h1>
                    </div>
                    <div>
                        <Swiper
                            // onSwiper={setSwiperRef}
                            slidesPerView={2}
                            centeredSlides={true}
                            spaceBetween={30}
                            loop={true}
                            navigation={true}
                            modules={[ Navigation]}
                            className="mySwiper"
                        >
                            {dtaJson.foodstories.map((d,i)=>(
                            <SwiperSlide key={d.id}> 
                                <div className='food-box'>
                                <div className='food-img'>
                                    <img src={d.image} alt="img" />
                                </div>
                                <div className='food-content'>
                                    <h1>{d.name}</h1>
                                    <span>{d.details}</span>
                                    <p>{d.positon}</p>
                                </div>
                                </div>

                            </SwiperSlide>
                            ))}
                           
                        </Swiper>

                    </div>
                </div>
            </section>
        </>
    )
}

export default OurFoodStories