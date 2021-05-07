import { db } from '../firebase/firebase-config';

export const loadNotes = async (uid = '') => {
    const notessnap = await db.collection('journal').get();
    const notes = [];
    
    notessnap.forEach(snapHijo => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })

    return notes;
}