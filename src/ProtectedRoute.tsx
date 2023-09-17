import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ element }) {
    const isLogged = localStorage.getItem('isLogged') === 'true';

    if (isLogged) {
        return element;
    } else {
        return <Navigate to="/" replace />;
    }
}
