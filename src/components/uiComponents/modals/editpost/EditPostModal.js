import React from 'react'
import PropTypes from "prop-types"
import ReactDom from "react-dom";
import ModalContext from "../../../context/ModalContext";


function EditPostModal({ children }) {

    const { closeEditPostModal, isEditPostModalOpen } = React.useContext(ModalContext)

    if (!isEditPostModalOpen) return null;

    return ReactDom.createPortal(
        <div className="p-2 md:flex justify-center items-center relative backdrop-blur-sm" aria-hidden="true" id="my-modal">
            <div className="w-full h-full hidden sm:block backdrop-opacity-40 bg-dark/70"
                id="overlay"
                style={{ zIndex: "50" }}
                onClick={closeEditPostModal}>
            </div>
            {children}
        </div>,
        document.getElementById("editPost-portal")
    )
}

export default EditPostModal;


EditPostModal.propTypes = {
    children: PropTypes.node.isRequired
}