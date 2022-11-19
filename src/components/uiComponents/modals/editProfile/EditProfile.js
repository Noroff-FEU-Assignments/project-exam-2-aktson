import React from 'react';
import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";
import { MdBorderColor } from "react-icons/md"
import { AnimatePresence, motion } from 'framer-motion';
import EditAvatar from './editAvatar/EditAvatar';
import EditBanner from './editBanner/EditBanner';


function EditProfile() {

    const [isOpen, setIsOpen] = React.useState(false);

    const handleMenuClick = () => {
        setIsOpen((prevState) => !prevState)
    }
    // const handleClickOutside = () => {
    //     setIsOpen(false)
    // };
    // const ref = useOutsideClick(handleClickOutside);

    return (
        <>

            <div className='relative'
            >
                <Button
                    color=""
                    className='flex gap-2 items-center bg-accent'
                    onClick={handleMenuClick}

                >
                    <MdBorderColor size={18} />
                    Edit profile
                </Button>


                {isOpen &&
                    <AnimatePresence>
                        <motion.div
                            className='flex flex-col gap-1 shadow-xl rounded-xl  absolute left-0 -bottom-24 bg-lightGray p-2'
                            initial={{ translateY: 20, }}
                            animate={{ translateY: 0, }}
                            exit={{ translateY: 20 }}
                            transition={{ duration: 0.1 }}
                        >
                            <EditAvatar />
                            <EditBanner />
                        </motion.div>
                    </AnimatePresence>
                }
            </div>


        </>
    )
}

export default EditProfile

EditProfile.propTypes = {
    adminUser: PropTypes.object.isRequired
}