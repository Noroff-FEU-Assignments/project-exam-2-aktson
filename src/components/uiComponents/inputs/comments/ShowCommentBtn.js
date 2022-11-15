import React from 'react';
import PropTypes from "prop-types"
import { Button } from "@material-tailwind/react";
import { useOutsideClick } from '../../../hooks/useOutsideClick';

function ShowCommentBtn({ setShowComments, post }) {

    const handleShowComments = () => {
        setShowComments((prevState) => !prevState)
    }

    const handleClickOutside = () => {
        setShowComments(false)
    };
    const ref = useOutsideClick(handleClickOutside);

    const commentsCount = post._count.comments;
    return (
        <Button className="text-grey relative flex bg-gray-200"
            size="sm"
            variant='text'
            onClick={handleShowComments} ref={ref}>
            {commentsCount ?
                `${commentsCount > 1 ? `${commentsCount} comments ` : `${commentsCount} comment`}`
                :
                "No comments"
            }
        </Button>
    )
}

export default ShowCommentBtn


ShowCommentBtn.propTypes = {
    post: PropTypes.object.isRequired,
    setShowComments: PropTypes.func.isRequired
}