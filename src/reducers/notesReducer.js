import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }
        case types.notesUpdated:
            return {
                ...state,
                notes: state.notes.map(
                    item => item.id === action.payload.id
                        ? action.payload.note
                        : item
                )
            }
        case types.notesDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter(item => item.id !== action.payload)
            }

        case types.notesLogOutCleaning:
            return {
                ...state,
                active: null, notes: []
            }

        default: return state;
    }
}