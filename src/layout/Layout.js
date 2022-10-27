import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { motion } from "framer-motion"


function Layout({ children }) {
    return (
        <>
            <Header />
            <motion.main
                className='max-w-5xl mx-auto container my-16'
                initial={{ opacity: 0, translateY: -200, }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 0, }}
                transition={{ duration: 0.4 }}
            >
                {children}
            </motion.main>
            <Footer />
        </>
    )
}

export default Layout