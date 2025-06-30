import { useEffect, useState } from "react"
import {useNavigate, useParams } from "react-router-dom"
import Heading1 from './components/Heading1'
import Heading3 from './components/Heading3'
import Heading4 from './components/Heading4'
import { FaStar } from "react-icons/fa"


const TouristPlace = function() {
    const {id} = useParams();
    const [tourSpot, setTourSpot] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/api/travelers/${id}`)
        .then(res => res.json())
        .then(data => setTourSpot(data));
    }, [id])
  return (
    <>
    <figure className='banner-img relative overflow-hidden h-[70vh]'>
        <img src={tourSpot.mainImage} alt={tourSpot.destination} className='absolute top-0 left-0 w-full h-full max-w-full object-cover object-center'/>
        <div className="text-center absolute top-0 left-0 right-0 bottom-0 tourist-banner-cntnt">
            <div className="container mx-auto absolute bottom-0 left-0 right-0 z-10">
            <Heading1 heading={tourSpot.destination} headClass={`pb-10 !mb-0 !text-6xl text-shadow-lg text-shadow-cyan-950 absolute bottom-0 left-0`}/>
            </div>
        </div>
    </figure>
    <div className="my-8">
        <div className="container mx-auto">
            <div className="flex -mx-6 flex-wrap">
                <div className="w-2/3 px-6">
                    <div>
                        <Heading3 heading={"Available Hotels"} headClass={'border-b border-gray-300 mb-5 pb-2'}/>
                        {tourSpot.bestHotels?.map((hotel, i) => (
                            <div key={i} className={`${i < (tourSpot.bestHotels.length - 1) ? "mb-3 pb-4 border-b border-gray-300" : ""}`}>
                                <div className="flex justify-between mb-4">
                                    <div className="hotel-details w-2/3">
                                        <Heading4 heading={hotel.name}/>
                                        <span className="font-bold mb-2 inline-block">Amenities Available</span>
                                        <ul className="text-sm ms-2">
                                            {hotel.amenities.map((amenity, i) => (
                                                <li key={i} className="list-disc list-inside">{amenity}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="hotel-pic w-1/3">
                                            <div className="text-end">
                                                <div className="flex justify-end gap-2 mb-1">
                                                    <span></span>
                                                    <div className="inline-block px-2 py-1 rounded-sm text-white bg-cyan-950">
                                                        <span className="flex items-center"><FaStar className="mr-1"/>{hotel.rating}</span>
                                                    </div>
                                                </div>
                                                <div className="text-xs">({hotel.totalRating} Ratings)</div>
                                            </div>
                                        <div className="flex gap-2 my-3">
                                            {hotel.images?.map((img, i) => 
                                                <figure className="w-1/2 relative overflow-hidden pt-[35%]" key={i}>
                                                        <img src={img} alt={hotel.name} className="absolute top-1/2 left-1/2 translate-[-50%] object-cover object-center w-full h-full max-w-100" />
                                                </figure>
                                            )}
                                        </div>
                                        <div className="text-end">
                                            <span className="text-2xl font-bold">$ {hotel.price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <button className="cursor-pointer bg-cyan-950 hover:bg-cyan-600 text-white transition-all duration-300 ease-in-out rounded-sm px-4 py-2" onClick={() => navigate(
                                    `/booking`, {
                                        state: {
                                            hotel: hotel,
                                            tourSpot: tourSpot
                                        }
                                    }
                                    )}>Choose Hotel</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-1/3 px-6">
                    <Heading3 heading={"Popular Tourist Spots"} headClass={'border-b border-gray-300 mb-5 pb-2'}/>
                    {tourSpot.touristSpots?.map((tour, i) => (
                        <div key={i} className={`${i < (tourSpot.touristSpots.length - 1) ? "pb-5 mb-5 border-b border-cyan-800" : ""}`}>
                            <Heading4 heading={tour.name}/>
                            <div className="toristimages flex flex-wrap -mx-3 mb-4">
                                { tour.images.map((img, i) => 
                                    <div key={i} className='px-3 w-1/2'>
                                        <figure className='shadow-lg overflow-hidden rounded h-full border-5 border-white'>
                                            <img src={img} alt={tour.name} className='w-full h-full object-cover object-center'/>
                                        </figure>
                                    </div>
                                )}
                            </div>
                             <p>{tour.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default TouristPlace;