import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/userDetailSlice';



export const store = configureStore({
    reducer: {
        users:userReducer
    },
});