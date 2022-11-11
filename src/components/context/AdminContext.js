import React from 'react'
import PropTypes from "prop-types";
import useAxios from '../hooks/useAxios';
import { GET_POSTS_URL, PROFILES_URL } from '../constants/api';
import AuthContext from './AuthContext';


const AdminContext = React.createContext();

export function AdminProvider({ children }) {
    const { auth } = React.useContext(AuthContext)

    const [adminPosts, setAdminPosts] = React.useState([]);
    const [admin, setAdmin] = React.useState({})
    const [updateAdminUi, setUpdateAdminUi] = React.useState(GET_POSTS_URL)
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const http = useAxios();

    const userPostsUrl = `${PROFILES_URL}/${auth.name}/posts?_author=true&_comments=true&_reactions=true`
    const userProfileUrl = `/api/v1/social/profiles/${auth.name}`;

    React.useEffect(() => {

        const fetchPosts = async () => {
            setIsLoading(true)

            try {
                const postResponse = await http.get(userPostsUrl)

                if (postResponse) {
                    setAdminPosts(postResponse.data)
                    setIsLoading(false)
                }


            } catch (error) {
                console.log(error)
                setError("Unknown error occured")
                setIsLoading(false)

            }
        }
        const fetchAdmin = async () => {
            setIsLoading(true)

            try {

                const profileResponse = await http.get(userProfileUrl)

                if (profileResponse) {
                    setAdmin(profileResponse.data)
                    setIsLoading(false)
                }

            } catch (error) {
                console.log(error)
                setError("Unknown error occured")
                setIsLoading(false)

            }
        }


        fetchPosts();
        fetchAdmin();

    }, [updateAdminUi, auth.name])



    return (
        <AdminContext.Provider value={{ adminPosts, setAdminPosts, admin, setAdmin, isLoading, error, setUpdateAdminUi }}>{children}</AdminContext.Provider>
    )
}

export default AdminContext

AdminProvider.propTypes = {
    children: PropTypes.node.isRequired
}