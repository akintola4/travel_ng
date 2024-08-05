
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import { supabase } from '../supabase-context/client'

import { useState } from "react";

import { useNavigate } from "react-router-dom";
export default function Reset({ setToken }) {


    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type==='password'){
           setIcon(eye);
           setType('text')
        } else {
           setIcon(eyeOff)
           setType('password')
        }
     }

    const [showModal, setShowModal] = useState();
    const navigate = useNavigate()
    const [formData, setFormData] = useState(
        {
            email: "",
            password: ""
        }
    )

    // console.log(formData)
    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const [PasswordStatus, setPasswordStatus] =useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            setPasswordStatus("Passwords do not match.")
            return;
        }
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            })
            console.log(data)
            setToken(data)
            if (data.user) {
                navigate('/Profile')
            }
            else if (data.user == null) {
                setShowModal(true)
            }
        } catch (error) {
            alert(error)
        }
    }
    function withGoogle() {
        supabase.auth.signInWithOAuth({
            provider: 'google',
        })

    }
    return (
        <div className="dark:text-white dark:bg-gray-900 h-full">
              {showModal ?
          <div >
            <div>
          <>
                                <div className="fixed inset-0 z-50 flex justify-end m-5 overflow-x-hidden overflow-y-auto outline-none focus:outline-none ">
                                    <div className="relative my-6">
                                        <div className="relative flex flex-col w-full p-5 bg-white border-0 shadow-lg outline-none rounded-xl focus:outline-none">
                                            <div
                                                className="flex flex-shrink-0 items-center justify-between rounded-t-md bg-info-600 gap-20 p-4 dark:border-b dark:border-neutral-500 dark:bg-transparent">
                                                <h5
                                                    className="text-sm md:text-xl font-medium leading-normal "
                                                    id="rightTopModalLabel">
                                                   Login status
                                                </h5>
                                                <button
                                                    className="text-2xl text-zinic-600"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <IoClose />
                                                </button>
                                            </div>
                                            <div className='flex flex-col items-center gap-2 p-5 text-center'>
                                                <IoClose className="p-3 text-5xl border-2 border-black rounded-full text-zinic-600" />

                                                <h4 className='text-lg font-bold md:text-2xl'>Not logged in</h4>
                                                <p className='text-sm md:text-md text-zinc-700'>Invalid Credentials</p>
                                            </div>
                                            <Link
                                                className="p-2 text-center text-white bg-black border-2 border-black rounded-full cursor-pointer hover:border-black hover:border-2 hover:bg-white hover:text-black hover:bg-zinic-600"
                                                type="button"
                                                to={"/Login"}
                                                onClick={() => setShowModal(false)}
                                            >
                                                Try again
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>: <></>
            </div>
           

          </div>

          : null}
        {/* react routes will contain all the routes we are going to use */}
            <main className="flex flex-col gap-5 px-5 mx-auto  pt-20 xl:px-20  accent-green-950 md:py-20 ">
                <section className="flex flex-row md:flex-col lg:flex-row items-center justify-center gap-10 rounded-lg md:justify-normal ">
                    <div className="flex flex-col gap-5 md:w-12/12  lg:w-6/12 xl:w-6/12 infomation  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-5 rounded-lg">
                    
                        <img src="img/logo-black.svg" className="w-10/12 md:w-10/12 lg:w-6/12 mx-auto" alt="" />

                        <form action="" className="flex flex-col w-full gap-5 pt-10 mx-auto lg:mx-0  lg:p-5 "
                            onSubmit={handleSubmit}
                            providers={["google"]}
                        >
                            <h4 className="text-3xl font-bold" >Reset Passord </h4>
                          
                            <p className="font-light w-6/12">Your previous password has been reseted. Please set a new password for your account.</p>

                            <div className="flex flex-col gap-2 ">
                                <div className="flex justify-between flex-row">
                                    <label htmlFor="Password">Password</label>
                                    <Icon className=" " icon={icon} size={25} onClick={handleToggle} />
                                </div>

                                <input
                                    type={type}
                                    required={true}
                                    className="p-3 border-2 rounded-lg shadow-sm text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950 "
                                    name="password"
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    id="password" />


                            </div>
                            <div className="flex flex-col gap-2 ">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type={type}
                                    required={true}
                                    className="p-3 border-2 rounded-lg shadow-sm text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950 "
                                    name="confirmPassword"
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    id="confirmPassword"
                                />
                            </div>
                            <h4 className="text-lg text-red-400">{PasswordStatus}</h4>
                            <button
                                className="p-3 text-center text-black mt-5 md:mt-0 bg-white border border-transparent shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg hover:border-transparent hover:bg-sky-300 hover:text-white "
                                type="submit"
                            >
                                Set password
                            </button>
                        </form>
                    </div>
                    <div className="hidden w-6/12 title lg:block ">
                        <img src="img/login.svg" className="" alt="" />
                    </div>
                    
                </section>
            </main>

        </div>
    )

}