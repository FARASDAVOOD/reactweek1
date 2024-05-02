import React, { useState } from 'react'

const Prevouscounter = () => {
    const[count,setCount]=useState(0);
     return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+1</button>
        <button onClick={()=>{
            for(let i=0;i<5;i++){
                setCount(p=>p+1)
                setCount(count=>count+1)
                setCount(count=>count+1)
            }
        }}>+5</button>
     </div>
  )
}

export default Prevouscounter;
