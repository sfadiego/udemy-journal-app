import React from 'react'
import { useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry';


export const JournalEntries = () => {
    const { notes } = useSelector(state => state.notes)

    return (
        <div className="journal__entries animate__animated animate__fadeInLeftBig animate__faster">
            {
                notes.map(item => <JournalEntry
                    {...item}
                    key={item.id} />
                )
            }
        </div>
    )
}
