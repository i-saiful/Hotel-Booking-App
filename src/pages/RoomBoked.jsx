import React from 'react';
import { useSelector } from 'react-redux';
import Rooms from '../component/Rooms';

function RoomBoked() {
    const roomList = useSelector(state => state.rooms.roomList)

    const rooms = roomList.map(room =>
        <Rooms key={room.roomId} room={room} handleRoomBook={true} />
    )

    let leftRoom = roomList.filter(room => room.isBooked)

    return (
        <div className="container">
            <div className='d-flex align-items-center justify-content-center mt-3'>
                <div className='mx-3'>Total Room: <span className='fw-bold'>{rooms.length}</span></div>
                <div className='mx-3'>Room Left: <span className='fw-bold'>{rooms.length - leftRoom.length}</span></div>
                <div className='mx-3'>Room Book: <span className='fw-bold'>{leftRoom.length}</span></div>
            </div>
            <div className='row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-4'>
                {rooms}
            </div>
        </div>
    )
}

export default RoomBoked 