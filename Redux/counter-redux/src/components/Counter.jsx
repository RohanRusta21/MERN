import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';



const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div className=' flex bg-emerald-700 text-white gap-5 justify-center items-center w-full h-[100vh] font-bold text-4xl'>
    
        <button className=' bg-emerald-900 p-4' onClick={()=> dispatch(increment())}>+</button> 
        <div>{count}</div>
        <button className=' bg-emerald-900 p-4' onClick={()=> dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter