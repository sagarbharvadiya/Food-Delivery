import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import '../css/index.css'

// import required modules
import { Navigation,Autoplay } from "swiper";
import dataJson from '../Data/data.json';
import image1 from '../images/sl2.jpg'
// import image2 from '../images/sr4.jpg'
// import image3 from '../images/sl3.jpg'
import hr from '../images/hr1.jpg'
import hr1 from '../images/hr3.jpg'

const Banner = () => {
  return (
    <>
      <section className='banner'>
          <Swiper
            navigation={true}
            modules={[Navigation,Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper">
            <div className='swiper-slide'>
            {dataJson.slider.map((d, i) => (
              <SwiperSlide style={{backgroundImage: `url(${image1})` }}>
                <div className='container'>
                  <div className='slider d-flex justify-content-around align-align-items-center'>
                    <div className='slider-content'>
                      <h6>{d.title}</h6>
                      <h2>{d.subtitle}</h2>
                      <span>{d.subtitles}</span>
                      <p>{d.description}</p>
                      <button>{d.button}</button>
                    </div>
                    <div className='slider-right d-flex'>
                      <div className='slider-right-img'>
                        <img src={hr} alt="hr" />
                      </div>
                      <div className='slider-right-img'>
                        <img src={hr1} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
                ))
                }
            </div> 
          </Swiper>

      </section>


    </>
  )
}

export default Banner