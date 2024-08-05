
import { Link } from 'react-router-dom'

import { supabase } from '../supabase-context/client'
import { useState, useEffect } from 'react'
import { SlNote } from 'react-icons/sl'
import Nav from '../Landing/Nav'
import Footer from '../Landing/Footer'
import Avatar from './Avatar'


export default function Profile({ session, profileData }) {

    // supabase.auth.onAuthStateChange((event, session) => {
    //     if (event === 'SIGNED_IN') console.log('SIGNED_IN', session)
    // })

    const [loading, setLoading] = useState(true)
    const [avatar_url, setAvatarUrl] = useState(null)
    const [email, setEmail] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [Dob, setDob] = useState('')

    useEffect(() => {
        let ignore = false
        async function getProfile() {
            setLoading(true)
            const { user } = session

            const { data, error } = await supabase
                .from('profiles')
                .select(` email,first_name,last_name,address,dob,phone_number, avatar_url`)
                .eq('id', user.id)
                .single()

            if (!ignore) {
                if (error) {
                    console.warn(error)
                } else if (data) {
                    setEmail(data.email)
                    setFirstName(data.first_name)
                    setLastName(data.last_name)
                    setAddress(data.address)
                    setDob(data.dob)
                    setPhone(data.phone_number)
                    setAvatarUrl(data.avatar_url)
                }
            }

            setLoading(false)
        }

        getProfile()

        return () => {
            ignore = true
        }
    }, [session])
    async function updateProfile(event, avatarUrl) {
        event.preventDefault()

        setLoading(true)
        const { user } = session

        const updates = {
            id: user.id,

            avatar_url: avatarUrl,
            updated_at: new Date(),
        }

        const { error } = await supabase.from('profiles').upsert(updates)

        if (error) {
            alert(error.message)
        } else {
            setAvatarUrl(avatarUrl)
        }
        setLoading(false)
    }

    const handleAvatarUpload = (event, filePath) => {
        // Handle the uploaded file path, e.g., update user profile
        setAvatarUrl(filePath); // Update avatar URL in state
    };
    return (
        <section className="dark:text-white dark:bg-gray-900" >
            <Nav />
            <div className='pt-20 md:pt-28 mx-5 md:mx-10  flex flex-col lg:mx-10'>

                <div className="md:static py-10 flex flex-col justify-center items-center">
                    {/* <div className='hidden md:block'>
                    <img src="/img/cover.svg" className='h-3/6 block dark:hidden w-full ' alt="" />
                    <img src="/img/cover-dark.svg" className='h-3/6 hidden dark:block w-full ' alt="" />

                    </div> */}
                     <img src="/img/cover.svg" className='h-3/6 block dark:hidden w-full ' alt="" />
                    <img src="/img/cover-dark.svg" className='h-3/6 hidden dark:block w-full ' alt="" />

                   
                    <div className="md:absolute flex flex-col py-2 md:py-10 gap-2 md:w-4/12  justify-center items-center">
                        <Avatar url={avatar_url} submit={updateProfile} onUpload={handleAvatarUpload}  session={session}/>
                        <h4 className='text-xl font-medium'>{`${profileData.first_name} ${profileData.last_name}`}</h4>
                        <p className='text-lg font-light'>{profileData.email}</p>
                    </div>
                </div>


                <div className=' grid grid-cols-2 lg:flex lg:flex-row w-full lg:w-12/12 justify-between gap-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:shadow-sky-500/20  dark:bg-gray-800 p-2 rounded-lg'>
                    <button className='text-sm md:text-lg py-5 flex flex-col border-r-gray-200 lg:border-r-transparent lg:w-4/12 border-r-2 px-2 border-transparent border-4  hover:border-b-4 hover:border-b-sky-300'>
                        Account
                    </button>
                    <span className='border hidden lg:block'></span>
                    <button className='text-sm md:text-lg py-5 flex flex-col lg:w-4/12 border-r-2  px-2 border-transparent border-4  hover:border-b-4 hover:border-b-sky-300'>
                        History
                    </button>
                    <span className='border hidden lg:block'></span>
                    <button className='text-sm md:text-lg py-5 flex flex-col border-r-gray-200 lg:border-r-transparent lg:w-4/12 border-r-2 px-2 border-transparent border-4  hover:border-b-4 hover:border-b-sky-300'>
                        Payment methods
                    </button>
                </div>
                <h4 className='text-2xl font-bold py-10'>Account</h4>

                <div className='flex flex-col gap-5 rounded-lg  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:shadow-sky-500/20  dark:bg-gray-800 p-5'>
                    <div className='flex justify-between flex-row'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm font-light'>First name</p>
                            <h4 className='text-lg font-medium'>{profileData.first_name}</h4>
                        </div>
                        <button className='px-2 text-sm md:px-6 py-2 border-2 flex flex-row gap-2 items-center rounded-lg hover:bg-sky-300 hover:text-white border-sky-300'><SlNote /> Change</button>
                    </div>
                    <div className='flex justify-between flex-row'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm font-light'>Last Name</p>
                            <h4 className='text-lg font-medium'>{profileData.last_name}</h4>
                        </div>
                        <button className='px-2 text-sm md:px-6 py-2 border-2 flex flex-row gap-2 items-center rounded-lg hover:bg-sky-300 hover:text-white border-sky-300'><SlNote /> Change</button>
                    </div>
                    <div className='flex justify-between flex-row'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm font-light'>Email</p>
                            <h4 className='text-lg font-medium'>{profileData.email}</h4>
                        </div>
                        <button className='px-2 text-sm md:px-6 py-2 border-2 flex flex-row gap-2 items-center rounded-lg hover:bg-sky-300 hover:text-white border-sky-300'><SlNote /> Change</button>
                    </div>
                    <div className='flex justify-between flex-row'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm font-light'>Password</p>
                            <h4 className='text-lg font-medium'>*****</h4>
                        </div>
                        <button className='px-2 text-sm md:px-6 py-2 border-2 flex flex-row gap-2 items-center rounded-lg hover:bg-sky-300 hover:text-white border-sky-300'><SlNote /> Change</button>
                    </div>
                    <div className='flex justify-between flex-row'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm font-light'>Phone number</p>
                            <h4 className='text-lg font-medium'>{profileData.phone_number}</h4>
                        </div>
                        <button className='px-2 text-sm md:px-6 py-2 border-2 flex flex-row gap-2 items-center rounded-lg hover:bg-sky-300 hover:text-white border-sky-300'><SlNote /> Change</button>
                    </div>
                    <div className='flex justify-between flex-row'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm font-light'>Address</p>
                            <h4 className='text-lg font-medium'>{profileData.address}</h4>
                        </div>
                        <button className='px-2 text-sm md:px-6 py-2 border-2 flex flex-row gap-2 items-center rounded-lg hover:bg-sky-300 hover:text-white border-sky-300'><SlNote /> Change</button>
                    </div>
                    <div className='flex justify-between flex-row'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm font-light'>Date of birth</p>
                            <h4 className='text-lg font-medium'>{profileData.Dob}</h4>
                        </div>
                        <button className='px-2 text-sm md:px-6 py-2 border-2 flex flex-row gap-2 items-center rounded-lg hover:bg-sky-300 hover:text-white border-sky-300'><SlNote /> Change</button>
                    </div>
                </div>
            </div>

            <Footer />
        </section>


    )
}
