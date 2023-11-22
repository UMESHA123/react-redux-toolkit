 import { BUY_CAKE } from "./CakeTypes"
 
 const initialSate = {
    numOfCakes : 10,
 }

 const cakeReducer = (state = initialSate,action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                numOfCakes : state.numOfCakes - 1,
            }
        default:
            return state;
    }
 }
export default cakeReducer;