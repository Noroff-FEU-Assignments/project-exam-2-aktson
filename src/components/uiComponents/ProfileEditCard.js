import React from 'react'
import { Typography, Input, Button } from "@material-tailwind/react";
import { MdBorderColor, MdCheck } from "react-icons/md";

function ProfileEditCard() {

    const [changeDetails, setChangeDetails] = React.useState(false)

    const handleSubmit = () => {
        console.log("ankit")
    }
    return (
        <div className='card '>
            <div className='flex justify-between'>
                <h2>Personal Details</h2>
                <Button variant="text" onClick={() => {
                    changeDetails && handleSubmit()
                    setChangeDetails((prevState) => !prevState)
                }}>
                    {!changeDetails ?
                        <MdBorderColor size={24} className="text-primary" />
                        : <MdCheck size={24} className="text-primary" />}
                </Button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='my-6'>
                    <Input variant="standard" label="Name" color="cyan" disabled={!changeDetails} />
                </div>
                <div className='my-6'>
                    <Input variant="standard" label="Email" color="cyan" disabled />
                </div>
            </form>
        </div>
    )
}

export default ProfileEditCard