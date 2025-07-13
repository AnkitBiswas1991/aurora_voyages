import React from 'react'
import travelImg from './assets/travel.png'
import Heading1 from './components/Heading1'
import style from './Thankyou.module.css'

const Thankyou = function() {
  return (
    <div className=''>
      <div className="container mx-auto px-4"></div>
        <div className={`flex items-center flex-wrap justify-center ${style['thankYou']}`}>
              <div className='text-center'>
                <figure className='inline-block mb-3'>
                  <img src={travelImg} alt="" width={200} />
                </figure>
                  <div className='mb-0 md:mb-2 lg:mb-3 xl:mb-4 w-full'>
                    <Heading1 heading={'Thank You'}/>
                  </div>
                  <p className='text-md md:text-xl lg:text-2xl'>Woohoo! You’ve locked in all your travel spots — adventure awaits!</p>
              </div>
        </div>
    </div>
  )
}

export default Thankyou
