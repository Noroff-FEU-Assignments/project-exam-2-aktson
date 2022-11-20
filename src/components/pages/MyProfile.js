import React from 'react'
import PostCard from "../uiComponents/cards/PostCard";
import UserBanner from '../uiComponents/UserBanner';
import AdminContext from '../context/AdminContext';
import Loader from '../uiComponents/loader/Loader';
import LoaderCard from "../uiComponents/loader/LoaderCard"
import Alert from '../uiComponents/Alert';
import TabsHeader from '../uiComponents/tabs/TabsHeader';
import Slider from '../uiComponents/tabs/Slider';


function MyProfile() {

    document.title = "My Profile | ShareIt"


    const { adminPosts, isLoading, admin, error } = React.useContext(AdminContext)

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

    return (
        <>

            {isLoading ? <Loader /> : <UserBanner user={admin} postsLength={adminPosts.length} />}

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
                {isLoading && (
                    <>
                        <LoaderCard />
                        <LoaderCard />
                    </>
                )}
                {/* Renders posts on posts button click */}
                <div className={toggleState === 1 ? " active-tab-content tab-posts-content" : " tab-posts-content"}>
                    {adminPosts.length === 0 && <p className='text-center bg-secondary text-lightGray p-8 rounded-xl shadow-xl '>No user posts!</p>}
                    {adminPosts && adminPosts.map(post => {
                        return <PostCard post={post} key={post.id} />

                    })}
                </div>

                {/* Renders followers on followers button click */}
                <div className={toggleState === 2 ? " active-tab-content tab-users-content " : "tab-users-content"}>
                    <Slider followersOrFollowing={admin.followers} message="Opps...No followers" />
                </div>

                {/* Renders following  on following button click */}
                <div className={toggleState === 3 ? " active-tab-content tab-users-content " : "tab-users-content"}>
                    <Slider followersOrFollowing={admin.following} message="Opps...No followers" />
                </div>

            </section>

        </>
    )
}

export default MyProfile

