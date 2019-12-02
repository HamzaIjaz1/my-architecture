import React, { useContext } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext/AuthContext';

const DefaultComponent = () => {
    const authValues = useContext(AuthContext);
    return (
        <div>
            {authValues.checkAuthentication() ? <Redirect to='/Login' /> : <NavLink to="/login">Go to Login page</NavLink>}
        </div>
    );

}

export default DefaultComponent;