import React, { useContext } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAdmin from '../../hooks/useAdmin';
import Spinner from '../Shared/Spinner/Spinner';

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useAuth()
    const location = useLocation()
    if(loading){
        return <Spinner></Spinner>
    }
    if(user ){
        return children
    }
    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoute;