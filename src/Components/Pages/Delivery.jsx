import React from 'react'
// import OurFoodStories from './OurFoodStories'

const Delivery = () => {
  return (
    <>
      <section className='delivery'>
        <div className='container'>
          <div className='d-flex justify-content-center gap-5'>
            <div className='delivery-content'>
              <h1>Get The Latest Deals</h1>
              <p>and receive 20% off coupon for first shopping</p>
            </div>
            <div className='form'>
              <form action="get">
                <input type="email" id="email"
                  pattern=".+@globex\.com" size="30" placeholder='Enter Email' required />
                  <button><a href="#shop">SUBSCRIBE</a></button>
              </form>
            </div>
          </div>
        </div>
      </section>
{/* <OurFoodStories/> */}
    </>
  )
}

export default Delivery