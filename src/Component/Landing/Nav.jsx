
import { RxHamburgerMenu } from "react-icons/rx";

// import { IoIosArrowDown } from "react-icons/io";

import { IoIosBed } from "react-icons/io";
import { IoAirplane } from "react-icons/io5";

import { useState } from "react";
// import DarkModeToggle from './DarkModeToggle';

// import { supabase } from './supabase-context/client'
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
//we need to import LINk in react-router dom to be ale to use the link tag 
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DarkSwitcher from "./DarkSwitcher"

//switcher for dark mode


export default function Nav({ setToken }) {
    // now we create a toogle menu for the navabr 
    const [showModal, setShowModal] = useState();
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


    // console.log(token)
    let navigate = useNavigate()

    function handleLogout() {
        try {
            supabase.auth.signOut();
            // Redirect to login page or perform other actions after sign-out

            setShowModal(true)
            setToken(null)
            navigate('/Login')
        } catch (error) {
            console.error('Error signing out:', error.message);
            // Display an error message to the user
        }
    }

    return (
        <><header className="fixed inset-x-0 top-0 z-10 bg-gray-400 text-black dark:text-white rounded-md md:px-10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 w-12/12">

            <nav className="flex items-center justify-between p-4" aria-label="Global">



                <ul className="flex flex-row items-center hidden gap-10 lg:flex">


                    <li className="relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-sky-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                        <Link to="/Trip" className="flex flex-row gap-2 items-center">
                            <IoAirplane /> Find Flight
                        </Link>
                    </li>

                    <li className="relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-sky-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                        <Link className="flex flex-row gap-2 items-center"
                            to="/hotel">
                            <IoIosBed />
                            Find Stays
                        </Link></li>
                </ul>
                <div className="flex flex-row items-center gap-2 mx md:w-3/12">
                    <Link to="/" >
                        <img src="img/logo-black.svg" className="w-6/12 md:w-8/12" alt="" />
                    </Link>
                </div>
                <div className="nav-3 ">
                    <ul className=" flex-row hidden lg:flex items-center gap-2">

                        <DarkSwitcher />



                        <Link
                            to="/Login"
                            className="p-2 text-md  rounded-md cursor-pointer hover:bg-sky-300 hover:text-white hover:bg-zinic-600 bg-none"
                            href="">Login</Link>


                        <Link
                            to="/register"
                            className="p-2 text-md  rounded-md cursor-pointer hover:bg-sky-300 hover:text-white hover:bg-zinic-600 bg-none"
                        >Sign Up</Link>

                    </ul>
                    <button
                        className="flex p-2 rounded-md outline-none cursor-pointer mobile-menu-button lg:hidden hover:bg-none hover:text-black" onClick={toggleMenu}>
                        <RxHamburgerMenu className="text-2xl" /></button>
                </div>

            </nav>
            <div className={`lg:hidden mobile-menu ${isOpen ? "" : "hidden "}`}>
                <ul className="gap-20 mx-auto">
                    <li className="px-5 py-2 transition duration-300 dark:text-white "><Link to={"/"}>Home</Link></li>
                    <li className="px-5 py-2 transition duration-300 dark:text-white">
                        <Link to="/Trip" className="flex flex-row gap-2 items-center">
                         Find Flight
                        </Link>
                    </li>

                    <li className="px-5 py-2 transition duration-300 dark:text-white">
                        <Link className="flex flex-row gap-2 items-center"
                            to="/hotel">
                            Find Stays
                        </Link></li>
                    <li className="px-5 py-2 transition duration-300 dark:text-white ">  <DarkSwitcher /> Theme</li>

                    <li className="px-5 py-2 transition duration-300 dark:text-white "><Link
                        to="/Login"
                        className=""
                        href="">Login</Link></li>
                    <li className="px-5 py-2 transition duration-300 dark:text-white "> <Link
                        onClick={handleLogout}
                        to="/Register"
                        className=""
                    >Sign Up</Link></li>



                </ul>
            </div>
            <div>

            </div>
        </header>
            {showModal ?
                <div >
                    <div>
                        <>
                            <div className="fixed inset-0 z-50 flex justify-end m-5 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                                <div className="relative my-6">
                                    <div className="relative flex flex-col w-full p-5 bg-white border-0 shadow-lg outline-none rounded-xl focus:outline-none">
                                        <div
                                            className="flex flex-shrink-0 items-center justify-between rounded-t-md bg-info-600 gap-20 p-4 dark:border-b dark:border-neutral-500 dark:bg-transparent">
                                            <h5
                                                className="text-sm md:text-xl font-medium leading-normal "
                                                id="rightTopModalLabel">
                                                Status
                                            </h5>
                                            <button
                                                className="text-2xl text-zinic-600"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <IoClose />
                                            </button>
                                        </div>
                                        <div className='flex flex-col items-center gap-2 p-5 text-center'>
                                            <FaCheck className="p-3 text-5xl border-2 border-black rounded-full text-zinic-600" />

                                            <h4 className='text-lg font-bold md:text-2xl'>Success</h4>
                                            <p className='text-sm md:text-md text-zinc-700'>Logged out successfully!</p>
                                        </div>
                                        {/* <Link
                                                className="p-2 text-center text-white bg-black border-2 border-black rounded-full cursor-pointer hover:border-black hover:border-2 hover:bg-white hover:text-black hover:bg-zinic-600"
                                                type="button"
                                                to={"/Login"}
                                                onClick={() => setShowModal(false)}
                                            >
                                                Try again
                                            </Link> */}
                                    </div>
                                </div>
                            </div>
                        </>: <></>
                    </div>


                </div>

                : null}
        </>
    )
}