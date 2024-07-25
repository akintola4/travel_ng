import { Link } from "react-router-dom";


export default function TripCard(props) {
    return (

        <div>
            <div className="flex flex-col md:flex-row md:items-center gap-10 lg:mx-10 py-5 rounded-lg px-6 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:shadow-sky-500/20  dark:bg-gray-700" >

                <img
                    src={`/img/${props.info.img}`}
                    className="md:w-4/12  "
                />
                <div className="flex flex-col gap-2 md:px-4 md:w-8/12">

                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-2xl font-medium">{props.info.airline}</h4>
                            <div className="flex flex-row gap-2 items-center">
                                <button className="p-2 dark:text-white text-xs text-center text-black rounded-lg cursor-pointer  border-sky-300 border bg-transparent hover:bg-zinic-600">{props.info.rating}</button>
                                <p className="text-sm">Very Good 54 reviews</p>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className="font-light text-sm text-slate-500 ">starting from</p>
                            <h4 className="text-3xl font-bold text-red-400">${props.info.priceRange}</h4>
                        </div>
                    </div>
                    <div className="flex flex-row border-b-2 py-2">
                        <div className="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 accent-sky-300 text-sky-300 bg-gray-100 border-gray-300 rounded focus:ring-sky-300 dark:focus:ring-sky-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-checkbox" className="ms-2 text-lg font-light flex flex-row gap-2 text-gray-900 dark:text-gray-300">
                                <p className="font-medium"> 12:00 pm
                                    -
                                    01:28 pm</p>
                                <p className="text-">non stop
                                </p></label>
                        </div>
                    </div>
                    <Link to={`/flightDetail/${props.info.id}`} className='flex  py-5 rounded-lg  flex-row items-center justify-center  gap-5 bg-sky-300 dark:bg-sky-900 dark:hover:bg-transparent dark:hover:border-sky-900 hover:bg-transparent hover:border-2 hover:border-sky-300 dark:border-sky-900  border-sky-300 border-2 text-center'>
                    View Deals
                </Link>
                </div>
            </div>
        </div>
    )
}
