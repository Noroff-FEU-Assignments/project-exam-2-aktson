import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import Loader from './uiComponents/Loader';


function AuthenticatedRoute() {

    const signedIn = false;

    const checkingStatus = false;
    if (checkingStatus) {
        return <Loader />

    }

    return signedIn ? <Outlet /> : <Navigate to="/sign-in" />
}

export default AuthenticatedRoute