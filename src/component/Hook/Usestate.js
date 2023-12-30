import React, { useEffect, useState } from 'react'
import './hover.css'

function Usestate() {
    const [myNum,setMyNum]=useState(0);   //useState=========================================================

    useEffect(()=>{                       //useEffect========================================================
        document.title=`Chat(${myNum})`
    })
  return (
    <>
      <div className="center-div">
        <p>{myNum}</p>
        <div className='btn ' onClick={()=> setMyNum(myNum+1)}>
        <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR</div>
        <div className='btn' onClick={()=> myNum > 0 ?setMyNum(myNum-1) : setMyNum(0)}>
        <span></span>
          <span></span>
          <span></span>
          <span></span> 
            DECR</div>
      </div>
    </>
  )
}

export default Usestate
