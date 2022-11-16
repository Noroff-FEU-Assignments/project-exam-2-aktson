import React from 'react';


function Reactions({ reactions }) {


    return (
        <div className='flex gap-2'>
            {
                reactions.map((reaction, index) => {
                    return <p className='flex  bg-gray-200 p-1 rounded-lg justify-center items-center' key={index} >
                        {reaction.symbol}
                        <span className='text-sm text-grey'>{reaction.count}</span>
                    </p>
                })
            }
        </div>
    )
}

export default Reactions