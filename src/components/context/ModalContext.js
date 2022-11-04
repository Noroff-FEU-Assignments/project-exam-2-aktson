import React from 'react';

const ModalContext = React.createContext();

export function ModalProvider({ children }) {

    const [isEditPostModalOpen, setIsEditPostModalOpen] = React.useState(false);
    const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
    const [isCreatePostOpen, setIsCreatePostOpen] = React.useState(false);

    const [overflow, setOverFlow] = React.useState("auto")

    document.body.style.overflow = overflow;

    const openEditPostModal = () => {
        setIsEditPostModalOpen(true);
        setOverFlow("hidden")
    }

    const openEditProfileModal = () => {
        setIsEditProfileOpen(true);
        setOverFlow("hidden")
    }
    const openCreatePostModal = () => {
        setIsCreatePostOpen(true);
        setOverFlow("hidden")
    }

    const closeCreatePostModal = () => {
        setIsCreatePostOpen(false);
        setOverFlow("auto")
    }
    const closeEditPostModal = () => {
        setIsEditPostModalOpen(false);
        setOverFlow("auto")
    }
    const closeEditProfileModal = () => {
        setIsEditProfileOpen(false);
        setOverFlow("auto")
    }

    return (
        <ModalContext.Provider
            value={{
                isEditPostModalOpen, openEditPostModal, closeEditPostModal,
                isEditProfileOpen, openEditProfileModal, closeEditProfileModal,
                isCreatePostOpen, openCreatePostModal, closeCreatePostModal
            }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext