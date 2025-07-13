import React from 'react'
import Navbar from './components/Navbar'
import logo from './assets/logo.png'
import ContactDetails from './ContactDetails';
import { Link } from 'react-router-dom';

const Header = function() {
  return (
    <div className='py-3 lg:py-4 bg-cyan-950'>
        <div className="container mx-auto px-4">
            <div className='flex items-center justify-between relative'>
                <div className="w-1/2 sm:w-1/3">
                    <Link to={"/"}>
                        <figure className="logo cursor-pointer inline-block">
                            <img src={logo} alt="Aurora Voyages" width={300}/>
                        </figure>
                    </Link>
                </div>
                <div className="w-1/2 sm:w-1/3 flex justify-end md:justify-center">
                    <Navbar navClass="" navLinkClass="p-1 md:p-2 mx-1 lg:mx-2"/>
                </div>
                <div className="contact-details text-white w-1/3 hidden md:flex justify-end">
                    <ContactDetails showAddress={false}/>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Header
