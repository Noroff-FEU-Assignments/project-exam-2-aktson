import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BrowsePeople from './pages/BrowsePeople';
import Home from './pages/Home';
import MyProfile from './pages/MyProfile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AuthenticatedRoute from './pages/AuthenticatedRoute';
import { ToastContainer } from 'react-toastify';
import Layout from './layout/Layout';
import AnimatedRoute from './layout/AnimatedRoutes';




function App() {

    return (
        // <>

        //     <Router>
        //         <Header />
        //         <main className='max-w-5xl mx-auto container my-16'>
        //             <ToastContainer position="top-center" autoClose={4000} />
        //             <Routes>
        //                 <Route element={<AuthenticatedRoute />}>
        //                     <Route path='/' element={<Home />} />
        //                     <Route path='/my-profile' element={<MyProfile />} />
        //                     <Route path='/browse-people' element={<BrowsePeople />} />
        //                 </Route>
        //                 <Route path='/sign-in' element={<SignIn />} />
        //                 <Route path='/sign-up' element={<SignUp />} />
        //             </Routes>
        //         </main>
        //         <Footer />
        //     </Router>
        // </>

        <>
            <Router>
                <AnimatedRoute />
            </Router>
        </>

    )
}

export default App