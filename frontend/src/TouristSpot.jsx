import { useEffect, useState } from 'react';
import Spots from './Spots';
import Heading1 from './components/Heading1';

const TouristSpot = function () {
  const [traveler, setTraveler] = useState([]);
  useEffect(() => {
    fetch(`/api/travelers`)
      .then((res) => res.json())
      .then((data) => setTraveler(data))
  }, []);
  return (
    <div className='my-8'>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <Heading1 heading={"Places You want to Travel"} headClass={`pb-0 lg:mb-8 border-b inline-block`}/>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          {traveler.map((el, index) => (
            <Spots
              key={el.id || index}
              from={TouristSpot}
              id={el.id}
              destination={el.destination}
              touristSpot={el.touristSpots}
              bestHotels={el.bestHotels}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TouristSpot;