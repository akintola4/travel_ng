/* eslint-disable no-unused-vars */

import './App.css'
import 'aos/dist/aos.css';
import HotelLanding from './Component/Hotel/HotelLanding';
import FlightLanding from './Component/Trips/FlightLanding';
import Land from './Component/Landing/Land';
import Register from './Component/Auth/SignUP'
import { Routes, Route, useNavigate, } from "react-router-dom";
import Login from './Component/Auth/Login';
import FlightListing from './Component/Trips/FlightListing';
import FlightDetail from './Component/Trips/FlightDetail';
import Cart from './Component/Cart/Cart';
import { supabase } from './Component/supabase-context/client';
import { useEffect, useState } from 'react';
import Profile from './Component/Profile/Profile';
import CartPaid from './Component/Cart/CartPaid';
import Reset from './Component/Auth/Reset';


function App() {

  const [token, setToken] = useState(false)

  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data: sessionData } = await supabase.auth.getSession();
        if (sessionData.session !== null) {
          setToken(true)
        }if(sessionData.session == null){
          setToken(false)
        }
        
      } catch (err) {
        setError(err);
      }
    };

    fetchSession();
  }, []);



console.log(token, "this prove we logged in")

const [session, setSession] = useState(null)
const [sessionData, setSessionData] = useState()
useEffect(() => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    setSession(session)
  })

  supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session)
    setSessionData(session.user.user_metadata)
  })
}, [])
// console.log(session.user.user_metadata, "session")
console.log(sessionData, "sessionData")
// console.log(session.user.id)

// const [fullName, setFullname] = useState('')
// useEffect(()=>{
// const getUsername = async () => {
//   const { data: {user} } = await supabase.auth.getUser()
//   const fullname = `${user.user_metadata.first_name}  ${user.user_metadata.last_name}`
//   setFullname(fullname)
// } 
// getUsername();
// }
// ,[])


// console.log(fullName)
// //to show an order confirmation modal
// const [showModal, setShowModal] = useState(true);


  return (
    <div className='bg-white dark:bg-gray-800'>


      {/* react routes will contain all the routes we are going to use */}
      <Routes>
        <Route path="/" element={<Land session={session} />} />
        <Route path='/hotel' element={<HotelLanding />} />
        <Route path='/flight' element={<FlightLanding />} />
        <Route path='/flightListing' element={<FlightListing />} />


        {!session ? null: <Route path='/Profile' key={session.user.id}   element={<Profile session={session} profileData={sessionData}/>} /> }

        {/*/:flightId this is used to get the id of the component we are displaying */}
        <Route path='/flightDetail/:flightId' element={<FlightDetail />}  >
        </Route>

       
        {/*/:flightId this is used to get the id of the component we are displaying */}
        <Route path='/cart/:flightId' element={<Cart token={token} />}  >
        </Route>

        <Route path='/cartPaid/:flightId' element={<CartPaid />} />

        <Route path="/login" element={<Login logged={token} />} />
        <Route path='/reset' element={<Reset setToken={{setToken}}/>} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App

