
import './App.css'
import 'aos/dist/aos.css';
import HotelLanding from './Component/Hotel/HotelLanding';
import TripLanding from './Component/Trips/TripLanding';
import Land from './Component/Landing/Land';
import Register from './Component/Auth/SignUP'
import {  Routes, Route,  } from "react-router-dom";
import Login from './Component/Auth/Login';
import TripListing from './Component/Trips/TripListing';

function App() {
  return (
    <><div className='bg-white dark:bg-gray-800'>
    </div>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path='/hotel' element={<HotelLanding />} />
        <Route path='/trip' element={<TripLanding />} />
        <Route path='/tripListing' element={<TripListing />} />

        <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App

