import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const featchUsers = createAsyncThunk('user/featchUsers',()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => res.data)

})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(featchUsers.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(featchUsers.fulfilled,(state,action)=>{
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(featchUsers.rejected,(state,action)=>{
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
    
})

export default userSlice.reducer