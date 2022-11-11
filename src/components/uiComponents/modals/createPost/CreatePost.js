import React from 'react';
import { POSTS_URL } from '../../../constants/api';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { createEditSchema } from '../../../yupSchema/createEditSchema';
import { Input, Button, Textarea, IconButton } from "@material-tailwind/react";
import { MdClear, MdBorderColor, MdCached } from "react-icons/md"
import { toast } from 'react-toastify';
import ErrorSpan from '../../ErrorSpan';
import useAxios from '../../../hooks/useAxios';
import PostsContext from '../../../context/PostsContext';
import ModalContext from '../../../context/ModalContext';
import CreatePostModal from './CreatePostModal';
import Form from '../Form';
import TagsInput from '../../inputs/TagsInput';
import AdminContext from '../../../context/AdminContext';


function CreatePost() {
    const { closeCreatePostModal } = React.useContext(ModalContext);
    const { setUpdateAdminUi, setUpdateAdminPosts } = React.useContext(AdminContext)
    const { setUpdateUi } = React.useContext(PostsContext)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(createEditSchema) });

    const [tags, setTags] = React.useState([]);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const http = useAxios();

    const handlePostSubmit = async (data) => {
        setIsSubmitting(true)

        const dataCopy = { ...data, tags: tags }

        try {
            const response = await http.post(POSTS_URL, dataCopy);
            if (response) {
                reset();
                setTags([]);
                closeCreatePostModal();
                setUpdateUi(response.data.id)
                setUpdateAdminUi(response.data.id)
                setUpdateAdminPosts(response.data.id)
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
            <Form>
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
                        <Button type='submit' color='cyan' onClick={handleSubmit(handlePostSubmit)} className="flex gap-2 items-center mt-4 ">
                            {isSubmitting && <MdCached className="animate-spin" size={20} />}
                            Share
                        </Button>
                    </div>
                </fieldset>
            </Form>
        </CreatePostModal >

    )
}

export default CreatePost

