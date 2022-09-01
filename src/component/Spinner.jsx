import React from 'react'

function Spinner() {
    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100 bg-light'>
            <div className="spinner-border text-primary" style={{ width: '10rem', height: '10rem' }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner