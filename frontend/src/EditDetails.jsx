import React, {useEffect, useState } from 'react'
import Heading2 from './components/heading2'
import Heading4 from './components/Heading4';
import Editform from './Editform'
import { useLocation } from 'react-router-dom'

const EditDetails = function() {
    const location = useLocation()
    const {dataIndex} = location.state
    const [destination, setDestination] = useState([]);
    const [travelSpot, setTravelSpot] = useState({});
    const [hotelDetail, setHotelDetail] = useState({});
    const bookedData = JSON.parse(localStorage.getItem("Booked_Data") || "[]").at(dataIndex);
    const currEditData = bookedData

    useEffect(() => {
        fetch(`/api/travelers`)
        .then(res => res.json())
        .then(data => setDestination(data));

    }, [])

    useEffect(() => {
      const matchDestination = destination.find(el => el.destination === currEditData.travelspot);
      setTravelSpot(matchDestination)
    }, [destination, currEditData.travelspot])

    useEffect(() => {
      const getHotel = travelSpot?.bestHotels?.find(hotel => hotel.name === currEditData.hotel);
      setHotelDetail(getHotel || [])
    }, [travelSpot, currEditData.hotel])
    console.log(hotelDetail)
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex -mx-4 lg:-mx-6 py-8 flex-wrap">
            <div className='w-full lg:w-2/3 px-4 lg:px-6'>
              <p className='m-0 mb-5 text-xl'>Edit your details for your booking at <strong>{currEditData.hotel}</strong> in <strong>{currEditData.travelspot}</strong>
                </p>
              <Heading2 heading={'Edit the Form Below:'}/>
              <Editform dataNum={dataIndex}/>
            </div>
            <div className="w-full lg:w-1/3 px-4 lg:px-6 mt-8 lg:mt-0">

              {hotelDetail.name && <Heading4 heading={hotelDetail.name}/>}
              <div className='flex items-center justify-between gap-3'>
                {hotelDetail?.images?.slice(0, 2).map((img, i) =>
                  <figure key={i}>
                    <img src={img} alt={hotelDetail.name}/>
                  </figure>
                )}
              </div>
              <div className="amenity-sec mt-4">
                <strong>Amenities:</strong>
                <ul className='ms-4'>
                  {hotelDetail?.amenities?.map((el, i) => 
                    (<li key={i} className='list-disc list-inline'>{el}</li>)
                  )}
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EditDetails
