import React from 'react'

function Navigation() {
    return (
        <div className='navbar bg-light'>
            <div className="container">
                <h1 className='navbar-brand'>Hotel Booking App</h1>
                <div className='d-flex align-items-center'>
                    <button className='nav-item btn btn-primary'>Book now</button>
                    <p className='nav-item m-0 ms-5'>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Navigation