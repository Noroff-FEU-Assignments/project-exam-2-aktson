import React from 'react';
import PropTypes from "prop-types";
import { PROFILES_URL } from '../../../constants/api';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { editProfileSchema } from "../../../yupSchema/editProfileSchema";
import { Button, IconButton, Input } from "@material-tailwind/react";
import { MdBorderColor, MdClear, MdImage, MdCached } from "react-icons/md"
import ModalContext from '../../../context/ModalContext';
import AuthContext from '../../../context/AuthContext';
import EditProfileModal from './EditProfileModal';
import Form from '../Form';
import ErrorSpan from '../../ErrorSpan';
import useAxios from '../../../hooks/useAxios';
import { toast } from 'react-toastify';
import AdminContext from '../../../context/AdminContext';


function EditProfile({ adminUser }) {

    const { openEditProfileModal, closeEditProfileModal } = React.useContext(ModalContext);
    const { auth, setAuth } = React.useContext(AuthContext);
    const { admin, setAdmin } = React.useContext(AdminContext)

    const [isSubmitting, setIsSubmitting] = React.useState(false);

    // react hook form and yup schema
    const { handleSubmit, register, formState: { errors }, watch } =
        useForm({
            resolver: yupResolver(editProfileSchema),
            defaultValues: {
                banner: adminUser?.banner,
                avatar: adminUser?.avatar,
            }
        });


    const http = useAxios();
    const url = `${PROFILES_URL}/${adminUser?.name}/media`;

    const editedFormData = watch();
    const authCopy = { ...auth, avatar: editedFormData.avatar, banner: editedFormData.banner }

    const handleEditProfileSubmit = async () => {
        setIsSubmitting(true)

        try {
            const response = await http.put(url, editedFormData);

            if (response) {
                closeEditProfileModal();
                setAdmin({ ...admin, avatar: response.data.avatar, banner: response.data.banner })
                setAuth(authCopy)
                toast.success("Profile updated!")
            }

        } catch (error) {
            console.log(error)
            toast.error("Could not update profile")

        } finally {
            setIsSubmitting(false)
        }
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
                <Form >
                    <div className='flex justify-between items-center mb-4' >
                        <h2>Update Profile</h2>
                        <IconButton variant="text" className='text-grey' onClick={closeEditProfileModal}>
                            <MdClear size={24} />
                        </IconButton>
                    </div>
                    <fieldset className='flex flex-col gap-6 p-2' disabled={isSubmitting}>
                        <div>
                            <Input
                                {...register("avatar")}
                                label="Avatar URL"
                                size="lg"
                                variant="standard"
                                color="cyan"
                                icon={<MdImage size={20} />} />
                            {errors.avatar && <ErrorSpan message={errors.avatar.message} />}
                        </div>
                        <div>
                            <Input
                                {...register("banner")}
                                label="Banner URL"
                                size="lg"
                                variant="standard"
                                color="cyan"
                                icon={<MdImage size={20} />} />
                            {errors.banner && <ErrorSpan message={errors.banner.message} />}
                        </div>
                        <div className='flex justify-end mt-4'>
                            <Button onClick={handleSubmit(handleEditProfileSubmit)} color="cyan" className="flex gap-2 items-center btn">
                                {isSubmitting && <MdCached className="animate-spin" size={20} />}
                                Update
                            </Button>
                        </div>
                    </fieldset>
                </Form>
            </EditProfileModal>
        </>
    )
}

export default EditProfile

EditProfile.propTypes = {
    adminUser: PropTypes.object.isRequired
}