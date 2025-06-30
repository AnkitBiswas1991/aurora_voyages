import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ContactDetails = function({showAddress = false, fontSize}) {
    const cntctDetails = {
        address: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established.',
        emailId: 'email@gmail.com',
        phone: '+91-9874892873'
    }
  return (
        <ul className={fontSize}>
            {showAddress && (
                <li className='flex items-center gap-3 mb-1'>
                    <FaMapMarkerAlt />
                    <p>{cntctDetails.address}</p>
                </li>
            )}
            <li className='flex items-center gap-3 mb-1'>
                <FaEnvelope />
                <Link to={`mailto:${cntctDetails.emailId}`} className='text-white hover:text-cyan-500 transition-all duration-300 ease-in-out'>{cntctDetails.emailId}</Link>
            </li>
            <li className='flex items-center gap-3 mb-1'>
                <FaPhoneAlt />
                <Link to={`tel:${cntctDetails.phone}`} className='text-white hover:text-cyan-500 transition-all duration-300 ease-in-out'>{cntctDetails.phone}</Link>
            </li>
        </ul>
  )
}

export default ContactDetails
