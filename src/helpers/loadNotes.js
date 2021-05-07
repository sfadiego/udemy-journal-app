import { db } from '../firebase/firebase-config';

export const loadNotes = async (uid) => {
    const listado = await db.collection('journal').get();
    const notes = [];
    listado.forEach(snapHijo => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })

    return notes;
}