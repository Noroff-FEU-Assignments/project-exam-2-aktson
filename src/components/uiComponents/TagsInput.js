import React from 'react';
import { Input } from "@material-tailwind/react";
import { MdAddBox, MdCancel } from "react-icons/md"
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

function TagsInput({ tags, setTags }) {

    const { register, handleSubmit, reset } = useForm();

    const handleTagInput = (data) => {
        const { tag } = data
        if (!tag) return;
        setTags([...tags, tag])
        reset({ tag: "" })
    }

    const deleteTag = (index) => {
        setTags(tags.filter((tag, i) => i !== index))

    }

    return (
        <div className='w-full'>
            <Input
                variant="standard"
                label="Enter tags"
                color="cyan" {...register("tag")}
                icon={<MdAddBox size={22}
                    onClick={handleSubmit(handleTagInput)}
                    className="cursor-pointer text-primary hover:scale-110 transition duration-100" />
                }
            />
            <div className='flex gap-2 mt-2 flex-wrap'>
                <AnimatePresence>
                    {tags.map((tag, index) => {
                        return (
                            <motion.p className='bg-accent p-1 rounded-lg flex gap-2 items-center cursor-pointer text-light'
                                key={index + 1}
                                initial={{ opacity: 0, translateY: -20 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                exit={{ opacity: 0, translateY: -20 }}
                                transition={{ duration: 0.2 }} >
                                {tag} <MdCancel size={18} onClick={() => deleteTag(index)} />
                            </motion.p>
                        )
                    })}
                </AnimatePresence>
            </div>

        </div>
    )
}

export default TagsInput