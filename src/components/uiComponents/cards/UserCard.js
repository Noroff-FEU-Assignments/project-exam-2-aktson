import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from "react-router-dom";
import userAvatar from "../../../assets/user-avatar.svg"

function UserCard({ user }) {


    return (
        <div className=' w-96 h-96 shadow-xl  flex justify-between flex-col my-8 rounded-xl bg-light'>
            <div className='flex justify-center flex-col items-center p-4'>
                <Link to={`/user-specific/${user.name}`}>
                    <div className=' drop-shadow-2xl '
                        style={{
                            background: `url(${user.avatar ? user.avatar : userAvatar}) no-repeat center `,
                            height: "150px",
                            width: "150px",
                            backgroundSize: "cover",
                            borderRadius: "50%"
                        }}
                    >
                    </div>
                </Link>
                <div className='p-5 flex flex-col  row-span-2 gap-1 mt-2 items-center text-center'>
                    <Link to={`/user-specific/${user.name}`}>
                        <h3 className='text-grey' >{user.name}</h3>
                    </Link>
                    <Button color='cyan'>Follow</Button>
                </div>
            </div>
            <div className='bg-dark flex text-light  '>
                <div className='w-full text-center bg-primary p-2'>
                    <p >Posts </p>
                    <p>{user._count.posts}</p>
                </div>
                <div className='w-full text-center p-2 bg-secondary'>
                    <p >Following</p>
                    <p>{user._count.followers}</p>
                </div>
                <div className='w-full text-center p-2 bg-accent'>
                    <p >Followers </p>
                    <p>{user._count.following}</p>
                </div>
            </div>


        </div >
    )
}

export default UserCard