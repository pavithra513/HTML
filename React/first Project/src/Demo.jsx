import { useState } from "react";

let Demo=()=>{
    const[demo,setDemo]=useState("");
    return(
        <>
        <input type="text" 
          value={demo}
          onChange={(e)=>{
            console.log(e);
            setDemo(e.target.value);
          }}/>
          <p>hello,{demo}</p>
        </>
    )
}
export default Demo