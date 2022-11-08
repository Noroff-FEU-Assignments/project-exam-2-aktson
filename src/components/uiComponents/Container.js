import React from 'react'

function Container({ children }) {
    return (
        <div className='lg:container lg:mx-auto'>{children}</div>
    )
}

export default Container