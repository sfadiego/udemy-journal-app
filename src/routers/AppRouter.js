import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouters } from './AuthRouters'

export const AppRouter = () => {
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
