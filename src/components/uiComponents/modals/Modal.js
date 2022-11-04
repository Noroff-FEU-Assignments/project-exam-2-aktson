import React from 'react'
import ReactDom from "react-dom";
import ModalContext from "../../context/ModalContext";


function Modal({ children }) {

    const { closeModal, openEditModal } = React.useContext(ModalContext)

    if (!openEditModal) return null;


    return ReactDom.createPortal(
        <div className="p-2 md:flex justify-center items-center relative backdrop-blur-sm" aria-hidden="true" id="my-modal">
            <div className="w-full h-full hidden sm:block backdrop-opacity-40 bg-dark/70" id="overlay" style={{ zIndex: "50" }} onClick={closeModal}></div>
            {children}
        </div>,
        document.getElementById("custom-portal")
    )
}

export default Modal