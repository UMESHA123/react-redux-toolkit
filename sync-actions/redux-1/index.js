//import redux
const redux = require("redux");

//create a store
const createStore = redux.createStore;



const BUY_CAKE = "BUY_CAKE" // string constent defines type of the action.

//define our action
//action is an object that has a type property.
//other then type property we also have some property like info.
//method buycake return the action object
function buyCake(){
    return {
        type : BUY_CAKE,
        info : "first redux action",
    }
}


//reducer how apps state changes in response to action sent to store.
//reducer is a function it accepts state and action and return next state of the action
//(prevstate,action) => newstate

initialstate = {
    numOfCakes : 10,
}

const reducer = (state = initialstate,action) =>{
    switch(action.type){
        case "BUY_CAKE":
            return {
                ...state, //first make copy of the state object and then only make change in particualr property
                //this is usefull when we have a more then on state in our store.
                numOfCakes : state.numOfCakes - 1
            }
        default:
            return state;
    }
}



//one store for entore application
//1 responsibility
//2 holds application state
//3 allows access to state vis getState();
//4 allows state to be updated via dispatch(action)
//5 registers the listeners vis subscribe(listener)
//6 handles unregisters of listeners via the function returned by subscribe(listener)

//1
const store = createStore(reducer)
//2 3
console.log("initial state:"+store.getState().numOfCakes);

//4
const unsubscribe = store.subscribe(()=>console.log("updated state:"+store.getState().numOfCakes))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe();