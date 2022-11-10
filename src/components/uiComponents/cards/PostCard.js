import React from 'react'
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { Link } from 'react-router-dom';
import { Avatar, Button } from "@material-tailwind/react";
import { MdOutlineModeComment } from "react-icons/md";
import CommentInput from '../inputs/CommentInput';
import EmojiInput from '../inputs/EmojiInput';
import image from "../../../assets/user.png";
import PostMenu from '../postAdminMenu/PostMenu';
import AuthContext from '../../context/AuthContext';
import Comments from '../comments/Comments';


function PostCard({ post }) {
    const { auth } = React.useContext(AuthContext);

    const [adminPost, setAdminPost] = React.useState(false)

    const [showCommentInput, setShowCommentInput] = React.useState(false);

    const handleClickOutside = () => {
        setShowCommentInput(false)
    };
    const ref = useOutsideClick(handleClickOutside);


    React.useEffect(() => {

        if (auth.email === post.author.email) {
            setAdminPost(true)
        }

    }, [post])



    const { body, title, media, tags, updated, author } = post;

    const updatedPost = new Date(updated).toLocaleDateString('da-DK', { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', hour12: false, minute: '2-digit' })


    return (
        <div className='card grid  grid-rows-auto gap-3 text-grey mb-4'>
            <div className='flex items-center justify-between gap-2 '>
                <div>
                    <Link to={`/user-specific/${author.name}`} className='flex items-center gap-2'>
                        <Avatar src={author.avatar ? author.avatar : image} alt="" variant="circular" />
                        <div className='flex flex-col '>
                            <p className='text-start'>{author.name}</p>
                            <p className='text-xs'>{updatedPost}</p>
                        </div>
                    </Link>
                </div>
                {adminPost && <PostMenu key={post.id} adminPost={post} />}
            </div>
            <div>
                <h3 className='font-bold text-xl'>{title}</h3>
                {body && <p>{body}</p>}
            </div>
            <div className='flex flex-wrap gap-2 '>
                {tags && tags?.map((tag, index) => {
                    return <p className='text-accent font-semibold' key={index}>#{tag}</p>
                })}
            </div>

            {media &&
                <div className='drop-shadow-xl'
                    style={{
                        backgroundImage: `url(${media}) `,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        height: "300px",
                        backgroundSize: "cover",
                    }}>
                    <span className="background-image" role="img" aria-label={`${title}`}></span>
                </div>
            }
            <div className='flex justify-between bg-blue-gray-50  p-2 rounded-xl items-center'>
                <div className='flex '>
                    <Button className='text-grey' size="sm" variant='text'>50 Reactions</Button>
                    <Comments id={post?.id} commentsCount={post._count.comments} />

                </div>

            </div >
            <div className='flex justify-end gap-4 my-2 cursor-pointer mb-4 relative' ref={ref}>
                <EmojiInput />
                <Button className="bg-primary flex items-center gap-2 w-full justify-center"
                    size="sm"
                    onClick={() => setShowCommentInput((prevState) => !prevState)}
                >
                    <MdOutlineModeComment size={22} />
                    Comment
                </Button>
                <CommentInput showCommentInput={showCommentInput} id={post.id} setShowCommentInput={setShowCommentInput} />
            </div>

        </div >
    )
}

export default PostCard