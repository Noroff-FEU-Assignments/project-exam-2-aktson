import React from 'react'
import useFetch from '../hooks/useFetch'
import { POSTS_FLAGS, PROFILES_FLAG, PROFILES_URL } from '../constants/api'
import { useParams, useNavigate } from 'react-router-dom'
import UserBanner from '../uiComponents/UserBanner'
import PostCard from '../uiComponents/cards/PostCard'
import LoaderCard from '../uiComponents/loader/LoaderCard'
import Alert from '../uiComponents/Alert'
import Loader from '../uiComponents/loader/Loader'
import TabsHeader from '../uiComponents/tabs/TabsHeader'
import TabsInner from '../uiComponents/tabs/TabsInner'
import Slider from '../uiComponents/tabs/Slider'


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
    const userPostsUrl = `${PROFILES_URL}/${username}/posts?${POSTS_FLAGS}`
    const userProfileUrl = `/api/v1/social/profiles/${username}${PROFILES_FLAG}`;

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
            {profileResponse.isLoading ? <Loader />
                :
                <UserBanner user={profileResponse.data} postsLength={postsResponse.data.length} />
            }
            <section className="section">
                <TabsHeader>
                    <button className={toggleState === 1 ? " tab-header active-tab-header" : "tab-header"} onClick={() => handlePostsClick(1)}>
                        Posts
                    </button>
                    <button className={toggleState === 2 ? "tab-header active-tab-header" : "tab-header "} onClick={() => handleFollowingClick(2)}>
                        Followers
                    </button>
                    <button className={toggleState === 3 ? " tab-header active-tab-header" : "tab-header"} onClick={() => handleFollowersClick(3)}>
                        Following
                    </button>
                </TabsHeader>
                {error && <Alert message={error} />}

                {postsResponse.isLoading && <>
                    <LoaderCard />
                    <LoaderCard />
                </>
                }

                {/* Renders posts on posts button click */}
                <div className={toggleState === 1 ? " active-tab-content tab-posts-content" : " tab-posts-content"}>
                    {postsResponse.data.length === 0 && <p className='text-center bg-secondary text-lightGray p-8 rounded-xl shadow-xl  '>No user posts!</p>}
                    {postsResponse.data && postsResponse.data.map(post => {
                        return <PostCard post={post} key={post.id} />

                    })}
                </div>

                {/* Renders followers on followers button click */}
                <div className={toggleState === 2 ? " active-tab-content tab-users-content " : "tab-users-content"}>
                    <Slider followersOrFollowing={profileResponse.data.followers} message="Opps...No followers" />
                </div>

                {/* Renders following  on following button click */}
                <div className={toggleState === 3 ? " active-tab-content tab-users-content " : "tab-users-content"}>
                    <Slider followersOrFollowing={profileResponse.data.following} message="Opps...Not following anyone" />
                </div>

            </section>
        </>
    )
}

export default UserSpecific