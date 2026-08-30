import React from 'react'

const Student = ({detail}) => {
    let {name,age,course}=detail;
  return (
    <>
    <div>
        <h1>Name:{name}</h1>
        <h1>Age:{age}</h1>
        <h1>Course:{course}</h1>
        
    </div>
    </>
  );
}

export default Student;



