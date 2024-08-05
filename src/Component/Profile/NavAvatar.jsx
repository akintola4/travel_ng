import { useState, useEffect } from 'react';
import { supabase } from '../supabase-context/client'; // Import your Supabase client
import { IoCheckmark, IoPencil } from 'react-icons/io5';

export default function Avatar() {

    const [logged, setLogged] = useState(null)

    const [session, setSession] = useState(null)
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])


    const [avatarUrl, setAvatarUrl] = useState(null);

    useEffect(() => {
        const fetchAvatar = async () => {
            try {
                const { data: { avatar_url }, error } = await supabase
                    .from('profiles')
                    .select('avatar_url')
                    .eq('id', session.user.id)
                    .single();

                if (error) {
                    console.error('Error fetching avatar URL:', error);
                    return;
                }

                if (avatar_url) {
                    const { data, error } = await supabase.storage.from('avatars').download(avatar_url);
                    if (error) {
                        throw error;
                    }
                    const url = URL.createObjectURL(data);
                    setAvatarUrl(url);
                    setLogged(true)
                }
            } catch (error) {
                console.error('Error downloading image:', error);

            }
        };

        fetchAvatar();
    }, [session]);
    console.log(session, "nav")
    console.log(avatarUrl, "nav")
    console.log(logged, "nav")

    return (
        <div className=' w-4/12 '>
            {logged ? (
                <div className="relative avatar  no-image gap-2" >
                    {/* <img
                    src={avatarUrl}
                    alt="Avatar"
                   className="avatar rounded-full border-2 object-fit border-sky-300 image"
                   
                /> */}
                    <div className="relative w-14 h-14  border-2 border-sky-300 rounded-full overflow-hidden">
                        <img src={avatarUrl} alt="Image" className=" object-cover" />
                    </div>
                    <div className="bottom-0 right-0 absolute  w-5 h-5 bg-sky-300 border-2 border-white dark:border-gray-800 rounded-full">
                        <label className="button primary block text-sm" htmlFor="single">
                            <IoCheckmark />
                        </label>
                    </div>
                </div>
            ) : (
                <img
                    src='/img/avatar-empty.svg'
                    alt="Avatar"
                    className="avatar-no rounded-full w-6/12 image"
                />
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
