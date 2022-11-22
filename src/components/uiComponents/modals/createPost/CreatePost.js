import React from 'react';
import { POSTS_FLAGS, POSTS_URL } from '../../../constants/api';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { createEditSchema } from '../../../yupSchema/createEditSchema';
import { Input, Button, Textarea, IconButton } from "@material-tailwind/react";
import { MdClear, MdBorderColor, MdImage } from "react-icons/md"
import { toast } from 'react-toastify';
import ErrorSpan from '../../ErrorSpan';
import useAxios from '../../../hooks/useAxios';
import PostsContext from '../../../context/PostsContext';
import ModalContext from '../../../context/ModalContext';
import CreatePostModal from './CreatePostModal';
import Form from '../Form';
import TagsInput from '../../inputs/TagsInput';
import AdminContext from '../../../context/AdminContext';
import Spinner from '../../loader/Spinner';
import { CLOUD_KEY, CLOUD_NAME } from '../../../constants/api';
import axios from 'axios';

function CreatePost() {
    const { closeCreatePostModal } = React.useContext(ModalContext);
    const { setAdminPosts } = React.useContext(AdminContext)
    const { setPosts } = React.useContext(PostsContext)

    const http = useAxios();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(createEditSchema) });

    const [tags, setTags] = React.useState([]);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [error, setError] = React.useState(null)


    // uploads image to cloudinary and passes url to put request for noroff url
    const handlePost = async (data) => {
        const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

        if (data.image[0]) {

            setIsSubmitting(true)

            try {
                const formdata = new FormData();

                formdata.append("file", data.image[0])
                formdata.append("upload_preset", CLOUD_KEY)
                formdata.append("folder", "social_app")

                const response = await axios.post(url, formdata)

                if (response.data.url) {
                    submitPost({ ...data, media: response.data.url })
                }

            } catch (error) {
                console.log(error)
                setError("Could not upload image")

            } finally {
                setIsSubmitting(false)
            }
        }
        else {
            submitPost(data)
        }

    }


    const submitPost = async (data) => {
        setIsSubmitting(true)

        const dataCopy = { ...data, tags: tags }
        const url = `${POSTS_URL}${POSTS_FLAGS}`

        try {
            const response = await http.post(url, dataCopy);
            if (response) {
                reset();
                setTags([]);
                closeCreatePostModal();
                setAdminPosts(prevState => [response.data, ...prevState])
                setPosts(prevState => [response.data, ...prevState])
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
                        <Input variant="standard" label="Title*" color="cyan" {...register("title")} />
                        {errors.title && <ErrorSpan message={errors.title.message} />}
                    </div>
                    <div>
                        <Textarea variant="standard" label="Description" color="cyan" {...register("body")} />
                    </div>

                    <div>
                        <Input
                            {...register("image")}
                            label="Image"
                            size="lg"
                            variant="standard"
                            color="cyan"
                            type="file"
                            icon={<MdImage size={20} />} />
                        {errors.image && <ErrorSpan message={errors.image.message} />}
                        {error && <ErrorSpan message={error} />}
                    </div>

                    <TagsInput tags={tags} setTags={setTags} />
                    <div className='flex justify-end'>
                        <Button type='submit' color='cyan' onClick={handleSubmit(handlePost)} className="flex gap-2 items-center mt-4 ">
                            <Spinner isSubmitting={isSubmitting} />
                            {isSubmitting ? "Sharing" : "Share"}
                        </Button>
                    </div>
                </fieldset>
            </Form>
        </CreatePostModal >

    )
}

export default CreatePost

