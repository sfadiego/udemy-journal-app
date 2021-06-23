import React from 'react'
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { startSaveNote, startUploading } from '../actions/notes';

export const NotesAppBar = () => {
    const { active: note } = useSelector(state => state.notes)
    const dispatch = useDispatch()
    const date = moment().format('D MMMM YYYY')

    const handleSave = () => {
        dispatch(startSaveNote(note))
    }
    const handlePictureClick = () => {
        document.querySelector("#fileselector").click(); //simula el click en type=file
    }

    const handleFileChange = ({ target }) => {
        const file = target.files[0];
        if (file) {
            dispatch(startUploading(file))
        }
    }


    return (
        <div className="notes__appbar">
            <span>{date}</span>
            <div>
                <input onChange={handleFileChange} type='file' id='fileselector' style={{ display: 'none' }}></input>
                <button onClick={handlePictureClick} className="btn">Picture</button>
                <button onClick={handleSave} className="btn">Save</button>
            </div>
        </div>
    )
}
