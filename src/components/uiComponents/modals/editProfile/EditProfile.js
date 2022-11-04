import React from 'react';
import { Button, IconButton, Input } from "@material-tailwind/react";
import { MdBorderColor, MdClear } from "react-icons/md"
import ModalContext from '../../../context/ModalContext';
import EditProfileModal from './EditProfileModal';



function EditProfile() {

    const { openEditProfileModal, closeEditProfileModal } = React.useContext(ModalContext)

    const handleSubmit = () => {
        console.log("ankit")
    }

    return (
        <>
            <Button
                color="cyan"
                className='flex gap-2 items-center'
                onClick={openEditProfileModal}>
                <MdBorderColor size={18} />
                Edit profile
            </Button>
            <EditProfileModal>
                <div className='form'>
                    <div className='flex justify-between items-center'>
                        <h2>Update Profile</h2>
                        <IconButton variant="text" className='text-grey' onClick={closeEditProfileModal}>
                            <MdClear size={24} />
                        </IconButton>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='my-6'>
                            <Input variant="standard" label="Name" color="cyan" />
                        </div>
                        <div className='my-6'>
                            <Input variant="standard" label="Email" color="cyan" />
                        </div>
                        <div className='flex justify-end'>
                            <Button color='cyan'>Update</Button>
                        </div>
                    </form>
                </div>
            </EditProfileModal>
        </>
    )
}

export default EditProfile