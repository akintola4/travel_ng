
import './App.css'
import 'aos/dist/aos.css';
import HotelLanding from './Component/Hotel/HotelLanding';
import FlightLanding from './Component/Trips/FlightLanding';
import Land from './Component/Landing/Land';
import Register from './Component/Auth/SignUP'
import { Routes, Route, } from "react-router-dom";
import Login from './Component/Auth/Login';
import FlightListing from './Component/Trips/FlightListing';
import FlightDetail from './Component/Trips/FlightDetail';
import Cart from './Component/Main/Cart';

function App() {
  return (
    <div className='bg-white dark:bg-gray-800'>


      {/* react routes will contain all the routes we are going to use */}
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path='/hotel' element={<HotelLanding />} />
        <Route path='/flight' element={<FlightLanding />} />
        <Route path='/flightListing' element={<FlightListing />} />

        {/*/:flightId this is used to get the id of the component we are displaying */}
        <Route path='/flightDetail/:flightId' element={<FlightDetail />}  >
        </Route>

        {/*/:flightId this is used to get the id of the component we are displaying */}
        <Route path='/cart/:flightId' element={<Cart />}  >
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App

