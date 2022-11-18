import React from 'react'
import PropTypes from "prop-types";
import ReactDom from "react-dom";
import ModalContext from "../../../context/ModalContext";


function CreatePostModal({ children }) {

    const { isCreatePostOpen, closeCreatePostModal } = React.useContext(ModalContext)

    if (!isCreatePostOpen) return null;

    return ReactDom.createPortal(
        <div className="modal" aria-hidden="true" id="my-modal">
            <div className="modal-overlay" onClick={closeCreatePostModal} />
            {children}
        </div >,
        document.getElementById("createPost-portal")
    )
}

export default CreatePostModal;

CreatePostModal.propTypes = {
    children: PropTypes.node.isRequired
}