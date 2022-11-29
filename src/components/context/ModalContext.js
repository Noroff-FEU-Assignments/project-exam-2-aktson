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

    // edit profile modal
    const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
    const openEditAvatarModal = () => {
        setIsEditAvatarOpen(true);
        setOverFlow("hidden")
    }


    const closeEditAvatarModal = () => {
        setIsEditAvatarOpen(false);
        setOverFlow("auto")
    }

    // edit banner modal
    const [isEditBannerOpen, setIsEditBannerOpen] = React.useState(false);
    const openEditBannerModal = () => {
        setIsEditBannerOpen(true);
        setOverFlow("hidden")
    }


    const closeEditBannerModal = () => {
        setIsEditBannerOpen(false);
        setOverFlow("auto")
    }



    return (
        <ModalContext.Provider
            value={{
                isEditPostModalOpen, openEditPostModal, closeEditPostModal,
                isCreatePostOpen, openCreatePostModal, closeCreatePostModal,
                isEditAvatarOpen, openEditAvatarModal, closeEditAvatarModal,
                isEditBannerOpen, openEditBannerModal, closeEditBannerModal,
            }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext