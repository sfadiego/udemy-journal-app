import React, { useEffect, useState } from 'react'
import { firebase } from "../firebase/firebase-config";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouters } from './AuthRouters'
import { useDispatch } from 'react-redux';
import { login } from '../components/actions/auth';

export const AppRouter = () => {
    const dispatch = useDispatch()
    const [checking, setChecking] = useState(true)
    const [isloggedIn, setIsloggedIn] = useState(false)
    useEffect(() => {
        // regresa un observador, que vigila el estado de la session
        firebase
            .auth()
            .onAuthStateChanged((user) => {
                if (user?.uid) {
                    setIsloggedIn(true)
                    dispatch(login(user.uid, user.displayName))
                }else{
                    setIsloggedIn(false)
                }
            })
        setChecking(false)

    }, [dispatch, checking])

    if(checking){
        return (
            <h1>Cargando ...</h1>
        )
    }
    return (
        <Router>
            <Switch>
                <Route path="/auth" component={AuthRouters}  ></Route>
                <Route exact path="/" component={JournalScreen} ></Route>
                <Redirect to="/auth/register"></Redirect>
            </Switch>
        </Router>
    )
}
