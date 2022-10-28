import React from 'react'
import { Avatar, Chip, MenuHandler, MenuItem, Button, Menu, MenuList } from "@material-tailwind/react";
import { MdOutlineModeComment, MdOutlineEmojiEmotions, } from "react-icons/md";
import CommentInput from './CommentInput';
import EmojiInput from './EmojiInput';


function PostCard({ posts }) {
    const image = "https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5378.jpg?w=1380&t=st=1666948168~exp=1666948768~hmac=e8b892b41fd944e61600bb643fd20d001ef7ea4ad1b812263eefbb339dac79b5"
    // console.log(posts)

    const [showInput, setShowInput] = React.useState(false);


    return (
        <div className='card flex flex-col gap-4 text-grey '>
            <div className='flex items-center gap-2 '>
                <Avatar src={image} alt="avatar" variant="circular" />
                <h3>Ankit</h3>
            </div>
            <div>
                <p>Here is going to be Description</p>
            </div>

            <figure >
                <img src={image} alt="ankit" className='rounded-xl' />
            </figure>
            <div className='flex gap-2 '>
                <p >Tags:</p>
                <Chip value="tag1" className='bg-accent' />
                <Chip value="tag2" className='bg-accent' />
                <Chip value="tag3" className='bg-accent' />
            </div>
            <div className='flex gap-4 my-2 cursor-pointer '>
                <EmojiInput />
                <div className='flex gap-1 items-center cursor-pointer' onClick={() => setShowInput((prevState) => !prevState)}>
                    <MdOutlineModeComment size={22} />
                    <p>comment</p>
                </div>
            </div>
            <CommentInput showInput={showInput} />

        </div>
    )
}

export default PostCard