import React from 'react'
import { useEffect } from 'react'
import cf1 from "../assets/cf1.jpg"
import cf2 from "../assets/cf2.jpg"
import cf3 from "../assets/cf3.jpg"
import rpcentre from "../assets/rpcentre.jpg"
import checkstatus from "../assets/checkstatus.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'
const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    })
    AOS.refresh()
  }, [])
  return (
    
    <div id='category' className="w-full bg-gray-100 lg:px-28 px-5 pt-[138px] pb- [80px] flex lg:flex-row flex-col justify-center items-center gap-20">
      <div data-aos='zoom-in' data-aos-delay="50" className="lg:w-[15%] w-full flex flex-col justify-center lg:items-start items-center gap-[20px]">
        <h1 className="text-themepurple text-xl font-semibold text-center">Services</h1>
        <h1 className="text-black font-semibold text-[42px] leading-[50px] lg:text-start text-center">Bicycle Pool services In Tezpur Univeristy</h1>
        <button className="bg-themepurple hover:bg-themeyellow text-white hover: text-black px-8 py-3 rounded-lg font-semibold mt-[60px]"> VIEW ALL</button>
        </div>

        <div className="lg:w-[85%] w-full grid lg:grid-cols-5 grid-cols-1 justify-center items-start gap-10">
          <div data-aos="zoom-in" data-aos-delay="100"className="flex flex-col
 justify-center items-center gap-6 ">
          <img  src={cf1} alt="" className="rounded-lg w-[300px] h-[200px] cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover: text-themepurple
         cursor-pointer">Book Your Cycle</h1>
         </div>

         <div data-aos="zoom-in" data-aos-delay="200"className="flex flex-col
 justify-center items-center gap-6">
          <img src={cf2} alt="" className="rounded-lg w-[300px] h-[200px] cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover: text-themepurple
         cursor-pointer">Sell Your Old Cycle</h1>
         </div>

         <div data-aos="zoom-in" data-aos-delay="300"className="flex flex-col
 justify-center items-center gap-6">
          <img src={cf3} alt="" className="rounded-lg w-[300px] h-[200px] cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover: text-themepurple
         cursor-pointer">Find Cycle Pool Near You</h1>
         </div>

         <div data-aos="zoom-in" data-aos-delay="400"className="flex flex-col
 justify-center items-center gap-6">
          <img src={rpcentre} alt="" className="rounded-lg w-[300px] h-[200px] cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover: text-themepurple
         cursor-pointer">Reapairing Centre</h1>
         </div>

         <div data-aos="zoom-in" data-aos-delay="500"className="flex flex-col
 justify-center items-center gap-6">
          <img src={checkstatus} alt="" className="rounded-lg w-[300px] h-[200px] cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover: text-themepurple
         cursor-pointer">Check Your Old Status</h1>
         </div>
       </div>
    </div>
  )
}

export default Services