import { Button } from '@material-tailwind/react';
import React from 'react';

function Reactions({ post }) {



    const reactionsCount = post._count.reactions;
    return (
        <div className='flex gap-2'>
            {
                post.reactions.map(reaction => {
                    return <p className='flex  bg-gray-200 p-1 rounded-lg justify-center items-center'>
                        {reaction.symbol}
                        <span className='text-sm text-grey'>{reaction.count}</span>
                    </p>

                })
            }
        </div>
    )
}

export default Reactions