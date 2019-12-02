import React, { Suspense, useContext } from 'react';
import { Route, Switch } from 'react-router';
import { LOGIN_ROUTE, SIGN_UP_ROUTE, ERROR_ROUTE } from './constants';
import UserRouter from '../users/UserRoutes';
import { AuthContext } from '../Context/AuthContext/AuthContext';
const DefaultComponent = React.lazy(() => import('../DefaultComponent'));
const LoginComponent = React.lazy(() => import('../login/Login'));
const SignUpComponent = React.lazy(() => import('../signup/SignUp'));


export const Routes = () => {
    const context = useContext(AuthContext);

    const renderPrivateRoutes = (privateRoutes) => {
        return (
            <>
                {privateRoutes.map(route => (
                    <>
                        {context.authenticateRoute(route.permission) &&
                            <Route key={route.path} path={route.path} exact={true} component={route.component} />
                        }
                    </>
                ))}
            </>
        );
    }

    return (
        <Suspense fallback={<div>Loading</div>}>
            <Switch>
                <Route key={'/'} path={'/'} exact={true} component={DefaultComponent} />
                <Route key={LOGIN_ROUTE} path={LOGIN_ROUTE} exact={true} component={LoginComponent} />
                <Route key={LOGIN_ROUTE} path={SIGN_UP_ROUTE} exact={true} component={SignUpComponent} />
                <Route key={LOGIN_ROUTE} path={ERROR_ROUTE} exact={true} component={DefaultComponent} />
                {renderPrivateRoutes(UserRouter)}
            </Switch>
        </Suspense>
    );
}
