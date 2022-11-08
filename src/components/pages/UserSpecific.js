import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Container from '../uiComponents/Container'
import UserBanner from '../uiComponents/UserBanner'
import PostCard from '../uiComponents/cards/PostCard'
import useAxios from '../hooks/useAxios'
import { toast } from 'react-toastify'
import PostsContext from '../context/PostsContext'

function UserSpecific() {

    const { posts } = React.useContext(PostsContext);
    const params = useParams();
    const navigate = useNavigate();

    if (!params) navigate("/")

    const [isLoading, setIsLoading] = React.useState(false);
    const [user, setUser] = React.useState({});

    const http = useAxios();
    const url = `/api/v1/social/profiles/${params.username}`;

    const userPosts = posts?.filter(post => post.author.email = user.email);
    console.log(userPosts)

    const fetchUser = async () => {

        setIsLoading(true)

        try {
            const response = await http.get(url)
            setUser(response.data)
        } catch (error) {
            console.log(error)
            toast.error("Unknown error occured")
        } finally {
            setIsLoading(true)
        }
    }

    React.useEffect(() => {
        fetchUser()
    }, [])

    return (

        <>
            <UserBanner user={user} />
            <Container>
                <h1 className='card mt-16 p-2 text-center'>Posts</h1>
                {userPosts.length === 0 && <p className='card text-center p-2 bg-accent text-light text-lg'>Nothing here yet!</p>}
                {userPosts && userPosts?.map(post => {
                    return <PostCard post={post} key={post.id} />
                })}
            </Container>
        </>
    )
}

export default UserSpecific