import React from 'react';
import PropTypes from "prop-types"
import { Avatar, Button } from "@material-tailwind/react";
import { MdOutlineModeComment } from "react-icons/md"
import Animate from '../../Animate';
import PostsContext from '../../../context/PostsContext';
import userAltAvatar from "../../../../assets/user.png";
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import ReactTimeAgo from 'react-time-ago';



function Comments({ post }) {
    const { posts } = React.useContext(PostsContext)
    const [comments, setComments] = React.useState([]);

    const [showComments, setShowComments] = React.useState(false);
    const [avatar, setAvatar] = React.useState(userAltAvatar)

    const handleClickOutside = () => {
        setShowComments(false)
    };
    const ref = useOutsideClick(handleClickOutside);

    const handleShowComments = () => {

        const findPost = posts?.find(item => item.id === post.id)
        if (findPost) {
            setShowComments((prevState) => !prevState)
            setComments(findPost.comments)
            setAvatar(findPost.author.avatar)
        }
    }

    const commentsCount = post._count.comments;
    return (
        <div className='relative' ref={ref}>
            <Button className="text-grey relative flex bg-gray-200"
                size="sm"
                variant='text'
                onClick={handleShowComments} >
                {commentsCount ?
                    `${commentsCount > 1 ? `${commentsCount} comments ` : `${commentsCount} comment`}`
                    :
                    "No comments"
                }
            </Button>
            {showComments &&
                <Animate>
                    <div className='shadow-xl bg-lightGray rounded-xl p-4 absolute top-full flex flex-wrap gap-2 flex-col truncate w-96 z-30 '>
                        {comments?.length === 0
                            ?
                            <p className="text-sm w-max">No comments, Post one?</p>
                            :
                            comments?.map(comment => {
                                const date = new Date(comment.created)
                                return (
                                    <div
                                        key={comment.id}
                                        className="flex gap-2 items-center "
                                    >
                                        <Avatar src={avatar ? avatar : userAltAvatar} alt="avatar" size="xs" variant="circular" />
                                        <div className='flex-col flex w-full rounded-xl bg-gray-100 px-4 py-1'>
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