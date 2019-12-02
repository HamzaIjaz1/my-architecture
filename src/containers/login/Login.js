import React from 'react';
import { AuthConsumer } from '../Context/AuthContext/AuthContext';
import { withRouter } from 'react-router-dom';


const Login = (props) => {

    const permissions = [
        "user_permission",
        "other_permissions"
    ]

    const logOutUser = (token, logOut) => {
        logOut(token);
        props.history.replace('/');
    }
    const redirect = () => {
        props.history.push('/signup');
    }
    return (
        <AuthConsumer>
            {auth => {
                return (
                    <>
                        {
                            auth.checkAuthentication() ?
                                <div>Logged User
                                    <p onClick={() => logOutUser('wwxxgghh', auth.logoutUser)} style={{ cursor: 'pointer' }}>
                                        Click to Log out
                                    </p>
                                </div> :
                                <div>
                                    <p onClick={() => auth.authenticateUser("wwxxgghh", permissions)} style={{ cursor: 'pointer' }}>
                                        Click to Login
                                    </p>
                                    <br />
                                    <p>
                                        OR
                                    </p>
                                    <br />
                                    <p style={{ cursor: 'pointer' }} onClick={redirect}>
                                        Click to Sign up
                                    </p>
                                </div>
                        }
                    </>
                )
            }}
        </AuthConsumer>

    );
}

export default withRouter(Login);