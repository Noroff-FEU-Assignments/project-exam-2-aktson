import React from 'react';
import Animate from '../../Animate';


function Reactions({ reactions }) {


    return (
        <div className='flex gap-2'>
            {
                reactions.map((reaction, index) => {
                    return (
                        <Animate key={index}>
                            <p className='flex  bg-gray-200 p-1 rounded-lg justify-center items-center' >
                                {reaction.symbol}
                                <span className='text-sm text-grey'>{reaction.count}</span>
                            </p>
                        </Animate>
                    )
                })
            }
        </div>
    )
}

export default Reactions