import React from 'react'
import useAxios from '../hooks/useAxios';



const UsersContext = React.createContext();

export function UsersProvider({ children }) {

    const [users, setUsers] = React.useState([]);
    const [updateUi, setUpdateUi] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const url = "/api/v1/social/profiles?_following=true&_followers=true";

    const http = useAxios();

    const fetchPosts = async () => {
        setIsLoading(true)

        try {
            const response = await http.get(url)

            if (response) {
                setUsers(response.data)
            }

        } catch (error) {
            console.log(error)
            setError(error)

        } finally {
            setIsLoading(false)
        }
    }


    React.useEffect(() => {

        fetchPosts();

    }, [updateUi])
    return (
        <UsersContext.Provider value={{ users, setUsers, isLoading, error, setUpdateUi }}>{children}</UsersContext.Provider>
    )
}

export default UsersContext