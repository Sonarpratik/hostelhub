import React from 'react';
import { Navigate } from 'react-router-dom';

const Check = ({children}) => {
    return localStorage.getItem("inputvalue")==="donea"?children:<Navigate to="/login"/>;
}

export default Check;
