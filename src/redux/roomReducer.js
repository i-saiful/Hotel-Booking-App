import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    roomList: [],
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
        })
    }
})

export const getRooms = () => dispatch => {
    dispatch(roomsLoading(true))
    const endpoint = 'https://hotel-booking-app-e813f-default-rtdb.firebaseio.com/rooms.json'
    fetch(endpoint).then(response => response.json()).then(data => {
        let rooms = []
        for(let key in data) {
            rooms.push({...data[key], roomId: key, isBooked: false})
        }
        dispatch(addRooms(rooms))
        dispatch(roomsLoading(false))
    }).catch(() => dispatch(roomsLoading(false)))
}

export const {addRooms, roomsLoading} = roomReducer.actions;
export default roomReducer.reducer;