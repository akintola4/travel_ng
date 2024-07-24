
import Nav from './Nav'
import { IoIosBed } from "react-icons/io";
import { IoAirplane } from "react-icons/io5";
import Card from './Card';
import location from '../../Location';
import { FaPaperPlane } from "react-icons/fa";
import Review from './Review';
import reviews from '../../review';
import ReviewSwiper from './ReviewSlider';
import Footer from './Footer';
export default function Land() {

  const card = location.map((info) => {
    return <Card
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
    //if you use this method remove all the .info we used in our card component
    />
  })
  const review = reviews.map((info) => {
    return <Review
      key={info.id}
      info={info}
      title={info.title}
      company={info.company}
      reviewInfo={info.review}
      name={info.name}
      rating={info.stats.rating}
    />
  })
  return (

    <div className='bg-white flex flex-col gap-10 dark:text-white dark:bg-gray-900'>
      <Nav />


      <section className="relative mt-10 xl:pt-28 h-full">
        <img
          src="img/hero-3.svg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative ">
          <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col py-5 text-center lg:py-12 items-center justify-between " data-aos="zoom-in-up">
              <h4 className='text-4xl lg:text-6xl   font-normal text-white' > Helping Others</h4>
              <h1 className='text-4xl lg:text-8xl  font-bold text-white' >Live & Travel</h1>
              <h6 className='text-3xl lg:text-2xl  font-light text-white' >Special offers to suit your plan</h6>

              <div className="flex  flex-col p-5  mt-20 inset-x-0 top-0  text-black dark:text-white  md:px-10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-2 gap-10 md:mx-32 w-12/12 md:w-10/12 bg-white rounded-2xl md:p-10" data-aos="fade-up">
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
                  <button className='bg-sky-300 p-2.5 text-sm lg:text-md text-white hover:border-2 hover:border-sky-300 hover:bg-transparent border-2'>Add Promo Code</button>
                  <button className='hover:bg-sky-300 p-2.5 text-sm lg:text-md hover:text-white border-2 border-sky-300' >Add Promo Code</button>

                </div>

              </div>

            </div>

          </div>
        </div>

      </section>
      <section className='flex flex-col gap-20 mx-5 lg:mx-10  '>
        <div className='flex flex-col gap-4 lg:flex-row justify-between w-full'>
          <div className='flex flex-col gap-2'>
            <h4 className='text-3xl font-semibold'>Plan your perfect trip</h4>
            <p className='text-md font-light'>Search Flights & Places Hire to our most popular destinations</p>
          </div>
          <button className='hover:bg-sky-300 lg:py-1 py-3 px-3 lg:my-2 rounded-md text-sm lg:text-md hover:text-white border-2 border-sky-300'>
            See more places
          </button>
        </div>
        <div className=' grid xl:grid-cols-3 gap-5 md:grid-cols-2 lg:gap-10 grid-rows-1  '>
          {
            card
          }
        </div>
      </section>
      <section className='flex flex-col xl:flex-row gap-10  justify-evenly items-center mx-5 lg:mx-10 '>
        <div className='flex flex-col lg:w-10/12 xl:w-4/12 gap-4' data-aos="fade-up">
          <div className='flex flex-col gap-2'>
            <h4 className='text-3xl text-center font-semibold'>Learn & Plan your perfect trip</h4>
          </div>
          <p className='text-md font-light '>To plan your dream vacation,
            start by researching destinations that match your interests and budget.
            Read travel blogs, talk to friends who have visited, and browse travel guides to narrow down your options.
            Once you've chosen a location</p>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-1 xl:grid-rows-3 gap-4">
          <div className="xl:col-start-1 xl:row-start-2" >
            <div className="relative ">
              <img
                src="img/flights.svg"
                className="absolute inset-0 object-cover w-full h-full rounded-2xl"
                alt=""
              />
              <div className="relative ">
                <div className="pt-20  sm:max-w-xl md:max-w-full lg:max-w-screen-xl pb-5 ">
                  <div className="flex flex-col gap-4 text-center mt-32  items-center justify-between ">
                    <h4 className='text-2xl lg:text-4xl lg:mt-20  font-bold text-white'> Flights</h4>
                    <h6 className='text-sm lg:text-lg  font-light w-8/12 text-white'>Search Flights & Places Hire to our most popular destinations</h6>
                    <button className='bg-sky-300 p-2.5 text-sm lg:text-md text-white hover:border-2 flex flex-row gap-2 items-center hover:border-sky-300 hover:bg-transparent border-transparent border-2'><FaPaperPlane /> Show Filghts</button>

                  </div>

                </div>
              </div>

            </div>
          </div>
          <div className="xl:col-start-2 xl:row-start-1" >
            <div className="relative ">
              <img
                src="img/hotels.svg"
                className="absolute inset-0 object-cover w-full h-full rounded-2xl"
                alt=""
              />
              <div className="relative ">
                <div className="pt-20  sm:max-w-xl md:max-w-full lg:max-w-screen-xl pb-5 ">
                  <div className="flex flex-col gap-4 text-center mt-32  items-center justify-between ">
                    <h4 className='text-2xl lg:text-4xl lg:mt-20  font-bold text-white'> Hotels</h4>
                    <h6 className='text-sm lg:text-lg  font-light w-8/12 text-white'>Search hotels & Places Hire to our most popular destinations</h6>
                    <button className='bg-sky-300 p-2.5 text-sm lg:text-md text-white hover:border-2 flex flex-row gap-2 items-center hover:border-sky-300 hover:bg-transparent border-transparent border-2'><FaPaperPlane /> Show Hotels</button>

                  </div>

                </div>
              </div>

            </div>
          </div>
          <div className="xl:col-start-2 col-span-2 xl:row-start-3" >
            <div className="relative ">
              <img
                src="img/countries.svg"
                className="absolute inset-0 object-cover w-full h-full rounded-2xl"
                alt=""
              />
              <div className="relative ">
                <div className="pt-20  sm:max-w-xl md:max-w-full lg:max-w-screen-xl pb-5 ">
                  <div className="flex flex-col gap-4 text-center mt-32  items-center justify-between ">
                    <h4 className='text-2xl lg:text-4xl lg:mt-20  font-bold text-white'> Countries</h4>
                    <h6 className='text-sm lg:text-lg  font-light w-8/12 text-white'>Search Countries & Plan trips to our most popular destinations</h6>
                    <button className='bg-sky-300 p-2.5 text-sm lg:text-md text-white hover:border-2 flex flex-row gap-2 items-center hover:border-sky-300 hover:bg-transparent border-transparent border-2'><FaPaperPlane /> Show Contries</button>

                  </div>

                </div>
              </div>

            </div>
          </div>
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
