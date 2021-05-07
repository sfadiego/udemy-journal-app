/**
 * Store - contendra todo el arbol de reducer y funciones
 */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
//peticiones asincronas
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { notesReducer } from '../reducers/notesReducer';
import { uiReducer } from '../reducers/uiReducer';

//Store Solo recibe un reducer - combinereducers ayuda a usar varios reducers
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes:notesReducer
})

//para usar thunk - peticiones asyncronas con middleware
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )

);