import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import AuthenticatedRoute from '../pages/AuthenticatedRoute';
import Layout from './Layout';
import MyProfile from '../pages/MyProfile';
import BrowsePeople from '../pages/BrowsePeople';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from "framer-motion"


function AnimatedRoute() {

    const location = useLocation();

    return (
        <AnimatePresence location={location} key={location.key}>
            <ToastContainer position="top-center" autoClose={4000} />
            <Routes>
                <Route element={<AuthenticatedRoute />}>
                    <Route path='/' element={<Layout><Home /></Layout>} />
                    <Route path='/my-profile' element={<Layout><MyProfile /></Layout>} />
                    <Route path='/browse-people' element={<Layout><BrowsePeople /></Layout>} />
                </Route>
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoute