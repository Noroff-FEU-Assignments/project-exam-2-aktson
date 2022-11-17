import React from 'react'
import useFetch from '../hooks/useFetch'
import { PROFILES_URL } from '../constants/api'
import { useParams, useNavigate } from 'react-router-dom'
import UserBanner from '../uiComponents/UserBanner'
import PostCard from '../uiComponents/cards/PostCard'
import LoaderCard from '../uiComponents/loader/LoaderCard'
import Alert from '../uiComponents/Alert'
import Loader from '../uiComponents/loader/Loader'


function UserSpecific() {

    const params = useParams();
    const navigate = useNavigate();

    const { username } = params;

    if (!params) navigate("/")


    const [toggleState, setToggleState] = React.useState(1);

    const handleFollowingClick = (index) => {
        setToggleState(index);
    }

    const handleFollowersClick = (index) => {
        setToggleState(index);

    }

    const handlePostsClick = (index) => {
        setToggleState(index);
    }
    const userPostsUrl = `${PROFILES_URL}/${username}/posts?_author=true&_comments=true&_reactions=true`
    const userProfileUrl = `/api/v1/social/profiles/${username}`;

    const postsResponse = useFetch(userPostsUrl)
    const profileResponse = useFetch(userProfileUrl)

    const { isLoading, error } = postsResponse;

    if (isLoading) {
        return (
            <>
                <LoaderCard />
                <LoaderCard />
            </>
        )
    }
    if (error) {
        return error;
    }

    return (

        <>
            {postsResponse.isLoading ? <Loader />
                :
                <UserBanner user={profileResponse.data} />
            }
            <section className="section">
                {error && <Alert message={error} />}
                {postsResponse.isLoading && <>
                    <LoaderCard />
                    <LoaderCard />
                </>
                }
                {postsResponse.data.length === 0 ? <p className='card text-center p-2 bg-accent text-light text-lg'>Nothing here yet!</p>
                    :
                    postsResponse.data.map(post => {
                        return <PostCard post={post} key={post.id} />
                    })
                }
            </section>
        </>
    )
}

export default UserSpecific