import React, { useEffect, useState } from 'react'
import bannerimg1 from './assets/img01.jpg'
import bannerimg2 from './assets/img-2.jpg'
import bannerimg3 from './assets/img-3.jpg'
import sliderstyle from "./Banner.module.css"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const HeaderBanner = function() {
    const bannerImages = [
        bannerimg1,
        bannerimg2,
        bannerimg3,
    ]
    const [curSlide, setCurSlide] = useState(0);
    
    const goToSlide = (index) => {
        setCurSlide(index)
    }
    const gotoPrevSlide = () => {
        setCurSlide((curSlide - 1 + bannerImages.length) % bannerImages.length);
    }

     const gotoNextSlide = () => {
        setCurSlide((curSlide + 1) % bannerImages.length)
    }

    useEffect(() => {
        setInterval(() => {
             setCurSlide(indexNum => (indexNum + 1) % bannerImages.length);
        }, 5000)
    }, [])
    return (
        <div className='bannerSliderSec relative overflow-hidden pt-[40%]'>
            <div className="banner-slider">
                {bannerImages.map((img, i) => 
                    (
                    
                    <figure className='absolute w-full h-full top-0 left-0' style={{ transform: `translateX(${(i - curSlide) * 100}%)`, transition: 'transform 0.5s ease-in-out' }} key={i}>
                        <img src={img} alt={img} className={`w-full h-full max-w-full absolute top-0 left-0 object-cover object-center`}/>
                    </figure>
                    )
                )}
                <div className={`navigation ${sliderstyle['nav']}`}>
                    <button type='button' className={`${sliderstyle['left-nav']}`} onClick={() => gotoPrevSlide()}>
                        <FaAngleLeft />
                    </button>
                    <button type='button' className={`${sliderstyle['right-nav']}`} onClick={() => gotoNextSlide()}>
                        <FaAngleRight />
                    </button>
                </div>
                <div className="dots flex items-center justify-center gap-3 md:gap-5 xl:gap-8 absolute bottom-5 left-0 right-0 z-10">
                    {bannerImages.map((img, i) => (<button type='button' key={i} onClick={() => goToSlide(i)} className={`cursor-pointer rounded-full ${curSlide === i ? `${sliderstyle['active-dot']}`: ``} ${sliderstyle['slider-dot']}`}></button>))}
                </div>
            </div>
        </div>
    )
}

export default HeaderBanner
