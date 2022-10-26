import React from 'react'
import { MdOutlineError } from "react-icons/md"

function ErrorSpan({ message }) {
    return (
        <span className='flex items-center gap-1 text-xs py-1 text-red-400'>
            <MdOutlineError size={18} />
            {message}
        </span>
    )
}

export default ErrorSpan