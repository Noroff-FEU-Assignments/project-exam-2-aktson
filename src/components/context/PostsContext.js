import React from 'react'
import PropTypes from "prop-types";
import useAxios from '../hooks/useAxios';
import { GET_POSTS_URL } from '../constants/api';


const PostsContext = React.createContext();

export function PostsProvider({ children }) {

    const [posts, setPosts] = React.useState([]);
    const [updateUi, setUpdateUi] = React.useState(GET_POSTS_URL)
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const http = useAxios();

    React.useEffect(() => {

        const fetchPosts = async () => {
            setIsLoading(true)

            try {
                const response = await http.get(GET_POSTS_URL)

                if (response) {
                    setPosts(response.data)
                }

            } catch (error) {
                console.log(error)
                setError("Failed to fetch")

            } finally {
                setIsLoading(false)
            }
        }

        fetchPosts();

    }, [updateUi])

    return (
        <PostsContext.Provider value={{ posts, setPosts, isLoading, error, setUpdateUi }}>{children}</PostsContext.Provider>
    )
}

export default PostsContext

PostsContext.propTypes = {
    children: PropTypes.node.isRequired
}