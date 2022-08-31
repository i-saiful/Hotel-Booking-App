import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { roomBook } from '../redux/roomReducer';

function Rooms({ room, handleRoomBook = false }) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { roomId, isBooked, roomName, roomImg } = room
    // console.log(roomBook);

    const handleClick = room => {
        navigate(`/room/${roomId}`, { state: { room } })
    }

    const handleBook = roomId => {
        dispatch(roomBook(roomId))
    }

    let cardBody = null
    if (handleRoomBook) {
        cardBody = (
            <button
            disabled={isBooked}
                className='btn btn-primary'
                onClick={() => handleBook(roomId)} >
                Book now
            </button>
        )
    } else {
        cardBody = (
            <h5 className="card-title">{roomName}</h5>
        )
    }

    return (
        <div className='p-2'>
            <div className='card p-0'>
                <img src={roomImg} onClick={() => handleClick(room)}
                    className="card-img-top" alt={roomName} />
                <div className="card-body">
                    {cardBody}
                </div>
            </div>
        </div>
    )
}

export default Rooms