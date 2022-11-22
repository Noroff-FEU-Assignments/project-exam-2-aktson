import React from 'react'
import { MdCached } from "react-icons/md"

function Loader() {
    return (
        <div role="status" style={{ zIndex: "48" }} className="w-full flex justify-center items-center h-full p-8 my-12">
            <MdCached className="animate-spin text-primary" size={42} />
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default Loader