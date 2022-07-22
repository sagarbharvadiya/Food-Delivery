import React from 'react'
import logo from '../images/logo.png';
import ms from '../images/ms.png'
import dataJson from '../Data/data.json'

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center' id='footer'>
                        <div className='footer-logo'>
                            <div className='f-logo'>
                                <img src={logo} alt="logo" />
                            </div>
                            <div className=' footer-con'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio error quidem distinctio,</p>
                            </div>
                            <div className="footer-social">
                                <h3>Follow Us:</h3>
                                <ul className='d-flex align-items-center p-0'>
                                    <li className=' d-inline-block justify-content-between list-unstyled'>
                                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                    </li>
                                    <li className=' d-inline-block justify-content-between list-unstyled'>
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </li>
                                    <li className=' d-inline-block justify-content-between list-unstyled'>
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </li>
                                    <li className=' d-inline-block justify-content-between list-unstyled'>
                                        <i className="fa fa-pinterest-p " aria-hidden="true"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {dataJson.Footer.map((d,i)=>(
                            <div className='quick-links' key={d.id}>
                                <h6>{d.title}</h6>
                            <ul className='p-0'>
                                <li className='list-unstyled my-3'><a href="/home" className='text-decoration-none'>{d.link}</a></li>
                                <li className='list-unstyled my-3'><a href="/home" className='text-decoration-none'>{d.link1}</a></li>
                                <li className='list-unstyled my-3'><a href="/home" className='text-decoration-none'>{d.link2}</a></li>
                                <li className='list-unstyled my-3'><a href="/home" className='text-decoration-none'>{d.link3}</a></li>
                                <li className='list-unstyled my-3'><a href="/home" className='text-decoration-none'>{d.link4}</a></li>
                                <li className='list-unstyled my-3'><a href="/home" className='text-decoration-none'>{d.link5}</a></li>
                            </ul>
                        </div> 
                        ))}
                    </div>
                    <div className=' d-flex align-items-center justify-content-between copy-right-main'>
                        <div className='copy-right'>
                            <p>Copyright ©2022 Foodbar.Allright Recived</p>
                        </div>
                        <div className='card'>
                            <img src={ms} alt="card" className='w-100' />
                        </div>
                        <div className='term-box'>
                        <h5>Terms & Condition | Privacy | Support</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer