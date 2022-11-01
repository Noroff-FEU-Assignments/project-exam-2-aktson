import React from "react";
import PostsContext from "../context/PostsContext";
import PostCard from "../uiComponents/PostCard";
import { MdError } from "react-icons/md"
import LoaderCard from "../uiComponents/LoaderCard";
import Container from "../uiComponents/Container"


function Home() {

	const { posts, isLoading, error } = React.useContext(PostsContext);

	if (isLoading) {
		return (
			<Container>
				<LoaderCard />
				<LoaderCard />
				<LoaderCard />
			</Container>
		)

	}
	if (error) {
		return error;
	}

	return (
		<section className="my-20 flex  flex-col  gap-4">
			{error && <p className="bg-red-500  p-4 text-light rounded-xl flex items-center gap-2"><MdError size={28} />{error}</p>}
			{posts.map(post => {
				return < PostCard post={post} key={post.id} />
			})}

		</section>);
}

export default Home;
