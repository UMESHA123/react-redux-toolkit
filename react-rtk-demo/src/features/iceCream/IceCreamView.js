import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {ordered,resStock} from '../iceCream/iceCream'

function IceCreamView() {
  const numOfIceCream = useSelector((state)=>state.iceCream.numOfIceCream)
  const dispatch = useDispatch()
  return (
    <div>
        <h1>numOfIceCream: {numOfIceCream}</h1>
        <button onClick={()=>dispatch(ordered())}>Buy iceCream</button>
        <button onClick={()=>dispatch(resStock(1))}>Restock iceCream</button>
    </div>
  )
}

export default IceCreamView