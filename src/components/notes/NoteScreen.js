import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input className="notes__title-input" type="text" placeholder="some awesome"></input>
                <textarea placeholder="What happened today?" className="notes__title-textarea">
                    
                </textarea>
                <div className="notes__image">
                    <img src="https://picsum.photos/id/684/600/400" alt="" />
                </div>
            </div>
        </div>
    )
}
