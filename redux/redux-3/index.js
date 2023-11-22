//import redux
const redux = require('redux');

const createStore = redux.createStore;

//action is a type property
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

//action creater will return the object.
const orderCake = () => {
    return {
        type : CAKE_ORDERED,
        quantity : 1,
    }
}

const restockedCake = (qty = 1) => {
    return {
        type :CAKE_RESTOCKED,
        quantity : qty,
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
        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCake : state.numOfCake + action.quantity,
            }
        default:
            return state;
    }
}

const store = createStore(cakeReducer);
console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

// store.dispatch(orderCake())
// store.dispatch(orderCake())

// store.dispatch(restockedCake(3));

//or 

const actions = redux.bindActionCreators({orderCake,restockedCake},store.dispatch)

actions.orderCake()
actions.orderCake()
actions.orderCake()

actions.restockedCake(3)

unsubscribe();