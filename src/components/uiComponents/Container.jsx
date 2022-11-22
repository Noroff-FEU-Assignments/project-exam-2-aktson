import React from 'react'
import PropTypes from "prop-types";

function Container({ children }) {
    return (
        <div className='lg:container lg:mx-auto'>{children}</div>
    )
}

export default Container


Container.propTypes = {
    children: PropTypes.node.isRequired
}