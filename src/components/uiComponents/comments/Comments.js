import React from 'react';
import Animate from '../Animate';
import { Avatar, Button } from "@material-tailwind/react";
import PostsContext from '../../context/PostsContext';
import userAltAvatar from "../../../assets/user.png";
import { useOutsideClick } from '../../hooks/useOutsideClick';



function Comments({ id, commentsCount }) {
    const { posts } = React.useContext(PostsContext)
    const [comments, setComments] = React.useState([]);

    const [showComments, setShowComments] = React.useState(false);
    const [avatar, setAvatar] = React.useState(userAltAvatar)

    const handleClickOutside = () => {
        setShowComments(false)
    };
    const ref = useOutsideClick(handleClickOutside);

    const handleShowComments = () => {

        const findPost = posts?.find(post => post.id === id)
        if (findPost) {
            setShowComments((prevState) => !prevState)
            setComments(findPost.comments)
            setAvatar(findPost.author.avatar)
        }
    }

    return (
        <div className='relative' ref={ref}>
            <Button className="text-grey relative"
                size="sm"
                variant='text'
                onClick={handleShowComments} >
                {commentsCount ?
                    `${commentsCount > 1 ? `${commentsCount} comments` : `${commentsCount} comment`}`
                    :
                    "No comments"
                }
            </Button>
            {showComments &&
                <Animate>
                    <div className='shadow-xl bg-lightGray p-4 absolute top-full flex flex-wrap gap-2 flex-col truncate w-96 z-30 '>
                        {comments?.length === 0
                            ?
                            <p className="text-sm w-max">No comments, Post one?</p>
                            :
                            comments?.map(comment => {
                                return (
                                    <div
                                        key={comment.id}
                                        className="flex gap-2 items-center "
                                    >
                                        <Avatar src={avatar ? avatar : userAltAvatar} alt="avatar" size="xs" variant="circular" />
                                        <div className='flex-col flex w-full rounded-xl bg-gray-100 px-2'>
                                            <p className='text-md font-semibold'>{comment.owner}</p>
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