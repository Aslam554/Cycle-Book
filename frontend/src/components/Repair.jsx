import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from '../assets/headset.jpg'
import earbuds from '../assets/earbuds.jpg'
import dslr from '../assets/dslr.jpg'
import rp1 from '../assets/rp1.jpg'
 import rp2 from '../assets/rp2.jpg'
import rp3 from '../assets/rp3.jpg'

import AOS from "aos"
import 'aos/dist/aos.css'

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrowsL:false
  };
  useEffect(()=>{
     AOS.init({
      offset:100,
      duration:500,
      easing:'ease-in-out',
     })
     AOS.refresh()
  },[])
  return (
    <div id='hero' className='w-[97vw] flex justify-center items-center  lg:h-[700px] h-[600px]'>
      <Slider className='w-[100%]' {...settings}>
       <div className='w-full'>
        <div className='w-full lg:px-20 px-5 lg:h-[700px] mx-auto h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center' style={{backgroundImage:`url(${rp1})`}}>
        <h1 data-aos="zoom-in" data-aos-delay='50' className='text-white border rounded-lg border-themeyellow px-6 py-2 text-xl'>Get your Bicycle repaired now</h1>
        <h1 data-aos="zoom-in" data-aos-delay='100' className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px] '>Bicycle Repair<br /> and Services</h1>

        <h1 data-aos="zoom-in" data-aos-delay='100' className='text-white text-2xl '>100% trusted <span className='text-themeyellow font-semibold'>Easily</span> Available</h1>

        <button data-aos='zoom-in' data-aos-delay='200' className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold uppercase'>Online Booking Now</button>
        </div>
       </div>

       <div>
        <div className='w-full lg:px-20 px-5 lg:h-[700px]  h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center' style={{backgroundImage:`url(${rp2})`}}>
        <h1 data-aos="zoom-in" data-aos-delay='50' className='text-white border rounded-lg border-themeyellow px-6 py-2 text-xl'>Get your Bicycle repaired now</h1>
        <h1 data-aos="zoom-in" data-aos-delay='100' className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px] '>Bicycle Repair<br />and Services</h1>

        <h1 data-aos="zoom-in" data-aos-delay='100' className='text-white text-2xl '>100% trusted <span className='text-themeyellow font-semibold'>Great</span> Discount</h1>

        <button data-aos='zoom-in' data-aos-delay='200' className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold uppercase'>Online Booking Now</button>
        </div>
       </div>

       <div>
        <div className='w-full lg:px-20 px-5 lg:h-[700px]  h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center' style={{backgroundImage:`url(${rp3})`}}>
        <h1 data-aos="zoom-in" data-aos-delay='50' className='text-white border rounded-lg border-themeyellow px-6 py-2 text-xl'>Get your Bicycle repaired now</h1>
        <h1 data-aos="zoom-in" data-aos-delay='100' className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px] '>Bicycle  Repair<br /> and Services</h1>

        <h1 data-aos="zoom-in" data-aos-delay='100' className='text-white text-2xl '>100% trusted <span className='text-themeyellow font-semibold'>Get Your Cycle Now</span></h1>

        <button data-aos='zoom-in' data-aos-delay='200' className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold uppercase'>Online Booking Now</button>
        </div>
       </div>
      </Slider>
    </div>
  )
}

export default Hero