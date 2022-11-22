import React from 'react'
import PropTypes from "prop-types"
import ReactDom from "react-dom";
import ModalContext from "../../../context/ModalContext";


function EditPostModal({ children }) {

    const { closeEditPostModal, isEditPostModalOpen } = React.useContext(ModalContext)

    if (!isEditPostModalOpen) return null;

    return ReactDom.createPortal(
        <div className="modal" aria-hidden="true" id="my-modal">
            <div className="modal-overlay" onClick={closeEditPostModal} />
            {children}
        </div>,
        document.getElementById("editPost-portal")
    )
}

export default EditPostModal;


EditPostModal.propTypes = {
    children: PropTypes.node.isRequired
}