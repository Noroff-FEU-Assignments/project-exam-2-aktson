import React from 'react';
import { MdOutlineError } from "react-icons/md"

function Alert({ message }) {
    return (
        <p className='bg-red-400 text-light text-sm py-2 px-1 flex items-center gap-2 rounded-lg '>
            <MdOutlineError size={18} />
            {message}
        </p>
    )
}

export default Alert