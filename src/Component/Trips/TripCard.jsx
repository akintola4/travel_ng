
import { FaPaperPlane } from "react-icons/fa";
export default function TripCard(props) {
    return (

        <div>
            <div className="xl:col-start-1 xl:row-start-2" >
                <div className="relative ">
                    <img
                        src={`/img/${props.info.img}`}
                        className="absolute inset-0 object-cover w-full h-full rounded-2xl"
                        alt=""
                    />
                    <div className="relative ">
                        <div className="pt-20 flex flex-col  items-center justify-between  sm:max-w-xl md:max-w-full lg:max-w-screen-xl pb-5 ">
                            <div className="flex flex-col md:flex-row justify-between w-full md:items-center px-5 md:px-10 text-white md:gap-4  mt-32 ">
                                <div>
                                <h4 className='text-2xl lg:text-3xl lg:mt-20  font-bold text-white'> {props.info.city}</h4>
                                <h6 className='text-sm lg:text-lg  font-light w-8/12 text-white'>{props.info.country}</h6>
                                </div>
                                <h4 className='text-2xl lg:text-3xl lg:mt-20 font-bold text-white'> ${props.info.price}</h4>
                            </div>
                            <button className='bg-sky-300 p-2.5 text-sm lg:text-md w-10/12 text-center justify-center rounded-lg mt-5 hover:border-2 flex flex-row gap-2 items-center hover:border-sky-300 hover:text-white hover:bg-transparent border-transparent border-2'><FaPaperPlane /> Book Flight</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
