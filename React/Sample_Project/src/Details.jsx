import React from 'react'
import {useState} from 'react'

const Details = () => {
    const[show,setShow]=useState(false);
    let value=()=>{
        setShow(!show );
    }
  return (
    <div>
        <button onClick={value}>{show? "hide details" : "show details"}</button>
        {show &&(
        <div>
        <p>Name:"pavi"</p>
          <p>Course:"design"</p>
            <p>Duration:"7 months"</p>
            </div>
        )
}


    </div>
  )
}

export default Details