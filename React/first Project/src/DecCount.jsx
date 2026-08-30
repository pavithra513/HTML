import {useState} from 'react'

import React from 'react'

const DecCount = () => {
    const[count,setCount]=useState(0);

    let cont = ()=>{
        setCount(count-1);
    }
  return (
    <div>
        <button onClick={cont}>Click me</button>
        <p>{count}</p>

    </div>
  )
}

export default DecCount