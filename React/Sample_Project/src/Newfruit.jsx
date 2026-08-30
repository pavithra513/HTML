

import React from 'react'

const Newfruit = () => {
    const fruit=[
        "Apple",
        "orange",
        "mango",
        "papaya",
        "melon"
    ]
  return (
    <div>
        <ul>
        {fruit.map((list,i)=>(
            <li key={i}>
                <p>{list}</p>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Newfruit