
import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to="/"> Home |</Link>
         <Link to="/About"> About |</Link>
          <Link to="/Student">  Student|</Link>
      </nav>
    </div>
  )
}

export default Navigation