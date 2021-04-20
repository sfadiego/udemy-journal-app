import React from 'react'
import { Sidebar } from './Sidebar'
import { NoteScreen } from '../notes/NoteScreen'

export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            <Sidebar/>
            <main>
                <NoteScreen />
            </main>
        </div>
    )
}
