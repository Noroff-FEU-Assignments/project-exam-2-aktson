import React from 'react';
import PropTypes from "prop-types"
import { Avatar } from "@material-tailwind/react";
import Animate from '../../Animate';
import userAltAvatar from "../../../../assets/user.png";
import ReactTimeAgo from 'react-time-ago';



function Comments({ post, showComments }) {


    return (
        <div>
            {showComments &&
                <Animate>
                    <div className='  flex flex-wrap gap-2 flex-col ' >
                        {post.comments?.length === 0
                            ?
                            <p className="text-sm p-2 bg-gray-200 text-center rounded-xl">No comments, Post one?</p>
                            :
                            post.comments?.map(comment => {

                                const date = new Date(comment.created)

                                return (
                                    <div key={comment.id} className="flex gap-2 items-center bg-gray-200 rounded-xl p-2">
                                        <Avatar src={post?.author.avatar ? post?.author.avatar : userAltAvatar} alt="avatar" size="sm" variant="circular" />
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
    post: PropTypes.object.isRequired
}