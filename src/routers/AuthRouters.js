import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { Redirect } from 'react-router-dom'

export const AuthRouters = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container animate__animated animate__fadeInLeftBig animate__faster">
                <Switch>
                    <Route path="/auth/login" component={LoginScreen}  ></Route>
                    <Route exact path="/auth/register" component={RegisterScreen}  ></Route>
                    <Redirect to="/auth/register"></Redirect>
                </Switch>
            </div>
        </div>
    )
}

