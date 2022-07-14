import React from 'react'
import dataJson from '../../Data/data.json'
import Client from './Client'

const OurTeam = () => {
    return (
        <>
            <section className='Our-team' id='team'>
                <div className='container'>
                    <div className='title sem-title'>
                        <h1>Our Team Member</h1>
                    </div>
                    <div className='d-flex justify-content-between'>
                        {dataJson.ourTeam.map((d, i) => (
                            <div className='team-member'>
                                <img src={d.image} alt="img" />
                                <div className='team-content'>
                                <h2>{d.name}</h2>
                                <p>{d.positon}</p>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>

            </section>
            <Client />

        </>
    )
}

export default OurTeam