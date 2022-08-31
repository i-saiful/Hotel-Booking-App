import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./roomReducer";

export default configureStore({
    reducer: {
        rooms: roomReducer
    }
})