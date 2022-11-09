import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Container from '../uiComponents/Container'
import UserBanner from '../uiComponents/UserBanner'
import PostCard from '../uiComponents/cards/PostCard'
import useAxios from '../hooks/useAxios'
import { toast } from 'react-toastify'
import PostsContext from '../context/PostsContext'
import LoaderCard from '../uiComponents/loader/LoaderCard'
import Loader from '../uiComponents/loader/Loader'


function UserSpecific() {

    const { posts } = React.useContext(PostsContext);
    const params = useParams();
    const navigate = useNavigate();

    const { username } = params;

    if (!params) navigate("/")

    const [isLoading, setIsLoading] = React.useState(false);
    const [user, setUser] = React.useState({});

    const http = useAxios();
    const url = `/api/v1/social/profiles/${username}`;

    const userPosts = posts?.filter(post => post.author.name === user.name);

    const fetchUser = async () => {
        setIsLoading(true)

        try {
            const response = await http.get(url)
            setUser(response.data)

        } catch (error) {
            console.log(error)
            toast.error("Unknown error occured")
        } finally {
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        fetchUser()
    }, [])

    if (isLoading) {
        return <Loader />
    }


    return (

        <>
            <UserBanner user={user} />
            <section className="section">
                {userPosts.length === 0 && <p className='card text-center p-2 bg-accent text-light text-lg'>Nothing here yet!</p>}
                {isLoading &&
                    <>
                        <LoaderCard />
                        <LoaderCard />
                        <LoaderCard />
                    </>
                }
                {userPosts && userPosts?.map(post => {
                    return <PostCard post={post} key={post.id} />
                })}
            </section>
        </>
    )
}

export default UserSpecific