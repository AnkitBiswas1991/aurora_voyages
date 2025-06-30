import React from 'react'
import { RiEditFill } from "react-icons/ri";
import Heading3 from './components/heading3'
import PaymentForm from './PaymentForm'
import { useNavigate } from 'react-router-dom';

const BookedHotel = function() {
  const navigate = useNavigate()
  const getData = JSON.parse(localStorage.getItem("Booked_Data"))
  
  return (
    <div className="my-8">
      <div className='container mx-auto'>
        <div className="flex flex-wrap -mx-4">
          <div className="w-2/3 px-4">
              <p className='text-xl mb-4 pb-1 border-b border-gray-300 inline-block'><strong>Hang tight!</strong> You're just moments away from completing your hotel booking!</p>
              <Heading3 headClass={"!mb-2"} heading={`Please Check All Details of Your Bookings`}/>
              <table className='table-auto border-collapse border text-sm border-gray-400 w-full'>
                <thead>
                <tr>
                  <th className='border border-gray-300 px-2 py-2'>Name</th>
                  <th className='border border-gray-300 px-2 py-2'>Email</th>
                  <th className='border border-gray-300 px-2 py-2'>Ph No.</th>
                  <th className='border border-gray-300 px-2 py-2'>Destination</th>
                  <th className='border border-gray-300 px-2 py-2'>Hotel</th>
                  <th className='border border-gray-300 px-2 py-2'>Total People</th>
                  <th className='border border-gray-300 px-2 py-2'>Total Rooms</th>
                  <th className='border border-gray-300 px-2 py-2'>Edit Details</th>
                </tr>
                </thead>
                <tbody>
                  {getData.map((data, i) => (
                    <tr key={i} className={`${i}`}>
                      <td align='center' valign='middle' className='border border-gray-300 px-2 py-2'>{data.firstname} {data.lastname}</td>
                      <td align='center' valign='middle' className='border border-gray-300 px-2 py-2'>{data.email}</td>
                      <td align='center' valign='middle' className='border border-gray-300 px-2 py-2'>{data.phone}</td>
                      <td align='center' valign='middle' className='border border-gray-300 px-2 py-2'>{data.travelspot}</td>
                      <td align='center' valign='middle' className='border border-gray-300 px-2 py-2'>{data.hotel}</td>
                      <td align='center' valign='middle' className='border border-gray-300 px-2 py-2'>{data.numberofpeople}</td>
                      <td align='center' valign='middle' className='border border-gray-300 px-2 py-2'>{data.numberofroom}</td>
                      <td align='center' valign='middle' className='border border-gray-300 px-2 py-2'><button onClick={() => navigate(`/editBooking`, {
                        state: {
                          dataIndex: i
                        }
                      })} className='text-cyan-900 hover:text-cyan-600 transition-all duration-300 ease-in-out cursor-pointer'><RiEditFill /></button></td>
                    </tr>
                    ))}
                  </tbody>
              </table>
              <div className="payment-sec mt-8">
                    <Heading3 headClass={"!mb-2"} heading={`Make Payment & Confirm Your Booking`}/>
                    <PaymentForm/>
                  </div>
              </div>
          </div>
          <div className="w-1/3 px-4">
            
        </div>
      </div>
    </div>
  )
}

export default BookedHotel
