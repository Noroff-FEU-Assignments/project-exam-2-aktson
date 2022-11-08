import React from 'react'
import AuthContext from '../context/AuthContext';
import PostsContext from '../context/PostsContext'
import Container from '../uiComponents/Container';
import PostCard from "../uiComponents/cards/PostCard";
import UserBanner from '../uiComponents/UserBanner';
import UsersContext from '../context/UsersContext';


function MyProfile() {
    const { posts } = React.useContext(PostsContext);
    const { users } = React.useContext(UsersContext)
    const { auth } = React.useContext(AuthContext);
    const adminPosts = posts?.filter(post => post.author.email === auth.email)
    const adminUser = users?.find(user => user.email === auth.email)

    return (
        <>
            <UserBanner user={adminUser} />
            <Container>
                <h1 className='card mt-16 p-4 text-center'>My Posts</h1>
                {adminPosts.length === 0 && <p className='card text-center p-2 bg-accent text-light text-lg'>Nothing here yet!</p>}
                {adminPosts && adminPosts.map(post => {
                    return <PostCard post={post} key={post.id} />
                })}
            </Container>
        </>
    )
}

export default MyProfile