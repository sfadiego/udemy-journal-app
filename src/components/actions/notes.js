
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

export const startSaveNote = (nota) => {
    return async(dispatch, getState) => {
        const auth  = getState().auth
        const noteToFireStore = { ...nota };
        delete noteToFireStore.id;
        const url = `/journal/${nota.id}`;
        console.log(auth, url);
        // await db.doc(url).update(noteToFireStore);
        // console.log("start save", noteToFireStore);
        // delete noteToFireStore.id
    }
}