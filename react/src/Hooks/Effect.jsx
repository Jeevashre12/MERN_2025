import React, { useEffect, useState } from 'react'

const Effect = () => {
  const [count,setCount]=useState(0)
  useEffect(()=>{
     setTimeout(()=>{
        setCount(count+1)
  },3000)
},[count])
    
  const handleIncrement=()=>{
        setCount(count+1)
    }
        const handleDecrement=()=>{
            setCount(count-1)

        
    }
    const handleReset=()=>{
        setCount(0)
    }
    
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Effect
