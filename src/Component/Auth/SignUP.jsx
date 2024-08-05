
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
//this will import the module we want to use 
// import { supabase } from '../supabase-context/client'
import { supabase } from '../supabase-context/client'

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoClose } from 'react-icons/io5';
export default function Register() {


    const [modal, setModal] = useState(null)
    const [modalError, setModalError] = useState('')
    const navigate = useNavigate()

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }

    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            dob: "",
            phone: "",
            address: "",
            confirmPassword: "",
            password: ""
        }
    )

    // console.log(formData)

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const [PasswordStatus, setPasswordStatus] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            setPasswordStatus("Passwords do not match.")
            return;
        }
        
        try {
            const { data, error: signupError } = await supabase.auth.signUp(
                {
                    email: formData.email,
                    password: formData.password,
                    phone:  formData.phone,
                    options: {
                        data: {
                            first_name: formData.firstName,
                            last_name: formData.lastName,
                            phone_number: formData.phone,
                            dob: formData.dob,
                            address: formData.address,
                        }
                    }

                });
            if (signupError) {
                console.error("Signup error:", signupError.message);
                throw signupError; // Re-throw the signup error for handling
            }
            // // Handle Success
            console.log('User created and profile added successfully!');
            setModal(false)
            
        } catch (error) {
            // Handle Errors 
            console.error('Error:', error.message);
            setModalError(error.message)
            setModal(true)
        }
      
    }
    if(modal == false){
        navigate("/login");
    }
    // console.log(formData)
    return (
        <div>
            {modal ?
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
                                                   Sign Up status
                                                </h5>
                                                <button
                                                    className="text-2xl text-zinic-600"
                                                    onClick={() => setModal(false)}
                                                >
                                                    <IoClose />
                                                </button>
                                            </div>
                                            <div className='flex flex-col items-center gap-2 p-5 text-center'>
                                                <IoClose className="p-3 text-5xl border-2 border-black rounded-full text-zinic-600" />

                                                <h4 className='text-lg font-bold md:text-2xl'></h4>
                                                <p className='text-sm md:text-md text-zinc-700'>{modalError}</p>
                                            </div>
                                            <Link
                                                className="p-2 text-center text-white bg-black border-2 border-black rounded-full cursor-pointer hover:border-black hover:border-2 hover:bg-white hover:text-black hover:bg-zinic-600"
                                                type="button"
                                                to={"/register"}
                                                onClick={() => setModal(false)}
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
            <main className="flex flex-col gap-5 px-5 mx-auto my-32 xl:px-60 md:pt-20 accent-green-950 md:my-14">
                <section className="flex items-center justify-center gap-10 rounded-lg md:justify-normal ">
                    <div className="hidden w-6/12 title lg:block ">
                        <img src="img/register.svg" className="" alt="" />
                    </div>
                    <div className="flex flex-col gap-5 lg:w-6/12 xl:w-6/12 infomation shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-5 rounded-lg ">
                        <img src="img/logo-black.svg" className="w-8/12 mx-auto md:p-5" alt="" />

                        <form action="" className="flex flex-col mx-auto  rounded-lg gap-5 md:p-5"
                            onSubmit={handleSubmit}
                        >
                            <h4 className="text-3xl font-bold" >Create an account</h4>

                            <h4 className="flex flex-row gap-5 text-zinc-400">Already have an account? <Link to="/login" className="relative text-md  w-fit block hover:text-black text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"> Login</Link></h4>


                            <div className="flex flex-col gap-2">
                                <label htmlFor="firstname">First name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    onChange={handleChange}
                                    className="p-3 border-2 rounded-lg text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950"
                                    id="firstName" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="lastName">Last name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange}
                                    className="p-3 border-2 rounded-lg text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950"
                                    id="lastName" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    onChange={handleChange}
                                    className="p-3 border-2 rounded-lg text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950"
                                    id="address" />
                            </div>
                            <div className='flex flex-row justify-between'>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    onChange={handleChange}
                                    className="p-3 border-2 rounded-lg text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950"
                                    id="phone" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    onChange={handleChange}
                                    className="p-3 border-2 rounded-lg text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950"
                                    id="dob" />
                            </div>
                            </div>
                            

                            <div className="flex flex-col gap-2">
                                <label htmlFor="Email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    required={true}
                                    className="p-3 border-2 rounded-lg text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950"
                                    placeholder="name@mail.com"
                                    id="email" />
                            </div>
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
                            <div className="flex flex-row items-center gap-5 md:w-10/12">
                                <input type="checkbox" name="" id="checkbox" required={true} />
                                <h4 className="text-sm md:text-md text-zinc-500">By creating an account, I agree to our Terms of use
                                    and Privacy Policy </h4>
                            </div>
                            <button
                                className="p-3 text-center text-black bg-white border border-transparent shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg hover:border-transparent hover:bg-sky-300 hover:text-white "
                                type="submit"
                            >
                                Create an account
                            </button>
                            {/* <div className="flex flex-col gap-5 pt-5">
                            <button 
                            onClick={withGoogle}
                            className="flex flex-row items-center gap-10 p-3 text-center text-black bg-white border border-black rounded-lg cursor-pointer hover:border-white hover:bg-black hover:text-white ">
                                <FaGoogle className="text-2xl" />
                                <h4 className="text-center">Continue with Google</h4>
                            </button>
                        </div> */}
                        </form>
                    </div>
                </section>
            </main>

        </div>
    )

}
