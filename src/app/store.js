import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
const initialState = {}

const store = configureStore({
    initialState,
    reducer : {
        auth : authReducer
    }
})

export default store;