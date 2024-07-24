
import Nav from '../Landing/Nav'

import { IoAirplane } from "react-icons/io5";
import TripCard from './TripCard';
import location from '../../Location';


import ReviewSwiper from '../Landing/ReviewSlider';
import Footer from '../Landing/Footer';
import { Link } from 'react-router-dom';
export default function TripLanding() {

    const Card = location.map((info) => {
        return <TripCard
            //the unqiue id for the data a unqiue key prop
            key={info.id}
            //{/images/product-1.svg"}
            // it like this info is an object containig all the data in the data.js file
            //we then put info() inside our prop thus when we want to soruce the data 
            //we use prop.info."name of the data"
            //remember info is an object so we use dot notation to source our data from it
            info={info} //this contains all the data we need 


        //we can also use the spread operator to access the object 
        // {...info}
        //if you use this method remove all the .info we used in our TripCard component
        />
    })
    return (

        <div className='bg-white flex flex-col gap-10 dark:text-white dark:bg-gray-900'>
            <Nav />


            <section className="relative  xl:pt-36 h-full">
                <img
                    src="img/trip-2.svg"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative ">
                    <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col py-5 text-center lg:py-12 items-center justify-between " data-aos="zoom-in-up">
                            <h4 className='text-4xl lg:text-6xl   font-normal text-white' > Make your travel </h4>
                            <h1 className='text-4xl lg:text-8xl  font-bold text-white' >whishlist, we’ll do the rest</h1>
                            <h6 className='text-3xl lg:text-2xl  font-light text-white' >Special offers to suit your plan</h6>

                            <div className="flex  flex-col p-5  mt-20 inset-x-0 top-0  text-black dark:text-white  md:px-10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-2 gap-10 md:mx-32 w-12/12 md:w-10/12 bg-white rounded-2xl md:p-10" data-aos="fade-up">
                                <div>
                                    <ul className="flex flex-row jusitfy-center items-center gap-10">


                                        <li className=" cursor-pointer relative text-lg  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-sky-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                                            <a to="/ProductList" className="flex flex-row gap-2 items-center">
                                                <IoAirplane /> Find Flight
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className='grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 gap-10'>
                                    <div className="md-w-2xl md:mx-auto">

                                        <label className="block mb-2 text-sm font-medium ">From - To</label>
                                        <input id="countries" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-300 dark:focus:border-sky-300" placeholder='Lagos - Uk'></input>
                                    </div>
                                    <div className="md-w-2xl md:mx-auto">

                                        <label className="block mb-2 text-sm font-medium ">Trip</label>
                                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-300 focus:border-sky-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-300 dark:focus:border-sky-300">
                                            <option selected>Choose a country</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>
                                    </div>
                                    <div className="md-w-2xl md:mx-auto">

                                        <label className="block mb-2 text-sm font-medium ">Depart- Return</label>
                                        <input id="countries" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-300 dark:focus:border-sky-300" placeholder='Lagos - Uk'></input>
                                    </div>
                                    <div className="md-w-2xl md:mx-auto">

                                        <label className="block mb-2 text-sm font-medium ">Passenger - Class</label>
                                        <input id="countries" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-300 dark:focus:border-sky-300" placeholder='Lagos - Uk'></input>
                                    </div>

                                </div>

                                <div className='flex flex-row-reverse gap-5 cursor-pointer'>
                                    <Link to="/flightListing" className='bg-sky-300 p-2.5 text-sm lg:text-md text-white hover:border-2 hover:border-sky-300 hover:bg-transparent border-2'>Show Filghts</Link>
                                    <button className='hover:bg-sky-300 p-2.5 text-sm lg:text-md hover:text-white border-2 border-sky-300' >Add Promo Code</button>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </section>
            <section className='flex flex-col gap-20 '>
                <div className='flex flex-col gap-4 lg:flex-row justify-between  px-5 lg:px-10  w-full'>
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-3xl font-semibold'>Let's go places together</h4>
                        <p className='text-md font-light'>Discover the latest offers and news and start planning your next trip with us.</p>
                    </div>
                    <button className='hover:bg-sky-300 lg:py-1 py-3 px-3 lg:my-2 rounded-md text-sm lg:text-md hover:text-white border-2 border-sky-300'>
                        See All
                    </button>
                </div>
                <div className=''>
                    <img src="img/trip-3.svg" alt="" />
                </div>
            </section>
            <section className='flex flex-col gap-20 mx-5 lg:mx-10  '>
                <div className='flex flex-col gap-4 lg:flex-row justify-between w-full'>
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-3xl font-semibold'>Fall into travel
                        </h4>
                        <p className='text-md md:w-8/12 font-light'>Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</p>
                    </div>
                    <button className='hover:bg-sky-300 lg:py-1 py-3 px-3 lg:my-2 rounded-md text-sm lg:text-md hover:text-white border-2 border-sky-300'>
                        See more places
                    </button>
                </div>
                <div className=' grid xl:grid-cols-4 gap-5 md:grid-cols-3 grid-cols-2 lg:gap-10 grid-rows-1  '>
                    {
                        Card
                    }
                </div>
            </section>
            <section className='flex flex-col gap-20 mx-5 lg:mx-10 '>
                <div className='flex flex-col gap-4 lg:flex-row justify-between   w-full'>
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-3xl font-semibold'>Discover places together with us</h4>
                        <p className='text-md font-light'>Discover the latest offers and news and start planning your next trip with us.</p>
                    </div>
                    <button className='hover:bg-sky-300 lg:py-1 py-3 px-3 lg:my-2 rounded-md text-sm lg:text-md hover:text-white border-2 border-sky-300'>
                        See All
                    </button>
                </div>
                <div className="grid lg:hidden lg:grid-cols-3 grid-rows-2 gap-4">
                    <div className="col-span-2 row-span-2 lg:row-span-2 p-5 bg-sky-300 dark:bg-sky-900 flex flex-col gap-5 justify-between rounded-xl">
                        <div className='flex flex-row items-center justify-evenly'>
                            <h4 className='text-2xl lg:text-4xl '>Backpacking Sri Lanka</h4>
                            <div className='flex flex-col bg-white p-2 rounded-lg items-center'>
                                <p className='font-light text-xl'>from</p>
                                <h4 className='font-bold text-2xl'>$700</h4>
                            </div>
                        </div>
                        <p>Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. 
                            It helps us to forget about our problems, frustrations, 
                            and fears at home. During our journey, we experience life in different ways. 
                            We explore new places, cultures, cuisines, traditions, and ways of living.</p>
                            <button className='bg-white  p-2  rounded-md text-sm lg:text-md hover:bg-sky-900 dark:text-sky-900 hover:text-white border-2 border-transparent'>
                        See All
                    </button>
                    </div>
                    <div className='lg:row-start-3' ><img src="img/trip-4.svg" alt="" /></div>
                    <div className='lg:row-start-3' ><img src="img/trip-5.svg" alt="" /></div>
                    <div className="row-start-4 lg:col-start-2 lg:row-start-2"><img src="img/trip-6.svg" alt="" /></div>
                    <div className="row-start-4 lg:col-start-3 lg:row-start-2"><img src="img/trip-4.svg" alt="" /></div>
                </div>

                <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-4">
                    <div className="row-span-2 p-5 bg-sky-300 dark:bg-sky-900 flex flex-col gap-5 justify-between rounded-xl">
                        <div className='flex flex-row items-center justify-evenly'>
                            <h4 className='text-2xl lg:text-3xl '>Backpacking Sri Lanka</h4>
                            <div className='flex flex-col bg-white p-2 dark:text-sky-900  rounded-lg items-center'>
                                <p className='font-light text-xl'>from</p>
                                <h4 className='font-bold text-2xl'>$700</h4>
                            </div>
                        </div>
                        <p>Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. 
                            It helps us to forget about our problems, frustrations, 
                            and fears at home. During our journey, we experience life in different ways. 
                            We explore new places, cultures, cuisines, traditions, and ways of living.</p>
                            <button className='bg-white  p-2  rounded-md text-sm lg:text-md hover:bg-sky-900 dark:text-sky-900 hover:text-white border-2 border-transparent'>
                        See All
                    </button>
                    </div>
                    <div ><img src="img/trip-4.svg" alt="" /></div>
                    <div ><img src="img/trip-5.svg" alt="" /></div>
                    <div className="col-start-2 row-start-2"><img src="img/trip-6.svg" alt="" /></div>
                    <div className="col-start-3 row-start-2"><img src="img/trip-4.svg" alt="" /></div>
                </div>

            </section>
            <section className='mx-5 flex flex-col gap-10  lg:mx-10'>
                {/* <div className='flex flex-col gap-4 lg:flex-row justify-between w-full'>
          <div className='flex flex-col gap-2'>
            <h4 className='text-3xl font-semibold'>Reviews</h4>
            <p className='text-md font-light'>What people says about Golobe facilities</p>
          </div>
          <button className='hover:bg-sky-300 lg:py-1 py-3 px-3 lg:my-2 rounded-md text-sm lg:text-md hover:text-white border-2 border-sky-300'>
            See All
          </button>
        </div> */}
                {/* 
        <div className='flex flex-row overflow-scroll justify-between py-10 gap-10'>
          {review}
        </div> */}
            </section>
            <ReviewSwiper />

            <Footer />

        </div>
    )
}
