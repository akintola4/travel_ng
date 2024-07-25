//icons
import { IoAirplane, IoClose, IoFastFood, IoHeartOutline, IoShareOutline, IoStopwatch, IoWifi } from "react-icons/io5";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

//component
import Footer from "../Landing/Footer";
import Nav from "../Landing/Nav";

//data used 
import Flights from "../../DBMS/Flights";

//react hooks 
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export default function FlightDetail() {

    //modal control for the book button
    const [book, setBook] = useState(false)


  //import the needed data from the id number
  const params = useParams()
  const flightId = params.flightId


  //this stores the data from the flight js file
  let data = Flights

  //this allows us to find the data for the id we are looking for
  let flightNeeded = data.find((p) =>
    p.id === parseInt(flightId)
  );


  return (
    <div className="dark:text-white dark:bg-gray-900" key={flightNeeded.id}>
      <Nav />
      <section className="pt-20 md:pt-28 mx-5 md:mx-10  flex justify-between flex-col md:flex-row">
        <div className="flex flex-col gap-2">
          <h4 className="text-2xl font-medium"> {flightNeeded.airline} A380 Airbus</h4>
          <p className="flex flex-row gap-2 font-light items-center"><IoAirplane /> <p className="flex flex-row gap-2">{flightNeeded.planeTypes}</p></p>
          <div className="flex flex-row gap-2 items-center">
            <button className="p-2 dark:text-white text-xs text-center text-black rounded-lg cursor-pointer  border-sky-300 border bg-transparent hover:bg-zinic-600">{flightNeeded.rating}</button>
            <p className="text-sm font-medium">Very Good 54 reviews</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex flex-col items-end">
            <p className="font-light text-sm text-slate-500 ">starting from</p>
            <h4 className="text-2xl font-bold text-red-400">${flightNeeded.priceRange}</h4>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <button className="p-2 dark:text-white text-md text-center text-black rounded-lg cursor-pointer  border-sky-300 border bg-transparent hover:bg-zinic-600"><IoHeartOutline /></button>
            <button className="p-2 dark:text-white text-md text-center text-black rounded-lg cursor-pointer  border-sky-300 border bg-transparent hover:bg-zinic-600"><IoShareOutline /></button>
            <button onClick={() => setBook(true)} to="/flightDetail" className='flex p-2 rounded-lg  flex-row items-center justify-center  gap-5 bg-sky-300 dark:bg-sky-900 dark:hover:bg-transparent dark:hover:border-sky-900 hover:bg-transparent hover:border-2 hover:border-sky-300 dark:border-sky-900  border-sky-300 border-2 text-center'>
              Book Now
            </button>
            {book ? (
              <>
                <div className="fixed inset-0 z-50 flex justify-end m-5 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                  <div className="relative my-12 md:my-6">
                    <div className="relative flex flex-col items-center w-full p-2 md:p-5 bg-white dark:bg-sky-950 border-0 shadow-lg outline-none rounded-xl focus:outline-none">
                      <div
                        className="flex flex-shrink-0 items-center justify-between rounded-t-md bg-info-600 gap-20 p-4 dark:border-b dark:border-white dark:bg-transparent">
                        <h5
                          className="text-sm md:text-xl font-medium leading-normal "
                          id="rightTopModalLabel">
                          Flight Booked
                        </h5>
                        <button
                          className="text-2xl text-zinic-600"
                          onClick={() => setBook(false)}
                        >
                          <IoClose />
                        </button>
                      </div>
                      <div className='flex flex-col items-center gap-2 p-2 '>
                        <div className="flex py-4 gap-4 flex-col">
                            <img src={`/img/${flightNeeded.img}`}  alt="" />
                            <span className="border-2 border-zinc-300"></span>
                            <div className="flex justify-between flex-row">
                              <div className="flex flex-col">
                                 <p className="text-md ">Economy </p>
                                <h4 className="font-semibold text-lg">{flightNeeded.airline}  {flightNeeded.planeTypes}</h4>
                              </div>
                              <IoMdCheckmark className="p-3 text-5xl border-2 border-black dark:border-white rounded-full text-zinic-600" />
                            </div>
                        </div>
                        <p className='text-sm md:text-md text-zinc-700 dark:text-zinc-100'>Booking has been added to cart</p>
                      </div>
                      <Link
                        className="p-2 text-center w-6/12  bg-sky-300 dark:bg-sky-900 dark:hover:bg-transparent dark:hover:border-sky-900 hover:bg-transparent hover:border-2 hover:border-sky-300 dark:border-sky-900  border-sky-300 border-2 rounded-lg"
                        type="button"
                        // to={"../cart"}
                        to={ `/cart/${flightNeeded.id}`}
                        onClick={() => setBook(false)}
                      >
                        Close
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </section>
      <section className=" mx-5 py-10 flex flex-col gap-10 md:mx-10">
        <img src={`/img/${flightNeeded.planeImg}`} className="w-full" alt="" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 md:flex-row justify-between">
            <h4 className="text-lg md:text-3xl font-medium">Basic Features</h4>

            <div className="flex flex-row gap-4">
              <div className="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 accent-sky-300 text-sky-300 bg-gray-100 border-gray-300 rounded focus:ring-sky-300 dark:focus:ring-sky-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-checkbox" className="ms-2 text-sm lg:text-lg font-light flex flex-row gap-2 text-gray-900 dark:text-gray-300">
                  Economy</label>
              </div>
              <div className="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 accent-sky-300 text-sky-300 bg-gray-100 border-gray-300 rounded focus:ring-sky-300 dark:focus:ring-sky-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-checkbox" className="ms-2 text-sm lg:text-lg font-light flex flex-row gap-2 text-gray-900 dark:text-gray-300">
                  First Class</label>
              </div>
              <div className="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 accent-sky-300 text-sky-300 bg-gray-100 border-gray-300 rounded focus:ring-sky-300 dark:focus:ring-sky-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-checkbox" className="ms-2 text-sm lg:text-lg font-light flex flex-row gap-2 text-gray-900 dark:text-gray-300">
                  Busines Class</label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-10 ">
            <img src="/img/feature-1.svg" className="w-full" alt="" />
            <img src="/img/feature-2.svg" className="w-full" alt="" />
            <img src="/img/feature-3.svg" className="w-full" alt="" />
            <img src="/img/feature-4.svg" className="w-full" alt="" />
            <img src="/img/feature-5.svg" className="w-full" alt="" />
            <img src="/img/feature-6.svg" className="w-full" alt="" />
          </div>
        </div>
      </section>
      <section className=" mx-5 py-10 flex flex-col gap-5 md:mx-10 bg-sky-300 px-4 md:px-10 rounded-lg dark:bg-sky-900">
        <h4 className="font-medium text-2xl lg:text-3xl "> {flightNeeded.airline} Airlines Policies</h4>

        <div className="flex flex-col gap-2 md:flex-row justify-between">
          <p className="flex flex-row gap-2 items-center text-sm md:text-md lg:text-lg font-light"><IoStopwatch /> Pre-flight cleaning, installation of cabin HEPA filters.</p>
          <p className="flex flex-row gap-2 items-center text-sm md:text-md lg:text-lg font-light"><IoStopwatch /> Pre-flight health screening questions.</p>
        </div>

      </section>
      <section className=" mx-5 lg:mx-20 flex flex-col gap-20 py-10">
        <div className="flex flex-col p-5 px-10 justify-between rounded-2xl gap-10 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:shadow-sky-500/20  dark:bg-gray-700">
          <div className="flex justify-between flex-row">
            <h4 className="font-medium text-lg lg:text-2xl "> Depart Wed, Dec 8</h4>
            <p className="font-light text-lg lg:text-2xl">2h 28m</p>
          </div>
          <div className="flex flex-col gap-5 items-center md:flex-row justify-between">
            <div className=" dark:text-white p-5 text-md flex flex-row gap-5 text-center text-black rounded-lg cursor-pointer  border-sky-300 border bg-transparent hover:bg-zinic-600">
              <img src={`/img/${flightNeeded.img}`} className="w-4/12" alt="" />

              <div className="flex flex-col justify-between w-8/12 gap-2">
                <h4 className="text-2xl font-medium">{flightNeeded.airline}</h4>
                <p>Airbus A320</p>
              </div>
            </div>
            <div className="flex flex-row gap-10 text-3xl items-center ">
              <IoAirplane />
              <IoWifi />
              <IoFastFood />
              <MdAirlineSeatReclineExtra />
            </div>
          </div>
          <div className="flex flex-col gap-10 lg:flex-row justify-evenly items-center">
            <div className="flex flex-row gap-2 items-start lg:items-center">
              <h4 className="text-2xl font-medium">12:00 pm</h4>
              <p className="font-light"> Lagos(LOS)</p>
            </div>
            <img src="/img/plane-white.svg" className="scale-125 hidden dark:block" alt="" />
            <img src="/img/plane.svg" className="scale-125 dark:hidden" alt="" />
            {/* <IoAirplane className=" text-6xl"/> */}

            <div className="flex flex-row gap-2 items-center">
              <h4 className="text-2xl font-medium">12:00 am</h4>
              <p className="font-light"> Los Angeles (LAX)</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-5 px-10 justify-between rounded-2xl gap-10 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:shadow-sky-500/20  dark:bg-gray-700">
          <div className="flex justify-between flex-row">
            <h4 className="font-medium text-lg lg:text-2xl "> Return Thur, Dec 30</h4>
            <p className="font-light text-lg lg:text-2xl">2h 28m</p>
          </div>
          <div className="flex flex-col gap-5 items-center md:flex-row justify-between">
            <div className=" dark:text-white p-5 text-md flex flex-row gap-5 text-center text-black rounded-lg cursor-pointer  border-sky-300 border bg-transparent hover:bg-zinic-600">
              <img src={`/img/${flightNeeded.img}`} className="w-4/12" alt="" />

              <div className="flex flex-col justify-between w-8/12 gap-2">
                <h4 className="text-2xl font-medium">{flightNeeded.airline}</h4>
                <p>Airbus A320</p>
              </div>
            </div>
            <div className="flex flex-row gap-10 text-3xl items-center ">
              <IoAirplane />
              <IoWifi />
              <IoFastFood />
              <MdAirlineSeatReclineExtra />
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row justify-evenly items-center">
            <div className="flex flex-row gap-2 items-center">
              <h4 className="text-2xl font-medium">12:00 am</h4>
              <p className="font-light"> Los Angeles (LAX)</p>
            </div>
            <img src="/img/plane-white.svg" className="scale-125 hidden dark:block" alt="" />
            <img src="/img/plane.svg" className="scale-125 dark:hidden" alt="" />
            {/* <IoAirplane className=" text-6xl"/> */}

            <div className="flex flex-row gap-2 items-center">
              <h4 className="text-2xl font-medium">12:00 pm</h4>
              <p className="font-light"> Lagos(LOS)</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
