import React from 'react'
import dataJson from '../../Data/data.json'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Category from './Category';

const Products = () => {
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

            <section className='products'>
                <div className='container'>
                    <div className='title sem-title'>
                        <h1>Featured products</h1>
                    </div>
                    <div>
                        <Carousel swipeable={false}
                            draggable={false}
                            // showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={5000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerclassName="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            // deviceType={this.props.deviceType}
                            dotListclassName="custom-dot-list-style"
                            itemclassName="carousel-item-padding-40-px">
                            {dataJson.products.map((d, i) => (
                                <>

                                    <div className='slider-box' key={d.id}>
                                        <div className='img'>
                                            <img src={d.image} alt="img" className=' w-100' />
                                            <span>{d.label}</span>
                                        </div>
                                        <div className='content'>
                                            <span>{d.review}</span>
                                            <h5>{d.name}</h5>
                                            <h4>{d.price}<del>{d['dub-price']}</del></h4>
                                        </div>
                                    </div>


                                </>
                            ))
                            }
                        </Carousel>
                    </div>
                </div>
            </section>
            <Category />

        </>
    )
}

export default Products