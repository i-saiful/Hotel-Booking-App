import React from 'react';
import Rooms from '../component/Rooms';
import { useSelector } from 'react-redux';
import CategoryList from '../component/CategoryList';
import { useState } from 'react';

function Home() {
    const roomList = useSelector(state => state.rooms.roomList)
    const [filterRooms, setFilterRooms] = useState(roomList)

    const rooms = filterRooms.map(room =>
        <Rooms key={room.roomId} room={room} />
    )

    const handleFilter = e => {
        let list = null
        if (e === 'All') {
            list = roomList;
        } else {
            list = roomList.filter(room => room.category === e)
        }
        setFilterRooms(list)
    }

    return (
        <div className="container">
            <CategoryList handleFilter={handleFilter} />
            <div className='row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-4'>
                {rooms}
            </div>
        </div>
    )
}
export default Home