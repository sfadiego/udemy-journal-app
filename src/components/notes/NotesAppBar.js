import React from 'react'
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { startSaveNote } from '../actions/notes';

export const NotesAppBar = () => {
    const { active: note } = useSelector(state => state.notes)
    const dispatch = useDispatch()
    const date = moment().format('D MMMM YYYY')

    const handleSave = () => {
        dispatch(startSaveNote(note))
    }

    return (
        <div className="notes__appbar">
            <span>{date}</span>
            <div>
                <button className="btn">Picture</button>
                <button onClick={handleSave} className="btn">Save</button>
            </div>
        </div>
    )
}
