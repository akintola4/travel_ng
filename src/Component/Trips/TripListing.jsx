import Footer from '../Landing/Footer';
import Nav from "../Landing/Nav";

import { useState } from 'react';
import PriceRange from './PriceRange';
import Rating from './Rating';

// icons
import { FaMagnifyingGlass } from "react-icons/fa6";
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowUp } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";


//the data for the flight 
import flightdata from '../../DBMS/Flights'
import FlightCard from './FlightCard';
export default function TripListing() {

    const flighCard = flightdata.map((info) => {
        return <FlightCard
            key={info.id}
            info={info}
            airline={info.airline}
            img={info.img}
            price={info.PriceRange}
            rating={info.rating}

        />
    }
    )

    const [filteredCards, setFilteredCards] = useState(flightdata);
    const [rate, setRate] = useState("")

    const handleRate = (ProductQuery) => {
        setRate(ProductQuery);
        const filtered = flightdata.filter((post) => {
            return post.Rate.toLowerCase().includes(ProductQuery.toLowerCase());
        });
        setFilteredCards(filtered);


        c


        // //this for the sort 
        // const [sort, setSort] = useState("all")
        // const sortProduct = (e) => {
        //     const selectedValue = e.currentTarget.value;
        //     setSort(selectedValue);

        //     let sorted;

        //     if(selectedValue === "Most Afforable") {
        //       const low = flightdata.sort((a, b) => a.price - b.price);
        //       setFilteredCards(low);
        //     } else if(selectedValue === "Most expensive") {
        //       const high = flightdata.sort((a, b) => b.price - a.price);  
        //       setFilteredCards(high);
        //     } else if(selectedValue === "Most Popular") {
        //       const ratings = flightdata.sort((a, b) => a.rating - b.rating);
        //       setFilteredCards(ratings); 
        //     } else if(selectedValue === "all") {
        //       setFilteredCards(flightdata);
        //     } else {
        //       setFilteredCards(flightdata);
        //     }
        //   }


    }
    return (
        <div className='bg-white flex flex-col gap-10 dark:text-white dark:bg-gray-900'>
            <Nav />
            <form action="" className='mt-20 md:mt-28 mx-5 md:mx-10 gap-5 grid grid-cols-2 grid-rows-3 lg:flex lg:flex-row items-center p-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:shadow-sky-500/20 dark:bg-gray-800 rounded-lg
              '>
                <div className="lg:w-4/12">

                    <label className="block mb-2 text-sm font-medium ">From - To</label>
                    <input id="countries" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-300 dark:focus:border-sky-300" placeholder='Lagos - Uk'></input>
                </div>
                <div className="lg:w-4/12">

                    <label className="block mb-2 text-sm font-medium ">Trip</label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-300 focus:border-sky-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-300 dark:focus:border-sky-300">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <div className="lg:w-4/12">

                    <label className="block mb-2 text-sm font-medium ">Depart- Return</label>
                    <input id="countries" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-300 dark:focus:border-sky-300" placeholder='07 Nov 22 - 13 Nov 22'></input>
                </div>
                <div className="lg:w-4/12">

                    <label className="block mb-2 text-sm font-medium ">Passenger - Class</label>
                    <input id="countries" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-300 dark:focus:border-sky-300" placeholder='1 Passenger, Economy'></input>
                </div>
                <button className='flex lg:w-1/12 py-5 rounded-lg  flex-row items-center justify-center  gap-5 bg-sky-300 dark:bg-sky-900 dark:hover:bg-transparent dark:hover:border-sky-900 hover:bg-transparent hover:border-2 hover:border-sky-300 border-transparent text-center'>
                    <FaMagnifyingGlass />
                </button>
                <button className="lg:hidden bg-sky-300 dark:bg-sky-900 dark:hover:bg-transparent dark:hover:border-sky-900 hover:bg-transparent hover:border-2 hover:border-sky-300 border-transparent py-5 rounded-lg items-center flex justify-center "
                    href=""
                    type="button"
                // onClick={() => setShowModal(true)}
                ><VscSettings className="md:text-lg" />
                </button>
            </form>

            <section className="flex gap-10 flex-row mx-5 md:mx-10 h-full">
                <div className=' flex-col p-5 h-3/6 hidden lg:flex rounded-lg gap-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:shadow-sky-500/20 w-3/12 dark:bg-gray-800'>
                    <h4>Filters</h4>
                    <div className='border-b-2 p-2'>
                        <PriceRange />
                    </div>
                    <div className='border-b-2 p-2'>
                        <Rating data={flightdata} onRate={handleRate} />
                    </div>
                    <div className="flex-col items-center justify-between w-full gap-3 py-5 border-b-2 ">
                        <div className="flex-col items-center justify-between w-full py-5 ">
                            <div className="flex flex-row items-center justify-between">
                                <h4 className="font-bold md:text-lg">Airlines</h4>
                                <IoIosArrowUp className="md:text-lg" />
                            </div>
                            <div>
                                <div className="flex flex-col items-center justify-between w-full py-5 ">
                                    <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
                                        <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Casual</button>
                                        <FaAngleRight className="font-light md:text-lg text-zinc-500" />
                                    </div>
                                    <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
                                        <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Formal</button>
                                        <FaAngleRight className="font-light md:text-lg text-zinc-500" />
                                    </div>
                                    <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
                                        <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Party</button>
                                        <FaAngleRight className="font-light md:text-lg text-zinc-500" />
                                    </div>
                                    <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
                                        <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Gym</button>
                                        <FaAngleRight className="font-light md:text-lg text-zinc-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full gap-10 lg:w-9/12 '>
                        <div className=' grid grid-cols-2 lg:flex lg:flex-row w-full lg:w-12/12 justify-between gap-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:shadow-sky-500/20  dark:bg-gray-800 p-2 rounded-lg'>
                            <button className='text-lg flex flex-col border-r-gray-200 lg:border-r-transparent lg:w-4/12 border-r-2 px-2 border-transparent border-4  hover:border-b-4 hover:border-b-sky-300'>
                                Cheapest
                                <p className='text-md text-light text-slate-400'>time</p>
                            </button>
                            <span className='border hidden lg:block'></span>
                            <button className='text-lg flex flex-col lg:w-4/12 border-r-2  px-2 border-transparent border-4  hover:border-b-4 hover:border-b-sky-300'>
                                Best
                                <p className='text-md text-light text-slate-400'>time</p>
                            </button>
                            <span className='border hidden lg:block'></span>
                            <button className='text-lg flex flex-col border-r-gray-200 lg:border-r-transparent lg:w-4/12 border-r-2 px-2 border-transparent border-4  hover:border-b-4 hover:border-b-sky-300'>
                                Quickest
                                <p className='text-md text-light text-slate-400'>time</p>
                            </button>
                            <span className='border hidden lg:block'></span>
                            <button className='text-lg flex flex-col lg:w-4/12 border-r-2 px-2 border-transparent border-4  hover:border-b-4 hover:border-b-sky-300'>
                                Eco
                                <p className='text-md text-light text-slate-400'>time</p>
                            </button>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-2">
                            <p className="text-sm md:text-md flex flex-row gap-2 ">Showing 4 of <p className='text-red-500'>257 places</p></p>

                            <div className='flex flex-row items-center gap-2'>
                                <p className="text-md">Sort By:</p>
                                <select name="sort" className=' accent-sky-300 text-sm md:text-md dark:bg-gray-700 p-2 rounded-lg' id="sort"
                                // value={sort} onChange={sortProduct}
                                >
                                    <option value="Most Popular">Recommended</option>
                                    <option value="Most Popular">Most Popular</option>

                                    <option value="Most Afforable">Most Afforable</option>
                                    <option value="Most expensive">Most expensive</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col gap-10'>
                            {flighCard}
                        </div>
                    </div>
            </section>


            <Footer />
        </div>
    )
}
