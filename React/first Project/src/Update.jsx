import {useState} from "react";

let Update=()=>{
    const[name,setName]=useState({
        name:"",
       
        role:""
        })
       let handleChange=(e)=>{
        console.log(e);

        const{name,value}=e.target;
        setName({...name,[name]:value})
       }
        return(
        <>
        <input type="text"
        name="name"
        value={name.name}
        onChange={handleChange}/>
            
        
        
        
        <input type="text"
        name="role"
        value={name.role}
        onchange={handleChange}/>
        <p>hello pavi{name.name}</p>
      
        </>

        )
}
export default Update;
