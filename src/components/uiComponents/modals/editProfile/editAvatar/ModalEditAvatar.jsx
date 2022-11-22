import React from 'react'
import PropTypes from "prop-types"
import ReactDom from "react-dom";
import ModalContext from '../../../../context/ModalContext';


function ModalEditAvatar({ children }) {

    const { isEditAvatarOpen, closeEditAvatarModal } = React.useContext(ModalContext)

    if (!isEditAvatarOpen) return null;

    return ReactDom.createPortal(
        <div className="modal" aria-hidden="true" id="my-modal">
            <div className="modal-overlay" onClick={closeEditAvatarModal} />
            {children}
        </div>,
        document.getElementById("editAvatar-portal")
    )
}

export default ModalEditAvatar;

ModalEditAvatar.propTypes = {
    children: PropTypes.node.isRequired
}