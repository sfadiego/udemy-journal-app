import React from 'react'
import PropTypes from 'prop-types'
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

PrivateRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}