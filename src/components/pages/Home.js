import React from "react";
import PostsContext from "../context/PostsContext";
import PostCard from "../uiComponents/cards/PostCard";
import LoaderCard from "../uiComponents/loader/LoaderCard";
import Alert from "../uiComponents/Alert";


function Home() {

	const { posts, isLoading, error } = React.useContext(PostsContext);


	if (isLoading) {
		return (

			<div className="w-full my-24">
				<LoaderCard />
				<LoaderCard />
				<LoaderCard />
			</div>

		)
	}
	if (error) {
		return error;
	}

	return (

		<section className="section">
			{error && <Alert message={error} />}
			{posts && posts?.map(post => {
				return <PostCard post={post} key={post.id} />
			})}

		</section>

	)
}

export default Home;

