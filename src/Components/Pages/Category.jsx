import React from 'react'
import dataJson from '../../Data/data.json'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import EveryFestival from './';
import CountdownTimer from '../Pages/CountdownTimer'


const Category = () => {
    const THREE_DAYS_IN_MS = 66 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    const responsive = {

        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <section className='Category'>
                <div className='container'>
                    <div className='title sem-title'>
                        <h1>Shop By Category</h1>
                    </div>
                    <Carousel swipeable={false}
                        draggable={false}

                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerclassName="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListclassName="custom-dot-list-style"
                        itemclassName="carousel-item-padding-40-px">
                        {dataJson.Category.map((d, i) => (
                            <div key={d.id}>
                                <div className='shop-box'>
                                    <div className='img'>
                                        <img src={d.image} alt="shop" className=' w-100' />
                                    </div>
                                    <div className='shop-button'>
                                        <a href="#submit" className='text-decoration-none'>{d.button}</a>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </Carousel>
                </div>
            </section>
            {/* <EveryFestival/> */}
            <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </>
    )
}

export default Category