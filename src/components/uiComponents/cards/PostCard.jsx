import React from "react";
import PropTypes from "prop-types";
import ReactTimeAgo from "react-time-ago";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { Link } from "react-router-dom";
import { Avatar, Button } from "@material-tailwind/react";
import { MdOutlineModeComment } from "react-icons/md";
import CommentInput from "../inputs/comments/CommentInput";
import EmojiInput from "../inputs/reactions/EmojiInput";
import image from "../../../assets/user.png";
import PostMenu from "../postAdminMenu/PostMenu";
import AuthContext from "../../context/AuthContext";
import Comments from "../inputs/comments/Comments";
import Reactions from "../inputs/reactions/Reactions";
import ShowCommentBtn from "../inputs/comments/ShowCommentBtn";
import ImageModal from "../modals/imageModal/ImageModal";

function PostCard({ post }) {
	const { auth } = React.useContext(AuthContext);
	const [adminMenu, setAdminMenu] = React.useState(false);

	const [showCommentInput, setShowCommentInput] = React.useState(false);
	const [showComments, setShowComments] = React.useState(false);
	const [reactions, setReactions] = React.useState(post.reactions);
	const [comments, setComments] = React.useState(post.comments);

	const handleClickOutside = () => {
		setShowCommentInput(false);
	};
	const ref = useOutsideClick(handleClickOutside);

	React.useEffect(() => {
		if (!auth.email) return;
		if (!post.author) return;
		else if (auth.email === post?.author.email) {
			setAdminMenu(true);
		}
	}, [auth]);

	const { body, title, media, tags, updated, author } = post;

	const [size, setSize] = React.useState(null);

	const handleImageModal = (value) => {
		window.innerWidth >= 400 && setSize(value);
	};

	React.useEffect(() => {
		window.addEventListener("resize", handleImageModal);
	}, []);

	const date = new Date(updated);

	return (
		<div className="card grid  grid-rows-auto gap-3 text-grey mb-4 overflow-x-auto ">
			<div className="flex items-center justify-between gap-2 ">
				<div>
					<Link to={`/user-specific/${author?.name}`} className="flex items-center gap-2">
						<Avatar src={author?.avatar ? author.avatar : image} alt="" variant="circular" />
						<div className="flex flex-col ">
							<h4 className="text-start">{author?.name}</h4>
							<ReactTimeAgo date={date} locale="en-US" className="text-xs" />
						</div>
					</Link>
				</div>
				{adminMenu && <PostMenu adminPost={post} />}
			</div>
			<div className="flex flex-col flex-wrap ">
				<h3>{title}</h3>
				{body && <p>{body}</p>}
			</div>
			<div className="flex flex-wrap gap-2 ">
				{tags &&
					tags?.map((tag, index) => {
						return (
							<p className="text-secondary font-semibold" key={index}>
								#{tag}
							</p>
						);
					})}
			</div>

			{media && <ImageModal media={media} size={size} handleImageModal={handleImageModal} />}
			{media && (
				<div
					onClick={() => handleImageModal("lg")}
					className="drop-shadow-xl w-full max-w-sm md:max-w-md  lg:max-w-lg xl:max-w-2xl cursor-pointer"
					style={{
						backgroundImage: `url(${media}) `,
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						height: "350px",
						backgroundSize: "cover",
					}}>
					<span className="background-image" role="img" aria-label={`${title}`}></span>
				</div>
			)}
			<div className="flex py-2 items-center gap-2 max flex-wrap">
				<Reactions reactions={reactions} />
				<ShowCommentBtn comments={comments} setShowComments={setShowComments} />
			</div>

			<div className="flex justify-end gap-4 my-2 cursor-pointer mb-4 relative" ref={ref}>
				<EmojiInput post={post} setReactions={setReactions} reactions={reactions} />
				<Button
					className="bg-primary flex items-center gap-2 w-full justify-center"
					size="sm"
					onClick={() => setShowCommentInput((prevState) => !prevState)}>
					<MdOutlineModeComment size={22} />
					Comment
				</Button>
				<CommentInput showCommentInput={showCommentInput} id={post.id} setShowCommentInput={setShowCommentInput} setComments={setComments} />
			</div>

			<Comments showComments={showComments} comments={comments} />
		</div>
	);
}

export default PostCard;

PostCard.propTypes = {
	post: PropTypes.object.isRequired,
};
