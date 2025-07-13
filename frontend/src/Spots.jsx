
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading3 from "./components/Heading3";

const Spots = function({touristSpot, destination, bestHotels, id}){
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();

    const navigate = useNavigate()
    const getPrice = function(){
       const prices = bestHotels.map(el => el.price);
       setMaxPrice(Math.max(...prices))
       setMinPrice(Math.min(...prices))
    }
    useEffect(() => getPrice(), [])
        
    return(
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8" style={{cursor: "pointer"}} onClick={() => navigate(`/places/${id}`)}>
            <div className="each-spot shadow-md rounded-sm overflow-hidden">
                <div className={`relative w-full overflow-hidden pt-[75%]`}>
                    <div className="tourslider">
                        <figure className={`absolute top-0 left-0 w-full h-full overflow-hidden`}>
                            <img src={touristSpot?.[0].images?.[0]} alt={touristSpot?.[0].name} className={`absolute top-1/2 left-1/2 translate-[-50%] w-full h-full max-w-full object-cover object-center`} />
                        </figure>
                    </div>
                </div>
                <div className="travel-sec-details p-3 text-left">
                    <Heading3 heading={destination} headClass={'!mb-2'}/>
                    <div className="flex items-center justify-between text-sm">
                        <span>Hotel available within</span>
                        <span>${minPrice} - ${maxPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Spots;