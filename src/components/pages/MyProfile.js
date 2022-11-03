import React from 'react'
import AuthContext from '../context/AuthContext';
import PostsContext from '../context/PostsContext'
import ProfileEditCard from '../uiComponents/ProfileEditCard'
import PostCard from "../uiComponents/PostCard";




function MyProfile() {
    const { posts } = React.useContext(PostsContext);
    const { auth } = React.useContext(AuthContext);
    const adminPosts = posts.filter(post => post.author.email === auth.email)

    return (
        <>
            <h1>My Profile</h1>
            <ProfileEditCard />
            {adminPosts && adminPosts.map(post => {
                return <PostCard post={post} adminPosts={adminPosts} key={post.id} />
            })}
        </>
    )
}

export default MyProfile