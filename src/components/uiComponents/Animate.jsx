import React from 'react'
import PropTypes from "prop-types"
import { AnimatePresence, motion } from 'framer-motion'

function Animate({ children }) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: -20 }}
                transition={{ type: "tween", duration: 0.1, delay: 0.1 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default Animate

Animate.propTypes = {
    children: PropTypes.node.isRequired
}