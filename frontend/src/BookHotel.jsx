import { useLocation } from 'react-router-dom';
import Bookform from './Bookform';
import Heading2 from './components/heading2.jsx';
import Heading4 from './components/Heading4';

const BookHotel = function() {
  const location = useLocation()
  const {hotel} = location.state
  const {tourSpot} = location.state
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex -mx-4 lg:-mx-6 py-8 flex-wrap">
            <div className='w-full lg:w-2/3 px-4 lg:px-6'>
              <p className='m-0 mb-5 text-xl'>Great choice! You're just moments away from booking your stay at <strong>{hotel.name}</strong> in <strong>{tourSpot.destination}</strong></p>
              <Heading2 heading={'Fill All Your Details in the Form Below:'}/>
              <Bookform hotel={hotel} travelSpot={tourSpot}/>
            </div>
            <div className="w-full lg:w-1/3 px-4 lg:px-6 mt-8 lg:mt-0">
              <Heading4 heading={hotel.name}/>
              <div className='flex items-center justify-between gap-3'>
                {hotel.images.slice(0, 2).map((img, i) =>
                  <figure key={i}>
                    <img src={img} alt={hotel.name}/>
                  </figure>
                )}
              </div>
              <div className="amenity-sec mt-4">
                <strong>Amenities:</strong>
                <ul className='ms-4'>
                  {hotel.amenities.map((el, i) => 
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

export default BookHotel