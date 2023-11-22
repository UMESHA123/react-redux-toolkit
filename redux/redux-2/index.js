//import redux
const redux = require('redux');

const createStore = redux.createStore;

//action is a type property
const CAKE_ORDERED = "CAKE_ORDERED";

//action creater will return the object.
const orderCake = () => {
    return {
        type : CAKE_ORDERED,
        quantity : 1,
    }
}

initialstate = {
    numOfCake : 10,
}

const cakeReducer = (state = initialstate,action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCake : state.numOfCake - action.quantity,
            }
        default:
            return state;
    }
}

const store = createStore(cakeReducer);
console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
unsubscribe();