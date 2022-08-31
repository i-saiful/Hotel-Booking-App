import React from 'react'
import {Link} from 'react-router-dom'

function Navigation() {
    return (
        <div className='navbar bg-light'>
            <div className="container">
                <Link to="/" className='text-decoration-none navbar-brand' >
                    <h1 className='font-monospace'>Hotel Booking App</h1>
                </Link>
                <div className='d-flex align-items-center'>
                    <button className='nav-item btn btn-primary'>Book now</button>
                    <p className='nav-item m-0 ms-5'>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Navigation