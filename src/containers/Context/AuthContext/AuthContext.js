import React from 'react';

const defaultAuthContext = {
    isAuthenticated: false,
    authenticateUser: (token, permissions) => { },
    logoutUser: () => { },
    checkAuthentication: () => false,
    authenticateRoute: (permission) => false
}
export const AuthContext = React.createContext(defaultAuthContext);
export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;