import React from 'react';
import { AuthConsumer } from '../Context/AuthContext/AuthContext';

import { withRouter } from 'react-router-dom';


const SignUp = ({ history }) => {
    const signUpUser = (authenticate) => {
        const permissions = [
            "user_permission",
            "other_permission"
        ]
        authenticate('w1w2w3w4w5', permissions);
        history.push('/users');
    }
    return (
        <AuthConsumer>
            {auth =>
                <p onClick={() => signUpUser(auth.authenticateUser)} style={{ cursor: 'pointer' }}>Click to complete Sign up</p>
            }

        </AuthConsumer>
    );
}

export default withRouter(SignUp);