import React from 'react';
import PropTypes from "prop-types"
import { Button } from "@material-tailwind/react";
import { useOutsideClick } from '../../../hooks/useOutsideClick';

function ShowCommentBtn({ setShowComments, comments }) {

    const handleShowComments = () => {
        setShowComments((prevState) => !prevState)

    }

    const handleClickOutside = () => {
        setShowComments(false)
    };
    const ref = useOutsideClick(handleClickOutside);

    const commentsCount = comments.length;
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
    comments: PropTypes.array.isRequired,
    setShowComments: PropTypes.func.isRequired
}