import React, { useEffect, useReducer, useState } from 'react'
import './hover.css'

const reducer=(state,action)=>{
   if(action.type==="INCR"){
    state=state+1;
   }
   if(state>0 && action.type==="DECR"){
    state=state-1;
   }
   return state;
}

function UseReducer() {
    const [state,dispatch]=useReducer(reducer,0)
  return (
    <>
      <div className="center-div">
        <p>{state}</p>
        <div className='btn ' onClick={()=>dispatch({type:"INCR"})}>
        <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR</div>
        <div className='btn' onClick={()=>dispatch({type:"DECR"})}>
        <span></span>
          <span></span>
          <span></span>
          <span></span> 
            DECR</div>
      </div>
    </>
  )
}

export default UseReducer
