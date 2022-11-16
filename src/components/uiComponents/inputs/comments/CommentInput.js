import React from 'react';
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { commentsSchema } from '../../../yupSchema/commentsSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Button } from "@material-tailwind/react";
import { MdAddComment } from "react-icons/md"
import Animate from '../../Animate';
import useAxios from '../../../hooks/useAxios';
import { toast } from 'react-toastify';
import PostsContext from '../../../context/PostsContext';
import AdminContext from "../../../context/AdminContext"
import ErrorSpan from '../../ErrorSpan';
import { POSTS_URL } from '../../../constants/api';
import Spinner from '../../loader/Spinner';

function CommentInput({ showCommentInput, id, setShowCommentInput, setComments }) {

    const { setUpdateUi } = React.useContext(PostsContext)
    const { setUpdateAdminPosts } = React.useContext(AdminContext)

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
                // setUpdateUi(response.data.id)
                // setUpdateAdminPosts(response.data.id)
                setComments(prevState => [...prevState, response.data])
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
                    <fieldset className='flex w-full items-center bg-lightGray p-4 rounded-xl' disabled={isSubmitting} >
                        <div className='w-full' >
                            <Input variant="standard" label="enter you comment" color='cyan' {...register("comments")} />
                            {errors.comments && <ErrorSpan message={errors.comments.message} />}
                        </div>
                        <Button onClick={handleSubmit(postComment)}
                            size="sm"
                            variant='text'
                            className=" flex gap-1 items-center text-primary">
                            <Spinner isSubmitting={isSubmitting} />
                            <MdAddComment size={24} />
                        </Button>
                    </fieldset>
                </Animate>
            }
        </div>
    )
}

export default CommentInput


CommentInput.propTypes = {
    id: PropTypes.number.isRequired,
    showCommentInput: PropTypes.bool.isRequired,
    setShowCommentInput: PropTypes.func.isRequired
}