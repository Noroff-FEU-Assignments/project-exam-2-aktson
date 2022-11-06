import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { motion } from "framer-motion"
import Container from '../uiComponents/Container'
import Dashboard from './Dashboard'
import UserBanner from '../uiComponents/UserBanner'
import AuthContext from '../context/AuthContext'
import UsersContext from '../context/UsersContext'


function Layout({ children }) {

    const { auth } = React.useContext(AuthContext);
    const { users } = React.useContext(UsersContext);

    const findAdminUser = users?.find(user => user.email === auth.email);

    const [translate, setTranslate] = React.useState("-translate-x-96 lg:translate-x-0");
    const toggleDashboard = () => {
        if (translate === "translate-x-0") {
            setTranslate("-translate-x-96 ")
        }
        else {
            setTranslate("translate-x-0")
        }
    }
    return (
        <>
            <Header toggleDashboard={toggleDashboard} />

            <main className='md:grid md:grid-cols-12 relative'>
                <Dashboard translate={translate} />
                <motion.div
                    className=" col-span-12 col-start-1 md:col-span-12 lg:col-span-10  lg:col-start-4 xl:col-start-3"
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