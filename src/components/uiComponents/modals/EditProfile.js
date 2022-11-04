import React from 'react';
import { Button } from "@material-tailwind/react";
import { MdBorderColor, MdCheck } from "react-icons/md"

function EditProfile() {

    const [changeDetails, setChangeDetails] = React.useState(false)

    const handleSubmit = () => {
        console.log("ankit")
    }

    return (
        <Button
            color="cyan"

            className='flex gap-2 items-center'
            onClick={() => {
                changeDetails && handleSubmit()
                setChangeDetails((prevState) => !prevState)
            }}>
            {!changeDetails ?
                <MdBorderColor size={18} />
                : <MdCheck size={18} />}
            Edit profile
        </Button>

        //    <div className='my-6'>
        //            <Input variant="standard" label="Name" color="cyan" disabled={!changeDetails} />
        //     </div> 


    )
}

export default EditProfile