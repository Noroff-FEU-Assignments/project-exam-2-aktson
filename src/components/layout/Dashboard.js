import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdHome, MdGroups, MdAccountCircle, MdLogout } from "react-icons/md";
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
        <nav className={`shadow-xl  md:w-52 lg:w-80 h-full fixed py-8 px-2 lg:p-10 transition ease-in-out delay-150 ${translate}`}>
            <ul className='flex flex-col mt-12 gap-8 text-grey'>
                <li className={pathname === "/" ? " active" : ""} >
                    <Link to="/" className='nav-link'> <MdHome className='icon' />Home</Link>
                </li>
                <li className={pathname === "/browse-people" ? " active" : ""}>
                    <Link to="/browse-people" className='nav-link'><MdGroups className='icon' />Browse People</Link>
                </li>
                <li className={pathname === "/my-profile" ? " active" : ""}>
                    <Link to="/my-profile" className='nav-link'><MdAccountCircle className='icon' />My Profile</Link>
                </li>
                <li className={pathname === "/sign-in" ? " active" : ""}>
                    {auth && <Button size="md" className='flex gap-2 bg-primary' onClick={handleLogout}>  <MdLogout size={18} />Log Out</Button>}
                </li>
            </ul>
        </nav>

    )
}

export default Dashboard