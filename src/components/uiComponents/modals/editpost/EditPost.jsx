import React from "react";
import PropTypes from "prop-types";
import { POSTS_FLAGS, POSTS_URL, CLOUD_KEY, CLOUD_NAME } from "../../../constants/api";
import useAxios from "../../../hooks/useAxios";
import axios from "axios";
import { useForm } from "react-hook-form";
import { createEditSchema } from "../../../yupSchema/createEditSchema"
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Textarea, IconButton } from "@material-tailwind/react";
import { MdClear, MdModeEditOutline, MdCreate, MdImage } from "react-icons/md"
import { toast } from "react-toastify";
import ModalContext from "../../../context/ModalContext";
import AdminContext from "../../../context/AdminContext";
import PostsContext from "../../../context/PostsContext";
import ErrorSpan from "../../ErrorSpan";
import TagsInput from "../../inputs/TagsInput";
import EditPostModal from "./EditPostModal";
import Form from "../Form";
import Alert from "../../Alert";
import Spinner from "../../loader/Spinner";




function EditPost({ adminPost, setIsOpen }) {
    const { openEditPostModal, closeEditPostModal } = React.useContext(ModalContext);
    const { setUpdateUi } = React.useContext(PostsContext);
    const { adminPosts, setAdminPosts, } = React.useContext(AdminContext);

    const [tags, setTags] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null)
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const http = useAxios();

    const url = `${POSTS_URL}/${adminPost.id}`;

    // fetch post and populate form 
    const fetchPost = async () => {
        setIsLoading(true)

        try {
            const response = await http.get(url)
            if (response.data) {
                setIsLoading(false)
                openEditPostModal();
                setTags(response.data.tags)

            }

        } catch (error) {
            setIsLoading(false)
            console.log(error)
            setError("An error has occured fetching post")
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

    // uploads image to cloudinary and passes url to put request for noroff url
    const handlePostEdit = async (data) => {
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
                    submitPostEdit(response.data.url)
                }

            } catch (error) {
                console.log(error)
                setError("Could not upload image")

            } finally {
                setIsSubmitting(false)
            }
        }
        else {
            submitPostEdit(adminPosts?.media)
        }

    }


    const submitPostEdit = async (imageUrl) => {

        setIsSubmitting(true)

        const editedFormData = watch();
        const formDataWithTags = { ...editedFormData, tags: tags, media: imageUrl }
        const url = `${POSTS_URL}/${adminPost.id}${POSTS_FLAGS}`

        try {

            const response = await http.put(url, formDataWithTags);
            if (response) {
                const filteredPosts = adminPosts?.filter(post => post.id !== adminPost.id)
                setAdminPosts([response.data, ...filteredPosts])
                setUpdateUi(response.data)
                setIsOpen(false)
                toast.success("Post updated!");
                closeEditPostModal()
            }

        } catch (error) {
            console.log(error)
        } finally {
            setIsSubmitting(false)
        }
    }


    return (
        <>
            <Button onClick={handleEditBtnClick} data-id={adminPost.id} variant="text" size="sm" className="flex gap-1 items-center text-primary">
                <MdCreate size={20} className="cursor-pointer" />
                Edit
                <Spinner isSubmitting={isLoading} />
            </Button>
            {error && <Alert message={error} />}
            <EditPostModal>
                <Form>
                    <div className="flex text-primary mb-4  justify-between">
                        <div className="flex items-center gap-2">
                            <h2 >Edit</h2>
                            <MdModeEditOutline size={18} />
                        </div>
                        <IconButton className="text-grey" variant="text" size="sm" onClick={closeEditPostModal}>
                            <MdClear size={24} onClick={() => setIsOpen(false)} />
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
                            <Button type='submit' color="cyan" onClick={handleSubmit(handlePostEdit)} className="flex gap-2 items-center mt-4 ">
                                <Spinner isSubmitting={isSubmitting} />
                                {isSubmitting ? "Sharing" : "Share"}
                            </Button>
                        </div>
                    </fieldset>
                </Form>
            </EditPostModal>
        </>
    );
}

export default EditPost;


EditPost.propTypes = {
    adminPost: PropTypes.object.isRequired,
    setIsOpen: PropTypes.func
}