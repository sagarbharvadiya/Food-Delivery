import React from 'react'
// import Button from "@mui/material/Button";
import Logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
      <section className='w-100 Navbar'>
        <div className='navbar w-100 position-fixed'>
          <div className=' container'>
            <div className='logo'>
             <a href="index.html">
               <img src={Logo} alt="logo" />
              </a> 
            </div>
            <nav className='d-flex'>
                <ul className='d-flex justify-content-between list-unstyled align-items-center m-0 p-0'>
                  <li className='d-inline-block mx-4 my-2'><NavLink activeclassname="active" className='text-decoration-none' to="/">Home</NavLink></li>
                  <li className='d-inline-block mx-4 my-2'><NavLink activeclassname="active" className='text-decoration-none' to="/about">About</NavLink></li>
                  <li className='d-inline-block mx-4 my-2'><NavLink activeclassname="active" className='text-decoration-none' to="/page">Page</NavLink></li>
                  <li className='d-inline-block mx-4 my-2'><NavLink activeclassname="active" className='text-decoration-none' to="/shop">Shop</NavLink></li>
                  <li className='d-inline-block mx-4 my-2'><NavLink activeclassname="active" className='text-decoration-none' to="/blog">Blog</NavLink></li>
                  <li className='d-inline-block mx-4 my-2'><NavLink activeclassname="active" className='text-decoration-none' to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            <div className='search-bar d-flex align-items-center'>
              <i className="fa fa-search mx-2 my-2" aria-hidden="true"></i>
              <i className="fa fa-heart mx-2 my-2" aria-hidden="true"></i>
              <i className="fa fa-cart-arrow-down mx-2 my-2" aria-hidden="true"></i>
              <i className="fa fa-user mx-2 my-2" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar