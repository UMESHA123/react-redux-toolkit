import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {ordered,resStock} from '../cake/cakeSlice'

function CakeSliceView() {
  const numOfCakes = useSelector((state)=>state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
        <h1>numOfCakes :{numOfCakes} </h1>
        <button onClick={()=>dispatch(ordered())}>Buy cake</button>
        <button onClick={()=>dispatch(resStock(2))}>restock cake</button>
    </div>
  )
}

export default CakeSliceView