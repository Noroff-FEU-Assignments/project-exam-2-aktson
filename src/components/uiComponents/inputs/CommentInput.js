import React from 'react';
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from 'framer-motion';
import { Input, IconButton } from "@material-tailwind/react";
import { MdAddComment } from "react-icons/md"

function CommentInput({ showInput }) {

    const { register, handleSubmit, reset } = useForm();

    const postComment = (data) => {
        console.log(data)
        reset({ comment: "" })
    }
    return (
        <>
            {showInput &&
                <AnimatePresence>
                    <motion.div
                        className='flex'
                        initial={{ opacity: 0, translateY: -20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: -20 }}
                        transition={{ duration: 0.3 }} >
                        <Input variant="standard" label="enter you comment" color='cyan' {...register("comment")} />
                        <IconButton onClick={handleSubmit(postComment)} className="text-primary p-2 text-3xl" variant='text'><MdAddComment /></IconButton>
                    </motion.div>
                </AnimatePresence>
            }
        </>
    )
}

export default CommentInput