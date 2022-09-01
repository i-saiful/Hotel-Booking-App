import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import roomReducer from "./roomReducer";

export default configureStore({
    reducer: {
        rooms: roomReducer,
        auth: authReducer
    }
})