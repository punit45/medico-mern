import React from 'react'
import Home  from './pages/Home'
import { Routes, Route } from "react-router-dom"
import About from "./pages/About";
import Login from "./pages/Login";
import Doctors from "./pages/Docters";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Myappointment from "./pages/Myappointment";
import Appointment from "./pages/Appointment";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<Profile />} />
        <Route path='/my-appointments' element={<Myappointment />} />
        <Route path='/appointments/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App  
