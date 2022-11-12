import React from 'react';
import PropTypes from "prop-types";
import { Button } from '@material-tailwind/react';
import AuthContext from '../context/AuthContext';
import EditProfile from './modals/editProfile/EditProfile';
import userAltAvatar from "../../assets/user.png"



function UserBanner({ user }) {

    const [isAdmin, setIsAdmin] = React.useState(false)

    const { auth } = React.useContext(AuthContext);

    React.useEffect(() => {

        if (auth?.email === user?.email) {
            setIsAdmin(true)
        }
    })

    return (
        <>
            {user &&
                <section>
                    <div className='w-full bg-dark  relative  mt-18 sm:mt-16 '
                        style={{
                            backgroundImage: `url(${user?.banner})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            height: "40vh",
                            backgroundSize: "cover",
                        }}></div>
                    <div className='shadow-2xl'>
                        <div className='grid grid-cols-auto md:grid-cols-3 gap-3 max-w-screen-xl mx-auto items-center justify-items-center -translate-y-14 md:-translate-y-12 lg:-translate-y-16  rounded-b-xl'>
                            <div className='flex flex-col sm:flex-row gap-2 sm:gap-6 md:col-span-2 items-center p-2'>
                                <figure className='drop-shadow-xl'>
                                    <img src={user?.avatar ? user.avatar : userAltAvatar}
                                        alt={user?.name}
                                        className="w-40 h-40 lg:w-48 lg:h-48 object-cover rounded-full shadow-xl  justify-items-center  " />
                                </figure>
                                <div className='flex flex-col  items-center sm:items-start'>
                                    <p className='text-3xl p-1'>{user && user?.name}</p>

                                    <div className='flex gap-2 p-1'>
                                        {user._count && <p className=' text-grey'>Posts: {user?._count.posts}</p>}
                                        {user._count && <p className=' text-grey'>Following: {user?._count.following}</p>}
                                        {user._count && <p className=' text-grey'>Followers: {user?._count.followers}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full justify-center sm:justify-start'>
                                {!isAdmin && <Button color='cyan' className="w-auto">Follow</Button>}
                                {isAdmin && <EditProfile adminUser={user} />}
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default UserBanner


UserBanner.propTypes = {
    user: PropTypes.object.isRequired
}