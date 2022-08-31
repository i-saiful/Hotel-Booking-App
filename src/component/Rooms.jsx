import React from 'react';
import { useNavigate } from 'react-router-dom'

function Rooms({ room }) {
    const navigate = useNavigate();

    const handleClick = room => {
        navigate(`/room/${room.roomId}`, {state: {room}})
    }

    return (
        <div className='p-2'>
            <div className='card p-0' onClick={() => handleClick(room)}>
                <img src={room.roomImg} className="card-img-top" alt={room.roomName} />
                <div className="card-body">
                    <h5 className="card-title">{room.roomName}</h5>
                </div>
            </div>
        </div>
    )
}

export default Rooms