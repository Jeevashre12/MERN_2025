import React from 'react'
import { Link } from 'react-router-dom'

const Hooks = () => {
  return (
    <div style = {{display: 'flex', flexDirection: 'column'}}>
        <Link to = '/State'>useState</Link>
        <Link to = '/Effect'>useEffect</Link>
        <Link to = '/Effect2'>useEffect2</Link>
        <Link to = '/Ref'>useRef</Link>
    </div>
  )
}

export default Hooks