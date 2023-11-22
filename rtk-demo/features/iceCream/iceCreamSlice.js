const {createSlice} = require('@reduxjs/toolkit')

const initialState = {
    numOfIceCream : 10,
}

const iceCreamSlice = createSlice({
    name : "iceCream",
    initialState,
    reducers : {
        ordered : (state) => {
            state.numOfIceCream--
        },
        reStock : (state,action)=>{
            state.numOfIceCream += action.payload
        }
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions