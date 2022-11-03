import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import AuthenticatedRoute from '../pages/AuthenticatedRoute';
import Layout from './Layout';
import Home from '../pages/Home';
import MyProfile from '../pages/MyProfile';
import BrowsePeople from '../pages/BrowsePeople';
import CreatePost from "../pages/CreatePost";
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from "framer-motion"
import EditPost from '../pages/EditPost';


function AnimatedRoute() {

    const location = useLocation();

    return (<>
        <ToastContainer position="top-center" autoClose={3000} />
        <AnimatePresence location={location} key={location.key}>
            <Routes>
                <Route element={<AuthenticatedRoute />}>
                    <Route path='/' element={<Layout><Home /></Layout>} />
                    <Route path='/browse-people' element={<Layout><BrowsePeople /></Layout>} />
                    <Route path='/my-profile' element={<Layout><MyProfile /></Layout>} />
                    <Route path='/create-post' element={<Layout><CreatePost /></Layout>} />
                    <Route path='/' element={<Layout><EditPost /></Layout>} />
                </Route>
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </AnimatePresence>
    </>
    )
}

export default AnimatedRoute