import React from 'react'
import { useState, useRef, useEffect } from 'react'

const Ref = () => {
    const [count,setCount] = useState(0);
    const value = useRef(0);
    // const handleElement = () =>{
    //     setCount(count + 1);
    // }
    useEffect(() => {
        setTimeout(() =>{
            value.current = value.current + 1
        },2000)
    })
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>{value.current}</h1>
    </div>
  )
}

export default Ref