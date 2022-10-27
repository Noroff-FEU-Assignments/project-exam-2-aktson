import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from '../components/context/AuthContext';


function AuthenticatedRoute() {
    const { auth } = React.useContext(AuthContext);

    return auth ? <Outlet /> : <Navigate to="/sign-in" />
}

export default AuthenticatedRoute