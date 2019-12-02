import React, { useState } from 'react';
import { AuthProvider } from './AuthContext';
import { withRouter } from 'react-router';
import { TOKEN, PERMISSIONS } from '../../Enums/StorageEnums';


const AuthContextContainer = ({ children }) => {
    const defaultAuthState = {
        isAuthenticated: false,
        token: '',
    }

    const [state, setState] = useState(defaultAuthState);

    const authenticateUser = (token, permissions) => {
        localStorage.setItem(TOKEN, token);
        localStorage.setItem(PERMISSIONS, JSON.stringify(permissions));
        setState(prev => {
            return {
                ...prev,
                isAuthenticated: true,
                token: token
            }
        })
    }

    const logoutUser = () => {
        localStorage.removeItem(TOKEN);
        setState(prev => {
            return {
                ...prev,
                isAuthenticated: false,
            }
        });
    }

    const checkAuthentication = () => {
        let token = localStorage.getItem(TOKEN);
        if (token) {
            return true;
        }
        return false;
    }

    const authenticateRoute = (permission) => {
        let user = checkAuthentication();
        let claims = localStorage.getItem(PERMISSIONS);

        if (user) {
            if (claims.includes(permission)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    return (
        <AuthProvider
            value={{
                isAuthenticated: state.isAuthenticated,
                authenticateUser,
                logoutUser,
                checkAuthentication,
                authenticateRoute
            }}>
            {children}
        </AuthProvider>
    );
}

export default withRouter(AuthContextContainer);