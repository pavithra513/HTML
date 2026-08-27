import {useState} from "react";

function Counter(){
    const[count,setCount]=useState(0);
    const[word,setWord]=useState("hello");
    const[letter,setLetter]=useState("")
    let hi=()=>{
        setCount(count+1);

    }



let he=()=>{
    setCount(count-1);


}
let ret=()=>{
    setCount(0);
    setWord("welcome to react");
}
return(
    <>
    <h1>i am counter</h1>
    <button onClick={hi}>Click +</button>
    <p>{count}</p><br/>
    <button onClick={he}>Click - </button>
    <button type="reset" onClick={ret}>Reset</button>
    <p>{word}</p>
    <br/>
    <h1>input count</h1>
    <input  type="text"
    value={letter}
    />
    </>
)
}

export default Counter;