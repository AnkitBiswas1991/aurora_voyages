import React from 'react'
import logo from './assets/logo.png'
import Navbar from './components/Navbar'
import Heading4 from './components/Heading4';
import ContactDetails from './ContactDetails';
import { Link } from 'react-router-dom';

const Footer = function() {
  return (
    <div className='py-12 bg-cyan-950'>
        <div className="container mx-auto">
            <div className="flex justify-between -mx-4">
                <div className="w-1/3 px-4">
                    <Link to={"/"} className='inline-block'>
                        <figure className="logo cursor-pointer">
                            <img src={logo} alt="Aurora Voyages" width={300}/>
                        </figure>
                    </Link>
                </div>
                <div className="footer-menu w-1/3 px-4 text-white">
                    <Heading4 heading={`Footer Menu`}/>
                    <Navbar navClass={"flex gap-2 flex-col text-base"} navLinkClass={'text-white'}/>
                </div>
                <div className="footer-cntnt text-white w-1/3 px-4">
                    <Heading4 heading={`Footer Contact`}/>
                    <ContactDetails showAddress={true} fontSize={'text-sm'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
