import React from 'react'
import logo from '../images/logo.png';

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className=' container'>
                    <div className=' d-flex justify-content-between align-items-center'>
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
                                        <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                    </li>
                                    <li className=' d-inline-block justify-content-between list-unstyled'>
                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                    </li>
                                    <li className=' d-inline-block justify-content-between list-unstyled'>
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                    </li>
                                    <li className=' d-inline-block justify-content-between list-unstyled'>
                                        <i class="fa fa-pinterest-p " aria-hidden="true"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer