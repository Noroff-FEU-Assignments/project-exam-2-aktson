import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from '../context/AuthContext';


function AuthenticatedRoute() {
    const { auth } = React.useContext(AuthContext);

    return auth ? <Outlet /> : <Navigate to="/" />
}

export default AuthenticatedRoute