import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md"
import { IconButton, Avatar, Typography } from "@material-tailwind/react";
import AuthContext from '../context/AuthContext';
import userAvatar from "../../assets/user.png";


function Header({ toggleDashboard }) {

    const { auth } = React.useContext(AuthContext)


    return (
        <>
            <header className='  drop-shadow-2xl z-50 bg-secondary fixed w-full  mx-auto rounded-b-xl'>

                <div className='flex py-4  px-12 justify-between rounded-full  mx-auto items-center' >
                    <Link to="/" className='text-lightGray text-4xl'>Logo</Link>
                    <div className='flex items-center gap-4'>
                        <Link to="/my-profile" className='flex items-center gap-2'>
                            {auth && <Typography>{auth?.name}</Typography>}
                            {auth && <Avatar src={auth?.avatar ? auth.avatar : userAvatar} alt={auth.name} variant="circular" size="sm" className='shadow-xl ' />}
                        </Link>
                        <IconButton variant="text" className='lg:hidden'>
                            <MdDashboard className='icon text-light' onClick={toggleDashboard} />
                        </IconButton>
                    </div>
                </div>

            </header>
        </>

    )
}

export default Header

Header.propTypes = {
    toggleDashboard: PropTypes.func.isRequired
}