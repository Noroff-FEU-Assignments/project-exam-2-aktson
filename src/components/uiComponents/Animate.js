import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function Animate({ children }) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 20 }}
                transition={{ duration: 0.3, type: "spring" }} >{children}</motion.div>
        </AnimatePresence>
    )
}

export default Animate