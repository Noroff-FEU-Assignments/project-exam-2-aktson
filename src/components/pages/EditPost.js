import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Textarea, IconButton, Tooltip } from "@material-tailwind/react";
import { MdClear, MdModeEditOutline, MdCreate } from "react-icons/md"
import ModalContext from "../context/ModalContext";
import ErrorSpan from "../uiComponents/ErrorSpan";
import TagsInput from "../uiComponents/TagsInput";
import useAxios from "../hooks/useAxios";
import PostsContext from "../context/PostsContext";
import { toast } from "react-toastify";
import Modal from "../uiComponents/Modal";


function EditPost({ adminPost }) {
    const { closeModal, openModal } = React.useContext(ModalContext)
    const { setUpdateUi } = React.useContext(PostsContext);

    const http = useAxios();

    const [post, setPost] = React.useState(null);
    const [tags, setTags] = React.useState([]);
    const [isSubmitting, setIsSubmitting] = React.useState(false);



    const { handleSubmit, register, reset, formState: { errors }, watch } = useForm({ defaultValues: { title: post?.title, body: post?.body } });

    const fetchPost = async () => {
        const url = `api/v1/social/posts/${adminPost.id}`;

        try {
            const response = await http.get(url)
            if (response) {
                setPost(response.data)
                openModal();
            }

        } catch (error) {
            console.log(IDBDatabase)
        }
    }

    const editedFormData = watch();

    const formDataWithTags = { ...editedFormData, tags }


    // console.log(formDataWithTags)

    const handleEditBtnClick = () => {
        fetchPost();
    }
    const handlePostEdit = async () => {


        // const url = `/api/v1/social/posts/${adminPost.id}`
        // try {

        //     const response = await http.put(url, formDataWithTags);
        //     console.log(response)


        // } catch (error) {
        //     console.log(error)
        // }

    }


    return (
        <>
            <Tooltip content="Edit">
                <IconButton onClick={handleEditBtnClick} variant="text" size="sm" color="cyan"><MdCreate size={20} /></IconButton>
            </Tooltip>
            <Modal>
                <form className="w-full p-6 bg-light max-w-xl  bg-base-100 rounded-xl grid  grid-rows-auto  mx-auto relative " style={{ zIndex: "100" }}>
                    <div className="flex text-primary mb-4  justify-between">
                        <div className="flex items-center gap-2">
                            <h2 >Edit</h2>
                            <MdModeEditOutline size={20} />
                        </div>
                        <IconButton className="text-grey" variant="text" size="sm" onClick={closeModal}>
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
                            <Button className='bg-primary mt-4' type='submit' onClick={handleSubmit(handlePostEdit)}>{isSubmitting ? "Sharing..." : "Share"}</Button>
                        </div>
                    </fieldset>
                </form>
            </Modal>
        </>
    );
}

export default EditPost;

