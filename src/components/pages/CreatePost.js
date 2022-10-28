import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { createPostSchema } from '../yupSchema/createPostSchema';
import { Input, Button, Textarea } from "@material-tailwind/react";
import ErrorSpan from '../uiComponents/ErrorSpan';
import TagsInput from '../uiComponents/TagsInput';
import useAxios from '../hooks/useAxios';
import { toast } from 'react-toastify';
import Loader from '../uiComponents/Loader';

function CreatePost() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(createPostSchema) });

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
        <section className='my-20 '>
            <div className='card'>
                <form className="flex flex-col gap-6">
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
                        <Button className='bg-primary mt-4' type='submit' onClick={handleSubmit(handlePostSubmit)}>Share</Button>
                    </div>
                    {isSubmitting && <Loader />}
                </form>
            </div>
        </section>
    )
}

export default CreatePost