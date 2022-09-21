import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/authReducer'

function Navigation() {
    const dispatch = useDispatch()
    const roomList = useSelector(state => state.rooms.roomList)

    let leftRoom = roomList.filter(room => room.booked)

    return (
        <div className='navbar bg-light'>
            <div className="container">
                <Link to="/" className='text-decoration-none navbar-brand' >
                    <h1 className='font-monospace'>Hotel Booking App</h1>
                </Link>
                <div className='d-flex align-items-center'>

                    <div className='d-flex align-items-center justify-content-center mt-3'>
                        <div className='mx-3'>Total Room: <span className='fw-bold'>{roomList.length}</span></div>
                        <div className='mx-3'>Room Left: <span className='fw-bold'>{roomList.length - leftRoom.length}</span></div>
                        <div className='mx-3'>Room Booked: <span className='fw-bold'>{leftRoom.length}</span></div>
                    </div>

                    <p className='btn btn-outline-primary m-0 ms-3'
                    onClick={() => dispatch(logout())}>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Navigation