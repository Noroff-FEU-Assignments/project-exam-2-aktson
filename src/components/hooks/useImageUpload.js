import React from 'react'
import { CLOUD_KEY, CLOUD_NAME } from '../constants/api';
import axios from 'axios';


async function useImageUpload(file, setImageUrl) {
    const [isSubmitting, setIsSubmitting] = React.useState(false)

    setIsSubmitting(true)

    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

    try {
        const formdata = new FormData();

        formdata.append("file", file)
        formdata.append("upload_preset", CLOUD_KEY)
        formdata.append("folder", "social_app")

        const response = await axios.post(url, formdata)

        if (response.data.url) {
            setImageUrl(response.data.url)
        }

    } catch (error) {
        console.log(error)
        // setError("Could not upload image")

    } finally {
        setIsSubmitting(false)
    }

}

export default useImageUpload