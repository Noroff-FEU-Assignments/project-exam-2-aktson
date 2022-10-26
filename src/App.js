import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './layout/Header';
import Footer from './layout/Footer';
import BrowsePeople from './pages/BrowsePeople';
import Home from './pages/Home';
import MyProfile from './pages/MyProfile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AuthenticatedRoute from './pages/AuthenticatedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

    return (
        <Router>
            <Header />
            <main className='max-w-5xl mx-auto container my-16'>
                <ToastContainer position="top-center" autoClose={4000} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/my-profile' element={<AuthenticatedRoute />}>
                        <Route path='/my-profile' element={<MyProfile />} />
                    </Route>
                    <Route path='/browse-people' element={<BrowsePeople />} />
                    <Route path='/sign-in' element={<SignIn />} />
                    <Route path='/sign-up' element={<SignUp />} />
                </Routes>
            </main>
            <Footer />
        </Router>

    )
}

export default App