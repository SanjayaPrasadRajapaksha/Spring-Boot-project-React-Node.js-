import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {
    const { isAuthenticated } = useAuth();


    if (isAuthenticated) {
        return <Outlet />
    } else {
        return (<Navigate to='/login' />)

    }


}

export default ProtectedRoutes