import { db } from '../firebase/firebase-config';

export const loadNotes = async (uid = '') => {
    const notes_collection = await db.collection(`${uid}/journal/notes`).get();
    const notes = [];
    notes_collection.forEach(item => {
        notes.push({
            id: item.id,
            ...item.data()
        })
    })

    return notes;
}