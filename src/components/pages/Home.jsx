import React from "react";
import PostsContext from "../context/PostsContext";
import PostCard from "../uiComponents/cards/PostCard";
import LoaderCard from "../uiComponents/loader/LoaderCard";
import Alert from "../uiComponents/Alert";
import TabsHeader from "../uiComponents/tabs/TabsHeader";
import { POSTS_PEOPLE_FOLLOWING, BRAND } from "../constants/api";
import useAxios from "../hooks/useAxios";
import Section from "../uiComponents/Section";
import SearchPosts from "../uiComponents/inputs/search/searchPosts/SearchPosts";

function Home() {
	document.title = `Home | ${BRAND}`;
	const http = useAxios();

	const [filterPosts, setFilterPosts] = React.useState([]);

	const { posts, isLoading, error } = React.useContext(PostsContext);

	const [toggleState, setToggleState] = React.useState(1);

	const [postsFollowing, setPostsFollowing] = React.useState([]);
	const [postsFollowingLoading, setPostsFollowingLoading] = React.useState(false);
	const [errorpostsFollowing, setErrorPostsFollowing] = React.useState(null);

	const handlePostsClick = (index) => {
		setToggleState(index);
	};
	const handleFollowingClick = (index) => {
		fetchPosts();
		setToggleState(index);
	};

	const fetchPosts = async () => {
		setPostsFollowingLoading(true);

		try {
			const response = await http.get(POSTS_PEOPLE_FOLLOWING);

			if (response) {
				setPostsFollowing(response.data);
			}
		} catch (error) {
			console.log(error);
			setErrorPostsFollowing("Failed to fetch");
		} finally {
			setPostsFollowingLoading(false);
		}
	};

	const searchFilteredData = filterPosts.map((post) => {
		return <PostCard key={post.id} post={post} />;
	});

	const renderPosts =
		posts &&
		posts.map((post) => {
			return <PostCard post={post} key={post.id} />;
		});

	const renderPostsFollowing =
		postsFollowing &&
		postsFollowing.map((post) => {
			return <PostCard post={post} key={post.id} />;
		});

	return (
		<Section>
			<TabsHeader>
				<button
					className={toggleState === 1 ? " tab-header-btn active-tab-header-btn" : "tab-header-btn"}
					onClick={() => handlePostsClick(1)}>
					All Posts
				</button>
				<button
					className={toggleState === 2 ? "tab-header-btn active-tab-header-btn" : "tab-header-btn "}
					onClick={() => handleFollowingClick(2)}>
					Following
				</button>
			</TabsHeader>
			<SearchPosts setFilterPosts={setFilterPosts} posts={toggleState === 1 ? posts : postsFollowing} />

			{/* Renders posts on allposts button click */}
			{error && <Alert message={error} />}

			{isLoading ? (
				<>
					<LoaderCard />
					<LoaderCard />
				</>
			) : (
				<div className={toggleState === 1 ? " active-tab-content tab-posts-content" : " tab-posts-content"}>
					{posts.length === 0 && <p className="text-center bg-secondary text-lightGray p-8 rounded-xl shadow-xl ">No posts!</p>}
					{searchFilteredData.length !== 0 ? searchFilteredData : renderPosts}
				</div>
			)}

			{/* Renders posts from people follwoing on follwing button click */}
			{errorpostsFollowing && <Alert message={errorpostsFollowing} />}

			{postsFollowingLoading ? (
				<>
					<LoaderCard />
					<LoaderCard />
				</>
			) : (
				<div className={toggleState === 2 ? " active-tab-content tab-posts-content" : " tab-posts-content"}>
					{postsFollowing.length === 0 && (
						<p className="text-center bg-secondary text-lightGray p-8 rounded-xl shadow-xl ">No user posts!</p>
					)}
					{searchFilteredData.length !== 0 ? searchFilteredData : renderPostsFollowing}
				</div>
			)}
		</Section>
	);
}

export default Home;
