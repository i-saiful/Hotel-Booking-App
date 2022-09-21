import { createSlice } from "@reduxjs/toolkit";
import roomList from '../roomList.json';

const initialState = {
    roomList: JSON.parse(localStorage.getItem('roomList')) || roomList,
    isLoading: false
}

const roomReducer = createSlice({
    name: 'roomReducer',
    initialState,
    reducers: {
        addRooms: (state, action) => ({
            ...state,
            roomList: [...action.payload]
        }),
        roomsLoading: (state, action) => ({
            ...state,
            isLoading: action.payload
        }),
        roomBook: (state, action) => {
            const roomList = [...state.roomList]
            const newList = roomList.map(room => room.roomId === action.payload ?
                { ...room, booked: !room.booked } : { ...room })
            localStorage.setItem('roomList', JSON.stringify(newList))
            return {
                ...state,
                roomList: newList
            }
        }
    }
})

export const { addRooms, roomsLoading, roomBook } = roomReducer.actions;
export default roomReducer.reducer;