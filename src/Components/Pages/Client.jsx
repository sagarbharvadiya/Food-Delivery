import React from 'react'
import dataJson from '../../Data/data.json'
import { Swiper, SwiperSlide } from "swiper/react";
import Delivery from './Delivery';

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper";
import OurFoodStories from './OurFoodStories';

const Client = () => {
  return (
    <>
      <section className='client'>
        <div className='container'>
          <div className='sem-title'>
            <h1>Clients Says</h1>
          </div>
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            slidesPerGroupSkip={1}
            grabCursor={false}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}

            navigation={true}
            pagination={{
              clickable: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {dataJson.Clients.map((d, i) => (
              <SwiperSlide key={d.id}>
                <div className='client-box'>
                  <div className='d-flex' >
                    <div className='client-img'>
                      <img src={d.image} alt="img" />
                    </div>
                    <div className='client-details'>
                      <span>{d.review}</span>
                      <p>{d.positon}</p>
                      <h2>{d.name}</h2>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

            ))}
          </Swiper>
        </div>
      </section>
   <OurFoodStories/>
      <Delivery />
    </>
  )
}

export default Client
