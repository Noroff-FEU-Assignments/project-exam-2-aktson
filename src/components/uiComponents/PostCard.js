import React from 'react'
import { Avatar, Button } from "@material-tailwind/react";
import { MdOutlineModeComment } from "react-icons/md";
import CommentInput from './CommentInput';
import EmojiInput from './EmojiInput';


function PostCard({ posts }) {
    const image = "https://img.freepik.com/free-photo/muscular-man-doing-push-ups-using-dumbbells_7502-4776.jpg?w=1380&t=st=1667078311~exp=1667078911~hmac=3d9795070f8674d29ee1448f89a8015cb30cfa7f86276683aab42787392e3edc"
    console.log(posts)

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
            <div className='flex justify-between bg-blue-gray-50  p-2 rounded-xl items-center'>
                <div className='flex flex-wrap gap-2 '>
                    <p className='text-accent font-semibold'>#ankit</p>
                    <p className='text-accent font-semibold'>#react</p>
                </div>
                <div className='flex '>
                    <Button className='text-grey' size="sm" variant='text'>50 Reactions</Button>
                    <Button className="text-grey" size="sm" variant='text'>50 Comments</Button>
                </div>
            </div>
            <div className='flex gap-4 my-2 cursor-pointer mb-4'>
                <EmojiInput />

                <Button className="bg-primary flex items-center gap-2" size="sm" onClick={() => setShowInput((prevState) => !prevState)}>
                    <MdOutlineModeComment size={22} />
                    Comment
                </Button>
            </div>
            <CommentInput showInput={showInput} />

        </div>
    )
}

export default PostCard