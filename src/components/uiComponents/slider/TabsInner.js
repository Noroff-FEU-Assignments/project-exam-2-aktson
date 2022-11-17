import React from 'react'
import PropTypes from "prop-types"
import Animate from '../Animate';


function TabsInner({ user, message }) {

    return (
        <>
            {user && user?.length === 0 ? <p className='text-center'>{message}</p> :
                user && user.map((result) => {
                    return <Animate key={result.name} >
                        <div className="tab-inner-users" data-tip={result.name} >
                            <img src={result.avatar} alt={result.name} className="rounded-t-xl" />
                            <p className='p-2 text-center bg-gray-200 w-full'>{result.name}</p>
                        </div>
                    </Animate>
                })
            }
        </>
    );

}

export default TabsInner

TabsInner.propTypes = {
    user: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired
}