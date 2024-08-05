import { IoAirplane, IoCalendar, IoCalendarOutline, IoClose, IoFastFood, IoHeartOutline, IoShareOutline, IoTime, IoTimeOutline, IoWifi } from "react-icons/io5";

import Footer from "../Landing/Footer";
import Nav from "../Landing/Nav";

import { MdAirlineSeatReclineExtra, MdAirlineSeatReclineNormal, MdOutlineSensorDoor } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

//barcode
import Barcode from 'react-barcode';

//data used 
import Flights from "../../DBMS/Flights";
import { IoMdCheckmark } from "react-icons/io";
import { useEffect, useState } from "react";
import { supabase } from "../supabase-context/client";
import { ImClock } from "react-icons/im";

export default function CartPaid() {

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
    
    const [fullName, setFullname] = useState('')
    useEffect(() => {
        const getUsername = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            const fullname = `${user.user_metadata.first_name}  ${user.user_metadata.last_name}`
            setFullname(fullname)
        }
        getUsername();
    }
        , [])

    console.log(fullName)

    return (

        <div className="dark:text-white dark:bg-gray-900  ">
            <Nav />
            <section className="flex pt-20  mx-5 md:mx-10 flex-col gap-10 justify-betweenpt-20 md:pt-28">

                <section className=" flex justify-between flex-col md:flex-row">
                    <div className="flex flex-col gap-2">
                        <h4 className="text-2xl font-medium"> {flightNeeded.airline}</h4>
                        <p className="flex flex-row gap-2 font-light items-center"><IoAirplane /> <p className="flex flex-row gap-2">{flightNeeded.planeTypes}</p></p>
                        <div className="flex flex-row gap-2 items-center">
                            <button className="p-2 dark:text-white text-xs text-center text-black rounded-lg cursor-pointer  border-sky-300 border bg-transparent hover:bg-zinic-600">{flightNeeded.rating}</button>
                            <p className="text-sm font-medium">Very Good 54 reviews</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <div className="flex flex-col items-end">
                            <h4 className="text-2xl font-bold text-red-400">${flightNeeded.priceRange}</h4>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <button className="p-2 dark:text-white text-md text-center text-black rounded-lg cursor-pointer  border-sky-300 border bg-transparent hover:bg-zinic-600"><IoShareOutline /></button>
                            <button onClick={() => (true)} to="/flightDetail" className='flex p-2 rounded-lg  flex-row items-center justify-center  gap-5 bg-sky-300 dark:bg-sky-900 dark:hover:bg-transparent dark:hover:border-sky-900 hover:bg-transparent hover:border-2 hover:border-sky-300 dark:border-sky-900  border-sky-300 border-2 text-center'>
                                Download
                            </button>

                        </div>
                    </div>
                </section>
                <div className="flex flex-col md:flex-row  bg-sky-50 dark:bg-sky-900 rounded-lg  justify-between">
                    <div className="flex flex-col items-center justify-center md:w-2/12 p-5 rounded-lg bg-sky-100 dark:bg-sky-950 gap-5">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-lg font-medium"> 12:00 pm</h4>
                            <p className="text-sm font-light">Newark(EWR)</p>
                        </div>

                        <img src="/img/cart-design.svg" className="w-2/12  block dark:hidden md:w-6/12 h-2/6" alt="" />
                        <img src="/img/cart-design-2.svg" className="w-2/12  hidden dark:block md:w-6/12 h-2/6" alt="" />
                        <div className="flex flex-col gap-2">
                            <h4 className="text-lg font-medium"> 12:00 pm</h4>
                            <p className="text-sm font-light">Newark(EWR)</p>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg md:w-8/12">
                        <div className="flex flex-col md:flex-row gap-4 items-center rounded-lg justify-between bg-sky-300 dark:bg-sky-950 p-5">
                            <div className="flex gap-4 flex-row">
                                <img src="/img/profile.svg" alt="" />
                                <div className="flex flex-col">
                                    <h4 className="text-xl font-medium"> {fullName} tope akintola</h4>
                                    <p className="text-sm font-light">Boarding Pass N’123</p>
                                </div>

                            </div>
                            <h4 className="text-xl font-medium">Busniess Class</h4>
                        </div>
                        <div className="flex flex-col  justify-between gap-10 p-5">
                            <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2  gap-10 justify-evenly items-center">
                                <div className="flex flex-row items-center gap-2">
                                    <div className="gap-2 p-4 rounded-lg  bg-sky-200 dark:bg-sky-950">
                                        <IoCalendarOutline />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-md font-medium"> Date</h4>
                                        <p className="text-sm font-light"> Newark(EWR)</p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="gap-2 p-4 rounded-lg  bg-sky-200 dark:bg-sky-950">
                                        <IoTimeOutline />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-md font-medium"> Flight Time</h4>
                                        <p className="text-sm font-light"> Newark(EWR)</p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="gap-2 p-4 rounded-lg  bg-sky-200 dark:bg-sky-950">
                                        <MdOutlineSensorDoor />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-md font-medium"> Gate</h4>
                                        <p className="text-sm font-light"> Newark(EWR)</p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="gap-2 p-4 rounded-lg  bg-sky-200 dark:bg-sky-950">
                                        <MdAirlineSeatReclineNormal />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-md font-medium"> Seat</h4>
                                        <p className="text-sm font-light"> Newark(EWR)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-evenly  flex-row">
                                <img src={`/img/${flightNeeded.img}`} className="w-4/12" alt="" />
                                <Barcode value="EK-ABC12345" className="w-4/12" />,
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col p-5 rounded-lg gap-2 bg-sky-100 dark:bg-sky-950 md:w-2/12 justify-evenly items-center">
                        <img src="/img/logo-black.svg" className="w-6/12 block dark:hidden opacity-30 md:w-8/12" alt="" />
                        <img src="/img/logo-blue.svg" className="w-6/12 hidden dark:block opacity-30 md:w-8/12" alt="" />
                        <img src="/img/logo-black.svg" className="w-6/12 block dark:hidden opacity-30 md:w-8/12" alt="" />
                        <img src="/img/logo-blue.svg" className="w-6/12 hidden dark:block opacity-30 md:w-8/12" alt="" />
                        <img src="/img/logo-black.svg" className="w-6/12 block dark:hidden opacity-30 md:w-8/12" alt="" />
                        <img src="/img/logo-blue.svg" className="w-6/12 hidden dark:block opacity-30 md:w-8/12" alt="" />
                    </div>

                </div>

                <div className="flex flex-col mx-5 lg:mx-10 gap-5">
                    <h4 className="text-2xl font-medium"> Terms and Conditions</h4>
                    <ul className="flex flex-col gap-2 list-decimal">
                        <h4 className="text-xl font-light"> Payments</h4>
                        <li className="font-light text-md">
                            If you are purchasing your ticket using a debit or credit card via the Website, we will process these payments via the automated secure common payment gateway which will be subject to fraud screening purposes.
                        </li>
                        <li className="font-light text-md">
                            If you do not supply the correct card billing address and/or cardholder information, your booking will not be confirmed and the overall cost may increase. We reserve the right to cancel your booking if payment is declined for any reason or if you have supplied incorrect card information. If we become aware of, or is notified of, any fraud or illegal activity associated with the payment for the booking, the booking will be cancelled and you will be liable for all costs and expenses arising from such cancellation, without prejudice to any action that may be taken against us.

                        </li>
                        <li className="font-light text-md">
                            Traveller choice may require the card holder to provide additional payment verification upon request by either submitting an online form or visiting the nearest Golobe office, or at the airport at the time of check-in. Golobe reserves the right to deny boarding or to collect a guarantee payment (in cash or from another credit card) if the card originally used for the purchase cannot be presented by the cardholder at check-in or when collecting the tickets, or in the case the original payment has been withheld or disputed by the card issuing bank. Credit card details are held in a secured environment and transferred through an internationally accepted system.

                        </li>
                    </ul>

                    <ul className="flex flex-col gap-2 list-disc">
                        <h4 className="text-xl font-light"> Contact Us</h4>
                        <li className="font-light text-md">
                            If you have any questions about our Website or our Terms of Use, please contact:
                        </li>
                        <li className="font-light text-md">
                            Traveller Choice Group T.C.G.C
                        </li>
                        <li className="font-light text-md">
                            Traveller choice Tower
                        </li>
                        <li className="font-light text-md">
                            P.O. Box: 22550
                            Lagos State,Nigeria
                            Further contact details can be found at TravellerChoice.com/help
                        </li>
                    </ul>
                </div>

            </section>
            <Footer />
        </div>
    )
}
