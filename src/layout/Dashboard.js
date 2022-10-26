import React from 'react';
import { Link } from "react-router-dom";
import { MdHome, MdPeopleAlt, MdAccountCircle } from "react-icons/md";
import { useLocation } from "react-router-dom"


function Dashboard({ translate }) {

    const { pathname } = useLocation();

    return (
        <nav className={`shadow-xl w-80 h-full fixed p-10 transition ease-in-out delay-150 ${translate}`}>
            <ul className='flex flex-col mt-12 gap-8 text-grey'>
                <li className={pathname === "/" ? "nav-link active" : "nav-link"}>
                    <MdHome className='icon' />
                    <Link to="/">Home</Link>
                </li>
                <li className={pathname === "/browse-people" ? "nav-link active" : "nav-link"}>
                    <MdPeopleAlt className='icon' />
                    <Link to="/browse-people">Browse People</Link>
                </li>
                <li className={pathname === "/my-profile" ? "nav-link active" : "nav-link"}>
                    <MdAccountCircle className='icon' />
                    <Link to="/my-profile">My Profile</Link>
                </li>
            </ul>
        </nav>

    )
}

export default Dashboard