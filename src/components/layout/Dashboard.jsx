import React from 'react';
import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdHome, MdGroups, MdAccountCircle, MdLogout, MdCreate } from "react-icons/md";
import { Button } from '@material-tailwind/react';
import AuthContext from "../context/AuthContext";
import ModalContext from '../context/ModalContext';
import { AnimatePresence, motion } from "framer-motion"


function Dashboard({ isNavOpen }) {

    const { auth, setAuth } = React.useContext(AuthContext);
    const { openCreatePostModal } = React.useContext(ModalContext);

    const { pathname } = useLocation();
    const navigate = useNavigate();


    // function logsout user and navigates to sign in page
    const handleLogout = () => {
        setAuth(null);
        navigate("/")
    }

    return (
        <AnimatePresence>
            {isNavOpen &&
                <motion.nav className={` lg:col-span-2 relative  bg-lightGray  shadow-xl  h-full  lg:w-72 xl:w-full`}
                    initial={{ translateX: 0, opacity: 1 }}
                    animate={{ translateX: 0, opacity: 1 }}
                    exit={{ translateX: -100, opacity: 0 }}
                    transition={{ type: "tween", delay: 1 }}
                    style={{ zIndex: "49" }}
                >
                    <motion.ul className={`flex flex-col mt-12 gap-8  text-grey fixed p-16 bg-lightGray h-full `}
                        initial={{ translateX: 0, opacity: 1 }}
                        animate={{ translateX: 0, opacity: 1 }}
                        exit={{ translateX: -100, opacity: 0 }}
                        transition={{ type: "tween", }} >
                        <li className={pathname === "/home" ? " active" : ""} >
                            <Link to="/home" className='nav-link'> <MdHome className='icon' />Home</Link>
                        </li>
                        <li className={pathname === "/browse-people" ? " active" : ""}>
                            <Link to="/browse-people" className='nav-link'><MdGroups className='icon' />Browse People</Link>
                        </li>
                        <li className={pathname === "/my-profile" ? " active" : ""}>
                            <Link to="/my-profile" className='nav-link'><MdAccountCircle className='icon' />My Profile</Link>
                        </li>
                        <li onClick={openCreatePostModal}>
                            <p className='nav-link p-0 cursor-pointer' variant='text' ><MdCreate className='icon' />Create Post</p>
                        </li>
                        <li>
                            {auth && <Button size="md" className='flex gap-2 bg-primary ' onClick={handleLogout}>  <MdLogout size={18} />Log Out</Button>}
                        </li>
                    </motion.ul>
                </motion.nav>
            }
        </AnimatePresence >


    )
}

export default Dashboard

Dashboard.propTypes = {
    isNavOpen: PropTypes.bool.isRequired
}