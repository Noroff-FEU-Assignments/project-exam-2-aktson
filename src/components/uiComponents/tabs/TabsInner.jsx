import React from 'react'
import PropTypes from "prop-types"
import Animate from '../Animate';
import { Link } from 'react-router-dom';


function TabsInner({ followersOrFollowing, message }) {

    return (
        <>
            {followersOrFollowing && followersOrFollowing?.length === 0 ? <p className='text-center w-full'>{message}</p> :
                followersOrFollowing && followersOrFollowing.map((result) => {
                    return <Animate key={result.name} >
                        <Link to={`/user-specific/${result.name}`} className="tab-inner-users" data-tip={result.name} >
                            <img src={result.avatar} alt={result.name} className="rounded-t-xl sm:w-40 sm:h-40 w-32 h-32 object-cover" />
                            <p className='p-2 text-center bg-gray-200 w-full'>{result.name}</p>
                        </Link>
                    </Animate>
                })
            }
        </>
    );

}

export default TabsInner

TabsInner.propTypes = {
    followersOrFollowing: PropTypes.array,
    message: PropTypes.string.isRequired
}