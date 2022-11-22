import React from 'react';
import PropTypes from "prop-types"
import { Avatar } from "@material-tailwind/react";
import Animate from '../../Animate';
import userAltAvatar from "../../../../assets/user.png";
import ReactTimeAgo from 'react-time-ago';



function Comments({ showComments, comments }) {


    return (
        <div>
            {showComments &&
                <Animate>
                    <div className='  flex flex-wrap gap-2 flex-col ' >
                        {comments.length === 0
                            ?
                            <p className="text-sm p-2 bg-gray-200 text-center rounded-xl">No comments, Post one?</p>
                            :
                            comments.map(comment => {

                                const date = new Date(comment.created)

                                return (
                                    <div key={comment.id} className="flex  items-center bg-gray-200 rounded-xl p-2">
                                        <Avatar src={userAltAvatar} alt="avatar" size="sm" variant="circular" />
                                        <div className='flex-col flex w-full rounded-xl  px-4 py-1'>
                                            <p className='text-md font-semibold flex justify-between items-center'>
                                                {comment.owner}
                                                <ReactTimeAgo date={date} locale="en-US" className='text-xs font-thin' />
                                            </p>
                                            <p className=' w-full text-sm'>{comment.body}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Animate>
            }
        </div>
    )
}

export default Comments


Comments.propTypes = {
    showComments: PropTypes.bool,
    comments: PropTypes.array
}