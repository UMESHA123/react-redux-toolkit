//asy action

const { bindActionCreators, createStore, applyMiddleware } = require("redux");
const axios = require('axios');
const reduxLogger = require('redux-logger');
const logger  = reduxLogger.createLogger();
const thunkMiddleware = require('redux-thunk').default

const FEATCH_REQUIEST = 'FEATCH_REQUIEST';
const FEATCH_SUCESS = 'FEATCH_SUCESS';
const FEATCH_ERROR = 'FEATCH_ERROR';

const featchEReqiest = () =>{
    return{
        type : FEATCH_REQUIEST,
    }
}
const featchSucess = (users) =>{
    return{
        type : FEATCH_SUCESS,
        payload : users,
    }
}

const featchError = (error) =>{
    return{
        type : FEATCH_ERROR,
        payload : error,
    }
}

const initialstate = {
    loading : false,
    users : [],
    error : '',
}

const userReducer = (state=initialstate,action) =>{
    switch(action.type){
        case FEATCH_REQUIEST:
            return{
                ...state,
                loading : true,
            }
        case FEATCH_SUCESS:
            return{
                loading : false,
                usres : action.payload,
                error : '',
            }
        case FEATCH_ERROR:
            return{
                loading : false,
                users : [],
                error : action.payload,
            }
        default:
            return state;
    }
}

const featchUsers = () =>{
    return (dispatch)=>{
        dispatch(featchEReqiest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res =>{
                const users = res.data.map((user) => user.name)
                dispatch(featchSucess(users))
            })
            .catch(error => {
                dispatch(featchError(error.message))
            })
    }
}


const store = createStore(userReducer,applyMiddleware(logger,thunkMiddleware));

const unsubscribe = store.subscribe(() => {})
const actions = bindActionCreators({featchUsers},store.dispatch)

actions.featchUsers()

unsubscribe();