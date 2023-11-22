import { combineReducers } from "redux";

import cakeReducer from "./Cake/CakeReducer";
import iceCreamReducer from "./IceCream/IceCreamReducer";
import { userReducer } from "./User/userReducer";

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    user : userReducer,
})

export default rootReducer;