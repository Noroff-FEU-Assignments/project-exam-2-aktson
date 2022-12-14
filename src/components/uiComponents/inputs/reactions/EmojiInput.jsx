import React from "react";
import PropTypes from "prop-types";
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { POSTS_URL } from "../../../constants/api";
import useAxios from "../../../hooks/useAxios";
import { toast } from "react-toastify";
import Spinner from "../../loader/Spinner";

function EmojiInput({ setReactions, reactions, post }) {
	const http = useAxios();
	const [isSubmitting, setIsSubmitting] = React.useState(false);

	const handleEmojiClick = async (event) => {
		const symbol = event.target.dataset.symbol;

		const url = `${POSTS_URL}/${post.id}/react/${symbol}`;
		const findReaction = reactions.find((reaction) => reaction.symbol === symbol);
		setIsSubmitting(true);
		try {
			const response = await http.put(url);
			if (findReaction) {
				const filterReactions = reactions.filter((reaction) => reaction.symbol !== findReaction.symbol);
				setReactions([...filterReactions, response.data]);
			} else {
				setReactions((prevState) => [...prevState, response.data]);
			}
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Menu
			placement="bottom-start"
			animate={{
				mount: { y: 0 },
				unmount: { y: 25 },
			}}>
			<MenuHandler>
				<Button className=" flex items-center gap-2 w-full justify-center" variant="gradient" color="light-blue" size="sm">
					<MdOutlineEmojiEmotions size={22} />
					react
					<Spinner isSubmitting={isSubmitting} />
				</Button>
			</MenuHandler>

			<MenuList className="flex text-2xl p-0 border-none">
				<MenuItem data-symbol="👍" onClick={handleEmojiClick}>
					👍
				</MenuItem>
				<MenuItem data-symbol="❤️" onClick={handleEmojiClick}>
					❤️
				</MenuItem>
				<MenuItem data-symbol="😀" onClick={handleEmojiClick}>
					😀
				</MenuItem>
				<MenuItem data-symbol="😥" onClick={handleEmojiClick}>
					😥
				</MenuItem>
			</MenuList>
		</Menu>
	);
}

export default EmojiInput;

EmojiInput.propTypes = {
	post: PropTypes.object.isRequired,
};
