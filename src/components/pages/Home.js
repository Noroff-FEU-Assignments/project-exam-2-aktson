import React from "react";
import PostsContext from "../context/PostsContext";
import PostCard from "../uiComponents/cards/PostCard";
import { MdError } from "react-icons/md"
import LoaderCard from "../uiComponents/loader/LoaderCard";
import Container from "../uiComponents/Container"


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
			{error &&
				<p className="bg-red-500 p-4 text-light rounded-xl flex items-center gap-2">
					<MdError size={28} />
					{error}
				</p>
			}
			{posts && posts?.map(post => {
				return <PostCard post={post} key={post.id} />
			})}
		</section>

	)
}

export default Home;
