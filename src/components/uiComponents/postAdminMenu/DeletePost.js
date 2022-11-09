import React from 'react';
import { POSTS_URL } from '../../constants/api';
import { Button } from "@material-tailwind/react";
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import useAxios from '../../hooks/useAxios';
import PostsContext from '../../context/PostsContext';

function DeletePost({ adminPost }) {

    const { posts, setPosts } = React.useContext(PostsContext)

    const http = useAxios();
    const id = adminPost.id;
    const url = `${POSTS_URL}/${id}`;


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

        <Button onClick={handleDelete} variant="text" size="sm" color="red" className="flex gap-1 items-center">
            <MdDelete size={20} />
            Delete
        </Button>

    )
}

export default DeletePost