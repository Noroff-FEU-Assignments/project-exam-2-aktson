import React from 'react';
import { IconButton, Tooltip } from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import useAxios from '../hooks/useAxios';
import PostsContext from '../context/PostsContext';
import { toast } from 'react-toastify';

function DeletePost({ adminPost }) {

    const { posts, setPosts } = React.useContext(PostsContext)

    const http = useAxios();
    const id = adminPost.id;
    const url = `api/v1/social/posts/${id}`;


    const handleDelete = async () => {
        const confirm = window.confirm("Are you sure you want to delete?");

        if (confirm) {
            try {
                const response = await http.delete(url)
                if (response) {
                    const updatedPosts = posts.filter(post => +post.id !== +id)
                    setPosts(updatedPosts)
                    toast.success("Successfully deleted!")
                }

            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <Tooltip content="Delete">
            <IconButton onClick={handleDelete} variant="text" size="sm" color="red"><MdDelete size={20} /></IconButton>
        </Tooltip>
    )
}

export default DeletePost