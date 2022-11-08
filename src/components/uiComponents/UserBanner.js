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
        <section className='w-full bg-dark  p-4 relative mb-4 lg:mb-16 mt-16 '
            style={{
                backgroundImage: `url(${user?.banner})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "40vh",
                backgroundSize: "cover",
            }}
        >
            <div className='grid grid-cols-auto md:grid-cols-2 max-w-screen-2xl mx-auto items-end justify-items-center p-4 absolute top-0 right-0 left-0 -bottom-2 '>
                <figure className='drop-shadow-xl'>
                    <img src={user?.avatar ? user.avatar : userAltAvatar}
                        alt={user?.name}
                        className="w-40 h-40 lg:w-52 lg:h-52 object-cover rounded-full shadow-xl  justify-items-center md:translate-y-24 " />
                </figure>
                <div className='flex gap-2 flex-col text-primary '>
                    <p className='text-3xl text-light'>{user?.name}</p>
                    {!isAdmin && <Button color='cyan' className="w-auto">Follow</Button>}
                    {isAdmin && <EditProfile />}
                </div>
            </div>
        </section>
    )
}

export default UserBanner