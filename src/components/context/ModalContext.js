import React from 'react';

const ModalContext = React.createContext();

export function ModalProvider({ children }) {

    const [overflow, setOverFlow] = React.useState("auto")

    document.body.style.overflow = overflow;

    // edit post modal
    const [isEditPostModalOpen, setIsEditPostModalOpen] = React.useState(false);
    const openEditPostModal = () => {
        setIsEditPostModalOpen(true);
        setOverFlow("hidden")
    }

    const closeEditPostModal = () => {
        setIsEditPostModalOpen(false);
        setOverFlow("auto")
    }


    // edit profile modal
    const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
    const openEditProfileModal = () => {
        setIsEditProfileOpen(true);
        setOverFlow("hidden")
    }


    const closeEditProfileModal = () => {
        setIsEditProfileOpen(false);
        setOverFlow("auto")
    }



    // create post modal
    const [isCreatePostOpen, setIsCreatePostOpen] = React.useState(false);
    const openCreatePostModal = () => {
        setIsCreatePostOpen(true);
        setOverFlow("hidden")
    }

    const closeCreatePostModal = () => {
        setIsCreatePostOpen(false);
        setOverFlow("auto")
    }



    return (
        <ModalContext.Provider
            value={{
                isEditPostModalOpen, openEditPostModal, closeEditPostModal,
                isEditProfileOpen, openEditProfileModal, closeEditProfileModal,
                isCreatePostOpen, openCreatePostModal, closeCreatePostModal,
            }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext