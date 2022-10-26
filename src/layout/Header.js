import React from 'react';
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md"
import Dashboard from './Dashboard';
import { IconButton } from "@material-tailwind/react";

function Header() {
    const [translate, setTranslate] = React.useState("-translate-x-96 sm:translate-x-0")

    const toggleDashboard = () => {

        if (translate === "translate-x-0 sm:translate-x-0") {
            setTranslate("-translate-x-96 sm:translate-x-0")
        }
        else {
            setTranslate("translate-x-0 sm:translate-x-0")
        }

    }

    return (
        <>
            <header className=' shadow-xl z-10 bg-secondary'>
                <div className='flex py-4 px-12 justify-between  mx-auto items-center' >
                    <Link to="/">Logo</Link>
                    <div className='flex items-center gap-4'>
                        <Link>Profile</Link>
                        <IconButton variant="text" className='bg-primary sm:hidden'>
                            <MdOutlineMenu className='icon text-light' onClick={toggleDashboard} />
                        </IconButton>
                    </div>
                </div>
            </header>
            <Dashboard translate={translate} />
        </>

    )
}

export default Header