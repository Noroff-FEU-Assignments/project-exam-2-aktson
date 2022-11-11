import React from 'react'
import PropTypes from "prop-types"
import ReactDom from "react-dom";
import ModalContext from "../../../context/ModalContext";


function EditProfileModal({ children }) {

    const { isEditProfileOpen, closeEditProfileModal } = React.useContext(ModalContext)

    if (!isEditProfileOpen) return null;

    return ReactDom.createPortal(
        <div className="p-2 md:flex justify-center items-center relative backdrop-blur-sm" aria-hidden="true" id="my-modal">
            <div className="w-full h-full hidden sm:block backdrop-opacity-40 bg-dark/70"
                id="overlay"
                style={{ zIndex: "50" }}
                onClick={closeEditProfileModal}>
            </div>
            {children}
        </div>,
        document.getElementById("editProfile-portal")
    )
}

export default EditProfileModal;

EditProfileModal.propTypes = {
    children: PropTypes.node.isRequired
}