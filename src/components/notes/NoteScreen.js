import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    const { active: note } = useSelector(state => state.notes)

    const [formValues, handleInputChange] = useForm({
        title: note.title,
        body: note.body,
        date: new Date().getTime()
    })

    const { title, body } = formValues;

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    value={title}
                    onChange={handleInputChange}
                    name='title'
                    className="notes__title-input"
                    type="text"
                    placeholder="some awesome" />
                <textarea placeholder="What happened today?"
                    onChange={handleInputChange}
                    name='body'
                    value={body}
                    className="notes__title-textarea">
                </textarea>
                <div className="notes__image">
                    <img src="https://picsum.photos/id/684/600/400" alt="" />
                </div>
            </div>
        </div>
    )
}
