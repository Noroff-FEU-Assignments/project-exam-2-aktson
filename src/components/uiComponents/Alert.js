import React from 'react'
import PropTypes from "prop-types";
import { MdOutlineError } from "react-icons/md"

function Alert({ message }) {
    return (
        <div className='flex bg-red-500 text-light p-4 rounded-xl items-center gap-2'><MdOutlineError size={18} />{message}</div>
    )
}

export default Alert

Alert.propTypes = {
    message: PropTypes.string
}