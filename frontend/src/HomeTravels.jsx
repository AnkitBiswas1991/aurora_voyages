import React, { useEffect, useState } from 'react'
import Heading2 from './components/heading2';
import Heading3 from './components/Heading3';
import Button from './components/Button';

const HomeTravels = function() {
    const [travels, setTravels] = useState([]);
    const getTravels = function(){
        fetch(`/api/travelers/`)
        .then(res => res.json())
        .then(data => setTravels(data));
    }
    
    useEffect(() => getTravels(), []);

    const touristSpots = travels.map(el => el.touristSpots).flat()

  return (
    <div className='mb-8'>
      <div className="text-center">
        <Heading2 heading={`Popular Tourist Spots`}/>
      </div>
      <div className='flex -mx-4 justify-center flex-wrap font-medium mt-5 mb-7'>
          {touristSpots.slice(0, 3).map((tour, i) => 
            <div key={i} className='w-full md:w-1/2 lg:w-1/3 px-4 mb-4'>
                <div className="shadow-md rounded-sm overflow-hidden">
                  <figure key={i} className='relative overflow-hidden pt-[65%]'>
                      <img className='absolute top-1/2 left-1/2 translate-[-50%] w-full h-full object-cover object-center' src={tour.images?.[0]} alt={tour.name} />
                  </figure>
                  <div className='text-center p-2 md:p-3 lg:p-4'>
                    <Heading3 heading={tour.name} headClass={'!mb-0'}/>
                  </div>
                </div>
            </div>
          )}
      </div>
       <div className="text-center">
        <Button btnClass={"px-8 py-3"} btnCntnt={"View More"} routeTo={"/places"} btnType={"button"}/>
      </div>
    </div>
  )
}

export default HomeTravels
