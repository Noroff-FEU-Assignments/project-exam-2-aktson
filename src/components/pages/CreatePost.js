import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { createPostSchema } from '../yupSchema/createPostSchema';
import { Input, Button, Textarea } from "@material-tailwind/react";
import ErrorSpan from '../uiComponents/ErrorSpan';
import TagsInput from '../uiComponents/TagsInput';

function CreatePost() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(createPostSchema) });

    const [tags, setTags] = React.useState([]);


    const handlePostSubmit = (data) => {

        const dataCopy = { ...data, tags: [tags] }
        reset();
        setTags([])
        console.log(dataCopy)
    }

    return (
        <section className='mt-8 '>
            <div className='shadow-xl max-w-xl mx-auto p-8'>
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
                </form>
            </div>
        </section>
    )
}

export default CreatePost