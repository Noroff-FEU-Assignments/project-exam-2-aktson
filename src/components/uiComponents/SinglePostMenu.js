import React from 'react';
import DeletePost from '../pages/DeletePost';
import EditPost from '../pages/EditPost';




function SinglePostMenu({ adminPost }) {

    return (
        <div className='flex gap-1'>
            <DeletePost adminPost={adminPost} />
            <EditPost adminPost={adminPost} />
        </div>
    );
}

export default SinglePostMenu;