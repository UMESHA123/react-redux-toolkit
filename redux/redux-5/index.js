const { createStore, bindActionCreators } = require("redux");

//action
const EDIT_USER_DATA = 'EDIT_USER_DATA';

//action creater
const editUserAddress = (street = "") => {
    return {
        type : EDIT_USER_DATA,
        payload : street,
    }
}

const userInit = {
    name : 'umesha',
    age : 22,
    address : {
        street : '125 main street',
        area : 'mobsandra',
        cross : '3rd cross',
    },
}


//reducer
const editAddressReducer = (state=userInit,action) => {
    switch(action.type){
        case EDIT_USER_DATA:
            return{
                ...state,
                address : {
                    ...state.address,
                    street : action.payload,
                },
            }
        default:
            return state;
    }
}

const store = createStore(editAddressReducer);

console.log(store.getState())

const unsubscribe = store.subscribe(()=> console.log(store.getState()))

const actions = bindActionCreators({editUserAddress},store.dispatch);

actions.editUserAddress('100 2nd cross main street')

unsubscribe();
