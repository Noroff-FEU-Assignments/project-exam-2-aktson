import React from 'react';
import { useForm } from "react-hook-form";
import { commentsSchema } from '../../yupSchema/commentsSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Button } from "@material-tailwind/react";
import { MdAddComment, MdCached } from "react-icons/md"
import Animate from '../Animate';
import useAxios from '../../hooks/useAxios';
import { toast } from 'react-toastify';
import PostsContext from '../../context/PostsContext';
import ErrorSpan from '../ErrorSpan';
import { POSTS_URL } from '../../constants/api';

function CommentInput({ showCommentInput, id, setShowCommentInput }) {
    const { setUpdateUi } = React.useContext(PostsContext)

    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(commentsSchema) });
    const url = `${POSTS_URL}/${id}/comment`

    const http = useAxios();


    const postComment = async (data) => {
        setIsSubmitting(true)

        const formadata = { "body": data.comments }
        try {
            const response = await http.post(url, formadata);
            if (response) {
                reset({ comments: "" })
                setUpdateUi(url)
                toast.success("Comment posted")
                setShowCommentInput(false)
            }

        } catch (error) {
            console.log(error)
            toast.success("Could not post comment")

        }
        finally {
            setIsSubmitting(false)
        }

    }
    return (
        <div className="absolute left-0 w-full top-full " >
            {showCommentInput &&
                <Animate >
                    <fieldset className='flex w-full items-center bg-white p-4 rounded-xl' disabled={isSubmitting} >
                        <div className='w-full' >
                            <Input variant="standard" label="enter you comment" color='cyan' {...register("comments")} />
                            {errors.comments && <ErrorSpan message={errors.comments.message} />}
                        </div>
                        <Button onClick={handleSubmit(postComment)}
                            size="sm"
                            variant='text'
                            className=" flex gap-1 items-center text-primary">
                            {isSubmitting && <MdCached className="animate-spin" size={24} />}
                            <MdAddComment size={24} />
                        </Button>
                    </fieldset>
                </Animate>
            }
        </div>
    )
}

export default CommentInput