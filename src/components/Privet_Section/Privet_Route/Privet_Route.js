import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { adminContext } from '../../../App';

const Privet_Route = ({ children }) => {
    const [isAdmin, setIsAdmin] = useContext(adminContext)
    const location = useLocation()

    return isAdmin.isAdmin ? children : <Navigate to="/login" state={{ from: location }} replace />;

};

export default Privet_Route;