import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdHome, MdGroups, MdAccountCircle, MdLogout, MdCreate } from "react-icons/md";
import { Button } from '@material-tailwind/react';
import AuthContext from "../context/AuthContext";


function Dashboard({ translate }) {

    const { auth, setAuth } = React.useContext(AuthContext);

    const { pathname } = useLocation();
    const navigate = useNavigate();


    // function
    const handleLogout = () => {
        setAuth(null);
        navigate("/sign-in")
    }

    return (

        <nav className={` md:col-span-1 lg:col-span-2  z-40  md:relative fixed h-full transition ease-in-out `}>
            <ul className={`flex flex-col mt-12 gap-8 text-light md:fixed ${translate} shadow-xl transition ease-in-out p-16 duration-500 h-full lg:w-80`}>
                <li className={pathname === "/" ? " active" : ""} >
                    <Link to="/" className='nav-link'> <MdHome className='icon' />Home</Link>
                </li>
                <li className={pathname === "/browse-people" ? " active" : ""}>
                    <Link to="/browse-people" className='nav-link'><MdGroups className='icon' />Browse People</Link>
                </li>
                <li className={pathname === "/my-profile" ? " active" : ""}>
                    <Link to="/my-profile" className='nav-link'><MdAccountCircle className='icon' />My Profile</Link>
                </li>
                <li className={pathname === "/create-post" ? " active" : ""}>
                    <Link to="/create-post" className='nav-link'><MdCreate className='icon' />Create Post</Link>
                </li>
                <li className={pathname === "/sign-in" ? " active" : ""}>
                    {auth && <Button size="md" className='flex gap-2 bg-primary ' onClick={handleLogout}>  <MdLogout size={18} />Log Out</Button>}
                </li>

            </ul>
        </nav>


    )
}

export default Dashboard