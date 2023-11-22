import {
  FEATCH_USERS_FAILURE,
  FEATCH_USERS_SUCESS,
  FEATCH_USERS_REQUIEST,
} from "./userTypes";
import axios from 'axios'

const featchUsersRequiest = () => {
    return {
        type : FEATCH_USERS_REQUIEST,
    }
}
const featchUsersSucess = (users) => {
    return {
        type : FEATCH_USERS_SUCESS,
        payload : users,
    }
}
const featchUsersFailure = (error) => {
    return {
        type : FEATCH_USERS_FAILURE,
        payload : error,
    }
}

export const featchUser = () => {
    return (dispatch)=>{
        dispatch(featchUsersRequiest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data
                dispatch(featchUsersSucess(users))
            })
            .catch(error=>{
                const errorMsg = error.message
                dispatch(featchUsersFailure(errorMsg))
            })
    }
}
