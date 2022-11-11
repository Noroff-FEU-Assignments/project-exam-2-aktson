import React from 'react'
import useAxios from './useAxios';

function useFetch(url) {

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState([]);

    const http = useAxios();

    React.useEffect(() => {

        const fetchUser = async () => {
            setIsLoading(true)
            try {
                const response = await http.get(url)
                setData(response.data)

            } catch (error) {
                console.log(error)
                setError("Something went wrong")

            } finally {
                setIsLoading(false)
            }
        }
        fetchUser()
    }, [])

    return { data, isLoading, error }

}

export default useFetch