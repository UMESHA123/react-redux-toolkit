import { BUY_ICE_CREAM } from "./IceCreamType";

const initialIceCreatState = {
    numOfIceCream : 200,
}

const iceCreamReducer = (state=initialIceCreatState,action) => {
    switch(action.type){
        case BUY_ICE_CREAM:
            return {
                ...state,
                numOfIceCream : state.numOfIceCream - action.payload,
            }
        default:
            return state;
    }
}   
export default iceCreamReducer;

