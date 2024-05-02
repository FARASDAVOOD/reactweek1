import React, { useEffect, useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);

    useEffect(()=>{
        console.log("mounding"+count);
       return ()=>{
        console.log("unmounding"+count);
       }
        }
    ,[count])
  return (
    <div>
      <h1>machaneee count : {count}</h1>

      <button onClick={()=>setCount(count+1)}>increase</button>

    </div>
  )
}

export default Counter;
