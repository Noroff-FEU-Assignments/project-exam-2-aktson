import React from 'react'
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoute from './layout/AnimatedRoutes';




function App() {

    return (
        <>
            <Router>
                <AnimatedRoute />
            </Router>
        </>

    )
}

export default App