import React from 'react';
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
        <div className='relative'>
            <MdMoreVert size={22} className="cursor-pointer text-grey" onClick={handleMenuClick} />
            {isOpen &&
                <AnimatePresence>
                    <motion.div
                        className='flex flex-col gap-1 shadow-xl rounded-xl p-2 bg-light absolute right-3'
                        initial={{ translateY: 20, }}
                        animate={{ translateY: 0, }}
                        exit={{ translateY: 20 }}
                        transition={{ duration: 0.1 }}
                    >
                        <DeletePost adminPost={adminPost} handleMenuClick={handleMenuClick} />
                        <EditPost adminPost={adminPost} handleMenuClick={handleMenuClick} />
                    </motion.div>
                </AnimatePresence>
            }
        </div>
    );
}

export default PostMenu;