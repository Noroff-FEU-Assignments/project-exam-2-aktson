import React from 'react'
import { Typography, Input, Button } from "@material-tailwind/react";
import { MdBorderColor, MdCheck } from "react-icons/md";


function MyProfile() {

    const [changeDetails, setChangeDetails] = React.useState(false)

    const handleSubmit = () => {
        console.log("ankit")
    }

    return (
        <section className='my-20 '>
            <div className='card'>
                <Typography variant="h2" className="text-center mb-8">My Profile</Typography>
                <div className='flex justify-between'>
                    <Typography variant="h3">Personal Details</Typography>
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
        </section>
    )
}

export default MyProfile