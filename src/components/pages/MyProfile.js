import React from 'react'
import PostCard from "../uiComponents/cards/PostCard";
import UserBanner from '../uiComponents/UserBanner';
import AdminContext from '../context/AdminContext';
import Loader from '../uiComponents/loader/Loader';
import LoaderCard from "../uiComponents/loader/LoaderCard"
import Alert from '../uiComponents/Alert';
import TabsInner from '../uiComponents/slider/TabsInner';
import Animate from '../uiComponents/Animate';


function MyProfile() {

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

            {isLoading ? <Loader /> : <UserBanner user={admin} />}
            <section className="section">
                <div className="tabs-container ">
                    <div className={toggleState === 1 ? " tab-header active-tab" : "tab-header"} onClick={() => handlePostsClick(1)}>
                        Posts
                    </div>
                    <div className={toggleState === 2 ? "tab-header active-tab" : "tab-header "} onClick={() => handleFollowingClick(2)}>
                        Followers
                    </div>
                    <div className={toggleState === 3 ? " tab-header active-tab" : "tab-header"} onClick={() => handleFollowersClick(3)}>
                        Following
                    </div>
                </div>
                {error && <Alert message={error} />}
                {isLoading && (
                    <>
                        <LoaderCard />
                        <LoaderCard />
                    </>
                )}
                <div className={toggleState === 1 ? " active-tab-content tab-posts-content" : " tab-posts-content"}>
                    {adminPosts.length === 0 && <p className='card text-center  bg-lightGray p-4  '>No user posts!</p>}
                    {adminPosts && adminPosts.map(post => {
                        return <PostCard post={post} key={post.id} />

                    })}
                </div>
                <div className={toggleState === 2 ? " active-tab-content tab-users-content " : "tab-users-content"}>
                    <TabsInner user={admin.followers} message="Opps...No followers" />
                </div>
                <div className={toggleState === 3 ? " active-tab-content tab-users-content " : "tab-users-content"}>
                    <TabsInner user={admin.following} message="Opps...Not following anyone" />
                </div>

            </section>

        </>
    )
}

export default MyProfile

