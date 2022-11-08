import React from 'react'
import AuthContext from '../context/AuthContext';
import PostsContext from '../context/PostsContext'
import Container from '../uiComponents/Container';
import PostCard from "../uiComponents/cards/PostCard";
import UserBanner from '../uiComponents/UserBanner';


function MyProfile() {
    const { posts } = React.useContext(PostsContext);
    const { auth } = React.useContext(AuthContext);
    const adminPosts = posts?.filter(post => post.author.email === auth.email)


    return (
        <>
            <UserBanner user={auth} />
            <Container>
                {adminPosts.length === 0 && <p className='card text-center p-2 bg-accent text-light text-lg'>No user post yet!</p>}
                {adminPosts && adminPosts.map(post => {
                    return <PostCard post={post} key={post.id} />
                })}
            </Container>
        </>
    )
}

export default MyProfile