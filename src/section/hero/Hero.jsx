import React from 'react'
import pic from '../../assets/images/bag.jpeg'
import './hero.css'
const Hero = () => {
  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8 h-96 hero-container">
  <div className="flex"> {/* Add flex-1 class for equal width */}
    <div className="hero-text">
      <h1 className=''>Remove any unwanted <span className='hero-span bg-greenColor rounded-full w-10'>object,</span> <span className='hero-span bg-greenColor rounded-full'>defect,</span> <span className='hero-span bg-greenColor rounded-full'>people,</span> or <span className='hero-span bg-greenColor rounded-full'>text</span> from your pictures in seconds</h1>
    </div>
  </div>
  <div className="hero-image  flex-shrink-0"> {/* Add flex-shrink-0 class to maintain fixed width */}
    <img src={pic} alt="" />
  </div>
</div>
  )
}

export default Hero
