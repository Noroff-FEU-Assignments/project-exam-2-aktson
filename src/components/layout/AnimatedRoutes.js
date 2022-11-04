import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import AuthenticatedRoute from '../pages/AuthenticatedRoute';
import Layout from './Layout';
import Home from '../pages/Home';
import MyPosts from '../pages/MyPosts';
import BrowsePeople from '../pages/BrowsePeople';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from "framer-motion"
import UserSpecific from '../pages/UserSpecific';



function AnimatedRoute() {

    const location = useLocation();

    return (<>
        <ToastContainer position="top-center" autoClose={3000} />
        <AnimatePresence location={location} key={location.key}>
            <Routes>
                <Route element={<AuthenticatedRoute />}>
                    <Route path='/' element={<Layout><Home /></Layout>} />
                    <Route path='/browse-people' element={<Layout><BrowsePeople /></Layout>} />
                    <Route path='/my-posts' element={<Layout><MyPosts /></Layout>} />
                    {/* <Route path='/edit-post' element={<Layout><EditPost /></Layout>} /> */}
                    <Route path='/user-specific/:username' element={<Layout><UserSpecific /></Layout>} />
                </Route>
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </AnimatePresence>
    </>
    )
}

export default AnimatedRoute