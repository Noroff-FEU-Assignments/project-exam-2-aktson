import React from 'react'
import useAxios from '../hooks/useAxios';


const PostsContext = React.createContext();

export function PostsProvider({ children }) {

    const [posts, setPosts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const url = "/api/v1/social/posts?_author=true&_comments=true&_reactions=true";

    const http = useAxios();

    const fetchPosts = async () => {
        setIsLoading(true)

        try {
            const response = await http.get(url)

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

        fetchPosts();

    }, [])
    return (
        <PostsContext.Provider value={{ posts, setPosts, isLoading, error }}>{children}</PostsContext.Provider>
    )
}

export default PostsContext