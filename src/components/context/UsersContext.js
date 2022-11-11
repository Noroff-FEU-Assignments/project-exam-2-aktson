import React from 'react'
import { GET_PROFILES_URL } from '../constants/api';
import useAxios from '../hooks/useAxios';
import AuthContext from './AuthContext';


const UsersContext = React.createContext();

export function UsersProvider({ children }) {
    const { auth } = React.useContext(AuthContext)

    const [users, setUsers] = React.useState([]);
    const [updateUi, setUpdateUi] = React.useState(GET_PROFILES_URL)
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);


    const http = useAxios();

    const fetchUsers = async () => {
        if (auth) {
            setIsLoading(true)

            try {
                const response = await http.get(GET_PROFILES_URL)

                if (response) {
                    setUsers(response.data)
                }

            } catch (error) {
                console.log(error)
                setError("Unknown error occured")

            } finally {
                setIsLoading(false)
            }
        }

    }

    React.useEffect(() => {

        fetchUsers();

    }, [updateUi, auth])
    return (
        <UsersContext.Provider value={{ users, setUsers, isLoading, error, setUpdateUi }}>{children}</UsersContext.Provider>
    )
}

export default UsersContext