import React from 'react'
import PostCard from "../uiComponents/cards/PostCard";
import UserBanner from '../uiComponents/UserBanner';
import AdminContext from '../context/AdminContext';
import Loader from '../uiComponents/loader/Loader';
import LoaderCard from "../uiComponents/loader/LoaderCard"
import Alert from '../uiComponents/Alert';

function MyProfile() {

    const { adminPosts, isLoading, admin, error } = React.useContext(AdminContext)

    return (
        <>
            {isLoading ? <Loader /> : <UserBanner user={admin} />}
            <section className="section">
                {error && <Alert message={error} />}
                {isLoading && (
                    <>
                        <LoaderCard />
                        <LoaderCard />
                    </>
                )}
                {adminPosts.length === 0 && <p className='card text-center p-4 bg-accent text-light text-lg '>No user posts!</p>}
                {adminPosts && adminPosts.map(post => {
                    return <PostCard post={post} key={post.id} />

                })}
            </section>
        </>
    )
}

export default MyProfile