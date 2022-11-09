import { Button } from '@material-tailwind/react';
import React from 'react';
import AuthContext from '../context/AuthContext';
import EditProfile from './modals/editProfile/EditProfile';
import userAltAvatar from "../../assets/user.png"



function UserBanner({ user }) {
    const image = "https://img.freepik.com/free-photo/halloween-bats-with-orange-background_23-2148276197.jpg?w=1380&t=st=1667943122~exp=1667943722~hmac=95636e45291d18c6a85578fa3a380514c5c12125e13da21d187b0c5ba4da58ad"


    const [isAdmin, setIsAdmin] = React.useState(false)

    const { auth } = React.useContext(AuthContext);

    React.useEffect(() => {

        if (auth?.email === user?.email) {
            setIsAdmin(true)
        }
    }, [user])



    return (
        <section>
            <div className='w-full bg-dark  relative  mt-18 sm:mt-16 '
                style={{
                    backgroundImage: `url(${user?.banner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: "40vh",
                    backgroundSize: "cover",
                }}></div>
            <div className='grid grid-cols-auto md:grid-cols-3 gap-3 max-w-screen-2xl mx-auto items-center justify-items-center p-4  shadow-2xl -translate-y-14 md:-translate-y-12 lg:-translate-y-16  rounded-b-xl'>
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-6 md:col-span-2 items-center p-2'>
                    <figure className='drop-shadow-xl'>
                        <img src={user?.avatar ? user.avatar : userAltAvatar}
                            alt={user?.name}
                            className="w-40 h-40 lg:w-48 lg:h-48 object-cover rounded-full shadow-xl  justify-items-center  " />
                    </figure>
                    <div className='flex flex-col  items-center sm:items-start'>
                        <p className='text-3xl p-1'>{user?.name}</p>
                        <div className='flex gap-2 p-1'>
                            {user._count && <p className=' text-grey'>Posts: {user?._count.posts}</p>}
                            {user._count && <p className=' text-grey'>Following: {user?._count.following}</p>}
                            {user._count && <p className=' text-grey'>Followers: {user?._count.followers}</p>}
                        </div>
                    </div>
                </div>
                <div className='flex w-full justify-center sm:justify-end '>
                    {!isAdmin && <Button color='cyan' className="w-auto">Follow</Button>}
                    {isAdmin && <EditProfile />}
                </div>
            </div>

        </section>
    )
}

export default UserBanner
