import React from "react";
import PostsContext from "../context/PostsContext";
import PostCard from "../uiComponents/cards/PostCard";
import LoaderCard from "../uiComponents/loader/LoaderCard";
import Alert from "../uiComponents/Alert";
import TabsHeader from "../uiComponents/tabs/TabsHeader";
import { POSTS_PEOPLE_FOLLOWING } from "../constants/api"
import useAxios from "../hooks/useAxios";
import useFetch from "../hooks/useFetch";


function Home() {
	document.title = "Home | ShareIt"

	const postsFollowing = useFetch(POSTS_PEOPLE_FOLLOWING)
	console.log(postsFollowing)
	const { posts, isLoading, error } = React.useContext(PostsContext);


	const [toggleState, setToggleState] = React.useState(1);

	const handleFollowingClick = (index) => {
		setToggleState(index);
	}

	const handlePostsClick = (index) => {
		setToggleState(index);

	}


	return (

		<section className="section">

			<TabsHeader>
				<button className={toggleState === 1 ? " tab-header active-tab-header" : "tab-header"} onClick={() => handlePostsClick(1)}>
					All Posts
				</button>
				<button className={toggleState === 2 ? "tab-header active-tab-header" : "tab-header "} onClick={() => handleFollowingClick(2)}>
					Following
				</button>
			</TabsHeader>


			{/* Renders posts on allposts button click */}
			{error && <Alert message={error} />}

			{isLoading ?
				<>
					<LoaderCard />
					<LoaderCard />
				</>
				:
				<div className={toggleState === 1 ? " active-tab-content tab-posts-content" : " tab-posts-content"}>
					{posts.length === 0 && <p className='text-center bg-secondary text-lightGray p-8 rounded-xl shadow-xl '>No posts!</p>}
					{posts && posts.map(post => {
						return <PostCard post={post} key={post.id} />

					})}
				</div>
			}


			{/* Renders posts from people follwoing on follwing button click */}
			{postsFollowing.error && <Alert message={postsFollowing.error} />}

			{postsFollowing.isLoading ?
				<>
					<LoaderCard />
					<LoaderCard />
				</>
				:
				<div className={toggleState === 2 ? " active-tab-content tab-posts-content" : " tab-posts-content"}>
					{postsFollowing.data.length === 0 && <p className='text-center bg-secondary text-lightGray p-8 rounded-xl shadow-xl '>No user posts!</p>}
					{postsFollowing.data && postsFollowing.data.map(post => {
						return <PostCard post={post} key={post.id} />

					})}
				</div>
			}
		</section>


	)
}

export default Home;

