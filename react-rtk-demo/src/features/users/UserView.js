import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react';
import { featchUsers } from './users';


function UserView() {
    const user = useSelector(state=> state.user)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(featchUsers())
    },[])
    return (
    <div>
        <h1>user name</h1>
        {
            user.users.map((user,index)=> <h1 key={index}>{user.name}</h1>)
        }
    </div>
  )
}

export default UserView