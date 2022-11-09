import React from "react";
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";
import { MdOutlineEmojiEmotions } from "react-icons/md"

function EmojiInput() {


    const handleEmojiClick = (event) => {

    }
    return (
        <Menu
            placement="bottom-start" animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
            }}>
            <MenuHandler>
                <Button className="bg-primary flex items-center gap-2 w-full justify-center" size="sm" >
                    <MdOutlineEmojiEmotions size={22} />
                    react
                </Button>
            </MenuHandler>
            <MenuList className="flex text-2xl p-0 border-none">
                <MenuItem data-id={"&#128077;"} onClick={handleEmojiClick}>&#128077;</MenuItem>
                <MenuItem data-id={"&#128151;"} onClick={handleEmojiClick}>&#128151;</MenuItem>
                <MenuItem data-id={"&#128514;"} onClick={handleEmojiClick}>&#128514;</MenuItem>
                <MenuItem data-id={"&#128545;"} onClick={handleEmojiClick}>&#128545;</MenuItem>
            </MenuList>
        </Menu>
    );
}

export default EmojiInput;