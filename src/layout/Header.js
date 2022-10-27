import React from 'react';
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md"
import Dashboard from './Dashboard';
import { IconButton, Avatar, Typography } from "@material-tailwind/react";
import AuthContext from '../components/context/AuthContext';

function Header() {
    const [translate, setTranslate] = React.useState("-translate-x-96 md:translate-x-0")

    const { auth } = React.useContext(AuthContext)

    const toggleDashboard = () => {

        if (translate === "translate-x-0 md:translate-x-0") {
            setTranslate("-translate-x-96 md:translate-x-0")
        }
        else {
            setTranslate("translate-x-0 md:translate-x-0")
        }
    }

    return (
        <>
            <header className=' shadow-xl z-10 bg-secondary fixed w-full'>
                <div className='flex py-4 px-12 justify-between  mx-auto items-center' >
                    <Link to="/">Logo</Link>
                    <div className='flex items-center gap-4'>
                        <Link to="/my-profile" className='flex items-center gap-2'>
                            {auth && <Typography>{auth?.name}</Typography>}
                            {auth && <Avatar src={auth?.avatar} alt={auth.name} variant="circular" size="sm" className='shadow-xl ' />}
                        </Link>
                        <IconButton variant="text" className='bg-primary md:hidden'>
                            <MdOutlineDashboard className='icon text-light' onClick={toggleDashboard} />
                        </IconButton>
                    </div>
                </div>
            </header>
            <Dashboard translate={translate} />
        </>

    )
}

export default Header