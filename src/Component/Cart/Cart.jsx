import { IoAirplane, IoClose, IoFastFood, IoWifi } from "react-icons/io5";

import Footer from "../Landing/Footer";
import Nav from "../Landing/Nav";

import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

//data used 
import Flights from "../../DBMS/Flights";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";

export default function Cart() {

    //for the notifcation of cart pay
    const [payed, setPayed] = useState(false)

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

        <div className="dark:text-white dark:bg-gray-900">
            <Nav />
            <section className="flex flex-col lg:flex-row gap-10 justify-between mx-5 md:mx-10 pt-20 md:pt-28">
                <div className="lg:w-7/12">
                    <div className="flex flex-col p-5 px-10 justify-between rounded-2xl gap-10 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:shadow-sky-500/20  dark:bg-gray-700">
                        <div className="flex justify-between gap-5 flex-col lg:flex-row">
                            <div className="flex flex-col gap-2">
                                <h4 className="font-medium text-lg lg:text-2xl "> {flightNeeded.airline} {flightNeeded.planeTypes}</h4>
                                <p className="font-light ">Return Thur, Dec 30</p>
                            </div>

                            <div className="flex flex-col items-end gap-2">
                                <h4 className="text-3xl font-bold text-red-400">${flightNeeded.priceRange}</h4>
                                <p className="font-light text-lg lg:text-2xl">2h 28m</p>

                            </div>

                        </div>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-5 items-center xl:flex-row justify-between">


                                <div className=" dark:text-white p-5 text-md flex flex-row gap-5 text-center text-black rounded-lg cursor-pointer  border-sky-300 border bg-transparent hover:bg-zinic-600">
                                    <img src={`/img/${flightNeeded.img}`} className="w-4/12" alt="" />

                                    <div className="flex flex-col justify-between w-8/12 gap-2">
                                        <h4 className="text-2xl font-medium">{flightNeeded.airline}</h4>
                                        <p>Airbus A320</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-10 text-lg md:text-2xl items-center ">
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

                    </div>

                    {/* <div className="flex flex-col my-10 p-5 rounded-2xl gap-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:shadow-sky-500/20  dark:bg-gray-700">
                        <div className="flex flex-row justify-between items-center mb-4  bg-sky-300 p-5 rounded-lg">

                            <div htmlFor="default-checkbox" className="ms-2 text-lg font-light flex flex-col gap-2 text-gray-900 dark:text-gray-300">
                                <h4 className="font-medium text-lg lg:text-2xl ">Pay in full</h4>
                                <p className="font-light ">Pay the total and you are all set</p>
                            </div>
                            <input id="default-checkbox" type="checkbox" value="" className=" rounded-full border-2  accent-sky-300 text-sky-300 bg-gray-100 border-gray-300  focus:ring-sky-300 dark:focus:ring-sky-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        </div>
                        <div className="flex flex-row justify-between items-center mb-4  bg-sky-300 p-5 rounded-lg">

                            <div htmlFor="default-checkbox" className="ms-2 text-lg font-light flex flex-col gap-2 text-gray-900 dark:text-gray-300">
                                <h4 className="font-medium text-lg lg:text-2xl ">Pay part now, part later</h4>
                                <p className="font-light w-6/12 ">Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.</p>
                                <a href="">More info</a>
                            </div>
                            <input id="default-checkbox" type="checkbox" value="" className=" rounded-full border-2  accent-sky-300 text-sky-300 bg-gray-100 border-gray-300  focus:ring-sky-300 dark:focus:ring-sky-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        </div>
                    </div> */}

                </div>
                <div className="lg:w-4/12 p-10 flex flex-col  rounded-2xl gap-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:shadow-sky-500/20  dark:bg-gray-700">
                    <div className="flex flex-col gap-5 justify-between border-b-2 py-4 lg:flex-row">
                        <img src={`/img/${flightNeeded.img}`} className="lg:w-5/12 " alt="" />
                        <div className="flex gap-2 flex-col">
                            <p className="text-md ">Economy </p>
                            <h4 className="font-semibold text-lg">{flightNeeded.airline}  {flightNeeded.planeTypes}</h4>
                            <div className="flex flex-row gap-2 items-center">
                                <button className="p-2 dark:text-white text-xs text-center text-black rounded-lg cursor-pointer  border-sky-300 border bg-transparent hover:bg-zinic-600">{flightNeeded.rating}</button>
                                <p className="text-sm font-medium">Very Good 54 reviews</p>
                            </div>
                        </div>

                    </div>
                    <p className="text-lg font-medium">Your booking is protected by golobe</p>
                    <div className="border-y-2 flex flex-col gap-5 py-5 ">
                        <h4 className="font-semibold text-lg">Price Details</h4>
                        <div className="flex flex-row justify-between">
                            <p className="font-light text-lg">Base Fare </p>
                            <h4 className="font-medium text-lg">${flightNeeded.priceRange}</h4>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="font-light text-lg">Discount </p>
                            <h4 className="font-medium text-lg">${flightNeeded.discount}</h4>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="font-light text-lg">Taxes </p>
                            <h4 className="font-medium text-lg">${flightNeeded.tax}</h4>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="font-light text-lg">Service Fee </p>
                            <h4 className="font-medium text-lg">${flightNeeded.serviceFee}</h4>
                        </div>

                    </div>
                    <div className="flex flex-row justify-between">
                        <p className="font-bold text-2xl">Total  </p>
                        <h4 className="font-medium text-lg"> --</h4>
                    </div>
                    <button onClick={() => setPayed(true)} to="/flightDetail" className='flex p-2 rounded-lg  flex-row items-center justify-center  gap-5 bg-sky-300 dark:bg-sky-900 dark:hover:bg-transparent dark:hover:border-sky-900 hover:bg-transparent hover:border-2 hover:border-sky-300 dark:border-sky-900  border-sky-300 border-2 text-center'>
              Pay Now
            </button>
            {payed ? (
              <>
                <div className="fixed inset-0 z-50 flex justify-end m-5 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                  <div className="relative my-12 md:my-6">
                    <div className="relative flex flex-col items-center w-full p-2 md:p-5 bg-white dark:bg-sky-950 border-0 shadow-lg outline-none rounded-xl focus:outline-none">
                      <div
                        className="flex flex-shrink-0 items-center justify-between rounded-t-md bg-info-600 gap-20 p-4 dark:border-b dark:border-white dark:bg-transparent">
                        <h5
                          className="text-sm md:text-xl font-medium leading-normal "
                          id="rightTopModalLabel">
                          Flight Payed
                        </h5>
                        <button
                          className="text-2xl text-zinic-600"
                          onClick={() => setPayed(false)}
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
                        <p className='text-sm md:text-md text-zinc-700 dark:text-zinc-100'>Succesfully paid</p>
                      </div>
                      <Link
                        className="p-2 text-center w-6/12  bg-sky-300 dark:bg-sky-900 dark:hover:bg-transparent dark:hover:border-sky-900 hover:bg-transparent hover:border-2 hover:border-sky-300 dark:border-sky-900  border-sky-300 border-2 rounded-lg"
                        type="button"
                        // to={"../cart"}
                        to={ `/cartPaid/${flightNeeded.id}`}
                        onClick={() => setPayed(false)}
                      >
                        See details
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
                </div>

            </section>
            <Footer />
        </div>
    )
}
