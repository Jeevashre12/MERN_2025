import React, { useState ,useEffect} from 'react'

const Effect2 = () => {
    const [user,setUser]=useState([]);
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json()) 
      .then(data => setUser(data))
      
  }, []);
  return (
    <div>
      <ol>
        {user.map((data)=>(
            <>
            <li>{data.id}</li>
            <li>{data.name}</li>
            <li>{data.email}</li>
            </>
        ))}
      </ol>
    </div>
  )
}

export default Effect2
