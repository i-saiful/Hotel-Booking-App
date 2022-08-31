import { createSlice } from "@reduxjs/toolkit";
import roomList from '../roomList.json';

const initialState = {
    roomList: roomList,
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
                { ...room, isBooked: !room.isBooked } : {...room})
            return {
                ...state,
                roomList: newList
            }
        }
    }
})

export const { addRooms, roomsLoading, roomBook } = roomReducer.actions;
export default roomReducer.reducer;