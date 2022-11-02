import React from 'react';


const ModalContext = React.createContext();

export function ModalProvider({ children }) {

    const [sizeEditPost, setSizeEditPost] = React.useState(null);
    const [sizeCreatePost, setSizeCreatePost] = React.useState(null);


    const handleCreatePost = (value) => setSizeCreatePost(value);

    const handleEditPost = (value) => setSizeEditPost(value);

    const [openEditModal, setOpenEditModal] = React.useState(false);

    let viewportWidth = window.innerWidth;

    function openModal() {
        setOpenEditModal(true);
        // if (viewportWidth >= "769") {
        //     document.body.style.overflow = "hidden";
        // }
    }


    function closeModal() {
        setOpenEditModal(false);
        // if (viewportWidth >= "769") {
        //     document.body.style.overflow = "auto";
        // }
    }

    return (
        <ModalContext.Provider
            value={{ handleEditPost, handleCreatePost, sizeCreatePost, sizeEditPost, openEditModal, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext