import React from 'react'
import PropTypes from 'prop-types';
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

PublicRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};