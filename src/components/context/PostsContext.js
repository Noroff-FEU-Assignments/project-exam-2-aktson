import React from 'react'
import useAxios from '../hooks/useAxios';
import { GET_POSTS_URL } from '../constants/api';


const PostsContext = React.createContext();

export function PostsProvider({ children }) {

    const [posts, setPosts] = React.useState([]);
    const [updateUi, setUpdateUi] = React.useState(GET_POSTS_URL)
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);


    const http = useAxios();

    const fetchPosts = async () => {
        setIsLoading(true)

        try {
            const response = await http.get(GET_POSTS_URL)

            if (response) {
                setPosts(response.data)
            }

        } catch (error) {
            console.log(error)
            setError(error)

        } finally {
            setIsLoading(false)
        }
    }


    React.useEffect(() => {
        let controller = new AbortController();

        fetchPosts();

        return () => controller?.abort();


    }, [updateUi])

    return (
        <PostsContext.Provider value={{ posts, setPosts, isLoading, error, setUpdateUi }}>{children}</PostsContext.Provider>
    )
}

export default PostsContext