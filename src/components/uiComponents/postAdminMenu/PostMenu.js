import React from 'react';
import PropTypes from "prop-types";
import DeletePost from './DeletePost';
import EditPost from '../modals/editpost/EditPost';
import { MdMoreVert } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";


function PostMenu({ adminPost }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleMenuClick = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <div className='relative'  >
                <MdMoreVert size={22} className="cursor-pointer text-grey" onClick={handleMenuClick} />
                {isOpen &&
                    <AnimatePresence>
                        <motion.div
                            className='flex flex-col gap-1 shadow-xl rounded-xl p-2 bg-lightGray absolute right-3'
                            initial={{ translateY: 20, }}
                            animate={{ translateY: 0, }}
                            exit={{ translateY: 20 }}
                            transition={{ duration: 0.1 }}
                        >
                            <DeletePost id={adminPost.id} />
                            <EditPost adminPost={adminPost} setIsOpen={setIsOpen} />
                        </motion.div>
                    </AnimatePresence>
                }
            </div>
        </>
    );
}

export default PostMenu;


PostMenu.propTypes = {
    adminPost: PropTypes.object.isRequired
}