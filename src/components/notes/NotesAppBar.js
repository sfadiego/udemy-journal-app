import React from 'react'
import { useSelector } from 'react-redux';

export const NotesAppBar = () => {
    const { active } = useSelector(state => state.notes)
    const handleSave = () => {
        // console.log("salvar", active);
        
    }

    return (
        <div className="notes__appbar">
            <span>28 agosto 2020</span>
            <div>
                <button className="btn">Picture</button>
                <button onClick={handleSave} className="btn">Save</button>
            </div>
        </div>
    )
}
