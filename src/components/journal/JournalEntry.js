import React from 'react'

export const JournalEntry = ({ value }) => {
    return (
        <div className="journal__entry">
            <div className="journal__entry-picture" style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg)'
            }}>
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">Un nuevo dia</p>
                <p className="journal__entry-content">
                    Non ut duis deserunt fugiat enim officia dolore sint enim.
                </p>
            </div>
            <div className="journal__entry-date-box">
                Lunes <span>25</span>
            </div>
        </div>
    )
}
