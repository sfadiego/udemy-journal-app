
import Swal from 'sweetalert2'
import { db } from '../../firebase/firebase-config';
import { fileUpload } from '../../helpers/fileUpload';
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
        
        // if(!note.url ){
        //     delete note.url
        // }

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


export const startUploading = (file) => {
    return async (dispatch, getState) => {
        const { active: activeNotes } = getState().notes;
        
        Swal.fire({
            title:'uploading',
            text:'Please wait...',
            showConfirmButton: false,
            allowOutsideClick:false,
            willOpen:()=>{
                Swal.showLoading();
            }
        });

        const file_url = await fileUpload(file);
        activeNotes.url = file_url;
        dispatch(startSaveNote(activeNotes));
        
        Swal.close();
    }
}