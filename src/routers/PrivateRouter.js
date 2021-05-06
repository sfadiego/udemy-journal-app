import React from 'react'
import { Redirect, Route } from 'react-router'

export const PrivateRouter = ({
    isAuthenticated,
    component: Component,
    ...allRouteProps
}) => {
    return (
        <Route
            {...allRouteProps}
            component={(props) => isAuthenticated ?
                <Component {...props} /> :
                <Redirect to='/auth/login' />
            }
        />
    )
}
