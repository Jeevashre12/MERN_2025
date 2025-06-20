import React from 'react'
import { Link } from 'react-router-dom'
const Hooks = () => {
  return (
    <div className='style2'>
      <Link to='/State'>useState</Link>
      
      <Link to='/effect'>useEffect</Link>
      <Link to='/effect2'>useEffect2</Link>
    </div>
  )
}

export default Hooks
