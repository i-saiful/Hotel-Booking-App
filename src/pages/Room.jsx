import React from 'react';
import { useLocation } from 'react-router-dom'

function Room() {
    const { roomName, roomImg, roomDesciption } = useLocation().state.room;

    return (
        <div className='container mt-5'>
            <div className="card">
                <img src={roomImg} alt={roomName} className='card-img-top' />
                <div className="card-body">
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className="card-title m-0 fs-4"> {roomName} </div>
                        <button className='d-inline-block btn btn-primary'>Book now</button>
                    </div>
                    <p className='card-text mt-3'>{roomDesciption}</p>
                </div>
            </div>
        </div>
    )
}

export default Room