import React from 'react';
import Rooms from '../component/Rooms';
import { useSelector } from 'react-redux';

function Home()  {

        const roomList = useSelector(state => state.rooms.roomList)

        const rooms = roomList.map(room =>
            <Rooms key={room.roomId} room={room} />
        )

        return (
            <div className="container">
                <div className='row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-4'>
                    {rooms}
                </div>
            </div>
        )
}
export default Home