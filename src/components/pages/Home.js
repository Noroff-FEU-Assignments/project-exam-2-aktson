import React from "react";
import PostsContext from "../context/PostsContext";


function Home() {
	const { posts } = React.useContext(PostsContext);

	console.log(posts)
	return (
		<section className="my-20">

		</section>);
}

export default Home;
