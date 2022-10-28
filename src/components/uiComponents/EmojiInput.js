import React from "react";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { MdOutlineEmojiEmotions } from "react-icons/md"

function EmojiInput() {

    const [value, setValue] = React.useState("");


    const handleEmojiClick = (event) => {
        const id = event.target.dataset.id
        console.log(id)
    }
    return (
        <Menu
            placement="bottom-start" animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
            }}>
            <MenuHandler>
                <div className='flex gap-1 items-center'>
                    <MdOutlineEmojiEmotions size={22} />
                    <p>Emoji</p>
                </div>
            </MenuHandler>
            <MenuList className="flex text-2xl">
                <MenuItem data-id={1} onClick={handleEmojiClick}>&#128512;</MenuItem>
                <MenuItem data-id={2} onClick={handleEmojiClick}>&#128525;</MenuItem>
                <MenuItem data-id={3} onClick={handleEmojiClick}>&#128151;</MenuItem>
            </MenuList>
        </Menu>
    );
}

export default EmojiInput;