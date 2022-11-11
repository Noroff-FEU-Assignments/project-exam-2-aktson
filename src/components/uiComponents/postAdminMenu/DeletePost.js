import React from 'react';
import PropTypes from "prop-types";
import { POSTS_URL } from '../../constants/api';
import { Button } from "@material-tailwind/react";
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import useAxios from '../../hooks/useAxios';
import PostsContext from '../../context/PostsContext';
import AdminContext from '../../context/AdminContext';

function DeletePost({ id }) {

    const { posts, setPosts } = React.useContext(PostsContext)
    const { setUpdateAdminUi, setUpdateAdminPosts } = React.useContext(AdminContext)

    const http = useAxios();
    const url = `${POSTS_URL}/${id}`;


    const handleDelete = async () => {

        const confirm = window.confirm("Are you sure you want to delete?");

        if (confirm) {
            try {
                const response = await http.delete(url)
                if (response) {
                    const updatedPosts = posts.filter(post => +post.id !== +id)
                    setPosts(updatedPosts)
                    setUpdateAdminUi(url)
                    setUpdateAdminPosts(url)
                    toast.success("Successfully deleted!")
                }

            } catch (error) {
                console.log(error)
            }
        }
    }

    return (

        <Button onClick={handleDelete} variant="text" size="sm" color="red" className="flex gap-1 items-center">
            <MdDelete size={20} />
            Delete
        </Button>

    )
}

export default DeletePost


DeletePost.propTypes = {
    id: PropTypes.number.isRequired
}