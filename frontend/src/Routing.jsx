import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import TouristSpot from './TouristSpot';
import TouristPlace from './TouristPlace';
import BookHotel from './BookHotel';
import BookedHotel from './BookedHotel';
import Thankyou from './Thankyou';
import EditDetails from './EditDetails';


const Routing = function() {
  return (
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/places' element={ <TouristSpot/>}/>
         <Route path='/places/:id' element={ <TouristPlace/>}/>
         <Route path='/booking' element={<BookHotel/>}/>
         <Route path='/bookedhotel' element={<BookedHotel/>}/>
         <Route path='/editBooking' element={<EditDetails/>}/>
         <Route path='/thank-you' element={<Thankyou/>}/>
      </Routes>
      
  )
}

export default Routing
