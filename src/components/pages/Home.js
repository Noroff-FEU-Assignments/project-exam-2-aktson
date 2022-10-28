import React from "react";
import PostsContext from "../context/PostsContext";
import PostCard from "../uiComponents/PostCard";


function Home() {
	const { posts } = React.useContext(PostsContext);

	return (
		<section className="my-20">
			<PostCard posts={posts} />

		</section>);
}

export default Home;
