import { useState } from "react"
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function Range({ data, onRange }) {

    const [filter, setFilter] = useState()
    const filterRange = (e) => {
        setFilter(e.target.value)
        onRange(e.target.value)
    }

    // State to hold the current value of the slider
    const [price, setPrice] = useState(0);

    // Function to update the price state
    const updatePrice = (value) => {
        setPrice(value);
    };
    const [showModal, setShowModal] = useState();
    return (
        //     <div>
        //     <input type="range" className="accent-black range" name="filter" onChange={filterRange} min={50} max={5000} step={5} value={filter !== undefined ? filter : 0}  />
        // </div>


            <div className="mb-4 flex flex-col gap-5">
                <div className='flex justify-between gap-5 flex-row'>
                    <h4 className="text-lg font-semibold">Price</h4>
                    {
                        showModal ?
                            <IoIosArrowUp onClick={() => { setShowModal(!true) }} />
                            : <IoIosArrowDown onClick={() => { setShowModal(!false) }} />
                    }
                </div>
                {
                    showModal ?
                        <div className="flex flex-col gap-5">
                            <input
                                type="range"
                                id="price-range"
                                className="w-full accent-sky-600"
                                onInput={(e) => updatePrice(e.target.value)}
                                onChange={filterRange} min={50} max={1500} step={5} value={filter !== undefined ? filter : 0}
                            />
                            <div className="flex justify-between text-gray-500">
                                <span className="dark:text-white" id="minPrice">${price}</span>
                                <span className="dark:text-white" id="maxPrice">$1500</span>
                            </div>
                        </div>

                        : null

                }
            </div>

    )
}