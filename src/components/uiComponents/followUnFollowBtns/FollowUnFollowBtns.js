import React from 'react'
import useAxios from '../../hooks/useAxios';
import { Button } from "@material-tailwind/react";
import { toast } from 'react-toastify';
import AdminContext from '../../context/AdminContext';

function FollowUnFollowBtns({ user }) {

    const http = useAxios();

    const [isfollowing, setIsFollowing] = React.useState(false)
    const [submitting, setIsSubmitting] = React.useState(false)
    const [following, setFollowing] = React.useState([])

    const handleFollow = async () => {
        const url = `/api/v1/social/profiles/${user.name}/follow`;
        setIsSubmitting(true)

        try {
            const response = await http.put(url)
            console.log(response)
            if (response) {
                setIsFollowing(true)
                setIsFollowing(response.data)
            }

        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")

        }
        finally {
            setIsSubmitting(false)
        }
    }
    const handleUnFollow = async () => {
        const url = `/api/v1/social/profiles/${user.name}/unfollow`;
        setIsSubmitting(true)

        try {

            const response = await http.put(url)
            console.log(response)
            if (response) {
                setIsFollowing(true)
                setIsFollowing(response.data)
            }

        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")

        } finally {
            setIsSubmitting(true)
        }
    }
    console.log(following)
    return (
        <>
            {!isfollowing && <Button color='cyan' className='w-auto' onClick={handleFollow} disabled={submitting}>Follow</Button>}
            {isfollowing && <Button color='cyan' className='w-auto' onClick={handleUnFollow} disabled={submitting}>Unfollow</Button>}
        </>
    )
}

export default FollowUnFollowBtns