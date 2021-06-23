import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { activeNote } from '../actions/notes'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    const { active: note } = useSelector(state => state.notes)
    const dispatch = useDispatch();
    const [formValues, handleInputChange, reset] = useForm({
        title: note.title,
        body: note.body,
        url: note.url,
        date: new Date().getTime()
    })

    const { title, body, url } = formValues;
    const activeId = useRef(note.id)
    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset])

    useEffect(() => {
        dispatch(activeNote(note.id, { ...formValues }))
    }, [formValues, dispatch])


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
                    <img src={` ${note.url ? note.url : 'https://picsum.photos/id/684/600/400'}`} />
                </div>
            </div>
        </div>
    )
}
