const redux = require('redux');

//createStore
const combineReducers = redux.combineReducers;
const createStore = redux.createStore;

//create action string
const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

//BUR CAKE action object
function buyCake(){
   return {
        type : BUY_CAKE,
        info : "multi state action",
   }
}

//BUY ICECREAM
function buyIceCream(){
    return {
        type : BUY_ICE_CREAM,
    }
}

//initialstate
const initialCakestate = {
    numOfCake : 100,
}

const initialIceCreamstate ={
    numOfIceCream : 200,
}

//reducer
//(prevstate,action) => newstate
const cakeReducer = (state = initialCakestate,action) => {
    switch(action.type){
        case "BUY_CAKE":
            return {
                numOfCake : state.numOfCake - 1
            };
        default:
            return state;
    }
}

//icecream reducer
const icecreamReducer = (state=initialIceCreamstate,action) =>{
    switch(action.type){
        case "BUY_ICE_CREAM":
            return {
                ...state,
                numOfIceCream : state.numOfIceCream - 1,
            }
        default:
            return state;
    }
}

//create store
const  rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : icecreamReducer,
})


const store = createStore(rootReducer);

console.log("initial state",store.getState());

const unsuscribe = store.subscribe(()=> console.log("updated state:",store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());


unsuscribe();



