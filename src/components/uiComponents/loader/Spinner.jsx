import React from 'react';
import { MdCached } from "react-icons/md"

function Spinner({ isSubmitting }) {
    return (
        <>
            {isSubmitting && <MdCached className="animate-spin" size={20} />}
        </>
    )
}

export default Spinner