
import { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
export default function Rating({data, onRate}) {

    const [showModal1, setShowModal1] = useState(false)

    const [Rate, setRate] = useState("")
   let  handleRate = (e) =>{
    setRate(e.target.value)
    onRate(e.target.value)
   }
  return (

    <div className="flex flex-col justify-between w-full gap-5  ">
    <div className="flex flex-row items-center justify-between py-2">
        <h4 className="font-bold md:text-lg">Rating</h4>
        {
            showModal1?
            <IoIosArrowUp className="md:text-lg" onClick={() => setShowModal1(false)}/>
            :
            <IoIosArrowDown className="md:text-lg" onClick={() => setShowModal1(true)} />
        }
   
    </div>
    {
        showModal1?
        <div className="grid grid-cols-5 gap-5 ">
        <button className="py-2 px-1 text-xs text-center text-black rounded-lg cursor-pointer  border-sky-300 border bg-transparent hover:bg-zinic-600 focus:bg-sky-300 focus:text-white dark:text-white" value={"1"} onClick={handleRate} href=""> 1+</button>
        <button className="py-2 px-1 text-xs text-center text-black rounded-lg cursor-pointer  border-sky-300 border bg-transparent hover:bg-zinic-600 focus:bg-sky-300 focus:text-white dark:text-white" value={"2+"} onClick={handleRate} href=""> 2+</button>
        <button className="py-2 px-1 text-xs text-center text-black rounded-lg cursor-pointer  border-sky-300 border bg-transparent hover:bg-zinic-600 focus:bg-sky-300 focus:text-white dark:text-white" value={"3"} onClick={handleRate} href=""> 3+</button>
        <button className="py-2 px-1 text-xs text-center text-black rounded-lg cursor-pointer  border-sky-300 border bg-transparent hover:bg-zinic-600 focus:bg-sky-300 focus:text-white dark:text-white" value={"4"} onClick={handleRate} href=""> 4+</button>
        <button className="py-2 px-1 text-xs text-center text-black rounded-lg cursor-pointer  border-sky-300 border bg-transparent hover:bg-zinic-600 focus:bg-sky-300 focus:text-white dark:text-white" value={"5"} onClick={handleRate} href=""> 5</button>
        </div>
        :null
    }
    

</div>
  )
}
