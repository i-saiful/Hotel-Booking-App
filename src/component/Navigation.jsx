import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { logout } from '../redux/authReducer'

function Navigation() {
    const dispatch = useDispatch()
    return (
        <div className='navbar bg-light'>
            <div className="container">
                <Link to="/" className='text-decoration-none navbar-brand' >
                    <h1 className='font-monospace'>Hotel Booking App</h1>
                </Link>
                <div className='d-flex align-items-center'>
                    <Link to="/roombooked" className='nav-item btn btn-primary'>Room Book</Link>
                    <p className='btn btn-outline-primary m-0 ms-3'
                    onClick={() => dispatch(logout())}>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Navigation