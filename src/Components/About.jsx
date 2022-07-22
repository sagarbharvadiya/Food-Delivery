import React from 'react';
import dataJson from '../Data/data.json'
// import Client from './Pages/Client';
import WhyChooseUs from './Pages/WhyChooseUs';

const About = () => {
  return (
    <>

      <section className='about'>
        <div className='main'>
          <div className='container'>
            <div className=' d-flex justify-content-between'>
              <div className='about-content'>
                <h2>Welcome To Our Restaurant</h2>
                <h1>About Us</h1>
              </div>
              <div className='about-menu'>
                <ul className='d-flex'>
                  <li className='d-inline-block'><a className='text-decoration-none' href="/">Home</a></li>
                  <li className='d-inline-block'><a className='text-decoration-none' href="/About">About</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='about-shop-main'>
          <div className='container'>
            {dataJson.AboutShop.map((d, i) => (
              <div className='about-shop d-flex gap-5 align-items-center m-auto' key={d.id}>
                <div className='about-shop-img mt-5'>
                  <img src={d.image} alt="img" />
                </div>
                <div className='about-shop-right'>
                  <h6>{d.about}</h6>
                  <h1>{d.title}</h1>
                  <p>{d.description}</p>
                  <p>{d.description1}</p>
                  <h2>{d.name}</h2>
                  <span>{d.positon}</span>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </section>

      <WhyChooseUs />
      
    </>
  )
}

export default About

