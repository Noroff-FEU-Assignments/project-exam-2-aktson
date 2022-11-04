import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { createEditSchema } from '../../../yupSchema/createEditSchema';
import { Input, Button, Textarea, Dialog, DialogHeader, DialogBody, IconButton } from "@material-tailwind/react";
import { MdClear, MdBorderColor } from "react-icons/md"
import { toast } from 'react-toastify';
import ErrorSpan from '../../ErrorSpan';
import TagsInput from '../../TagsInput';
import useAxios from '../../../hooks/useAxios';
import PostsContext from '../../../context/PostsContext';
import ModalContext from '../../../context/ModalContext';
import CreatePostModal from './CreatePostModal';

function CreatePost() {
    const { closeCreatePostModal, openCreatePostModal } = React.useContext(ModalContext);


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
                closeCreatePostModal();
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

        <CreatePostModal >
            <form className="form " style={{ zIndex: "50" }}>
                <div className='flex justify-between items-center mb-4'>
                    <div className="flex items-center gap-2">
                        <h2>Create</h2>
                        <MdBorderColor size={18} className="text-primary" />
                    </div>
                    <IconButton variant="text" color="cyan" onClick={closeCreatePostModal} className="text-grey">
                        <MdClear size={24} />
                    </IconButton>
                </div>
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

        </CreatePostModal >

    )
}

export default CreatePost

