import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { motion } from "framer-motion"


function Layout({ children }) {
    return (
        <>
            <Header />
            <motion.main
                className='my-16 flex justify-center md:justify-end xl:justify-center '
                initial={{ opacity: 0, translateY: -20, }}
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