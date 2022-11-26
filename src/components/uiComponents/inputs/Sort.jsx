import React from "react";
import PropTypes from "prop-types";

function Sort({ posts, setPosts }) {
	// const { setPosts } = React.useContext(PostsContext);

	const handleSorting = (event) => {
		const selectedValue = event.target.value;
		if (selectedValue === "latest") {
			const sortedByLast = [...posts].sort((a, b) => {
				const updatedDateA = new Date(a.updated);
				const updatedDateB = new Date(b.updated);

				return updatedDateB - updatedDateA;
			});
			setPosts(sortedByLast);
		} else if (selectedValue === "oldest") {
			const sortedByOldest = [...posts].sort((a, b) => {
				const updatedDateA = new Date(a.updated);
				const updatedDateB = new Date(b.updated);

				return updatedDateA - updatedDateB;
			});
			setPosts(sortedByOldest);
		}
	};
	// parseInt(a.dob.age) - parseInt(b.dob.age)
	return (
		<>
			<label className="inline" htmlFor="users"></label>
			<select
				id="users"
				name="users"
				className="text-grey block bg-white w-full responsive-width mx-auto border-none rounded-xl py-4 pl-9 pr-3  focus:outline-none focus:border-none shadow-xl"
				onChange={handleSorting}>
				<option value="latest">Latest</option>
				<option value="oldest">Oldest</option>
			</select>
		</>
	);
}

export default Sort;

Sort.propTypes = {
	post: PropTypes.array,
	setPosts: PropTypes.func,
};
