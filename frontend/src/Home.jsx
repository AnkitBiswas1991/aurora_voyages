import React from 'react'
import HeaderBanner from './HeaderBanner'
import Heading2 from './components/heading2'
import HomeTravels from './HomeTravels'


const Home = function() {
  return (
    <div>
      <HeaderBanner/>
      <div className="container mx-auto px-4">
        <div className="about-section text-center py-10 mx-auto lg:w-3/4">
            <Heading2 heading={`About Us`}/>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
          <HomeTravels/>
        </div>
    </div>
  )
}

export default Home
