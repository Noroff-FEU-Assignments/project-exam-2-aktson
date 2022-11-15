import React from 'react'
import './App.css';

import AnimatedRoute from './components/layout/AnimatedRoutes';
import CreatePost from './components/uiComponents/modals/createPost/CreatePost';




function App() {

    return (
        <>

            <CreatePost />
            <AnimatedRoute />

        </>

    )
}

export default App