import { Avatar, Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from "react-router-dom";
import userAvatar from "../../../assets/user.png"

function UserCard({ user }) {


    return (

        <div className="text-grey  shadow-xl bg-lightGray flex flex-col w-80 h-auto gap-4 rounded-xl"  >
            <Link to={`/user-specific/${user.name}`} className='flex  justify-center items-center mt-6 hover:scale-75 transition duration-300'>
                <Avatar src={user.avatar ? user.avatar : userAvatar} alt="avatar" size="xxl" variant="circular" className='drop-shadow-2xl ' />
            </Link>
            <div className='flex flex-col justify-center items-center'>
                <Link to={`/user-specific/${user.name}`} className="hover:scale-75 transition duration-300">
                    <h3 className='text-center'>{user.name}</h3>
                </Link>
                <Button color='cyan' className='w-auto '>Follow</Button>
            </div>
            <div className='p-5 flex gap-4 mt-3 justify-center bg-gray-100'>
                <p className='flex flex-col items-center w-full'><span>{user?._count.posts}</span>Posts </p>
                <p className='flex flex-col items-center w-full'><span>{user?._count.following}</span>Following</p>
                <p className='flex flex-col items-center w-full'><span>{user?._count.followers}</span>Followers</p>
            </div>
        </div>
    )
}

export default UserCard

