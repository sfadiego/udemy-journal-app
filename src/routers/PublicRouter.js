import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

export const PublicRouter = ({
    isAuthenticated,
    component: Component,
    ...allRouteProps
}) => {
    return (
        <Route
            {...allRouteProps}
            component={(props) => {
                return isAuthenticated ?
                 <Redirect to='/' /> :
                <Component {...props} />
            }}
        />

    )
}
