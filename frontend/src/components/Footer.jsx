import React, { useEffect } from 'react'
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'
import client4 from '../assets/client4.png'
import client5 from '../assets/client5.png'
import client6 from '../assets/client6.png'
import google from '../assets/google.jpg'
import apple from '../assets/apple.jpg'
import pay1 from '../assets/pay-1.jpg'
import pay2 from '../assets/pay-2.jpg'
import pay3 from '../assets/pay-3.jpg'
import pay4 from '../assets/pay-4.jpg'
import { Link } from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    })
    AOS.refresh()
  }, [])
  return (
    <div id='contact' className='w-full flex flex-col justify-center items-center'>
     
      <div className='servicenum '>
      <h1 className='text-4xl text-left font-bold text-themepurple underline
italic'>Contact Us!</h1><br />
        <h1>Bicycle Repairing Centre :    Mob No. +91 620 496 2171</h1>
        <h1>Complaint Number :    Mob No. +91 980 165 0437</h1>
        <h1>Customer Care Number :    Mob No. +91 620 049 1429</h1>
      </div>
      <div className='w-full lg:px-20 px-5 py-[60px] bg-gray-100 grid lg:grid-cols-[auto,auto,auto,auto,auto] grid-cols-1 justify-between items-start lg:gap-3 gap-10'>
        <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-row
justify-center items-strt gap-10 grow'>
          <div className='flex flex-row justify-center items-start gap-4'>
            <h1 className='text-4xl font-bold text-themepurple underline
italic'>Book Cycle!</h1>
            <p className='text-gray-500 text-justify'>Tezpur University offers a convenient book cycle facility for its students and staff. This service allows users to borrow bicycles for short-term use, making it easier to navigate the campus and nearby areas. The facility is designed to promote eco-friendly transportation and provide a healthy, cost-effective alternative to motorized travel. With easy access to bicycles, students can quickly reach their classes, libraries, and other campus facilities, enhancing their overall university experience.</p>
          </div>
          <div className='flex flex-row justify-center items-start gap-4'>
            <h1 className='text-black text-xl font-semibold capitalize'>Download our App Book Cycle!</h1>
            <div className='flex justify-center items-center gap-4'>
              <img src={google} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>
        </div>
    

        <div data-aos='zoom-in' data-aos-delay='200'>
          <h1 className='text-black text-xl font-semibold capitalize'>useful Links</h1>
          <ul className='mt-8 flex flex-col justify-center items-start gap-2'>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>About</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Contact</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Testimonials</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Created by</li>
          </ul>
        </div>
        <div className='lg:w-[20%] w-full'>
            <p className='text-gray-500 lg:text-end text-center'>2024 created with ❤️❤️❤️ by Coder!</p>
          </div>
        </div>
        <div id='icon-box' className='bg-red-500 text-white p-3 rounded-full hover:bg-themeyellow ☐ hover: text-black cursor-pointer fixed lg:bottom-6 right-6 bottom-6'>
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='w-[35px] h-[35px]' />
        </Link>
      </div>
      </div>
         

  )
}

export default Footer