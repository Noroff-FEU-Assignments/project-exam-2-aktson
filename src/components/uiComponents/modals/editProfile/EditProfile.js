import React from 'react';
import PropTypes from "prop-types";
import { Button, } from "@material-tailwind/react";
import { MdBorderColor } from "react-icons/md"
import ModalContext from '../../../context/ModalContext';
import EditAvatar from './editAvatar/EditAvatar';
import EditBanner from './editBanner/EditBanner';



function EditProfile() {

    const { openEditProfileModal } = React.useContext(ModalContext);

    return (
        <>
            <Button
                color="cyan"
                className='flex gap-2 items-center'
                onClick={openEditProfileModal}>
                <MdBorderColor size={18} />
                Edit profile
            </Button>
            <EditAvatar />
            <EditBanner />
        </>
    )
}

export default EditProfile

EditProfile.propTypes = {
    adminUser: PropTypes.object.isRequired
}