import React from 'react';
import DeletePost from '../pages/DeletePost';
import EditPost from '../pages/EditPost';
import { MdMoreVert } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";



function SinglePostMenu({ adminPost }) {
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
                        initial={{ translateY: -10, }}
                        animate={{ translateY: 0, }}
                        exit={{ translateY: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <DeletePost adminPost={adminPost} />
                        <EditPost adminPost={adminPost} />
                    </motion.div>
                </AnimatePresence>
            }
        </div>
    );
}

export default SinglePostMenu;