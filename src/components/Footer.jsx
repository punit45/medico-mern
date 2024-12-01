import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>The Presripto is a user-friendly mobile application designed to connect patients with healthcare professionals anytime, anywhere. It offers features like virtual consultations, appointment scheduling, prescription management, and real-time health tracking.With an intuitive interface, the app also allows patients to store medical records, monitor chronic conditions, and get reminders for medication. Whether you need immediate care, routine check-ups, or expert advice, the Presripto ensures you stay healthy and informed with a few taps.</p>
            </div>
            {/* middle */}
            <div>
                <p className='text-xl font-medium mb-5' >COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/* right */}
            <div>
                <p className='text-xl font-medium mb-5' >GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-789-456-7890</li>
                    <li>iampandapunit45@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright © 2024 Punit PAnda - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer