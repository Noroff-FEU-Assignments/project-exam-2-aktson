import React from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

function useAxios() {

    const url = process.env.REACT_APP_BASE_URL;

    const { auth } = React.useContext(AuthContext);

    const apiClient = axios.create({ baseURL: url });

    apiClient.interceptors.request.use(config => {
        const token = auth.accessToken;
        config.headers.Authorization = token ? `Bearer ${token}` : "";
        return config;
    })
    return (
        apiClient

    )
}

export default useAxios