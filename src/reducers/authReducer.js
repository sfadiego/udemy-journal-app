/*
 * 
 * @param {state} state 
 * @param {action} action 
 */

import { types } from "../types/types";

//delega las peticiones para modificar el STATE mediante el ACTION
//Las acciones describen que algo pasó, pero no especifican 
//cómo cambió el estado de la aplicación en respuesta. Esto es trabajo de los REDUCERS.

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return {

            }
        default:
            return {}
    }
}