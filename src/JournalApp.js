import React from 'react'
import { AppRouter } from './routers/AppRouter'

//Similar al context de React = HOC
import { Provider } from "react-redux";
import { store } from './store/store';

export const JournalApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}

