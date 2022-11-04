import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

function Form({ children }) {
    return (
        <AnimatePresence>
            <motion.form
                className="form "
                style={{ zIndex: "50" }}
                initial={{ scale: 0.9, }}
                animate={{ scale: 1, }}
                exit={{ scale: 1 }}
                transition={{ duration: 0.2 }}
            >
                {children}
            </motion.form>
        </AnimatePresence>
    )
}

export default Form