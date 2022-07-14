import React from 'react'
import dataJson from '../../Data/data.json'
import OurTeam from './OurTeam'
const WhyChooseUs = () => {
    return (
        <>
            <section className='whyChooseUs'>
                <div className='container'>
                    <div className='title sem-title'>
                        <h1>Why Choose Us</h1>
                    </div>
                    <div className='d-flex justify-content-between'>
                        {dataJson.whyChooseUs.map((d, i) => (
                            <div className='box-1'>
                                <img src={d.image} alt="img" />
                                <h2>{d.title}</h2>
                                <p>{d.description}</p>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </section>
            <OurTeam />
            
        </>
    )
}

export default WhyChooseUs