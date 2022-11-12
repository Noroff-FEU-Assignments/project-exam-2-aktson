import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button } from '@material-tailwind/react';
import { Link } from "react-router-dom";
import userAvatar from "../../../assets/user.png"
import useAxios from '../../hooks/useAxios';
import FollowUnFollowBtns from '../followUnFollowBtns/FollowUnFollowBtns';


function UserCard({ user }) {

    const http = useAxios();

    const [isfollowing, setIsFollowing] = React.useState(false)

    const handleFollow = async () => {
        const url = `/api/v1/social/profiles/${user.name}/follow`;

        try {

            const response = await http.put(url)
            console.log(response)
            if (response) {
                setIsFollowing(true)
            }

        } catch (error) {
            console.log(error)

        }
    }
    const handleUnFollow = async () => {
        const url = `/api/v1/social/profiles/${user.name}/follow`;

        try {

            const response = await http.put(url)
            console.log(response)
            if (response) {
                setIsFollowing(true)
            }

        } catch (error) {
            console.log(error)

        }
    }



    return (

        <div className="text-grey  shadow-xl bg-lightGray flex flex-col w-80 h-auto gap-4 rounded-xl"  >
            <Link to={`/user-specific/${user.name}`} className='flex  justify-center items-center mt-6 hover:scale-75 transition duration-300'>
                <Avatar src={user.avatar ? user.avatar : userAvatar} alt="avatar" size="xxl" variant="circular" className='drop-shadow-2xl ' />
            </Link>
            <div className='flex flex-col justify-center items-center'>
                <Link to={`/user-specific/${user.name}`} className="hover:scale-75 transition duration-300">
                    <h3 className='text-center'>{user.name}</h3>
                </Link>
                <FollowUnFollowBtns user={user} />
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

UserCard.propTypes = {
    user: PropTypes.object.isRequired
}
