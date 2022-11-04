import React from 'react'
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoute from './components/layout/AnimatedRoutes';
import CreatePost from './components/uiComponents/modals/CreatePost';




function App() {

    return (
        <>
            <CreatePost />
            <Router>
                <AnimatedRoute />
            </Router>
        </>

    )
}

export default App