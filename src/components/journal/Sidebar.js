import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { JournalEntries } from './JournalEntries'
import { startLogout } from '../actions/auth';
import { startNewNotes } from '../actions/notes';

export const Sidebar = () => {
    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth)
    const handleLogOut = () => {
        dispatch(startLogout())
    }

    const handleAddNewEntry = () => {
        dispatch(startNewNotes());
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="fas fa-moon"></i>
                    <span>{name}</span>
                </h3>
                <button onClick={handleLogOut} className="btn">Logout</button>
            </div>
            <div onClick={handleAddNewEntry} className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">new entry</p>
            </div>
            <JournalEntries />
        </aside>
    )
}
