import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAdmin from '../../hooks/useAdmin';
import Spinner from '../Shared/Spinner/Spinner';

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    if(loading || isAdminLoading){
        return <Spinner></Spinner>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/' state={{from: location}}></Navigate>
};

export default AdminRoute;