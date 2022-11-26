import React from "react";
import PropTypes from "prop-types";
import { Input } from "@material-tailwind/react";
import { MdSearch, MdClear } from "react-icons/md";

function SearchPosts({ setFilterPosts, posts }) {
	const [show, setShow] = React.useState(false);

	const [value, setValue] = React.useState("");

	// close button inside searchbar closes result container onclick
	const handleClose = () => {
		setShow(false);
		setValue("");
	};

	// filters users array and matches with name
	const handleSearch = (event) => {
		setValue(event.target.value);

		if (!value) return;

		if (value !== "") {
			const filteredPosts = posts.filter((user) => user.title.trim().toLowerCase().includes(value));

			if (filteredPosts.length === 0) {
				setShow(true);
				setFilterPosts(posts);
			}
			setFilterPosts(filteredPosts);
		} else {
			setShow(false);
			setValue("");
			setFilterPosts(posts);
		}
	};

	return (
		<div className="responsive-width bg-lightGray p-2 rounded-xl relative hidden lg:block shadow-xl">
			<Input
				variant="standard"
				placeholder="Search Posts"
				color="cyan"
				className=" w-full text-md p-2 mb-4 placeholder:text-grey"
				icon={
					!show ? (
						<MdSearch size={24} className=" -translate-y-1  -translate-x-3 text-primary" />
					) : (
						<MdClear size={24} className=" -translate-y-1  -translate-x-3 cursor-pointer" onClick={handleClose} />
					)
				}
				value={value}
				onChange={handleSearch}
			/>
			{show && (
				<div className="absolute  bg-lightGray rounded-xl  top-full  w-full mt-1 shadow-xl p-2 inst-x-0">
					<p>No posts found</p>
				</div>
			)}
		</div>
	);
}

export default SearchPosts;

SearchPosts.propTypes = {
	setFilterPosts: PropTypes.func,
	posts: PropTypes.array,
};
