import { db } from '../firebase/firebase-config';

export const loadNotes = async (uid = '') => {
    const notes_collection = await db.collection('journal').get();
    const notes = [];
    
    notes_collection.forEach(item => {
        notes.push({
            id: item.id,
            ...item.data()
        })
    })

    return notes;
}