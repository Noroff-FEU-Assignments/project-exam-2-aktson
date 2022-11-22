import React from 'react'
import Proptypes from "prop-types";

function TabsHeader({ children }) {
    return (
        <div className="mx-auto mb-8 text-center flex-col  sm:flex sm:flex-row justify-center items-center responsive-width bg-lightGray shadow-xl rounded-xl">
            {children}
        </div>
    )
}

export default TabsHeader

TabsHeader.propTypes = {
    children: Proptypes.node.isRequired
}