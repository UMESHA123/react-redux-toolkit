//import redux

const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');


//create apply middle ware
const applyMiddleware = redux.applyMiddleware;
//create createstore
const createStore = redux.createStore;

//action 3-actions
//FETCH_USERS_REQUEST
//  loading true
//FETCH_USERS_SUCESS
//loading false
// user = user.data
//FETCH_USERS_FAILUR
//loading = false
//user = error


const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCESS = "FETCH_USERS_SUCESS";
const FETCH_USERS_FAILUR = "FETCH_USERS_FAILUR"


const featchUserRquiest = () => {
    return {
        type : FETCH_USERS_REQUEST,
    }
}
const featchUserSucess = (users) => {
    return {
        type : FETCH_USERS_SUCESS,
        paload : users
    }
}
const fetchUserFailur = (error) => {
    return {
        type : FETCH_USERS_FAILUR,
        paload : error

    }
}

//initial value object
const initialstate = {
    loading : false,
    users : [],
    error : "",
}

const reducer = (state = initialstate,action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading : true,
            }
        case FETCH_USERS_SUCESS:
            return {
                ...state,
                loading : false,
                users : action.paload,
                error : ''
            }
        case FETCH_USERS_FAILUR:
        return {
            ...state,
            loading : false,
            users : [],
            error : action.paload
        }
        default:
            return state;
    }
}

const featchUsers = () =>{
    return function(dispatch){
        dispatch(featchUserRquiest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) =>{
                //res
                const users = res.data.map((user)=> user.id);
                dispatch(featchUserSucess(users))
            })
            .catch((error) => {
                //error
                dispatch(fetchUserFailur(error.message));
            })
    }
}

const store = createStore(reducer,applyMiddleware(thunkMiddleware));
store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(featchUsers())

//in async operation we dont need to add the unsubscribe
//because is will excute thet unsubscribe method before executing the feacthUsers 
//method so it subscribe the action and hence nothing is diaplyed in the screen.