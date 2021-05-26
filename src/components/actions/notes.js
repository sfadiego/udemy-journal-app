
import Swal from 'sweetalert2'
import { db } from '../../firebase/firebase-config';
import { loadNotes } from '../../helpers/loadNotes';
import { types } from '../../types/types';

export const startNewNotes = () => {
    //dispatch, state => propios del midleware 
    return async (dispatch, getState) => {
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

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

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
})

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth // verificar como se guarda por usuarios
        const noteToFireStore = { ...note };
        delete noteToFireStore.id;
        await db.doc(`journal/${note.id}`).update(noteToFireStore);
        dispatch(refreshNote(note.id, note));
        Swal.fire('saved', note.title, 'success')
    }
}


export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
})