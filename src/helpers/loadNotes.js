import { db } from '../firebase/firebase-config';

export const loadNotes = async (uid = '') => {
    const notessnap = await db.collection('journal').get();
    const notes = [];
    // console.log(notessnap.docs);
    notessnap.docs.map(snapHijo => {
        // console.log(snapHijo.data());
        //     console.log(snapHijo.data());
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })

    return notes;
}