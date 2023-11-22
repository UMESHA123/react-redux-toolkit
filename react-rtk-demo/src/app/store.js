import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/iceCream/iceCream'
import userReducer from '../features/users/users'

const store = configureStore({
    reducer:{
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
})
export default store;