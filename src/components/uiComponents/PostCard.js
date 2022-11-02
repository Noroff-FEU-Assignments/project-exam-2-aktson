import React from 'react'
import { Avatar, Button } from "@material-tailwind/react";
import { MdOutlineModeComment } from "react-icons/md";
import CommentInput from './CommentInput';
import EmojiInput from './EmojiInput';
import image from "../../assets/user-avatar.svg";
import SinglePostMenu from './SinglePostMenu';


function PostCard({ post, adminPosts }) {

    const [showInput, setShowInput] = React.useState(false);

    const { body, title, media, tags, updated, author } = post
    const updatedPost = new Date(updated).toLocaleDateString('da-DK', { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', hour12: false, minute: '2-digit' })

    const findAdminPosts = adminPosts.filter(adminPost => adminPost.id === post.id)

    return (
        <div className='card flex flex-col gap-4 text-grey'>
            <div className='flex items-center justify-between gap-2 '>
                <div className='flex items-center gap-2'>
                    <Avatar src={author.avatar ? author.avatar : image} alt="" variant="circular" />
                    <div className='flex flex-col '>
                        <p className='text-start'>{author.name}</p>
                        <p className='text-xs'>{updatedPost}</p>
                    </div>
                </div>
                {findAdminPosts && findAdminPosts.map(adminPost => { return <SinglePostMenu key={adminPost.id} adminPost={adminPost} /> })}
            </div>
            <div>
                <h3 className='font-bold text-xl'>{title}</h3>
                {body && <p>{body}</p>}
            </div>

            {media && <figure className='mx-auto'>
                <img src={media} alt={title} className='rounded-xl' />
            </figure>}
            <div className='flex justify-between bg-blue-gray-50  p-2 rounded-xl items-center'>
                <div className='flex '>
                    <Button className='text-grey' size="sm" variant='text'>50 Reactions</Button>
                    <Button className="text-grey" size="sm" variant='text'>50 Comments</Button>
                </div>
                <div className='flex flex-wrap gap-2 '>
                    {tags && tags.map((tag, index) => {
                        return <p className='text-accent font-semibold' key={index}>#{tag}</p>
                    })}
                </div>
            </div>
            <div className='flex justify-end gap-4 my-2 cursor-pointer mb-4'>
                <EmojiInput />
                <Button className="bg-primary flex items-center gap-2 w-full justify-center" size="sm" onClick={() => setShowInput((prevState) => !prevState)}>
                    <MdOutlineModeComment size={22} />
                    Comment
                </Button>
            </div>
            <CommentInput showInput={showInput} />
        </div>
    )
}

export default PostCard