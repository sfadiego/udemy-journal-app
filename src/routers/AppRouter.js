import React, { useEffect, useState } from 'react'
import { firebase } from "../firebase/firebase-config";
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouters } from './AuthRouters'
import { useDispatch } from 'react-redux';
import { login } from '../components/actions/auth';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes } from '../components/actions/notes';

export const AppRouter = () => {
    const dispatch = useDispatch()
    const [checking, setChecking] = useState(true)
    const [isloggedIn, setIsloggedIn] = useState(false)
    useEffect(() => {
        // regresa un observador, que vigila el estado de la session
        firebase
            .auth()
            .onAuthStateChanged(async (user) => {
                if (user?.uid) {
                    setIsloggedIn(true)
                    dispatch(login(user.uid, user.displayName))
                    const notes = await loadNotes(user.uid);
                    dispatch(setNotes(notes));
                } else {
                    setIsloggedIn(false)
                }
            })
        setChecking(false)

    }, [dispatch, checking])

    if (checking) {
        return (
            <h1>Please wait ...</h1>
        )
    }

    return (
        <Router>
            <Switch>
                <PublicRouter
                    path='/auth'
                    component={AuthRouters}
                    isAuthenticated={isloggedIn}
                />
                <PrivateRouter
                    exact
                    isAuthenticated={isloggedIn}
                    path='/'
                    component={JournalScreen}
                />
                <Redirect to="/auth/login"></Redirect>
            </Switch>
        </Router>
    )
}
