import React from 'react'
import PropTypes from "prop-types"
import { AnimatePresence, motion } from 'framer-motion'

function Form({ children }) {
    return (
        <AnimatePresence>
            <motion.form
                className="p-6 bg-lightGray max-w-md w-full rounded-xl grid auto-rows-auto  mx-auto relative"
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


Form.propTypes = {
    children: PropTypes.node.isRequired
}