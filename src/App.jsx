
import './App.css'
import 'aos/dist/aos.css';
import Land from './Component/Landing/Land';
import Register from './Component/Auth/SignUP'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './Component/Auth/Login';

function App() {
  return (
    <><div className='bg-white dark:bg-gray-800'>
    </div>
      <Routes>
        <Route path="/" element={<Land />} />

        <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App

