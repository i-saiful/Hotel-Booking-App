import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { roomBook } from '../redux/roomReducer';

function Rooms({ room }) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { roomId, booked, roomName } = room;
    const [isDisable, setIsDisable] = useState(booked)
    // console.log(roomBook);

    const handleClick = roomId => {
        navigate(`/room/${roomId}`, { state: { roomId } })
    }

    const handleBook = roomId => {
        setIsDisable(!isDisable)
        dispatch(roomBook(roomId))
    }

    let cardBody = (
        <>
            <h5 className="card-title">{roomName}</h5>
            <div className='d-flex justify-content-between flex-wrap'>
                <button className='btn btn-outline-info mt-1 mx-auto'
                    onClick={() => handleClick(roomId)}>
                    View Details</button>
                <button disabled={isDisable}
                    className="btn btn-outline-primary mt-1 mx-auto"
                    onClick={() => handleBook(roomId)}>
                    Book now</button>
            </div>
        </>
    )

    return (
        <div className='p-2'>
            <div className='card p-0'>
                <div className="position-absolute">
                    <span className={isDisable ?
                        "badge bg-danger ms-2 mt-2" : "badge bg-primary ms-2 mt-2"}>
                        {isDisable ? "Not Available" : "Available"}
                    </span>
                </div>
                <img src={room.roomImg[0]}
                    className="card-img-top" alt={roomName}
                    style={{ height: '14rem' }} />
                <div className="card-body">
                    {cardBody}
                </div>
            </div>
        </div>
    )
}

export default Rooms