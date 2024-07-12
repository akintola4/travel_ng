
import Nav from './Landing/Nav'
import { IoIosBed } from "react-icons/io";
import { IoAirplane } from "react-icons/io5";


export default function Land() {
  return (

    <div className='bg-white flex flex-col gap-20 dark:bg-gray-800 h-100'>
      <Nav />


      <section className="relative mt-10">
        <img
          src="img/hero-3.svg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative ">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col py-5 text-center lg:py-32 items-center justify-between ">
              <h4 className='text-2xl lg:text-6xl lg:mt-20  font-normal text-white'> Helping Others</h4>
              <h1 className='text-4xl lg:text-8xl  font-bold text-white'>Live & Travel</h1>
              <h6 className='text-3xl lg:text-2xl  font-light text-white'>Special offers to suit your plan</h6>

              <div className="flex text-white p-5 flex-col mt-32 inset-x-0 top-0  bg-gray-400 text-black dark:text-white rounded-md md:px-10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-2 gap-10 md:mx-32 w-12/12 md:w-10/12 bg-white rounded-2xl md:p-10">
                <div>
                  <ul className="flex flex-row jusitfy-center items-center gap-10">


                    <li className=" cursor-pointer relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-sky-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                      <a to="/ProductList" className="flex flex-row gap-2 items-center">
                        <IoAirplane /> Find Flight
                      </a>
                    </li>

                    <li className="cursor-pointer pl-4 relative border-l-2 text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-sky-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                      <a className="flex flex-row gap-2 items-center"
                        to="/">
                        <IoIosBed />
                        Find Stays
                      </a></li>
                  </ul>
                </div>

                <div className='flex flex-col lg:flex-row gap-10'>
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
                <button className='bg-sky-300 p-2.5 text-sm lg:text-md text-white hover:border-2 hover:border-sky-300 hover:bg-transparent border-2'>Add Promo Code</button>
                <button className='hover:bg-sky-300 p-2.5 text-sm lg:text-md hover:text-white border-2 border-sky-300' >Add Promo Code</button>
                
                </div>

              </div>

            </div>

          </div>
        </div>

      </section>


    </div>
  )
}
