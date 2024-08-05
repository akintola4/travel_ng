import { useState, useEffect } from 'react';
import { supabase } from '../supabase-context/client'; // Import your Supabase client
import { IoCheckmark, IoPencil } from 'react-icons/io5';

export default function Avatar({ url, onUpload, logged, submit, session }) {
    const [avatarUrl, setAvatarUrl] = useState(null)
    const [uploading, setUploading] = useState(false)

    useEffect(() => {
        if (url) downloadImage(url)
    }, [url])

    async function downloadImage(path) {
        try {
            const { data, error } = await supabase.storage.from('avatars').download(path)
            if (error) {
                throw error
            }
            const url = URL.createObjectURL(data)
            setAvatarUrl(url)
        } catch (error) {
            console.log('Error downloading image: ', error.message)
        }
    }

    async function uploadAvatar(event) {
        try {
            setUploading(true)

            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('You must select an image to upload.')
            }

            const file = event.target.files[0]
            const fileExt = file.name.split('.').pop()
            const fileName = `${Math.random()}.${fileExt}`
            const filePath = `${fileName}`

            const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)
            const { data, error } = await supabase
                .from('profiles')
                .update({ avatar_url: filePath })
                .eq('id', session.user.id); // Replace with actual user ID logic
            if (uploadError) {
                throw uploadError
            }

            onUpload(event, filePath)
        } catch (error) {
            alert(error.message)
        } finally {
            setUploading(false)
        }
    }
    console.log(avatarUrl, "current")

    return (
        <div className=' xl:w-6/12'>
            {avatarUrl ? (

                <div className="relative">
                    <div className="md:relative avatar gap-2" >
                        <div className="md:relative w-40 h-40 md:w-28 md:h-28 xl:w-60 xl:h-60  border-2 border-sky-300 rounded-full overflow-hidden">
                            <img src={avatarUrl} alt="Image" className=" object-cover" />
                        </div>
                        <div className="bottom-0 right-0 absolute  w-10 h-10 bg-sky-300 border-2 border-white dark:border-gray-800 rounded-full">
                            <label className="button primary block text-2xl pt-2 pl-1" htmlFor="single">
                                {uploading ? 'Uploading ...' : <IoCheckmark />}
                            </label>
                            <input

                                className='hidden absolute'
                                type="file"
                                id="single"
                                accept="image/*"
                                onChange={uploadAvatar}
                                disabled={uploading} />
                        </div>
                    </div>
                    {/* <div className="bottom-0 right-0 absolute  w-10 h-10 bg-sky-300 border-2 border-white dark:border-gray-800 rounded-full">
                        <label className="button primary block text-2xl pt-2 pl-1" htmlFor="single">
                            {uploading ? 'Uploading ...' : <IoCheckmark />}
                        </label>
                        <input
                            style={{
                                visibility: 'hidden',
                                position: 'absolute',
                            }}
                            type="file"
                            id="single"
                            accept="image/*"
                            onChange={uploadAvatar}
                            disabled={uploading} />
                    </div> */}
                    {/* <input 
                     type="file"
                     id="single"
                     accept="image/*"
                     onChange={uploadAvatar}
                     disabled={uploading}
                    className="bottom-2 right-2 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" /> */}
                </div>
            ) : (
                <div className="relative avatar no-image " >
                    <img
                        src='/img/avatar-empty.svg'
                        alt="Avatar"
                        className="avatar rounded-full w-full image"
                    />
                    <div className="bottom-0 right-0 absolute  w-10 h-10 bg-sky-300 border-2 border-white dark:border-gray-800 rounded-full">
                        <label className="button primary block text-2xl pt-2 pl-1" htmlFor="single">
                            {uploading ? 'Uploading' : <IoPencil />}
                        </label>
                        <input
                            style={{
                                visibility: 'hidden',
                                position: 'absolute',
                            }}
                            type="file"
                            id="single"
                            accept="image/*"
                            onChange={uploadAvatar}
                            disabled={uploading} />
                    </div>
                </div>
            )}
            {/* <div style={{ width: size }} className='items-center flex flex-row p-1 text-center w-full bg-sky-300 rounded-lg' >
                <label className="button primary block" htmlFor="single">
                    {uploading ? 'Uploading ...' : 'Upload'}
                </label>
                <input
                    style={{
                        visibility: 'hidden',
                        position: 'absolute',
                    }}
                    type="file"
                    id="single"
                    accept="image/*"
                    onChange={uploadAvatar}
                    disabled={uploading}
                />
            </div> */}

        </div>


    );
}
