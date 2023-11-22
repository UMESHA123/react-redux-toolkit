//import redux
const { createStore, combineReducers, bindActionCreators } = require("redux");

//create cake action
const CAKE_ORDERED = "CAKE_ORDERED";
const RESTORE_CAKE = "RESTORE_CAKE";
const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
const RESTORE_ICE_CREAM = "RESTORE_ICE_CREAM";

//action creater return action object
//for cake action creater
const cakeOrdered = (qty = 1) => {
  return {
    type: CAKE_ORDERED,
    playload: qty,
  };
};
//for restore action
const restoreCake = (qty = 1) => {
  return {
    type: RESTORE_CAKE,
    playload: qty,
  };
};

//for icecream action creater.
const iceCreamOrdered = (qty) => {
  return {
    type: ICE_CREAM_ORDERED,
    playload: qty,
  };
};
//for restore icecream action
const restoredIceCream = (qty = 1) => {
  return {
    type: RESTORE_ICE_CREAM,
    playload: qty,
  };
};

//initialization
//for cake
const cakeInit = {
  numOfCake: 100,
};

//for iceCream.
const iceCreamInit = {
  numOfIceCream: 100,
};
//reducer
//for cake reducer
const cakeReducer = (state = cakeInit, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCake: state.numOfCake - action.playload,
      };
    case RESTORE_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake + action.playload,
      };
    default:
      return state;
  }
};

//for ice cream reducer.
const iceCreamReducer = (state = iceCreamInit, action) => {
  switch (action.type) {
    case ICE_CREAM_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - action.playload,
      };
    case RESTORE_ICE_CREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.playload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

//create a store
const store = createStore(rootReducer);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

const actions = bindActionCreators(
  { cakeOrdered, restoreCake, iceCreamOrdered, restoredIceCream },
  store.dispatch
);

actions.cakeOrdered(3);
actions.iceCreamOrdered(3);
actions.restoreCake(3);
actions.restoredIceCream(3);

unsubscribe();
