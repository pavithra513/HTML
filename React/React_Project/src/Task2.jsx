import React from 'react'

const Task2 = () => {
    let info=[{ID:"1",Name:"pavi",Role:"developer"},
        {ID:"2",Name:"nishu",Role:"analyst"

    }]

    
  return (
    <div>
        <ul>
            {info.map((fruit)=>(
                <li key={fruit.ID}>
                    <h1>{fruit.ID}</h1>
                    <h1>{fruit.Name}</h1>
                    <h1>{fruit.Role}</h1>

                </li>
            ))}
        </ul>
    </div>
  )
}

export default Task2