import React from 'react'

const Home = ({items,user}) => {
  return (
    <div>
      <ol>
        {items.map((fruits)=>(<li>{fruits}</li>))}
      </ol>
      <ol>
        <h1>{user.username}</h1>
         <h1>{user.password}</h1>
      </ol>
      
    </div>
  )
}

export default Home
