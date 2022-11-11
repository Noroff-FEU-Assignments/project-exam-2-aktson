import React from 'react'
import PropTypes from "prop-types";
import Footer from './Footer'
import Header from './Header'
import { motion } from "framer-motion"
import Dashboard from './Dashboard'


function Layout({ children }) {

    const [isNavOpen, setIsNavOpen] = React.useState(true)


    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => {

                if (window.innerWidth >= 960) {
                    setIsNavOpen(true)
                } else {
                    setIsNavOpen(false)
                }
            }
        );

    }, []);

    const toggleDashboard = () => {
        setIsNavOpen(prevState => !prevState)
    }
    return (
        <>
            <Header toggleDashboard={toggleDashboard} />
            <main className='lg:grid grid-cols-12 2xl:container 2xl:mx-auto '>
                <Dashboard isNavOpen={isNavOpen} />
                <motion.div
                    className=" col-span-9 grid auto-rows-auto "
                    initial={{ opacity: 0, translateY: -20, }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: 0, }}
                    transition={{ duration: 0.4 }}
                >
                    {children}
                </motion.div>
            </main>
            <Footer />
        </>
    )
}

export default Layout

Layout.propTypes = {
    children: PropTypes.node.isRequired
}