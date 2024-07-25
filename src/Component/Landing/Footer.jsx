
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="pt-10 w-full" >
            <div className="relative  ">
                <div className="relative flex flex-col gap-40">
                    <p className=" mb-2  text-transparent">Relative parent</p>

                    <div className="flex gap-4 bg-sky-400 dark:bg-gray-800 w-full">
                        <div className="flex flex-row absolute top-0 items-center justify-between gap-10 p-5 mx-5  dark:bg-sky-900  bg-sky-300 md:mx-10 lg:mx-40 xl:mx-60 rounded-2xl md:flex-row md:p-10 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]" >
                            <div className="flex flex-col gap-4">
                                <h4 className="font-medium text-1xl md:text-4xl ">Subscribe Newsletter</h4>
                                <p className="text-md font-light">The Travel
                                Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
                                <div className="flex flex-col gap-2 md:flex-row">
                                <input type="email" name="" placeholder="Enter your email address" className="p-4 md:w-8/12  " id="" />
                                        <button className="p-4 md:w-4/12 bg-sky-950  text-white    hover:text-sky-300 hover:bg-white cursor-pointer border-transparent border-2 " href="">Subscribe</button>
                                   
                                </div>

                            </div>


                            <div className=" flex-col gap-3 hidden md:flex lg:w-4/12">
                                <img src="/img/sub.svg" alt="" />
                            </div>
                        </div>
                        <div className=" px-5  lg:px-16 pt-32 lg:pt-40 xl:pt-60">
                            <div className="flex flex-col gap-10 lg:gap-20  lg:flex-row ">
                                <div className="flex flex-col items-center lg:items-start gap-5 p-2 xl:p-10 lg:w-4/12" >
                                <img src="/img/logo-black.svg" className="w-10/12 block dark:hidden " alt="" />
                                <img src="/img/logo-blue.svg" className=" hidden dark:block 2" alt="" />
                                    <p>Unlock a world of unforgettable experiences with Travellers Choice, your trusted partner in crafting dream vacations.</p>
                                    <div className="flex gap-5 flex-row">
                                        <button className="text-2xl"><FaXTwitter /></button>
                                        <button className="text-2xl"><FaFacebook /></button>
                                        <button className="text-2xl"><FaInstagram /></button>
                                        <button className="text-2xl"><FaLinkedin /></button>
                                    </div>
                                </div>
                                <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 md:gap-10 justify-between my-5 lg:w-8/12 lg:grid-rows-1">
                                    <ul className="flex flex-col gap-2  text-left">
                                        <h4 className="font-bold text-lg">About Us</h4>
                                        <li><button className="text-md font-light text-gray-800 dark:text-white"> ContactUs </button></li>
                                        <li><button className="text-md font-light text-gray-800 dark:text-white">Blog</button></li>
                                        <li><button className="text-md font-light text-gray-800 dark:text-white">Awards </button></li>
                                        <li><button className="text-md font-light text-gray-800 dark:text-white"> Customer </button></li>
                                    </ul>
                                    <ul className="flex flex-col gap-2  text-left">
                                        <h4 className="font-bold text-lg">Customer Service</h4>
                                        <li><button className="text-md font-light text-gray-800 dark:text-white"> Contact Us</button></li>
                                        <li><button className="text-md font-light text-gray-800 dark:text-white">FAQs</button></li>
                                        <li><button className="text-md font-light text-gray-800 dark:text-white"> Customer Stories</button></li>
                                        <li><button className="text-md font-light text-gray-800 dark:text-white"> Features</button></li>
                                        <li><button className="text-md font-light text-gray-800 dark:text-white"> About Us</button></li>
                                    </ul>
                                    <ul className="flex flex-col gap-2  text-left">
                                        <h4 className="font-bold text-lg">Accessibility</h4>
                                        <li><button className="text-md font-light text-gray-800 dark:text-white">Pricing</button></li>
                                        <li><button className="text-md font-light text-gray-800 dark:text-white"> Careers</button></li>
                                        <li><button className="text-md font-light text-gray-800 dark:text-white">Advertise</button></li>
                                        <li><button className="text-md font-light text-gray-800 dark:text-white">Brand Assets</button></li>

                                    </ul>
                                    <ul className="flex flex-col gap-2  text-left">
                                        <h4 className="font-bold text-lg">Privacy Policy </h4>
                                        <li><button className="text-md font-light text-gray-800 dark:text-white">Press Room </button></li>
                                        <li><button className="text-md font-light text-gray-800 dark:text-white">Cookie Policy</button></li>
                                        <li><button className="text-md font-light text-gray-800 dark:text-white">Cookies</button></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-between border-t-2 py-5 gap-2 md:gap-10">
                                <button>©All right reserved • Tope akintola</button>
                                <button>2024 Terms and condition</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}
