
import './App.css'
import 'aos/dist/aos.css';
import HotelLanding from './Component/Hotel/HotelLanding';
import FlightLanding from './Component/Trips/FlightLanding';
import Land from './Component/Landing/Land';
import Register from './Component/Auth/SignUP'
import {  Routes, Route,  } from "react-router-dom";
import Login from './Component/Auth/Login';
import FlightListing from './Component/Trips/FlightListing';
import FlightDetail from './Component/Trips/FlightDetail';

function App() {
  return (
    <><div className='bg-white dark:bg-gray-800'>
    </div>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path='/hotel' element={<HotelLanding />} />
        <Route path='/flight' element={<FlightLanding />} />
        <Route path='/flightListing' element={<FlightListing />} />
        <Route path='/flightDetail' element={<FlightDetail />} />
        
        <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App

