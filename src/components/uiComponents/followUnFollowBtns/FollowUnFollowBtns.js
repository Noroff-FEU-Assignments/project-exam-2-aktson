import React from 'react'
import useAxios from '../../hooks/useAxios';
import { Button } from "@material-tailwind/react";
import { toast } from 'react-toastify';
import UsersContext from '../../context/UsersContext';
import AdminContext from "../../context/AdminContext"
import AuthContext from '../../context/AuthContext';

function FollowUnFollowBtns({ user }) {

    const http = useAxios();
    const { auth } = React.useContext(AuthContext);
    const { admin } = React.useContext(AdminContext);
    const { setUpdateUsersUi } = React.useContext(UsersContext);


    const [isfollowing, setIsFollowing] = React.useState(false)
    const [submitting, setIsSubmitting] = React.useState(false)

    React.useEffect(() => {

        if (auth) {
            const findUser = admin.following && admin?.following.find(adminFollowing => adminFollowing?.name === user?.name);

            if (!findUser) {
                return;
            } else {
                setIsFollowing(true);
            }
        }

    }, [auth])




    const handleFollow = async () => {
        const url = `/api/v1/social/profiles/${user.name}/follow`;
        const findUser = admin.following.find(adminFollowing => adminFollowing.name === user.name)

        if (findUser) return;

        else {
            setIsSubmitting(true)
            try {
                const response = await http.put(url)

                if (response) {
                    setIsFollowing(true)
                    setUpdateUsersUi(response.data)
                }

            } catch (error) {
                console.log(error)
                toast.error("Something went wrong")
            } finally {
                setIsSubmitting(false)
            }
        }
    }

    const handleUnFollow = async () => {
        const url = `/api/v1/social/profiles/${user.name}/unfollow`;

        setIsSubmitting(true);
        try {
            const response = await http.put(url)

            if (response) {
                setIsFollowing(false)
                setUpdateUsersUi(response.data)
            }

        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")

        } finally {
            setIsSubmitting(false)
        }


    }


    return (
        <>
            {!isfollowing && <Button color='cyan' className='w-auto' onClick={handleFollow} disabled={submitting}>Follow</Button>}
            {isfollowing && <Button color='cyan' className='w-auto' onClick={handleUnFollow} disabled={submitting}>Unfollow</Button>}
        </>
    )
}

export default FollowUnFollowBtns