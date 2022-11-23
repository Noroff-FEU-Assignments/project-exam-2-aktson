import React from 'react'
import AuthContext from '../context/AuthContext';
import useAxios from './useAxios';
import { useNavigate } from "react-router-dom";

function useFetch(url) {

    const navigate = useNavigate();

    const { auth } = React.useContext(AuthContext)

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState([]);

    const http = useAxios();

    React.useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await http.get(url)
                setData(response.data)

            } catch (error) {
                console.log(error)
                setError("Failed to fetch")

            } finally {
                setIsLoading(false)
            }
        }
        if (auth) {
            fetchData()
        }

    }, [navigate])

    return { data, isLoading, error }

}

export default useFetch