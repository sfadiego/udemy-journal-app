
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';

export const startNewNotes = () => {
    //dispatch, state => propios del midleware 
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        // const doc = db.collection(`${uid}/journal`)
        const doc = await db.collection(`journal`).add(newNote)
        dispatch(activeNote(doc.id, newNote))
    }
}


export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
})