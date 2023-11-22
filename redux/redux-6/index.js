//middleware
//logger this will log the basic information related to redux

const { combineReducers, createStore,applyMiddleware, bindActionCreators } = require("redux");
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const buyCake = (qty=1) =>{
    return{
        type : BUY_CAKE,
        payload : qty,
    }
}
const buyIceCream = (qty=1) => {
    return {
        type : BUY_ICECREAM,
        payload : qty,
    }
}

const cakeInit = {
    numOfCake : 100,
}

const IceCreamInit = {
    numOfIceCream : 100,
}

const cakeReducer = (state = cakeInit,action) => {
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numOfCake : state.numOfCake - action.payload,
            }
        default:
            return state;
    }
}
const IceCreamReducer = (state = IceCreamInit,action) =>{
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numOfIceCream : state.numOfIceCream - action.payload,
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : IceCreamReducer,
})

const store = createStore(rootReducer,applyMiddleware(logger));

const unsubscribe = store.subscribe(() => {});

const actions = bindActionCreators({buyCake,buyIceCream},store.dispatch);
actions.buyCake(3);
actions.buyIceCream(4);

unsubscribe();

