import React from 'react';
import { Button } from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import useAxios from '../hooks/useAxios';
import PostsContext from '../context/PostsContext';
import { toast } from 'react-toastify';

function DeletePost({ adminPost, handleMenuClick }) {

    const { posts, setPosts } = React.useContext(PostsContext)

    const http = useAxios();
    const id = adminPost.id;
    const url = `api/v1/social/posts/${id}`;


    const handleDelete = async () => {
        handleMenuClick()
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

        <Button onClick={handleDelete} variant="text" size="sm" color="red" className="flex gap-1 items-center">
            <MdDelete size={20} />
            Delete
        </Button>

    )
}

export default DeletePost