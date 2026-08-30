import React from 'react'

const Task1 = () => {
    let info=["apple","mango","banana"]
  return (
    <div>
        <ol type="number">
       {info.map((shop,i)=>(
        <li key={i}>
            <h1>{shop}</h1>
             
        </li>
       ))}
       </ol>
    </div>
  )
}

export default Task1