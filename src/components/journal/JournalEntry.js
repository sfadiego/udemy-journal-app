import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../actions/notes';

export const JournalEntry = ({ id, body, title, date, url }) => {
    const noteDate = moment(date)
    const dispatch = useDispatch()
    const handleActiveNote = () => {
        dispatch(activeNote(id, {
            title,
            body,
            date
        }))
    }

    return (
        <div onClick={handleActiveNote} className="journal__entry">
            {
                url &&
                <div className="journal__entry-picture" style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg)'
                }}>
                </div>
            }
            <div className="journal__entry-body">
                <p className="journal__entry-title">{title}</p>
                <p className="journal__entry-content">
                    {body}
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd')} </span>
                <h4>{noteDate.format('Do')}</h4>
            </div>
        </div>
    )
}
