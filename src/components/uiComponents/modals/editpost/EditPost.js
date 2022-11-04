import React from "react";
import { useForm } from "react-hook-form";
import { createEditSchema } from "../../../yupSchema/createEditSchema"
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Textarea, IconButton } from "@material-tailwind/react";
import { MdClear, MdModeEditOutline, MdCreate } from "react-icons/md"
import { toast } from "react-toastify";
import ModalContext from "../../../context/ModalContext";
import ErrorSpan from "../../ErrorSpan";
import TagsInput from "../../TagsInput";
import useAxios from "../../../hooks/useAxios";
import PostsContext from "../../../context/PostsContext";
import Loader from "../../loader/Loader";
import EditPostModal from "./EditPostModal";



function EditPost({ adminPost, handleMenuClick }) {
    const { openEditPostModal, closeEditPostModal } = React.useContext(ModalContext);
    const { setUpdateUi } = React.useContext(PostsContext);

    const [isLoading, setIsLoading] = React.useState(false)
    const [tags, setTags] = React.useState([]);
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const http = useAxios();

    const url = `api/v1/social/posts/${adminPost.id}`;


    // fetch post and populate form 
    const fetchPost = async () => {
        setIsLoading(true)

        try {
            const response = await http.get(url)
            if (response.data) {
                setIsLoading(false)
                openEditPostModal();
            }

        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
    }

    // fetch admin post 
    const handleEditBtnClick = () => {
        fetchPost()
    }

    // react hook form and yup schema
    const { handleSubmit, register, formState: { errors }, watch } =
        useForm({
            resolver: yupResolver(createEditSchema),
            defaultValues: {
                title: adminPost?.title,
                body: adminPost?.body,
                media: adminPost?.media,
                tags: tags,
            }
        });


    const editedFormData = watch();
    const formDataWithTags = { ...editedFormData, tags }



    const handlePostEdit = async () => {
        setIsLoading(true)
        setIsSubmitting(true)
        const url = `/api/v1/social/posts/${adminPost.id}`
        try {

            const response = await http.put(url, formDataWithTags);
            if (response) {
                setUpdateUi(true)
                toast.success("Post updated!");
                closeEditPostModal()
                handleMenuClick()
            }

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
            setIsSubmitting(false)
        }
    }


    return (
        <>
            <Button onClick={handleEditBtnClick} data-id={adminPost.id} variant="text" size="sm" className="flex gap-1 items-center text-primary">
                <MdCreate size={20} className="cursor-pointer" />
                Edit
            </Button>
            {isLoading && <Loader />}
            <EditPostModal>
                <form className="form" style={{ zIndex: "100" }}>
                    <div className="flex text-primary mb-4  justify-between">
                        <div className="flex items-center gap-2">
                            <h2 >Edit</h2>
                            <MdModeEditOutline size={18} />
                        </div>
                        <IconButton className="text-grey" variant="text" size="sm" onClick={closeEditPostModal}>
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
                        <TagsInput tags={adminPost.tags} setTags={setTags} />
                        <div className='flex justify-end'>
                            <Button className='bg-primary mt-4' type='submit' onClick={handleSubmit(handlePostEdit)}>
                                {isSubmitting ? "Sharing..." : "Share"}
                            </Button>
                        </div>
                    </fieldset>
                </form>
            </EditPostModal>

        </>
    );
}

export default EditPost;

