import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { createEditSchema } from '../yupSchema/createPostSchema';
import { Input, Button, Textarea, Dialog, DialogHeader, DialogBody, IconButton } from "@material-tailwind/react";
import { MdClear, MdBorderColor } from "react-icons/md"
import ErrorSpan from '../uiComponents/ErrorSpan';
import TagsInput from '../uiComponents/TagsInput';
import useAxios from '../hooks/useAxios';
import { toast } from 'react-toastify';
import PostsContext from '../context/PostsContext';
import ModalContext from '../context/ModalContext';

function CreatePost() {
    const { handleCreatePost, sizeCreatePost } = React.useContext(ModalContext);
    const { setPosts } = React.useContext(PostsContext)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(createEditSchema) });
    const { setUpdateUi } = React.useContext(PostsContext)

    const [tags, setTags] = React.useState([]);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const http = useAxios();

    const url = "/api/v1/social/posts";

    const handlePostSubmit = async (data) => {
        setIsSubmitting(true)

        const dataCopy = { ...data, tags: tags }

        try {
            const response = await http.post(url, dataCopy);
            if (response) {
                reset();
                setTags([]);
                handleCreatePost(null);
                setUpdateUi(true)
                toast.success("Post added successfully!")
            }

        } catch (error) {
            console.log(error)
            toast.error("Error occured: Could not add post")

        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Dialog
            className="relative"
            open={sizeCreatePost === "sm"}
            size={sizeCreatePost || "sm"}
            handler={handleCreatePost}>
            <DialogHeader className="justify-between pb-0 ">
                <div className="flex items-center gap-2 ml-4 text-primary">
                    <h2>Create</h2>
                    <MdBorderColor size={20} />
                </div>
                <IconButton variant="text" color="cyan" onClick={handleCreatePost} className="outline-none text-grey">
                    <MdClear size={20} />
                </IconButton>
            </DialogHeader>
            <DialogBody >
                <form className="flex flex-col gap-6 w-full p-4 ">
                    <fieldset className="flex flex-col gap-6" disabled={isSubmitting}>
                        <div>
                            <Input variant="standard" label="Title" color="cyan" {...register("title")} />
                            {errors.title && <ErrorSpan message={errors.title.message} />}
                        </div>
                        <div>
                            <Textarea variant="standard" label="Description" color="cyan" {...register("body")} />
                        </div>

                        <div className='w-full'>
                            <Input variant="standard" label="Image URL" color="cyan" {...register("media")} />
                            {errors.media && <ErrorSpan message={errors.media.message} />}
                        </div>
                        <TagsInput tags={tags} setTags={setTags} />
                        <div className='flex justify-end'>
                            <Button className='bg-primary mt-4' type='submit' onClick={handleSubmit(handlePostSubmit)}>{isSubmitting ? "Sharing..." : "Share"}</Button>
                        </div>
                    </fieldset>
                </form>

            </DialogBody>
        </Dialog>
    )
}

export default CreatePost

